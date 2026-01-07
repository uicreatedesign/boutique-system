import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useForm, Head } from "@inertiajs/react";
import { A as AppLayout } from "./app-layout-BNU1zxoI.js";
import { B as Button } from "./app-logo-icon-yMlft2ma.js";
import { I as Input } from "./input-DRU_9M1j.js";
import { L as Label } from "./label-HS0cC0xf.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-mdHWliXL.js";
import { T as Textarea } from "./textarea-B9zFq2cw.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-fzyh6nXg.js";
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
import "@radix-ui/react-select";
function CreateMeasurement({ customers, tailors, categories }) {
  const [selectedType, setSelectedType] = useState("");
  const [measurements, setMeasurements] = useState({});
  const { data, setData, post, processing, errors } = useForm({
    customer_id: "",
    tailor_id: "",
    measurement_type: "",
    measurements: {},
    notes: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      ...data,
      measurements
    };
    post("/measurements", formData);
  };
  const selectedCategory = categories.find((cat) => cat.slug === selectedType);
  return /* @__PURE__ */ jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Add Measurement" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto space-y-6", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: "Add New Measurement" }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Basic Information" }) }),
          /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "customer", children: "Customer *" }),
                /* @__PURE__ */ jsxs(Select, { onValueChange: (value) => setData("customer_id", value), children: [
                  /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select customer" }) }),
                  /* @__PURE__ */ jsx(SelectContent, { children: customers.map((customer) => /* @__PURE__ */ jsx(SelectItem, { value: customer.id.toString(), children: customer.name }, customer.id)) })
                ] }),
                errors.customer_id && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.customer_id })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "tailor", children: "Tailor *" }),
                /* @__PURE__ */ jsxs(Select, { onValueChange: (value) => setData("tailor_id", value), children: [
                  /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select tailor" }) }),
                  /* @__PURE__ */ jsx(SelectContent, { children: tailors.map((tailor) => /* @__PURE__ */ jsx(SelectItem, { value: tailor.id.toString(), children: tailor.name }, tailor.id)) })
                ] }),
                errors.tailor_id && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.tailor_id })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "type", children: "Measurement Type *" }),
              /* @__PURE__ */ jsxs(Select, { onValueChange: (value) => {
                setSelectedType(value);
                setData("measurement_type", value);
              }, children: [
                /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select measurement type" }) }),
                /* @__PURE__ */ jsx(SelectContent, { children: categories.map((category) => /* @__PURE__ */ jsx(SelectItem, { value: category.slug, children: category.name }, category.id)) })
              ] }),
              errors.measurement_type && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.measurement_type })
            ] })
          ] })
        ] }),
        selectedCategory && /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: selectedCategory.name }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: selectedCategory.fields.map((field) => /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs(Label, { htmlFor: field.slug, children: [
              field.name,
              " (",
              field.unit,
              ")",
              field.is_required && /* @__PURE__ */ jsx("span", { className: "text-red-500 ml-1", children: "*" })
            ] }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: field.slug,
                type: "number",
                step: "0.1",
                placeholder: `Enter ${field.name.toLowerCase()}`,
                value: measurements[field.slug] || "",
                onChange: (e) => {
                  const newMeasurements = {
                    ...measurements,
                    [field.slug]: e.target.value
                  };
                  setMeasurements(newMeasurements);
                  setData("measurements", newMeasurements);
                },
                required: field.is_required
              }
            )
          ] }, field.id)) }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Additional Notes" }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(
            Textarea,
            {
              placeholder: "Any additional notes or special instructions...",
              value: data.notes,
              onChange: (e) => setData("notes", e.target.value),
              rows: 4
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-end space-x-4", children: [
          /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", onClick: () => window.history.back(), children: "Cancel" }),
          /* @__PURE__ */ jsx(Button, { type: "submit", disabled: processing, children: processing ? "Saving..." : "Save Measurement" })
        ] })
      ] })
    ] })
  ] });
}
export {
  CreateMeasurement as default
};
