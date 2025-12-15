import { useState, FormEvent } from 'react';
import { Head, router } from '@inertiajs/react';
import axios from 'axios';
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

interface Backup {
  id: number;
  filename: string;
  date: string;
  size: string;
  status: string;
  type: string;
}

interface BackupSettings {
  auto_backup_enabled: boolean;
  retention_days: number;
}

interface Props {
  backups: Backup[];
  settings: BackupSettings;
}

export default function BackupSettings({ backups = [], settings }: Props) {
  const [isBackingUp, setIsBackingUp] = useState(false);
  const [autoBackupEnabled, setAutoBackupEnabled] = useState(settings?.auto_backup_enabled || false);
  const [retentionDays, setRetentionDays] = useState(settings?.retention_days || 30);
  const [isSaving, setIsSaving] = useState(false);

  console.log('Backups received:', backups);
  console.log('Settings received:', settings);

  const handleBackup = () => {
    setIsBackingUp(true);
    window.location.href = '/api/settings/backup/create';
    setTimeout(() => {
      setIsBackingUp(false);
      router.reload();
    }, 2000);
  };

  const handleDownload = (id: number) => {
    window.location.href = `/api/settings/backup/download/${id}`;
  };

  const handleSettingsUpdate = async (e: FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await axios.put('/api/settings/backup/settings', {
        auto_backup_enabled: autoBackupEnabled,
        retention_days: retentionDays,
      });
      router.reload();
    } catch (error) {
      console.error('Failed to update settings:', error);
    } finally {
      setIsSaving(false);
    }
  };

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
                {backups.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-4">No backup history available</p>
                ) : (
                  backups.map((backup) => (
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
                        <Button variant="ghost" size="sm" onClick={() => handleDownload(backup.id)}>
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Automatic Backups</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSettingsUpdate} className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Daily Automatic Backups</p>
                    <p className="text-sm text-muted-foreground">Automatically create backups every day at 2:00 AM</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={autoBackupEnabled}
                      onChange={(e) => setAutoBackupEnabled(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-medium">Retention Period</p>
                    <p className="text-sm text-muted-foreground">Keep backups for specified days</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="1"
                      max="365"
                      value={retentionDays}
                      onChange={(e) => setRetentionDays(Number(e.target.value))}
                      className="w-20 px-3 py-2 border rounded-md"
                    />
                    <span className="text-sm text-muted-foreground">days</span>
                  </div>
                </div>
                <Button type="submit" disabled={isSaving} className="sm:w-auto">
                  {isSaving ? 'Saving...' : 'Save Settings'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </SettingsLayout>
    </AppLayout>
  );
}