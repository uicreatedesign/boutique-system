import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Download, Package, DollarSign } from 'lucide-react';
import { useCurrency } from '@/hooks/use-currency';
import { type BreadcrumbItem } from '@/types';

interface Props {
  order: {
    id: number;
    order_number: string;
    garment_type: string;
    tailor: string;
    status: string;
    status_color: string;
    order_date: string;
    delivery_date: string;
    total_amount: number;
    discount: number;
    special_instructions: string;
    notes: string;
    payments: Array<{
      id: number;
      amount: number;
      payment_method: string;
      payment_date: string;
    }>;
    balance_due: number;
    measurement: any;
  };
}

export default function OrderDetails({ order }: Props) {
  const { formatCurrency } = useCurrency();

  const breadcrumbs: BreadcrumbItem[] = [
    {
      title: 'My Dashboard',
      href: '/customer-dashboard',
    },
    {
      title: 'My Orders',
      href: '/customer/orders',
    },
    {
      title: order.order_number,
      href: '',
    },
  ];

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title={`Order ${order.order_number}`} />
      
      <div className="container mx-auto px-4 py-8 space-y-6">
        <div className="flex items-center gap-4">
          <Link href="/customer-dashboard">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Order Details</h1>
            <p className="text-gray-600">{order.order_number}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Order Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Order Information
                  </CardTitle>
                  <Badge style={{ backgroundColor: order.status_color }}>
                    {order.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Garment Type</p>
                    <p className="font-medium">{order.garment_type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Tailor</p>
                    <p className="font-medium">{order.tailor}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Order Date</p>
                    <p className="font-medium">{new Date(order.order_date).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Delivery Date</p>
                    <p className="font-medium">{new Date(order.delivery_date).toLocaleDateString()}</p>
                  </div>
                </div>
                
                {order.special_instructions && (
                  <div>
                    <p className="text-sm text-gray-600">Special Instructions</p>
                    <p className="font-medium">{order.special_instructions}</p>
                  </div>
                )}
                
                {order.notes && (
                  <div>
                    <p className="text-sm text-gray-600">Notes</p>
                    <p className="font-medium">{order.notes}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Measurements */}
            {order.measurement && (
              <Card>
                <CardHeader>
                  <CardTitle>Measurements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {Object.entries(order.measurement.measurements).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-sm text-gray-600">{key}</p>
                        <p className="font-medium">{value as string}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Payment Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Payment Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Amount</span>
                  <span className="font-semibold">{formatCurrency(order.total_amount)}</span>
                </div>
                {order.discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-{formatCurrency(order.discount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Paid Amount</span>
                  <span className="font-semibold text-green-600">
                    {formatCurrency(order.payments.reduce((sum, p) => sum + p.amount, 0))}
                  </span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="font-semibold">Balance Due</span>
                    <span className={`font-bold ${order.balance_due > 0 ? 'text-red-600' : 'text-green-600'}`}>
                      {formatCurrency(order.balance_due)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment History */}
            {order.payments.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Payment History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {order.payments.map((payment) => (
                      <div key={payment.id} className="flex justify-between text-sm">
                        <div>
                          <p className="font-medium">{formatCurrency(payment.amount)}</p>
                          <p className="text-gray-600 capitalize">{payment.payment_method.replace('_', ' ')}</p>
                        </div>
                        <span className="text-gray-500">
                          {new Date(payment.payment_date).toLocaleDateString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <a href={`/customer-dashboard/orders/${order.id}/invoice`} target="_blank" rel="noopener noreferrer">
              <Button className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download Invoice
              </Button>
            </a>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
