import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Edit, Download, Plus } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState } from 'react';
import PaymentModal from '@/components/orders/payment-modal';
import { useCurrency } from '@/hooks/use-currency';

interface Order {
  id: number;
  order_number: string;
  customer: { id: number; name: string; phone: string };
  garment_type: { name: string };
  tailor: { name: string };
  measurement: { measurement_type: string; measurements: Record<string, string>; notes?: string } | null;
  fabric: { name: string } | null;
  customer_fabric: boolean;
  customer_fabric_photo: string | null;
  boutique_fabric_photo: string | null;
  design_image: string | null;
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
  const netTotal = order.total_amount - order.discount;
  const balanceDue = netTotal - totalPaid;

  return (
    <AppLayout>
      <Head title={`Order ${order.order_number}`} />
      
      <div className="space-y-6 p-4 max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Order {order.order_number}</h1>
          <div className="flex gap-2">
            <a href={`/orders/${order.id}/invoice`} target="_blank">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Invoice
              </Button>
            </a>
            <a href={`/orders/${order.id}/measurement-slip`} target="_blank">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Measurement Slip
              </Button>
            </a>
            {canEdit && (
              <Link href={`/orders/${order.id}/edit`}>
                <Button size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Basic Order Details */}
        <Card>
          <CardHeader>
            <CardTitle>Order Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Customer</p>
                <p className="font-medium">{order.customer.name}</p>
                <p className="text-sm text-gray-600">{order.customer.phone}</p>
              </div>

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
            </div>
          </CardContent>
        </Card>

        {/* Measurements */}
        {order.measurement && (
          <Card>
            <CardHeader>
              <CardTitle>Measurements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Measurement Type</p>
                <p className="font-medium">{order.measurement.measurement_type}</p>
              </div>

              {order.measurement.measurements && Object.keys(order.measurement.measurements).length > 0 && (
                <div>
                  <p className="text-sm text-gray-600 mb-3">Measurement Values</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 rounded-lg border border-muted">
                    {Object.entries(order.measurement.measurements).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-sm text-gray-600 capitalize">{key.replace(/_/g, ' ')}</p>
                        <p className="font-medium">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {order.measurement.notes && (
                <div>
                  <p className="text-sm text-gray-600">Notes</p>
                  <p className="font-medium">{order.measurement.notes}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Fabric & Design */}
        <Card>
          <CardHeader>
            <CardTitle>Fabric & Design</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Fabric Type</p>
                <p className="font-medium">
                  {order.customer_fabric ? 'Customer Provided' : order.fabric?.name || 'Not specified'}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Priority</p>
                <Badge variant={order.priority === 'urgent' ? 'destructive' : 'secondary'}>
                  {order.priority}
                </Badge>
              </div>
            </div>

            {order.customer_fabric_photo && (
              <div>
                <p className="text-sm text-gray-600 mb-2">Customer Fabric Photo</p>
                <Avatar className="h-24 w-24 rounded-md cursor-pointer" onClick={() => window.open(`/storage/${order.customer_fabric_photo}`, '_blank')}>
                  <AvatarImage src={`/storage/${order.customer_fabric_photo}`} alt="Fabric" className="object-cover" />
                  <AvatarFallback className="rounded-md">Fabric</AvatarFallback>
                </Avatar>
              </div>
            )}

            {order.boutique_fabric_photo && (
              <div>
                <p className="text-sm text-gray-600 mb-2">Boutique Fabric Photo</p>
                <Avatar className="h-24 w-24 rounded-md cursor-pointer" onClick={() => window.open(`/storage/${order.boutique_fabric_photo}`, '_blank')}>
                  <AvatarImage src={`/storage/${order.boutique_fabric_photo}`} alt="Boutique Fabric" className="object-cover" />
                  <AvatarFallback className="rounded-md">Fabric</AvatarFallback>
                </Avatar>
              </div>
            )}

            {order.design_image && (
              <div>
                <p className="text-sm text-gray-600 mb-2">Design Image</p>
                <Avatar className="h-24 w-24 rounded-md cursor-pointer" onClick={() => window.open(`/storage/${order.design_image}`, '_blank')}>
                  <AvatarImage src={`/storage/${order.design_image}`} alt="Design" className="object-cover" />
                  <AvatarFallback className="rounded-md">Design</AvatarFallback>
                </Avatar>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Dates & Additional Info */}
        <Card>
          <CardHeader>
            <CardTitle>Dates & Additional Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

        {/* Pricing & Payment */}
        <Card>
          <CardHeader>
            <CardTitle>Pricing & Payment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600">Total Amount</p>
                <p className="font-medium text-lg">{formatCurrency(order.total_amount)}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Discount</p>
                <p className="font-medium text-lg">-{formatCurrency(order.discount)}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Net Total</p>
                <p className="font-medium text-lg">{formatCurrency(order.total_amount - order.discount)}</p>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center">
                <p className="font-semibold">Subtotal</p>
                <p className="font-semibold text-lg">{formatCurrency(order.total_amount)}</p>
              </div>
              {order.discount > 0 && (
                <div className="flex justify-between items-center mt-2">
                  <p className="font-semibold">Discount</p>
                  <p className="font-semibold text-lg">-{formatCurrency(order.discount)}</p>
                </div>
              )}
              <div className="flex justify-between items-center mt-2 border-t pt-2">
                <p className="font-semibold">Total</p>
                <p className="font-semibold text-lg">{formatCurrency(order.total_amount - order.discount)}</p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="font-semibold">Total Paid</p>
                <p className="font-semibold text-lg">{formatCurrency(totalPaid)}</p>
              </div>
              <div className="flex justify-between items-center mt-2 border-t pt-2">
                <p className="font-semibold">Balance Due</p>
                <p className="font-semibold text-lg text-red-600">{formatCurrency(balanceDue)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment History */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Payment History</CardTitle>
              {balanceDue > 0 && (
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
                      <th className="text-left p-4 text-sm">Date</th>
                      <th className="text-left p-4 text-sm">Amount</th>
                      <th className="text-left p-4 text-sm">Method</th>
                      <th className="text-left p-4 text-sm">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.payments.map((payment) => (
                      <tr key={payment.id} className="border-b">
                        <td className="p-4 text-sm">{new Date(payment.payment_date).toLocaleDateString()}</td>
                        <td className="p-4 font-medium text-sm">{formatCurrency(payment.amount)}</td>
                        <td className="p-4 text-sm capitalize">{payment.payment_method.replace('_', ' ')}</td>
                        <td className="p-4">
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
          balanceDue={balanceDue}
        />
      </div>
    </AppLayout>
  );
}
