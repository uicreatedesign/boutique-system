<?php

namespace App\Http\Controllers;

use App\Models\Fabric;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FabricController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:view_fabrics')->only(['index']);
        $this->middleware('can:create_fabrics')->only(['store']);
        $this->middleware('can:edit_fabrics')->only(['update']);
        $this->middleware('can:delete_fabrics')->only(['destroy']);
    }

    public function index()
    {
        $fabrics = Fabric::latest()->get();
        return Inertia::render('Fabrics/Index', [
            'fabrics' => $fabrics,
            'canCreate' => auth()->user()->can('create_fabrics'),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'nullable|string|max:255',
            'color' => 'nullable|string|max:255',
            'price_per_meter' => 'nullable|numeric|min:0',
            'quantity_in_stock' => 'required|numeric|min:0',
            'unit' => 'required|string|in:meter,yard,piece',
            'description' => 'nullable|string',
            'status' => 'required|in:available,out_of_stock,discontinued',
        ]);

        Fabric::create($validated);
        return redirect()->back()->with('success', 'Fabric created successfully');
    }

    public function update(Request $request, Fabric $fabric)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'nullable|string|max:255',
            'color' => 'nullable|string|max:255',
            'price_per_meter' => 'nullable|numeric|min:0',
            'quantity_in_stock' => 'required|numeric|min:0',
            'unit' => 'required|string|in:meter,yard,piece',
            'description' => 'nullable|string',
            'status' => 'required|in:available,out_of_stock,discontinued',
        ]);

        $fabric->update($validated);
        return redirect()->back()->with('success', 'Fabric updated successfully');
    }

    public function destroy(Fabric $fabric)
    {
        $fabric->delete();
        return redirect()->back()->with('success', 'Fabric deleted successfully');
    }
}
