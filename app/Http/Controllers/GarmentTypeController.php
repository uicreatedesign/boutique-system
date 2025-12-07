<?php

namespace App\Http\Controllers;

use App\Models\GarmentType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GarmentTypeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:view_garment_types')->only(['index']);
        $this->middleware('can:create_garment_types')->only(['store']);
        $this->middleware('can:edit_garment_types')->only(['update']);
        $this->middleware('can:delete_garment_types')->only(['destroy']);
    }

    public function index()
    {
        $garmentTypes = GarmentType::latest()->get();
        return Inertia::render('GarmentTypes/Index', [
            'garmentTypes' => $garmentTypes,
            'canCreate' => auth()->user()->can('create_garment_types'),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'status' => 'required|in:active,inactive',
        ]);

        GarmentType::create($validated);
        return redirect()->back()->with('success', 'Garment type created successfully');
    }

    public function update(Request $request, GarmentType $garmentType)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'status' => 'required|in:active,inactive',
        ]);

        $garmentType->update($validated);
        return redirect()->back()->with('success', 'Garment type updated successfully');
    }

    public function destroy(GarmentType $garmentType)
    {
        $garmentType->delete();
        return redirect()->back()->with('success', 'Garment type deleted successfully');
    }
}
