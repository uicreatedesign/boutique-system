<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CustomerResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'phone' => $this->phone,
            'email' => $this->email,
            'address' => $this->address,
            'dob' => $this->dob?->format('Y-m-d'),
            'meta' => $this->meta,
            'orders_count' => 0,
            'last_order_at' => null,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
