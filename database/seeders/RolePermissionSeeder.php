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
            // Dashboard
            ['name' => 'view_dashboard', 'description' => 'View dashboard'],
            
            // Customers
            ['name' => 'view_customers', 'description' => 'View customers'],
            ['name' => 'create_customers', 'description' => 'Create customers'],
            ['name' => 'edit_customers', 'description' => 'Edit customers'],
            ['name' => 'delete_customers', 'description' => 'Delete customers'],
            
            // Orders
            ['name' => 'view_orders', 'description' => 'View orders'],
            ['name' => 'create_orders', 'description' => 'Create orders'],
            ['name' => 'edit_orders', 'description' => 'Edit orders'],
            ['name' => 'delete_orders', 'description' => 'Delete orders'],
            ['name' => 'manage_order_payments', 'description' => 'Manage order payments'],
            ['name' => 'generate_invoices', 'description' => 'Generate and download invoices'],
            
            // Tailors
            ['name' => 'view_tailors', 'description' => 'View tailors'],
            ['name' => 'create_tailors', 'description' => 'Create tailors'],
            ['name' => 'edit_tailors', 'description' => 'Edit tailors'],
            ['name' => 'delete_tailors', 'description' => 'Delete tailors'],
            ['name' => 'access_tailor_dashboard', 'description' => 'Access tailor dashboard'],
            
            // Measurements
            ['name' => 'view_measurements', 'description' => 'View measurements'],
            ['name' => 'create_measurements', 'description' => 'Create measurements'],
            ['name' => 'edit_measurements', 'description' => 'Edit measurements'],
            ['name' => 'delete_measurements', 'description' => 'Delete measurements'],
            ['name' => 'manage_measurement_categories', 'description' => 'Manage measurement categories'],
            ['name' => 'manage_measurement_fields', 'description' => 'Manage measurement fields'],
            
            // Garment Types
            ['name' => 'view_garment_types', 'description' => 'View garment types'],
            ['name' => 'create_garment_types', 'description' => 'Create garment types'],
            ['name' => 'edit_garment_types', 'description' => 'Edit garment types'],
            ['name' => 'delete_garment_types', 'description' => 'Delete garment types'],
            
            // Fabrics
            ['name' => 'view_fabrics', 'description' => 'View fabrics'],
            ['name' => 'create_fabrics', 'description' => 'Create fabrics'],
            ['name' => 'edit_fabrics', 'description' => 'Edit fabrics'],
            ['name' => 'delete_fabrics', 'description' => 'Delete fabrics'],
            
            // Stitching Statuses
            ['name' => 'view_stitching_statuses', 'description' => 'View stitching statuses'],
            ['name' => 'create_stitching_statuses', 'description' => 'Create stitching statuses'],
            ['name' => 'edit_stitching_statuses', 'description' => 'Edit stitching statuses'],
            ['name' => 'delete_stitching_statuses', 'description' => 'Delete stitching statuses'],
            
            // Users & Roles
            ['name' => 'view_users', 'description' => 'View users'],
            ['name' => 'create_users', 'description' => 'Create users'],
            ['name' => 'edit_users', 'description' => 'Edit users'],
            ['name' => 'delete_users', 'description' => 'Delete users'],
            ['name' => 'view_roles', 'description' => 'View roles'],
            ['name' => 'create_roles', 'description' => 'Create roles'],
            ['name' => 'edit_roles', 'description' => 'Edit roles'],
            ['name' => 'delete_roles', 'description' => 'Delete roles'],
            ['name' => 'manage_permissions', 'description' => 'Manage permissions'],
            
            // Reports & Analytics
            ['name' => 'view_reports', 'description' => 'View reports and analytics'],
            ['name' => 'export_reports', 'description' => 'Export reports'],
            
            // Notifications
            ['name' => 'view_notifications', 'description' => 'View notifications'],
            ['name' => 'manage_notifications', 'description' => 'Manage notifications'],
            
            // Settings
            ['name' => 'manage_general_settings', 'description' => 'Manage general settings'],
            ['name' => 'manage_smtp_settings', 'description' => 'Manage SMTP settings'],
            ['name' => 'manage_appearance_settings', 'description' => 'Manage appearance settings'],
            ['name' => 'manage_backup_settings', 'description' => 'Manage backup settings'],
            ['name' => 'access_settings', 'description' => 'Access settings module'],
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission['name']], $permission);
        }

        $adminRole = Role::firstOrCreate(
            ['name' => 'Admin'],
            ['description' => 'Full system access']
        );
        $adminRole->permissions()->sync(Permission::all());
        
        // Ensure admin has access_settings permission
        $accessSettingsPermission = Permission::firstOrCreate(
            ['name' => 'access_settings'],
            ['description' => 'Access settings module']
        );
        $adminRole->permissions()->syncWithoutDetaching([$accessSettingsPermission->id]);

        $managerRole = Role::firstOrCreate(
            ['name' => 'Manager'],
            ['description' => 'Can manage customers']
        );
        $managerRole->permissions()->sync(
            Permission::whereIn('name', [
                'view_dashboard',
                'view_customers', 'create_customers', 'edit_customers',
                'view_orders', 'create_orders', 'edit_orders', 'manage_order_payments', 'generate_invoices',
                'view_tailors', 'create_tailors', 'edit_tailors',
                'view_users',
                'view_measurements', 'create_measurements', 'edit_measurements',
                'view_garment_types', 'create_garment_types', 'edit_garment_types',
                'view_fabrics', 'create_fabrics', 'edit_fabrics',
                'view_stitching_statuses', 'create_stitching_statuses', 'edit_stitching_statuses',
                'view_reports', 'export_reports',
                'view_notifications'
            ])->pluck('id')
        );

        $viewerRole = Role::firstOrCreate(
            ['name' => 'Viewer'],
            ['description' => 'Read-only access']
        );
        $viewerRole->permissions()->sync(
            Permission::whereIn('name', [
                'view_dashboard', 'view_customers', 'view_orders', 'view_tailors', 
                'view_users', 'view_measurements', 'view_garment_types', 
                'view_fabrics', 'view_stitching_statuses', 'view_reports', 'view_notifications'
            ])->pluck('id')
        );
        
        // Tailor Role
        $tailorRole = Role::firstOrCreate(
            ['name' => 'Tailor'],
            ['description' => 'Tailor access with limited permissions']
        );
        $tailorRole->permissions()->sync(
            Permission::whereIn('name', [
                'access_tailor_dashboard', 'view_orders', 'edit_orders',
                'view_measurements', 'create_measurements', 'edit_measurements',
                'view_customers', 'view_notifications'
            ])->pluck('id')
        );
        
        // Settings Manager Role
        $settingsRole = Role::firstOrCreate(
            ['name' => 'Settings Manager'],
            ['description' => 'Can manage system settings']
        );
        $settingsRole->permissions()->sync(
            Permission::whereIn('name', [
                'access_settings', 'manage_general_settings', 'manage_smtp_settings',
                'manage_appearance_settings', 'manage_backup_settings',
                'manage_measurement_categories', 'manage_measurement_fields'
            ])->pluck('id')
        );
    }
}
