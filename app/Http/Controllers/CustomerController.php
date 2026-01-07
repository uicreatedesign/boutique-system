<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCustomerRequest;
use App\Http\Requests\UpdateCustomerRequest;
use App\Http\Resources\CustomerResource;
use App\Models\Customer;
use App\Services\CustomerService;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class CustomerController extends Controller
{
    public function __construct(private CustomerService $customerService)
    {
    }

    public function index(Request $request): AnonymousResourceCollection
    {
        $query = Customer::query()->withCount('orders');

        if ($search = $request->get('search')) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('phone', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%");
            });
        }

        $perPage = min($request->get('per_page', 15), 100);
        $customers = $query->paginate($perPage);

        return CustomerResource::collection($customers);
    }

    public function store(StoreCustomerRequest $request): CustomerResource
    {
        $data = $request->validated();
        
        // Create user with Customer role if requested
        if ($request->boolean('create_user_account')) {
            $user = \App\Models\User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => bcrypt($request->input('user_password')),
            ]);
            
            $customerRole = \App\Models\Role::where('name', 'Customer')->first();
            if ($customerRole) {
                $user->roles()->attach($customerRole->id);
            }
            
            $data['user_id'] = $user->id;
        }
        
        $customer = $this->customerService->create($data);
        return new CustomerResource($customer);
    }

    public function show(Customer $customer): CustomerResource
    {
        $customer->loadCount('orders');
        return new CustomerResource($customer);
    }

    public function update(UpdateCustomerRequest $request, Customer $customer): CustomerResource
    {
        $data = $request->validated();
        
        // Update password if user exists
        if ($customer->user && $request->filled('user_password')) {
            $customer->user->update([
                'password' => bcrypt($request->input('user_password')),
            ]);
        }
        
        // Create user with Customer role if doesn't exist
        if (!$customer->user && $request->boolean('create_user_account')) {
            $user = \App\Models\User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => bcrypt($request->input('user_password')),
            ]);
            
            $customerRole = \App\Models\Role::where('name', 'Customer')->first();
            if ($customerRole) {
                $user->roles()->attach($customerRole->id);
            }
            
            $data['user_id'] = $user->id;
        }
        
        $customer->update($data);
        return new CustomerResource($customer);
    }

    public function destroy(Customer $customer): \Illuminate\Http\JsonResponse
    {
        $customer->delete();
        return response()->json(['message' => 'Customer deleted successfully']);
    }

    public function orders(Customer $customer): \Illuminate\Http\JsonResponse
    {
        $orders = $customer->orders()->with(['garmentType', 'stitchingStatus'])->latest()->get();
        return response()->json(['data' => $orders, 'total' => $orders->count()]);
    }

    public function bulkDelete(\Illuminate\Http\Request $request): \Illuminate\Http\JsonResponse
    {
        $ids = $request->input('ids', []);
        Customer::whereIn('id', $ids)->delete();
        return response()->json(['message' => 'Customers deleted successfully']);
    }
}