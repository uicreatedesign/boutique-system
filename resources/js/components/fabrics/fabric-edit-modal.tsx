import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import FabricForm from './fabric-form';

interface Fabric {
  id: number;
  name: string;
  type: string;
  color: string;
  price_per_meter: string;
  quantity_in_stock: string;
  unit: string;
  description: string;
  status: 'available' | 'out_of_stock' | 'discontinued';
}

interface FabricEditModalProps {
  fabric: Fabric;
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function FabricEditModal({ fabric, open, onClose, onSuccess }: FabricEditModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Fabric</DialogTitle>
        </DialogHeader>
        <FabricForm fabric={fabric} onSuccess={onSuccess} />
      </DialogContent>
    </Dialog>
  );
}
