<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tailor extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'phone',
        'email',
        'skill_level',
        'address',
        'status',
        'hourly_rate',
        'specialization',
        'join_date',
        'meta',
    ];

    protected $casts = [
        'meta' => 'array',
        'join_date' => 'date',
        'hourly_rate' => 'decimal:2',
    ];
}
