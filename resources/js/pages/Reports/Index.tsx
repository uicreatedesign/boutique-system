import { useState } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SalesReport from '@/components/reports/sales-report';
import TailorPerformanceReport from '@/components/reports/tailor-performance-report';
import CustomerReport from '@/components/reports/customer-report';
import InventoryReport from '@/components/reports/inventory-report';
import { BarChart3, Users, Scissors, Package } from 'lucide-react';

export default function ReportsIndex() {
  const [activeTab, setActiveTab] = useState('sales');

  return (
    <AppLayout>
      <Head title="Reports & Analytics" />
      
      <div className="space-y-6 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Reports & Analytics</h1>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="sales" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              Sales
            </TabsTrigger>
            <TabsTrigger value="tailors" className="gap-2">
              <Scissors className="h-4 w-4" />
              Tailors
            </TabsTrigger>
            <TabsTrigger value="customers" className="gap-2">
              <Users className="h-4 w-4" />
              Customers
            </TabsTrigger>
            <TabsTrigger value="inventory" className="gap-2">
              <Package className="h-4 w-4" />
              Inventory
            </TabsTrigger>
          </TabsList>

          <TabsContent value="sales" className="mt-6">
            <SalesReport />
          </TabsContent>

          <TabsContent value="tailors" className="mt-6">
            <TailorPerformanceReport />
          </TabsContent>

          <TabsContent value="customers" className="mt-6">
            <CustomerReport />
          </TabsContent>

          <TabsContent value="inventory" className="mt-6">
            <InventoryReport />
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
