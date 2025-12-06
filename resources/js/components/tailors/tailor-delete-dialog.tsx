import { useState } from 'react';
import { deleteTailor } from '@/api/tailors';
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

interface Tailor {
  id: number;
  name: string;
}

interface TailorDeleteDialogProps {
  tailor: Tailor | null;
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function TailorDeleteDialog({ tailor, open, onClose, onSuccess }: TailorDeleteDialogProps) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!tailor) return;
    
    try {
      setLoading(true);
      await deleteTailor(tailor.id);
      toast.success(`${tailor.name} has been successfully deleted`);
      onSuccess();
      onClose();
    } catch (error) {
      console.error('Failed to delete tailor:', error);
      toast.error('Failed to delete tailor. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent aria-describedby="delete-tailor-description">
        <DialogTitle>
          Are you sure you want to delete this tailor?
        </DialogTitle>
        <DialogDescription id="delete-tailor-description">
          Once deleted, all of {tailor?.name}'s data will be permanently removed. 
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
            {loading ? 'Deleting...' : 'Delete Tailor'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
