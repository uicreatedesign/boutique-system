import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useState, useEffect } from 'react';
import { getPermissions } from '@/api/roles';

const roleSchema = z.object({
  name: z.string().min(1, 'Name is required').max(191),
  description: z.string().optional().or(z.literal('')),
  permissions: z.array(z.number()).optional(),
});

type RoleFormData = z.infer<typeof roleSchema>;

interface RoleFormProps {
  onSubmit: (data: RoleFormData) => void;
  loading?: boolean;
  initialData?: Partial<RoleFormData & { permissions: Array<{ id: number }> }>;
}

export default function RoleForm({ onSubmit, loading, initialData }: RoleFormProps) {
  const [permissions, setPermissions] = useState<Array<{ id: number; name: string; description: string }>>([]);
  const [selectedPermissions, setSelectedPermissions] = useState<number[]>(
    initialData?.permissions?.map(p => p.id) || []
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RoleFormData>({
    resolver: zodResolver(roleSchema),
    defaultValues: {
      name: initialData?.name || '',
      description: initialData?.description || '',
    },
  });

  useEffect(() => {
    fetchPermissions();
  }, []);

  const fetchPermissions = async () => {
    try {
      const response = await getPermissions();
      setPermissions(response.data);
    } catch (error) {
      console.error('Failed to fetch permissions:', error);
    }
  };

  const handlePermissionToggle = (permId: number) => {
    setSelectedPermissions(prev =>
      prev.includes(permId) ? prev.filter(id => id !== permId) : [...prev, permId]
    );
  };

  const handleFormSubmit = (data: RoleFormData) => {
    onSubmit({ ...data, permissions: selectedPermissions });
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name">Name *</Label>
        <Input
          id="name"
          {...register('name')}
          className={errors.name ? 'border-red-500' : ''}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          {...register('description')}
          className={errors.description ? 'border-red-500' : ''}
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
      </div>

      <div>
        <Label>Permissions</Label>
        <div className="space-y-2 mt-2 max-h-48 overflow-y-auto border rounded p-3">
          {permissions.map((perm) => (
            <div key={perm.id} className="flex items-center space-x-2">
              <Checkbox
                id={`perm-${perm.id}`}
                checked={selectedPermissions.includes(perm.id)}
                onCheckedChange={() => handlePermissionToggle(perm.id)}
              />
              <label htmlFor={`perm-${perm.id}`} className="text-sm cursor-pointer">
                {perm.name} {perm.description && `- ${perm.description}`}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? 'Saving...' : 'Save Role'}
      </Button>
    </form>
  );
}
