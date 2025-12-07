<?php

namespace App\Http\Controllers;

use App\Models\MeasurementField;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class MeasurementFieldController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request)
    {
        $query = MeasurementField::with('category');
        
        if ($categoryId = $request->get('category_id')) {
            $query->where('category_id', $categoryId);
        }
        
        return $query->orderBy('sort_order')->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'category_id' => 'required|exists:measurement_categories,id',
            'name' => 'required|string|max:191',
            'unit' => 'required|string|max:50',
            'is_required' => 'boolean',
            'sort_order' => 'nullable|integer',
        ]);

        $validated['slug'] = Str::slug($validated['name']);
        return MeasurementField::create($validated);
    }

    public function show(MeasurementField $measurementField)
    {
        return $measurementField->load('category');
    }

    public function update(Request $request, MeasurementField $measurementField)
    {
        $validated = $request->validate([
            'category_id' => 'required|exists:measurement_categories,id',
            'name' => 'required|string|max:191',
            'unit' => 'required|string|max:50',
            'is_required' => 'boolean',
            'sort_order' => 'nullable|integer',
        ]);

        $validated['slug'] = Str::slug($validated['name']);
        $measurementField->update($validated);
        return $measurementField;
    }

    public function destroy(MeasurementField $measurementField)
    {
        $measurementField->delete();
        return response()->json(['message' => 'Field deleted successfully']);
    }
}
