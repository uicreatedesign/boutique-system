import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

interface User {
  id: number;
  name: string;
  email: string;
  roles: Array<{ id: number; name: string }>;
  created_at: string;
}

interface UserDetailModalProps {
  user: User;
  open: boolean;
  onClose: () => void;
}

export default function UserDetailModal({ user, open, onClose }: UserDetailModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-500">Name</label>
            <p className="text-sm">{user.name}</p>
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-500">Email</label>
            <p className="text-sm">{user.email}</p>
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-500">Roles</label>
            <div className="flex flex-wrap gap-1 mt-1">
              {user.roles?.map((role) => (
                <Badge key={role.id} variant="secondary">
                  {role.name}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-500">Created</label>
            <p className="text-sm">{new Date(user.created_at).toLocaleDateString()}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}