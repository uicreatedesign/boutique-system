<?php

namespace App\Models;

use App\Services\SettingsService;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'order_number', 'customer_id', 'garment_type_id', 'tailor_id',
        'measurement_id', 'fabric_id', 'customer_fabric', 'boutique_fabric', 'customer_fabric_photo', 'boutique_fabric_photo', 'design_image', 'stitching_status_id',
        'order_date', 'delivery_date', 'priority', 'total_amount',
        'advance_paid', 'discount', 'special_instructions', 'notes'
    ];

    protected $casts = [
        'order_date' => 'date',
        'delivery_date' => 'date',
        'customer_fabric' => 'boolean',
        'boutique_fabric' => 'boolean',
    ];

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($order) {
            if (empty($order->order_number)) {
                $prefix = SettingsService::getOrderPrefix();
                $order->order_number = $prefix . '-' . date('Ymd') . '-' . str_pad(static::whereDate('created_at', today())->count() + 1, 4, '0', STR_PAD_LEFT);
            }
        });
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function garmentType()
    {
        return $this->belongsTo(GarmentType::class);
    }

    public function tailor()
    {
        return $this->belongsTo(Tailor::class);
    }

    public function measurement()
    {
        return $this->belongsTo(CustomerMeasurement::class, 'measurement_id');
    }

    public function fabric()
    {
        return $this->belongsTo(Fabric::class);
    }

    public function stitchingStatus()
    {
        return $this->belongsTo(StitchingStatus::class);
    }

    public function payments()
    {
        return $this->hasMany(OrderPayment::class);
    }

    public function scopeWithPaymentTotals($query)
    {
        return $query->withSum('payments', 'amount');
    }

    public function getBalanceDueAttribute()
    {
        return $this->total_amount - $this->discount - ($this->payments_sum_amount ?? 0);
    }
}
