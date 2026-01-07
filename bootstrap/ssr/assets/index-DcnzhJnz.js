import { jsxs, jsx } from "react/jsx-runtime";
import { Head, Link } from "@inertiajs/react";
import { u as useHasPermission, A as AppLayout, B as Badge } from "./app-layout-BNU1zxoI.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-fzyh6nXg.js";
import { B as Button } from "./app-logo-icon-yMlft2ma.js";
import { A as Alert, a as AlertDescription } from "./alert-CciJvyAJ.js";
import { User, Info, Package, Download, Ruler } from "lucide-react";
import { u as useCurrency } from "./use-currency-Dhhwwk5V.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-collapsible";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
import "./index-BSn8jdXv.js";
import "axios";
import "./input-DRU_9M1j.js";
import "clsx";
import "tailwind-merge";
const breadcrumbs = [
  {
    title: "My Dashboard",
    href: "/customer-dashboard"
  }
];
function CustomerDashboard({ customer, orders, measurements }) {
  const { formatCurrency } = useCurrency();
  const { hasPermission } = useHasPermission();
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title: "My Dashboard" }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-8 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: "My Dashboard" }),
        /* @__PURE__ */ jsxs("p", { className: "text-gray-600", children: [
          "Welcome, ",
          customer.name
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(User, { className: "h-5 w-5" }),
          "My Information"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Name" }),
            /* @__PURE__ */ jsx("p", { className: "font-medium", children: customer.name })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Email" }),
            /* @__PURE__ */ jsx("p", { className: "font-medium", children: customer.email })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Phone" }),
            /* @__PURE__ */ jsx("p", { className: "font-medium", children: customer.phone })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Alert, { children: [
        /* @__PURE__ */ jsx(Info, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxs(AlertDescription, { children: [
          /* @__PURE__ */ jsx("strong", { children: "Coming Soon:" }),
          " Online payment feature will be available soon. Currently, payments are processed at the boutique."
        ] })
      ] }),
      hasPermission("view_own_orders") && /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Package, { className: "h-5 w-5" }),
          "My Orders (",
          orders.length,
          ")"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: orders.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-center text-gray-500 py-8", children: "No orders found" }) : /* @__PURE__ */ jsx("div", { className: "space-y-4", children: orders.map((order) => /* @__PURE__ */ jsx("div", { className: "border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 flex-1", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: order.order_number }),
              /* @__PURE__ */ jsx(Badge, { style: { backgroundColor: order.status_color }, children: order.status })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: order.garment_type }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-4 text-sm", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                "Order: ",
                new Date(order.order_date).toLocaleDateString()
              ] }),
              /* @__PURE__ */ jsxs("span", { children: [
                "Delivery: ",
                new Date(order.delivery_date).toLocaleDateString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-4 text-sm", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                "Total: ",
                formatCurrency(order.total_amount)
              ] }),
              /* @__PURE__ */ jsxs("span", { children: [
                "Paid: ",
                formatCurrency(order.paid_amount)
              ] }),
              order.balance_due > 0 && /* @__PURE__ */ jsxs("span", { className: "text-red-600 font-medium", children: [
                "Due: ",
                formatCurrency(order.balance_due)
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Link, { href: `/customer-dashboard/orders/${order.id}`, children: /* @__PURE__ */ jsx(Button, { size: "sm", variant: "outline", children: "View Details" }) }),
            hasPermission("download_own_invoices") && /* @__PURE__ */ jsx("a", { href: `/customer-dashboard/orders/${order.id}/invoice`, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(Button, { size: "sm", variant: "outline", children: /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }) }) })
          ] })
        ] }) }, order.id)) }) })
      ] }),
      hasPermission("view_own_measurements") && /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Ruler, { className: "h-5 w-5" }),
          "My Measurements (",
          measurements.length,
          ")"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: measurements.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-center text-gray-500 py-8", children: "No measurements recorded" }) : /* @__PURE__ */ jsx("div", { className: "space-y-4", children: measurements.map((measurement) => /* @__PURE__ */ jsxs("div", { className: "border rounded-lg p-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-2", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: measurement.measurement_type }),
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
                "Tailor: ",
                measurement.tailor.name
              ] })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500", children: new Date(measurement.created_at).toLocaleDateString() })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-2 mt-3", children: Object.entries(measurement.measurements).map(([key, value]) => /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-gray-600", children: [
              key,
              ":"
            ] }),
            /* @__PURE__ */ jsx("span", { className: "ml-1 font-medium", children: value })
          ] }, key)) })
        ] }, measurement.id)) }) })
      ] })
    ] })
  ] });
}
export {
  CustomerDashboard as default
};
