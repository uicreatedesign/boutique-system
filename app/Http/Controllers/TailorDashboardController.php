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
        
        if (!$user->isTailor()) {
            abort(403, 'Access denied. Tailor role required.');
        }

        $tailor = $user->tailor;

        return Inertia::render('tailor-dashboard/index', [
            'tailor' => $tailor,
            'stats' => [
                'total_orders' => 0,
                'pending_orders' => 0,
                'completed_orders' => 0,
            ],
        ]);
    }
}
