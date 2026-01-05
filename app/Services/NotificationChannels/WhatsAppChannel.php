<?php

namespace App\Services\NotificationChannels;

use App\Models\NotificationSetting;
use Illuminate\Support\Facades\Log;

class WhatsAppChannel implements NotificationChannelInterface
{
    public function send(array $data): bool
    {
        if (!$this->isEnabled()) {
            return false;
        }

        try {
            Log::info('WhatsApp notification logged', $data);
            return true;
        } catch (\Exception $e) {
            Log::error('WhatsApp notification failed: ' . $e->getMessage());
            return false;
        }
    }

    public function isEnabled(): bool
    {
        $settings = NotificationSetting::getSettings();
        return $settings->isChannelEnabled('whatsapp');
    }

    public function getName(): string
    {
        return 'whatsapp';
    }
}