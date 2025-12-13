import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import { type NavItem, type NavGroup } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { LayoutGrid, Users2Icon, Shield, Scissors, Ruler, Shirt, Package, ListChecks, ShoppingCart, Bell, BarChart3, Settings, Folder } from 'lucide-react';
import AppLogo from './app-logo';
import { usePermissions } from '@/hooks/use-permissions';

const getNavGroups = (permissions: string[]): NavGroup[] => {
    const hasPermission = (permission: string) => permissions.includes(permission);

    return [
        {
            label: 'Overview',
            items: [
                {
                    title: 'Dashboard',
                    href: dashboard(),
                    icon: LayoutGrid,
                    permission: 'view_dashboard',
                },
            ],
        },
        {
            label: 'Business',
            items: [
                {
                    title: 'Orders',
                    href: '/orders',
                    icon: ShoppingCart,
                    permission: 'view_orders',
                },
                {
                    title: 'Customers',
                    href: '/customers',
                    icon: Users2Icon,
                    permission: 'view_customers',
                },
                {
                    title: 'Tailors',
                    href: '/tailors',
                    icon: Scissors,
                    permission: 'view_tailors',
                },
            ],
        },
        {
            label: 'Inventory',
            items: [
                {
                    title: 'Fabrics',
                    href: '/fabrics',
                    icon: Package,
                    permission: 'view_fabrics',
                },
                {
                    title: 'Garment Types',
                    href: '/garment-types',
                    icon: Shirt,
                    permission: 'view_garment_types',
                },
            ],
        },
        {
            label: 'Configuration',
            items: [
                {
                    title: 'Measurements',
                    href: '/measurements',
                    icon: Ruler,
                    permission: 'view_measurements',
                    items: [
                        {
                            title: 'All Measurements',
                            href: '/measurements',
                            icon: null,
                        },
                        {
                            title: 'Settings',
                            href: '/measurement-settings',
                            icon: null,
                        },
                    ],
                },
                {
                    title: 'Stitching Statuses',
                    href: '/stitching-statuses',
                    icon: ListChecks,
                    permission: 'view_stitching_statuses',
                },
            ],
        },
        {
            label: 'System',
            items: [
                {
                    title: 'Reports',
                    href: '/reports',
                    icon: BarChart3,
                    permission: 'view_reports',
                },
                {
                    title: 'Notifications',
                    href: '/notifications',
                    icon: Bell,
                    permission: 'view_notifications',
                },
                {
                    title: 'Users',
                    href: '/users',
                    icon: Users2Icon,
                    permission: 'view_users',
                },
                {
                    title: 'Roles',
                    href: '/roles',
                    icon: Shield,
                    permission: 'view_roles',
                },
                // {
                //     title: 'Settings',
                //     href: '/settings',
                //     icon: Settings,
                //     permission: 'access_settings',
                // },
            ],
        },
    ].map(group => ({
        ...group,
        items: group.items.filter(item => !item.permission || hasPermission(item.permission)),
    })).filter(group => group.items.length > 0);
};

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/uicreatedesign/boutique-system',
        icon: Folder,
    },
];

export function AppSidebar() {
    const permissions = usePermissions();
    const navGroups = getNavGroups(permissions);

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                {navGroups.map((group) => (
                    <NavMain key={group.label} label={group.label} items={group.items} />
                ))}
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
