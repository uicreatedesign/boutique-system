<?php

namespace App\Services;

use App\Models\User;
use App\Models\Customer;
use App\Models\Role;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class CustomerService
{
    public function createCustomerWithUser(array $data): Customer
    {
        return DB::transaction(function () use ($data) {
            // Create user account
            $user = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => Hash::make($data['password'] ?? 'password123'),
            ]);

            // Assign customer role
            $customerRole = Role::where('name', 'Customer')->first();
            if ($customerRole) {
                $user->roles()->attach($customerRole->id);
            }

            // Create customer profile
            return Customer::create([
                'user_id' => $user->id,
                'name' => $data['name'],
                'email' => $data['email'],
                'phone' => $data['phone'] ?? null,
                'address' => $data['address'] ?? null,
                'dob' => $data['dob'] ?? null,
                'meta' => $data['meta'] ?? null,
            ]);
        });
    }

    public function syncExistingCustomers(): int
    {
        $synced = 0;
        
        // Get customers without user accounts
        $customersWithoutUsers = Customer::whereNull('user_id')
            ->whereNotNull('email')
            ->get();

        foreach ($customersWithoutUsers as $customer) {
            // Check if user already exists with this email
            $existingUser = User::where('email', $customer->email)->first();
            
            if ($existingUser) {
                // Link existing user to customer
                $customer->update(['user_id' => $existingUser->id]);
                
                // Ensure user has customer role
                $customerRole = Role::where('name', 'Customer')->first();
                if ($customerRole && !$existingUser->roles()->where('name', 'Customer')->exists()) {
                    $existingUser->roles()->attach($customerRole->id);
                }
            } else {
                // Create new user for customer
                $user = User::create([
                    'name' => $customer->name,
                    'email' => $customer->email,
                    'password' => Hash::make('password123'), // Default password
                ]);

                // Assign customer role
                $customerRole = Role::where('name', 'Customer')->first();
                if ($customerRole) {
                    $user->roles()->attach($customerRole->id);
                }

                // Link user to customer
                $customer->update(['user_id' => $user->id]);
            }
            
            $synced++;
        }

        return $synced;
    }
}