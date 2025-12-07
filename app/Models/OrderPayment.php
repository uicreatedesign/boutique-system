<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderPayment extends Model
{
    protected $fillable = [
        'order_id', 'payment_date', 'amount', 'payment_method',
        'transaction_reference', 'payment_type', 'notes'
    ];

    protected $casts = [
        'payment_date' => 'date',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
