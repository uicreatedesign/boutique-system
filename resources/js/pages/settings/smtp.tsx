import { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import HeadingSmall from '@/components/heading-small';
import InputError from '@/components/input-error';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { toast } from 'sonner';
import axios from 'axios';
import { type BreadcrumbItem } from '@/types';
import TestEmailModal from '@/components/settings/test-email-modal';
import { Skeleton } from '@/components/ui/skeleton';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'SMTP Settings',
        href: '/settings/smtp',
    },
];

interface SmtpSettings {
  smtp_host: string;
  smtp_port: string;
  smtp_username: string;
  smtp_password: string;
  smtp_encryption: string;
  mail_from_address: string;
  mail_from_name: string;
}

export default function SmtpSettings() {
  const [settings, setSettings] = useState<SmtpSettings>({
    smtp_host: '',
    smtp_port: '587',
    smtp_username: '',
    smtp_password: '',
    smtp_encryption: 'tls',
    mail_from_address: '',
    mail_from_name: '',
  });
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await axios.get('/api/settings/smtp');
      setSettings(response.data);
    } catch (error) {
      console.error('Failed to fetch SMTP settings:', error);
    } finally {
      setPageLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      await axios.put('/api/settings/smtp', settings);
      toast.success('SMTP settings updated successfully');
    } catch (error: any) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      }
      toast.error('Failed to update SMTP settings');
      console.error('Failed to update SMTP settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (key: keyof SmtpSettings, value: string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  if (pageLoading) {
    return (
      <AppLayout breadcrumbs={breadcrumbs}>
        <Head title="SMTP Settings" />
        <SettingsLayout>
          <div className="space-y-6">
            {/* Header Skeleton */}
            <div className="space-y-2">
              <Skeleton className="h-7 w-32" />
              <Skeleton className="h-4 w-80" />
            </div>

            {/* Form Skeleton */}
            <div className="space-y-6">
              {/* SMTP Host & Port */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="grid gap-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="grid gap-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>

              {/* SMTP Username */}
              <div className="grid gap-2">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-10 w-full" />
              </div>

              {/* SMTP Password */}
              <div className="grid gap-2">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-10 w-full" />
              </div>

              {/* Encryption */}
              <div className="grid gap-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-10 w-full" />
              </div>

              {/* From Email & Name */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="grid gap-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="grid gap-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-4">
                <Skeleton className="h-10 w-16" />
                <Skeleton className="h-10 w-24" />
              </div>
            </div>
          </div>
        </SettingsLayout>
      </AppLayout>
    );
  }

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="SMTP Settings" />
      
      <SettingsLayout>
        <div className="space-y-6">
          <HeadingSmall
            title="SMTP Settings"
            description="Configure email server settings for sending emails"
          />

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="smtp_host">SMTP Host</Label>
                <Input
                  id="smtp_host"
                  value={settings.smtp_host}
                  onChange={(e) => handleChange('smtp_host', e.target.value)}
                  placeholder="smtp.gmail.com"
                  className="mt-1 block w-full"
                />
                <InputError message={errors.smtp_host?.[0]} />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="smtp_port">SMTP Port</Label>
                <Input
                  id="smtp_port"
                  type="number"
                  value={settings.smtp_port}
                  onChange={(e) => handleChange('smtp_port', e.target.value)}
                  placeholder="587"
                  className="mt-1 block w-full"
                />
                <InputError message={errors.smtp_port?.[0]} />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="smtp_username">SMTP Username</Label>
              <Input
                id="smtp_username"
                value={settings.smtp_username}
                onChange={(e) => handleChange('smtp_username', e.target.value)}
                placeholder="your-email@gmail.com"
                className="mt-1 block w-full"
              />
              <InputError message={errors.smtp_username?.[0]} />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="smtp_password">SMTP Password</Label>
              <Input
                id="smtp_password"
                type="password"
                value={settings.smtp_password}
                onChange={(e) => handleChange('smtp_password', e.target.value)}
                placeholder="Your app password"
                className="mt-1 block w-full"
                autoComplete="current-password"
              />
              <InputError message={errors.smtp_password?.[0]} />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="smtp_encryption">Encryption</Label>
              <Select value={settings.smtp_encryption} onValueChange={(value) => handleChange('smtp_encryption', value)}>
                <SelectTrigger className="mt-1 block w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tls">TLS</SelectItem>
                  <SelectItem value="ssl">SSL</SelectItem>
                  <SelectItem value="none">None</SelectItem>
                </SelectContent>
              </Select>
              <InputError message={errors.smtp_encryption?.[0]} />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="mail_from_address">From Email</Label>
                <Input
                  id="mail_from_address"
                  type="email"
                  value={settings.mail_from_address}
                  onChange={(e) => handleChange('mail_from_address', e.target.value)}
                  placeholder="noreply@yoursite.com"
                  className="mt-1 block w-full"
                />
                <InputError message={errors.mail_from_address?.[0]} />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="mail_from_name">From Name</Label>
                <Input
                  id="mail_from_name"
                  value={settings.mail_from_name}
                  onChange={(e) => handleChange('mail_from_name', e.target.value)}
                  placeholder="Your Company"
                  className="mt-1 block w-full"
                />
                <InputError message={errors.mail_from_name?.[0]} />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button type="submit" disabled={loading}>
                {loading ? 'Saving...' : 'Save'}
              </Button>
              <TestEmailModal />
            </div>
          </form>
        </div>
      </SettingsLayout>
    </AppLayout>
  );
}