import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

interface GarmentType {
  id?: number;
  name: string;
  description: string;
  status: 'active' | 'inactive';
}

interface GarmentTypeFormProps {
  garmentType?: GarmentType;
  onSuccess: () => void;
}

export default function GarmentTypeForm({ garmentType, onSuccess }: GarmentTypeFormProps) {
  const { data, setData, post, put, processing, errors } = useForm({
    name: garmentType?.name || '',
    description: garmentType?.description || '',
    status: garmentType?.status || 'active',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (garmentType?.id) {
      put(`/garment-types/${garmentType.id}`, {
        onSuccess: () => {
          toast.success('Garment type updated successfully');
          onSuccess();
        },
        onError: () => {
          toast.error('Failed to update garment type');
        }
      });
    } else {
      post('/garment-types', {
        onSuccess: () => {
          toast.success('Garment type created successfully');
          onSuccess();
        },
        onError: () => {
          toast.error('Failed to create garment type');
        }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name *</Label>
        <Input
          id="name"
          value={data.name}
          onChange={(e) => setData('name', e.target.value)}
          placeholder="e.g., Shirt, Pant, Kurti"
        />
        {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={data.description}
          onChange={(e) => setData('description', e.target.value)}
          placeholder="Enter description"
          rows={3}
        />
        {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description}</p>}
      </div>

      <div>
        <Label htmlFor="status">Status *</Label>
        <Select value={data.status} onValueChange={(value) => setData('status', value as 'active' | 'inactive')}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
        {errors.status && <p className="text-sm text-red-500 mt-1">{errors.status}</p>}
      </div>

      <div className="flex justify-end gap-2">
        <Button type="submit" disabled={processing}>
          {processing ? 'Saving...' : garmentType ? 'Update' : 'Create'}
        </Button>
      </div>
    </form>
  );
}
