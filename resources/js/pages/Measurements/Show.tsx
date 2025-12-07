import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Edit, Printer, ArrowLeft } from 'lucide-react';

interface Customer {
  id: number;
  name: string;
}

interface Tailor {
  id: number;
  name: string;
}

interface Measurement {
  id: number;
  customer: Customer;
  tailor: Tailor;
  measurement_type: string;
  measurements: Record<string, string>;
  notes: string;
  created_at: string;
}

interface MeasurementField {
  id: number;
  name: string;
  slug: string;
  unit: string;
}

interface MeasurementCategory {
  id: number;
  name: string;
  slug: string;
  fields: MeasurementField[];
}

interface Props {
  measurement: Measurement;
  categories: MeasurementCategory[];
}

export default function ShowMeasurement({ measurement, categories }: Props) {
  const category = categories.find(cat => cat.slug === measurement.measurement_type);

  const handlePrint = () => {
    window.print();
  };

  return (
    <AppLayout>
      <Head title={`Measurement - ${measurement.customer.name}`} />
      
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/measurements">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">Measurement Details</h1>
          </div>
          <div className="flex space-x-2">
            <Button onClick={handlePrint} variant="outline">
              <Printer className="h-4 w-4 mr-2" />
              Print
            </Button>
            <Link href={`/measurements/${measurement.id}/edit`}>
              <Button>
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><strong>Name:</strong> {measurement.customer.name}</p>
                <p><strong>Date:</strong> {new Date(measurement.created_at).toLocaleDateString()}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tailor Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><strong>Tailor:</strong> {measurement.tailor.name}</p>
                <p><strong>Type:</strong> <Badge variant="secondary">{measurement.measurement_type}</Badge></p>
              </div>
            </CardContent>
          </Card>
        </div>

        {category && (
          <Card>
            <CardHeader>
              <CardTitle>{category.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.fields.map((field) => (
                  <div key={field.id} className="border rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-600">{field.name}</div>
                    <div className="text-lg font-semibold">
                      {measurement.measurements[field.slug] || 'N/A'} {field.unit}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {measurement.notes && (
          <Card>
            <CardHeader>
              <CardTitle>Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap">{measurement.notes}</p>
            </CardContent>
          </Card>
        )}
      </div>
    </AppLayout>
  );
}