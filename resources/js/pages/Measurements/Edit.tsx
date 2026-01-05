import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

interface Props {
  measurement: {
    id: number;
    customer_id: number;
    tailor_id: number;
    measurement_type: string;
    measurements: Record<string, string>;
    notes?: string;
  };
  customers: Array<{id: number; name: string}>;
  tailors: Array<{id: number; name: string}>;
  categories: Array<any>;
}

export default function Edit({ measurement, customers, tailors }: Props) {
  const { data, setData, put, processing, errors } = useForm({
    customer_id: measurement.customer_id,
    tailor_id: measurement.tailor_id,
    measurement_type: measurement.measurement_type,
    measurements: measurement.measurements || {},
    notes: measurement.notes || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    put(`/measurements/${measurement.id}`, {
      onSuccess: () => {
        toast.success('Measurement updated successfully');
      },
      onError: () => {
        toast.error('Failed to update measurement');
      }
    });
  };

  return (
    <AppLayout>
      <Head title="Edit Measurement" />
      
      <div className="space-y-6 p-4">
        <h1 className="text-3xl font-bold">Edit Measurement</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Measurement Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {Object.entries(data.measurements).map(([key, value]) => (
                <div key={key}>
                  <Label htmlFor={key}>{key}</Label>
                  <Input
                    id={key}
                    value={value}
                    onChange={(e) => setData('measurements', {
                      ...data.measurements,
                      [key]: e.target.value
                    })}
                  />
                </div>
              ))}
              
              <Button type="submit" disabled={processing}>
                {processing ? 'Updating...' : 'Update Measurement'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}