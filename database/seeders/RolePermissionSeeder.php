<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;

class RolePermissionSeeder extends Seeder
{
    public function run(): void
    {
        $permissions = [
            ['name' => 'view_customers', 'description' => 'View customers'],
            ['name' => 'create_customers', 'description' => 'Create customers'],
            ['name' => 'edit_customers', 'description' => 'Edit customers'],
            ['name' => 'delete_customers', 'description' => 'Delete customers'],
            ['name' => 'view_tailors', 'description' => 'View tailors'],
            ['name' => 'create_tailors', 'description' => 'Create tailors'],
            ['name' => 'edit_tailors', 'description' => 'Edit tailors'],
            ['name' => 'delete_tailors', 'description' => 'Delete tailors'],
            ['name' => 'view_users', 'description' => 'View users'],
            ['name' => 'create_users', 'description' => 'Create users'],
            ['name' => 'edit_users', 'description' => 'Edit users'],
            ['name' => 'delete_users', 'description' => 'Delete users'],
            ['name' => 'manage_roles', 'description' => 'Manage roles and permissions'],
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission['name']], $permission);
        }

        $adminRole = Role::firstOrCreate(
            ['name' => 'Admin'],
            ['description' => 'Full system access']
        );
        $adminRole->permissions()->sync(Permission::all());

        $managerRole = Role::firstOrCreate(
            ['name' => 'Manager'],
            ['description' => 'Can manage customers']
        );
        $managerRole->permissions()->sync(
            Permission::whereIn('name', [
                'view_customers', 'create_customers', 'edit_customers',
                'view_tailors', 'create_tailors', 'edit_tailors',
                'view_users'
            ])->pluck('id')
        );

        $viewerRole = Role::firstOrCreate(
            ['name' => 'Viewer'],
            ['description' => 'Read-only access']
        );
        $viewerRole->permissions()->sync(
            Permission::whereIn('name', ['view_customers', 'view_tailors', 'view_users'])->pluck('id')
        );
    }
}
