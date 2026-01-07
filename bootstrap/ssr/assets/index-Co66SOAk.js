import { jsxs, jsx } from "react/jsx-runtime";
import { Head, Link } from "@inertiajs/react";
import { u as useHasPermission, A as AppLayout, B as Badge } from "./app-layout-BNU1zxoI.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-fzyh6nXg.js";
import { B as Button } from "./app-logo-icon-yMlft2ma.js";
import { Package, Eye, Download } from "lucide-react";
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
    title: "My Orders",
    href: "/customer/orders"
  }
];
function CustomerOrders({ orders }) {
  const { formatCurrency } = useCurrency();
  const { hasPermission } = useHasPermission();
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title: "My Orders" }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-8 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: "My Orders" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "View all your orders and their status" })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Package, { className: "h-5 w-5" }),
          "All Orders (",
          orders.meta?.total || orders.data?.length || 0,
          ")"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: orders.data.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-center text-gray-500 py-8", children: "No orders found" }) : /* @__PURE__ */ jsx("div", { className: "space-y-4", children: orders.data.map((order) => /* @__PURE__ */ jsx("div", { className: "border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 flex-1", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: order.order_number }),
              /* @__PURE__ */ jsx(Badge, { style: { backgroundColor: order.status_color }, children: order.status })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2 text-sm", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Garment:" }),
                " ",
                order.garment_type
              ] }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Tailor:" }),
                " ",
                order.tailor
              ] }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Order Date:" }),
                " ",
                new Date(order.order_date).toLocaleDateString()
              ] }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Delivery:" }),
                " ",
                new Date(order.delivery_date).toLocaleDateString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-4 text-sm", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Total:" }),
                " ",
                formatCurrency(order.total_amount)
              ] }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Paid:" }),
                " ",
                formatCurrency(order.paid_amount)
              ] }),
              order.balance_due > 0 && /* @__PURE__ */ jsxs("span", { className: "text-red-600 font-medium", children: [
                /* @__PURE__ */ jsx("strong", { children: "Due:" }),
                " ",
                formatCurrency(order.balance_due)
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Link, { href: `/customer-dashboard/orders/${order.id}`, children: /* @__PURE__ */ jsxs(Button, { size: "sm", variant: "outline", children: [
              /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4 mr-1" }),
              "View"
            ] }) }),
            hasPermission("download_own_invoices") && /* @__PURE__ */ jsx("a", { href: `/customer-dashboard/orders/${order.id}/invoice`, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(Button, { size: "sm", variant: "outline", children: /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }) }) })
          ] })
        ] }) }, order.id)) }) })
      ] })
    ] })
  ] });
}
export {
  CustomerOrders as default
};
