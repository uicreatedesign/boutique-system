<?php

namespace App\Services;

use App\Models\Notification;
use App\Models\User;

class NotificationService
{
    public static function create(array $data)
    {
        return Notification::create([
            'type' => $data['type'],
            'title' => $data['title'],
            'message' => $data['message'],
            'data' => $data['data'] ?? null,
            'user_id' => $data['user_id'] ?? null,
            'priority' => $data['priority'] ?? 'normal',
            'icon' => $data['icon'] ?? null,
            'color' => $data['color'] ?? '#3b82f6',
        ]);
    }

    public static function createForUser(User $user, array $data)
    {
        return self::create(array_merge($data, ['user_id' => $user->id]));
    }

    public static function createSystemWide(array $data)
    {
        return self::create(array_merge($data, ['user_id' => null]));
    }

    public static function orderCreated($order)
    {
        return self::createSystemWide([
            'type' => 'order_created',
            'title' => 'New Order Created',
            'message' => "Order #{$order->order_number} has been created for {$order->customer->name}",
            'data' => ['order_id' => $order->id],
            'priority' => 'normal',
            'color' => '#10b981',
        ]);
    }

    public static function paymentReceived($payment)
    {
        return self::createSystemWide([
            'type' => 'payment_received',
            'title' => 'Payment Received',
            'message' => "Payment of ${$payment->amount} received for Order #{$payment->order->order_number}",
            'data' => ['payment_id' => $payment->id, 'order_id' => $payment->order_id],
            'priority' => 'normal',
            'color' => '#3b82f6',
        ]);
    }

    public static function deliveryReminder($order)
    {
        return self::createSystemWide([
            'type' => 'delivery_reminder',
            'title' => 'Delivery Due Soon',
            'message' => "Order #{$order->order_number} is due for delivery on {$order->delivery_date->format('M d, Y')}",
            'data' => ['order_id' => $order->id],
            'priority' => 'high',
            'color' => '#f59e0b',
        ]);
    }

    public static function orderStatusChanged($order, $oldStatus)
    {
        return self::createSystemWide([
            'type' => 'order_status_changed',
            'title' => 'Order Status Updated',
            'message' => "Order #{$order->order_number} status changed from {$oldStatus} to {$order->stitchingStatus->name}",
            'data' => ['order_id' => $order->id],
            'priority' => 'normal',
            'color' => '#8b5cf6',
        ]);
    }

    public static function lowStock($fabric)
    {
        return self::createSystemWide([
            'type' => 'low_stock',
            'title' => 'Low Stock Alert',
            'message' => "Fabric '{$fabric->name}' is running low (Current stock: {$fabric->stock_quantity})",
            'data' => ['fabric_id' => $fabric->id],
            'priority' => 'high',
            'color' => '#ef4444',
        ]);
    }
}