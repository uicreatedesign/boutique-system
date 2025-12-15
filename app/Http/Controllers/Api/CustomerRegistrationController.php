<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\CustomerService;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;

class CustomerRegistrationController extends Controller
{
    public function __construct(private CustomerService $customerService)
    {
        $this->middleware('permission:create_customers');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email|unique:customers,email',
            'phone' => 'nullable|string|max:20',
            'address' => 'nullable|string|max:500',
            'password' => ['required', Password::defaults()],
        ]);

        $customer = $this->customerService->createCustomerWithUser($validated);

        return response()->json([
            'message' => 'Customer account created successfully',
            'customer' => $customer->load('user'),
        ], 201);
    }
}