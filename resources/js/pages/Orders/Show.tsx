import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Edit, Download, Plus } from 'lucide-react';
import { useState } from 'react';
import PaymentModal from '@/components/orders/payment-modal';

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
  const totalPaid = order.payments.reduce((sum, p) => sum + p.amount, 0);

  return (
    <AppLayout>
      <Head title={`Order ${order.order_number}`} />
      
      <div className="space-y-6 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">{order.order_number}</h1>
            <p className="text-gray-600 mt-1">Order Details</p>
          </div>
          <div className="flex gap-2">
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

        <div className="grid grid-cols-3 gap-6">
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

        <div className="grid grid-cols-2 gap-6">
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
              <div className="flex justify-between">
                <p className="text-sm text-gray-600">Total Amount</p>
                <p className="font-medium">${order.total_amount}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-gray-600">Discount</p>
                <p className="font-medium">-${order.discount}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-gray-600">Total Paid</p>
                <p className="font-medium">${totalPaid}</p>
              </div>
              <div className="flex justify-between border-t pt-2">
                <p className="font-semibold">Balance Due</p>
                <p className="font-semibold text-lg">${order.balance_due}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Payment History</CardTitle>
              {order.balance_due > 0 && (
                <Button size="sm" onClick={() => setShowPaymentModal(true)}>
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
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Date</th>
                      <th className="text-left p-4">Amount</th>
                      <th className="text-left p-4">Method</th>
                      <th className="text-left p-4">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.payments.map((payment) => (
                      <tr key={payment.id} className="border-b">
                        <td className="p-4">{new Date(payment.payment_date).toLocaleDateString()}</td>
                        <td className="p-4 font-medium">${payment.amount}</td>
                        <td className="p-4">{payment.payment_method}</td>
                        <td className="p-4">
                          <Badge variant="secondary">{payment.payment_type}</Badge>
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
