<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCustomerRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|max:191',
            'phone' => 'nullable|string|max:20',
            'email' => 'nullable|email|max:191|unique:customers,email',
            'address' => 'nullable|string',
            'dob' => 'nullable|date',
            'meta' => 'nullable|array',
            'enable_portal_access' => 'nullable|boolean',
            'portal_password' => 'nullable|string|min:6',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Customer name is required.',
            'email.email' => 'Please enter a valid email address.',
            'email.unique' => 'This email is already registered.',
            'phone.max' => 'Phone number cannot exceed 20 characters.',
            'portal_password.min' => 'Portal password must be at least 6 characters.',
        ];
    }
}
