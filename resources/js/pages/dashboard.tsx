import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { DollarSign, ShoppingCart, Users, Scissors, TrendingUp, Clock, AlertCircle } from 'lucide-react';
import { useCurrency } from '@/hooks/use-currency';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

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
        orders: number;
    }>;
    statusDistribution: Array<{
        name: string;
        color: string;
        count: number;
    }>;
}

export default function Dashboard({ stats, pendingPayments = [], upcomingDeliveries, recentOrders, topCustomers, tailorPerformance, monthlyRevenue, statusDistribution }: Props) {
    const { formatCurrency } = useCurrency();
    
    // Ensure arrays are properly initialized
    const safePendingPayments = Array.isArray(pendingPayments) ? pendingPayments : [];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="container mx-auto px-4 py-6 space-y-6">
                {/* Revenue Stats */}
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Today's Revenue</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{formatCurrency(stats.todayRevenue)}</div>
                            <p className="text-xs text-muted-foreground">Payments received today</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">This Month</CardTitle>
                            <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{formatCurrency(stats.monthRevenue)}</div>
                            <p className="text-xs text-muted-foreground">Monthly revenue</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">This Year</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{formatCurrency(stats.yearRevenue)}</div>
                            <p className="text-xs text-muted-foreground">Yearly revenue</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Order & Business Stats */}
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
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

                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
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
                <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
                    {/* Monthly Revenue Chart */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Revenue Trend (Last 6 Months)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ChartContainer
                                config={{
                                    revenue: {
                                        label: "Revenue",
                                        theme: {
                                            light: "hsl(221.2 83.2% 53.3%)",
                                            dark: "hsl(217.2 91.2% 59.8%)",
                                        },
                                    },
                                }}
                                className="h-[250px] w-full"
                            >
                                <BarChart
                                    data={monthlyRevenue.map(item => ({
                                        month: item.month,
                                        revenue: Number(item.revenue) || 0,
                                    }))}
                                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" vertical={false} />
                                    <XAxis
                                        dataKey="month"
                                        tickLine={false}
                                        axisLine={false}
                                        tickMargin={8}
                                        className="text-xs"
                                    />
                                    <YAxis
                                        tickLine={false}
                                        axisLine={false}
                                        tickMargin={8}
                                        tickFormatter={(value) => formatCurrency(value)}
                                        className="text-xs"
                                    />
                                    <ChartTooltip
                                        content={<ChartTooltipContent />}
                                        formatter={(value) => formatCurrency(Number(value))}
                                    />
                                    <Bar
                                        dataKey="revenue"
                                        fill="var(--color-revenue)"
                                        radius={[4, 4, 0, 0]}
                                    />
                                </BarChart>
                            </ChartContainer>
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

                <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
                    {/* Pending Payments */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Pending Payments</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {safePendingPayments.length === 0 ? (
                                <p className="text-sm text-gray-500 text-center py-4">No pending payments</p>
                            ) : (
                                <div className="space-y-3">
                                    {safePendingPayments.map((payment) => (
                                        <Link key={payment.id} href={`/orders/${payment.id}`}>
                                            <div className="flex items-center justify-between p-3 border rounded hover:bg-gray-50 cursor-pointer">
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-medium truncate">{payment.order_number}</p>
                                                    <p className="text-sm text-gray-600 truncate">{payment.customer_name}</p>
                                                </div>
                                                <div className="text-right flex-shrink-0 ml-2">
                                                    <p className="font-bold text-red-600">{formatCurrency(payment.balance_due)}</p>
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
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-medium truncate">{delivery.order_number}</p>
                                                    <p className="text-sm text-gray-600 truncate">{delivery.customer_name}</p>
                                                </div>
                                                <div className="text-right flex-shrink-0 ml-2">
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

                <div className="grid gap-4 grid-cols-1 xl:grid-cols-3">
                    {/* Recent Orders */}
                    <Card className="xl:col-span-2">
                        <CardHeader>
                            <CardTitle>Recent Orders</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[500px]">
                                    <thead>
                                        <tr className="border-b text-left text-sm">
                                            <th className="pb-2 whitespace-nowrap">Order #</th>
                                            <th className="pb-2 whitespace-nowrap">Customer</th>
                                            <th className="pb-2 whitespace-nowrap hidden sm:table-cell">Garment</th>
                                            <th className="pb-2 whitespace-nowrap">Amount</th>
                                            <th className="pb-2 whitespace-nowrap">Status</th>
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
                                                <td className="py-3 truncate max-w-[120px]">{order.customer_name}</td>
                                                <td className="py-3 hidden sm:table-cell">{order.garment_type}</td>
                                                <td className="py-3">{formatCurrency(order.total_amount)}</td>
                                                <td className="py-3">
                                                    <Badge style={{ backgroundColor: order.status_color }} className="text-xs">
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
                                            <div className="flex items-center gap-2 flex-1 min-w-0">
                                                <span className="text-sm font-medium text-gray-500 flex-shrink-0">#{index + 1}</span>
                                                <span className="text-sm truncate">{customer.name}</span>
                                            </div>
                                            <Badge variant="secondary" className="flex-shrink-0 ml-2">{customer.orders_count} orders</Badge>
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
                                            <div className="flex items-center gap-2 flex-1 min-w-0">
                                                <span className="text-sm font-medium text-gray-500 flex-shrink-0">#{index + 1}</span>
                                                <span className="text-sm truncate">{tailor.name}</span>
                                            </div>
                                            <Badge variant="secondary" className="flex-shrink-0 ml-2">{tailor.completed_orders} completed</Badge>
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
