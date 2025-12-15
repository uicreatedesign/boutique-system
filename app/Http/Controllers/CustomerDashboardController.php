<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Barryvdh\DomPDF\Facade\Pdf as PDF;
use App\Models\Order;

class CustomerDashboardController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $customer = $user->customer;

        if (!$customer) {
            abort(403, 'No customer profile linked to this account');
        }

        $orders = collect();
        $measurements = collect();

        if ($user->hasPermission('view_own_orders')) {
            $orders = $customer->orders()
                ->with(['garmentType', 'stitchingStatus', 'payments'])
                ->latest()
                ->get()
                ->map(function($order) {
                    return [
                        'id' => $order->id,
                        'order_number' => $order->order_number,
                        'garment_type' => $order->garmentType->name,
                        'status' => $order->stitchingStatus->name,
                        'status_color' => $order->stitchingStatus->color,
                        'order_date' => $order->order_date,
                        'delivery_date' => $order->delivery_date,
                        'total_amount' => $order->total_amount,
                        'paid_amount' => $order->payments->sum('amount'),
                        'balance_due' => $order->total_amount - $order->payments->sum('amount'),
                    ];
                });
        }

        if ($user->hasPermission('view_own_measurements')) {
            $measurements = $customer->measurements()
                ->with('tailor')
                ->latest()
                ->get();
        }

        return Inertia::render('customer-dashboard/index', [
            'customer' => $customer,
            'orders' => $orders,
            'measurements' => $measurements,
        ]);
    }

    public function showOrder($id)
    {
        $user = auth()->user();
        $customer = $user->customer;

        if (!$user->hasPermission('view_own_orders')) {
            abort(403, 'Permission denied');
        }

        $order = Order::where('customer_id', $customer->id)
            ->with(['garmentType', 'tailor', 'measurement', 'fabric', 'stitchingStatus', 'payments'])
            ->findOrFail($id);

        return Inertia::render('customer-dashboard/order-details', [
            'order' => [
                'id' => $order->id,
                'order_number' => $order->order_number,
                'garment_type' => $order->garmentType->name,
                'tailor' => $order->tailor->name,
                'status' => $order->stitchingStatus->name,
                'status_color' => $order->stitchingStatus->color,
                'order_date' => $order->order_date,
                'delivery_date' => $order->delivery_date,
                'total_amount' => $order->total_amount,
                'discount' => $order->discount,
                'special_instructions' => $order->special_instructions,
                'notes' => $order->notes,
                'payments' => $order->payments,
                'balance_due' => $order->total_amount - $order->payments->sum('amount'),
                'measurement' => $order->measurement,
            ],
        ]);
    }

    public function orders()
    {
        $user = auth()->user();
        $customer = $user->customer;

        if (!$customer || !$user->hasPermission('view_own_orders')) {
            abort(403, 'Permission denied');
        }

        $orders = $customer->orders()
            ->with(['garmentType', 'stitchingStatus', 'payments', 'tailor'])
            ->latest()
            ->paginate(10)
            ->through(function($order) {
                return [
                    'id' => $order->id,
                    'order_number' => $order->order_number,
                    'garment_type' => $order->garmentType->name,
                    'tailor' => $order->tailor->name,
                    'status' => $order->stitchingStatus->name,
                    'status_color' => $order->stitchingStatus->color,
                    'order_date' => $order->order_date,
                    'delivery_date' => $order->delivery_date,
                    'total_amount' => $order->total_amount,
                    'paid_amount' => $order->payments->sum('amount'),
                    'balance_due' => $order->total_amount - $order->payments->sum('amount'),
                ];
            });

        return Inertia::render('customer/orders/index', [
            'orders' => $orders,
        ]);
    }

    public function downloadInvoice($id)
    {
        $user = auth()->user();
        $customer = $user->customer;

        if (!$user->hasPermission('download_own_invoices')) {
            abort(403, 'Permission denied');
        }

        $order = Order::where('customer_id', $customer->id)
            ->with(['customer', 'garmentType', 'tailor', 'measurement', 'fabric', 'stitchingStatus', 'payments'])
            ->findOrFail($id);

        $pdf = PDF::loadView('invoices.order', ['order' => $order])
            ->setPaper('a4', 'portrait');

        return $pdf->download('invoice-' . $order->order_number . '.pdf');
    }
}
