import { useState, useEffect } from 'react';
import { router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Edit, Trash2 } from 'lucide-react';
import GarmentTypeEditModal from './garment-type-edit-modal';
import GarmentTypeDeleteDialog from './garment-type-delete-dialog';

interface GarmentType {
  id: number;
  name: string;
  description: string;
  status: 'active' | 'inactive';
}

interface GarmentTypeTableProps {
  search: string;
  statusFilter: string;
  canEdit?: boolean;
  canDelete?: boolean;
}

export default function GarmentTypeTable({ search, statusFilter, canEdit = false, canDelete = false }: GarmentTypeTableProps) {
  const [garmentTypes, setGarmentTypes] = useState<GarmentType[]>([]);
  const [filteredTypes, setFilteredTypes] = useState<GarmentType[]>([]);
  const [editType, setEditType] = useState<GarmentType | null>(null);
  const [deleteType, setDeleteType] = useState<GarmentType | null>(null);

  useEffect(() => {
    router.reload({ only: ['garmentTypes'], onSuccess: (page: any) => {
      setGarmentTypes(page.props.garmentTypes || []);
    }});
  }, []);

  useEffect(() => {
    let filtered = garmentTypes;

    if (search) {
      filtered = filtered.filter(type =>
        type.name.toLowerCase().includes(search.toLowerCase()) ||
        type.description?.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (statusFilter && statusFilter !== 'all') {
      filtered = filtered.filter(type => type.status === statusFilter);
    }

    setFilteredTypes(filtered);
  }, [garmentTypes, search, statusFilter]);

  if (filteredTypes.length === 0) {
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
            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
          />
        </svg>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No Garment Types Found</h3>
        <p className="text-gray-500 text-center mb-6 max-w-md">
          {search || statusFilter ? 'No garment types match your search criteria.' : 'Get started by adding your first garment type.'}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Description</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTypes.map((type) => (
              <tr key={type.id} className="border-b hover:bg-gray-50 dark:hover:bg-[oklch(0.269_0_0)]">
                <td className="p-4 font-medium">{type.name}</td>
                <td className="p-4 text-sm text-gray-600">{type.description || '-'}</td>
                <td className="p-4">
                  <Badge variant={type.status === 'active' ? 'default' : 'secondary'}>
                    {type.status}
                  </Badge>
                </td>
                <td className="p-4">
                  <div className="flex space-x-2">
                    {canEdit && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setEditType(type)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    )}
                    {canDelete && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setDeleteType(type)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editType && (
        <GarmentTypeEditModal
          garmentType={editType}
          open={!!editType}
          onClose={() => setEditType(null)}
          onSuccess={() => {
            setEditType(null);
            router.reload({ only: ['garmentTypes'] });
          }}
        />
      )}

      <GarmentTypeDeleteDialog
        garmentType={deleteType}
        open={!!deleteType}
        onClose={() => setDeleteType(null)}
        onSuccess={() => {
          setDeleteType(null);
          router.reload({ only: ['garmentTypes'] });
        }}
      />
    </>
  );
}
