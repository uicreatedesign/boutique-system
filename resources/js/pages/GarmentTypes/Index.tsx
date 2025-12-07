import { useState } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import GarmentTypeTable from '@/components/garment-types/garment-type-table';
import GarmentTypeCreateModal from '@/components/garment-types/garment-type-create-modal';
import { Plus, Search } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Props {
  canCreate?: boolean;
}

export default function GarmentTypesIndex({ canCreate = false }: Props) {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  return (
    <AppLayout>
      <Head title="Garment Types" />
      
      <div className="space-y-6 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Garment Types</h1>
          {canCreate && (
            <Button onClick={() => setShowCreateModal(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Garment Type
            </Button>
          )}
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between gap-4">
              <CardTitle>Garment Type List</CardTitle>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search garment types..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <GarmentTypeTable search={search} statusFilter={statusFilter} canEdit={canCreate} canDelete={canCreate} />
          </CardContent>
        </Card>

        <GarmentTypeCreateModal 
          open={showCreateModal} 
          onClose={() => setShowCreateModal(false)} 
        />
      </div>
    </AppLayout>
  );
}
