import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useState } from "react";
import { C as Card, a as CardHeader, c as CardContent, b as CardTitle } from "./card-fzyh6nXg.js";
import { A as AppLayout, B as Badge } from "./app-layout-BNU1zxoI.js";
import { d as dashboard } from "./index-BSn8jdXv.js";
import { Head, Link } from "@inertiajs/react";
import { DollarSign, TrendingUp, ShoppingCart, Clock, AlertCircle, Users, Scissors } from "lucide-react";
import { u as useCurrency } from "./use-currency-Dhhwwk5V.js";
import * as RechartsPrimitive from "recharts";
import { BarChart, CartesianGrid, XAxis, YAxis, Bar } from "recharts";
import { c as cn } from "./app-logo-icon-yMlft2ma.js";
import { S as Skeleton } from "./skeleton-GNTkvGbs.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-collapsible";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
import "axios";
import "./input-DRU_9M1j.js";
import "clsx";
import "tailwind-merge";
const THEMES = { light: "", dark: ".dark" };
const ChartContext = React.createContext(null);
function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}
function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}) {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
  return /* @__PURE__ */ jsx(ChartContext.Provider, { value: { config }, children: /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "chart",
      "data-chart": chartId,
      className: cn(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx(ChartStyle, { id: chartId, config }),
        /* @__PURE__ */ jsx(RechartsPrimitive.ResponsiveContainer, { children })
      ]
    }
  ) });
}
const ChartStyle = ({ id, config }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config2]) => config2.theme || config2.color
  );
  if (!colorConfig.length) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(THEMES).map(
          ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig.map(([key, itemConfig]) => {
            const color = itemConfig.theme?.[theme] || itemConfig.color;
            return color ? `  --color-${key}: ${color};` : null;
          }).join("\n")}
}
`
        ).join("\n")
      }
    }
  );
};
const ChartTooltip = RechartsPrimitive.Tooltip;
function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey
}) {
  const { config } = useChart();
  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null;
    }
    const [item] = payload;
    const key = `${labelKey || item?.dataKey || item?.name || "value"}`;
    const itemConfig = getPayloadConfigFromPayload(config, item, key);
    const value = !labelKey && typeof label === "string" ? config[label]?.label || label : itemConfig?.label;
    if (labelFormatter) {
      return /* @__PURE__ */ jsx("div", { className: cn("font-medium", labelClassName), children: labelFormatter(value, payload) });
    }
    if (!value) {
      return null;
    }
    return /* @__PURE__ */ jsx("div", { className: cn("font-medium", labelClassName), children: value });
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey
  ]);
  if (!active || !payload?.length) {
    return null;
  }
  const nestLabel = payload.length === 1 && indicator !== "dot";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        className
      ),
      children: [
        !nestLabel ? tooltipLabel : null,
        /* @__PURE__ */ jsx("div", { className: "grid gap-1.5", children: payload.filter((item) => item.type !== "none").map((item, index) => {
          const key = `${nameKey || item.name || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          const indicatorColor = color || item.payload.fill || item.color;
          return /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                indicator === "dot" && "items-center"
              ),
              children: formatter && item?.value !== void 0 && item.name ? formatter(item.value, item.name, item, index, item.payload) : /* @__PURE__ */ jsxs(Fragment, { children: [
                itemConfig?.icon ? /* @__PURE__ */ jsx(itemConfig.icon, {}) : !hideIndicator && /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: cn(
                      "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                      {
                        "h-2.5 w-2.5": indicator === "dot",
                        "w-1": indicator === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                        "my-0.5": nestLabel && indicator === "dashed"
                      }
                    ),
                    style: {
                      "--color-bg": indicatorColor,
                      "--color-border": indicatorColor
                    }
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: cn(
                      "flex flex-1 justify-between leading-none",
                      nestLabel ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "grid gap-1.5", children: [
                        nestLabel ? tooltipLabel : null,
                        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: itemConfig?.label || item.name })
                      ] }),
                      item.value && /* @__PURE__ */ jsx("span", { className: "text-foreground font-mono font-medium tabular-nums", children: item.value.toLocaleString() })
                    ]
                  }
                )
              ] })
            },
            item.dataKey
          );
        }) })
      ]
    }
  );
}
function getPayloadConfigFromPayload(config, payload, key) {
  if (typeof payload !== "object" || payload === null) {
    return void 0;
  }
  const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : void 0;
  let configLabelKey = key;
  if (key in payload && typeof payload[key] === "string") {
    configLabelKey = payload[key];
  } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
    configLabelKey = payloadPayload[key];
  }
  return configLabelKey in config ? config[configLabelKey] : config[key];
}
const breadcrumbs = [
  {
    title: "Dashboard",
    href: dashboard().url
  }
];
function Dashboard({ stats, pendingPayments = [], upcomingDeliveries, recentOrders, topCustomers, tailorPerformance, monthlyRevenue, statusDistribution }) {
  const { formatCurrency } = useCurrency();
  const [loading, setLoading] = useState(true);
  useState(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  });
  const safePendingPayments = Array.isArray(pendingPayments) ? pendingPayments : [];
  if (loading) {
    return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
      /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-6 space-y-6", children: [
        /* @__PURE__ */ jsx("div", { className: "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3", children: [...Array(3)].map((_, i) => /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-24" }),
            /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-20 mb-1" }),
            /* @__PURE__ */ jsx(Skeleton, { className: "h-3 w-32" })
          ] })
        ] }, i)) }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4", children: [...Array(4)].map((_, i) => /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-20" }),
            /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-12" }) })
        ] }, i)) }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-4 grid-cols-1 md:grid-cols-2", children: [...Array(2)].map((_, i) => /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-16" }),
            /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-12" }) })
        ] }, i)) }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 grid-cols-1 lg:grid-cols-2", children: [
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-48" }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(Skeleton, { className: "h-[250px] w-full" }) })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-40" }) }),
            /* @__PURE__ */ jsx(CardContent, { className: "space-y-3", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Skeleton, { className: "h-3 w-3 rounded-full" }),
                /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-20" })
              ] }),
              /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-8" })
            ] }, i)) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-4 grid-cols-1 lg:grid-cols-2", children: [...Array(2)].map((_, i) => /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-32" }) }),
          /* @__PURE__ */ jsx(CardContent, { className: "space-y-3", children: [...Array(4)].map((_2, j) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 border rounded", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-24 mb-1" }),
              /* @__PURE__ */ jsx(Skeleton, { className: "h-3 w-32" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-16 mb-1" }),
              /* @__PURE__ */ jsx(Skeleton, { className: "h-3 w-12" })
            ] })
          ] }, j)) })
        ] }, i)) }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 grid-cols-1 xl:grid-cols-3", children: [
          /* @__PURE__ */ jsxs(Card, { className: "xl:col-span-2", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-28" }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-5 gap-4 py-3 border-b", children: [
              /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-20" }),
              /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-24" }),
              /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-16" }),
              /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-16" }),
              /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-16" })
            ] }, i)) }) })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-28" }) }),
            /* @__PURE__ */ jsx(CardContent, { className: "space-y-2", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-24" })
              ] }),
              /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-16" })
            ] }, i)) })
          ] })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-6 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Today's Revenue" }),
            /* @__PURE__ */ jsx(DollarSign, { className: "h-4 w-4 text-muted-foreground" })
          ] }),
          /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: formatCurrency(stats.todayRevenue) }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Payments received today" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "This Month" }),
            /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4 text-muted-foreground" })
          ] }),
          /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: formatCurrency(stats.monthRevenue) }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Monthly revenue" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "This Year" }),
            /* @__PURE__ */ jsx(DollarSign, { className: "h-4 w-4 text-muted-foreground" })
          ] }),
          /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: formatCurrency(stats.yearRevenue) }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Yearly revenue" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4", children: [
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Total Orders" }),
            /* @__PURE__ */ jsx(ShoppingCart, { className: "h-4 w-4 text-muted-foreground" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: stats.totalOrders }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Pending" }),
            /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-muted-foreground" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: stats.pendingOrders }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "In Progress" }),
            /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-muted-foreground" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: stats.inProgressOrders }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Completed" }),
            /* @__PURE__ */ jsx(ShoppingCart, { className: "h-4 w-4 text-muted-foreground" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: stats.completedOrders }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-4 grid-cols-1 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Customers" }),
            /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 text-muted-foreground" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: stats.totalCustomers }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Tailors" }),
            /* @__PURE__ */ jsx(Scissors, { className: "h-4 w-4 text-muted-foreground" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: stats.totalTailors }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-4 grid-cols-1 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Revenue Trend (Last 6 Months)" }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(
            ChartContainer,
            {
              config: {
                revenue: {
                  label: "Revenue",
                  theme: {
                    light: "hsl(221.2 83.2% 53.3%)",
                    dark: "hsl(217.2 91.2% 59.8%)"
                  }
                }
              },
              className: "h-[250px] w-full",
              children: /* @__PURE__ */ jsxs(
                BarChart,
                {
                  data: monthlyRevenue.map((item) => ({
                    month: item.month,
                    revenue: Number(item.revenue) || 0
                  })),
                  margin: { top: 10, right: 10, left: 0, bottom: 0 },
                  children: [
                    /* @__PURE__ */ jsx(CartesianGrid, { strokeDasharray: "3 3", className: "stroke-muted", vertical: false }),
                    /* @__PURE__ */ jsx(
                      XAxis,
                      {
                        dataKey: "month",
                        tickLine: false,
                        axisLine: false,
                        tickMargin: 8,
                        className: "text-xs"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      YAxis,
                      {
                        tickLine: false,
                        axisLine: false,
                        tickMargin: 8,
                        tickFormatter: (value) => formatCurrency(value),
                        className: "text-xs"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      ChartTooltip,
                      {
                        content: /* @__PURE__ */ jsx(ChartTooltipContent, {}),
                        formatter: (value) => formatCurrency(Number(value))
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Bar,
                      {
                        dataKey: "revenue",
                        fill: "var(--color-revenue)",
                        radius: [4, 4, 0, 0]
                      }
                    )
                  ]
                }
              )
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Order Status Distribution" }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: statusDistribution.map((status, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "w-3 h-3 rounded-full",
                  style: { backgroundColor: status.color }
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "text-sm", children: status.name })
            ] }),
            /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: status.count })
          ] }, index)) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-4 grid-cols-1 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Pending Payments" }) }),
          /* @__PURE__ */ jsx(CardContent, { children: safePendingPayments.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 text-center py-4", children: "No pending payments" }) : /* @__PURE__ */ jsx("div", { className: "space-y-3", children: safePendingPayments.map((payment) => /* @__PURE__ */ jsx(Link, { href: `/orders/${payment.id}`, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 border rounded hover:bg-gray-50 cursor-pointer", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium truncate", children: payment.order_number }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 truncate", children: payment.customer_name })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-right flex-shrink-0 ml-2", children: [
              /* @__PURE__ */ jsx("p", { className: "font-bold text-red-600", children: formatCurrency(payment.balance_due) }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: payment.status })
            ] })
          ] }) }, payment.id)) }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Upcoming Deliveries (Next 7 Days)" }) }),
          /* @__PURE__ */ jsx(CardContent, { children: upcomingDeliveries.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 text-center py-4", children: "No upcoming deliveries" }) : /* @__PURE__ */ jsx("div", { className: "space-y-3", children: upcomingDeliveries.map((delivery) => /* @__PURE__ */ jsx(Link, { href: `/orders/${delivery.id}`, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 border rounded hover:bg-gray-50 cursor-pointer", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium truncate", children: delivery.order_number }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 truncate", children: delivery.customer_name })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-right flex-shrink-0 ml-2", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: new Date(delivery.delivery_date).toLocaleDateString() }),
              /* @__PURE__ */ jsx(Badge, { style: { backgroundColor: delivery.status_color }, className: "text-xs", children: delivery.status })
            ] })
          ] }) }, delivery.id)) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-4 grid-cols-1 xl:grid-cols-3", children: [
        /* @__PURE__ */ jsxs(Card, { className: "xl:col-span-2", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Recent Orders" }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full min-w-[500px]", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b text-left text-sm", children: [
              /* @__PURE__ */ jsx("th", { className: "pb-2 whitespace-nowrap", children: "Order #" }),
              /* @__PURE__ */ jsx("th", { className: "pb-2 whitespace-nowrap", children: "Customer" }),
              /* @__PURE__ */ jsx("th", { className: "pb-2 whitespace-nowrap hidden sm:table-cell", children: "Garment" }),
              /* @__PURE__ */ jsx("th", { className: "pb-2 whitespace-nowrap", children: "Amount" }),
              /* @__PURE__ */ jsx("th", { className: "pb-2 whitespace-nowrap", children: "Status" })
            ] }) }),
            /* @__PURE__ */ jsx("tbody", { children: recentOrders.map((order) => /* @__PURE__ */ jsxs("tr", { className: "border-b text-sm", children: [
              /* @__PURE__ */ jsx("td", { className: "py-3", children: /* @__PURE__ */ jsx(Link, { href: `/orders/${order.id}`, className: "text-blue-600 hover:underline", children: order.order_number }) }),
              /* @__PURE__ */ jsx("td", { className: "py-3 truncate max-w-[120px]", children: order.customer_name }),
              /* @__PURE__ */ jsx("td", { className: "py-3 hidden sm:table-cell", children: order.garment_type }),
              /* @__PURE__ */ jsx("td", { className: "py-3", children: formatCurrency(order.total_amount) }),
              /* @__PURE__ */ jsx("td", { className: "py-3", children: /* @__PURE__ */ jsx(Badge, { style: { backgroundColor: order.status_color }, className: "text-xs", children: order.status }) })
            ] }, order.id)) })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs(Card, { className: "h-full", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Top Customers" }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-2", children: topCustomers.map((customer, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium text-gray-500 flex-shrink-0", children: [
                  "#",
                  index + 1
                ] }),
                /* @__PURE__ */ jsx("span", { className: "text-sm truncate", children: customer.name })
              ] }),
              /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "flex-shrink-0 ml-2", children: [
                customer.orders_count,
                " orders"
              ] })
            ] }, customer.id)) }) })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "hidden", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Tailor Performance" }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-2", children: tailorPerformance.map((tailor, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium text-gray-500 flex-shrink-0", children: [
                  "#",
                  index + 1
                ] }),
                /* @__PURE__ */ jsx("span", { className: "text-sm truncate", children: tailor.name })
              ] }),
              /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "flex-shrink-0 ml-2", children: [
                tailor.completed_orders,
                " completed"
              ] })
            ] }, tailor.id)) }) })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  Dashboard as default
};
