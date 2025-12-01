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
        $query = Customer::query();

        if ($search = $request->get('search')) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('phone', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%");
            });
        }

        $customers = $query->paginate($request->get('per_page', 15));

        return CustomerResource::collection($customers);
    }

    public function store(StoreCustomerRequest $request): CustomerResource
    {
        $customer = $this->customerService->create($request->validated());
        return new CustomerResource($customer);
    }

    public function show(Customer $customer): CustomerResource
    {
        return new CustomerResource($customer);
    }

    public function update(UpdateCustomerRequest $request, Customer $customer): CustomerResource
    {
        $customer->update($request->validated());
        return new CustomerResource($customer);
    }

    public function destroy(Customer $customer): \Illuminate\Http\JsonResponse
    {
        $customer->delete();
        return response()->json(['message' => 'Customer deleted successfully']);
    }

    public function orders(Customer $customer): \Illuminate\Http\JsonResponse
    {
        return response()->json(['data' => [], 'total' => 0]);
    }
}
