import { useState } from 'react';
import { createTailor } from '@/api/tailors';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import TailorForm from './tailor-form';
import { toast } from 'sonner';

interface TailorCreateModalProps {
  open: boolean;
  onClose: () => void;
}

export default function TailorCreateModal({ open, onClose }: TailorCreateModalProps) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: any) => {
    try {
      setLoading(true);
      await createTailor(data);
      toast.success('Tailor created successfully');
      onClose();
      window.location.reload();
    } catch (error) {
      console.error('Failed to create tailor:', error);
      toast.error('Failed to create tailor. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" aria-describedby="tailor-create-description">
        <DialogHeader>
          <DialogTitle>Add New Tailor</DialogTitle>
        </DialogHeader>
        <div id="tailor-create-description" className="sr-only">
          Form to create a new tailor
        </div>
        <TailorForm onSubmit={handleSubmit} loading={loading} />
      </DialogContent>
    </Dialog>
  );
}
