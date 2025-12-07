import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

interface StitchingStatus {
  id?: number;
  name: string;
  color: string;
  description: string;
  status: 'active' | 'inactive';
}

interface StitchingStatusFormProps {
  status?: StitchingStatus;
  onSuccess: () => void;
}

const colorOptions = [
  { value: '#3b82f6', label: 'Blue' },
  { value: '#10b981', label: 'Green' },
  { value: '#f59e0b', label: 'Orange' },
  { value: '#ef4444', label: 'Red' },
  { value: '#8b5cf6', label: 'Purple' },
  { value: '#ec4899', label: 'Pink' },
  { value: '#6366f1', label: 'Indigo' },
  { value: '#14b8a6', label: 'Teal' },
];

export default function StitchingStatusForm({ status, onSuccess }: StitchingStatusFormProps) {
  const { data, setData, post, put, processing, errors } = useForm({
    name: status?.name || '',
    color: status?.color || '#3b82f6',
    description: status?.description || '',
    status: status?.status || 'active',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (status?.id) {
      put(`/stitching-statuses/${status.id}`, {
        onSuccess: () => {
          toast.success('Stitching status updated successfully');
          onSuccess();
        },
        onError: () => {
          toast.error('Failed to update stitching status');
        }
      });
    } else {
      post('/stitching-statuses', {
        onSuccess: () => {
          toast.success('Stitching status created successfully');
          onSuccess();
        },
        onError: () => {
          toast.error('Failed to create stitching status');
        }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Status Name *</Label>
        <Input
          id="name"
          value={data.name}
          onChange={(e) => setData('name', e.target.value)}
          placeholder="e.g., Cutting, Stitching, Finishing"
        />
        {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
      </div>

      <div>
        <Label htmlFor="color">Color *</Label>
        <div className="flex gap-2">
          {colorOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setData('color', option.value)}
              className={`w-10 h-10 rounded-full border-2 ${
                data.color === option.value ? 'border-gray-900 scale-110' : 'border-gray-300'
              } transition-all`}
              style={{ backgroundColor: option.value }}
              title={option.label}
            />
          ))}
        </div>
        {errors.color && <p className="text-sm text-red-500 mt-1">{errors.color}</p>}
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={data.description}
          onChange={(e) => setData('description', e.target.value)}
          placeholder="Enter status description"
          rows={3}
        />
        {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description}</p>}
      </div>

      <div>
        <Label htmlFor="status">Status *</Label>
        <Select value={data.status} onValueChange={(value) => setData('status', value as any)}>
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
          {processing ? 'Saving...' : status ? 'Update' : 'Create'}
        </Button>
      </div>
    </form>
  );
}
