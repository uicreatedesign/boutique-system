import { useState, useEffect } from 'react';
import { getTailors } from '@/api/tailors';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trash2, Edit, Eye } from 'lucide-react';
import TailorEditModal from './tailor-edit-modal';
import TailorDetailModal from './tailor-detail-modal';
import TailorDeleteDialog from './tailor-delete-dialog';
import { Skeleton } from '@/components/ui/skeleton';

interface Tailor {
  id: number;
  name: string;
  phone: string;
  email: string;
  skill_level: string;
  status: string;
  hourly_rate: string;
  specialization: string;
}

interface TailorTableProps {
  search: string;
  statusFilter: string;
}

export default function TailorTable({ search, statusFilter }: TailorTableProps) {
  const [tailors, setTailors] = useState<Tailor[]>([]);
  const [loading, setLoading] = useState(true);
  const [editTailor, setEditTailor] = useState<Tailor | null>(null);
  const [detailTailor, setDetailTailor] = useState<Tailor | null>(null);
  const [deleteTailor, setDeleteTailor] = useState<Tailor | null>(null);

  const fetchTailors = async () => {
    try {
      setLoading(true);
      const params: any = { search };
      if (statusFilter && statusFilter !== 'all') {
        params.status = statusFilter;
      }
      const response = await getTailors(params);
      setTailors(response.data.data);
    } catch (error) {
      console.error('Failed to fetch tailors:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchTailors();
    }, 300);
    return () => clearTimeout(timer);
  }, [search, statusFilter]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'on_leave': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSkillColor = (skill: string) => {
    switch (skill) {
      case 'expert': return 'bg-purple-100 text-purple-800';
      case 'intermediate': return 'bg-blue-100 text-blue-800';
      case 'beginner': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Contact</th>
              <th className="text-left p-4">Skill Level</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Hourly Rate</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, i) => (
              <tr key={i} className="border-b">
                <td className="p-4"><Skeleton className="h-5 w-32" /></td>
                <td className="p-4">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-28" />
                    <Skeleton className="h-4 w-36" />
                  </div>
                </td>
                <td className="p-4"><Skeleton className="h-6 w-24" /></td>
                <td className="p-4"><Skeleton className="h-6 w-20" /></td>
                <td className="p-4"><Skeleton className="h-4 w-16" /></td>
                <td className="p-4">
                  <div className="flex space-x-2">
                    <Skeleton className="h-9 w-9" />
                    <Skeleton className="h-9 w-9" />
                    <Skeleton className="h-9 w-9" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
              <th className="text-left p-4">Contact</th>
              <th className="text-left p-4">Skill Level</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Hourly Rate</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tailors.map((tailor) => (
              <tr key={tailor.id} className="border-b hover:bg-gray-50 dark:hover:bg-[oklch(0.269_0_0)]">
                <td className="p-4 font-medium">{tailor.name}</td>
                <td className="p-4">
                  <div className="space-y-1">
                    <div className="text-sm">{tailor.phone}</div>
                    {tailor.email && <div className="text-sm text-gray-600">{tailor.email}</div>}
                  </div>
                </td>
                <td className="p-4">
                  <Badge className={getSkillColor(tailor.skill_level)}>
                    {tailor.skill_level}
                  </Badge>
                </td>
                <td className="p-4">
                  <Badge className={getStatusColor(tailor.status)}>
                    {tailor.status.replace('_', ' ')}
                  </Badge>
                </td>
                <td className="p-4 text-sm">
                  {tailor.hourly_rate ? `$${tailor.hourly_rate}/hr` : '-'}
                </td>
                <td className="p-4">
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setDetailTailor(tailor)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setEditTailor(tailor)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setDeleteTailor(tailor)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editTailor && (
        <TailorEditModal
          tailor={editTailor}
          open={!!editTailor}
          onClose={() => setEditTailor(null)}
          onSuccess={() => {
            setEditTailor(null);
            fetchTailors();
          }}
        />
      )}

      {detailTailor && (
        <TailorDetailModal
          tailor={detailTailor}
          open={!!detailTailor}
          onClose={() => setDetailTailor(null)}
        />
      )}

      <TailorDeleteDialog
        tailor={deleteTailor}
        open={!!deleteTailor}
        onClose={() => setDeleteTailor(null)}
        onSuccess={() => {
          setDeleteTailor(null);
          fetchTailors();
        }}
      />
    </>
  );
}
