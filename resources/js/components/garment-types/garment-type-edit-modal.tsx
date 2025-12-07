import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import GarmentTypeForm from './garment-type-form';

interface GarmentType {
  id: number;
  name: string;
  description: string;
  status: 'active' | 'inactive';
}

interface GarmentTypeEditModalProps {
  garmentType: GarmentType;
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function GarmentTypeEditModal({ garmentType, open, onClose, onSuccess }: GarmentTypeEditModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Garment Type</DialogTitle>
        </DialogHeader>
        <GarmentTypeForm garmentType={garmentType} onSuccess={onSuccess} />
      </DialogContent>
    </Dialog>
  );
}
