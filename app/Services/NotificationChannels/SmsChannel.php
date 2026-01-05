<?php

namespace App\Services\NotificationChannels;

use App\Models\NotificationSetting;
use Illuminate\Support\Facades\Log;

class SmsChannel implements NotificationChannelInterface
{
    public function send(array $data): bool
    {
        if (!$this->isEnabled()) {
            return false;
        }

        try {
            Log::info('SMS notification logged', $data);
            return true;
        } catch (\Exception $e) {
            Log::error('SMS notification failed: ' . $e->getMessage());
            return false;
        }
    }

    public function isEnabled(): bool
    {
        $settings = NotificationSetting::getSettings();
        return $settings->isChannelEnabled('sms');
    }

    public function getName(): string
    {
        return 'sms';
    }
}