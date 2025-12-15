import { useState, FormEvent } from 'react';
import { Head, router } from '@inertiajs/react';
import { toast } from 'sonner';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { type BreadcrumbItem } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Bell, Mail, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Notification Settings',
        href: '/settings/notifications',
    },
];

interface NotificationSettings {
  email_enabled: boolean;
  whatsapp_enabled: boolean;
  order_created: boolean;
  order_status_changed: boolean;
  payment_received: boolean;
  delivery_reminder: boolean;
  delivery_reminder_days: number;
}

interface Props {
  settings: NotificationSettings;
}

export default function NotificationSettings({ settings }: Props) {
  const [emailEnabled, setEmailEnabled] = useState(settings?.email_enabled || false);
  const [whatsappEnabled, setWhatsappEnabled] = useState(settings?.whatsapp_enabled || false);
  const [orderCreated, setOrderCreated] = useState(settings?.order_created || false);
  const [orderStatusChanged, setOrderStatusChanged] = useState(settings?.order_status_changed || false);
  const [paymentReceived, setPaymentReceived] = useState(settings?.payment_received || false);
  const [deliveryReminder, setDeliveryReminder] = useState(settings?.delivery_reminder || false);
  const [deliveryReminderDays, setDeliveryReminderDays] = useState(settings?.delivery_reminder_days || 1);
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    router.put('/api/settings/notifications', {
      email_enabled: emailEnabled,
      whatsapp_enabled: whatsappEnabled,
      order_created: orderCreated,
      order_status_changed: orderStatusChanged,
      payment_received: paymentReceived,
      delivery_reminder: deliveryReminder,
      delivery_reminder_days: deliveryReminderDays,
    }, {
      onSuccess: () => {
        toast.success('Notification settings updated successfully');
        setIsSaving(false);
      },
      onError: () => {
        toast.error('Failed to update notification settings');
        setIsSaving(false);
      },
    });
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Notification Settings" />
      
      <SettingsLayout>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Notification Settings</h2>
            <p className="text-sm text-muted-foreground">Configure how you want to receive notifications</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Notification Channels */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notification Channels
                </CardTitle>
                <CardDescription>Choose how you want to receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded">
                      <Mail className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                    </div>
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={emailEnabled ? 'default' : 'secondary'}>
                      {emailEnabled ? 'Enabled' : 'Disabled'}
                    </Badge>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={emailEnabled}
                        onChange={(e) => setEmailEnabled(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 dark:bg-green-900 rounded">
                      <MessageSquare className="h-5 w-5 text-green-600 dark:text-green-300" />
                    </div>
                    <div>
                      <p className="font-medium">WhatsApp Notifications</p>
                      <p className="text-sm text-muted-foreground">Receive notifications via WhatsApp</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={whatsappEnabled ? 'default' : 'secondary'}>
                      {whatsappEnabled ? 'Enabled' : 'Disabled'}
                    </Badge>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={whatsappEnabled}
                        onChange={(e) => setWhatsappEnabled(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                {whatsappEnabled && (
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription className="text-xs">
                      WhatsApp integration requires API configuration. Contact support for setup assistance.
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>

            {/* Notification Events */}
            <Card>
              <CardHeader>
                <CardTitle>Notification Events</CardTitle>
                <CardDescription>Select which events should trigger notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Order Created</p>
                    <p className="text-xs text-muted-foreground">Notify when a new order is created</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={orderCreated}
                      onChange={(e) => setOrderCreated(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Order Status Changed</p>
                    <p className="text-xs text-muted-foreground">Notify when order status is updated</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={orderStatusChanged}
                      onChange={(e) => setOrderStatusChanged(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Payment Received</p>
                    <p className="text-xs text-muted-foreground">Notify when payment is received</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={paymentReceived}
                      onChange={(e) => setPaymentReceived(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-sm">Delivery Reminder</p>
                    <p className="text-xs text-muted-foreground">Notify before delivery date</p>
                  </div>
                  <div className="flex items-center gap-3">
                    {deliveryReminder && (
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          min="1"
                          max="7"
                          value={deliveryReminderDays}
                          onChange={(e) => setDeliveryReminderDays(Number(e.target.value))}
                          className="w-16 px-2 py-1 text-sm border rounded-md"
                        />
                        <span className="text-xs text-muted-foreground">days before</span>
                      </div>
                    )}
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={deliveryReminder}
                        onChange={(e) => setDeliveryReminder(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button type="submit" disabled={isSaving}>
                {isSaving ? 'Saving...' : 'Save Settings'}
              </Button>
            </div>
          </form>
        </div>
      </SettingsLayout>
    </AppLayout>
  );
}
