# Roles & Permissions System

## Overview
A complete dynamic role and permission management system has been implemented in your Laravel + React boutique system.

## Features
- ✅ Create, edit, and delete roles
- ✅ Create and delete permissions
- ✅ Assign multiple permissions to roles
- ✅ User-friendly interface using shadcn/ui components
- ✅ Real-time updates with toast notifications
- ✅ Tabbed interface for roles and permissions management

## Database Structure

### Tables Created
1. **permissions** - Stores all available permissions
2. **roles** - Stores all roles
3. **permission_role** - Many-to-many relationship between permissions and roles
4. **role_user** - Many-to-many relationship between roles and users

## Backend Components

### Models
- `App\Models\Role` - Role model with permissions relationship
- `App\Models\Permission` - Permission model with roles relationship
- `App\Models\User` - Updated with roles relationship

### Controllers
- `App\Http\Controllers\RoleController` - CRUD operations for roles
- `App\Http\Controllers\PermissionController` - CRUD operations for permissions

### API Endpoints
- `GET /api/roles` - List all roles with permissions
- `POST /api/roles` - Create new role
- `PUT /api/roles/{id}` - Update role
- `DELETE /api/roles/{id}` - Delete role
- `GET /api/permissions` - List all permissions
- `POST /api/permissions` - Create new permission
- `DELETE /api/permissions/{id}` - Delete permission

## Frontend Components

### Pages
- `/roles` - Main roles and permissions management page

### Components
- `RoleTable` - Display roles in a table with actions
- `RoleForm` - Form for creating/editing roles with permission checkboxes
- `RoleCreateModal` - Modal for creating new roles
- `RoleEditModal` - Modal for editing existing roles
- `RoleDeleteDialog` - Confirmation dialog for deleting roles
- `PermissionManagement` - Inline permission creation and management
- `Tabs` - shadcn/ui tabs component for switching between roles and permissions

## Initial Data

The system comes pre-seeded with:

### Permissions
- `view_customers` - View customers
- `create_customers` - Create customers
- `edit_customers` - Edit customers
- `delete_customers` - Delete customers
- `manage_roles` - Manage roles and permissions

### Roles
- **Admin** - Full system access (all permissions)
- **Manager** - Can view, create, and edit customers
- **Viewer** - Read-only access (view customers only)

## Usage

### Accessing the System
1. Navigate to `/roles` in your application
2. Use the tabs to switch between Roles and Permissions management

### Creating a Role
1. Click "Add Role" button
2. Enter role name and description
3. Select permissions by checking boxes
4. Click "Save Role"

### Creating a Permission
1. Switch to "Permissions" tab
2. Enter permission name and optional description
3. Click "Add" button

### Assigning Roles to Users
To assign roles to users, use the relationship in your code:
```php
$user->roles()->attach($roleId);
$user->roles()->sync([$roleId1, $roleId2]);
```

## Next Steps

To implement permission checking in your application:

1. Create a middleware for permission checking
2. Add helper methods to User model:
```php
public function hasRole($role) {
    return $this->roles->contains('name', $role);
}

public function hasPermission($permission) {
    return $this->roles->flatMap->permissions->contains('name', $permission);
}
```

3. Use in controllers or middleware:
```php
if (!auth()->user()->hasPermission('create_customers')) {
    abort(403);
}
```
