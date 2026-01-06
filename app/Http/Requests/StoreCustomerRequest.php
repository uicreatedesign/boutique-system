<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCustomerRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can('customer-create');
    }

    public function rules(): array
    {
        $rules = [
            'name' => 'required|string|max:191',
            'phone' => 'nullable|string|max:20',
            'email' => 'nullable|email|max:191',
            'address' => 'nullable|string',
            'dob' => 'nullable|date',
            'meta' => 'nullable|array',
            'create_user_account' => 'nullable|boolean',
            'user_password' => 'nullable|string|min:6',
        ];
        
        // If creating user account, email is required and must be unique
        if ($this->boolean('create_user_account')) {
            $rules['email'] = 'required|email|max:191|unique:users,email';
            $rules['user_password'] = 'required|string|min:6';
        }
        
        return $rules;
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Customer name is required.',
            'email.email' => 'Please enter a valid email address.',
            'email.unique' => 'This email is already registered.',
            'email.required' => 'Email is required when creating user account.',
            'phone.max' => 'Phone number cannot exceed 20 characters.',
            'user_password.min' => 'Password must be at least 6 characters.',
            'user_password.required' => 'Password is required when creating user account.',
        ];
    }
}
