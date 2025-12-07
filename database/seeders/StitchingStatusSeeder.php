<?php

namespace Database\Seeders;

use App\Models\StitchingStatus;
use Illuminate\Database\Seeder;

class StitchingStatusSeeder extends Seeder
{
    public function run(): void
    {
        $statuses = [
            ['name' => 'Pending', 'color' => '#6366f1', 'order' => 1, 'description' => 'Order received, waiting to start'],
            ['name' => 'Cutting', 'color' => '#f59e0b', 'order' => 2, 'description' => 'Fabric cutting in progress'],
            ['name' => 'Stitching', 'color' => '#3b82f6', 'order' => 3, 'description' => 'Stitching in progress'],
            ['name' => 'Finishing', 'color' => '#8b5cf6', 'order' => 4, 'description' => 'Final touches and finishing work'],
            ['name' => 'Ironing', 'color' => '#ec4899', 'order' => 5, 'description' => 'Ironing and pressing'],
            ['name' => 'Ready for Trial', 'color' => '#14b8a6', 'order' => 6, 'description' => 'Ready for customer trial'],
            ['name' => 'In Progress', 'color' => '#10b981', 'order' => 7, 'description' => 'Work in progress'],
            ['name' => 'Ready', 'color' => '#10b981', 'order' => 8, 'description' => 'Ready for delivery'],
            ['name' => 'Delivered', 'color' => '#22c55e', 'order' => 9, 'description' => 'Delivered to customer'],
            ['name' => 'Cancelled', 'color' => '#ef4444', 'order' => 10, 'description' => 'Order cancelled'],
        ];

        foreach ($statuses as $status) {
            StitchingStatus::firstOrCreate(
                ['slug' => \Illuminate\Support\Str::slug($status['name'])],
                $status
            );
        }
    }
}
