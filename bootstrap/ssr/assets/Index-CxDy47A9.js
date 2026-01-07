import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import { B as Badge, A as AppLayout } from "./app-layout-BNU1zxoI.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-DxUnHL7O.js";
import axios from "axios";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-fzyh6nXg.js";
import { B as Button } from "./app-logo-icon-yMlft2ma.js";
import { I as Input } from "./input-DRU_9M1j.js";
import { L as Label } from "./label-HS0cC0xf.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-mdHWliXL.js";
import { Download, ShoppingCart, DollarSign, CreditCard, TrendingUp, RefreshCw, BarChart3, Scissors, Users, Package } from "lucide-react";
import Chart from "react-apexcharts";
import { u as useCurrency } from "./use-currency-Dhhwwk5V.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-collapsible";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
import "./index-BSn8jdXv.js";
import "@radix-ui/react-tabs";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "@radix-ui/react-select";
function SalesReport() {
  const { formatCurrency } = useCurrency();
  const [startDate, setStartDate] = useState(new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth(), 1).toISOString().split("T")[0]);
  const [endDate, setEndDate] = useState((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
  const [groupBy, setGroupBy] = useState("day");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const fetchReport = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/reports/sales", {
        params: { start_date: startDate, end_date: endDate, group_by: groupBy }
      });
      setData(response.data);
    } catch (error) {
      console.error("Failed to fetch sales report:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchReport();
  }, []);
  const handleExport = () => {
    window.open(`/reports/export/sales?start_date=${startDate}&end_date=${endDate}`, "_blank");
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Filters" }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Start Date" }),
          /* @__PURE__ */ jsx(Input, { type: "date", value: startDate, onChange: (e) => setStartDate(e.target.value) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "End Date" }),
          /* @__PURE__ */ jsx(Input, { type: "date", value: endDate, onChange: (e) => setEndDate(e.target.value) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Group By" }),
          /* @__PURE__ */ jsxs(Select, { value: groupBy, onValueChange: setGroupBy, children: [
            /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsx(SelectItem, { value: "day", children: "Daily" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "week", children: "Weekly" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "month", children: "Monthly" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-end gap-2", children: [
          /* @__PURE__ */ jsx(Button, { onClick: fetchReport, className: "flex-1", children: "Generate" }),
          /* @__PURE__ */ jsx(Button, { onClick: handleExport, variant: "outline", children: /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }) })
        ] })
      ] }) })
    ] }),
    loading ? /* @__PURE__ */ jsx("div", { className: "text-center py-8", children: "Loading..." }) : data && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Total Orders" }),
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold", children: data.summary.total_orders })
          ] }),
          /* @__PURE__ */ jsx(ShoppingCart, { className: "h-8 w-8 text-muted-foreground" })
        ] }) }) }),
        /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Total Revenue" }),
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold", children: formatCurrency(data.summary.total_revenue) })
          ] }),
          /* @__PURE__ */ jsx(DollarSign, { className: "h-8 w-8 text-muted-foreground" })
        ] }) }) }),
        /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Total Paid" }),
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold", children: formatCurrency(data.summary.total_paid) })
          ] }),
          /* @__PURE__ */ jsx(CreditCard, { className: "h-8 w-8 text-muted-foreground" })
        ] }) }) }),
        /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Avg Order Value" }),
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold", children: formatCurrency(data.summary.average_order_value) })
          ] }),
          /* @__PURE__ */ jsx(TrendingUp, { className: "h-8 w-8 text-muted-foreground" })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Revenue Trend" }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(
          Chart,
          {
            options: {
              chart: { type: "bar", toolbar: { show: false } },
              xaxis: { categories: data.chart_data.map((d) => d.date) },
              colors: ["#8884d8"],
              dataLabels: { enabled: false },
              plotOptions: { bar: { borderRadius: 4 } }
            },
            series: [{ name: "Revenue", data: data.chart_data.map((d) => d.revenue) }],
            type: "bar",
            height: 300
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Order Details" }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Order #" }),
            /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Date" }),
            /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Customer" }),
            /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Garment" }),
            /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Status" }),
            /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Amount" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: data.orders.map((order) => /* @__PURE__ */ jsxs("tr", { className: "border-b hover:bg-gray-50 dark:hover:bg-[oklch(0.269_0_0)]", children: [
            /* @__PURE__ */ jsx("td", { className: "p-4 font-medium", children: order.order_number }),
            /* @__PURE__ */ jsx("td", { className: "p-4", children: new Date(order.order_date).toLocaleDateString() }),
            /* @__PURE__ */ jsx("td", { className: "p-4", children: order.customer.name }),
            /* @__PURE__ */ jsx("td", { className: "p-4", children: order.garment_type.name }),
            /* @__PURE__ */ jsx("td", { className: "p-4", children: order.stitching_status.name }),
            /* @__PURE__ */ jsx("td", { className: "p-4", children: formatCurrency(order.total_amount) })
          ] }, order.id)) })
        ] }) }) })
      ] })
    ] })
  ] });
}
function TailorPerformanceReport() {
  const { formatCurrency } = useCurrency();
  const [startDate, setStartDate] = useState(new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth(), 1).toISOString().split("T")[0]);
  const [endDate, setEndDate] = useState((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const fetchReport = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/reports/tailor-performance", {
        params: { start_date: startDate, end_date: endDate }
      });
      setData(response.data.data);
    } catch (error) {
      console.error("Failed to fetch tailor performance report:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchReport();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Filters" }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Start Date" }),
          /* @__PURE__ */ jsx(Input, { type: "date", value: startDate, onChange: (e) => setStartDate(e.target.value) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "End Date" }),
          /* @__PURE__ */ jsx(Input, { type: "date", value: endDate, onChange: (e) => setEndDate(e.target.value) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex items-end", children: /* @__PURE__ */ jsx(Button, { onClick: fetchReport, className: "w-full", children: "Generate" }) })
      ] }) })
    ] }),
    loading ? /* @__PURE__ */ jsx("div", { className: "text-center py-8", children: "Loading..." }) : /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Tailor Performance" }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
          /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Tailor" }),
          /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Skill Level" }),
          /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Total Orders" }),
          /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Completed" }),
          /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Pending" }),
          /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Cancelled" }),
          /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Completion Rate" }),
          /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Revenue" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: data.map((tailor) => /* @__PURE__ */ jsxs("tr", { className: "border-b hover:bg-gray-50 dark:hover:bg-[oklch(0.269_0_0)]", children: [
          /* @__PURE__ */ jsx("td", { className: "p-4 font-medium", children: tailor.name }),
          /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: tailor.skill_level }) }),
          /* @__PURE__ */ jsx("td", { className: "p-4", children: tailor.total_orders }),
          /* @__PURE__ */ jsx("td", { className: "p-4 text-green-600", children: tailor.completed_orders }),
          /* @__PURE__ */ jsx("td", { className: "p-4 text-yellow-600", children: tailor.pending_orders }),
          /* @__PURE__ */ jsx("td", { className: "p-4 text-red-600", children: tailor.cancelled_orders }),
          /* @__PURE__ */ jsxs("td", { className: "p-4", children: [
            tailor.completion_rate,
            "%"
          ] }),
          /* @__PURE__ */ jsx("td", { className: "p-4", children: formatCurrency(tailor.total_revenue) })
        ] }, tailor.id)) })
      ] }) }) })
    ] })
  ] });
}
function CustomerReport() {
  const { formatCurrency } = useCurrency();
  const [startDate, setStartDate] = useState(new Date((/* @__PURE__ */ new Date()).getFullYear(), 0, 1).toISOString().split("T")[0]);
  const [endDate, setEndDate] = useState((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const fetchReport = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/reports/customers", {
        params: { start_date: startDate, end_date: endDate }
      });
      setData(response.data.data);
    } catch (error) {
      console.error("Failed to fetch customer report:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchReport();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Filters" }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Start Date" }),
          /* @__PURE__ */ jsx(Input, { type: "date", value: startDate, onChange: (e) => setStartDate(e.target.value) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "End Date" }),
          /* @__PURE__ */ jsx(Input, { type: "date", value: endDate, onChange: (e) => setEndDate(e.target.value) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex items-end", children: /* @__PURE__ */ jsx(Button, { onClick: fetchReport, className: "w-full", children: "Generate" }) })
      ] }) })
    ] }),
    loading ? /* @__PURE__ */ jsx("div", { className: "text-center py-8", children: "Loading..." }) : /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Top Customers" }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
          /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Customer" }),
          /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Contact" }),
          /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Total Orders" }),
          /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Total Spent" }),
          /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Total Paid" }),
          /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Pending" }),
          /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Last Order" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: data.map((customer) => /* @__PURE__ */ jsxs("tr", { className: "border-b hover:bg-gray-50 dark:hover:bg-[oklch(0.269_0_0)]", children: [
          /* @__PURE__ */ jsx("td", { className: "p-4 font-medium", children: customer.name }),
          /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            customer.phone && /* @__PURE__ */ jsx("div", { className: "text-sm", children: customer.phone }),
            customer.email && /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: customer.email })
          ] }) }),
          /* @__PURE__ */ jsx("td", { className: "p-4", children: customer.total_orders }),
          /* @__PURE__ */ jsx("td", { className: "p-4", children: formatCurrency(customer.total_spent) }),
          /* @__PURE__ */ jsx("td", { className: "p-4 text-green-600", children: formatCurrency(customer.total_paid) }),
          /* @__PURE__ */ jsx("td", { className: "p-4 text-red-600", children: formatCurrency(customer.pending_amount) }),
          /* @__PURE__ */ jsx("td", { className: "p-4", children: customer.last_order_date ? new Date(customer.last_order_date).toLocaleDateString() : "N/A" })
        ] }, customer.id)) })
      ] }) }) })
    ] })
  ] });
}
function InventoryReport() {
  const { formatCurrency } = useCurrency();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const fetchReport = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/reports/inventory");
      setData(response.data.data);
    } catch (error) {
      console.error("Failed to fetch inventory report:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchReport();
  }, []);
  const getStockBadge = (status) => {
    if (status === "low") return /* @__PURE__ */ jsx(Badge, { variant: "destructive", children: "Low Stock" });
    if (status === "medium") return /* @__PURE__ */ jsx(Badge, { className: "bg-yellow-500", children: "Medium" });
    return /* @__PURE__ */ jsx(Badge, { className: "bg-green-500", children: "Good" });
  };
  return /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx(CardTitle, { children: "Fabric Inventory" }),
      /* @__PURE__ */ jsxs(Button, { onClick: fetchReport, variant: "outline", size: "sm", children: [
        /* @__PURE__ */ jsx(RefreshCw, { className: "h-4 w-4 mr-2" }),
        "Refresh"
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(CardContent, { children: loading ? /* @__PURE__ */ jsx("div", { className: "text-center py-8", children: "Loading..." }) : /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Fabric Name" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Type" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Color" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Stock" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Unit" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Price/Unit" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Stock Value" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Usage Count" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Stock Status" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: data.map((fabric) => /* @__PURE__ */ jsxs("tr", { className: "border-b hover:bg-gray-50 dark:hover:bg-[oklch(0.269_0_0)]", children: [
        /* @__PURE__ */ jsx("td", { className: "p-4 font-medium", children: fabric.name }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: fabric.type }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: fabric.color }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: fabric.quantity_in_stock }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: fabric.unit }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: formatCurrency(fabric.price_per_meter) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: formatCurrency(fabric.stock_value) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: fabric.usage_count }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: getStockBadge(fabric.stock_status) })
      ] }, fabric.id)) })
    ] }) }) })
  ] }) });
}
const breadcrumbs = [
  {
    title: "Reports",
    href: "/reports"
  }
];
function ReportsIndex() {
  const [activeTab, setActiveTab] = useState("sales");
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title: "Reports & Analytics" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-4", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: "Reports & Analytics" }) }),
      /* @__PURE__ */ jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, children: [
        /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-4", children: [
          /* @__PURE__ */ jsxs(TabsTrigger, { value: "sales", className: "gap-2", children: [
            /* @__PURE__ */ jsx(BarChart3, { className: "h-4 w-4" }),
            "Sales"
          ] }),
          /* @__PURE__ */ jsxs(TabsTrigger, { value: "tailors", className: "gap-2", children: [
            /* @__PURE__ */ jsx(Scissors, { className: "h-4 w-4" }),
            "Tailors"
          ] }),
          /* @__PURE__ */ jsxs(TabsTrigger, { value: "customers", className: "gap-2", children: [
            /* @__PURE__ */ jsx(Users, { className: "h-4 w-4" }),
            "Customers"
          ] }),
          /* @__PURE__ */ jsxs(TabsTrigger, { value: "inventory", className: "gap-2", children: [
            /* @__PURE__ */ jsx(Package, { className: "h-4 w-4" }),
            "Inventory"
          ] })
        ] }),
        /* @__PURE__ */ jsx(TabsContent, { value: "sales", className: "mt-6", children: /* @__PURE__ */ jsx(SalesReport, {}) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "tailors", className: "mt-6", children: /* @__PURE__ */ jsx(TailorPerformanceReport, {}) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "customers", className: "mt-6", children: /* @__PURE__ */ jsx(CustomerReport, {}) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "inventory", className: "mt-6", children: /* @__PURE__ */ jsx(InventoryReport, {}) })
      ] })
    ] })
  ] });
}
export {
  ReportsIndex as default
};
