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
        Schema::create('fabrics', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('type')->nullable();
            $table->string('color')->nullable();
            $table->decimal('price_per_meter', 10, 2)->nullable();
            $table->decimal('quantity_in_stock', 10, 2)->default(0);
            $table->string('unit')->default('meter');
            $table->text('description')->nullable();
            $table->enum('status', ['available', 'out_of_stock', 'discontinued'])->default('available');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fabrics');
    }
};
