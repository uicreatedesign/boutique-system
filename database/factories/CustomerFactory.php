<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Customer>
 */
class CustomerFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'phone' => fake()->phoneNumber(),
            'email' => fake()->unique()->safeEmail(),
            'address' => fake()->address(),
            'dob' => fake()->dateTimeBetween('-60 years', '-18 years')->format('Y-m-d'),
            'meta' => [
                'source' => fake()->randomElement(['website', 'referral', 'walk-in']),
                'notes' => fake()->sentence(),
            ],
        ];
    }
}
