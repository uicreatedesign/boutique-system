import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import { B as Badge, A as AppLayout } from "./app-layout-BNU1zxoI.js";
import { B as Button } from "./app-logo-icon-yMlft2ma.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-fzyh6nXg.js";
import { Edit, Trash2, Plus } from "lucide-react";
import axios from "axios";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription, e as DialogFooter, f as DialogClose } from "./dialog-DqkYa_S8.js";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { I as Input } from "./input-DRU_9M1j.js";
import { L as Label } from "./label-HS0cC0xf.js";
import { T as Textarea } from "./textarea-B9zFq2cw.js";
import { C as Checkbox } from "./checkbox-DbX0FY8V.js";
import { toast } from "sonner";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-DxUnHL7O.js";
import { S as Skeleton } from "./skeleton-GNTkvGbs.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-collapsible";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
import "./index-BSn8jdXv.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "@radix-ui/react-checkbox";
import "@radix-ui/react-tabs";
const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  }
});
api.interceptors.request.use((config) => {
  const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute("content");
  if (token) {
    config.headers["X-CSRF-TOKEN"] = token;
  }
  return config;
});
const createRole = (data) => api.post("/roles", data);
const updateRole = (id, data) => api.put(`/roles/${id}`, data);
const deleteRole = (id) => api.delete(`/roles/${id}`);
const getPermissions = () => api.get("/permissions");
const createPermission = (data) => api.post("/permissions", data);
const deletePermission = (id) => api.delete(`/permissions/${id}`);
const roleSchema = z.object({
  name: z.string().min(1, "Name is required").max(191),
  description: z.string().optional().or(z.literal("")),
  permissions: z.array(z.number()).optional()
});
function RoleForm({ onSubmit, loading, initialData }) {
  const [permissions, setPermissions] = useState([]);
  const [selectedPermissions, setSelectedPermissions] = useState(
    initialData?.permissions?.map((p) => p.id) || []
  );
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(roleSchema),
    defaultValues: {
      name: initialData?.name || "",
      description: initialData?.description || ""
    }
  });
  useEffect(() => {
    fetchPermissions();
  }, []);
  const fetchPermissions = async () => {
    try {
      const response = await getPermissions();
      setPermissions(response.data);
    } catch (error) {
      console.error("Failed to fetch permissions:", error);
    }
  };
  const handlePermissionToggle = (permId) => {
    setSelectedPermissions(
      (prev) => prev.includes(permId) ? prev.filter((id) => id !== permId) : [...prev, permId]
    );
  };
  const handleFormSubmit = (data) => {
    onSubmit({ ...data, permissions: selectedPermissions });
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(handleFormSubmit), className: "space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Name *" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          id: "name",
          ...register("name"),
          className: errors.name ? "border-red-500" : ""
        }
      ),
      errors.name && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.name.message })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "description", children: "Description" }),
      /* @__PURE__ */ jsx(
        Textarea,
        {
          id: "description",
          ...register("description"),
          className: errors.description ? "border-red-500" : ""
        }
      ),
      errors.description && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.description.message })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { children: "Permissions" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-2 mt-2 max-h-48 overflow-y-auto border rounded p-3", children: permissions.map((perm) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(
          Checkbox,
          {
            id: `perm-${perm.id}`,
            checked: selectedPermissions.includes(perm.id),
            onCheckedChange: () => handlePermissionToggle(perm.id)
          }
        ),
        /* @__PURE__ */ jsxs("label", { htmlFor: `perm-${perm.id}`, className: "text-sm cursor-pointer", children: [
          perm.name,
          " ",
          perm.description && `- ${perm.description}`
        ] })
      ] }, perm.id)) })
    ] }),
    /* @__PURE__ */ jsx(Button, { type: "submit", disabled: loading, className: "w-full", children: loading ? "Saving..." : "Save Role" })
  ] });
}
function RoleEditModal({ role, open, onClose, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      await updateRole(role.id, data);
      toast.success(`${role.name} updated successfully`);
      onSuccess();
    } catch (error) {
      console.error("Failed to update role:", error);
      toast.error("Failed to update role. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-md max-h-[90vh] overflow-y-auto", "aria-describedby": "role-edit-description", children: [
    /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "Edit Role" }) }),
    /* @__PURE__ */ jsx("div", { id: "role-edit-description", className: "sr-only", children: "Form to edit role information and permissions" }),
    /* @__PURE__ */ jsx(
      RoleForm,
      {
        onSubmit: handleSubmit,
        loading,
        initialData: role
      }
    )
  ] }) });
}
function RoleDeleteDialog({ role, open, onClose, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const handleDelete = async () => {
    if (!role) return;
    try {
      setLoading(true);
      await deleteRole(role.id);
      toast.success(`${role.name} has been successfully deleted`);
      onSuccess();
      onClose();
    } catch (error) {
      console.error("Failed to delete role:", error);
      toast.error("Failed to delete role. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { "aria-describedby": "delete-role-description", children: [
    /* @__PURE__ */ jsx(DialogTitle, { children: "Are you sure you want to delete this role?" }),
    /* @__PURE__ */ jsxs(DialogDescription, { id: "delete-role-description", children: [
      "Once deleted, ",
      role?.name,
      " will be permanently removed. This action cannot be undone."
    ] }),
    /* @__PURE__ */ jsxs(DialogFooter, { className: "gap-2", children: [
      /* @__PURE__ */ jsx(DialogClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "secondary", children: "Cancel" }) }),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "destructive",
          disabled: loading,
          onClick: handleDelete,
          children: loading ? "Deleting..." : "Delete Role"
        }
      )
    ] })
  ] }) });
}
function RoleTable({ roles }) {
  const [editRole, setEditRole] = useState(null);
  const [deleteRole2, setDeleteRole] = useState(null);
  if (!roles || roles.length === 0) {
    return /* @__PURE__ */ jsx("div", { className: "text-center py-4", children: "No roles found" });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Name" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Description" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Permissions" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: Array.isArray(roles) && roles.map((role) => /* @__PURE__ */ jsxs("tr", { className: "border-b hover:bg-gray-50 dark:hover:bg-[oklch(0.269_0_0)]", children: [
        /* @__PURE__ */ jsx("td", { className: "p-4 font-medium", children: role.name }),
        /* @__PURE__ */ jsx("td", { className: "p-4 text-sm text-gray-600", children: role.description || "-" }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: role.permissions.map((perm) => /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: perm.name }, perm.id)) }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              onClick: () => setEditRole(role),
              children: /* @__PURE__ */ jsx(Edit, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              onClick: () => setDeleteRole(role),
              children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
            }
          )
        ] }) })
      ] }, role.id)) })
    ] }) }),
    editRole && /* @__PURE__ */ jsx(
      RoleEditModal,
      {
        role: editRole,
        open: !!editRole,
        onClose: () => setEditRole(null),
        onSuccess: () => {
          setEditRole(null);
          window.location.reload();
        }
      }
    ),
    /* @__PURE__ */ jsx(
      RoleDeleteDialog,
      {
        role: deleteRole2,
        open: !!deleteRole2,
        onClose: () => setDeleteRole(null),
        onSuccess: () => {
          setDeleteRole(null);
          window.location.reload();
        }
      }
    )
  ] });
}
function RoleCreateModal({ open, onClose }) {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      await createRole(data);
      toast.success("Role created successfully");
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Failed to create role:", error);
      toast.error("Failed to create role. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-md max-h-[90vh] overflow-y-auto", "aria-describedby": "role-create-description", children: [
    /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "Add New Role" }) }),
    /* @__PURE__ */ jsx("div", { id: "role-create-description", className: "sr-only", children: "Form to create a new role with permissions" }),
    /* @__PURE__ */ jsx(RoleForm, { onSubmit: handleSubmit, loading })
  ] }) });
}
function PermissionManagement() {
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPermName, setNewPermName] = useState("");
  const [newPermDesc, setNewPermDesc] = useState("");
  const [creating, setCreating] = useState(false);
  const fetchPermissions = async () => {
    try {
      setLoading(true);
      const response = await getPermissions();
      setPermissions(response.data);
    } catch (error) {
      console.error("Failed to fetch permissions:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPermissions();
  }, []);
  const handleCreate = async () => {
    if (!newPermName.trim()) return;
    try {
      setCreating(true);
      await createPermission({ name: newPermName, description: newPermDesc });
      toast.success("Permission created successfully");
      setNewPermName("");
      setNewPermDesc("");
      fetchPermissions();
    } catch (error) {
      console.error("Failed to create permission:", error);
      toast.error("Failed to create permission");
    } finally {
      setCreating(false);
    }
  };
  const handleDelete = async (id, name) => {
    try {
      await deletePermission(id);
      toast.success(`${name} deleted successfully`);
      fetchPermissions();
    } catch (error) {
      console.error("Failed to delete permission:", error);
      toast.error("Failed to delete permission");
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "text-center py-4", children: "Loading..." });
  }
  return /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Permissions" }) }),
    /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx(
          Input,
          {
            placeholder: "Permission name",
            value: newPermName,
            onChange: (e) => setNewPermName(e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            placeholder: "Description (optional)",
            value: newPermDesc,
            onChange: (e) => setNewPermDesc(e.target.value)
          }
        ),
        /* @__PURE__ */ jsxs(Button, { onClick: handleCreate, disabled: creating || !newPermName.trim(), children: [
          /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-2" }),
          "Add"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
          /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Name" }),
          /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Description" }),
          /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: permissions.map((perm) => /* @__PURE__ */ jsxs("tr", { className: "border-b hover:bg-gray-50 dark:hover:bg-[oklch(0.269_0_0)]", children: [
          /* @__PURE__ */ jsx("td", { className: "p-4 font-medium", children: perm.name }),
          /* @__PURE__ */ jsx("td", { className: "p-4 text-sm text-gray-600", children: perm.description || "-" }),
          /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              onClick: () => handleDelete(perm.id, perm.name),
              children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
            }
          ) })
        ] }, perm.id)) })
      ] }) })
    ] })
  ] });
}
const breadcrumbs = [
  {
    title: "Roles & Permissions",
    href: "/roles"
  }
];
function RolesIndex({ roles, permissions }) {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [loading, setLoading] = useState(true);
  useState(() => {
    const timer = setTimeout(() => setLoading(false), 1e3);
    return () => clearTimeout(timer);
  });
  if (loading) {
    return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
      /* @__PURE__ */ jsx(Head, { title: "Roles & Permissions" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-4", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-9 w-64" }) }),
        /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex space-x-1 mb-6", children: [
            /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-16" }),
            /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-24" })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-16" }),
              /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-24" })
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 gap-4 pb-2 border-b", children: [
                /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-12" }),
                /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-20" }),
                /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-24" }),
                /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-16" })
              ] }),
              [...Array(5)].map((_, i) => /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 gap-4 py-3 border-b", children: [
                /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-16" }),
                /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-32" }),
                /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
                  /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-12" }),
                  /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-16" }),
                  /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-14" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-8" }),
                  /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-8" })
                ] })
              ] }, i))
            ] })
          ] })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title: "Roles & Permissions" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-4", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: "Roles & Permissions" }) }),
      /* @__PURE__ */ jsxs(Tabs, { defaultValue: "roles", className: "w-full", children: [
        /* @__PURE__ */ jsxs(TabsList, { children: [
          /* @__PURE__ */ jsx(TabsTrigger, { value: "roles", children: "Roles" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "permissions", children: "Permissions" })
        ] }),
        /* @__PURE__ */ jsx(TabsContent, { value: "roles", children: /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx(CardTitle, { children: "Roles" }),
            /* @__PURE__ */ jsxs(Button, { onClick: () => setShowCreateModal(true), children: [
              /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-2" }),
              "Add Role"
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(RoleTable, { roles }) })
        ] }) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "permissions", children: /* @__PURE__ */ jsx(PermissionManagement, { permissions }) })
      ] }),
      /* @__PURE__ */ jsx(
        RoleCreateModal,
        {
          open: showCreateModal,
          onClose: () => setShowCreateModal(false)
        }
      )
    ] })
  ] });
}
export {
  RolesIndex as default
};
