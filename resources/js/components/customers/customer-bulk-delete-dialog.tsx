import { useState } from 'react';
import axios from 'axios';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface CustomerBulkDeleteDialogProps {
  open: boolean;
  selectedIds: number[];
  onClose: () => void;
  onSuccess: () => void;
}

export default function CustomerBulkDeleteDialog({
  open,
  selectedIds,
  onClose,
  onSuccess,
}: CustomerBulkDeleteDialogProps) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      await axios.post('/api/customers/bulk-delete', { ids: selectedIds });
      toast.success('Customers deleted successfully');
      onSuccess();
    } catch (error) {
      toast.error('Failed to delete customers');
      console.error('Failed to delete customers:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete {selectedIds.length} Customers?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. All selected customers will be permanently deleted.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={loading}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? 'Deleting...' : 'Delete'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
