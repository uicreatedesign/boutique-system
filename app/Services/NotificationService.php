<?php

namespace App\Services;

use App\Models\Notification;
use App\Models\NotificationSetting;
use App\Models\User;
use App\Services\NotificationChannels\EmailChannel;
use App\Services\NotificationChannels\WhatsAppChannel;
use App\Services\NotificationChannels\SmsChannel;
use App\Services\NotificationChannels\PushChannel;
use Illuminate\Support\Facades\Log;

class NotificationService
{
    private static array $channels = [
        EmailChannel::class,
        WhatsAppChannel::class,
        SmsChannel::class,
        PushChannel::class,
    ];

    public static function send(array $data)
    {
        $settings = NotificationSetting::getSettings();
        
        if (!$settings->isEventEnabled($data['type'])) {
            return;
        }

        $results = [];
        
        foreach (self::$channels as $channelClass) {
            $channel = new $channelClass();
            
            try {
                $result = $channel->send($data);
                $results[$channel->getName()] = $result;
            } catch (\Exception $e) {
                Log::error("Notification failed via {$channel->getName()}: " . $e->getMessage());
                $results[$channel->getName()] = false;
            }
        }
        
        return $results;
    }

    public static function createInAppNotification(array $data)
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

    public static function create(array $data)
    {
        return self::createInAppNotification($data);
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
        // Notify customer if they have a user account
        if ($order->customer->user_id) {
            $customerData = [
                'type' => 'order_created',
                'title' => 'New Order Created',
                'message' => "Your order #{$order->order_number} has been created successfully",
                'data' => ['order_id' => $order->id],
                'user_id' => $order->customer->user_id,
                'priority' => 'normal',
                'color' => '#10b981',
            ];
            self::send($customerData);
        }
        
        // Notify staff
        $staffData = [
            'type' => 'order_created',
            'title' => 'New Order Created',
            'message' => "Order #{$order->order_number} has been created for {$order->customer->name}",
            'data' => ['order_id' => $order->id],
            'priority' => 'normal',
            'color' => '#10b981',
        ];
        return self::send($staffData);
    }

    public static function paymentReceived($payment)
    {
        // Notify customer if they have a user account
        if ($payment->order->customer->user_id) {
            $customerData = [
                'type' => 'payment_received',
                'title' => 'Payment Received',
                'message' => "Payment of {$payment->amount} received for your order #{$payment->order->order_number}",
                'data' => ['payment_id' => $payment->id, 'order_id' => $payment->order_id],
                'user_id' => $payment->order->customer->user_id,
                'priority' => 'normal',
                'color' => '#3b82f6',
            ];
            self::send($customerData);
        }
        
        // Notify staff
        $staffData = [
            'type' => 'payment_received',
            'title' => 'Payment Received',
            'message' => "Payment of {$payment->amount} received for Order #{$payment->order->order_number}",
            'data' => ['payment_id' => $payment->id, 'order_id' => $payment->order_id],
            'priority' => 'normal',
            'color' => '#3b82f6',
        ];
        return self::send($staffData);
    }

    public static function deliveryReminder($order)
    {
        // Notify customer if they have a user account
        if ($order->customer->user_id) {
            $customerData = [
                'type' => 'delivery_reminder',
                'title' => 'Delivery Due Soon',
                'message' => "Your order #{$order->order_number} is due for delivery on {$order->delivery_date->format('M d, Y')}",
                'data' => ['order_id' => $order->id],
                'user_id' => $order->customer->user_id,
                'priority' => 'high',
                'color' => '#f59e0b',
            ];
            self::send($customerData);
        }
        
        // Notify staff
        $staffData = [
            'type' => 'delivery_reminder',
            'title' => 'Delivery Due Soon',
            'message' => "Order #{$order->order_number} is due for delivery on {$order->delivery_date->format('M d, Y')}",
            'data' => ['order_id' => $order->id],
            'priority' => 'high',
            'color' => '#f59e0b',
        ];
        return self::send($staffData);
    }

    public static function orderStatusChanged($order, $oldStatus)
    {
        // Notify customer if they have a user account
        if ($order->customer->user_id) {
            $customerData = [
                'type' => 'order_status_changed',
                'title' => 'Order Status Updated',
                'message' => "Your order #{$order->order_number} status changed to {$order->stitchingStatus->name}",
                'data' => ['order_id' => $order->id],
                'user_id' => $order->customer->user_id,
                'priority' => 'normal',
                'color' => '#8b5cf6',
            ];
            self::send($customerData);
        }
        
        // Notify staff
        $staffData = [
            'type' => 'order_status_changed',
            'title' => 'Order Status Updated',
            'message' => "Order #{$order->order_number} status changed from {$oldStatus} to {$order->stitchingStatus->name}",
            'data' => ['order_id' => $order->id],
            'priority' => 'normal',
            'color' => '#8b5cf6',
        ];
        return self::send($staffData);
    }

    public static function lowStock($fabric)
    {
        $data = [
            'type' => 'low_stock_alert',
            'title' => 'Low Stock Alert',
            'message' => "Fabric '{$fabric->name}' is running low (Current stock: {$fabric->stock_quantity})",
            'data' => ['fabric_id' => $fabric->id],
            'priority' => 'high',
            'color' => '#ef4444',
        ];
        return self::send($data);
    }
}