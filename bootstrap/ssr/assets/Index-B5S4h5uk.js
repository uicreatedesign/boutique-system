import { jsxs, jsx } from "react/jsx-runtime";
import { usePage, Head, Link, router } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { P as Pagination } from "./pagination-DvZWC5ih.js";
import { A as AppLayout, B as Badge } from "./app-layout-BNU1zxoI.js";
import { B as Button } from "./app-logo-icon-yMlft2ma.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-fzyh6nXg.js";
import { I as Input } from "./input-DRU_9M1j.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-mdHWliXL.js";
import { Plus, Search, Eye, Edit, Printer } from "lucide-react";
import { u as useCurrency } from "./use-currency-Dhhwwk5V.js";
import { S as Skeleton } from "./skeleton-GNTkvGbs.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-collapsible";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
import "./index-BSn8jdXv.js";
import "axios";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-select";
const breadcrumbs = [
  {
    title: "Orders",
    href: "/orders"
  }
];
function OrdersIndex({ orders, statuses, filters, canCreate = false, canEdit = false, canGenerateInvoice = false }) {
  const { url } = usePage();
  const urlParams = new URLSearchParams(window.location.search);
  const [perPage, setPerPage] = useState(filters.per_page || 10);
  const [search, setSearch] = useState(urlParams.get("search") || "");
  const [statusFilter, setStatusFilter] = useState(urlParams.get("status") || "");
  const [loading, setLoading] = useState(false);
  const { formatCurrency } = useCurrency();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchParam = params.get("search");
    if (searchParam) {
      setSearch(searchParam);
    }
  }, [url]);
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title: "Orders" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: "Orders" }),
        canCreate && /* @__PURE__ */ jsx(Link, { href: "/orders/create", children: /* @__PURE__ */ jsxs(Button, { children: [
          /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-2" }),
          "Create Order"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsx(CardTitle, { children: "Order List" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-2 w-full sm:w-auto", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative w-full sm:w-64", children: [
              /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  placeholder: "Search orders...",
                  value: search,
                  onChange: (e) => {
                    setSearch(e.target.value);
                    const params = new URLSearchParams(window.location.search);
                    if (e.target.value) {
                      params.set("search", e.target.value);
                    } else {
                      params.delete("search");
                    }
                    router.get("/orders", Object.fromEntries(params), { preserveState: true, replace: true });
                  },
                  className: "pl-10 w-full"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(Select, { value: statusFilter, onValueChange: (value) => {
              setStatusFilter(value);
              const params = new URLSearchParams(window.location.search);
              if (value && value !== "all") {
                params.set("status", value);
              } else {
                params.delete("status");
              }
              router.get("/orders", Object.fromEntries(params), { preserveState: true, replace: true });
            }, children: [
              /* @__PURE__ */ jsx(SelectTrigger, { className: "w-full sm:w-40", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "All Status" }) }),
              /* @__PURE__ */ jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsx(SelectItem, { value: "all", children: "All Status" }),
                statuses.map((status) => /* @__PURE__ */ jsx(SelectItem, { value: status.id.toString(), children: status.name }, status.id))
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: loading ? /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Order #" }),
            /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Customer" }),
            /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Garment" }),
            /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Tailor" }),
            /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Status" }),
            /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Delivery" }),
            /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Amount" }),
            /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-32" }) }),
            /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-28" }) }),
            /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-24" }) }),
            /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-28" }) }),
            /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-20" }) }),
            /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-24" }) }),
            /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-20" }) }),
            /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(Skeleton, { className: "h-9 w-9" }),
              /* @__PURE__ */ jsx(Skeleton, { className: "h-9 w-9" })
            ] }) })
          ] }, i)) })
        ] }) }) : orders.data.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center py-16 px-4", children: [
          /* @__PURE__ */ jsx("svg", { className: "w-48 h-48 mb-6 text-gray-300", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1, d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-700 mb-2", children: "No Orders Found" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-center mb-6 max-w-md", children: "Get started by creating your first order." })
        ] }) : /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Order #" }),
            /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Customer" }),
            /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Garment" }),
            /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Tailor" }),
            /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Status" }),
            /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Delivery" }),
            /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Amount" }),
            /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: orders.data.map((order) => /* @__PURE__ */ jsxs("tr", { className: "border-b hover:bg-gray-50 dark:hover:bg-[oklch(0.269_0_0)]", children: [
            /* @__PURE__ */ jsx("td", { className: "p-4 font-medium", children: order.order_number }),
            /* @__PURE__ */ jsx("td", { className: "p-4", children: order.customer.name }),
            /* @__PURE__ */ jsx("td", { className: "p-4", children: order.garment_type.name }),
            /* @__PURE__ */ jsx("td", { className: "p-4", children: order.tailor.name }),
            /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Badge, { style: { backgroundColor: order.stitching_status.color }, children: order.stitching_status.name }) }),
            /* @__PURE__ */ jsx("td", { className: "p-4 text-sm", children: new Date(order.delivery_date).toLocaleDateString() }),
            /* @__PURE__ */ jsx("td", { className: "p-4", children: formatCurrency(order.total_amount) }),
            /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(Link, { href: `/orders/${order.id}`, children: /* @__PURE__ */ jsx(Button, { size: "sm", variant: "outline", children: /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" }) }) }),
              canEdit && /* @__PURE__ */ jsx(Link, { href: `/orders/${order.id}/edit`, children: /* @__PURE__ */ jsx(Button, { size: "sm", variant: "outline", children: /* @__PURE__ */ jsx(Edit, { className: "h-4 w-4" }) }) }),
              canGenerateInvoice && /* @__PURE__ */ jsx("a", { href: `/orders/${order.id}/invoice`, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(Button, { size: "sm", variant: "outline", children: /* @__PURE__ */ jsx(Printer, { className: "h-4 w-4" }) }) })
            ] }) })
          ] }, order.id)) })
        ] }) }) })
      ] }),
      orders.data.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Rows per page:" }),
          /* @__PURE__ */ jsxs(Select, { value: perPage.toString(), onValueChange: (value) => {
            setPerPage(Number(value));
            const params = new URLSearchParams(window.location.search);
            params.set("per_page", value);
            router.get("/orders", Object.fromEntries(params), { preserveState: true });
          }, children: [
            /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[70px]", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsx(SelectItem, { value: "10", children: "10" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "25", children: "25" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "50", children: "50" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "100", children: "100" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          Pagination,
          {
            currentPage: orders.current_page,
            totalPages: orders.last_page,
            onPageChange: (page) => {
              const params = new URLSearchParams(window.location.search);
              params.set("page", page.toString());
              params.set("per_page", perPage.toString());
              router.get("/orders", Object.fromEntries(params), { preserveState: true });
            },
            showingFrom: (orders.current_page - 1) * orders.per_page + 1,
            showingTo: Math.min(orders.current_page * orders.per_page, orders.total),
            total: orders.total
          }
        )
      ] })
    ] })
  ] });
}
export {
  OrdersIndex as default
};
