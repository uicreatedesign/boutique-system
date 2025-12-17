<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('orders', function (Blueprint $table) {
            // Add boutique_fabric column if it doesn't exist
            if (!Schema::hasColumn('orders', 'boutique_fabric')) {
                $table->boolean('boutique_fabric')->default(false)->after('customer_fabric');
            }
            
            // Add boutique_fabric_photo column if it doesn't exist
            if (!Schema::hasColumn('orders', 'boutique_fabric_photo')) {
                $table->string('boutique_fabric_photo')->nullable()->after('boutique_fabric');
            }
        });
    }

    public function down(): void
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropColumn(['boutique_fabric', 'boutique_fabric_photo']);
        });
    }
};