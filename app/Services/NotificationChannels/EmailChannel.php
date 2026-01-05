<?php

namespace App\Services\NotificationChannels;

use App\Models\NotificationSetting;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class EmailChannel implements NotificationChannelInterface
{
    public function send(array $data): bool
    {
        if (!$this->isEnabled()) {
            return false;
        }

        try {
            $recipients = $this->getRecipients($data);
            
            foreach ($recipients as $recipient) {
                Mail::send('emails.notification', [
                    'title' => $data['title'],
                    'message' => $data['message'],
                    'data' => $data['data'] ?? [],
                    'type' => $data['type'],
                ], function ($message) use ($recipient, $data) {
                    $message->to($recipient['email'], $recipient['name'])
                           ->subject($data['title'])
                           ->from(config('mail.from.address'), config('mail.from.name'));
                });
                
                Log::info('Email sent to: ' . $recipient['email']);
            }

            return true;
        } catch (\Exception $e) {
            Log::error('Email notification failed: ' . $e->getMessage());
            return false;
        }
    }

    public function isEnabled(): bool
    {
        $settings = NotificationSetting::getSettings();
        return $settings->isChannelEnabled('email');
    }

    public function getName(): string
    {
        return 'email';
    }

    private function getRecipients(array $data): array
    {
        $admin = \App\Models\User::first();
        return $admin ? [['email' => $admin->email, 'name' => $admin->name]] : [];
    }
}