<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Config;

class SmtpController extends Controller
{
    public function show(): JsonResponse
    {
        return response()->json([
            'smtp_host' => Setting::get('smtp_host', ''),
            'smtp_port' => Setting::get('smtp_port', '587'),
            'smtp_username' => Setting::get('smtp_username', ''),
            'smtp_password' => Setting::get('smtp_password', ''),
            'smtp_encryption' => Setting::get('smtp_encryption', 'tls'),
            'mail_from_address' => Setting::get('mail_from_address', ''),
            'mail_from_name' => Setting::get('mail_from_name', ''),
        ]);
    }

    public function update(Request $request): JsonResponse
    {
        $request->validate([
            'smtp_host' => 'required|string|max:255',
            'smtp_port' => 'required|integer|min:1|max:65535',
            'smtp_username' => 'required|string|max:255',
            'smtp_password' => 'required|string|max:255',
            'smtp_encryption' => 'required|in:tls,ssl,none',
            'mail_from_address' => 'required|email|max:255',
            'mail_from_name' => 'required|string|max:255',
        ]);

        foreach ($request->only([
            'smtp_host', 'smtp_port', 'smtp_username', 'smtp_password',
            'smtp_encryption', 'mail_from_address', 'mail_from_name'
        ]) as $key => $value) {
            Setting::set($key, $value);
        }

        return response()->json(['message' => 'SMTP settings updated successfully']);
    }

    public function testEmail(Request $request): JsonResponse
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        try {
            // Get current SMTP settings
            $smtpSettings = [
                'host' => Setting::get('smtp_host'),
                'port' => Setting::get('smtp_port', '587'),
                'username' => Setting::get('smtp_username'),
                'password' => Setting::get('smtp_password'),
                'encryption' => Setting::get('smtp_encryption', 'tls'),
                'from_address' => Setting::get('mail_from_address'),
                'from_name' => Setting::get('mail_from_name'),
            ];

            // Temporarily configure mail settings
            Config::set('mail.mailers.smtp.host', $smtpSettings['host']);
            Config::set('mail.mailers.smtp.port', $smtpSettings['port']);
            Config::set('mail.mailers.smtp.username', $smtpSettings['username']);
            Config::set('mail.mailers.smtp.password', $smtpSettings['password']);
            Config::set('mail.mailers.smtp.encryption', $smtpSettings['encryption']);
            Config::set('mail.from.address', $smtpSettings['from_address']);
            Config::set('mail.from.name', $smtpSettings['from_name']);

            // Send test email
            Mail::raw('This is a test email from your Boutique Management System. If you received this email, your SMTP configuration is working correctly!', function ($message) use ($request, $smtpSettings) {
                $message->to($request->email)
                        ->subject('SMTP Test Email - Boutique System')
                        ->from($smtpSettings['from_address'], $smtpSettings['from_name']);
            });

            return response()->json(['message' => 'Test email sent successfully!']);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to send test email: ' . $e->getMessage()
            ], 500);
        }
    }
}
