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
import { Skeleton } from '@/components/ui/skeleton';

const breadcrumbs: BreadcrumbItem[] = [
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
  const [loading, setLoading] = useState(true);

  // Simulate loading state
  useState(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  });

  if (loading) {
    return (
      <AppLayout breadcrumbs={breadcrumbs}>
        <Head title="Stitching Statuses" />
        <div className="space-y-6 p-4">
          {/* Header Skeleton */}
          <div className="flex items-center justify-between">
            <div>
              <Skeleton className="h-9 w-64" />
              <Skeleton className="h-4 w-80 mt-2" />
            </div>
            <Skeleton className="h-10 w-28" />
          </div>

          {/* Card Skeleton */}
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-24" />
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Status Items Skeleton */}
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-4 w-4 rounded" />
                    <div>
                      <Skeleton className="h-5 w-24" />
                      <Skeleton className="h-3 w-32 mt-1" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-6 w-16 rounded-full" />
                    <Skeleton className="h-8 w-8" />
                    <Skeleton className="h-8 w-8" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </AppLayout>
    );
  }

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
