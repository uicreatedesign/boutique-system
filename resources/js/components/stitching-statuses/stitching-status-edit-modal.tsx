import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import StitchingStatusForm from './stitching-status-form';

interface StitchingStatus {
  id: number;
  name: string;
  color: string;
  description: string;
  status: 'active' | 'inactive';
}

interface StitchingStatusEditModalProps {
  status: StitchingStatus;
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function StitchingStatusEditModal({ status, open, onClose, onSuccess }: StitchingStatusEditModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Stitching Status</DialogTitle>
        </DialogHeader>
        <StitchingStatusForm status={status} onSuccess={onSuccess} />
      </DialogContent>
    </Dialog>
  );
}
