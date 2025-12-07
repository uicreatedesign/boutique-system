<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CustomerMeasurement extends Model
{
    protected $fillable = [
        'customer_id',
        'tailor_id',
        'measurement_type',
        'measurements',
        'notes',
    ];

    protected $casts = [
        'measurements' => 'array',
    ];

    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class);
    }

    public function tailor(): BelongsTo
    {
        return $this->belongsTo(Tailor::class);
    }
}