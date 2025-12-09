import { useState } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { type BreadcrumbItem } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Database, 
  Download, 
  Upload, 
  Clock, 
  Shield, 
  AlertTriangle,
  CheckCircle,
  Calendar
} from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Backup Settings',
        href: '/settings/backup',
    },
];

export default function BackupSettings() {
  const [isBackingUp, setIsBackingUp] = useState(false);

  const handleBackup = () => {
    setIsBackingUp(true);
    setTimeout(() => {
      setIsBackingUp(false);
    }, 3000);
  };

  const backupHistory = [
    {
      id: 1,
      date: '2024-12-09 10:30:00',
      size: '2.4 MB',
      status: 'completed',
      type: 'manual'
    },
    {
      id: 2,
      date: '2024-12-08 02:00:00',
      size: '2.3 MB',
      status: 'completed',
      type: 'automatic'
    },
    {
      id: 3,
      date: '2024-12-07 02:00:00',
      size: '2.2 MB',
      status: 'completed',
      type: 'automatic'
    },
  ];

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Database Backup - Settings" />
      
      <SettingsLayout>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Database Backup</h2>
            <p className="text-sm text-muted-foreground">Manage your boutique data backups and restore points</p>
          </div>

          <Alert>
            <Shield className="h-4 w-4" />
            <AlertDescription>
              Regular backups help protect your boutique data. We recommend creating backups before major updates or changes.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Create Backup
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Create a complete backup of your boutique database including customers, orders, and settings.
                </p>
                <Button 
                  onClick={handleBackup} 
                  disabled={isBackingUp}
                  className="w-full"
                >
                  {isBackingUp ? (
                    <>
                      <Clock className="h-4 w-4 mr-2 animate-spin" />
                      Creating Backup...
                    </>
                  ) : (
                    <>
                      <Download className="h-4 w-4 mr-2" />
                      Create Backup Now
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Restore Backup
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Restore your boutique data from a previous backup file.
                </p>
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription className="text-xs">
                    This will overwrite current data. Use with caution.
                  </AlertDescription>
                </Alert>
                <Button variant="outline" className="w-full">
                  <Upload className="h-4 w-4 mr-2" />
                  Choose Backup File
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Backup History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {backupHistory.map((backup) => (
                  <div key={backup.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-muted rounded">
                        <Database className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{backup.date}</p>
                        <p className="text-xs text-muted-foreground">Size: {backup.size}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={backup.type === 'automatic' ? 'secondary' : 'default'}>
                        {backup.type}
                      </Badge>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {backup.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Automatic Backups</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Daily Automatic Backups</p>
                  <p className="text-sm text-muted-foreground">Automatically create backups every day at 2:00 AM</p>
                </div>
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Enabled
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Retention Period</p>
                  <p className="text-sm text-muted-foreground">Keep backups for 30 days</p>
                </div>
                <Button variant="outline" size="sm">
                  Configure
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </SettingsLayout>
    </AppLayout>
  );
}