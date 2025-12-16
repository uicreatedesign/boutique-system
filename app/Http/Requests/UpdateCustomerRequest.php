<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCustomerRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $customer = $this->route('customer');
        
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
        
        // If creating user account, validate email uniqueness in users table
        if ($this->boolean('create_user_account') && !$customer->user_id) {
            $rules['email'] = 'required|email|max:191|unique:users,email';
            $rules['user_password'] = 'required|string|min:6';
        }
        
        return $rules;
    }
}
