<?php

namespace App\Http\Controllers;

use App\Models\StitchingStatus;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StitchingStatusController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:view_stitching_statuses')->only(['index']);
        $this->middleware('can:create_stitching_statuses')->only(['store']);
        $this->middleware('can:edit_stitching_statuses')->only(['update', 'reorder']);
        $this->middleware('can:delete_stitching_statuses')->only(['destroy']);
    }

    public function index()
    {
        $statuses = StitchingStatus::orderBy('order')->get();
        return Inertia::render('StitchingStatuses/Index', [
            'statuses' => $statuses,
            'canCreate' => auth()->user()->can('create_stitching_statuses'),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'color' => 'required|string|max:7',
            'description' => 'nullable|string',
            'status' => 'required|in:active,inactive',
        ]);

        $validated['order'] = StitchingStatus::max('order') + 1;
        StitchingStatus::create($validated);
        return redirect()->back()->with('success', 'Stitching status created successfully');
    }

    public function update(Request $request, StitchingStatus $stitchingStatus)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'color' => 'required|string|max:7',
            'description' => 'nullable|string',
            'status' => 'required|in:active,inactive',
        ]);

        $stitchingStatus->update($validated);
        return redirect()->back()->with('success', 'Stitching status updated successfully');
    }

    public function reorder(Request $request)
    {
        $validated = $request->validate([
            'statuses' => 'required|array',
            'statuses.*.id' => 'required|exists:stitching_statuses,id',
            'statuses.*.order' => 'required|integer',
        ]);

        foreach ($validated['statuses'] as $status) {
            StitchingStatus::where('id', $status['id'])->update(['order' => $status['order']]);
        }

        return redirect()->back()->with('success', 'Order updated successfully');
    }

    public function destroy(StitchingStatus $stitchingStatus)
    {
        $stitchingStatus->delete();
        return redirect()->back()->with('success', 'Stitching status deleted successfully');
    }
}
