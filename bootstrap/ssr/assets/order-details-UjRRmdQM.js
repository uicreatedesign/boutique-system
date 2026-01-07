import { jsxs, jsx } from "react/jsx-runtime";
import { Head, Link } from "@inertiajs/react";
import { A as AppLayout, B as Badge } from "./app-layout-BNU1zxoI.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-fzyh6nXg.js";
import { B as Button } from "./app-logo-icon-yMlft2ma.js";
import { ArrowLeft, Package, DollarSign, Download } from "lucide-react";
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
function OrderDetails({ order }) {
  const { formatCurrency } = useCurrency();
  const breadcrumbs = [
    {
      title: "My Dashboard",
      href: "/customer-dashboard"
    },
    {
      title: "My Orders",
      href: "/customer/orders"
    },
    {
      title: order.order_number,
      href: ""
    }
  ];
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title: `Order ${order.order_number}` }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-8 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(Link, { href: "/customer-dashboard", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }),
          "Back"
        ] }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: "Order Details" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: order.order_number })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Package, { className: "h-5 w-5" }),
                "Order Information"
              ] }),
              /* @__PURE__ */ jsx(Badge, { style: { backgroundColor: order.status_color }, children: order.status })
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Garment Type" }),
                  /* @__PURE__ */ jsx("p", { className: "font-medium", children: order.garment_type })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Tailor" }),
                  /* @__PURE__ */ jsx("p", { className: "font-medium", children: order.tailor })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Order Date" }),
                  /* @__PURE__ */ jsx("p", { className: "font-medium", children: new Date(order.order_date).toLocaleDateString() })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Delivery Date" }),
                  /* @__PURE__ */ jsx("p", { className: "font-medium", children: new Date(order.delivery_date).toLocaleDateString() })
                ] })
              ] }),
              order.special_instructions && /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Special Instructions" }),
                /* @__PURE__ */ jsx("p", { className: "font-medium", children: order.special_instructions })
              ] }),
              order.notes && /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Notes" }),
                /* @__PURE__ */ jsx("p", { className: "font-medium", children: order.notes })
              ] })
            ] })
          ] }),
          order.measurement && /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Measurements" }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3", children: Object.entries(order.measurement.measurements).map(([key, value]) => /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: key }),
              /* @__PURE__ */ jsx("p", { className: "font-medium", children: value })
            ] }, key)) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(DollarSign, { className: "h-5 w-5" }),
              "Payment Summary"
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Total Amount" }),
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: formatCurrency(order.total_amount) })
              ] }),
              order.discount > 0 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-green-600", children: [
                /* @__PURE__ */ jsx("span", { children: "Discount" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  "-",
                  formatCurrency(order.discount)
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Paid Amount" }),
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-green-600", children: formatCurrency(order.payments.reduce((sum, p) => sum + p.amount, 0)) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "border-t pt-3", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Balance Due" }),
                /* @__PURE__ */ jsx("span", { className: `font-bold ${order.balance_due > 0 ? "text-red-600" : "text-green-600"}`, children: formatCurrency(order.balance_due) })
              ] }) })
            ] })
          ] }),
          order.payments.length > 0 && /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Payment History" }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: order.payments.map((payment) => /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-medium", children: formatCurrency(payment.amount) }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 capitalize", children: payment.payment_method.replace("_", " ") })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: new Date(payment.payment_date).toLocaleDateString() })
            ] }, payment.id)) }) })
          ] }),
          /* @__PURE__ */ jsx("a", { href: `/customer-dashboard/orders/${order.id}/invoice`, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsxs(Button, { className: "w-full", children: [
            /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
            "Download Invoice"
          ] }) })
        ] })
      ] })
    ] })
  ] });
}
export {
  OrderDetails as default
};
