<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NotificationSetting extends Model
{
    protected $fillable = [
        'email_enabled',
        'whatsapp_enabled',
        'sms_enabled',
        'push_enabled',
        'order_created',
        'order_status_changed',
        'payment_received',
        'delivery_reminder',
        'low_stock_alert',
        'delivery_reminder_days',
        'email_templates',
        'whatsapp_templates',
    ];

    protected $casts = [
        'email_enabled' => 'boolean',
        'whatsapp_enabled' => 'boolean',
        'sms_enabled' => 'boolean',
        'push_enabled' => 'boolean',
        'order_created' => 'boolean',
        'order_status_changed' => 'boolean',
        'payment_received' => 'boolean',
        'delivery_reminder' => 'boolean',
        'low_stock_alert' => 'boolean',
        'email_templates' => 'array',
        'whatsapp_templates' => 'array',
    ];

    public static function getSettings()
    {
        return static::first() ?? static::create([]);
    }

    public function isChannelEnabled(string $channel): bool
    {
        return $this->{$channel . '_enabled'} ?? false;
    }

    public function isEventEnabled(string $event): bool
    {
        return $this->{$event} ?? false;
    }
}
