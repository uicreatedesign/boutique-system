import { useState, useEffect } from 'react';
import { Head, usePage, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CustomerTable from '@/components/customers/customer-table';
import CustomerCreateModal from '@/components/customers/customer-create-modal';
import { Plus, Search } from 'lucide-react';
import { type BreadcrumbItem } from '@/types';
import { dashboard } from '@/routes';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: dashboard(),
  },
  {
    title: 'Customers',
    href: '/customers',
  },
];

export default function CustomersIndex() {
  const { url } = usePage();
  const urlParams = new URLSearchParams(window.location.search);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [search, setSearch] = useState(urlParams.get('search') || '');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchParam = params.get('search');
    if (searchParam) {
      setSearch(searchParam);
    }
  }, [url]);

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Customers" />
      
      <div className="space-y-6 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Customers</h1>
          <Button onClick={() => setShowCreateModal(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Customer
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Customer List</CardTitle>
              <div className="relative max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search customers..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    const params = new URLSearchParams(window.location.search);
                    if (e.target.value) {
                      params.set('search', e.target.value);
                    } else {
                      params.delete('search');
                    }
                    router.get('/customers', Object.fromEntries(params), { preserveState: true, replace: true });
                  }}
                  className="pl-10"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CustomerTable search={search} />
          </CardContent>
        </Card>

        <CustomerCreateModal 
          open={showCreateModal} 
          onClose={() => setShowCreateModal(false)} 
        />
      </div>
    </AppLayout>
  );
}