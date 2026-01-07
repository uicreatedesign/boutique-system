import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useForm, router, Head } from "@inertiajs/react";
import { B as Badge, A as AppLayout } from "./app-layout-BNU1zxoI.js";
import { B as Button } from "./app-logo-icon-yMlft2ma.js";
import { I as Input } from "./input-DRU_9M1j.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-fzyh6nXg.js";
import { Edit, Trash2, Plus, Search } from "lucide-react";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription, e as DialogFooter, f as DialogClose } from "./dialog-DqkYa_S8.js";
import { L as Label } from "./label-HS0cC0xf.js";
import { T as Textarea } from "./textarea-B9zFq2cw.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-mdHWliXL.js";
import { toast } from "sonner";
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
import "@radix-ui/react-label";
import "@radix-ui/react-select";
function FabricForm({ fabric, onSuccess }) {
  const { data, setData, post, put, processing, errors } = useForm({
    name: fabric?.name || "",
    type: fabric?.type || "",
    color: fabric?.color || "",
    price_per_meter: fabric?.price_per_meter || "",
    quantity_in_stock: fabric?.quantity_in_stock || "",
    unit: fabric?.unit || "meter",
    description: fabric?.description || "",
    status: fabric?.status || "available"
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (fabric?.id) {
      put(`/fabrics/${fabric.id}`, {
        onSuccess: () => {
          toast.success("Fabric updated successfully");
          onSuccess();
        },
        onError: () => {
          toast.error("Failed to update fabric");
        }
      });
    } else {
      post("/fabrics", {
        onSuccess: () => {
          toast.success("Fabric created successfully");
          onSuccess();
        },
        onError: () => {
          toast.error("Failed to create fabric");
        }
      });
    }
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Name *" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "name",
            value: data.name,
            onChange: (e) => setData("name", e.target.value),
            placeholder: "e.g., Cotton, Silk, Denim"
          }
        ),
        errors.name && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.name })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "type", children: "Type" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "type",
            value: data.type,
            onChange: (e) => setData("type", e.target.value),
            placeholder: "e.g., Plain, Printed, Embroidered"
          }
        ),
        errors.type && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.type })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "color", children: "Color" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "color",
            value: data.color,
            onChange: (e) => setData("color", e.target.value),
            placeholder: "e.g., Red, Blue, White"
          }
        ),
        errors.color && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.color })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "price_per_meter", children: "Price per Unit" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "price_per_meter",
            type: "number",
            step: "0.01",
            value: data.price_per_meter,
            onChange: (e) => setData("price_per_meter", e.target.value),
            placeholder: "0.00"
          }
        ),
        errors.price_per_meter && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.price_per_meter })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "quantity_in_stock", children: "Quantity in Stock *" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "quantity_in_stock",
            type: "number",
            step: "0.01",
            value: data.quantity_in_stock,
            onChange: (e) => setData("quantity_in_stock", e.target.value),
            placeholder: "0"
          }
        ),
        errors.quantity_in_stock && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.quantity_in_stock })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "unit", children: "Unit *" }),
        /* @__PURE__ */ jsxs(Select, { value: data.unit, onValueChange: (value) => setData("unit", value), children: [
          /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsx(SelectItem, { value: "meter", children: "Meter" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "yard", children: "Yard" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "piece", children: "Piece" })
          ] })
        ] }),
        errors.unit && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.unit })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "status", children: "Status *" }),
      /* @__PURE__ */ jsxs(Select, { value: data.status, onValueChange: (value) => setData("status", value), children: [
        /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
        /* @__PURE__ */ jsxs(SelectContent, { children: [
          /* @__PURE__ */ jsx(SelectItem, { value: "available", children: "Available" }),
          /* @__PURE__ */ jsx(SelectItem, { value: "out_of_stock", children: "Out of Stock" }),
          /* @__PURE__ */ jsx(SelectItem, { value: "discontinued", children: "Discontinued" })
        ] })
      ] }),
      errors.status && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.status })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "description", children: "Description" }),
      /* @__PURE__ */ jsx(
        Textarea,
        {
          id: "description",
          value: data.description,
          onChange: (e) => setData("description", e.target.value),
          placeholder: "Enter fabric details",
          rows: 3
        }
      ),
      errors.description && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end gap-2", children: /* @__PURE__ */ jsx(Button, { type: "submit", disabled: processing, children: processing ? "Saving..." : fabric ? "Update" : "Create" }) })
  ] });
}
function FabricEditModal({ fabric, open, onClose, onSuccess }) {
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-2xl", children: [
    /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "Edit Fabric" }) }),
    /* @__PURE__ */ jsx(FabricForm, { fabric, onSuccess })
  ] }) });
}
function FabricDeleteDialog({ fabric, open, onClose, onSuccess }) {
  const { delete: destroy, processing } = useForm();
  const handleDelete = () => {
    if (!fabric) return;
    destroy(`/fabrics/${fabric.id}`, {
      onSuccess: () => {
        toast.success("Fabric deleted successfully");
        onSuccess();
      },
      onError: () => {
        toast.error("Failed to delete fabric");
      }
    });
  };
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { "aria-describedby": "delete-fabric-description", children: [
    /* @__PURE__ */ jsx(DialogTitle, { children: "Are you sure you want to delete this fabric?" }),
    /* @__PURE__ */ jsxs(DialogDescription, { id: "delete-fabric-description", children: [
      'Once deleted, "',
      fabric?.name,
      '" will be permanently removed. This action cannot be undone.'
    ] }),
    /* @__PURE__ */ jsxs(DialogFooter, { className: "gap-2", children: [
      /* @__PURE__ */ jsx(DialogClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "secondary", children: "Cancel" }) }),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "destructive",
          disabled: processing,
          onClick: handleDelete,
          children: processing ? "Deleting..." : "Delete Fabric"
        }
      )
    ] })
  ] }) });
}
function FabricTable({ search, statusFilter, canEdit = false, canDelete = false }) {
  const { formatCurrency } = useCurrency();
  const [fabrics, setFabrics] = useState([]);
  const [filteredFabrics, setFilteredFabrics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editFabric, setEditFabric] = useState(null);
  const [deleteFabric, setDeleteFabric] = useState(null);
  useEffect(() => {
    setLoading(true);
    router.reload({ only: ["fabrics"], onSuccess: (page) => {
      setFabrics(page.props.fabrics || []);
      setLoading(false);
    } });
  }, []);
  useEffect(() => {
    let filtered = fabrics;
    if (search) {
      filtered = filtered.filter(
        (fabric) => fabric.name.toLowerCase().includes(search.toLowerCase()) || fabric.type?.toLowerCase().includes(search.toLowerCase()) || fabric.color?.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (statusFilter && statusFilter !== "all") {
      filtered = filtered.filter((fabric) => fabric.status === statusFilter);
    }
    setFilteredFabrics(filtered);
  }, [fabrics, search, statusFilter]);
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Name" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Type" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Color" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Price/" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Stock" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Status" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-32" }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-24" }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-20" }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-24" }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-16" }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-20" }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
          /* @__PURE__ */ jsx(Skeleton, { className: "h-9 w-9" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-9 w-9" })
        ] }) })
      ] }, i)) })
    ] }) });
  }
  if (filteredFabrics.length === 0) {
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center py-16 px-4", children: [
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
              d: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-700 mb-2", children: "No Fabrics Found" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-center mb-6 max-w-md", children: search || statusFilter ? "No fabrics match your search criteria." : "Get started by adding your first fabric to inventory." })
    ] });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "overflow-x-auto -mx-3 sm:mx-0", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse min-w-[640px]", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
        /* @__PURE__ */ jsx("th", { className: "text-left p-2 sm:p-4 text-xs sm:text-sm", children: "Name" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-2 sm:p-4 text-xs sm:text-sm", children: "Type" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-2 sm:p-4 text-xs sm:text-sm", children: "Color" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-2 sm:p-4 text-xs sm:text-sm", children: "Price" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-2 sm:p-4 text-xs sm:text-sm", children: "Stock" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-2 sm:p-4 text-xs sm:text-sm", children: "Status" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-2 sm:p-4 text-xs sm:text-sm", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: filteredFabrics.map((fabric) => /* @__PURE__ */ jsxs("tr", { className: "border-b hover:bg-gray-50 dark:hover:bg-[oklch(0.269_0_0)]", children: [
        /* @__PURE__ */ jsx("td", { className: "p-2 sm:p-4 font-medium text-sm sm:text-base", children: fabric.name }),
        /* @__PURE__ */ jsx("td", { className: "p-2 sm:p-4 text-xs sm:text-sm", children: fabric.type || "-" }),
        /* @__PURE__ */ jsx("td", { className: "p-2 sm:p-4 text-xs sm:text-sm", children: fabric.color || "-" }),
        /* @__PURE__ */ jsxs("td", { className: "p-2 sm:p-4 text-xs sm:text-sm", children: [
          formatCurrency(fabric.price_per_meter || 0),
          "/",
          fabric.unit
        ] }),
        /* @__PURE__ */ jsx("td", { className: "p-2 sm:p-4 text-xs sm:text-sm", children: /* @__PURE__ */ jsxs(Badge, { variant: fabric.quantity_in_stock > 0 ? "default" : "secondary", className: "text-xs", children: [
          fabric.quantity_in_stock,
          " ",
          fabric.unit
        ] }) }),
        /* @__PURE__ */ jsx("td", { className: "p-2 sm:p-4", children: /* @__PURE__ */ jsx(Badge, { variant: fabric.status === "available" ? "default" : "secondary", className: "text-xs", children: fabric.status.replace("_", " ") }) }),
        /* @__PURE__ */ jsx("td", { className: "p-2 sm:p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-1 sm:space-x-2", children: [
          canEdit && /* @__PURE__ */ jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              onClick: () => setEditFabric(fabric),
              className: "h-8 w-8 p-0",
              children: /* @__PURE__ */ jsx(Edit, { className: "h-3 w-3 sm:h-4 sm:w-4" })
            }
          ),
          canDelete && /* @__PURE__ */ jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              onClick: () => setDeleteFabric(fabric),
              className: "h-8 w-8 p-0",
              children: /* @__PURE__ */ jsx(Trash2, { className: "h-3 w-3 sm:h-4 sm:w-4" })
            }
          )
        ] }) })
      ] }, fabric.id)) })
    ] }) }),
    editFabric && /* @__PURE__ */ jsx(
      FabricEditModal,
      {
        fabric: editFabric,
        open: !!editFabric,
        onClose: () => setEditFabric(null),
        onSuccess: () => {
          setEditFabric(null);
          router.reload({ only: ["fabrics"] });
        }
      }
    ),
    /* @__PURE__ */ jsx(
      FabricDeleteDialog,
      {
        fabric: deleteFabric,
        open: !!deleteFabric,
        onClose: () => setDeleteFabric(null),
        onSuccess: () => {
          setDeleteFabric(null);
          router.reload({ only: ["fabrics"] });
        }
      }
    )
  ] });
}
function FabricCreateModal({ open, onClose }) {
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-2xl", children: [
    /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "Add Fabric" }) }),
    /* @__PURE__ */ jsx(FabricForm, { onSuccess: onClose })
  ] }) });
}
const breadcrumbs = [
  {
    title: "Fabrics",
    href: "/fabrics"
  }
];
function FabricsIndex({ canCreate = false }) {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title: "Fabrics & Materials" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4 sm:space-y-6 p-3 sm:p-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl sm:text-3xl font-bold", children: "Fabrics & Materials" }),
        canCreate && /* @__PURE__ */ jsxs(Button, { onClick: () => setShowCreateModal(true), className: "w-full sm:w-auto", children: [
          /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-2" }),
          "Add Fabric"
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-lg sm:text-xl", children: "Fabric Inventory" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-2 w-full sm:w-auto", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative w-full sm:w-64", children: [
              /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  placeholder: "Search fabrics...",
                  value: search,
                  onChange: (e) => setSearch(e.target.value),
                  className: "pl-10 w-full"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(Select, { value: statusFilter, onValueChange: setStatusFilter, children: [
              /* @__PURE__ */ jsx(SelectTrigger, { className: "w-full sm:w-40", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "All Status" }) }),
              /* @__PURE__ */ jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsx(SelectItem, { value: "all", children: "All Status" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "available", children: "Available" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "out_of_stock", children: "Out of Stock" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "discontinued", children: "Discontinued" })
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(FabricTable, { search, statusFilter, canEdit: canCreate, canDelete: canCreate }) })
      ] }),
      /* @__PURE__ */ jsx(
        FabricCreateModal,
        {
          open: showCreateModal,
          onClose: () => setShowCreateModal(false)
        }
      )
    ] })
  ] });
}
export {
  FabricsIndex as default
};
