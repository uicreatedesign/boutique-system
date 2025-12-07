import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import StitchingStatusForm from './stitching-status-form';

interface StitchingStatusCreateModalProps {
  open: boolean;
  onClose: () => void;
}

export default function StitchingStatusCreateModal({ open, onClose }: StitchingStatusCreateModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Stitching Status</DialogTitle>
        </DialogHeader>
        <StitchingStatusForm onSuccess={onClose} />
      </DialogContent>
    </Dialog>
  );
}
