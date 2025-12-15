import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Package, Download, Eye } from 'lucide-react';
import { useCurrency } from '@/hooks/use-currency';
import { useHasPermission } from '@/hooks/use-permissions';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'My Dashboard',
    href: '/customer-dashboard',
  },
  {
    title: 'My Orders',
    href: '/customer/orders',
  },
];

interface Order {
  id: number;
  order_number: string;
  garment_type: string;
  tailor: string;
  status: string;
  status_color: string;
  order_date: string;
  delivery_date: string;
  total_amount: number;
  paid_amount: number;
  balance_due: number;
}

interface Props {
  orders: {
    data: Order[];
    links?: any[];
    meta?: any;
  };
}

export default function CustomerOrders({ orders }: Props) {
  const { formatCurrency } = useCurrency();
  const { hasPermission } = useHasPermission();

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="My Orders" />
      
      <div className="container mx-auto px-4 py-8 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">My Orders</h1>
          <p className="text-gray-600">View all your orders and their status</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              All Orders ({orders.meta?.total || orders.data?.length || 0})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {orders.data.length === 0 ? (
              <p className="text-center text-gray-500 py-8">No orders found</p>
            ) : (
              <div className="space-y-4">
                {orders.data.map((order) => (
                  <div key={order.id} className="border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{order.order_number}</h3>
                          <Badge style={{ backgroundColor: order.status_color }}>
                            {order.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                          <span><strong>Garment:</strong> {order.garment_type}</span>
                          <span><strong>Tailor:</strong> {order.tailor}</span>
                          <span><strong>Order Date:</strong> {new Date(order.order_date).toLocaleDateString()}</span>
                          <span><strong>Delivery:</strong> {new Date(order.delivery_date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex gap-4 text-sm">
                          <span><strong>Total:</strong> {formatCurrency(order.total_amount)}</span>
                          <span><strong>Paid:</strong> {formatCurrency(order.paid_amount)}</span>
                          {order.balance_due > 0 && (
                            <span className="text-red-600 font-medium">
                              <strong>Due:</strong> {formatCurrency(order.balance_due)}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Link href={`/customer-dashboard/orders/${order.id}`}>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </Link>
                        {hasPermission('download_own_invoices') && (
                          <a href={`/customer-dashboard/orders/${order.id}/invoice`} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4" />
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}