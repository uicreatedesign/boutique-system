<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('notification_settings', function (Blueprint $table) {
            $table->id();
            $table->boolean('email_enabled')->default(true);
            $table->boolean('whatsapp_enabled')->default(false);
            $table->boolean('order_created')->default(true);
            $table->boolean('order_status_changed')->default(true);
            $table->boolean('payment_received')->default(true);
            $table->boolean('delivery_reminder')->default(true);
            $table->integer('delivery_reminder_days')->default(1);
            $table->timestamps();
        });

        // Insert default settings
        DB::table('notification_settings')->insert([
            'email_enabled' => true,
            'whatsapp_enabled' => false,
            'order_created' => true,
            'order_status_changed' => true,
            'payment_received' => true,
            'delivery_reminder' => true,
            'delivery_reminder_days' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notification_settings');
    }
};
