<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\CustomerMeasurement;
use App\Models\MeasurementCategory;
use App\Models\Tailor;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MeasurementController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request)
    {
        $query = CustomerMeasurement::with(['customer', 'tailor']);

        if ($search = $request->get('search')) {
            $query->whereHas('customer', function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%");
            });
        }

        $perPage = min($request->get('per_page', 15), 100);
        $measurements = $query->paginate($perPage);

        return Inertia::render('Measurements/Index', [
            'measurements' => $measurements,
            'search' => $search,
        ]);
    }

    public function create()
    {
        $customers = Customer::select('id', 'name')->get();
        $tailors = Tailor::select('id', 'name')->where('status', 'active')->get();
        $categories = MeasurementCategory::with('fields')->where('is_active', true)->orderBy('sort_order')->get();

        return Inertia::render('Measurements/Create', [
            'customers' => $customers,
            'tailors' => $tailors,
            'categories' => $categories,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'customer_id' => 'required|exists:customers,id',
            'tailor_id' => 'required|exists:tailors,id',
            'measurement_type' => 'required|string',
            'measurements' => 'required|array',
            'notes' => 'nullable|string',
        ]);

        CustomerMeasurement::create($validated);

        return redirect()->route('measurements.index')->with('success', 'Measurement created successfully');
    }

    public function show(CustomerMeasurement $measurement)
    {
        $measurement->load(['customer', 'tailor']);
        $categories = MeasurementCategory::with('fields')->where('is_active', true)->orderBy('sort_order')->get();

        return Inertia::render('Measurements/Show', [
            'measurement' => $measurement,
            'categories' => $categories,
        ]);
    }

    public function edit(CustomerMeasurement $measurement)
    {
        $measurement->load(['customer', 'tailor']);
        $customers = Customer::select('id', 'name')->get();
        $tailors = Tailor::select('id', 'name')->where('status', 'active')->get();
        $categories = MeasurementCategory::with('fields')->where('is_active', true)->orderBy('sort_order')->get();

        return Inertia::render('Measurements/Edit', [
            'measurement' => $measurement,
            'customers' => $customers,
            'tailors' => $tailors,
            'categories' => $categories,
        ]);
    }

    public function update(Request $request, CustomerMeasurement $measurement)
    {
        $validated = $request->validate([
            'customer_id' => 'required|exists:customers,id',
            'tailor_id' => 'required|exists:tailors,id',
            'measurement_type' => 'required|string',
            'measurements' => 'required|array',
            'notes' => 'nullable|string',
        ]);

        $measurement->update($validated);

        return redirect()->route('measurements.index')->with('success', 'Measurement updated successfully');
    }

    public function destroy(CustomerMeasurement $measurement)
    {
        $measurement->delete();
        return redirect()->route('measurements.index')->with('success', 'Measurement deleted successfully');
    }
}