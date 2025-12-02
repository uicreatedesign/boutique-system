import { useState } from 'react';
import { createCustomer } from '@/api/customers';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import CustomerForm from './customer-form';
import { toast } from 'sonner';

interface CustomerCreateModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CustomerCreateModal({ open, onClose }: CustomerCreateModalProps) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: any) => {
    try {
      setLoading(true);
      await createCustomer(data);
      toast.success('Customer created successfully');
      onClose();
      window.location.reload();
    } catch (error) {
      console.error('Failed to create customer:', error);
      toast.error('Failed to create customer. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md" aria-describedby="customer-create-description">
        <DialogHeader>
          <DialogTitle>Add New Customer</DialogTitle>
        </DialogHeader>
        <div id="customer-create-description" className="sr-only">
          Form to create a new customer
        </div>
        <CustomerForm onSubmit={handleSubmit} loading={loading} />
      </DialogContent>
    </Dialog>
  );
}