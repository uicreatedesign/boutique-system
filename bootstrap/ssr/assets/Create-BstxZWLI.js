import { jsxs, jsx } from "react/jsx-runtime";
import { useForm, Head } from "@inertiajs/react";
import { A as AppLayout } from "./app-layout-BNU1zxoI.js";
import { B as Button } from "./app-logo-icon-yMlft2ma.js";
import { I as Input } from "./input-DRU_9M1j.js";
import { L as Label } from "./label-HS0cC0xf.js";
import { T as Textarea } from "./textarea-B9zFq2cw.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-mdHWliXL.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-fzyh6nXg.js";
import { C as Checkbox } from "./checkbox-DbX0FY8V.js";
import { toast } from "sonner";
import { useState } from "react";
import axios from "axios";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "lucide-react";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-collapsible";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
import "./index-BSn8jdXv.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "@radix-ui/react-select";
import "@radix-ui/react-checkbox";
function OrdersCreate({ customers, garmentTypes, tailors, fabrics, statuses }) {
  const [measurements, setMeasurements] = useState([]);
  const { data, setData, post, processing, errors } = useForm({
    customer_id: "",
    garment_type_id: "",
    tailor_id: "",
    measurement_id: "",
    fabric_id: "",
    customer_fabric: false,
    stitching_status_id: statuses[0]?.id.toString() || "",
    order_date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    delivery_date: "",
    priority: "normal",
    total_amount: "",
    advance_paid: "",
    discount: "0",
    special_instructions: "",
    notes: ""
  });
  const handleCustomerChange = async (customerId) => {
    setData("customer_id", customerId);
    if (customerId) {
      try {
        const response = await axios.get(`/api/measurements?customer_id=${customerId}`);
        setMeasurements(response.data);
      } catch (error) {
        console.error("Failed to fetch measurements:", error);
      }
    } else {
      setMeasurements([]);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    post("/orders", {
      onSuccess: () => {
        toast.success("Order created successfully");
      },
      onError: () => {
        toast.error("Failed to create order");
      }
    });
  };
  return /* @__PURE__ */ jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Create Order" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-4", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: "Create Order" }),
      /* @__PURE__ */ jsx("form", { onSubmit: handleSubmit, children: /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Order Details" }) }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { children: "Customer *" }),
              /* @__PURE__ */ jsxs(Select, { value: data.customer_id, onValueChange: handleCustomerChange, children: [
                /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select customer" }) }),
                /* @__PURE__ */ jsx(SelectContent, { children: customers.map((customer) => /* @__PURE__ */ jsx(SelectItem, { value: customer.id.toString(), children: customer.name }, customer.id)) })
              ] }),
              errors.customer_id && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.customer_id })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { children: "Garment Type *" }),
              /* @__PURE__ */ jsxs(Select, { value: data.garment_type_id, onValueChange: (value) => setData("garment_type_id", value), children: [
                /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select garment type" }) }),
                /* @__PURE__ */ jsx(SelectContent, { children: garmentTypes.map((type) => /* @__PURE__ */ jsx(SelectItem, { value: type.id.toString(), children: type.name }, type.id)) })
              ] }),
              errors.garment_type_id && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.garment_type_id })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { children: "Tailor *" }),
              /* @__PURE__ */ jsxs(Select, { value: data.tailor_id, onValueChange: (value) => setData("tailor_id", value), children: [
                /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select tailor" }) }),
                /* @__PURE__ */ jsx(SelectContent, { children: tailors.map((tailor) => /* @__PURE__ */ jsx(SelectItem, { value: tailor.id.toString(), children: tailor.name }, tailor.id)) })
              ] }),
              errors.tailor_id && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.tailor_id })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { children: "Measurement" }),
              /* @__PURE__ */ jsxs(Select, { value: data.measurement_id, onValueChange: (value) => setData("measurement_id", value), disabled: !data.customer_id, children: [
                /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select measurement" }) }),
                /* @__PURE__ */ jsx(SelectContent, { children: measurements.map((measurement) => /* @__PURE__ */ jsxs(SelectItem, { value: measurement.id.toString(), children: [
                  measurement.measurement_type,
                  " - ",
                  new Date(measurement.created_at).toLocaleDateString()
                ] }, measurement.id)) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx(
              Checkbox,
              {
                id: "customer_fabric",
                checked: data.customer_fabric,
                onCheckedChange: (checked) => setData("customer_fabric", checked)
              }
            ),
            /* @__PURE__ */ jsx("label", { htmlFor: "customer_fabric", className: "text-sm cursor-pointer", children: "Customer provided fabric" })
          ] }),
          !data.customer_fabric && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: "Fabric" }),
            /* @__PURE__ */ jsxs(Select, { value: data.fabric_id, onValueChange: (value) => setData("fabric_id", value), children: [
              /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select fabric" }) }),
              /* @__PURE__ */ jsx(SelectContent, { children: fabrics.map((fabric) => /* @__PURE__ */ jsxs(SelectItem, { value: fabric.id.toString(), children: [
                fabric.name,
                " - $",
                fabric.price_per_meter,
                "/meter"
              ] }, fabric.id)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { children: "Order Date *" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "date",
                  value: data.order_date,
                  onChange: (e) => setData("order_date", e.target.value)
                }
              ),
              errors.order_date && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.order_date })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { children: "Delivery Date *" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "date",
                  value: data.delivery_date,
                  onChange: (e) => setData("delivery_date", e.target.value)
                }
              ),
              errors.delivery_date && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.delivery_date })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { children: "Priority *" }),
              /* @__PURE__ */ jsxs(Select, { value: data.priority, onValueChange: (value) => setData("priority", value), children: [
                /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsx(SelectItem, { value: "normal", children: "Normal" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "urgent", children: "Urgent" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { children: "Total Amount *" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "number",
                  step: "0.01",
                  value: data.total_amount,
                  onChange: (e) => setData("total_amount", e.target.value),
                  placeholder: "0.00"
                }
              ),
              errors.total_amount && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.total_amount })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { children: "Advance Paid" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "number",
                  step: "0.01",
                  value: data.advance_paid,
                  onChange: (e) => setData("advance_paid", e.target.value),
                  placeholder: "0.00"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { children: "Discount" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "number",
                  step: "0.01",
                  value: data.discount,
                  onChange: (e) => setData("discount", e.target.value),
                  placeholder: "0.00"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: "Status *" }),
            /* @__PURE__ */ jsxs(Select, { value: data.stitching_status_id, onValueChange: (value) => setData("stitching_status_id", value), children: [
              /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsx(SelectContent, { children: statuses.map((status) => /* @__PURE__ */ jsx(SelectItem, { value: status.id.toString(), children: status.name }, status.id)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: "Special Instructions" }),
            /* @__PURE__ */ jsx(
              Textarea,
              {
                value: data.special_instructions,
                onChange: (e) => setData("special_instructions", e.target.value),
                rows: 3
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: "Notes" }),
            /* @__PURE__ */ jsx(
              Textarea,
              {
                value: data.notes,
                onChange: (e) => setData("notes", e.target.value),
                rows: 2
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-2", children: [
            /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", onClick: () => window.history.back(), children: "Cancel" }),
            /* @__PURE__ */ jsx(Button, { type: "submit", disabled: processing, children: processing ? "Creating..." : "Create Order" })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  OrdersCreate as default
};
