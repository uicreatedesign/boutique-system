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

interface Props {
  order: any;
  customers: Array<{ id: number; name: string }>;
  garmentTypes: Array<{ id: number; name: string }>;
  tailors: Array<{ id: number; name: string }>;
  fabrics: Array<{ id: number; name: string; price_per_meter: number }>;
  statuses: Array<{ id: number; name: string; color: string }>;
}

export default function OrdersEdit({ order, customers, garmentTypes, tailors, fabrics, statuses }: Props) {
  const { data, setData, put, processing, errors } = useForm({
    customer_id: order.customer_id.toString(),
    garment_type_id: order.garment_type_id.toString(),
    tailor_id: order.tailor_id.toString(),
    measurement_id: order.measurement_id?.toString() || '',
    fabric_id: order.fabric_id?.toString() || '',
    customer_fabric: order.customer_fabric,
    stitching_status_id: order.stitching_status_id.toString(),
    order_date: order.order_date,
    delivery_date: order.delivery_date,
    priority: order.priority,
    total_amount: order.total_amount.toString(),
    discount: order.discount.toString(),
    special_instructions: order.special_instructions || '',
    notes: order.notes || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    put(`/orders/${order.id}`, {
      onSuccess: () => {
        toast.success('Order updated successfully');
      },
      onError: () => {
        toast.error('Failed to update order');
      }
    });
  };

  return (
    <AppLayout>
      <Head title={`Edit Order ${order.order_number}`} />
      
      <div className="space-y-6 p-4">
        <h1 className="text-3xl font-bold">Edit Order {order.order_number}</h1>

        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Customer *</Label>
                  <Select value={data.customer_id} onValueChange={(value) => setData('customer_id', value)}>
                    <SelectTrigger>
                      <SelectValue />
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
                      <SelectValue />
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
                      <SelectValue />
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

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Total Amount *</Label>
                  <Input
                    type="number"
                    step="0.01"
                    value={data.total_amount}
                    onChange={(e) => setData('total_amount', e.target.value)}
                  />
                  {errors.total_amount && <p className="text-sm text-red-500 mt-1">{errors.total_amount}</p>}
                </div>

                <div>
                  <Label>Discount</Label>
                  <Input
                    type="number"
                    step="0.01"
                    value={data.discount}
                    onChange={(e) => setData('discount', e.target.value)}
                  />
                </div>
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
                  {processing ? 'Updating...' : 'Update Order'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </AppLayout>
  );
}
