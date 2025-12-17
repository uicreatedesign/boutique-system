import { useState } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import RoleTable from '@/components/roles/role-table';
import RoleCreateModal from '@/components/roles/role-create-modal';
import PermissionManagement from '@/components/roles/permission-management';
import { Plus } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { type BreadcrumbItem } from '@/types';
import { Skeleton } from '@/components/ui/skeleton';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Roles & Permissions',
    href: '/roles',
  },
];

interface Role {
  id: number;
  name: string;
  description: string;
  permissions: Array<{ id: number; name: string; description: string }>;
}

interface Permission {
  id: number;
  name: string;
  description: string;
}

interface Props {
  roles: Role[];
  permissions: Record<string, Permission[]>;
}

export default function RolesIndex({ roles, permissions }: Props) {
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
        <Head title="Roles & Permissions" />
        <div className="space-y-6 p-4">
          {/* Header Skeleton */}
          <div className="flex items-center justify-between">
            <Skeleton className="h-9 w-64" />
          </div>

          {/* Tabs Skeleton */}
          <div className="w-full">
            <div className="flex space-x-1 mb-6">
              <Skeleton className="h-10 w-16" />
              <Skeleton className="h-10 w-24" />
            </div>
            
            {/* Card Skeleton */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Skeleton className="h-6 w-16" />
                  <Skeleton className="h-10 w-24" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Table Header Skeleton */}
                <div className="grid grid-cols-4 gap-4 pb-2 border-b">
                  <Skeleton className="h-4 w-12" />
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-16" />
                </div>
                
                {/* Table Rows Skeleton */}
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="grid grid-cols-4 gap-4 py-3 border-b">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-32" />
                    <div className="flex gap-1">
                      <Skeleton className="h-5 w-12" />
                      <Skeleton className="h-5 w-16" />
                      <Skeleton className="h-5 w-14" />
                    </div>
                    <div className="flex gap-2">
                      <Skeleton className="h-8 w-8" />
                      <Skeleton className="h-8 w-8" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Roles & Permissions" />
      
      <div className="space-y-6 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Roles & Permissions</h1>
        </div>

        <Tabs defaultValue="roles" className="w-full">
          <TabsList>
            <TabsTrigger value="roles">Roles</TabsTrigger>
            <TabsTrigger value="permissions">Permissions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="roles">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Roles</CardTitle>
                  <Button onClick={() => setShowCreateModal(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Role
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <RoleTable roles={roles} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="permissions">
            <PermissionManagement permissions={permissions} />
          </TabsContent>
        </Tabs>

        <RoleCreateModal 
          open={showCreateModal} 
          onClose={() => setShowCreateModal(false)} 
        />
      </div>
    </AppLayout>
  );
}
