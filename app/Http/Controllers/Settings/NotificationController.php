<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Models\NotificationSetting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NotificationController extends Controller
{
    public function index()
    {
        $settings = NotificationSetting::first();

        return Inertia::render('settings/notifications', [
            'settings' => $settings,
        ]);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'email_enabled' => 'required|boolean',
            'whatsapp_enabled' => 'required|boolean',
            'sms_enabled' => 'required|boolean',
            'push_enabled' => 'required|boolean',
            'order_created' => 'required|boolean',
            'order_status_changed' => 'required|boolean',
            'payment_received' => 'required|boolean',
            'delivery_reminder' => 'required|boolean',
            'low_stock_alert' => 'required|boolean',
            'delivery_reminder_days' => 'required|integer|min:1|max:7',
        ]);

        $settings = NotificationSetting::getSettings();
        $settings->update($validated);

        return back()->with('success', 'Notification settings updated successfully');
    }

    public function testNotification(Request $request)
    {
        $request->validate([
            'channel' => 'required|in:email,whatsapp,sms,push',
        ]);

        $testData = [
            'type' => 'test_notification',
            'title' => 'Test Notification',
            'message' => 'This is a test notification to verify your settings are working correctly.',
            'user_id' => auth()->id(),
            'priority' => 'normal',
            'color' => '#3b82f6',
        ];

        $channelClass = match($request->channel) {
            'email' => \App\Services\NotificationChannels\EmailChannel::class,
            'whatsapp' => \App\Services\NotificationChannels\WhatsAppChannel::class,
            'sms' => \App\Services\NotificationChannels\SmsChannel::class,
            'push' => \App\Services\NotificationChannels\PushChannel::class,
        };

        $channel = new $channelClass();
        $result = $channel->send($testData);

        if ($result) {
            return back()->with('success', 'Test notification sent successfully via ' . $request->channel);
        } else {
            return back()->with('error', 'Failed to send test notification via ' . $request->channel);
        }
    }
}
