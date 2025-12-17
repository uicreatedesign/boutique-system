<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // This migration ensures all columns exist without duplicates
        Schema::table('orders', function (Blueprint $table) {
            if (!Schema::hasColumn('orders', 'customer_fabric_photo')) {
                $table->string('customer_fabric_photo')->nullable()->after('customer_fabric');
            }
            
            if (!Schema::hasColumn('orders', 'design_image')) {
                $table->string('design_image')->nullable()->after('customer_fabric_photo');
            }
            
            if (!Schema::hasColumn('orders', 'boutique_fabric')) {
                $table->boolean('boutique_fabric')->default(false)->after('customer_fabric');
            }
            
            if (!Schema::hasColumn('orders', 'boutique_fabric_photo')) {
                $table->string('boutique_fabric_photo')->nullable()->after('customer_fabric_photo');
            }
        });
    }

    public function down(): void
    {
        Schema::table('orders', function (Blueprint $table) {
            $columns = ['customer_fabric_photo', 'design_image', 'boutique_fabric', 'boutique_fabric_photo'];
            foreach ($columns as $column) {
                if (Schema::hasColumn('orders', $column)) {
                    $table->dropColumn($column);
                }
            }
        });
    }
};
