import { useState } from 'react';
import { deleteCustomer } from '@/api/customers';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface Customer {
  id: number;
  name: string;
}

interface CustomerDeleteDialogProps {
  customer: Customer | null;
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function CustomerDeleteDialog({ customer, open, onClose, onSuccess }: CustomerDeleteDialogProps) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!customer) return;
    
    try {
      setLoading(true);
      await deleteCustomer(customer.id);
      onSuccess();
      onClose();
    } catch (error) {
      console.error('Failed to delete customer:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent aria-describedby="delete-customer-description">
        <DialogTitle>
          Are you sure you want to delete this customer?
        </DialogTitle>
        <DialogDescription id="delete-customer-description">
          Once deleted, all of {customer?.name}'s data will be permanently removed. 
          This action cannot be undone.
        </DialogDescription>

        <DialogFooter className="gap-2">
          <DialogClose asChild>
            <Button variant="secondary">
              Cancel
            </Button>
          </DialogClose>

          <Button
            variant="destructive"
            disabled={loading}
            onClick={handleDelete}
          >
            {loading ? 'Deleting...' : 'Delete Customer'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}