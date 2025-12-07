<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;

class TailorRoleSeeder extends Seeder
{
    public function run(): void
    {
        $permissions = [
            ['name' => 'view_tailor_dashboard', 'description' => 'Access tailor dashboard'],
            ['name' => 'view_own_orders', 'description' => 'View assigned orders'],
            ['name' => 'update_order_status', 'description' => 'Update order status'],
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission['name']], $permission);
        }

        $tailorRole = Role::firstOrCreate(
            ['name' => 'Tailor'],
            ['description' => 'Tailor with limited dashboard access']
        );

        $tailorRole->permissions()->sync(
            Permission::whereIn('name', ['view_tailor_dashboard', 'view_own_orders', 'update_order_status'])->pluck('id')
        );
    }
}
