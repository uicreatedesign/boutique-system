<?php

namespace App\Observers;

use App\Models\OrderPayment;
use App\Services\NotificationService;

class OrderPaymentObserver
{
    public function created(OrderPayment $payment): void
    {
        NotificationService::paymentReceived($payment);
    }
}