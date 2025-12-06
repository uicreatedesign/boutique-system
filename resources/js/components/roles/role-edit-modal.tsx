import { useState } from 'react';
import { updateRole } from '@/api/roles';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import RoleForm from './role-form';
import { toast } from 'sonner';

interface Role {
  id: number;
  name: string;
  description: string;
  permissions: Array<{ id: number; name: string }>;
}

interface RoleEditModalProps {
  role: Role;
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function RoleEditModal({ role, open, onClose, onSuccess }: RoleEditModalProps) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: any) => {
    try {
      setLoading(true);
      await updateRole(role.id, data);
      toast.success(`${role.name} updated successfully`);
      onSuccess();
    } catch (error) {
      console.error('Failed to update role:', error);
      toast.error('Failed to update role. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto" aria-describedby="role-edit-description">
        <DialogHeader>
          <DialogTitle>Edit Role</DialogTitle>
        </DialogHeader>
        <div id="role-edit-description" className="sr-only">
          Form to edit role information and permissions
        </div>
        <RoleForm 
          onSubmit={handleSubmit} 
          loading={loading}
          initialData={role}
        />
      </DialogContent>
    </Dialog>
  );
}
