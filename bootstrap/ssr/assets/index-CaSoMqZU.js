import { jsxs, jsx } from "react/jsx-runtime";
import { Head, Link } from "@inertiajs/react";
import { u as useHasPermission, A as AppLayout, B as Badge } from "./app-layout-BNU1zxoI.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-fzyh6nXg.js";
import { B as Button } from "./app-logo-icon-yMlft2ma.js";
import { ClipboardList, Clock, CheckCircle, Package, User } from "lucide-react";
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
function TailorDashboard({ tailor, stats, orders }) {
  const { hasPermission } = useHasPermission();
  const { formatCurrency } = useCurrency();
  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-gray-100 text-gray-800";
      case "on_leave":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  const getSkillColor = (skill) => {
    switch (skill) {
      case "expert":
        return "bg-purple-100 text-purple-800";
      case "intermediate":
        return "bg-blue-100 text-blue-800";
      case "beginner":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  return /* @__PURE__ */ jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Tailor Dashboard" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl font-bold", children: [
          "Welcome, ",
          tailor.name,
          "!"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-1", children: "Your tailor dashboard" })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Your Profile" }) }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("strong", { children: "Status:" }),
            /* @__PURE__ */ jsx(Badge, { className: getStatusColor(tailor.status), children: tailor.status.replace("_", " ") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("strong", { children: "Skill Level:" }),
            /* @__PURE__ */ jsx(Badge, { className: getSkillColor(tailor.skill_level), children: tailor.skill_level })
          ] }),
          tailor.hourly_rate && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Hourly Rate:" }),
            " ",
            formatCurrency(tailor.hourly_rate),
            "/hr"
          ] }),
          tailor.specialization && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Specialization:" }),
            " ",
            tailor.specialization
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Total Orders" }),
            /* @__PURE__ */ jsx(ClipboardList, { className: "h-4 w-4 text-muted-foreground" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: stats.total_orders }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Pending Orders" }),
            /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-muted-foreground" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: stats.pending_orders }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Completed Orders" }),
            /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-muted-foreground" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: stats.completed_orders }) })
        ] })
      ] }),
      hasPermission("view_orders") && /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Package, { className: "h-5 w-5" }),
          "Recent Orders"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: orders.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-center py-8", children: "No orders assigned yet" }) : /* @__PURE__ */ jsx("div", { className: "space-y-4", children: orders.map((order) => /* @__PURE__ */ jsx("div", { className: "border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 flex-1", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: order.order_number }),
              /* @__PURE__ */ jsx(Badge, { style: { backgroundColor: order.stitching_status.color }, children: order.stitching_status.name })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-600", children: [
              /* @__PURE__ */ jsx(User, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { children: order.customer.name }),
              /* @__PURE__ */ jsx("span", { children: "•" }),
              /* @__PURE__ */ jsx("span", { children: order.garment_type.name })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-4 text-sm", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                "Order: ",
                new Date(order.order_date).toLocaleDateString()
              ] }),
              /* @__PURE__ */ jsxs("span", { children: [
                "Delivery: ",
                new Date(order.delivery_date).toLocaleDateString()
              ] })
            ] })
          ] }),
          hasPermission("edit_orders") && /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsx(Link, { href: `/orders/${order.id}`, children: /* @__PURE__ */ jsx(Button, { size: "sm", variant: "outline", children: "View Order" }) }) })
        ] }) }, order.id)) }) })
      ] }),
      hasPermission("view_measurements") && /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(ClipboardList, { className: "h-5 w-5" }),
          "Quick Actions"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          hasPermission("create_measurements") && /* @__PURE__ */ jsx(Link, { href: "/measurements", children: /* @__PURE__ */ jsx(Button, { className: "w-full", variant: "outline", children: "Add Measurements" }) }),
          hasPermission("view_orders") && /* @__PURE__ */ jsx(Link, { href: "/orders", children: /* @__PURE__ */ jsx(Button, { className: "w-full", variant: "outline", children: "View All Orders" }) })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  TailorDashboard as default
};
