<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use App\Services\NotificationChannels\EmailChannel;

class TestEmail extends Command
{
    protected $signature = 'test:email {email}';
    protected $description = 'Test email sending';

    public function handle()
    {
        try {
            $user = \App\Models\User::first();
            if (!$user) {
                $this->error('No users found');
                return;
            }
            
            $channel = new EmailChannel();
            $result = $channel->send([
                'type' => 'test_notification',
                'title' => 'Test Email',
                'message' => 'Test email notification.',
                'user_id' => $user->id,
            ]);
            
            $this->info($result ? "Email sent to {$user->email}" : "Email failed");
            
        } catch (\Exception $e) {
            $this->error("Error: " . $e->getMessage());
        }
    }
}