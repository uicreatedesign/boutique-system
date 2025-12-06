import { useState } from 'react';
import { createRole } from '@/api/roles';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import RoleForm from './role-form';
import { toast } from 'sonner';

interface RoleCreateModalProps {
  open: boolean;
  onClose: () => void;
}

export default function RoleCreateModal({ open, onClose }: RoleCreateModalProps) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: any) => {
    try {
      setLoading(true);
      await createRole(data);
      toast.success('Role created successfully');
      onClose();
      window.location.reload();
    } catch (error) {
      console.error('Failed to create role:', error);
      toast.error('Failed to create role. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto" aria-describedby="role-create-description">
        <DialogHeader>
          <DialogTitle>Add New Role</DialogTitle>
        </DialogHeader>
        <div id="role-create-description" className="sr-only">
          Form to create a new role with permissions
        </div>
        <RoleForm onSubmit={handleSubmit} loading={loading} />
      </DialogContent>
    </Dialog>
  );
}
