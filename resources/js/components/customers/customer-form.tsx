import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const customerSchema = z.object({
  name: z.string().min(1, 'Name is required').max(191),
  phone: z.string().max(20).optional().or(z.literal('')),
  email: z.string().email('Invalid email').max(191).optional().or(z.literal('')),
  address: z.string().optional().or(z.literal('')),
  dob: z.string().optional().or(z.literal('')),
});

type CustomerFormData = z.infer<typeof customerSchema>;

interface CustomerFormProps {
  onSubmit: (data: CustomerFormData) => void;
  loading?: boolean;
  initialData?: Partial<CustomerFormData>;
}

export default function CustomerForm({ onSubmit, loading, initialData }: CustomerFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerFormData>({
    resolver: zodResolver(customerSchema),
    defaultValues: initialData,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          {...register('phone')}
          className={errors.phone ? 'border-red-500' : ''}
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          className={errors.email ? 'border-red-500' : ''}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <Label htmlFor="address">Address</Label>
        <Textarea
          id="address"
          {...register('address')}
          className={errors.address ? 'border-red-500' : ''}
        />
        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
      </div>

      <div>
        <Label htmlFor="dob">Date of Birth</Label>
        <Input
          id="dob"
          type="date"
          {...register('dob')}
          className={errors.dob ? 'border-red-500' : ''}
        />
        {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob.message}</p>}
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? 'Saving...' : 'Save Customer'}
      </Button>
    </form>
  );
}