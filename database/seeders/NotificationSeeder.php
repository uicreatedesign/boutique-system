<?php

namespace Database\Seeders;

use App\Models\Notification;
use Illuminate\Database\Seeder;

class NotificationSeeder extends Seeder
{
    public function run(): void
    {
        $notifications = [
            [
                'type' => 'order_created',
                'title' => 'New Order Created',
                'message' => 'Order #ORD-20241209-0001 has been created for John Doe',
                'data' => json_encode(['order_id' => 1]),
                'user_id' => null,
                'priority' => 'normal',
                'color' => '#10b981',
                'created_at' => now()->subHours(2),
            ],
            [
                'type' => 'payment_received',
                'title' => 'Payment Received',
                'message' => 'Payment of $150.00 received for Order #ORD-20241209-0001',
                'data' => json_encode(['payment_id' => 1, 'order_id' => 1]),
                'user_id' => null,
                'priority' => 'normal',
                'color' => '#3b82f6',
                'created_at' => now()->subHours(1),
            ],
            [
                'type' => 'delivery_reminder',
                'title' => 'Delivery Due Soon',
                'message' => 'Order #ORD-20241208-0005 is due for delivery tomorrow',
                'data' => json_encode(['order_id' => 5]),
                'user_id' => null,
                'priority' => 'high',
                'color' => '#f59e0b',
                'created_at' => now()->subMinutes(30),
            ],
            [
                'type' => 'low_stock',
                'title' => 'Low Stock Alert',
                'message' => 'Cotton fabric is running low (Current stock: 5 meters)',
                'data' => json_encode(['fabric_id' => 1]),
                'user_id' => null,
                'priority' => 'high',
                'color' => '#ef4444',
                'created_at' => now()->subMinutes(15),
            ],
            [
                'type' => 'order_status_changed',
                'title' => 'Order Status Updated',
                'message' => 'Order #ORD-20241207-0003 status changed from Cutting to Stitching',
                'data' => json_encode(['order_id' => 3]),
                'user_id' => null,
                'priority' => 'normal',
                'color' => '#8b5cf6',
                'read_at' => now()->subMinutes(5),
                'created_at' => now()->subHours(3),
            ],
        ];

        foreach ($notifications as $notification) {
            Notification::create($notification);
        }
    }
}