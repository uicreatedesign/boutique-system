<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TailorDashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request)
    {
        $user = $request->user();
        
        if (!$user->isTailor() || !$user->hasPermission('access_tailor_dashboard')) {
            abort(403, 'Access denied. Tailor role required.');
        }

        $tailor = $user->tailor;
        $orders = collect();
        $stats = ['total_orders' => 0, 'pending_orders' => 0, 'completed_orders' => 0];

        if ($user->hasPermission('view_orders')) {
            $orders = \App\Models\Order::where('tailor_id', $tailor->id)
                ->with(['customer', 'garmentType', 'stitchingStatus'])
                ->latest()
                ->take(10)
                ->get();

            $stats = [
                'total_orders' => \App\Models\Order::where('tailor_id', $tailor->id)->count(),
                'pending_orders' => \App\Models\Order::where('tailor_id', $tailor->id)
                    ->whereHas('stitchingStatus', fn($q) => $q->whereIn('name', ['Pending', 'Cutting', 'Stitching']))
                    ->count(),
                'completed_orders' => \App\Models\Order::where('tailor_id', $tailor->id)
                    ->whereHas('stitchingStatus', fn($q) => $q->where('name', 'Delivered'))
                    ->count(),
            ];
        }

        return Inertia::render('tailor-dashboard/index', [
            'tailor' => $tailor,
            'stats' => $stats,
            'orders' => $orders,
        ]);
    }
}
