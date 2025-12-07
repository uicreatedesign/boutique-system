import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import FabricForm from './fabric-form';

interface FabricCreateModalProps {
  open: boolean;
  onClose: () => void;
}

export default function FabricCreateModal({ open, onClose }: FabricCreateModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add Fabric</DialogTitle>
        </DialogHeader>
        <FabricForm onSuccess={onClose} />
      </DialogContent>
    </Dialog>
  );
}
