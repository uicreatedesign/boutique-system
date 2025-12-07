import { useState, useEffect } from 'react';
import { router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Edit, Trash2, GripVertical } from 'lucide-react';
import StitchingStatusEditModal from './stitching-status-edit-modal';
import StitchingStatusDeleteDialog from './stitching-status-delete-dialog';

interface StitchingStatus {
  id: number;
  name: string;
  slug: string;
  color: string;
  order: number;
  description: string;
  status: 'active' | 'inactive';
}

interface StitchingStatusListProps {
  canEdit?: boolean;
  canDelete?: boolean;
}

export default function StitchingStatusList({ canEdit = false, canDelete = false }: StitchingStatusListProps) {
  const [statuses, setStatuses] = useState<StitchingStatus[]>([]);
  const [editStatus, setEditStatus] = useState<StitchingStatus | null>(null);
  const [deleteStatus, setDeleteStatus] = useState<StitchingStatus | null>(null);

  useEffect(() => {
    router.reload({ only: ['statuses'], onSuccess: (page: any) => {
      setStatuses(page.props.statuses || []);
    }});
  }, []);

  if (statuses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <svg
          className="w-48 h-48 mb-6 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No Statuses Found</h3>
        <p className="text-gray-500 text-center mb-6 max-w-md">
          Get started by adding your first stitching status like Cutting, Stitching, Finishing, etc.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-2">
        {statuses.map((status) => (
          <div
            key={status.id}
            className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-[oklch(0.269_0_0)]"
          >
            <div className="flex items-center gap-4 flex-1">
              <GripVertical className="h-5 w-5 text-gray-400 cursor-move" />
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: status.color }}
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{status.name}</h3>
                  <Badge variant={status.status === 'active' ? 'default' : 'secondary'}>
                    {status.status}
                  </Badge>
                </div>
                {status.description && (
                  <p className="text-sm text-gray-600 mt-1">{status.description}</p>
                )}
              </div>
            </div>
            <div className="flex space-x-2">
              {canEdit && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setEditStatus(status)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
              )}
              {canDelete && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setDeleteStatus(status)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>

      {editStatus && (
        <StitchingStatusEditModal
          status={editStatus}
          open={!!editStatus}
          onClose={() => setEditStatus(null)}
          onSuccess={() => {
            setEditStatus(null);
            router.reload({ only: ['statuses'] });
          }}
        />
      )}

      <StitchingStatusDeleteDialog
        status={deleteStatus}
        open={!!deleteStatus}
        onClose={() => setDeleteStatus(null)}
        onSuccess={() => {
          setDeleteStatus(null);
          router.reload({ only: ['statuses'] });
        }}
      />
    </>
  );
}
