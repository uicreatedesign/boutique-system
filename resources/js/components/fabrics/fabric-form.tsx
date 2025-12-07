import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

interface Fabric {
  id?: number;
  name: string;
  type: string;
  color: string;
  price_per_meter: string;
  quantity_in_stock: string;
  unit: string;
  description: string;
  status: 'available' | 'out_of_stock' | 'discontinued';
}

interface FabricFormProps {
  fabric?: Fabric;
  onSuccess: () => void;
}

export default function FabricForm({ fabric, onSuccess }: FabricFormProps) {
  const { data, setData, post, put, processing, errors } = useForm({
    name: fabric?.name || '',
    type: fabric?.type || '',
    color: fabric?.color || '',
    price_per_meter: fabric?.price_per_meter || '',
    quantity_in_stock: fabric?.quantity_in_stock || '',
    unit: fabric?.unit || 'meter',
    description: fabric?.description || '',
    status: fabric?.status || 'available',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (fabric?.id) {
      put(`/fabrics/${fabric.id}`, {
        onSuccess: () => {
          toast.success('Fabric updated successfully');
          onSuccess();
        },
        onError: () => {
          toast.error('Failed to update fabric');
        }
      });
    } else {
      post('/fabrics', {
        onSuccess: () => {
          toast.success('Fabric created successfully');
          onSuccess();
        },
        onError: () => {
          toast.error('Failed to create fabric');
        }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
            placeholder="e.g., Cotton, Silk, Denim"
          />
          {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
        </div>

        <div>
          <Label htmlFor="type">Type</Label>
          <Input
            id="type"
            value={data.type}
            onChange={(e) => setData('type', e.target.value)}
            placeholder="e.g., Plain, Printed, Embroidered"
          />
          {errors.type && <p className="text-sm text-red-500 mt-1">{errors.type}</p>}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="color">Color</Label>
          <Input
            id="color"
            value={data.color}
            onChange={(e) => setData('color', e.target.value)}
            placeholder="e.g., Red, Blue, White"
          />
          {errors.color && <p className="text-sm text-red-500 mt-1">{errors.color}</p>}
        </div>

        <div>
          <Label htmlFor="price_per_meter">Price per Unit</Label>
          <Input
            id="price_per_meter"
            type="number"
            step="0.01"
            value={data.price_per_meter}
            onChange={(e) => setData('price_per_meter', e.target.value)}
            placeholder="0.00"
          />
          {errors.price_per_meter && <p className="text-sm text-red-500 mt-1">{errors.price_per_meter}</p>}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="quantity_in_stock">Quantity in Stock *</Label>
          <Input
            id="quantity_in_stock"
            type="number"
            step="0.01"
            value={data.quantity_in_stock}
            onChange={(e) => setData('quantity_in_stock', e.target.value)}
            placeholder="0"
          />
          {errors.quantity_in_stock && <p className="text-sm text-red-500 mt-1">{errors.quantity_in_stock}</p>}
        </div>

        <div>
          <Label htmlFor="unit">Unit *</Label>
          <Select value={data.unit} onValueChange={(value) => setData('unit', value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="meter">Meter</SelectItem>
              <SelectItem value="yard">Yard</SelectItem>
              <SelectItem value="piece">Piece</SelectItem>
            </SelectContent>
          </Select>
          {errors.unit && <p className="text-sm text-red-500 mt-1">{errors.unit}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="status">Status *</Label>
        <Select value={data.status} onValueChange={(value) => setData('status', value as any)}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="available">Available</SelectItem>
            <SelectItem value="out_of_stock">Out of Stock</SelectItem>
            <SelectItem value="discontinued">Discontinued</SelectItem>
          </SelectContent>
        </Select>
        {errors.status && <p className="text-sm text-red-500 mt-1">{errors.status}</p>}
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={data.description}
          onChange={(e) => setData('description', e.target.value)}
          placeholder="Enter fabric details"
          rows={3}
        />
        {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description}</p>}
      </div>

      <div className="flex justify-end gap-2">
        <Button type="submit" disabled={processing}>
          {processing ? 'Saving...' : fabric ? 'Update' : 'Create'}
        </Button>
      </div>
    </form>
  );
}
