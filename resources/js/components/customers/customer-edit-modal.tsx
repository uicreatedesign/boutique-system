import { useState } from 'react';
import { updateCustomer } from '@/api/customers';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import CustomerForm from './customer-form';

interface Customer {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: string;
  dob: string;
}

interface CustomerEditModalProps {
  customer: Customer;
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function CustomerEditModal({ customer, open, onClose, onSuccess }: CustomerEditModalProps) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: any) => {
    try {
      setLoading(true);
      await updateCustomer(customer.id, data);
      onSuccess();
    } catch (error) {
      console.error('Failed to update customer:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md" aria-describedby="customer-edit-description">
        <DialogHeader>
          <DialogTitle>Edit Customer</DialogTitle>
        </DialogHeader>
        <div id="customer-edit-description" className="sr-only">
          Form to edit customer information
        </div>
        <CustomerForm 
          onSubmit={handleSubmit} 
          loading={loading}
          initialData={customer}
        />
      </DialogContent>
    </Dialog>
  );
}