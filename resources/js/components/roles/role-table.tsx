import { useState, useEffect } from 'react';
import { getRoles } from '@/api/roles';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trash2, Edit } from 'lucide-react';
import RoleEditModal from './role-edit-modal';
import RoleDeleteDialog from './role-delete-dialog';

interface Role {
  id: number;
  name: string;
  description: string;
  permissions: Array<{ id: number; name: string }>;
}

export default function RoleTable() {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(true);
  const [editRole, setEditRole] = useState<Role | null>(null);
  const [deleteRole, setDeleteRole] = useState<Role | null>(null);

  const fetchRoles = async () => {
    try {
      setLoading(true);
      const response = await getRoles();
      setRoles(response.data);
    } catch (error) {
      console.error('Failed to fetch roles:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Description</th>
              <th className="text-left p-4">Permissions</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id} className="border-b hover:bg-gray-50 dark:hover:bg-[oklch(0.269_0_0)]">
                <td className="p-4 font-medium">{role.name}</td>
                <td className="p-4 text-sm text-gray-600">{role.description || '-'}</td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-1">
                    {role.permissions.map((perm) => (
                      <Badge key={perm.id} variant="secondary">{perm.name}</Badge>
                    ))}
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setEditRole(role)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setDeleteRole(role)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editRole && (
        <RoleEditModal
          role={editRole}
          open={!!editRole}
          onClose={() => setEditRole(null)}
          onSuccess={() => {
            setEditRole(null);
            fetchRoles();
          }}
        />
      )}

      <RoleDeleteDialog
        role={deleteRole}
        open={!!deleteRole}
        onClose={() => setDeleteRole(null)}
        onSuccess={() => {
          setDeleteRole(null);
          fetchRoles();
        }}
      />
    </>
  );
}
