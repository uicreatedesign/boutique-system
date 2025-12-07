import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ClipboardList, CheckCircle, Clock } from 'lucide-react';

interface TailorDashboardProps {
  tailor: {
    id: number;
    name: string;
    skill_level: string;
    status: string;
    hourly_rate: string;
    specialization: string;
  };
  stats: {
    total_orders: number;
    pending_orders: number;
    completed_orders: number;
  };
}

export default function TailorDashboard({ tailor, stats }: TailorDashboardProps) {
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
    <AppLayout>
      <Head title="Tailor Dashboard" />
      
      <div className="space-y-6 p-4">
        <div>
          <h1 className="text-3xl font-bold">Welcome, {tailor.name}!</h1>
          <p className="text-gray-600 mt-1">Your tailor dashboard</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Your Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2">
              <strong>Status:</strong>
              <Badge className={getStatusColor(tailor.status)}>
                {tailor.status.replace('_', ' ')}
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <strong>Skill Level:</strong>
              <Badge className={getSkillColor(tailor.skill_level)}>
                {tailor.skill_level}
              </Badge>
            </div>
            {tailor.hourly_rate && (
              <div><strong>Hourly Rate:</strong> ${tailor.hourly_rate}/hr</div>
            )}
            {tailor.specialization && (
              <div><strong>Specialization:</strong> {tailor.specialization}</div>
            )}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <ClipboardList className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total_orders}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.pending_orders}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed Orders</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.completed_orders}</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500 text-center py-8">No orders assigned yet</p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
