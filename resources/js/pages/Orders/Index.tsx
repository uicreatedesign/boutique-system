import { Head, Link, router, usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import Pagination from '@/components/ui/pagination';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Plus, Eye, Search, Edit } from 'lucide-react';
import { useCurrency } from '@/hooks/use-currency';
import { Skeleton } from '@/components/ui/skeleton';

interface Order {
  id: number;
  order_number: string;
  customer: { name: string };
  garment_type: { name: string };
  tailor: { name: string };
  stitching_status: { name: string; color: string };
  delivery_date: string;
  total_amount: number;
  priority: string;
}

interface Props {
  orders: {
    data: Order[];
    current_page: number;
    last_page: number;
  };
  canCreate?: boolean;
  canEdit?: boolean;
}

export default function OrdersIndex({ orders, canCreate = false, canEdit = false }: Props) {
  const { url } = usePage();
  const urlParams = new URLSearchParams(window.location.search);
  const [perPage, setPerPage] = useState(10);
  const [search, setSearch] = useState(urlParams.get('search') || '');
  const [loading, setLoading] = useState(false);
  const { formatCurrency } = useCurrency();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchParam = params.get('search');
    if (searchParam) {
      setSearch(searchParam);
    }
  }, [url]);

  return (
    <AppLayout>
      <Head title="Orders" />
      
      <div className="space-y-6 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Orders</h1>
          {canCreate && (
            <Link href="/orders/create">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Order
              </Button>
            </Link>
          )}
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Order List</CardTitle>
              <div className="relative max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search orders..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    const params = new URLSearchParams(window.location.search);
                    if (e.target.value) {
                      params.set('search', e.target.value);
                    } else {
                      params.delete('search');
                    }
                    router.get('/orders', Object.fromEntries(params), { preserveState: true, replace: true });
                  }}
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
                      <th className="text-left p-4">Order #</th>
                      <th className="text-left p-4">Customer</th>
                      <th className="text-left p-4">Garment</th>
                      <th className="text-left p-4">Tailor</th>
                      <th className="text-left p-4">Status</th>
                      <th className="text-left p-4">Delivery</th>
                      <th className="text-left p-4">Amount</th>
                      <th className="text-left p-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(5)].map((_, i) => (
                      <tr key={i} className="border-b">
                        <td className="p-4"><Skeleton className="h-5 w-32" /></td>
                        <td className="p-4"><Skeleton className="h-4 w-28" /></td>
                        <td className="p-4"><Skeleton className="h-4 w-24" /></td>
                        <td className="p-4"><Skeleton className="h-4 w-28" /></td>
                        <td className="p-4"><Skeleton className="h-6 w-20" /></td>
                        <td className="p-4"><Skeleton className="h-4 w-24" /></td>
                        <td className="p-4"><Skeleton className="h-4 w-20" /></td>
                        <td className="p-4">
                          <div className="flex gap-2">
                            <Skeleton className="h-9 w-9" />
                            <Skeleton className="h-9 w-9" />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : orders.data.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 px-4">
                <svg className="w-48 h-48 mb-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No Orders Found</h3>
                <p className="text-gray-500 text-center mb-6 max-w-md">Get started by creating your first order.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Order #</th>
                      <th className="text-left p-4">Customer</th>
                      <th className="text-left p-4">Garment</th>
                      <th className="text-left p-4">Tailor</th>
                      <th className="text-left p-4">Status</th>
                      <th className="text-left p-4">Delivery</th>
                      <th className="text-left p-4">Amount</th>
                      <th className="text-left p-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.data.map((order) => (
                      <tr key={order.id} className="border-b hover:bg-gray-50 dark:hover:bg-[oklch(0.269_0_0)]">
                        <td className="p-4 font-medium">{order.order_number}</td>
                        <td className="p-4">{order.customer.name}</td>
                        <td className="p-4">{order.garment_type.name}</td>
                        <td className="p-4">{order.tailor.name}</td>
                        <td className="p-4">
                          <Badge style={{ backgroundColor: order.stitching_status.color }}>
                            {order.stitching_status.name}
                          </Badge>
                        </td>
                        <td className="p-4 text-sm">{new Date(order.delivery_date).toLocaleDateString()}</td>
                        <td className="p-4">{formatCurrency(order.total_amount)}</td>
                        <td className="p-4">
                          <div className="flex gap-2">
                            <Link href={`/orders/${order.id}`}>
                              <Button size="sm" variant="outline">
                                <Eye className="h-4 w-4" />
                              </Button>
                            </Link>
                            {canEdit && (
                              <Link href={`/orders/${order.id}/edit`}>
                                <Button size="sm" variant="outline">
                                  <Edit className="h-4 w-4" />
                                </Button>
                              </Link>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

        {orders.data.length > 0 && (
          <div className="mt-4">
            <Pagination
              currentPage={orders.current_page}
              totalPages={orders.last_page}
              onPageChange={(page) => router.get('/orders', { page, per_page: perPage }, { preserveState: true })}
              showingFrom={(orders.current_page - 1) * perPage + 1}
              showingTo={Math.min(orders.current_page * perPage, orders.data.length)}
              total={orders.data.length}
            />
          </div>
        )}
      </div>
    </AppLayout>
  );
}
