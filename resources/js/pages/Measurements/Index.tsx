import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Search, Eye, Edit, Trash2, Printer } from 'lucide-react';

interface Measurement {
  id: number;
  customer: { id: number; name: string };
  tailor: { id: number; name: string };
  measurement_type: string;
  created_at: string;
}

interface Props {
  measurements: {
    data: Measurement[];
    current_page: number;
    last_page: number;
    total: number;
  };
  search: string;
}

export default function MeasurementsIndex({ measurements, search }: Props) {
  const [searchTerm, setSearchTerm] = useState(search || '');

  return (
    <AppLayout>
      <Head title="Measurements" />
      
      <div className="space-y-6 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Measurements</h1>
          <Link href="/measurements/create">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Measurement
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Measurement List</CardTitle>
              <div className="relative max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search customers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Customer</th>
                    <th className="text-left p-4">Tailor</th>
                    <th className="text-left p-4">Type</th>
                    <th className="text-left p-4">Created</th>
                    <th className="text-left p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {measurements.data.map((measurement) => (
                    <tr key={measurement.id} className="border-b hover:bg-gray-50 dark:hover:bg-[oklch(0.269_0_0)]">
                      <td className="p-4 font-medium">{measurement.customer.name}</td>
                      <td className="p-4">{measurement.tailor.name}</td>
                      <td className="p-4">
                        <Badge variant="secondary">{measurement.measurement_type}</Badge>
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        {new Date(measurement.created_at).toLocaleDateString()}
                      </td>
                      <td className="p-4">
                        <div className="flex space-x-2">
                          <Link href={`/measurements/${measurement.id}`}>
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </Link>
                          <Link href={`/measurements/${measurement.id}/edit`}>
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </Link>
                          <Button size="sm" variant="outline">
                            <Printer className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}