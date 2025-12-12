import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useCurrency } from '@/hooks/use-currency';

export default function TailorPerformanceReport() {
  const { formatCurrency } = useCurrency();
  const [startDate, setStartDate] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);

  const fetchReport = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/reports/tailor-performance', {
        params: { start_date: startDate, end_date: endDate }
      });
      setData(response.data.data);
    } catch (error) {
      console.error('Failed to fetch tailor performance report:', error);
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
            <CardTitle>Tailor Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Tailor</th>
                    <th className="text-left p-4">Skill Level</th>
                    <th className="text-left p-4">Total Orders</th>
                    <th className="text-left p-4">Completed</th>
                    <th className="text-left p-4">Pending</th>
                    <th className="text-left p-4">Cancelled</th>
                    <th className="text-left p-4">Completion Rate</th>
                    <th className="text-left p-4">Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((tailor) => (
                    <tr key={tailor.id} className="border-b hover:bg-gray-50 dark:hover:bg-[oklch(0.269_0_0)]">
                      <td className="p-4 font-medium">{tailor.name}</td>
                      <td className="p-4">
                        <Badge variant="secondary">{tailor.skill_level}</Badge>
                      </td>
                      <td className="p-4">{tailor.total_orders}</td>
                      <td className="p-4 text-green-600">{tailor.completed_orders}</td>
                      <td className="p-4 text-yellow-600">{tailor.pending_orders}</td>
                      <td className="p-4 text-red-600">{tailor.cancelled_orders}</td>
                      <td className="p-4">{tailor.completion_rate}%</td>
                      <td className="p-4">{formatCurrency(tailor.total_revenue)}</td>
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
