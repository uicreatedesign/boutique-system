<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Customer;
use App\Models\GarmentType;
use App\Models\Tailor;
use App\Models\Fabric;
use App\Models\StitchingStatus;
use App\Models\CustomerMeasurement;
use App\Models\OrderPayment;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Barryvdh\DomPDF\Facade\Pdf as PDF;

class OrderController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:view_orders')->only(['index', 'show']);
        $this->middleware('can:create_orders')->only(['create', 'store']);
        $this->middleware('can:edit_orders')->only(['edit', 'update']);
        $this->middleware('can:delete_orders')->only(['destroy']);
        $this->middleware('can:manage_order_payments')->only(['addPayment']);
        $this->middleware('can:generate_invoices')->only(['invoice', 'measurementSlip']);
    }

    public function index(Request $request)
    {
        $perPage = min($request->get('per_page', 10), 100);
        $orders = Order::with(['customer', 'garmentType', 'tailor', 'stitchingStatus'])
            ->latest()
            ->paginate($perPage);

        return Inertia::render('Orders/Index', [
            'orders' => $orders,
            'canCreate' => auth()->user()->can('create_orders'),
            'canEdit' => auth()->user()->can('edit_orders'),
        ]);
    }

    public function create()
    {
        return Inertia::render('Orders/CreateEnhanced', [
            'customers' => Customer::select('id', 'name')->get(),
            'garmentTypes' => GarmentType::where('status', 'active')->select('id', 'name')->get(),
            'tailors' => Tailor::where('status', 'active')->select('id', 'name')->get(),
            'fabrics' => Fabric::where('status', 'available')->select('id', 'name', 'price_per_meter')->get(),
            'statuses' => StitchingStatus::where('status', 'active')->orderBy('order')->select('id', 'name', 'color')->get(),
            'categories' => \App\Models\MeasurementCategory::with('fields')->where('is_active', true)->orderBy('sort_order')->get(),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'customer_id' => 'required|exists:customers,id',
            'garment_type_id' => 'required|exists:garment_types,id',
            'tailor_id' => 'required|exists:tailors,id',
            'measurement_id' => 'nullable|exists:customer_measurements,id',
            'measurement_option' => 'nullable|in:existing,new,skip',
            'new_measurement_type' => 'nullable|required_if:measurement_option,new',
            'new_measurements' => 'nullable|array',
            'measurement_notes' => 'nullable|string',
            'fabric_id' => 'nullable|exists:fabrics,id',
            'customer_fabric' => 'boolean',
            'customer_fabric_photo' => 'nullable|image|max:2048',
            'stitching_status_id' => 'required|exists:stitching_statuses,id',
            'order_date' => 'required|date',
            'delivery_date' => 'required|date|after_or_equal:order_date',
            'priority' => 'required|in:normal,urgent',
            'total_amount' => 'required|numeric|min:0',
            'advance_paid' => 'nullable|numeric|min:0',
            'discount' => 'nullable|numeric|min:0',
            'special_instructions' => 'nullable|string',
            'notes' => 'nullable|string',
        ]);

        // Create new measurement if option is 'new'
        if ($request->measurement_option === 'new' && !empty($request->new_measurements)) {
            $measurement = CustomerMeasurement::create([
                'customer_id' => $validated['customer_id'],
                'tailor_id' => $validated['tailor_id'],
                'measurement_type' => $validated['new_measurement_type'],
                'measurements' => $validated['new_measurements'],
                'notes' => $validated['measurement_notes'] ?? null,
            ]);
            $validated['measurement_id'] = $measurement->id;
        }

        // Handle customer fabric photo upload
        if ($request->hasFile('customer_fabric_photo')) {
            $path = $request->file('customer_fabric_photo')->store('fabric-photos', 'public');
            $validated['customer_fabric_photo'] = $path;
        }

        $order = Order::create($validated);

        if (!empty($validated['advance_paid']) && $validated['advance_paid'] > 0) {
            OrderPayment::create([
                'order_id' => $order->id,
                'payment_date' => $validated['order_date'],
                'amount' => $validated['advance_paid'],
                'payment_method' => 'cash',
                'payment_type' => 'advance',
            ]);
        }

        return redirect()->route('orders.index')->with('success', 'Order created successfully');
    }

    public function show(Order $order)
    {
        $order->load(['customer', 'garmentType', 'tailor', 'measurement', 'fabric', 'stitchingStatus', 'payments']);
        $order->balance_due = $order->getBalanceDueAttribute();
        
        return Inertia::render('Orders/Show', [
            'order' => $order,
            'canEdit' => auth()->user()->can('edit_orders'),
        ]);
    }

    public function edit(Order $order)
    {
        $order->load(['customer', 'garmentType', 'tailor', 'measurement', 'fabric', 'stitchingStatus']);

        return Inertia::render('Orders/Edit', [
            'order' => $order,
            'customers' => Customer::select('id', 'name')->get(),
            'garmentTypes' => GarmentType::where('status', 'active')->select('id', 'name')->get(),
            'tailors' => Tailor::where('status', 'active')->select('id', 'name')->get(),
            'fabrics' => Fabric::where('status', 'available')->select('id', 'name', 'price_per_meter')->get(),
            'statuses' => StitchingStatus::where('status', 'active')->orderBy('order')->select('id', 'name', 'color')->get(),
        ]);
    }

    public function update(Request $request, Order $order)
    {
        $validated = $request->validate([
            'customer_id' => 'required|exists:customers,id',
            'garment_type_id' => 'required|exists:garment_types,id',
            'tailor_id' => 'required|exists:tailors,id',
            'measurement_id' => 'nullable|exists:customer_measurements,id',
            'fabric_id' => 'nullable|exists:fabrics,id',
            'customer_fabric' => 'boolean',
            'customer_fabric_photo' => 'nullable|image|max:2048',
            'stitching_status_id' => 'required|exists:stitching_statuses,id',
            'order_date' => 'required|date',
            'delivery_date' => 'required|date|after_or_equal:order_date',
            'priority' => 'required|in:normal,urgent',
            'total_amount' => 'required|numeric|min:0',
            'discount' => 'nullable|numeric|min:0',
            'special_instructions' => 'nullable|string',
            'notes' => 'nullable|string',
        ]);

        // Handle customer fabric photo upload
        if ($request->hasFile('customer_fabric_photo')) {
            $path = $request->file('customer_fabric_photo')->store('fabric-photos', 'public');
            $validated['customer_fabric_photo'] = $path;
        }

        $order->update($validated);

        return redirect()->route('orders.show', $order)->with('success', 'Order updated successfully');
    }

    public function destroy(Order $order)
    {
        $order->delete();
        return redirect()->route('orders.index')->with('success', 'Order deleted successfully');
    }

    public function invoice(Order $order)
    {
        $order->load(['customer', 'garmentType', 'tailor', 'measurement', 'fabric', 'stitchingStatus', 'payments']);
        
        $pdf = PDF::loadView('invoices.order', ['order' => $order])
            ->setPaper('a4', 'portrait')
            ->setOption('isHtml5ParserEnabled', true)
            ->setOption('isRemoteEnabled', true);
        return $pdf->download('invoice-' . $order->order_number . '.pdf');
    }

    public function measurementSlip(Order $order)
    {
        $order->load(['customer', 'garmentType', 'tailor', 'measurement', 'fabric']);
        
        $pdf = PDF::loadView('measurement-slip', ['order' => $order])
            ->setPaper('a4', 'portrait')
            ->setOption('isHtml5ParserEnabled', true)
            ->setOption('isRemoteEnabled', true);
        return $pdf->download('measurement-slip-' . $order->order_number . '.pdf');
    }

    public function addPayment(Request $request, Order $order)
    {
        $validated = $request->validate([
            'payment_date' => 'required|date',
            'amount' => 'required|numeric|min:0',
            'payment_method' => 'required|in:cash,card,upi,bank_transfer,other',
            'transaction_reference' => 'nullable|string',
            'payment_type' => 'required|in:advance,partial,full',
            'notes' => 'nullable|string',
        ]);

        $validated['order_id'] = $order->id;
        OrderPayment::create($validated);

        return redirect()->back()->with('success', 'Payment added successfully');
    }

    public function getMeasurements(Request $request)
    {
        $measurements = CustomerMeasurement::where('customer_id', $request->customer_id)
            ->with('tailor')
            ->select('id', 'measurement_type', 'tailor_id', 'created_at')
            ->get();

        return response()->json($measurements);
    }
}
