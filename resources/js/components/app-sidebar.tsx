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
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid, Users2Icon, Shield, Scissors, UserCheck, Ruler, Settings, Shirt, Package, ListChecks, ShoppingCart, Bell } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Customers',
        href: '/customers',
        icon: Users2Icon,
    },
    {
        title: 'Orders',
        href: '/orders',
        icon: ShoppingCart,
    },
    {
        title: 'Tailors',
        href: '/tailors',
        icon: Scissors,
    },
    {
        title: 'Measurements',
        href: '/measurements',
        icon: Ruler,
        items: [
            {
                title: 'Measurements',
                href: '/measurements',
                icon: null,
            },
            {
                title: 'Measurement Settings',
                href: '/measurement-settings',
                icon: null,
            },
        ],
    },
    {
        title: 'Garment Types',
        href: '/garment-types',
        icon: Shirt,
    },
    {
        title: 'Fabrics & Materials',
        href: '/fabrics',
        icon: Package,
    },
    {
        title: 'Stitching Statuses',
        href: '/stitching-statuses',
        icon: ListChecks,
    },
    {
        title: 'Users',
        href: '/users',
        icon: UserCheck,
    },
    {
        title: 'Roles & Permissions',
        href: '/roles',
        icon: Shield,
    },
    {
        title: 'Notifications',
        href: '/notifications',
        icon: Bell,
    },
    {
        title: 'Reports & Analytics',
        href: '/reports',
        icon: LayoutGrid,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/uicreatedesign/boutique-system',
        icon: Folder,
    },
    // {
    //     title: 'Support',
    //     href: 'https://laravel.com/docs/starter-kits#react',
    //     icon: BookOpen,
    // },
];

export function AppSidebar() {
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
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
