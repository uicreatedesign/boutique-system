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
        return [
            'name' => 'required|string|max:191',
            'phone' => 'nullable|string|max:20',
            'email' => 'nullable|email|max:191|unique:customers,email,' . $this->route('customer'),
            'address' => 'nullable|string',
            'dob' => 'nullable|date',
            'meta' => 'nullable|array',
        ];
    }
}
