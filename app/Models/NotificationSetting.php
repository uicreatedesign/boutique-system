<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NotificationSetting extends Model
{
    protected $fillable = [
        'email_enabled',
        'whatsapp_enabled',
        'order_created',
        'order_status_changed',
        'payment_received',
        'delivery_reminder',
        'delivery_reminder_days',
    ];

    protected $casts = [
        'email_enabled' => 'boolean',
        'whatsapp_enabled' => 'boolean',
        'order_created' => 'boolean',
        'order_status_changed' => 'boolean',
        'payment_received' => 'boolean',
        'delivery_reminder' => 'boolean',
    ];
}
