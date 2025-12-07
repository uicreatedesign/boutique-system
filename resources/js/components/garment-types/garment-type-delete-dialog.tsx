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

interface GarmentType {
  id: number;
  name: string;
}

interface GarmentTypeDeleteDialogProps {
  garmentType: GarmentType | null;
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function GarmentTypeDeleteDialog({ garmentType, open, onClose, onSuccess }: GarmentTypeDeleteDialogProps) {
  const { delete: destroy, processing } = useForm();

  const handleDelete = () => {
    if (!garmentType) return;
    destroy(`/garment-types/${garmentType.id}`, {
      onSuccess: () => {
        toast.success('Garment type deleted successfully');
        onSuccess();
      },
      onError: () => {
        toast.error('Failed to delete garment type');
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent aria-describedby="delete-garment-type-description">
        <DialogTitle>
          Are you sure you want to delete this garment type?
        </DialogTitle>
        <DialogDescription id="delete-garment-type-description">
          Once deleted, "{garmentType?.name}" will be permanently removed. This action cannot be undone.
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
            {processing ? 'Deleting...' : 'Delete Garment Type'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
