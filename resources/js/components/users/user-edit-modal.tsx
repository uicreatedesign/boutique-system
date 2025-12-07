import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { updateUser } from '@/api/users';
import UserForm from './user-form';

interface User {
  id: number;
  name: string;
  email: string;
  roles: Array<{ id: number; name: string }>;
}

interface UserEditModalProps {
  user: User;
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function UserEditModal({ user, open, onClose, onSuccess }: UserEditModalProps) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: any) => {
    try {
      setLoading(true);
      await updateUser(user.id, data);
      onSuccess();
    } catch (error) {
      console.error('Failed to update user:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
        </DialogHeader>
        <UserForm 
          initialData={user} 
          onSubmit={handleSubmit} 
          loading={loading} 
          isEdit={true}
        />
      </DialogContent>
    </Dialog>
  );
}