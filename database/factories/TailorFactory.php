<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tailor>
 */
class TailorFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'phone' => fake()->phoneNumber(),
            'email' => fake()->optional()->email(),
            'skill_level' => fake()->randomElement(['beginner', 'intermediate', 'expert']),
            'address' => fake()->address(),
            'status' => fake()->randomElement(['active', 'inactive', 'on_leave']),
            'hourly_rate' => fake()->randomFloat(2, 20, 60),
            'specialization' => fake()->randomElement([
                'Wedding dresses',
                'Suits and formal wear',
                'Alterations',
                'Traditional wear',
                'Casual wear',
                'Evening gowns',
            ]),
            'join_date' => fake()->dateTimeBetween('-2 years', 'now'),
        ];
    }
}
