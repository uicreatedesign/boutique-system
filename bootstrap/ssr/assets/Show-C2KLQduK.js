import { jsxs, jsx } from "react/jsx-runtime";
import { Head, Link } from "@inertiajs/react";
import { A as AppLayout, B as Badge } from "./app-layout-BNU1zxoI.js";
import { B as Button } from "./app-logo-icon-yMlft2ma.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-fzyh6nXg.js";
import { ArrowLeft, Printer, Edit } from "lucide-react";
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
function ShowMeasurement({ measurement, categories }) {
  const category = categories.find((cat) => cat.slug === measurement.measurement_type);
  const handlePrint = () => {
    window.print();
  };
  return /* @__PURE__ */ jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: `Measurement - ${measurement.customer.name}` }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
          /* @__PURE__ */ jsx(Link, { href: "/measurements", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }),
            "Back"
          ] }) }),
          /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: "Measurement Details" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
          /* @__PURE__ */ jsxs(Button, { onClick: handlePrint, variant: "outline", children: [
            /* @__PURE__ */ jsx(Printer, { className: "h-4 w-4 mr-2" }),
            "Print"
          ] }),
          /* @__PURE__ */ jsx(Link, { href: `/measurements/${measurement.id}/edit`, children: /* @__PURE__ */ jsxs(Button, { children: [
            /* @__PURE__ */ jsx(Edit, { className: "h-4 w-4 mr-2" }),
            "Edit"
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Customer Information" }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Name:" }),
              " ",
              measurement.customer.name
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Date:" }),
              " ",
              new Date(measurement.created_at).toLocaleDateString()
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Tailor Information" }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Tailor:" }),
              " ",
              measurement.tailor.name
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Type:" }),
              " ",
              /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: measurement.measurement_type })
            ] })
          ] }) })
        ] })
      ] }),
      category && /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: category.name }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: category.fields.map((field) => /* @__PURE__ */ jsxs("div", { className: "border rounded-lg p-3", children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-gray-600", children: field.name }),
          /* @__PURE__ */ jsxs("div", { className: "text-lg font-semibold", children: [
            measurement.measurements[field.slug] || "N/A",
            " ",
            field.unit
          ] })
        ] }, field.id)) }) })
      ] }),
      measurement.notes && /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Notes" }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("p", { className: "whitespace-pre-wrap", children: measurement.notes }) })
      ] })
    ] })
  ] });
}
export {
  ShowMeasurement as default
};
