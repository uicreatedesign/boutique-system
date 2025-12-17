import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CategoryManagement from '@/components/measurement-settings/category-management';
import FieldManagement from '@/components/measurement-settings/field-management';
import { type BreadcrumbItem } from '@/types';
import { dashboard } from '@/routes';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Measurements',
    href: '/measurements',
  },
  {
    title: 'Settings',
    href: '/measurement-settings',
  },
];

export default function MeasurementSettings() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Measurement Settings" />
      
      <div className="space-y-6 p-4">
        <div>
          <h1 className="text-3xl font-bold">Measurement Settings</h1>
          <p className="text-gray-600 mt-1">Manage measurement categories and fields</p>
        </div>

        <Tabs defaultValue="categories" className="w-full">
          <TabsList>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="fields">Fields</TabsTrigger>
          </TabsList>
          
          <TabsContent value="categories">
            <CategoryManagement />
          </TabsContent>
          
          <TabsContent value="fields">
            <FieldManagement />
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
