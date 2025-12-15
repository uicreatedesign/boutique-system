import { useState } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import StitchingStatusList from '@/components/stitching-statuses/stitching-status-list';
import StitchingStatusCreateModal from '@/components/stitching-statuses/stitching-status-create-modal';
import { Plus } from 'lucide-react';
import { type BreadcrumbItem } from '@/types';
import { dashboard } from '@/routes';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: dashboard(),
  },
  {
    title: 'Stitching Statuses',
    href: '/stitching-statuses',
  },
];

interface Props {
  canCreate?: boolean;
}

export default function StitchingStatusesIndex({ canCreate = false }: Props) {
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Stitching Statuses" />
      
      <div className="space-y-6 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Stitching Statuses</h1>
            <p className="text-gray-600 mt-1">Manage custom stitching progress tracking statuses</p>
          </div>
          {canCreate && (
            <Button onClick={() => setShowCreateModal(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Status
            </Button>
          )}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Status List</CardTitle>
          </CardHeader>
          <CardContent>
            <StitchingStatusList canEdit={canCreate} canDelete={canCreate} />
          </CardContent>
        </Card>

        <StitchingStatusCreateModal 
          open={showCreateModal} 
          onClose={() => setShowCreateModal(false)} 
        />
      </div>
    </AppLayout>
  );
}
