<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tailors', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('phone');
            $table->string('email')->nullable()->unique();
            $table->enum('skill_level', ['beginner', 'intermediate', 'expert'])->default('intermediate');
            $table->text('address')->nullable();
            $table->enum('status', ['active', 'inactive', 'on_leave'])->default('active');
            $table->decimal('hourly_rate', 8, 2)->nullable();
            $table->text('specialization')->nullable();
            $table->date('join_date')->nullable();
            $table->json('meta')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tailors');
    }
};
