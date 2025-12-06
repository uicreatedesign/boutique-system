import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const tailorSchema = z.object({
  name: z.string().min(1, 'Name is required').max(191),
  phone: z.string().min(1, 'Phone is required').max(20),
  email: z.string().email('Invalid email').max(191).optional().or(z.literal('')),
  skill_level: z.enum(['beginner', 'intermediate', 'expert']),
  address: z.string().optional().or(z.literal('')),
  status: z.enum(['active', 'inactive', 'on_leave']),
  hourly_rate: z.string().optional().or(z.literal('')),
  specialization: z.string().optional().or(z.literal('')),
  join_date: z.string().optional().or(z.literal('')),
});

type TailorFormData = z.infer<typeof tailorSchema>;

interface TailorFormProps {
  onSubmit: (data: TailorFormData) => void;
  loading?: boolean;
  initialData?: Partial<TailorFormData>;
}

export default function TailorForm({ onSubmit, loading, initialData }: TailorFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<TailorFormData>({
    resolver: zodResolver(tailorSchema),
    defaultValues: {
      skill_level: 'intermediate',
      status: 'active',
      ...initialData,
    },
  });

  const skillLevel = watch('skill_level');
  const status = watch('status');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
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
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            {...register('phone')}
            className={errors.phone ? 'border-red-500' : ''}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>
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

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="skill_level">Skill Level *</Label>
          <Select value={skillLevel} onValueChange={(value) => setValue('skill_level', value as any)}>
            <SelectTrigger className={errors.skill_level ? 'border-red-500' : ''}>
              <SelectValue placeholder="Select skill level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="expert">Expert</SelectItem>
            </SelectContent>
          </Select>
          {errors.skill_level && <p className="text-red-500 text-sm mt-1">{errors.skill_level.message}</p>}
        </div>

        <div>
          <Label htmlFor="status">Status *</Label>
          <Select value={status} onValueChange={(value) => setValue('status', value as any)}>
            <SelectTrigger className={errors.status ? 'border-red-500' : ''}>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="on_leave">On Leave</SelectItem>
            </SelectContent>
          </Select>
          {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="hourly_rate">Hourly Rate ($)</Label>
          <Input
            id="hourly_rate"
            type="number"
            step="0.01"
            {...register('hourly_rate')}
            className={errors.hourly_rate ? 'border-red-500' : ''}
          />
          {errors.hourly_rate && <p className="text-red-500 text-sm mt-1">{errors.hourly_rate.message}</p>}
        </div>

        <div>
          <Label htmlFor="join_date">Join Date</Label>
          <Input
            id="join_date"
            type="date"
            {...register('join_date')}
            className={errors.join_date ? 'border-red-500' : ''}
          />
          {errors.join_date && <p className="text-red-500 text-sm mt-1">{errors.join_date.message}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="specialization">Specialization</Label>
        <Input
          id="specialization"
          placeholder="e.g., Wedding dresses, Suits, Alterations"
          {...register('specialization')}
          className={errors.specialization ? 'border-red-500' : ''}
        />
        {errors.specialization && <p className="text-red-500 text-sm mt-1">{errors.specialization.message}</p>}
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

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? 'Saving...' : 'Save Tailor'}
      </Button>
    </form>
  );
}
