<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('notification_settings', function (Blueprint $table) {
            $table->boolean('sms_enabled')->default(false)->after('whatsapp_enabled');
            $table->boolean('push_enabled')->default(true)->after('sms_enabled');
            $table->boolean('low_stock_alert')->default(true)->after('delivery_reminder');
            $table->json('email_templates')->nullable()->after('delivery_reminder_days');
            $table->json('whatsapp_templates')->nullable()->after('email_templates');
        });

        // Update existing record
        DB::table('notification_settings')->update([
            'sms_enabled' => false,
            'push_enabled' => true,
            'low_stock_alert' => true,
        ]);
    }

    public function down(): void
    {
        Schema::table('notification_settings', function (Blueprint $table) {
            $table->dropColumn(['sms_enabled', 'push_enabled', 'low_stock_alert', 'email_templates', 'whatsapp_templates']);
        });
    }
};