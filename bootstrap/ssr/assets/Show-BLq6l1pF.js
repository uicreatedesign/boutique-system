import { jsx, jsxs } from "react/jsx-runtime";
import { useForm, Head, Link } from "@inertiajs/react";
import { A as AppLayout, B as Badge, a as Avatar, b as AvatarImage, c as AvatarFallback } from "./app-layout-BNU1zxoI.js";
import { B as Button } from "./app-logo-icon-yMlft2ma.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-fzyh6nXg.js";
import { Download, Edit, Plus } from "lucide-react";
import { useState } from "react";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-DqkYa_S8.js";
import { I as Input } from "./input-DRU_9M1j.js";
import { L as Label } from "./label-HS0cC0xf.js";
import { T as Textarea } from "./textarea-B9zFq2cw.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-mdHWliXL.js";
import { toast } from "sonner";
import { u as useCurrency } from "./use-currency-Dhhwwk5V.js";
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
import "@radix-ui/react-label";
import "@radix-ui/react-select";
function PaymentModal({ open, onClose, orderId, balanceDue }) {
  const { formatCurrency } = useCurrency();
  const { data, setData, post, processing, errors, reset } = useForm({
    payment_date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    amount: balanceDue?.toString() || "0",
    payment_method: "cash",
    transaction_reference: "",
    payment_type: "partial",
    notes: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post(`/orders/${orderId}/payments`, {
      onSuccess: () => {
        toast.success("Payment added successfully");
        reset();
        onClose();
      },
      onError: () => {
        toast.error("Failed to add payment");
      }
    });
  };
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { children: [
    /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "Add Payment" }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { children: "Payment Date *" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "date",
            value: data.payment_date,
            onChange: (e) => setData("payment_date", e.target.value)
          }
        ),
        errors.payment_date && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.payment_date })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { children: "Amount *" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "number",
            step: "0.01",
            value: data.amount,
            onChange: (e) => setData("amount", e.target.value),
            placeholder: "0.00"
          }
        ),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 mt-1", children: [
          "Balance Due: ",
          formatCurrency(balanceDue || 0)
        ] }),
        errors.amount && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.amount })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { children: "Payment Method *" }),
        /* @__PURE__ */ jsxs(Select, { value: data.payment_method, onValueChange: (value) => setData("payment_method", value), children: [
          /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsx(SelectItem, { value: "cash", children: "Cash" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "card", children: "Card" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "upi", children: "UPI" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "bank_transfer", children: "Bank Transfer" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "other", children: "Other" })
          ] })
        ] }),
        errors.payment_method && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.payment_method })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { children: "Transaction Reference" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            value: data.transaction_reference,
            onChange: (e) => setData("transaction_reference", e.target.value),
            placeholder: "Transaction ID or reference"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { children: "Payment Type *" }),
        /* @__PURE__ */ jsxs(Select, { value: data.payment_type, onValueChange: (value) => setData("payment_type", value), children: [
          /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsx(SelectItem, { value: "advance", children: "Advance" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "partial", children: "Partial" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "full", children: "Full" })
          ] })
        ] }),
        errors.payment_type && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.payment_type })
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
        /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", onClick: onClose, children: "Cancel" }),
        /* @__PURE__ */ jsx(Button, { type: "submit", disabled: processing, children: processing ? "Adding..." : "Add Payment" })
      ] })
    ] })
  ] }) });
}
function OrdersShow({ order, canEdit = false }) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const { formatCurrency } = useCurrency();
  const totalPaid = order.payments.reduce((sum, p) => sum + p.amount, 0);
  const netTotal = order.total_amount - order.discount;
  const balanceDue = netTotal - totalPaid;
  return /* @__PURE__ */ jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: `Order ${order.order_number}` }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-4 max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl font-bold", children: [
          "Order ",
          order.order_number
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx("a", { href: `/orders/${order.id}/invoice`, target: "_blank", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", children: [
            /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
            "Invoice"
          ] }) }),
          /* @__PURE__ */ jsx("a", { href: `/orders/${order.id}/measurement-slip`, target: "_blank", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", children: [
            /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
            "Measurement Slip"
          ] }) }),
          canEdit && /* @__PURE__ */ jsx(Link, { href: `/orders/${order.id}/edit`, children: /* @__PURE__ */ jsxs(Button, { size: "sm", children: [
            /* @__PURE__ */ jsx(Edit, { className: "h-4 w-4 mr-2" }),
            "Edit"
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Order Details" }) }),
        /* @__PURE__ */ jsx(CardContent, { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Customer" }),
            /* @__PURE__ */ jsx("p", { className: "font-medium", children: order.customer.name }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: order.customer.phone })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Garment Type" }),
            /* @__PURE__ */ jsx("p", { className: "font-medium", children: order.garment_type.name })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Tailor" }),
            /* @__PURE__ */ jsx("p", { className: "font-medium", children: order.tailor.name })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Status" }),
            /* @__PURE__ */ jsx(Badge, { style: { backgroundColor: order.stitching_status.color }, children: order.stitching_status.name })
          ] })
        ] }) })
      ] }),
      order.measurement && /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Measurements" }) }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Measurement Type" }),
            /* @__PURE__ */ jsx("p", { className: "font-medium", children: order.measurement.measurement_type })
          ] }),
          order.measurement.measurements && Object.keys(order.measurement.measurements).length > 0 && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-3", children: "Measurement Values" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4 p-4 rounded-lg border border-muted", children: Object.entries(order.measurement.measurements).map(([key, value]) => /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 capitalize", children: key.replace(/_/g, " ") }),
              /* @__PURE__ */ jsx("p", { className: "font-medium", children: value })
            ] }, key)) })
          ] }),
          order.measurement.notes && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Notes" }),
            /* @__PURE__ */ jsx("p", { className: "font-medium", children: order.measurement.notes })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Fabric & Design" }) }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Fabric Type" }),
            /* @__PURE__ */ jsx("p", { className: "font-medium", children: order.customer_fabric ? "Customer Provided" : order.fabric?.name || "Not specified" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            order.customer_fabric_photo && /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-2", children: "Customer Fabric Photo" }),
              /* @__PURE__ */ jsxs(Avatar, { className: "h-32 w-32 rounded-md cursor-pointer", onClick: () => window.open(`/storage/${order.customer_fabric_photo}`, "_blank"), children: [
                /* @__PURE__ */ jsx(AvatarImage, { src: `/storage/${order.customer_fabric_photo}`, alt: "Fabric", className: "object-cover" }),
                /* @__PURE__ */ jsx(AvatarFallback, { className: "rounded-md", children: "Fabric" })
              ] })
            ] }),
            order.boutique_fabric_photo && /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-2", children: "Boutique Fabric Photo" }),
              /* @__PURE__ */ jsxs(Avatar, { className: "h-32 w-32 rounded-md cursor-pointer", onClick: () => window.open(`/storage/${order.boutique_fabric_photo}`, "_blank"), children: [
                /* @__PURE__ */ jsx(AvatarImage, { src: `/storage/${order.boutique_fabric_photo}`, alt: "Boutique Fabric", className: "object-cover" }),
                /* @__PURE__ */ jsx(AvatarFallback, { className: "rounded-md", children: "Fabric" })
              ] })
            ] }),
            order.design_image && /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-2", children: "Design Image" }),
              /* @__PURE__ */ jsxs(Avatar, { className: "h-32 w-32 rounded-md cursor-pointer", onClick: () => window.open(`/storage/${order.design_image}`, "_blank"), children: [
                /* @__PURE__ */ jsx(AvatarImage, { src: `/storage/${order.design_image}`, alt: "Design", className: "object-cover" }),
                /* @__PURE__ */ jsx(AvatarFallback, { className: "rounded-md", children: "Design" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Dates & Additional Information" }) }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Order Date" }),
              /* @__PURE__ */ jsx("p", { className: "font-medium", children: new Date(order.order_date).toLocaleDateString() })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Delivery Date" }),
              /* @__PURE__ */ jsx("p", { className: "font-medium", children: new Date(order.delivery_date).toLocaleDateString() })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Priority" }),
              /* @__PURE__ */ jsx(Badge, { variant: order.priority === "urgent" ? "destructive" : "secondary", children: order.priority })
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
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Pricing & Payment" }) }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Total Amount" }),
              /* @__PURE__ */ jsx("p", { className: "font-medium text-lg", children: formatCurrency(order.total_amount) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Discount" }),
              /* @__PURE__ */ jsxs("p", { className: "font-medium text-lg", children: [
                "-",
                formatCurrency(order.discount)
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Net Total" }),
              /* @__PURE__ */ jsx("p", { className: "font-medium text-lg", children: formatCurrency(order.total_amount - order.discount) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-t pt-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Subtotal" }),
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-lg", children: formatCurrency(order.total_amount) })
            ] }),
            order.discount > 0 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mt-2", children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Discount" }),
              /* @__PURE__ */ jsxs("p", { className: "font-semibold text-lg", children: [
                "-",
                formatCurrency(order.discount)
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mt-2 border-t pt-2", children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Total" }),
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-lg", children: formatCurrency(order.total_amount - order.discount) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mt-2", children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Total Paid" }),
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-lg", children: formatCurrency(totalPaid) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mt-2 border-t pt-2", children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Balance Due" }),
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-lg text-red-600", children: formatCurrency(balanceDue) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx(CardTitle, { children: "Payment History" }),
          balanceDue > 0 && /* @__PURE__ */ jsxs(Button, { size: "sm", onClick: () => setShowPaymentModal(true), children: [
            /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-2" }),
            "Add Payment"
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: order.payments.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-center py-4", children: "No payments recorded" }) : /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsx("th", { className: "text-left p-4 text-sm", children: "Date" }),
            /* @__PURE__ */ jsx("th", { className: "text-left p-4 text-sm", children: "Amount" }),
            /* @__PURE__ */ jsx("th", { className: "text-left p-4 text-sm", children: "Method" }),
            /* @__PURE__ */ jsx("th", { className: "text-left p-4 text-sm", children: "Type" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: order.payments.map((payment) => /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsx("td", { className: "p-4 text-sm", children: new Date(payment.payment_date).toLocaleDateString() }),
            /* @__PURE__ */ jsx("td", { className: "p-4 font-medium text-sm", children: formatCurrency(payment.amount) }),
            /* @__PURE__ */ jsx("td", { className: "p-4 text-sm capitalize", children: payment.payment_method.replace("_", " ") }),
            /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs", children: payment.payment_type }) })
          ] }, payment.id)) })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsx(
        PaymentModal,
        {
          open: showPaymentModal,
          onClose: () => setShowPaymentModal(false),
          orderId: order.id,
          balanceDue
        }
      )
    ] })
  ] });
}
export {
  OrdersShow as default
};
