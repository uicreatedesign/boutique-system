import { useState, useEffect } from 'react';
import { getCustomers } from '@/api/customers';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trash2, Edit, Eye } from 'lucide-react';
import CustomerEditModal from './customer-edit-modal';
import CustomerDetailModal from './customer-detail-modal';
import CustomerDeleteDialog from './customer-delete-dialog';

interface Customer {
  id: number;
  name: string;
  phone: string;
  email: string;
  orders_count: number;
  last_order_at: string;
}

interface CustomerTableProps {
  search: string;
}

export default function CustomerTable({ search }: CustomerTableProps) {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [editCustomer, setEditCustomer] = useState<Customer | null>(null);
  const [detailCustomer, setDetailCustomer] = useState<Customer | null>(null);
  const [deleteCustomer, setDeleteCustomer] = useState<Customer | null>(null);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const response = await getCustomers({ search });
      setCustomers(response.data.data);
    } catch (error) {
      console.error('Failed to fetch customers:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchCustomers();
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);



  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Contact</th>
              <th className="text-left p-4">Orders</th>
              <th className="text-left p-4">Last Order</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b hover:bg-gray-50 dark:hover:bg-[oklch(0.269_0_0)]">
                <td className="p-4 font-medium">{customer.name}</td>
                <td className="p-4">
                  <div className="space-y-1">
                    {customer.phone && <div className="text-sm">{customer.phone}</div>}
                    {customer.email && <div className="text-sm text-gray-600">{customer.email}</div>}
                  </div>
                </td>
                <td className="p-4">
                  <Badge variant="secondary">{customer.orders_count}</Badge>
                </td>
                <td className="p-4 text-sm text-gray-600">
                  {customer.last_order_at ? new Date(customer.last_order_at).toLocaleDateString() : 'Never'}
                </td>
                <td className="p-4">
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setDetailCustomer(customer)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setEditCustomer(customer)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setDeleteCustomer(customer)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editCustomer && (
        <CustomerEditModal
          customer={editCustomer}
          open={!!editCustomer}
          onClose={() => setEditCustomer(null)}
          onSuccess={() => {
            setEditCustomer(null);
            fetchCustomers();
          }}
        />
      )}

      {detailCustomer && (
        <CustomerDetailModal
          customer={detailCustomer}
          open={!!detailCustomer}
          onClose={() => setDetailCustomer(null)}
        />
      )}

      <CustomerDeleteDialog
        customer={deleteCustomer}
        open={!!deleteCustomer}
        onClose={() => setDeleteCustomer(null)}
        onSuccess={() => {
          setDeleteCustomer(null);
          fetchCustomers();
        }}
      />
    </>
  );
}