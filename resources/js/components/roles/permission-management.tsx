import { useState, useEffect } from 'react';
import { getPermissions, createPermission, deletePermission } from '@/api/roles';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

interface Permission {
  id: number;
  name: string;
  description: string;
}

export default function PermissionManagement() {
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [loading, setLoading] = useState(true);
  const [newPermName, setNewPermName] = useState('');
  const [newPermDesc, setNewPermDesc] = useState('');
  const [creating, setCreating] = useState(false);

  const fetchPermissions = async () => {
    try {
      setLoading(true);
      const response = await getPermissions();
      setPermissions(response.data);
    } catch (error) {
      console.error('Failed to fetch permissions:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPermissions();
  }, []);

  const handleCreate = async () => {
    if (!newPermName.trim()) return;
    
    try {
      setCreating(true);
      await createPermission({ name: newPermName, description: newPermDesc });
      toast.success('Permission created successfully');
      setNewPermName('');
      setNewPermDesc('');
      fetchPermissions();
    } catch (error) {
      console.error('Failed to create permission:', error);
      toast.error('Failed to create permission');
    } finally {
      setCreating(false);
    }
  };

  const handleDelete = async (id: number, name: string) => {
    try {
      await deletePermission(id);
      toast.success(`${name} deleted successfully`);
      fetchPermissions();
    } catch (error) {
      console.error('Failed to delete permission:', error);
      toast.error('Failed to delete permission');
    }
  };

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Permissions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Permission name"
            value={newPermName}
            onChange={(e) => setNewPermName(e.target.value)}
          />
          <Input
            placeholder="Description (optional)"
            value={newPermDesc}
            onChange={(e) => setNewPermDesc(e.target.value)}
          />
          <Button onClick={handleCreate} disabled={creating || !newPermName.trim()}>
            <Plus className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Description</th>
                <th className="text-left p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {permissions.map((perm) => (
                <tr key={perm.id} className="border-b hover:bg-gray-50 dark:hover:bg-[oklch(0.269_0_0)]">
                  <td className="p-4 font-medium">{perm.name}</td>
                  <td className="p-4 text-sm text-gray-600">{perm.description || '-'}</td>
                  <td className="p-4">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(perm.id, perm.name)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
