<?php

namespace Tests\Feature;

use App\Models\Customer;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CustomerTest extends TestCase
{
    use RefreshDatabase;

    public function test_can_create_customer(): void
    {
        $user = User::factory()->create();
        
        $response = $this->actingAs($user)->postJson('/api/customers', [
            'name' => 'John Doe',
            'phone' => '1234567890',
            'email' => 'john@example.com',
            'address' => '123 Main St',
        ]);

        $response->assertStatus(201);
        $this->assertDatabaseHas('customers', ['name' => 'John Doe']);
    }

    public function test_can_read_customers(): void
    {
        $user = User::factory()->create();
        Customer::factory()->count(3)->create();

        $response = $this->actingAs($user)->getJson('/api/customers');

        $response->assertStatus(200)
                ->assertJsonStructure([
                    'data' => [
                        '*' => ['id', 'name', 'phone', 'email']
                    ]
                ]);
    }

    public function test_can_update_customer(): void
    {
        $user = User::factory()->create();
        $customer = Customer::factory()->create();

        $response = $this->actingAs($user)->putJson("/api/customers/{$customer->id}", [
            'name' => 'Updated Name',
            'phone' => $customer->phone,
            'email' => $customer->email,
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('customers', ['name' => 'Updated Name']);
    }

    public function test_can_delete_customer(): void
    {
        $user = User::factory()->create();
        $customer = Customer::factory()->create();

        $response = $this->actingAs($user)->deleteJson("/api/customers/{$customer->id}");

        $response->assertStatus(200);
        $this->assertDatabaseMissing('customers', ['id' => $customer->id]);
    }
}
