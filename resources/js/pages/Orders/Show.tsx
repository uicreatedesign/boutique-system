import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Edit, Download, Plus } from 'lucide-react';
import { useState } from 'react';
import PaymentModal from '@/components/orders/payment-modal';
import { useCurrency } from '@/hooks/use-currency';

interface Order {
  id: number;
  order_number: string;
  customer: { id: number; name: string; phone: string };
  garment_type: { name: string };
  tailor: { name: string };
  measurement: { measurement_type: string } | null;
  fabric: { name: string } | null;
  customer_fabric: boolean;
  stitching_status: { name: string; color: string };
  order_date: string;
  delivery_date: string;
  priority: string;
  total_amount: number;
  advance_paid: number;
  discount: number;
  special_instructions: string;
  notes: string;
  payments: Array<{
    id: number;
    payment_date: string;
    amount: number;
    payment_method: string;
    payment_type: string;
  }>;
  balance_due: number;
}

interface Props {
  order: Order;
  canEdit?: boolean;
}

export default function OrdersShow({ order, canEdit = false }: Props) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const { formatCurrency } = useCurrency();
  const totalPaid = order.payments.reduce((sum, p) => sum + p.amount, 0);

  return (
    <AppLayout>
      <Head title={`Order ${order.order_number}`} />
      
      <div className="space-y-6 p-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">{order.order_number}</h1>
            <p className="text-gray-600 mt-1">Order Details</p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <a href={`/orders/${order.id}/invoice`} target="_blank">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Invoice
              </Button>
            </a>
            {canEdit && (
              <Link href={`/orders/${order.id}/edit`}>
                <Button>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              </Link>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <p className="text-sm text-gray-600">Name</p>
                <p className="font-medium">{order.customer.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="font-medium">{order.customer.phone}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Order Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <p className="text-sm text-gray-600">Garment Type</p>
                <p className="font-medium">{order.garment_type.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Tailor</p>
                <p className="font-medium">{order.tailor.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Status</p>
                <Badge style={{ backgroundColor: order.stitching_status.color }}>
                  {order.stitching_status.name}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dates & Priority</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <p className="text-sm text-gray-600">Order Date</p>
                <p className="font-medium">{new Date(order.order_date).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Delivery Date</p>
                <p className="font-medium">{new Date(order.delivery_date).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Priority</p>
                <Badge variant={order.priority === 'urgent' ? 'destructive' : 'secondary'}>
                  {order.priority}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Additional Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <p className="text-sm text-gray-600">Measurement</p>
                <p className="font-medium">{order.measurement?.measurement_type || 'Not specified'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Fabric</p>
                <p className="font-medium">
                  {order.customer_fabric ? 'Customer Provided' : order.fabric?.name || 'Not specified'}
                </p>
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

          <Card>
            <CardHeader>
              <CardTitle>Payment Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">Total Amount</p>
                <p className="font-medium">{formatCurrency(order.total_amount)}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">Discount</p>
                <p className="font-medium">-{formatCurrency(order.discount)}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">Total Paid</p>
                <p className="font-medium">{formatCurrency(totalPaid)}</p>
              </div>
              <div className="flex justify-between items-center border-t pt-2">
                <p className="font-semibold">Balance Due</p>
                <p className="font-semibold text-base sm:text-lg">{formatCurrency(order.balance_due)}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <CardTitle>Payment History</CardTitle>
              {order.balance_due > 0 && (
                <Button size="sm" onClick={() => setShowPaymentModal(true)} className="w-full sm:w-auto">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Payment
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {order.payments.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No payments recorded</p>
            ) : (
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="w-full border-collapse min-w-[500px]">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 sm:p-4 text-sm">Date</th>
                      <th className="text-left p-3 sm:p-4 text-sm">Amount</th>
                      <th className="text-left p-3 sm:p-4 text-sm">Method</th>
                      <th className="text-left p-3 sm:p-4 text-sm">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.payments.map((payment) => (
                      <tr key={payment.id} className="border-b">
                        <td className="p-3 sm:p-4 text-sm">{new Date(payment.payment_date).toLocaleDateString()}</td>
                        <td className="p-3 sm:p-4 font-medium text-sm">{formatCurrency(payment.amount)}</td>
                        <td className="p-3 sm:p-4 text-sm capitalize">{payment.payment_method.replace('_', ' ')}</td>
                        <td className="p-3 sm:p-4">
                          <Badge variant="secondary" className="text-xs">{payment.payment_type}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

        <PaymentModal
          open={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          orderId={order.id}
          balanceDue={order.balance_due}
        />
      </div>
    </AppLayout>
  );
}
