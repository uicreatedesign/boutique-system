import { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import Pagination from '@/components/ui/pagination';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Search, Eye, Edit, Trash2, Printer } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Measurements',
    href: '/measurements',
  },
];

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
  const [perPage, setPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
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
            {loading ? (
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
                    {[...Array(5)].map((_, i) => (
                      <tr key={i} className="border-b">
                        <td className="p-4"><Skeleton className="h-5 w-32" /></td>
                        <td className="p-4"><Skeleton className="h-4 w-28" /></td>
                        <td className="p-4"><Skeleton className="h-6 w-20" /></td>
                        <td className="p-4"><Skeleton className="h-4 w-24" /></td>
                        <td className="p-4">
                          <div className="flex space-x-2">
                            <Skeleton className="h-9 w-9" />
                            <Skeleton className="h-9 w-9" />
                            <Skeleton className="h-9 w-9" />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : measurements.data.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 px-4">
                <svg
                  className="w-48 h-48 mb-6 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No Measurements Found</h3>
                <p className="text-gray-500 text-center mb-6 max-w-md">
                  {searchTerm ? 'No measurements match your search criteria.' : 'Get started by adding your first measurement.'}
                </p>
                {!searchTerm && (
                  <Link href="/measurements/create">
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Add First Measurement
                    </Button>
                  </Link>
                )}
              </div>
            ) : (
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
            )}
            {measurements.data.length > 0 && (
              <div className="mt-4">
                <Pagination
                  currentPage={measurements.current_page}
                  totalPages={measurements.last_page}
                  onPageChange={(page) => router.get('/measurements', { page, per_page: perPage, search: searchTerm }, { preserveState: true })}
                  showingFrom={(measurements.current_page - 1) * perPage + 1}
                  showingTo={Math.min(measurements.current_page * perPage, measurements.total)}
                  total={measurements.total}
                  perPage={perPage}
                  onPerPageChange={(newPerPage) => {
                    setPerPage(newPerPage);
                    router.get('/measurements', { per_page: newPerPage, search: searchTerm }, { preserveState: true });
                  }}
                />
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}