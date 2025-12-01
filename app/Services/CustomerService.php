<?php

namespace App\Services;

use App\Models\Customer;

class CustomerService
{
    public function create(array $data): Customer
    {
        $customer = Customer::create($data);
        
        // Optional: Queue welcome email
        // dispatch(new SendWelcomeEmail($customer));
        
        return $customer;
    }
}