import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { router } from '@inertiajs/react';
import { toast } from 'sonner';

interface Notification {
  id: number;
  title: string;
  message: string;
}

interface NotificationDeleteDialogProps {
  notification: Notification | null;
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function NotificationDeleteDialog({ notification, open, onClose, onSuccess }: NotificationDeleteDialogProps) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!notification) return;
    
    try {
      setLoading(true);
      router.delete(`/notifications/${notification.id}`, {
        onSuccess: () => {
          toast.success('Notification has been successfully deleted');
          onSuccess();
          onClose();
        },
        onError: () => {
          toast.error('Failed to delete notification. Please try again.');
        },
        onFinish: () => setLoading(false)
      });
    } catch (error) {
      console.error('Failed to delete notification:', error);
      setLoading(false);
    }
  };

  if (!notification) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Delete Notification</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-gray-600">
            Are you sure you want to delete notification "{notification.title}"? This action cannot be undone.
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