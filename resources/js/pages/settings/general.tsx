import { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import HeadingSmall from '@/components/heading-small';
import InputError from '@/components/input-error';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { toast } from 'sonner';
import axios from 'axios';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'General Settings',
        href: '/settings/general',
    },
];

interface GeneralSettings {
    app_name: string;
    currency: string;
    currency_symbol: string;
    tax_rate: string;
    order_prefix: string;
    default_delivery_days: string;
    business_name: string;
    business_address: string;
    business_phone: string;
    business_email: string;
    timezone: string;
}

const currencies = [
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
    { code: 'PKR', symbol: '₨', name: 'Pakistani Rupee' },
    { code: 'BDT', symbol: '৳', name: 'Bangladeshi Taka' },
];

const timezones = [
    'UTC', 'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
    'Europe/London', 'Europe/Paris', 'Europe/Berlin', 'Asia/Kolkata', 'Asia/Karachi',
    'Asia/Dhaka', 'Asia/Tokyo', 'Australia/Sydney'
];

export default function GeneralSettings() {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [settings, setSettings] = useState<GeneralSettings>({
        app_name: '',
        currency: 'USD',
        currency_symbol: '$',
        tax_rate: '0',
        order_prefix: 'ORD',
        default_delivery_days: '7',
        business_name: '',
        business_address: '',
        business_phone: '',
        business_email: '',
        timezone: 'UTC',
    });

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        setLoading(true);
        try {
            const response = await axios.get('/api/settings/general');
            const data = response.data;
            setSettings(prev => ({ 
                ...prev, 
                app_name: data.app_name || '',
                currency: data.currency || 'USD',
                currency_symbol: data.currency_symbol || '$',
                tax_rate: data.tax_rate || '0',
                order_prefix: data.order_prefix || 'ORD',
                default_delivery_days: data.default_delivery_days || '7',
                business_name: data.business_name || '',
                business_address: data.business_address || '',
                business_phone: data.business_phone || '',
                business_email: data.business_email || '',
                timezone: data.timezone || 'UTC',
            }));
        } catch (error) {
            toast.error('Failed to load settings');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});

        try {
            await axios.put('/api/settings/general', settings);
            toast.success('General settings updated successfully');
        } catch (error: any) {
            if (error.response?.data?.errors) {
                setErrors(error.response.data.errors);
            }
            toast.error('Failed to update general settings');
            console.error('Failed to update general settings:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleCurrencyChange = (currencyCode: string) => {
        const currency = currencies.find(c => c.code === currencyCode);
        if (currency) {
            setSettings(prev => ({
                ...prev,
                currency: currency.code,
                currency_symbol: currency.symbol,
            }));
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="General Settings" />
            
            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall
                        title="General Settings"
                        description="Configure application and business settings"
                    />

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="grid gap-2">
                                <Label htmlFor="app_name">Application Name</Label>
                                <Input
                                    id="app_name"
                                    value={settings.app_name}
                                    onChange={(e) => setSettings(prev => ({ ...prev, app_name: e.target.value }))}
                                    placeholder="Boutique System"
                                    className="mt-1 block w-full"
                                />
                                <InputError message={errors.app_name?.[0]} />
                            </div>
                            
                            <div className="grid gap-2">
                                <Label htmlFor="order_prefix">Order Number Prefix</Label>
                                <Input
                                    id="order_prefix"
                                    value={settings.order_prefix}
                                    onChange={(e) => setSettings(prev => ({ ...prev, order_prefix: e.target.value }))}
                                    placeholder="ORD"
                                    className="mt-1 block w-full"
                                />
                                <InputError message={errors.order_prefix?.[0]} />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            <div className="grid gap-2">
                                <Label htmlFor="currency">Currency</Label>
                                <Select value={settings.currency} onValueChange={handleCurrencyChange}>
                                    <SelectTrigger className="mt-1 block w-full">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {currencies.map((currency) => (
                                            <SelectItem key={currency.code} value={currency.code}>
                                                {currency.symbol} {currency.code} - {currency.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <InputError message={errors.currency?.[0]} />
                            </div>
                            
                            <div className="grid gap-2">
                                <Label htmlFor="tax_rate">Tax Rate (%)</Label>
                                <Input
                                    id="tax_rate"
                                    type="number"
                                    min="0"
                                    max="100"
                                    step="0.01"
                                    value={settings.tax_rate}
                                    onChange={(e) => setSettings(prev => ({ ...prev, tax_rate: e.target.value }))}
                                    className="mt-1 block w-full"
                                />
                                <InputError message={errors.tax_rate?.[0]} />
                            </div>
                            
                            <div className="grid gap-2">
                                <Label htmlFor="default_delivery_days">Default Delivery Days</Label>
                                <Input
                                    id="default_delivery_days"
                                    type="number"
                                    min="1"
                                    value={settings.default_delivery_days}
                                    onChange={(e) => setSettings(prev => ({ ...prev, default_delivery_days: e.target.value }))}
                                    className="mt-1 block w-full"
                                />
                                <InputError message={errors.default_delivery_days?.[0]} />
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="timezone">Timezone</Label>
                            <Select value={settings.timezone} onValueChange={(value) => setSettings(prev => ({ ...prev, timezone: value }))}>
                                <SelectTrigger className="mt-1 block w-full">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {timezones.map((tz) => (
                                        <SelectItem key={tz} value={tz}>
                                            {tz}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <InputError message={errors.timezone?.[0]} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="business_name">Business Name</Label>
                            <Input
                                id="business_name"
                                value={settings.business_name}
                                onChange={(e) => setSettings(prev => ({ ...prev, business_name: e.target.value }))}
                                placeholder="My Boutique"
                                className="mt-1 block w-full"
                            />
                            <InputError message={errors.business_name?.[0]} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="business_address">Business Address</Label>
                            <Textarea
                                id="business_address"
                                value={settings.business_address}
                                onChange={(e) => setSettings(prev => ({ ...prev, business_address: e.target.value }))}
                                placeholder="Enter your complete business address"
                                rows={3}
                                className="mt-1 block w-full"
                            />
                            <InputError message={errors.business_address?.[0]} />
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="grid gap-2">
                                <Label htmlFor="business_phone">Business Phone</Label>
                                <Input
                                    id="business_phone"
                                    value={settings.business_phone}
                                    onChange={(e) => setSettings(prev => ({ ...prev, business_phone: e.target.value }))}
                                    placeholder="+1 (555) 123-4567"
                                    className="mt-1 block w-full"
                                />
                                <InputError message={errors.business_phone?.[0]} />
                            </div>
                            
                            <div className="grid gap-2">
                                <Label htmlFor="business_email">Business Email</Label>
                                <Input
                                    id="business_email"
                                    type="email"
                                    value={settings.business_email}
                                    onChange={(e) => setSettings(prev => ({ ...prev, business_email: e.target.value }))}
                                    placeholder="contact@myboutique.com"
                                    className="mt-1 block w-full"
                                />
                                <InputError message={errors.business_email?.[0]} />
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Button type="submit" disabled={loading}>
                                {loading ? 'Saving...' : 'Save'}
                            </Button>
                        </div>
                    </form>
                </div>
            </SettingsLayout>
        </AppLayout>
    );
}