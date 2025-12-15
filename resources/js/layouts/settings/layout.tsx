import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn, isSameUrl, resolveUrl } from '@/lib/utils';
import { edit as editAppearance } from '@/routes/appearance';
import { edit } from '@/routes/profile';
import { show } from '@/routes/two-factor';
import { edit as editPassword } from '@/routes/user-password';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';
import { useHasPermission } from '@/hooks/use-permissions';

const getAllNavItems = (): NavItem[] => [
    {
        title: 'General',
        href: '/settings/general',
        icon: null,
        permission: 'manage_general_settings',
    },
    {
        title: 'Profile',
        href: edit(),
        icon: null,
        permission: 'access_profile_settings',
    },
    {
        title: 'Password',
        href: editPassword(),
        icon: null,
        permission: 'change_own_password',
    },
    {
        title: 'Two-Factor Auth',
        href: show(),
        icon: null,
        permission: 'manage_own_2fa',
    },
    {
        title: 'SMTP',
        href: '/settings/smtp',
        icon: null,
        permission: 'manage_smtp_settings',
    },
    {
        title: 'Appearance',
        href: editAppearance(),
        icon: null,
        permission: 'manage_appearance_settings',
    },
    {
        title: 'Notifications',
        href: '/settings/notifications',
        icon: null,
        permission: 'view_own_notifications',
    },
    {
        title: 'Backup',
        href: '/settings/backup',
        icon: null,
        permission: 'manage_backup_settings',
    },
];

export default function SettingsLayout({ children }: PropsWithChildren) {
    const { hasPermission } = useHasPermission();
    
    // When server-side rendering, we only render the layout on the client...
    if (typeof window === 'undefined') {
        return null;
    }

    const currentPath = window.location.pathname;
    const sidebarNavItems = getAllNavItems().filter(item => 
        !item.permission || hasPermission(item.permission)
    );

    return (
        <div className="px-4 py-6">
            <Heading
                title="Settings"
                description="Manage your application and account settings"
            />

            <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-12">
                <aside className="w-full lg:w-64 xl:w-72">
                    <nav className="flex flex-col space-y-1">
                        {sidebarNavItems.map((item, index) => (
                            <Button
                                key={`${resolveUrl(item.href)}-${index}`}
                                size="sm"
                                variant="ghost"
                                asChild
                                className={cn('w-full justify-start', {
                                    'bg-muted': isSameUrl(
                                        currentPath,
                                        item.href,
                                    ),
                                })}
                            >
                                <Link href={item.href}>
                                    {item.icon && (
                                        <item.icon className="h-4 w-4" />
                                    )}
                                    {item.title}
                                </Link>
                            </Button>
                        ))}
                    </nav>
                </aside>

                <Separator className="my-6 lg:hidden" />

                <div className="flex-1 lg:max-w-3xl xl:max-w-4xl">
                    <section className="space-y-8">
                        {children}
                    </section>
                </div>
            </div>
        </div>
    );
}
