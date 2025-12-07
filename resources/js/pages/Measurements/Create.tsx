import { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Customer {
  id: number;
  name: string;
}

interface Tailor {
  id: number;
  name: string;
}

interface MeasurementField {
  id: number;
  name: string;
  slug: string;
  unit: string;
  is_required: boolean;
}

interface MeasurementCategory {
  id: number;
  name: string;
  slug: string;
  fields: MeasurementField[];
}

interface Props {
  customers: Customer[];
  tailors: Tailor[];
  categories: MeasurementCategory[];
}

export default function CreateMeasurement({ customers, tailors, categories }: Props) {
  const [selectedType, setSelectedType] = useState('');
  const [measurements, setMeasurements] = useState<Record<string, string>>({});

  const { data, setData, post, processing, errors } = useForm({
    customer_id: '',
    tailor_id: '',
    measurement_type: '',
    measurements: {},
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      ...data,
      measurements: measurements,
    };
    post('/measurements', formData);
  };

  const selectedCategory = categories.find(cat => cat.slug === selectedType);

  return (
    <AppLayout>
      <Head title="Add Measurement" />
      
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold">Add New Measurement</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="customer">Customer *</Label>
                  <Select onValueChange={(value) => setData('customer_id', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select customer" />
                    </SelectTrigger>
                    <SelectContent>
                      {customers.map((customer) => (
                        <SelectItem key={customer.id} value={customer.id.toString()}>
                          {customer.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.customer_id && <p className="text-red-500 text-sm mt-1">{errors.customer_id}</p>}
                </div>

                <div>
                  <Label htmlFor="tailor">Tailor *</Label>
                  <Select onValueChange={(value) => setData('tailor_id', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select tailor" />
                    </SelectTrigger>
                    <SelectContent>
                      {tailors.map((tailor) => (
                        <SelectItem key={tailor.id} value={tailor.id.toString()}>
                          {tailor.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.tailor_id && <p className="text-red-500 text-sm mt-1">{errors.tailor_id}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="type">Measurement Type *</Label>
                <Select onValueChange={(value) => {
                  setSelectedType(value);
                  setData('measurement_type', value);
                }}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select measurement type" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.slug}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.measurement_type && <p className="text-red-500 text-sm mt-1">{errors.measurement_type}</p>}
              </div>
            </CardContent>
          </Card>

          {selectedCategory && (
            <Card>
              <CardHeader>
                <CardTitle>{selectedCategory.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedCategory.fields.map((field) => (
                    <div key={field.id}>
                      <Label htmlFor={field.slug}>
                        {field.name} ({field.unit})
                        {field.is_required && <span className="text-red-500 ml-1">*</span>}
                      </Label>
                      <Input
                        id={field.slug}
                        type="number"
                        step="0.1"
                        placeholder={`Enter ${field.name.toLowerCase()}`}
                        value={measurements[field.slug] || ''}
                        onChange={(e) => {
                          const newMeasurements = {
                            ...measurements,
                            [field.slug]: e.target.value
                          };
                          setMeasurements(newMeasurements);
                          setData('measurements', newMeasurements);
                        }}
                        required={field.is_required}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle>Additional Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Any additional notes or special instructions..."
                value={data.notes}
                onChange={(e) => setData('notes', e.target.value)}
                rows={4}
              />
            </CardContent>
          </Card>

          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline" onClick={() => window.history.back()}>
              Cancel
            </Button>
            <Button type="submit" disabled={processing}>
              {processing ? 'Saving...' : 'Save Measurement'}
            </Button>
          </div>
        </form>
      </div>
    </AppLayout>
  );
}