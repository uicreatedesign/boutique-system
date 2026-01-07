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
function GarmentTypeForm({ garmentType, onSuccess }) {
  const { data, setData, post, put, processing, errors } = useForm({
    name: garmentType?.name || "",
    description: garmentType?.description || "",
    status: garmentType?.status || "active"
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (garmentType?.id) {
      put(`/garment-types/${garmentType.id}`, {
        onSuccess: () => {
          toast.success("Garment type updated successfully");
          onSuccess();
        },
        onError: () => {
          toast.error("Failed to update garment type");
        }
      });
    } else {
      post("/garment-types", {
        onSuccess: () => {
          toast.success("Garment type created successfully");
          onSuccess();
        },
        onError: () => {
          toast.error("Failed to create garment type");
        }
      });
    }
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Name *" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          id: "name",
          value: data.name,
          onChange: (e) => setData("name", e.target.value),
          placeholder: "e.g., Shirt, Pant, Kurti"
        }
      ),
      errors.name && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.name })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "description", children: "Description" }),
      /* @__PURE__ */ jsx(
        Textarea,
        {
          id: "description",
          value: data.description,
          onChange: (e) => setData("description", e.target.value),
          placeholder: "Enter description",
          rows: 3
        }
      ),
      errors.description && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.description })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "status", children: "Status *" }),
      /* @__PURE__ */ jsxs(Select, { value: data.status, onValueChange: (value) => setData("status", value), children: [
        /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
        /* @__PURE__ */ jsxs(SelectContent, { children: [
          /* @__PURE__ */ jsx(SelectItem, { value: "active", children: "Active" }),
          /* @__PURE__ */ jsx(SelectItem, { value: "inactive", children: "Inactive" })
        ] })
      ] }),
      errors.status && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.status })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end gap-2", children: /* @__PURE__ */ jsx(Button, { type: "submit", disabled: processing, children: processing ? "Saving..." : garmentType ? "Update" : "Create" }) })
  ] });
}
function GarmentTypeEditModal({ garmentType, open, onClose, onSuccess }) {
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { children: [
    /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "Edit Garment Type" }) }),
    /* @__PURE__ */ jsx(GarmentTypeForm, { garmentType, onSuccess })
  ] }) });
}
function GarmentTypeDeleteDialog({ garmentType, open, onClose, onSuccess }) {
  const { delete: destroy, processing } = useForm();
  const handleDelete = () => {
    if (!garmentType) return;
    destroy(`/garment-types/${garmentType.id}`, {
      onSuccess: () => {
        toast.success("Garment type deleted successfully");
        onSuccess();
      },
      onError: () => {
        toast.error("Failed to delete garment type");
      }
    });
  };
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { "aria-describedby": "delete-garment-type-description", children: [
    /* @__PURE__ */ jsx(DialogTitle, { children: "Are you sure you want to delete this garment type?" }),
    /* @__PURE__ */ jsxs(DialogDescription, { id: "delete-garment-type-description", children: [
      'Once deleted, "',
      garmentType?.name,
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
          children: processing ? "Deleting..." : "Delete Garment Type"
        }
      )
    ] })
  ] }) });
}
function GarmentTypeTable({ search, statusFilter, canEdit = false, canDelete = false }) {
  const [garmentTypes, setGarmentTypes] = useState([]);
  const [filteredTypes, setFilteredTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editType, setEditType] = useState(null);
  const [deleteType, setDeleteType] = useState(null);
  useEffect(() => {
    setLoading(true);
    router.reload({ only: ["garmentTypes"], onSuccess: (page) => {
      setGarmentTypes(page.props.garmentTypes || []);
      setLoading(false);
    } });
  }, []);
  useEffect(() => {
    let filtered = garmentTypes;
    if (search) {
      filtered = filtered.filter(
        (type) => type.name.toLowerCase().includes(search.toLowerCase()) || type.description?.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (statusFilter && statusFilter !== "all") {
      filtered = filtered.filter((type) => type.status === statusFilter);
    }
    setFilteredTypes(filtered);
  }, [garmentTypes, search, statusFilter]);
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Name" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Description" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Status" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-32" }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-48" }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-20" }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
          /* @__PURE__ */ jsx(Skeleton, { className: "h-9 w-9" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-9 w-9" })
        ] }) })
      ] }, i)) })
    ] }) });
  }
  if (filteredTypes.length === 0) {
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
              d: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-700 mb-2", children: "No Garment Types Found" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-center mb-6 max-w-md", children: search || statusFilter ? "No garment types match your search criteria." : "Get started by adding your first garment type." })
    ] });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Name" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Description" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Status" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: filteredTypes.map((type) => /* @__PURE__ */ jsxs("tr", { className: "border-b hover:bg-gray-50 dark:hover:bg-[oklch(0.269_0_0)]", children: [
        /* @__PURE__ */ jsx("td", { className: "p-4 font-medium", children: type.name }),
        /* @__PURE__ */ jsx("td", { className: "p-4 text-sm text-gray-600", children: type.description || "-" }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Badge, { variant: type.status === "active" ? "default" : "secondary", children: type.status }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
          canEdit && /* @__PURE__ */ jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              onClick: () => setEditType(type),
              children: /* @__PURE__ */ jsx(Edit, { className: "h-4 w-4" })
            }
          ),
          canDelete && /* @__PURE__ */ jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              onClick: () => setDeleteType(type),
              children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
            }
          )
        ] }) })
      ] }, type.id)) })
    ] }) }),
    editType && /* @__PURE__ */ jsx(
      GarmentTypeEditModal,
      {
        garmentType: editType,
        open: !!editType,
        onClose: () => setEditType(null),
        onSuccess: () => {
          setEditType(null);
          router.reload({ only: ["garmentTypes"] });
        }
      }
    ),
    /* @__PURE__ */ jsx(
      GarmentTypeDeleteDialog,
      {
        garmentType: deleteType,
        open: !!deleteType,
        onClose: () => setDeleteType(null),
        onSuccess: () => {
          setDeleteType(null);
          router.reload({ only: ["garmentTypes"] });
        }
      }
    )
  ] });
}
function GarmentTypeCreateModal({ open, onClose }) {
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { children: [
    /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "Add Garment Type" }) }),
    /* @__PURE__ */ jsx(GarmentTypeForm, { onSuccess: onClose })
  ] }) });
}
const breadcrumbs = [
  {
    title: "Garment Types",
    href: "/garment-types"
  }
];
function GarmentTypesIndex({ canCreate = false }) {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title: "Garment Types" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl sm:text-3xl font-bold", children: "Garment Types" }),
        canCreate && /* @__PURE__ */ jsxs(Button, { onClick: () => setShowCreateModal(true), children: [
          /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-2" }),
          "Add Garment Type"
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsx(CardTitle, { children: "Garment Type List" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-2 w-full sm:w-auto", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative w-full sm:w-64", children: [
              /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  placeholder: "Search garment types...",
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
                /* @__PURE__ */ jsx(SelectItem, { value: "active", children: "Active" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "inactive", children: "Inactive" })
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(GarmentTypeTable, { search, statusFilter, canEdit: canCreate, canDelete: canCreate }) })
      ] }),
      /* @__PURE__ */ jsx(
        GarmentTypeCreateModal,
        {
          open: showCreateModal,
          onClose: () => setShowCreateModal(false)
        }
      )
    ] })
  ] });
}
export {
  GarmentTypesIndex as default
};
