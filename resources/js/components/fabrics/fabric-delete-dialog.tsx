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

interface Fabric {
  id: number;
  name: string;
}

interface FabricDeleteDialogProps {
  fabric: Fabric | null;
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function FabricDeleteDialog({ fabric, open, onClose, onSuccess }: FabricDeleteDialogProps) {
  const { delete: destroy, processing } = useForm();

  const handleDelete = () => {
    if (!fabric) return;
    destroy(`/fabrics/${fabric.id}`, {
      onSuccess: () => {
        toast.success('Fabric deleted successfully');
        onSuccess();
      },
      onError: () => {
        toast.error('Failed to delete fabric');
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent aria-describedby="delete-fabric-description">
        <DialogTitle>
          Are you sure you want to delete this fabric?
        </DialogTitle>
        <DialogDescription id="delete-fabric-description">
          Once deleted, "{fabric?.name}" will be permanently removed. This action cannot be undone.
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
            {processing ? 'Deleting...' : 'Delete Fabric'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
