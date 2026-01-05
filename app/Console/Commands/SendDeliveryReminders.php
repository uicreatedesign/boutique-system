<?php

namespace App\Console\Commands;

use App\Models\Order;
use App\Models\NotificationSetting;
use App\Services\NotificationService;
use Illuminate\Console\Command;
use Carbon\Carbon;

class SendDeliveryReminders extends Command
{
    protected $signature = 'notifications:delivery-reminders';
    protected $description = 'Send delivery reminder notifications';

    public function handle()
    {
        $settings = NotificationSetting::getSettings();
        
        if (!$settings->isEventEnabled('delivery_reminder')) {
            $this->info('Delivery reminders are disabled');
            return;
        }

        $reminderDate = Carbon::now()->addDays($settings->delivery_reminder_days);
        
        $orders = Order::whereDate('delivery_date', $reminderDate->toDateString())
            ->whereNotIn('stitching_status_id', function($query) {
                $query->select('id')
                      ->from('stitching_statuses')
                      ->whereIn('name', ['Delivered', 'Cancelled']);
            })
            ->with(['customer.user', 'stitchingStatus'])
            ->get();

        $count = 0;
        foreach ($orders as $order) {
            NotificationService::deliveryReminder($order);
            $count++;
        }

        $this->info("Sent {$count} delivery reminder notifications");
    }
}