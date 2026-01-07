import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useForm, router, Head } from "@inertiajs/react";
import { B as Badge, A as AppLayout } from "./app-layout-BNU1zxoI.js";
import { B as Button } from "./app-logo-icon-yMlft2ma.js";
import { C as Card, a as CardHeader, c as CardContent, b as CardTitle } from "./card-fzyh6nXg.js";
import { GripVertical, Edit, Trash2, Plus } from "lucide-react";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription, e as DialogFooter, f as DialogClose } from "./dialog-DqkYa_S8.js";
import { I as Input } from "./input-DRU_9M1j.js";
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
const colorOptions = [
  { value: "#3b82f6", label: "Blue" },
  { value: "#10b981", label: "Green" },
  { value: "#f59e0b", label: "Orange" },
  { value: "#ef4444", label: "Red" },
  { value: "#8b5cf6", label: "Purple" },
  { value: "#ec4899", label: "Pink" },
  { value: "#6366f1", label: "Indigo" },
  { value: "#14b8a6", label: "Teal" }
];
function StitchingStatusForm({ status, onSuccess }) {
  const { data, setData, post, put, processing, errors } = useForm({
    name: status?.name || "",
    color: status?.color || "#3b82f6",
    description: status?.description || "",
    status: status?.status || "active"
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (status?.id) {
      put(`/stitching-statuses/${status.id}`, {
        onSuccess: () => {
          toast.success("Stitching status updated successfully");
          onSuccess();
        },
        onError: () => {
          toast.error("Failed to update stitching status");
        }
      });
    } else {
      post("/stitching-statuses", {
        onSuccess: () => {
          toast.success("Stitching status created successfully");
          onSuccess();
        },
        onError: () => {
          toast.error("Failed to create stitching status");
        }
      });
    }
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Status Name *" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          id: "name",
          value: data.name,
          onChange: (e) => setData("name", e.target.value),
          placeholder: "e.g., Cutting, Stitching, Finishing"
        }
      ),
      errors.name && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.name })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "color", children: "Color *" }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: colorOptions.map((option) => /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => setData("color", option.value),
          className: `w-10 h-10 rounded-full border-2 ${data.color === option.value ? "border-gray-900 scale-110" : "border-gray-300"} transition-all`,
          style: { backgroundColor: option.value },
          title: option.label
        },
        option.value
      )) }),
      errors.color && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.color })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "description", children: "Description" }),
      /* @__PURE__ */ jsx(
        Textarea,
        {
          id: "description",
          value: data.description,
          onChange: (e) => setData("description", e.target.value),
          placeholder: "Enter status description",
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
    /* @__PURE__ */ jsx("div", { className: "flex justify-end gap-2", children: /* @__PURE__ */ jsx(Button, { type: "submit", disabled: processing, children: processing ? "Saving..." : status ? "Update" : "Create" }) })
  ] });
}
function StitchingStatusEditModal({ status, open, onClose, onSuccess }) {
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { children: [
    /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "Edit Stitching Status" }) }),
    /* @__PURE__ */ jsx(StitchingStatusForm, { status, onSuccess })
  ] }) });
}
function StitchingStatusDeleteDialog({ status, open, onClose, onSuccess }) {
  const { delete: destroy, processing } = useForm();
  const handleDelete = () => {
    if (!status) return;
    destroy(`/stitching-statuses/${status.id}`, {
      onSuccess: () => {
        toast.success("Stitching status deleted successfully");
        onSuccess();
      },
      onError: () => {
        toast.error("Failed to delete stitching status");
      }
    });
  };
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { "aria-describedby": "delete-status-description", children: [
    /* @__PURE__ */ jsx(DialogTitle, { children: "Are you sure you want to delete this status?" }),
    /* @__PURE__ */ jsxs(DialogDescription, { id: "delete-status-description", children: [
      'Once deleted, "',
      status?.name,
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
          children: processing ? "Deleting..." : "Delete Status"
        }
      )
    ] })
  ] }) });
}
function StitchingStatusList({ canEdit = false, canDelete = false }) {
  const [statuses, setStatuses] = useState([]);
  const [editStatus, setEditStatus] = useState(null);
  const [deleteStatus, setDeleteStatus] = useState(null);
  useEffect(() => {
    router.reload({ only: ["statuses"], onSuccess: (page) => {
      setStatuses(page.props.statuses || []);
    } });
  }, []);
  if (statuses.length === 0) {
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
              d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-700 mb-2", children: "No Statuses Found" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-center mb-6 max-w-md", children: "Get started by adding your first stitching status like Cutting, Stitching, Finishing, etc." })
    ] });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "space-y-2", children: statuses.map((status) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-[oklch(0.269_0_0)]",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 flex-1", children: [
            /* @__PURE__ */ jsx(GripVertical, { className: "h-5 w-5 text-gray-400 cursor-move" }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "w-4 h-4 rounded-full",
                style: { backgroundColor: status.color }
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-medium", children: status.name }),
                /* @__PURE__ */ jsx(Badge, { variant: status.status === "active" ? "default" : "secondary", children: status.status })
              ] }),
              status.description && /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mt-1", children: status.description })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
            canEdit && /* @__PURE__ */ jsx(
              Button,
              {
                size: "sm",
                variant: "outline",
                onClick: () => setEditStatus(status),
                children: /* @__PURE__ */ jsx(Edit, { className: "h-4 w-4" })
              }
            ),
            canDelete && /* @__PURE__ */ jsx(
              Button,
              {
                size: "sm",
                variant: "outline",
                onClick: () => setDeleteStatus(status),
                children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
              }
            )
          ] })
        ]
      },
      status.id
    )) }),
    editStatus && /* @__PURE__ */ jsx(
      StitchingStatusEditModal,
      {
        status: editStatus,
        open: !!editStatus,
        onClose: () => setEditStatus(null),
        onSuccess: () => {
          setEditStatus(null);
          router.reload({ only: ["statuses"] });
        }
      }
    ),
    /* @__PURE__ */ jsx(
      StitchingStatusDeleteDialog,
      {
        status: deleteStatus,
        open: !!deleteStatus,
        onClose: () => setDeleteStatus(null),
        onSuccess: () => {
          setDeleteStatus(null);
          router.reload({ only: ["statuses"] });
        }
      }
    )
  ] });
}
function StitchingStatusCreateModal({ open, onClose }) {
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { children: [
    /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "Add Stitching Status" }) }),
    /* @__PURE__ */ jsx(StitchingStatusForm, { onSuccess: onClose })
  ] }) });
}
const breadcrumbs = [
  {
    title: "Stitching Statuses",
    href: "/stitching-statuses"
  }
];
function StitchingStatusesIndex({ canCreate = false }) {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [loading, setLoading] = useState(true);
  useState(() => {
    const timer = setTimeout(() => setLoading(false), 1e3);
    return () => clearTimeout(timer);
  });
  if (loading) {
    return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
      /* @__PURE__ */ jsx(Head, { title: "Stitching Statuses" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Skeleton, { className: "h-9 w-64" }),
            /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-80 mt-2" })
          ] }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-28" })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-24" }) }),
          /* @__PURE__ */ jsx(CardContent, { className: "space-y-4", children: [...Array(6)].map((_, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 border rounded-lg", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-4 rounded" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-24" }),
                /* @__PURE__ */ jsx(Skeleton, { className: "h-3 w-32 mt-1" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-16 rounded-full" }),
              /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-8" }),
              /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-8" })
            ] })
          ] }, i)) })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title: "Stitching Statuses" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: "Stitching Statuses" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-1", children: "Manage custom stitching progress tracking statuses" })
        ] }),
        canCreate && /* @__PURE__ */ jsxs(Button, { onClick: () => setShowCreateModal(true), children: [
          /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-2" }),
          "Add Status"
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Status List" }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(StitchingStatusList, { canEdit: canCreate, canDelete: canCreate }) })
      ] }),
      /* @__PURE__ */ jsx(
        StitchingStatusCreateModal,
        {
          open: showCreateModal,
          onClose: () => setShowCreateModal(false)
        }
      )
    ] })
  ] });
}
export {
  StitchingStatusesIndex as default
};
