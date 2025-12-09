<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('notifications', function (Blueprint $table) {
            $table->id();
            $table->string('type'); // order_created, payment_received, delivery_reminder, etc.
            $table->string('title');
            $table->text('message');
            $table->json('data')->nullable(); // Additional data like order_id, customer_id, etc.
            $table->foreignId('user_id')->nullable()->constrained()->onDelete('cascade'); // null for system-wide notifications
            $table->timestamp('read_at')->nullable();
            $table->enum('priority', ['low', 'normal', 'high', 'urgent'])->default('normal');
            $table->string('icon')->nullable();
            $table->string('color')->default('#3b82f6');
            $table->timestamps();
            
            $table->index(['user_id', 'read_at']);
            $table->index(['type', 'created_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('notifications');
    }
};