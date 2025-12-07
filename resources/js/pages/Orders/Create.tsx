import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { useState } from 'react';
import axios from 'axios';

interface Props {
  customers: Array<{ id: number; name: string }>;
  garmentTypes: Array<{ id: number; name: string }>;
  tailors: Array<{ id: number; name: string }>;
  fabrics: Array<{ id: number; name: string; price_per_meter: number }>;
  statuses: Array<{ id: number; name: string; color: string }>;
}

export default function OrdersCreate({ customers, garmentTypes, tailors, fabrics, statuses }: Props) {
  const [measurements, setMeasurements] = useState<any[]>([]);
  const { data, setData, post, processing, errors } = useForm({
    customer_id: '',
    garment_type_id: '',
    tailor_id: '',
    measurement_id: '',
    fabric_id: '',
    customer_fabric: false,
    stitching_status_id: statuses[0]?.id.toString() || '',
    order_date: new Date().toISOString().split('T')[0],
    delivery_date: '',
    priority: 'normal',
    total_amount: '',
    advance_paid: '',
    discount: '0',
    special_instructions: '',
    notes: '',
  });

  const handleCustomerChange = async (customerId: string) => {
    setData('customer_id', customerId);
    if (customerId) {
      try {
        const response = await axios.get(`/api/measurements?customer_id=${customerId}`);
        setMeasurements(response.data);
      } catch (error) {
        console.error('Failed to fetch measurements:', error);
      }
    } else {
      setMeasurements([]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/orders', {
      onSuccess: () => {
        toast.success('Order created successfully');
      },
      onError: () => {
        toast.error('Failed to create order');
      }
    });
  };

  return (
    <AppLayout>
      <Head title="Create Order" />
      
      <div className="space-y-6 p-4">
        <h1 className="text-3xl font-bold">Create Order</h1>

        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Customer *</Label>
                  <Select value={data.customer_id} onValueChange={handleCustomerChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select customer" />
                    </SelectTrigger>
                    <SelectContent>
                      {customers.map((customer) => (
                        <SelectItem key={customer.id} value={customer.id.toString()}>
                          {customer.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.customer_id && <p className="text-sm text-red-500 mt-1">{errors.customer_id}</p>}
                </div>

                <div>
                  <Label>Garment Type *</Label>
                  <Select value={data.garment_type_id} onValueChange={(value) => setData('garment_type_id', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select garment type" />
                    </SelectTrigger>
                    <SelectContent>
                      {garmentTypes.map((type) => (
                        <SelectItem key={type.id} value={type.id.toString()}>
                          {type.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.garment_type_id && <p className="text-sm text-red-500 mt-1">{errors.garment_type_id}</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Tailor *</Label>
                  <Select value={data.tailor_id} onValueChange={(value) => setData('tailor_id', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select tailor" />
                    </SelectTrigger>
                    <SelectContent>
                      {tailors.map((tailor) => (
                        <SelectItem key={tailor.id} value={tailor.id.toString()}>
                          {tailor.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.tailor_id && <p className="text-sm text-red-500 mt-1">{errors.tailor_id}</p>}
                </div>

                <div>
                  <Label>Measurement</Label>
                  <Select value={data.measurement_id} onValueChange={(value) => setData('measurement_id', value)} disabled={!data.customer_id}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select measurement" />
                    </SelectTrigger>
                    <SelectContent>
                      {measurements.map((measurement) => (
                        <SelectItem key={measurement.id} value={measurement.id.toString()}>
                          {measurement.measurement_type} - {new Date(measurement.created_at).toLocaleDateString()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="customer_fabric"
                  checked={data.customer_fabric}
                  onCheckedChange={(checked) => setData('customer_fabric', checked as boolean)}
                />
                <label htmlFor="customer_fabric" className="text-sm cursor-pointer">
                  Customer provided fabric
                </label>
              </div>

              {!data.customer_fabric && (
                <div>
                  <Label>Fabric</Label>
                  <Select value={data.fabric_id} onValueChange={(value) => setData('fabric_id', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select fabric" />
                    </SelectTrigger>
                    <SelectContent>
                      {fabrics.map((fabric) => (
                        <SelectItem key={fabric.id} value={fabric.id.toString()}>
                          {fabric.name} - ${fabric.price_per_meter}/meter
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label>Order Date *</Label>
                  <Input
                    type="date"
                    value={data.order_date}
                    onChange={(e) => setData('order_date', e.target.value)}
                  />
                  {errors.order_date && <p className="text-sm text-red-500 mt-1">{errors.order_date}</p>}
                </div>

                <div>
                  <Label>Delivery Date *</Label>
                  <Input
                    type="date"
                    value={data.delivery_date}
                    onChange={(e) => setData('delivery_date', e.target.value)}
                  />
                  {errors.delivery_date && <p className="text-sm text-red-500 mt-1">{errors.delivery_date}</p>}
                </div>

                <div>
                  <Label>Priority *</Label>
                  <Select value={data.priority} onValueChange={(value) => setData('priority', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="normal">Normal</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label>Total Amount *</Label>
                  <Input
                    type="number"
                    step="0.01"
                    value={data.total_amount}
                    onChange={(e) => setData('total_amount', e.target.value)}
                    placeholder="0.00"
                  />
                  {errors.total_amount && <p className="text-sm text-red-500 mt-1">{errors.total_amount}</p>}
                </div>

                <div>
                  <Label>Advance Paid</Label>
                  <Input
                    type="number"
                    step="0.01"
                    value={data.advance_paid}
                    onChange={(e) => setData('advance_paid', e.target.value)}
                    placeholder="0.00"
                  />
                </div>

                <div>
                  <Label>Discount</Label>
                  <Input
                    type="number"
                    step="0.01"
                    value={data.discount}
                    onChange={(e) => setData('discount', e.target.value)}
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div>
                <Label>Status *</Label>
                <Select value={data.stitching_status_id} onValueChange={(value) => setData('stitching_status_id', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {statuses.map((status) => (
                      <SelectItem key={status.id} value={status.id.toString()}>
                        {status.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Special Instructions</Label>
                <Textarea
                  value={data.special_instructions}
                  onChange={(e) => setData('special_instructions', e.target.value)}
                  rows={3}
                />
              </div>

              <div>
                <Label>Notes</Label>
                <Textarea
                  value={data.notes}
                  onChange={(e) => setData('notes', e.target.value)}
                  rows={2}
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => window.history.back()}>
                  Cancel
                </Button>
                <Button type="submit" disabled={processing}>
                  {processing ? 'Creating...' : 'Create Order'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </AppLayout>
  );
}
