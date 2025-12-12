import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCurrency } from '@/hooks/use-currency';

export default function CustomerReport() {
  const { formatCurrency } = useCurrency();
  const [startDate, setStartDate] = useState(new Date(new Date().getFullYear(), 0, 1).toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);

  const fetchReport = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/reports/customers', {
        params: { start_date: startDate, end_date: endDate }
      });
      setData(response.data.data);
    } catch (error) {
      console.error('Failed to fetch customer report:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReport();
  }, []);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label>Start Date</Label>
              <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </div>
            <div>
              <Label>End Date</Label>
              <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </div>
            <div className="flex items-end">
              <Button onClick={fetchReport} className="w-full">Generate</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Top Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Customer</th>
                    <th className="text-left p-4">Contact</th>
                    <th className="text-left p-4">Total Orders</th>
                    <th className="text-left p-4">Total Spent</th>
                    <th className="text-left p-4">Total Paid</th>
                    <th className="text-left p-4">Pending</th>
                    <th className="text-left p-4">Last Order</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((customer) => (
                    <tr key={customer.id} className="border-b hover:bg-gray-50 dark:hover:bg-[oklch(0.269_0_0)]">
                      <td className="p-4 font-medium">{customer.name}</td>
                      <td className="p-4">
                        <div className="space-y-1">
                          {customer.phone && <div className="text-sm">{customer.phone}</div>}
                          {customer.email && <div className="text-sm text-gray-600">{customer.email}</div>}
                        </div>
                      </td>
                      <td className="p-4">{customer.total_orders}</td>
                      <td className="p-4">{formatCurrency(customer.total_spent)}</td>
                      <td className="p-4 text-green-600">{formatCurrency(customer.total_paid)}</td>
                      <td className="p-4 text-red-600">{formatCurrency(customer.pending_amount)}</td>
                      <td className="p-4">{customer.last_order_date ? new Date(customer.last_order_date).toLocaleDateString() : 'N/A'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
