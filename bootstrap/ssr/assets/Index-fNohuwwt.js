import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import { P as Pagination } from "./pagination-DvZWC5ih.js";
import { A as AppLayout, B as Badge } from "./app-layout-BNU1zxoI.js";
import { B as Button } from "./app-logo-icon-yMlft2ma.js";
import { I as Input } from "./input-DRU_9M1j.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-fzyh6nXg.js";
import { Plus, Search, Eye, Edit, Printer } from "lucide-react";
import { S as Skeleton } from "./skeleton-GNTkvGbs.js";
import "./select-mdHWliXL.js";
import "@radix-ui/react-select";
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
const breadcrumbs = [
  {
    title: "Measurements",
    href: "/measurements"
  }
];
function MeasurementsIndex({ measurements, search }) {
  const [searchTerm, setSearchTerm] = useState(search || "");
  const [perPage, setPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title: "Measurements" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: "Measurements" }),
        /* @__PURE__ */ jsx(Link, { href: "/measurements/create", children: /* @__PURE__ */ jsxs(Button, { children: [
          /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-2" }),
          "Add Measurement"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx(CardTitle, { children: "Measurement List" }),
          /* @__PURE__ */ jsxs("div", { className: "relative max-w-sm", children: [
            /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                placeholder: "Search customers...",
                value: searchTerm,
                onChange: (e) => setSearchTerm(e.target.value),
                className: "pl-10"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs(CardContent, { children: [
          loading ? /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
              /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Customer" }),
              /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Tailor" }),
              /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Type" }),
              /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Created" }),
              /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Actions" })
            ] }) }),
            /* @__PURE__ */ jsx("tbody", { children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-32" }) }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-28" }) }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-20" }) }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-24" }) }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
                /* @__PURE__ */ jsx(Skeleton, { className: "h-9 w-9" }),
                /* @__PURE__ */ jsx(Skeleton, { className: "h-9 w-9" }),
                /* @__PURE__ */ jsx(Skeleton, { className: "h-9 w-9" })
              ] }) })
            ] }, i)) })
          ] }) }) : measurements.data.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center py-16 px-4", children: [
            /* @__PURE__ */ jsx(
              "svg",
              {
                className: "w-48 h-48 mb-6 text-gray-300",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1,
                    d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-700 mb-2", children: "No Measurements Found" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-center mb-6 max-w-md", children: searchTerm ? "No measurements match your search criteria." : "Get started by adding your first measurement." }),
            !searchTerm && /* @__PURE__ */ jsx(Link, { href: "/measurements/create", children: /* @__PURE__ */ jsxs(Button, { children: [
              /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-2" }),
              "Add First Measurement"
            ] }) })
          ] }) : /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
              /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Customer" }),
              /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Tailor" }),
              /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Type" }),
              /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Created" }),
              /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Actions" })
            ] }) }),
            /* @__PURE__ */ jsx("tbody", { children: measurements.data.map((measurement) => /* @__PURE__ */ jsxs("tr", { className: "border-b hover:bg-gray-50 dark:hover:bg-[oklch(0.269_0_0)]", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-medium", children: measurement.customer.name }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: measurement.tailor.name }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: measurement.measurement_type }) }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-sm text-gray-600", children: new Date(measurement.created_at).toLocaleDateString() }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
                /* @__PURE__ */ jsx(Link, { href: `/measurements/${measurement.id}`, children: /* @__PURE__ */ jsx(Button, { size: "sm", variant: "outline", children: /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" }) }) }),
                /* @__PURE__ */ jsx(Link, { href: `/measurements/${measurement.id}/edit`, children: /* @__PURE__ */ jsx(Button, { size: "sm", variant: "outline", children: /* @__PURE__ */ jsx(Edit, { className: "h-4 w-4" }) }) }),
                /* @__PURE__ */ jsx(Button, { size: "sm", variant: "outline", children: /* @__PURE__ */ jsx(Printer, { className: "h-4 w-4" }) })
              ] }) })
            ] }, measurement.id)) })
          ] }) }),
          measurements.data.length > 0 && /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(
            Pagination,
            {
              currentPage: measurements.current_page,
              totalPages: measurements.last_page,
              onPageChange: (page) => router.get("/measurements", { page, per_page: perPage, search: searchTerm }, { preserveState: true }),
              showingFrom: (measurements.current_page - 1) * perPage + 1,
              showingTo: Math.min(measurements.current_page * perPage, measurements.total),
              total: measurements.total,
              perPage,
              onPerPageChange: (newPerPage) => {
                setPerPage(newPerPage);
                router.get("/measurements", { per_page: newPerPage, search: searchTerm }, { preserveState: true });
              }
            }
          ) })
        ] })
      ] })
    ] })
  ] });
}
export {
  MeasurementsIndex as default
};
