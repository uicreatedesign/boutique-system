import { useState, useEffect } from 'react';
import { getCustomers } from '@/api/customers';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trash2, Edit, Eye, Plus, Users } from 'lucide-react';
import CustomerEditModal from './customer-edit-modal';
import CustomerDetailModal from './customer-detail-modal';
import CustomerDeleteDialog from './customer-delete-dialog';
import Pagination from '@/components/ui/pagination';
import { Skeleton } from '@/components/ui/skeleton';

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
  const [loading, setLoading] = useState(false);
  const [editCustomer, setEditCustomer] = useState<Customer | null>(null);
  const [detailCustomer, setDetailCustomer] = useState<Customer | null>(null);
  const [deleteCustomer, setDeleteCustomer] = useState<Customer | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [total, setTotal] = useState(0);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const fetchCustomers = async (page = 1, pageSize = perPage) => {
    try {
      setLoading(true);
      const response = await getCustomers({ search, page, per_page: pageSize });
      
      console.log('Full Response:', response.data);
      
      // Laravel Resource collections have meta and links
      const data = response.data.data || [];
      const meta = response.data.meta || response.data;
      
      console.log('Meta:', meta);
      
      setCustomers(data);
      setCurrentPage(meta.current_page || 1);
      setTotalPages(meta.last_page || 1);
      setTotal(meta.total || 0);
      setFrom(meta.from || 0);
      setTo(meta.to || 0);
    } catch (error) {
      console.error('Failed to fetch customers:', error);
      setCustomers([]);
      setTotal(0);
      setFrom(0);
      setTo(0);
      setTotalPages(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers(1, perPage);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPage(1);
      fetchCustomers(1, perPage);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    if (perPage !== 10) {
      fetchCustomers(1, perPage);
    }
  }, [perPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchCustomers(page, perPage);
  };

  const handlePerPageChange = (newPerPage: number) => {
    setPerPage(newPerPage);
    setCurrentPage(1);
  };



  if (loading && customers.length === 0) {
    return (
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
            {[...Array(5)].map((_, i) => (
              <tr key={i} className="border-b">
                <td className="p-4">
                  <Skeleton className="h-5 w-32" />
                </td>
                <td className="p-4">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-28" />
                    <Skeleton className="h-4 w-36" />
                  </div>
                </td>
                <td className="p-4">
                  <Skeleton className="h-6 w-8" />
                </td>
                <td className="p-4">
                  <Skeleton className="h-4 w-24" />
                </td>
                <td className="p-4">
                  <div className="flex space-x-2">
                    <Skeleton className="h-9 w-9" />
                    <Skeleton className="h-9 w-9" />
                    <Skeleton className="h-9 w-9" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <>
      {customers.length === 0 && !loading ? (
        <div className="flex flex-col items-center justify-center py-16 px-4">
          <svg
            className="w-48 h-48 mb-6 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No Customers Found</h3>
          <p className="text-gray-500 text-center mb-6 max-w-md">
            {search ? 'No customers match your search criteria.' : 'Get started by adding your first customer.'}
          </p>
        </div>
      ) : (
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

          <div className="mt-4">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              showingFrom={from}
              showingTo={to}
              total={total}
              perPage={perPage}
              onPerPageChange={handlePerPageChange}
            />
          </div>
        </>
      )}

      {editCustomer && (
        <CustomerEditModal
          customer={editCustomer}
          open={!!editCustomer}
          onClose={() => setEditCustomer(null)}
          onSuccess={() => {
            setEditCustomer(null);
            fetchCustomers(currentPage);
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
          fetchCustomers(currentPage);
        }}
      />
    </>
  );
}