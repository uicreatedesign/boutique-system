import { useForm } from '@inertiajs/react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

interface PaymentModalProps {
  open: boolean;
  onClose: () => void;
  orderId: number;
  balanceDue: number;
}

export default function PaymentModal({ open, onClose, orderId, balanceDue }: PaymentModalProps) {
  const { data, setData, post, processing, errors, reset } = useForm({
    payment_date: new Date().toISOString().split('T')[0],
    amount: balanceDue?.toString() || '0',
    payment_method: 'cash',
    transaction_reference: '',
    payment_type: 'partial',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(`/orders/${orderId}/payments`, {
      onSuccess: () => {
        toast.success('Payment added successfully');
        reset();
        onClose();
      },
      onError: () => {
        toast.error('Failed to add payment');
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Payment</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Payment Date *</Label>
            <Input
              type="date"
              value={data.payment_date}
              onChange={(e) => setData('payment_date', e.target.value)}
            />
            {errors.payment_date && <p className="text-sm text-red-500 mt-1">{errors.payment_date}</p>}
          </div>

          <div>
            <Label>Amount *</Label>
            <Input
              type="number"
              step="0.01"
              value={data.amount}
              onChange={(e) => setData('amount', e.target.value)}
              placeholder="0.00"
            />
            <p className="text-sm text-gray-600 mt-1">Balance Due: ${balanceDue || 0}</p>
            {errors.amount && <p className="text-sm text-red-500 mt-1">{errors.amount}</p>}
          </div>

          <div>
            <Label>Payment Method *</Label>
            <Select value={data.payment_method} onValueChange={(value) => setData('payment_method', value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cash">Cash</SelectItem>
                <SelectItem value="card">Card</SelectItem>
                <SelectItem value="upi">UPI</SelectItem>
                <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.payment_method && <p className="text-sm text-red-500 mt-1">{errors.payment_method}</p>}
          </div>

          <div>
            <Label>Transaction Reference</Label>
            <Input
              value={data.transaction_reference}
              onChange={(e) => setData('transaction_reference', e.target.value)}
              placeholder="Transaction ID or reference"
            />
          </div>

          <div>
            <Label>Payment Type *</Label>
            <Select value={data.payment_type} onValueChange={(value) => setData('payment_type', value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="advance">Advance</SelectItem>
                <SelectItem value="partial">Partial</SelectItem>
                <SelectItem value="full">Full</SelectItem>
              </SelectContent>
            </Select>
            {errors.payment_type && <p className="text-sm text-red-500 mt-1">{errors.payment_type}</p>}
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
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={processing}>
              {processing ? 'Adding...' : 'Add Payment'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
