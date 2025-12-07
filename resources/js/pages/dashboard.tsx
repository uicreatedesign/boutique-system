import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { DollarSign, ShoppingCart, Users, Scissors, TrendingUp, Clock, AlertCircle } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

interface Props {
    stats: {
        todayRevenue: number;
        monthRevenue: number;
        yearRevenue: number;
        totalOrders: number;
        pendingOrders: number;
        inProgressOrders: number;
        completedOrders: number;
        totalCustomers: number;
        totalTailors: number;
    };
    pendingPayments: Array<{
        id: number;
        order_number: string;
        customer_name: string;
        balance_due: number;
        status: string;
    }>;
    upcomingDeliveries: Array<{
        id: number;
        order_number: string;
        customer_name: string;
        delivery_date: string;
        status: string;
        status_color: string;
    }>;
    recentOrders: Array<{
        id: number;
        order_number: string;
        customer_name: string;
        garment_type: string;
        total_amount: number;
        status: string;
        status_color: string;
        created_at: string;
    }>;
    topCustomers: Array<{
        id: number;
        name: string;
        orders_count: number;
    }>;
    tailorPerformance: Array<{
        id: number;
        name: string;
        completed_orders: number;
    }>;
    monthlyRevenue: Array<{
        month: string;
        revenue: number;
    }>;
    statusDistribution: Array<{
        name: string;
        color: string;
        count: number;
    }>;
}

export default function Dashboard({ stats, pendingPayments, upcomingDeliveries, recentOrders, topCustomers, tailorPerformance, monthlyRevenue, statusDistribution }: Props) {
    const maxRevenue = Math.max(...monthlyRevenue.map(m => m.revenue));

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex flex-col gap-4 p-4">
                {/* Revenue Stats */}
                <div className="grid gap-4 md:grid-cols-3">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Today's Revenue</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">${stats.todayRevenue.toFixed(2)}</div>
                            <p className="text-xs text-muted-foreground">Payments received today</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">This Month</CardTitle>
                            <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">${stats.monthRevenue.toFixed(2)}</div>
                            <p className="text-xs text-muted-foreground">Monthly revenue</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">This Year</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">${stats.yearRevenue.toFixed(2)}</div>
                            <p className="text-xs text-muted-foreground">Yearly revenue</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Order & Business Stats */}
                <div className="grid gap-4 md:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.totalOrders}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Pending</CardTitle>
                            <Clock className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.pendingOrders}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
                            <AlertCircle className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.inProgressOrders}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Completed</CardTitle>
                            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.completedOrders}</div>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Customers</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.totalCustomers}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Tailors</CardTitle>
                            <Scissors className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.totalTailors}</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Charts & Lists */}
                <div className="grid gap-4 md:grid-cols-2">
                    {/* Monthly Revenue Chart */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Revenue Trend (Last 6 Months)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                {monthlyRevenue.map((item, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div className="w-20 text-sm text-gray-600">{item.month}</div>
                                        <div className="flex-1">
                                            <div className="h-8 bg-gray-200 rounded overflow-hidden">
                                                <div
                                                    className="h-full bg-blue-500"
                                                    style={{ width: `${(item.revenue / maxRevenue) * 100}%` }}
                                                />
                                            </div>
                                        </div>
                                        <div className="w-24 text-sm font-medium text-right">${item.revenue.toFixed(0)}</div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Order Status Distribution */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Order Status Distribution</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {statusDistribution.map((status, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div
                                                className="w-3 h-3 rounded-full"
                                                style={{ backgroundColor: status.color }}
                                            />
                                            <span className="text-sm">{status.name}</span>
                                        </div>
                                        <Badge variant="secondary">{status.count}</Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    {/* Pending Payments */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Pending Payments</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {pendingPayments.length === 0 ? (
                                <p className="text-sm text-gray-500 text-center py-4">No pending payments</p>
                            ) : (
                                <div className="space-y-3">
                                    {pendingPayments.map((payment) => (
                                        <Link key={payment.id} href={`/orders/${payment.id}`}>
                                            <div className="flex items-center justify-between p-3 border rounded hover:bg-gray-50 cursor-pointer">
                                                <div>
                                                    <p className="font-medium">{payment.order_number}</p>
                                                    <p className="text-sm text-gray-600">{payment.customer_name}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-bold text-red-600">${payment.balance_due}</p>
                                                    <p className="text-xs text-gray-500">{payment.status}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Upcoming Deliveries */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Upcoming Deliveries (Next 7 Days)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {upcomingDeliveries.length === 0 ? (
                                <p className="text-sm text-gray-500 text-center py-4">No upcoming deliveries</p>
                            ) : (
                                <div className="space-y-3">
                                    {upcomingDeliveries.map((delivery) => (
                                        <Link key={delivery.id} href={`/orders/${delivery.id}`}>
                                            <div className="flex items-center justify-between p-3 border rounded hover:bg-gray-50 cursor-pointer">
                                                <div>
                                                    <p className="font-medium">{delivery.order_number}</p>
                                                    <p className="text-sm text-gray-600">{delivery.customer_name}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sm font-medium">{new Date(delivery.delivery_date).toLocaleDateString()}</p>
                                                    <Badge style={{ backgroundColor: delivery.status_color }} className="text-xs">
                                                        {delivery.status}
                                                    </Badge>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    {/* Recent Orders */}
                    <Card className="md:col-span-2">
                        <CardHeader>
                            <CardTitle>Recent Orders</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b text-left text-sm">
                                            <th className="pb-2">Order #</th>
                                            <th className="pb-2">Customer</th>
                                            <th className="pb-2">Garment</th>
                                            <th className="pb-2">Amount</th>
                                            <th className="pb-2">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recentOrders.map((order) => (
                                            <tr key={order.id} className="border-b text-sm">
                                                <td className="py-3">
                                                    <Link href={`/orders/${order.id}`} className="text-blue-600 hover:underline">
                                                        {order.order_number}
                                                    </Link>
                                                </td>
                                                <td className="py-3">{order.customer_name}</td>
                                                <td className="py-3">{order.garment_type}</td>
                                                <td className="py-3">${order.total_amount}</td>
                                                <td className="py-3">
                                                    <Badge style={{ backgroundColor: order.status_color }}>
                                                        {order.status}
                                                    </Badge>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Top Customers & Tailor Performance */}
                    <div className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Top Customers</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    {topCustomers.map((customer, index) => (
                                        <div key={customer.id} className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-medium text-gray-500">#{index + 1}</span>
                                                <span className="text-sm">{customer.name}</span>
                                            </div>
                                            <Badge variant="secondary">{customer.orders_count} orders</Badge>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Tailor Performance</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    {tailorPerformance.map((tailor, index) => (
                                        <div key={tailor.id} className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-medium text-gray-500">#{index + 1}</span>
                                                <span className="text-sm">{tailor.name}</span>
                                            </div>
                                            <Badge variant="secondary">{tailor.completed_orders} completed</Badge>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
