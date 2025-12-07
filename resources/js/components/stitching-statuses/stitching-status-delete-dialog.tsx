import { useForm } from '@inertiajs/react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface StitchingStatus {
  id: number;
  name: string;
}

interface StitchingStatusDeleteDialogProps {
  status: StitchingStatus | null;
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function StitchingStatusDeleteDialog({ status, open, onClose, onSuccess }: StitchingStatusDeleteDialogProps) {
  const { delete: destroy, processing } = useForm();

  const handleDelete = () => {
    if (!status) return;
    destroy(`/stitching-statuses/${status.id}`, {
      onSuccess: () => {
        toast.success('Stitching status deleted successfully');
        onSuccess();
      },
      onError: () => {
        toast.error('Failed to delete stitching status');
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent aria-describedby="delete-status-description">
        <DialogTitle>
          Are you sure you want to delete this status?
        </DialogTitle>
        <DialogDescription id="delete-status-description">
          Once deleted, "{status?.name}" will be permanently removed. This action cannot be undone.
        </DialogDescription>

        <DialogFooter className="gap-2">
          <DialogClose asChild>
            <Button variant="secondary">
              Cancel
            </Button>
          </DialogClose>

          <Button
            variant="destructive"
            disabled={processing}
            onClick={handleDelete}
          >
            {processing ? 'Deleting...' : 'Delete Status'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
