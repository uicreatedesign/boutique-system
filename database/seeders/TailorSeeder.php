<?php

namespace Database\Seeders;

use App\Models\Tailor;
use Illuminate\Database\Seeder;

class TailorSeeder extends Seeder
{
    public function run(): void
    {
        $tailors = [
            [
                'name' => 'John Smith',
                'phone' => '+1234567890',
                'email' => 'john.smith@example.com',
                'skill_level' => 'expert',
                'address' => '123 Main St, New York, NY',
                'status' => 'active',
                'hourly_rate' => 45.00,
                'specialization' => 'Wedding dresses, Evening gowns',
                'join_date' => '2023-01-15',
            ],
            [
                'name' => 'Maria Garcia',
                'phone' => '+1234567891',
                'email' => 'maria.garcia@example.com',
                'skill_level' => 'expert',
                'address' => '456 Oak Ave, Los Angeles, CA',
                'status' => 'active',
                'hourly_rate' => 50.00,
                'specialization' => 'Suits, Formal wear',
                'join_date' => '2022-06-20',
            ],
            [
                'name' => 'Ahmed Hassan',
                'phone' => '+1234567892',
                'email' => 'ahmed.hassan@example.com',
                'skill_level' => 'intermediate',
                'address' => '789 Pine Rd, Chicago, IL',
                'status' => 'active',
                'hourly_rate' => 35.00,
                'specialization' => 'Alterations, Casual wear',
                'join_date' => '2023-09-10',
            ],
            [
                'name' => 'Sarah Johnson',
                'phone' => '+1234567893',
                'email' => null,
                'skill_level' => 'beginner',
                'address' => '321 Elm St, Houston, TX',
                'status' => 'active',
                'hourly_rate' => 25.00,
                'specialization' => 'Basic alterations',
                'join_date' => '2024-03-01',
            ],
            [
                'name' => 'David Lee',
                'phone' => '+1234567894',
                'email' => 'david.lee@example.com',
                'skill_level' => 'intermediate',
                'address' => '654 Maple Dr, Miami, FL',
                'status' => 'on_leave',
                'hourly_rate' => 38.00,
                'specialization' => 'Traditional wear, Ethnic clothing',
                'join_date' => '2023-04-15',
            ],
        ];

        foreach ($tailors as $tailor) {
            Tailor::create($tailor);
        }
    }
}
