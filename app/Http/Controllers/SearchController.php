<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Order;
use App\Models\Tailor;
use App\Models\Fabric;
use App\Models\GarmentType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SearchController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request)
    {
        return Inertia::render('Search/Index');
    }

    public function search(Request $request)
    {
        $query = $request->get('q', '');
        $filters = $request->get('filters', []);
        
        if (empty($query) && empty($filters)) {
            return response()->json(['results' => []]);
        }

        $results = [];

        // Search Customers
        if (auth()->user()->hasPermission('view_customers')) {
            $customers = Customer::query()
                ->when($query, fn($q) => $q->where('name', 'like', "%{$query}%")
                    ->orWhere('email', 'like', "%{$query}%")
                    ->orWhere('phone', 'like', "%{$query}%"))
                ->when($filters['date_from'] ?? null, fn($q) => $q->whereDate('created_at', '>=', $filters['date_from']))
                ->when($filters['date_to'] ?? null, fn($q) => $q->whereDate('created_at', '<=', $filters['date_to']))
                ->limit(5)
                ->get()
                ->map(fn($item) => [
                    'id' => $item->id,
                    'title' => $item->name,
                    'subtitle' => $item->email,
                    'type' => 'customer',
                    'url' => "/customers/{$item->id}",
                    'created_at' => $item->created_at->format('M d, Y')
                ]);
            
            $results = array_merge($results, $customers->toArray());
        }

        // Search Orders
        if (auth()->user()->hasPermission('view_orders')) {
            $orders = Order::with('customer')
                ->when($query, fn($q) => $q->where('order_number', 'like', "%{$query}%")
                    ->orWhereHas('customer', fn($sq) => $sq->where('name', 'like', "%{$query}%")))
                ->when($filters['date_from'] ?? null, fn($q) => $q->whereDate('created_at', '>=', $filters['date_from']))
                ->when($filters['date_to'] ?? null, fn($q) => $q->whereDate('created_at', '<=', $filters['date_to']))
                ->when($filters['status'] ?? null, fn($q) => $q->where('stitching_status_id', $filters['status']))
                ->limit(5)
                ->get()
                ->map(fn($item) => [
                    'id' => $item->id,
                    'title' => $item->order_number,
                    'subtitle' => $item->customer->name,
                    'type' => 'order',
                    'url' => "/orders/{$item->id}",
                    'created_at' => $item->created_at->format('M d, Y')
                ]);
            
            $results = array_merge($results, $orders->toArray());
        }

        // Search Tailors
        if (auth()->user()->hasPermission('view_tailors')) {
            $tailors = Tailor::query()
                ->when($query, fn($q) => $q->where('name', 'like', "%{$query}%")
                    ->orWhere('email', 'like', "%{$query}%")
                    ->orWhere('specialization', 'like', "%{$query}%"))
                ->when($filters['date_from'] ?? null, fn($q) => $q->whereDate('created_at', '>=', $filters['date_from']))
                ->when($filters['date_to'] ?? null, fn($q) => $q->whereDate('created_at', '<=', $filters['date_to']))
                ->limit(5)
                ->get()
                ->map(fn($item) => [
                    'id' => $item->id,
                    'title' => $item->name,
                    'subtitle' => $item->specialization,
                    'type' => 'tailor',
                    'url' => "/tailors/{$item->id}",
                    'created_at' => $item->created_at->format('M d, Y')
                ]);
            
            $results = array_merge($results, $tailors->toArray());
        }

        return response()->json(['results' => $results]);
    }

    public function saveSearch(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'query' => 'required|string',
            'filters' => 'array'
        ]);

        // Store in session for now (can be moved to database later)
        $savedSearches = session('saved_searches', []);
        $savedSearches[] = [
            'id' => uniqid(),
            'name' => $request->name,
            'query' => $request->query,
            'filters' => $request->filters,
            'created_at' => now()->toISOString()
        ];
        
        session(['saved_searches' => $savedSearches]);

        return response()->json(['message' => 'Search saved successfully']);
    }

    public function getSavedSearches()
    {
        return response()->json(['searches' => session('saved_searches', [])]);
    }

    public function getSearchHistory()
    {
        return response()->json(['history' => session('search_history', [])]);
    }

    private function addToHistory($query, $filters = [])
    {
        $history = session('search_history', []);
        
        // Add to beginning of array
        array_unshift($history, [
            'query' => $query,
            'filters' => $filters,
            'timestamp' => now()->toISOString()
        ]);
        
        // Keep only last 10 searches
        $history = array_slice($history, 0, 10);
        
        session(['search_history' => $history]);
    }
}