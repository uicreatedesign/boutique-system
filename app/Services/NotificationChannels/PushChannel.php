<?php

namespace App\Services\NotificationChannels;

use App\Models\NotificationSetting;
use App\Services\NotificationService;

class PushChannel implements NotificationChannelInterface
{
    public function send(array $data): bool
    {
        if (!$this->isEnabled()) {
            return false;
        }

        NotificationService::createInAppNotification($data);
        
        return true;
    }

    public function isEnabled(): bool
    {
        $settings = NotificationSetting::getSettings();
        return $settings->isChannelEnabled('push');
    }

    public function getName(): string
    {
        return 'push';
    }
}