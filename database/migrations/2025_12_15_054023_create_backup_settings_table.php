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
        Schema::create('backup_settings', function (Blueprint $table) {
            $table->id();
            $table->boolean('auto_backup_enabled')->default(false);
            $table->integer('retention_days')->default(30);
            $table->string('backup_time')->default('02:00');
            $table->timestamps();
        });

        // Insert default settings
        DB::table('backup_settings')->insert([
            'auto_backup_enabled' => false,
            'retention_days' => 30,
            'backup_time' => '02:00',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('backup_settings');
    }
};
