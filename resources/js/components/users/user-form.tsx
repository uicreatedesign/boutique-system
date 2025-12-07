import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { getRoles } from '@/api/users';

interface Role {
  id: number;
  name: string;
  description: string;
}

interface UserFormProps {
  initialData?: {
    name: string;
    email: string;
    roles: Array<{ id: number; name: string }>;
  };
  onSubmit: (data: any) => void;
  loading?: boolean;
  isEdit?: boolean;
}

export default function UserForm({ initialData, onSubmit, loading, isEdit }: UserFormProps) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    email: initialData?.email || '',
    password: '',
    role_ids: initialData?.roles?.map(r => r.id) || [],
  });
  const [roles, setRoles] = useState<Role[]>([]);

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      const response = await getRoles();
      setRoles(response.data);
    } catch (error) {
      console.error('Failed to fetch roles:', error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleRoleChange = (roleId: number, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      role_ids: checked 
        ? [...prev.role_ids, roleId]
        : prev.role_ids.filter(id => id !== roleId)
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          required
        />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          required
        />
      </div>

      <div>
        <Label htmlFor="password">
          Password {isEdit && '(leave blank to keep current)'}
        </Label>
        <Input
          id="password"
          type="password"
          value={formData.password}
          onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
          required={!isEdit}
        />
      </div>

      <div>
        <Label>Roles</Label>
        <div className="space-y-2 mt-2">
          {roles.map((role) => (
            <div key={role.id} className="flex items-center space-x-2">
              <Checkbox
                id={`role-${role.id}`}
                checked={formData.role_ids.includes(role.id)}
                onCheckedChange={(checked) => handleRoleChange(role.id, checked as boolean)}
              />
              <Label htmlFor={`role-${role.id}`} className="text-sm">
                {role.name} - {role.description}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? 'Saving...' : isEdit ? 'Update User' : 'Create User'}
      </Button>
    </form>
  );
}