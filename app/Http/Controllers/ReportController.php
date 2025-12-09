<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Customer;
use App\Models\Tailor;
use App\Models\Fabric;
use App\Models\OrderPayment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Barryvdh\DomPDF\Facade\Pdf as PDF;

class ReportController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:view_reports');
    }

    public function index()
    {
        return Inertia::render('Reports/Index');
    }

    public function sales(Request $request)
    {
        $startDate = $request->get('start_date', now()->startOfMonth()->toDateString());
        $endDate = $request->get('end_date', now()->toDateString());
        $groupBy = $request->get('group_by', 'day');

        $orders = Order::with(['customer', 'garmentType', 'stitchingStatus', 'payments'])
            ->whereBetween('order_date', [$startDate, $endDate])
            ->get();

        $totalRevenue = $orders->sum('total_amount');
        $totalDiscount = $orders->sum('discount');
        $totalPaid = OrderPayment::whereIn('order_id', $orders->pluck('id'))
            ->whereBetween('payment_date', [$startDate, $endDate])
            ->sum('amount');
        $totalPending = $totalRevenue - $totalDiscount - $totalPaid;

        $chartData = $this->getChartData($orders, $groupBy);

        return response()->json([
            'summary' => [
                'total_orders' => $orders->count(),
                'total_revenue' => $totalRevenue,
                'total_discount' => $totalDiscount,
                'total_paid' => $totalPaid,
                'total_pending' => $totalPending,
                'average_order_value' => $orders->count() > 0 ? $totalRevenue / $orders->count() : 0,
            ],
            'orders' => $orders,
            'chart_data' => $chartData,
        ]);
    }

    public function tailorPerformance(Request $request)
    {
        $startDate = $request->get('start_date', now()->startOfMonth()->toDateString());
        $endDate = $request->get('end_date', now()->toDateString());

        $tailors = Tailor::withCount([
            'orders' => function ($query) use ($startDate, $endDate) {
                $query->whereBetween('order_date', [$startDate, $endDate]);
            }
        ])->with([
            'orders' => function ($query) use ($startDate, $endDate) {
                $query->whereBetween('order_date', [$startDate, $endDate])
                    ->with(['stitchingStatus']);
            }
        ])->get();

        $performance = $tailors->map(function ($tailor) {
            $orders = $tailor->orders;
            $completed = $orders->where('stitching_status.name', 'Delivered')->count();
            $pending = $orders->whereNotIn('stitching_status.name', ['Delivered', 'Cancelled'])->count();
            $cancelled = $orders->where('stitching_status.name', 'Cancelled')->count();
            $totalRevenue = $orders->sum('total_amount');

            return [
                'id' => $tailor->id,
                'name' => $tailor->name,
                'total_orders' => $orders->count(),
                'completed_orders' => $completed,
                'pending_orders' => $pending,
                'cancelled_orders' => $cancelled,
                'total_revenue' => $totalRevenue,
                'completion_rate' => $orders->count() > 0 ? round(($completed / $orders->count()) * 100, 2) : 0,
                'skill_level' => $tailor->skill_level,
                'status' => $tailor->status,
            ];
        });

        return response()->json(['data' => $performance]);
    }

    public function customerReport(Request $request)
    {
        $startDate = $request->get('start_date', now()->startOfYear()->toDateString());
        $endDate = $request->get('end_date', now()->toDateString());

        $customers = Customer::withCount([
            'orders' => function ($query) use ($startDate, $endDate) {
                $query->whereBetween('order_date', [$startDate, $endDate]);
            }
        ])->with([
            'orders' => function ($query) use ($startDate, $endDate) {
                $query->whereBetween('order_date', [$startDate, $endDate]);
            }
        ])->get();

        $customerData = $customers->map(function ($customer) {
            $orders = $customer->orders;
            $totalSpent = $orders->sum('total_amount');
            $totalPaid = $orders->sum(function ($order) {
                return $order->payments->sum('amount');
            });

            return [
                'id' => $customer->id,
                'name' => $customer->name,
                'phone' => $customer->phone,
                'email' => $customer->email,
                'total_orders' => $orders->count(),
                'total_spent' => $totalSpent,
                'total_paid' => $totalPaid,
                'pending_amount' => $totalSpent - $totalPaid,
                'last_order_date' => $orders->max('order_date'),
            ];
        })->sortByDesc('total_spent')->values();

        return response()->json(['data' => $customerData]);
    }

    public function inventoryReport(Request $request)
    {
        $fabrics = Fabric::select('id', 'name', 'type', 'color', 'quantity_in_stock', 'unit', 'price_per_meter', 'status')
            ->get();

        $fabricUsage = DB::table('orders')
            ->join('fabrics', 'orders.fabric_id', '=', 'fabrics.id')
            ->select('fabrics.id', 'fabrics.name', DB::raw('COUNT(orders.id) as usage_count'))
            ->where('orders.customer_fabric', false)
            ->groupBy('fabrics.id', 'fabrics.name')
            ->get();

        $inventoryData = $fabrics->map(function ($fabric) use ($fabricUsage) {
            $usage = $fabricUsage->firstWhere('id', $fabric->id);
            $stockValue = $fabric->quantity_in_stock * $fabric->price_per_meter;

            return [
                'id' => $fabric->id,
                'name' => $fabric->name,
                'type' => $fabric->type,
                'color' => $fabric->color,
                'quantity_in_stock' => $fabric->quantity_in_stock,
                'unit' => $fabric->unit,
                'price_per_meter' => $fabric->price_per_meter,
                'stock_value' => $stockValue,
                'usage_count' => $usage->usage_count ?? 0,
                'status' => $fabric->status,
                'stock_status' => $fabric->quantity_in_stock <= 10 ? 'low' : ($fabric->quantity_in_stock <= 50 ? 'medium' : 'good'),
            ];
        });

        return response()->json(['data' => $inventoryData]);
    }

    public function exportSales(Request $request)
    {
        $startDate = $request->get('start_date', now()->startOfMonth()->toDateString());
        $endDate = $request->get('end_date', now()->toDateString());

        $orders = Order::with(['customer', 'garmentType', 'tailor', 'stitchingStatus', 'payments'])
            ->whereBetween('order_date', [$startDate, $endDate])
            ->get();

        $totalRevenue = $orders->sum('total_amount');
        $totalPaid = $orders->sum(function ($order) {
            return $order->payments->sum('amount');
        });

        $pdf = PDF::loadView('reports.sales', [
            'orders' => $orders,
            'startDate' => $startDate,
            'endDate' => $endDate,
            'totalRevenue' => $totalRevenue,
            'totalPaid' => $totalPaid,
        ]);

        return $pdf->download('sales-report-' . $startDate . '-to-' . $endDate . '.pdf');
    }

    private function getChartData($orders, $groupBy)
    {
        $grouped = $orders->groupBy(function ($order) use ($groupBy) {
            if ($groupBy === 'day') {
                return $order->order_date->format('Y-m-d');
            } elseif ($groupBy === 'week') {
                return $order->order_date->format('Y-W');
            } elseif ($groupBy === 'month') {
                return $order->order_date->format('Y-m');
            }
            return $order->order_date->format('Y-m-d');
        });

        return $grouped->map(function ($items, $key) {
            return [
                'date' => $key,
                'revenue' => $items->sum('total_amount'),
                'orders' => $items->count(),
            ];
        })->values();
    }
}
