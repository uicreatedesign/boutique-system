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
import { dashboard } from '@/routes';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: dashboard(),
  },
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
