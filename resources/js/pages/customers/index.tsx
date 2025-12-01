import { useState } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CustomerTable from '@/components/customers/customer-table';
import CustomerCreateModal from '@/components/customers/customer-create-modal';
import { Plus, Search } from 'lucide-react';

export default function CustomersIndex() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <AppLayout>
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
            <CardTitle>Customer List</CardTitle>
            <div className="flex items-center space-x-2">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search customers..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
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