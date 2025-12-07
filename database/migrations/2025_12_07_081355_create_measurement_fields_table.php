<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('measurement_fields', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->constrained('measurement_categories')->onDelete('cascade');
            $table->string('name');
            $table->string('slug');
            $table->string('unit')->default('inches');
            $table->boolean('is_required')->default(false);
            $table->integer('sort_order')->default(0);
            $table->timestamps();
            
            $table->unique(['category_id', 'slug']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('measurement_fields');
    }
};