import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { createUser } from '@/api/users';
import UserForm from './user-form';

interface UserCreateModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function UserCreateModal({ open, onClose, onSuccess }: UserCreateModalProps) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: any) => {
    try {
      setLoading(true);
      await createUser(data);
      onSuccess();
    } catch (error) {
      console.error('Failed to create user:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Create New User</DialogTitle>
        </DialogHeader>
        <UserForm onSubmit={handleSubmit} loading={loading} />
      </DialogContent>
    </Dialog>
  );
}