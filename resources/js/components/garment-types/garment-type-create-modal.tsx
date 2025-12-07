import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import GarmentTypeForm from './garment-type-form';

interface GarmentTypeCreateModalProps {
  open: boolean;
  onClose: () => void;
}

export default function GarmentTypeCreateModal({ open, onClose }: GarmentTypeCreateModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Garment Type</DialogTitle>
        </DialogHeader>
        <GarmentTypeForm onSuccess={onClose} />
      </DialogContent>
    </Dialog>
  );
}
