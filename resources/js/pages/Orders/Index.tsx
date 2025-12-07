import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';
import Pagination from '@/components/ui/pagination';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Eye } from 'lucide-react';

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
}

export default function OrdersIndex({ orders, canCreate = false }: Props) {
  const [perPage, setPerPage] = useState(15);

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
            <CardTitle>Order List</CardTitle>
          </CardHeader>
          <CardContent>
            {orders.data.length === 0 ? (
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
                        <td className="p-4">${order.total_amount}</td>
                        <td className="p-4">
                          <Link href={`/orders/${order.id}`}>
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </Link>
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
              perPage={perPage}
              onPerPageChange={(newPerPage) => {
                setPerPage(newPerPage);
                router.get('/orders', { per_page: newPerPage }, { preserveState: true });
              }}
            />
          </div>
        )}
      </div>
    </AppLayout>
  );
}
