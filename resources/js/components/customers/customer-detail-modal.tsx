import { useState, useEffect } from 'react';
import { getCustomer, getCustomerOrders } from '@/api/customers';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Customer {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: string;
  dob: string;
  orders_count: number;
  last_order_at: string;
}

interface CustomerDetailModalProps {
  customer: Customer;
  open: boolean;
  onClose: () => void;
}

export default function CustomerDetailModal({ customer, open, onClose }: CustomerDetailModalProps) {
  const [customerDetail, setCustomerDetail] = useState<Customer | null>(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (open && customer) {
      fetchCustomerDetail();
      fetchCustomerOrders();
    }
  }, [open, customer]);

  const fetchCustomerDetail = async () => {
    try {
      const response = await getCustomer(customer.id);
      setCustomerDetail(response.data.data);
    } catch (error) {
      console.error('Failed to fetch customer detail:', error);
    }
  };

  const fetchCustomerOrders = async () => {
    try {
      const response = await getCustomerOrders(customer.id);
      setOrders(response.data.data);
    } catch (error) {
      console.error('Failed to fetch customer orders:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto" aria-describedby="customer-detail-description">
        <DialogHeader>
          <DialogTitle>Customer Details</DialogTitle>
        </DialogHeader>
        <div id="customer-detail-description" className="sr-only">
          Detailed view of customer information and order history
        </div>
        
        {loading ? (
          <div className="text-center py-4">Loading...</div>
        ) : (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Customer Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div><strong>Name:</strong> {customerDetail?.name}</div>
                {customerDetail?.phone && <div><strong>Phone:</strong> {customerDetail.phone}</div>}
                {customerDetail?.email && <div><strong>Email:</strong> {customerDetail.email}</div>}
                {customerDetail?.address && <div><strong>Address:</strong> {customerDetail.address}</div>}
                {customerDetail?.dob && <div><strong>Date of Birth:</strong> {customerDetail.dob}</div>}
                <div><strong>Total Orders:</strong> <Badge>{customerDetail?.orders_count}</Badge></div>
                {customerDetail?.last_order_at && (
                  <div><strong>Last Order:</strong> {new Date(customerDetail.last_order_at).toLocaleDateString()}</div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                {orders.length > 0 ? (
                  <div className="space-y-2">
                    {orders.map((order: any) => (
                      <div key={order.id} className="p-3 border rounded">
                        <div className="flex justify-between items-center">
                          <span>Order #{order.id}</span>
                          <Badge variant="outline">{order.status}</Badge>
                        </div>
                        <div className="text-sm text-gray-600">
                          {new Date(order.created_at).toLocaleDateString()}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No orders found</p>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}