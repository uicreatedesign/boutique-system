import { useState, useEffect } from 'react';
import { getTailor } from '@/api/tailors';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { usePage } from '@inertiajs/react';

interface Tailor {
  id: number;
  name: string;
  phone: string;
  email: string;
  skill_level: string;
  address: string;
  status: string;
  hourly_rate: string;
  specialization: string;
  join_date: string;
}

interface TailorDetailModalProps {
  tailor: Tailor;
  open: boolean;
  onClose: () => void;
}

export default function TailorDetailModal({ tailor, open, onClose }: TailorDetailModalProps) {
  const { appSettings } = usePage().props as any;
  const currencySymbol = appSettings?.currency_symbol || '$';
  const [tailorDetail, setTailorDetail] = useState<Tailor | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (open && tailor) {
      fetchTailorDetail();
    }
  }, [open, tailor]);

  const fetchTailorDetail = async () => {
    try {
      const response = await getTailor(tailor.id);
      setTailorDetail(response.data);
    } catch (error) {
      console.error('Failed to fetch tailor detail:', error);
    } finally {
      setLoading(false);
    }
  };

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

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto" aria-describedby="tailor-detail-description">
        <DialogHeader>
          <DialogTitle>Tailor Details</DialogTitle>
        </DialogHeader>
        <div id="tailor-detail-description" className="sr-only">
          Detailed view of tailor information
        </div>
        
        {loading ? (
          <div className="text-center py-4">Loading...</div>
        ) : (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div><strong>Name:</strong> {tailorDetail?.name}</div>
                <div><strong>Phone:</strong> {tailorDetail?.phone}</div>
                {tailorDetail?.email && <div><strong>Email:</strong> {tailorDetail.email}</div>}
                {tailorDetail?.address && <div><strong>Address:</strong> {tailorDetail.address}</div>}
                {tailorDetail?.join_date && (
                  <div><strong>Join Date:</strong> {new Date(tailorDetail.join_date).toLocaleDateString()}</div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Professional Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <strong>Skill Level:</strong>
                  <Badge className={getSkillColor(tailorDetail?.skill_level || '')}>
                    {tailorDetail?.skill_level}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <strong>Status:</strong>
                  <Badge className={getStatusColor(tailorDetail?.status || '')}>
                    {tailorDetail?.status.replace('_', ' ')}
                  </Badge>
                </div>
                {tailorDetail?.hourly_rate && (
                  <div><strong>Hourly Rate:</strong> {currencySymbol}{tailorDetail.hourly_rate}/hr</div>
                )}
                {tailorDetail?.specialization && (
                  <div><strong>Specialization:</strong> {tailorDetail.specialization}</div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
