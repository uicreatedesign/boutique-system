import { useState, useEffect } from 'react';
import { router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Edit, Trash2 } from 'lucide-react';
import FabricEditModal from './fabric-edit-modal';
import FabricDeleteDialog from './fabric-delete-dialog';
import { useCurrency } from '@/hooks/use-currency';

interface Fabric {
  id: number;
  name: string;
  type: string;
  color: string;
  price_per_meter: number;
  quantity_in_stock: number;
  unit: string;
  status: 'available' | 'out_of_stock' | 'discontinued';
}

interface FabricTableProps {
  search: string;
  statusFilter: string;
  canEdit?: boolean;
  canDelete?: boolean;
}

export default function FabricTable({ search, statusFilter, canEdit = false, canDelete = false }: FabricTableProps) {
  const { formatCurrency } = useCurrency();
  const [fabrics, setFabrics] = useState<Fabric[]>([]);
  const [filteredFabrics, setFilteredFabrics] = useState<Fabric[]>([]);
  const [editFabric, setEditFabric] = useState<Fabric | null>(null);
  const [deleteFabric, setDeleteFabric] = useState<Fabric | null>(null);

  useEffect(() => {
    router.reload({ only: ['fabrics'], onSuccess: (page: any) => {
      setFabrics(page.props.fabrics || []);
    }});
  }, []);

  useEffect(() => {
    let filtered = fabrics;

    if (search) {
      filtered = filtered.filter(fabric =>
        fabric.name.toLowerCase().includes(search.toLowerCase()) ||
        fabric.type?.toLowerCase().includes(search.toLowerCase()) ||
        fabric.color?.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (statusFilter && statusFilter !== 'all') {
      filtered = filtered.filter(fabric => fabric.status === statusFilter);
    }

    setFilteredFabrics(filtered);
  }, [fabrics, search, statusFilter]);

  if (filteredFabrics.length === 0) {
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
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No Fabrics Found</h3>
        <p className="text-gray-500 text-center mb-6 max-w-md">
          {search || statusFilter ? 'No fabrics match your search criteria.' : 'Get started by adding your first fabric to inventory.'}
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
              <th className="text-left p-4">Type</th>
              <th className="text-left p-4">Color</th>
              <th className="text-left p-4">Price/{}</th>
              <th className="text-left p-4">Stock</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredFabrics.map((fabric) => (
              <tr key={fabric.id} className="border-b hover:bg-gray-50 dark:hover:bg-[oklch(0.269_0_0)]">
                <td className="p-4 font-medium">{fabric.name}</td>
                <td className="p-4 text-sm">{fabric.type || '-'}</td>
                <td className="p-4 text-sm">{fabric.color || '-'}</td>
                <td className="p-4 text-sm">{formatCurrency(fabric.price_per_meter || 0)}/{fabric.unit}</td>
                <td className="p-4 text-sm">
                  <Badge variant={fabric.quantity_in_stock > 0 ? 'default' : 'secondary'}>
                    {fabric.quantity_in_stock} {fabric.unit}
                  </Badge>
                </td>
                <td className="p-4">
                  <Badge variant={fabric.status === 'available' ? 'default' : 'secondary'}>
                    {fabric.status.replace('_', ' ')}
                  </Badge>
                </td>
                <td className="p-4">
                  <div className="flex space-x-2">
                    {canEdit && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setEditFabric(fabric)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    )}
                    {canDelete && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setDeleteFabric(fabric)}
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

      {editFabric && (
        <FabricEditModal
          fabric={editFabric}
          open={!!editFabric}
          onClose={() => setEditFabric(null)}
          onSuccess={() => {
            setEditFabric(null);
            router.reload({ only: ['fabrics'] });
          }}
        />
      )}

      <FabricDeleteDialog
        fabric={deleteFabric}
        open={!!deleteFabric}
        onClose={() => setDeleteFabric(null)}
        onSuccess={() => {
          setDeleteFabric(null);
          router.reload({ only: ['fabrics'] });
        }}
      />
    </>
  );
}
