<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Fabric extends Model
{
    protected $fillable = [
        'name',
        'type',
        'color',
        'price_per_meter',
        'quantity_in_stock',
        'unit',
        'description',
        'status'
    ];
}
