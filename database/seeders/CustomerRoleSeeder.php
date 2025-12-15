<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\Permission;
use Illuminate\Database\Seeder;

class CustomerRoleSeeder extends Seeder
{
    public function run(): void
    {
        // Create customer permissions
        $permissions = [
            'view_own_orders' => 'View own orders',
            'view_own_measurements' => 'View own measurements',
            'download_own_invoices' => 'Download own invoices',
        ];

        $createdPermissions = [];
        foreach ($permissions as $name => $description) {
            $createdPermissions[] = Permission::firstOrCreate(
                ['name' => $name],
                ['description' => $description]
            );
        }

        // Create customer role
        $customerRole = Role::firstOrCreate(
            ['name' => 'Customer'],
            ['description' => 'Customer with limited access to own data']
        );

        // Attach permissions to customer role
        $customerRole->permissions()->sync(collect($createdPermissions)->pluck('id'));
    }
}
