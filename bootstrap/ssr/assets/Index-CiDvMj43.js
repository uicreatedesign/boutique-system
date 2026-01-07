import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { router, Head, Link } from "@inertiajs/react";
import { A as AppLayout, B as Badge } from "./app-layout-BNU1zxoI.js";
import { C as Card, c as CardContent, a as CardHeader, b as CardTitle } from "./card-fzyh6nXg.js";
import { B as Button } from "./app-logo-icon-yMlft2ma.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-mdHWliXL.js";
import { Plus, Bell, CheckCheck, Mail, MailOpen, Filter, Check, Trash2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { D as Dialog, g as DialogTrigger, a as DialogContent, b as DialogHeader, c as DialogTitle, e as DialogFooter } from "./dialog-DqkYa_S8.js";
import { I as Input } from "./input-DRU_9M1j.js";
import { L as Label } from "./label-HS0cC0xf.js";
import { T as Textarea } from "./textarea-B9zFq2cw.js";
import { toast } from "sonner";
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
import "@radix-ui/react-label";
function NotificationCreateModal() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    type: "system_message",
    title: "",
    message: "",
    priority: "normal",
    color: "#3b82f6"
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    router.post("/notifications", formData, {
      onSuccess: () => {
        setOpen(false);
        setFormData({
          type: "system_message",
          title: "",
          message: "",
          priority: "normal",
          color: "#3b82f6"
        });
      }
    });
  };
  return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { size: "sm", children: [
      /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-2" }),
      "Create Notification"
    ] }) }),
    /* @__PURE__ */ jsxs(DialogContent, { children: [
      /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "Create New Notification" }) }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "type", children: "Type" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "type",
              value: formData.type,
              onChange: (e) => setFormData({ ...formData, type: e.target.value }),
              placeholder: "e.g., system_message, announcement",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "title", children: "Title" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "title",
              value: formData.title,
              onChange: (e) => setFormData({ ...formData, title: e.target.value }),
              placeholder: "Notification title",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "message", children: "Message" }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              id: "message",
              value: formData.message,
              onChange: (e) => setFormData({ ...formData, message: e.target.value }),
              placeholder: "Notification message",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "priority", children: "Priority" }),
          /* @__PURE__ */ jsxs(Select, { value: formData.priority, onValueChange: (value) => setFormData({ ...formData, priority: value }), children: [
            /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsx(SelectItem, { value: "low", children: "Low" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "normal", children: "Normal" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "high", children: "High" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "urgent", children: "Urgent" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "color", children: "Color" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "color",
              type: "color",
              value: formData.color,
              onChange: (e) => setFormData({ ...formData, color: e.target.value })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-2", children: [
          /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", onClick: () => setOpen(false), children: "Cancel" }),
          /* @__PURE__ */ jsx(Button, { type: "submit", children: "Create" })
        ] })
      ] })
    ] })
  ] });
}
function NotificationDeleteDialog({ notification, open, onClose, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const handleDelete = async () => {
    if (!notification) return;
    try {
      setLoading(true);
      router.delete(`/notifications/${notification.id}`, {
        onSuccess: () => {
          toast.success("Notification has been successfully deleted");
          onSuccess();
          onClose();
        },
        onError: () => {
          toast.error("Failed to delete notification. Please try again.");
        },
        onFinish: () => setLoading(false)
      });
    } catch (error) {
      console.error("Failed to delete notification:", error);
      setLoading(false);
    }
  };
  if (!notification) return null;
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-md", children: [
    /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "Delete Notification" }) }),
    /* @__PURE__ */ jsx("div", { className: "py-4", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
      'Are you sure you want to delete notification "',
      notification.title,
      '"? This action cannot be undone.'
    ] }) }),
    /* @__PURE__ */ jsxs(DialogFooter, { children: [
      /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: onClose, disabled: loading, children: "Cancel" }),
      /* @__PURE__ */ jsx(Button, { variant: "destructive", onClick: handleDelete, disabled: loading, children: loading ? "Deleting..." : "Delete" })
    ] })
  ] }) });
}
const breadcrumbs = [
  {
    title: "Notifications",
    href: "/notifications"
  }
];
function NotificationsIndex({ notifications, stats, types, filters }) {
  const [selectedFilter, setSelectedFilter] = useState(filters?.filter || "all");
  const [selectedType, setSelectedType] = useState(filters?.type || "all");
  const [deleteDialog, setDeleteDialog] = useState({ open: false, notification: null });
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    router.get("/notifications", { filter: filter === "all" ? void 0 : filter, type: selectedType === "all" ? void 0 : selectedType }, { preserveState: true });
  };
  const handleTypeChange = (type) => {
    setSelectedType(type);
    router.get("/notifications", { filter: selectedFilter === "all" ? void 0 : selectedFilter, type: type === "all" ? void 0 : type }, { preserveState: true });
  };
  const markAsRead = (id) => {
    router.patch(`/notifications/${id}/read`, {}, { preserveScroll: true });
  };
  const markAllAsRead = () => {
    router.patch("/notifications/mark-all-read", {}, { preserveScroll: true });
  };
  const openDeleteDialog = (notification) => {
    setDeleteDialog({ open: true, notification });
  };
  const closeDeleteDialog = () => {
    setDeleteDialog({ open: false, notification: null });
  };
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "urgent":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "high":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      case "normal":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "low":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title: "Notifications" }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-6 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Bell, { className: "h-6 w-6" }),
          /* @__PURE__ */ jsx("h1", { className: "text-2xl sm:text-3xl font-bold", children: "Notifications" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 w-full sm:w-auto", children: [
          /* @__PURE__ */ jsx(NotificationCreateModal, {}),
          stats.unread > 0 && /* @__PURE__ */ jsxs(Button, { onClick: markAllAsRead, variant: "outline", size: "sm", className: "flex-1 sm:flex-none", children: [
            /* @__PURE__ */ jsx(CheckCheck, { className: "h-4 w-4 mr-2" }),
            /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Mark All Read" }),
            /* @__PURE__ */ jsx("span", { className: "sm:hidden", children: "Mark Read" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Total" }),
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold", children: stats.total })
          ] }),
          /* @__PURE__ */ jsx(Bell, { className: "h-8 w-8 text-muted-foreground" })
        ] }) }) }),
        /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Unread" }),
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-blue-600", children: stats.unread })
          ] }),
          /* @__PURE__ */ jsx(Mail, { className: "h-8 w-8 text-blue-600" })
        ] }) }) }),
        /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Read" }),
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-green-600", children: stats.read })
          ] }),
          /* @__PURE__ */ jsx(MailOpen, { className: "h-8 w-8 text-green-600" })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx(CardTitle, { children: "Notifications" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Filter, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxs(Select, { value: selectedFilter, onValueChange: handleFilterChange, children: [
              /* @__PURE__ */ jsx(SelectTrigger, { className: "w-32", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsx(SelectItem, { value: "all", children: "All" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "unread", children: "Unread" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "read", children: "Read" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Select, { value: selectedType, onValueChange: handleTypeChange, children: [
              /* @__PURE__ */ jsx(SelectTrigger, { className: "w-40", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "All Types" }) }),
              /* @__PURE__ */ jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsx(SelectItem, { value: "all", children: "All Types" }),
                types?.map((type) => /* @__PURE__ */ jsx(SelectItem, { value: type.value, children: type.label }, type.value))
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: notifications.data.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "text-center py-8 text-muted-foreground", children: [
            /* @__PURE__ */ jsx(Bell, { className: "h-12 w-12 mx-auto mb-4 opacity-50" }),
            /* @__PURE__ */ jsx("p", { children: "No notifications found" })
          ] }) : notifications.data.map((notification) => /* @__PURE__ */ jsx(
            "div",
            {
              className: `p-4 border rounded-lg transition-colors ${notification.read_at ? "bg-gray-50 dark:bg-gray-900/50" : "bg-white dark:bg-gray-800 border-blue-200 dark:border-blue-800"}`,
              children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "w-2 h-2 rounded-full",
                        style: { backgroundColor: notification.color }
                      }
                    ),
                    /* @__PURE__ */ jsx("h3", { className: `font-medium ${!notification.read_at ? "font-semibold" : ""}`, children: notification.title }),
                    /* @__PURE__ */ jsx(Badge, { className: getPriorityColor(notification.priority), children: notification.priority }),
                    !notification.read_at && /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs", children: "New" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-2", children: notification.message }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: formatDistanceToNow(new Date(notification.created_at), { addSuffix: true }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 ml-4", children: [
                  !notification.read_at && /* @__PURE__ */ jsx(
                    Button,
                    {
                      onClick: () => markAsRead(notification.id),
                      variant: "ghost",
                      size: "sm",
                      children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      onClick: () => openDeleteDialog(notification),
                      variant: "ghost",
                      size: "sm",
                      className: "text-red-600 hover:text-red-700",
                      children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
                    }
                  )
                ] })
              ] })
            },
            notification.id
          )) }),
          notifications.meta?.last_page > 1 && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mt-8 pt-4 border-t", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground", children: [
              "Showing ",
              notifications.meta?.from,
              " to ",
              notifications.meta?.to,
              " of ",
              notifications.meta?.total,
              " notifications"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: notifications.links?.map((link, index) => /* @__PURE__ */ jsx(
              Link,
              {
                href: link.url || "#",
                className: `px-3 py-1 text-sm rounded ${link.active ? "bg-blue-600 text-white" : link.url ? "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700" : "bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-800 dark:text-gray-600"}`,
                dangerouslySetInnerHTML: { __html: link.label }
              },
              index
            )) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      NotificationDeleteDialog,
      {
        notification: deleteDialog.notification,
        open: deleteDialog.open,
        onClose: closeDeleteDialog,
        onSuccess: () => window.location.reload()
      }
    )
  ] });
}
export {
  NotificationsIndex as default
};
