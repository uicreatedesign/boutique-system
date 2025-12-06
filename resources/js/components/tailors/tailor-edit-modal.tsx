import { useState } from 'react';
import { updateTailor } from '@/api/tailors';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import TailorForm from './tailor-form';
import { toast } from 'sonner';

interface Tailor {
  id: number;
  name: string;
  phone: string;
  email: string;
  skill_level: string;
  address: string;
  status: string;
  hourly_rate: string;
  specialization: string;
  join_date: string;
}

interface TailorEditModalProps {
  tailor: Tailor;
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function TailorEditModal({ tailor, open, onClose, onSuccess }: TailorEditModalProps) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: any) => {
    try {
      setLoading(true);
      await updateTailor(tailor.id, data);
      toast.success(`${tailor.name} updated successfully`);
      onSuccess();
    } catch (error) {
      console.error('Failed to update tailor:', error);
      toast.error('Failed to update tailor. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" aria-describedby="tailor-edit-description">
        <DialogHeader>
          <DialogTitle>Edit Tailor</DialogTitle>
        </DialogHeader>
        <div id="tailor-edit-description" className="sr-only">
          Form to edit tailor information
        </div>
        <TailorForm 
          onSubmit={handleSubmit} 
          loading={loading}
          initialData={tailor}
        />
      </DialogContent>
    </Dialog>
  );
}
