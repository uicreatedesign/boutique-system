<?php

namespace App\Observers;

use App\Models\Order;
use App\Services\NotificationService;

class OrderObserver
{
    public function created(Order $order): void
    {
        NotificationService::orderCreated($order);
    }

    public function updated(Order $order): void
    {
        if ($order->isDirty('stitching_status_id')) {
            $oldStatusId = $order->getOriginal('stitching_status_id');
            $oldStatus = \App\Models\StitchingStatus::find($oldStatusId)?->name ?? 'Unknown';
            NotificationService::orderStatusChanged($order, $oldStatus);
        }
    }
}