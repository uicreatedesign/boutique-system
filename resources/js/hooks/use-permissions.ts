import { usePage } from '@inertiajs/react';

export function usePermissions() {
    const { userPermissions } = usePage().props as any;
    
    const hasPermission = (permission: string): boolean => {
        return Array.isArray(userPermissions) && userPermissions.includes(permission);
    };

    const hasAnyPermission = (permissions: string[]): boolean => {
        return permissions.some(permission => hasPermission(permission));
    };

    const hasAllPermissions = (permissions: string[]): boolean => {
        return permissions.every(permission => hasPermission(permission));
    };

    const canView = (module: string): boolean => {
        return hasPermission(`view_${module}`);
    };

    const canCreate = (module: string): boolean => {
        return hasPermission(`create_${module}`);
    };

    const canEdit = (module: string): boolean => {
        return hasPermission(`edit_${module}`);
    };

    const canDelete = (module: string): boolean => {
        return hasPermission(`delete_${module}`);
    };

    return {
        hasPermission,
        hasAnyPermission,
        hasAllPermissions,
        canView,
        canCreate,
        canEdit,
        canDelete,
        permissions: userPermissions || [],
    };
}