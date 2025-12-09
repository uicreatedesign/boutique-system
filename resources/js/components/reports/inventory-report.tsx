import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RefreshCw } from 'lucide-react';

export default function InventoryReport() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);

  const fetchReport = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/reports/inventory');
      setData(response.data.data);
    } catch (error) {
      console.error('Failed to fetch inventory report:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReport();
  }, []);

  const getStockBadge = (status: string) => {
    if (status === 'low') return <Badge variant="destructive">Low Stock</Badge>;
    if (status === 'medium') return <Badge className="bg-yellow-500">Medium</Badge>;
    return <Badge className="bg-green-500">Good</Badge>;
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Fabric Inventory</CardTitle>
            <Button onClick={fetchReport} variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">Loading...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Fabric Name</th>
                    <th className="text-left p-4">Type</th>
                    <th className="text-left p-4">Color</th>
                    <th className="text-left p-4">Stock</th>
                    <th className="text-left p-4">Unit</th>
                    <th className="text-left p-4">Price/Unit</th>
                    <th className="text-left p-4">Stock Value</th>
                    <th className="text-left p-4">Usage Count</th>
                    <th className="text-left p-4">Stock Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((fabric) => (
                    <tr key={fabric.id} className="border-b hover:bg-gray-50 dark:hover:bg-[oklch(0.269_0_0)]">
                      <td className="p-4 font-medium">{fabric.name}</td>
                      <td className="p-4">{fabric.type}</td>
                      <td className="p-4">{fabric.color}</td>
                      <td className="p-4">{fabric.quantity_in_stock}</td>
                      <td className="p-4">{fabric.unit}</td>
                      <td className="p-4">${Number(fabric.price_per_meter).toFixed(2)}</td>
                      <td className="p-4">${Number(fabric.stock_value).toFixed(2)}</td>
                      <td className="p-4">{fabric.usage_count}</td>
                      <td className="p-4">{getStockBadge(fabric.stock_status)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
