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
            ['name' => 'view_measurements', 'description' => 'View measurements'],
            ['name' => 'create_measurements', 'description' => 'Create measurements'],
            ['name' => 'edit_measurements', 'description' => 'Edit measurements'],
            ['name' => 'delete_measurements', 'description' => 'Delete measurements'],
            ['name' => 'manage_measurement_settings', 'description' => 'Manage measurement categories and fields'],
            ['name' => 'view_garment_types', 'description' => 'View garment types'],
            ['name' => 'create_garment_types', 'description' => 'Create garment types'],
            ['name' => 'edit_garment_types', 'description' => 'Edit garment types'],
            ['name' => 'delete_garment_types', 'description' => 'Delete garment types'],
            ['name' => 'view_fabrics', 'description' => 'View fabrics'],
            ['name' => 'create_fabrics', 'description' => 'Create fabrics'],
            ['name' => 'edit_fabrics', 'description' => 'Edit fabrics'],
            ['name' => 'delete_fabrics', 'description' => 'Delete fabrics'],
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
                'view_users',
                'view_measurements', 'create_measurements', 'edit_measurements',
                'view_garment_types', 'create_garment_types', 'edit_garment_types',
                'view_fabrics', 'create_fabrics', 'edit_fabrics'
            ])->pluck('id')
        );

        $viewerRole = Role::firstOrCreate(
            ['name' => 'Viewer'],
            ['description' => 'Read-only access']
        );
        $viewerRole->permissions()->sync(
            Permission::whereIn('name', ['view_customers', 'view_tailors', 'view_users', 'view_measurements', 'view_garment_types', 'view_fabrics'])->pluck('id')
        );
    }
}
