<?php

namespace App\Http\Controllers;

use App\Models\MeasurementCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class MeasurementCategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return MeasurementCategory::with('fields')->orderBy('sort_order')->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:191|unique:measurement_categories',
            'description' => 'nullable|string',
            'is_active' => 'boolean',
            'sort_order' => 'nullable|integer',
        ]);

        $validated['slug'] = Str::slug($validated['name']);
        return MeasurementCategory::create($validated);
    }

    public function show(MeasurementCategory $measurementCategory)
    {
        return $measurementCategory->load('fields');
    }

    public function update(Request $request, MeasurementCategory $measurementCategory)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:191|unique:measurement_categories,name,' . $measurementCategory->id,
            'description' => 'nullable|string',
            'is_active' => 'boolean',
            'sort_order' => 'nullable|integer',
        ]);

        $validated['slug'] = Str::slug($validated['name']);
        $measurementCategory->update($validated);
        return $measurementCategory;
    }

    public function destroy(MeasurementCategory $measurementCategory)
    {
        $measurementCategory->delete();
        return response()->json(['message' => 'Category deleted successfully']);
    }
}
