import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { deleteUser } from '@/api/users';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserDeleteDialogProps {
  user: User | null;
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function UserDeleteDialog({ user, open, onClose, onSuccess }: UserDeleteDialogProps) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!user) return;
    
    try {
      setLoading(true);
      await deleteUser(user.id);
      onSuccess();
    } catch (error) {
      console.error('Failed to delete user:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!user) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Delete User</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-gray-600">
            Are you sure you want to delete user "{user.name}"? This action cannot be undone.
          </p>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={loading}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleDelete} disabled={loading}>
            {loading ? 'Deleting...' : 'Delete'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}