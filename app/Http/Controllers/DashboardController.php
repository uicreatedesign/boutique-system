<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Customer;
use App\Models\Tailor;
use App\Models\OrderPayment;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Carbon\Carbon;

class DashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        // Redirect customers to their dashboard
        if (auth()->user()->isCustomer()) {
            return redirect()->route('customer-dashboard.index');
        }

        // Check permission for non-customers
        if (!auth()->user()->can('view_dashboard')) {
            abort(403);
        }
        // Revenue Statistics
        $todayRevenue = OrderPayment::whereDate('payment_date', today())->sum('amount');
        $monthRevenue = OrderPayment::whereMonth('payment_date', now()->month)
            ->whereYear('payment_date', now()->year)
            ->sum('amount');
        $yearRevenue = OrderPayment::whereYear('payment_date', now()->year)->sum('amount');

        // Order Statistics
        $totalOrders = Order::count();
        $pendingOrders = Order::whereHas('stitchingStatus', function($q) {
            $q->where('slug', 'pending');
        })->count();
        $inProgressOrders = Order::whereHas('stitchingStatus', function($q) {
            $q->whereIn('slug', ['cutting', 'stitching', 'finishing', 'ironing', 'in-progress']);
        })->count();
        $completedOrders = Order::whereHas('stitchingStatus', function($q) {
            $q->where('slug', 'delivered');
        })->count();

        // Pending Payments
        $pendingPayments = Order::with(['customer', 'stitchingStatus'])
            ->get()
            ->filter(function($order) {
                return $order->balance_due > 0;
            })
            ->take(5)
            ->map(function($order) {
                return [
                    'id' => $order->id,
                    'order_number' => $order->order_number,
                    'customer_name' => $order->customer->name,
                    'balance_due' => $order->balance_due,
                    'status' => $order->stitchingStatus->name,
                ];
            })->values();

        // Upcoming Deliveries
        $upcomingDeliveries = Order::with(['customer', 'stitchingStatus'])
            ->where('delivery_date', '>=', today())
            ->where('delivery_date', '<=', today()->addDays(7))
            ->orderBy('delivery_date')
            ->take(5)
            ->get()
            ->map(function($order) {
                return [
                    'id' => $order->id,
                    'order_number' => $order->order_number,
                    'customer_name' => $order->customer->name,
                    'delivery_date' => $order->delivery_date->format('Y-m-d'),
                    'status' => $order->stitchingStatus->name,
                    'status_color' => $order->stitchingStatus->color,
                ];
            });

        // Recent Orders
        $recentOrders = Order::with(['customer', 'garmentType', 'stitchingStatus'])
            ->latest()
            ->take(5)
            ->get()
            ->map(function($order) {
                return [
                    'id' => $order->id,
                    'order_number' => $order->order_number,
                    'customer_name' => $order->customer->name,
                    'garment_type' => $order->garmentType->name,
                    'total_amount' => $order->total_amount,
                    'status' => $order->stitchingStatus->name,
                    'status_color' => $order->stitchingStatus->color,
                    'created_at' => $order->created_at->format('Y-m-d'),
                ];
            });

        // Top Customers
        $topCustomers = Customer::withCount('orders')
            ->having('orders_count', '>', 0)
            ->orderBy('orders_count', 'desc')
            ->take(5)
            ->get()
            ->map(function($customer) {
                return [
                    'id' => $customer->id,
                    'name' => $customer->name,
                    'orders_count' => $customer->orders_count,
                ];
            });

        // Tailor Performance
        $tailorPerformance = Tailor::withCount(['orders' => function($q) {
            $q->whereHas('stitchingStatus', function($sq) {
                $sq->where('slug', 'delivered');
            });
        }])
        ->having('orders_count', '>', 0)
        ->orderBy('orders_count', 'desc')
        ->take(5)
        ->get()
        ->map(function($tailor) {
            return [
                'id' => $tailor->id,
                'name' => $tailor->name,
                'completed_orders' => $tailor->orders_count,
            ];
        });

        // Monthly Revenue Chart Data (Last 6 months)
        $monthlyRevenue = [];
        for ($i = 5; $i >= 0; $i--) {
            $date = now()->subMonths($i);
            $revenue = OrderPayment::whereMonth('payment_date', $date->month)
                ->whereYear('payment_date', $date->year)
                ->sum('amount');
            $orders = Order::whereMonth('order_date', $date->month)
                ->whereYear('order_date', $date->year)
                ->count();
            $monthlyRevenue[] = [
                'month' => $date->format('M Y'),
                'revenue' => (float) $revenue,
                'orders' => $orders,
            ];
        }

        // Order Status Distribution
        $statusDistribution = DB::table('orders')
            ->join('stitching_statuses', 'orders.stitching_status_id', '=', 'stitching_statuses.id')
            ->select('stitching_statuses.name', 'stitching_statuses.color', DB::raw('count(*) as count'))
            ->groupBy('stitching_statuses.id', 'stitching_statuses.name', 'stitching_statuses.color')
            ->get();

        return Inertia::render('dashboard', [
            'stats' => [
                'todayRevenue' => (float) $todayRevenue,
                'monthRevenue' => (float) $monthRevenue,
                'yearRevenue' => (float) $yearRevenue,
                'totalOrders' => $totalOrders,
                'pendingOrders' => $pendingOrders,
                'inProgressOrders' => $inProgressOrders,
                'completedOrders' => $completedOrders,
                'totalCustomers' => Customer::count(),
                'totalTailors' => Tailor::count(),
            ],
            'pendingPayments' => $pendingPayments,
            'upcomingDeliveries' => $upcomingDeliveries,
            'recentOrders' => $recentOrders,
            'topCustomers' => $topCustomers,
            'tailorPerformance' => $tailorPerformance,
            'monthlyRevenue' => $monthlyRevenue,
            'statusDistribution' => $statusDistribution,
        ]);
    }
}
