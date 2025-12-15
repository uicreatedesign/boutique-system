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
            'order_created' => 'required|boolean',
            'order_status_changed' => 'required|boolean',
            'payment_received' => 'required|boolean',
            'delivery_reminder' => 'required|boolean',
            'delivery_reminder_days' => 'required|integer|min:1|max:7',
        ]);

        $settings = NotificationSetting::first();
        $settings->update($validated);

        return back()->with('success', 'Notification settings updated successfully');
    }
}
