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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('order_number')->unique();
            $table->foreignId('customer_id')->constrained()->onDelete('cascade');
            $table->foreignId('garment_type_id')->constrained()->onDelete('cascade');
            $table->foreignId('tailor_id')->constrained('tailors')->onDelete('cascade');
            $table->foreignId('measurement_id')->nullable()->constrained('customer_measurements')->onDelete('set null');
            $table->foreignId('fabric_id')->nullable()->constrained('fabrics')->onDelete('set null');
            $table->boolean('customer_fabric')->default(false);
            $table->foreignId('stitching_status_id')->constrained()->onDelete('cascade');
            $table->date('order_date');
            $table->date('delivery_date');
            $table->enum('priority', ['normal', 'urgent'])->default('normal');
            $table->decimal('total_amount', 10, 2);
            $table->decimal('advance_paid', 10, 2)->default(0);
            $table->decimal('discount', 10, 2)->default(0);
            $table->text('special_instructions')->nullable();
            $table->text('notes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
