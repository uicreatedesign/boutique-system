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
        
        // Generate random password if portal access is enabled
        if ($request->boolean('enable_portal_access')) {
            $data['password'] = bcrypt($request->input('portal_password', 'password123'));
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
        
        // Update password if provided
        if ($request->filled('portal_password')) {
            $data['password'] = bcrypt($request->input('portal_password'));
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
}
