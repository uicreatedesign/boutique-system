import { jsxs, jsx } from "react/jsx-runtime";
import { useForm, Head } from "@inertiajs/react";
import { A as AppLayout } from "./app-layout-BNU1zxoI.js";
import { B as Button } from "./app-logo-icon-yMlft2ma.js";
import { I as Input } from "./input-DRU_9M1j.js";
import { L as Label } from "./label-HS0cC0xf.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-fzyh6nXg.js";
import { toast } from "sonner";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "lucide-react";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-collapsible";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
import "./index-BSn8jdXv.js";
import "axios";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
function Edit({ measurement, customers, tailors }) {
  const { data, setData, put, processing, errors } = useForm({
    customer_id: measurement.customer_id,
    tailor_id: measurement.tailor_id,
    measurement_type: measurement.measurement_type,
    measurements: measurement.measurements || {},
    notes: measurement.notes || ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    put(`/measurements/${measurement.id}`, {
      onSuccess: () => {
        toast.success("Measurement updated successfully");
      },
      onError: () => {
        toast.error("Failed to update measurement");
      }
    });
  };
  return /* @__PURE__ */ jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Edit Measurement" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-4", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: "Edit Measurement" }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Measurement Details" }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
          Object.entries(data.measurements).map(([key, value]) => /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: key, children: key }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: key,
                value,
                onChange: (e) => setData("measurements", {
                  ...data.measurements,
                  [key]: e.target.value
                })
              }
            )
          ] }, key)),
          /* @__PURE__ */ jsx(Button, { type: "submit", disabled: processing, children: processing ? "Updating..." : "Update Measurement" })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  Edit as default
};
