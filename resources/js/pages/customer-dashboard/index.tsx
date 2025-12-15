import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Package, Download, User, Ruler, Info } from 'lucide-react';
import { useCurrency } from '@/hooks/use-currency';

interface Order {
  id: number;
  order_number: string;
  garment_type: string;
  status: string;
  status_color: string;
  order_date: string;
  delivery_date: string;
  total_amount: number;
  paid_amount: number;
  balance_due: number;
}

interface Measurement {
  id: number;
  measurement_type: string;
  measurements: any;
  tailor: { name: string };
  created_at: string;
}

interface Props {
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  orders: Order[];
  measurements: Measurement[];
}

export default function CustomerDashboard({ customer, orders, measurements }: Props) {
  const { formatCurrency } = useCurrency();

  return (
    <AppLayout>
      <Head title="My Dashboard" />
      
      <div className="container mx-auto px-4 py-8 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">My Dashboard</h1>
          <p className="text-gray-600">Welcome, {customer.name}</p>
        </div>

        {/* Customer Info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              My Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600">Name</p>
                <p className="font-medium">{customer.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-medium">{customer.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="font-medium">{customer.phone}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Online Payment Coming Soon */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Coming Soon:</strong> Online payment feature will be available soon. Currently, payments are processed at the boutique.
          </AlertDescription>
        </Alert>

        {/* My Orders */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              My Orders ({orders.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {orders.length === 0 ? (
              <p className="text-center text-gray-500 py-8">No orders found</p>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{order.order_number}</h3>
                          <Badge style={{ backgroundColor: order.status_color }}>
                            {order.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">{order.garment_type}</p>
                        <div className="flex gap-4 text-sm">
                          <span>Order: {new Date(order.order_date).toLocaleDateString()}</span>
                          <span>Delivery: {new Date(order.delivery_date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex gap-4 text-sm">
                          <span>Total: {formatCurrency(order.total_amount)}</span>
                          <span>Paid: {formatCurrency(order.paid_amount)}</span>
                          {order.balance_due > 0 && (
                            <span className="text-red-600 font-medium">
                              Due: {formatCurrency(order.balance_due)}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Link href={`/customer-dashboard/orders/${order.id}`}>
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        </Link>
                        <a href={`/customer-dashboard/orders/${order.id}/invoice`} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* My Measurements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Ruler className="h-5 w-5" />
              My Measurements ({measurements.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {measurements.length === 0 ? (
              <p className="text-center text-gray-500 py-8">No measurements recorded</p>
            ) : (
              <div className="space-y-4">
                {measurements.map((measurement) => (
                  <div key={measurement.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{measurement.measurement_type}</h3>
                        <p className="text-sm text-gray-600">Tailor: {measurement.tailor.name}</p>
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date(measurement.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
                      {Object.entries(measurement.measurements).map(([key, value]) => (
                        <div key={key} className="text-sm">
                          <span className="text-gray-600">{key}:</span>
                          <span className="ml-1 font-medium">{value as string}</span>
                        </div>
                      ))}
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
