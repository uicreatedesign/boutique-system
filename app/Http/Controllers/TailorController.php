<?php

namespace App\Http\Controllers;

use App\Models\Tailor;
use Illuminate\Http\Request;

class TailorController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('permission:view_tailors')->only(['index', 'show']);
        $this->middleware('permission:create_tailors')->only(['store']);
        $this->middleware('permission:edit_tailors')->only(['update']);
        $this->middleware('permission:delete_tailors')->only(['destroy']);
    }
    public function index(Request $request)
    {
        $query = Tailor::query();

        if ($search = $request->get('search')) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('phone', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%");
            });
        }

        if ($status = $request->get('status')) {
            $query->where('status', $status);
        }

        return $query->paginate($request->get('per_page', 15));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:191',
            'phone' => 'required|string|max:20',
            'email' => 'nullable|email|max:191|unique:tailors,email',
            'skill_level' => 'required|in:beginner,intermediate,expert',
            'address' => 'nullable|string',
            'status' => 'required|in:active,inactive,on_leave',
            'hourly_rate' => 'nullable|numeric|min:0',
            'specialization' => 'nullable|string',
            'join_date' => 'nullable|date',
            'create_user_account' => 'boolean',
            'password' => 'required_if:create_user_account,true|nullable|string|min:8',
        ]);

        $userId = null;
        if ($request->create_user_account && $validated['email']) {
            $user = \App\Models\User::create([
                'name' => $validated['name'],
                'email' => $validated['email'],
                'password' => \Illuminate\Support\Facades\Hash::make($validated['password']),
            ]);
            
            $tailorRole = \App\Models\Role::where('name', 'Tailor')->first();
            if ($tailorRole) {
                $user->roles()->attach($tailorRole->id);
            }
            
            $userId = $user->id;
        }

        $validated['user_id'] = $userId;
        unset($validated['create_user_account'], $validated['password']);

        return Tailor::create($validated);
    }

    public function show(Tailor $tailor)
    {
        return $tailor;
    }

    public function update(Request $request, Tailor $tailor)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:191',
            'phone' => 'required|string|max:20',
            'email' => 'nullable|email|max:191|unique:tailors,email,' . $tailor->id,
            'skill_level' => 'required|in:beginner,intermediate,expert',
            'address' => 'nullable|string',
            'status' => 'required|in:active,inactive,on_leave',
            'hourly_rate' => 'nullable|numeric|min:0',
            'specialization' => 'nullable|string',
            'join_date' => 'nullable|date',
        ]);

        $tailor->update($validated);
        return $tailor;
    }

    public function destroy(Tailor $tailor)
    {
        $tailor->delete();
        return response()->json(['message' => 'Tailor deleted successfully']);
    }
}
