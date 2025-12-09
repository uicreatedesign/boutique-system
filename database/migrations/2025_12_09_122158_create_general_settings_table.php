<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('general_settings', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->text('value')->nullable();
            $table->timestamps();
        });

        // Insert default settings
        DB::table('general_settings')->insert([
            ['key' => 'app_name', 'value' => 'Boutique System', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'currency', 'value' => 'USD', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'currency_symbol', 'value' => '$', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'tax_rate', 'value' => '0', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'order_prefix', 'value' => 'ORD', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'default_delivery_days', 'value' => '7', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'business_name', 'value' => 'My Boutique', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'business_address', 'value' => '', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'business_phone', 'value' => '', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'business_email', 'value' => '', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'timezone', 'value' => 'UTC', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }

    public function down(): void
    {
        Schema::dropIfExists('general_settings');
    }
};