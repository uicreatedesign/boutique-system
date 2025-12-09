<?php

namespace App\Console\Commands;

use App\Models\Order;
use App\Services\NotificationService;
use Illuminate\Console\Command;

class SendDeliveryReminders extends Command
{
    protected $signature = 'notifications:delivery-reminders';
    protected $description = 'Send delivery reminder notifications for orders due soon';

    public function handle()
    {
        $orders = Order::with(['customer', 'stitchingStatus'])
            ->where('delivery_date', '>=', today())
            ->where('delivery_date', '<=', today()->addDays(2))
            ->whereHas('stitchingStatus', function($q) {
                $q->where('slug', '!=', 'delivered');
            })
            ->get();

        foreach ($orders as $order) {
            NotificationService::deliveryReminder($order);
        }

        $this->info("Sent {$orders->count()} delivery reminder notifications.");
    }
}