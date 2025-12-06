import { useState } from 'react';
import { deleteRole } from '@/api/roles';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface Role {
  id: number;
  name: string;
}

interface RoleDeleteDialogProps {
  role: Role | null;
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function RoleDeleteDialog({ role, open, onClose, onSuccess }: RoleDeleteDialogProps) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!role) return;
    
    try {
      setLoading(true);
      await deleteRole(role.id);
      toast.success(`${role.name} has been successfully deleted`);
      onSuccess();
      onClose();
    } catch (error) {
      console.error('Failed to delete role:', error);
      toast.error('Failed to delete role. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent aria-describedby="delete-role-description">
        <DialogTitle>
          Are you sure you want to delete this role?
        </DialogTitle>
        <DialogDescription id="delete-role-description">
          Once deleted, {role?.name} will be permanently removed. 
          This action cannot be undone.
        </DialogDescription>

        <DialogFooter className="gap-2">
          <DialogClose asChild>
            <Button variant="secondary">
              Cancel
            </Button>
          </DialogClose>

          <Button
            variant="destructive"
            disabled={loading}
            onClick={handleDelete}
          >
            {loading ? 'Deleting...' : 'Delete Role'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
