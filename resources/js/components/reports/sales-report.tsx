import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Download, TrendingUp, DollarSign, ShoppingCart, CreditCard } from 'lucide-react';
import Chart from 'react-apexcharts';

export default function SalesReport() {
  const [startDate, setStartDate] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);
  const [groupBy, setGroupBy] = useState('day');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);

  const fetchReport = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/reports/sales', {
        params: { start_date: startDate, end_date: endDate, group_by: groupBy }
      });
      setData(response.data);
    } catch (error) {
      console.error('Failed to fetch sales report:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReport();
  }, []);

  const handleExport = () => {
    window.open(`/reports/export/sales?start_date=${startDate}&end_date=${endDate}`, '_blank');
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Label>Start Date</Label>
              <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </div>
            <div>
              <Label>End Date</Label>
              <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </div>
            <div>
              <Label>Group By</Label>
              <Select value={groupBy} onValueChange={setGroupBy}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day">Daily</SelectItem>
                  <SelectItem value="week">Weekly</SelectItem>
                  <SelectItem value="month">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end gap-2">
              <Button onClick={fetchReport} className="flex-1">Generate</Button>
              <Button onClick={handleExport} variant="outline">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : data && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Orders</p>
                    <p className="text-2xl font-bold">{data.summary.total_orders}</p>
                  </div>
                  <ShoppingCart className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Revenue</p>
                    <p className="text-2xl font-bold">${Number(data.summary.total_revenue).toFixed(2)}</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Paid</p>
                    <p className="text-2xl font-bold">${Number(data.summary.total_paid).toFixed(2)}</p>
                  </div>
                  <CreditCard className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Avg Order Value</p>
                    <p className="text-2xl font-bold">${Number(data.summary.average_order_value).toFixed(2)}</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Revenue Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart
                options={{
                  chart: { type: 'bar', toolbar: { show: false } },
                  xaxis: { categories: data.chart_data.map((d: any) => d.date) },
                  colors: ['#8884d8'],
                  dataLabels: { enabled: false },
                  plotOptions: { bar: { borderRadius: 4 } },
                }}
                series={[{ name: 'Revenue', data: data.chart_data.map((d: any) => d.revenue) }]}
                type="bar"
                height={300}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Order #</th>
                      <th className="text-left p-4">Date</th>
                      <th className="text-left p-4">Customer</th>
                      <th className="text-left p-4">Garment</th>
                      <th className="text-left p-4">Status</th>
                      <th className="text-left p-4">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.orders.map((order: any) => (
                      <tr key={order.id} className="border-b hover:bg-gray-50 dark:hover:bg-[oklch(0.269_0_0)]">
                        <td className="p-4 font-medium">{order.order_number}</td>
                        <td className="p-4">{new Date(order.order_date).toLocaleDateString()}</td>
                        <td className="p-4">{order.customer.name}</td>
                        <td className="p-4">{order.garment_type.name}</td>
                        <td className="p-4">{order.stitching_status.name}</td>
                        <td className="p-4">${Number(order.total_amount).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
