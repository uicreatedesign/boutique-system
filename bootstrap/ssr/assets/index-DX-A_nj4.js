import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import { B as Badge, a as Avatar, c as AvatarFallback, A as AppLayout } from "./app-layout-BNU1zxoI.js";
import { B as Button } from "./app-logo-icon-yMlft2ma.js";
import { I as Input } from "./input-DRU_9M1j.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-fzyh6nXg.js";
import { Eye, Edit, Trash2, Plus, Search } from "lucide-react";
import axios from "axios";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, e as DialogFooter } from "./dialog-DqkYa_S8.js";
import { L as Label } from "./label-HS0cC0xf.js";
import { C as Checkbox } from "./checkbox-DbX0FY8V.js";
import { P as Pagination } from "./pagination-DvZWC5ih.js";
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
import "./select-mdHWliXL.js";
import "@radix-ui/react-select";
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
const getUsers = (params) => api.get("/users", { params });
const createUser = (data) => api.post("/users", data);
const updateUser = (id, data) => api.put(`/users/${id}`, data);
const deleteUser = (id) => api.delete(`/users/${id}`);
const getRoles = () => api.get("/roles-list");
function UserForm({ initialData, onSubmit, loading, isEdit }) {
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    email: initialData?.email || "",
    password: "",
    role_ids: initialData?.roles?.map((r) => r.id) || []
  });
  const [roles, setRoles] = useState([]);
  useEffect(() => {
    fetchRoles();
  }, []);
  const fetchRoles = async () => {
    try {
      const response = await getRoles();
      setRoles(response.data);
    } catch (error) {
      console.error("Failed to fetch roles:", error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  const handleRoleChange = (roleId, checked) => {
    setFormData((prev) => ({
      ...prev,
      role_ids: checked ? [...prev.role_ids, roleId] : prev.role_ids.filter((id) => id !== roleId)
    }));
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Name" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          id: "name",
          value: formData.name,
          onChange: (e) => setFormData((prev) => ({ ...prev, name: e.target.value })),
          required: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          id: "email",
          type: "email",
          value: formData.email,
          onChange: (e) => setFormData((prev) => ({ ...prev, email: e.target.value })),
          required: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(Label, { htmlFor: "password", children: [
        "Password ",
        isEdit && "(leave blank to keep current)"
      ] }),
      /* @__PURE__ */ jsx(
        Input,
        {
          id: "password",
          type: "password",
          value: formData.password,
          onChange: (e) => setFormData((prev) => ({ ...prev, password: e.target.value })),
          required: !isEdit
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { children: "Roles" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-2 mt-2", children: roles.map((role) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(
          Checkbox,
          {
            id: `role-${role.id}`,
            checked: formData.role_ids.includes(role.id),
            onCheckedChange: (checked) => handleRoleChange(role.id, checked)
          }
        ),
        /* @__PURE__ */ jsxs(Label, { htmlFor: `role-${role.id}`, className: "text-sm", children: [
          role.name,
          " - ",
          role.description
        ] })
      ] }, role.id)) })
    ] }),
    /* @__PURE__ */ jsx(Button, { type: "submit", disabled: loading, className: "w-full", children: loading ? "Saving..." : isEdit ? "Update User" : "Create User" })
  ] });
}
function UserEditModal({ user, open, onClose, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      await updateUser(user.id, data);
      onSuccess();
    } catch (error) {
      console.error("Failed to update user:", error);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-md", children: [
    /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "Edit User" }) }),
    /* @__PURE__ */ jsx(
      UserForm,
      {
        initialData: user,
        onSubmit: handleSubmit,
        loading,
        isEdit: true
      }
    )
  ] }) });
}
function UserDetailModal({ user, open, onClose }) {
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-md", children: [
    /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "User Details" }) }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-gray-500", children: "Name" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm", children: user.name })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-gray-500", children: "Email" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm", children: user.email })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-gray-500", children: "Roles" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1 mt-1", children: user.roles?.map((role) => /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: role.name }, role.id)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-gray-500", children: "Created" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm", children: new Date(user.created_at).toLocaleDateString() })
      ] })
    ] })
  ] }) });
}
function UserDeleteDialog({ user, open, onClose, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const handleDelete = async () => {
    if (!user) return;
    try {
      setLoading(true);
      await deleteUser(user.id);
      onSuccess();
    } catch (error) {
      console.error("Failed to delete user:", error);
    } finally {
      setLoading(false);
    }
  };
  if (!user) return null;
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-md", children: [
    /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "Delete User" }) }),
    /* @__PURE__ */ jsx("div", { className: "py-4", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
      'Are you sure you want to delete user "',
      user.name,
      '"? This action cannot be undone.'
    ] }) }),
    /* @__PURE__ */ jsxs(DialogFooter, { children: [
      /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: onClose, disabled: loading, children: "Cancel" }),
      /* @__PURE__ */ jsx(Button, { variant: "destructive", onClick: handleDelete, disabled: loading, children: loading ? "Deleting..." : "Delete" })
    ] })
  ] }) });
}
function UserTable({ search }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editUser, setEditUser] = useState(null);
  const [detailUser, setDetailUser] = useState(null);
  const [deleteUser2, setDeleteUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const fetchUsers = async (page = 1) => {
    try {
      setLoading(true);
      const response = await getUsers({ search, page });
      setUsers(response.data.data);
      setCurrentPage(response.data.current_page);
      setTotalPages(response.data.last_page);
      setTotal(response.data.total);
      setFrom(response.data.from || 0);
      setTo(response.data.to || 0);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPage(1);
      fetchUsers(1);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);
  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchUsers(page);
  };
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Name" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Email" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Roles" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Created" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-10 rounded-full" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-32" })
        ] }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-40" }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-20" }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-24" }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
          /* @__PURE__ */ jsx(Skeleton, { className: "h-9 w-9" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-9 w-9" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-9 w-9" })
        ] }) })
      ] }, i)) })
    ] }) });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Name" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Email" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Roles" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Created" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: users.map((user) => /* @__PURE__ */ jsxs("tr", { className: "border-b hover:bg-gray-50 dark:hover:bg-[oklch(0.269_0_0)]", children: [
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Avatar, { children: user.avatar ? /* @__PURE__ */ jsx("img", { src: `/storage/${user.avatar}`, alt: user.name, className: "h-full w-full object-cover" }) : /* @__PURE__ */ jsx(AvatarFallback, { children: user.name.charAt(0).toUpperCase() }) }),
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: user.name })
        ] }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: user.email }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: user.roles?.map((role) => /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: role.name }, role.id)) }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4 text-sm text-gray-600", children: new Date(user.created_at).toLocaleDateString() }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              onClick: () => setDetailUser(user),
              children: /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              onClick: () => setEditUser(user),
              children: /* @__PURE__ */ jsx(Edit, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              onClick: () => setDeleteUser(user),
              children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
            }
          )
        ] }) })
      ] }, user.id)) })
    ] }) }),
    /* @__PURE__ */ jsx(
      Pagination,
      {
        currentPage,
        totalPages,
        onPageChange: handlePageChange,
        showingFrom: from,
        showingTo: to,
        total
      }
    ),
    editUser && /* @__PURE__ */ jsx(
      UserEditModal,
      {
        user: editUser,
        open: !!editUser,
        onClose: () => setEditUser(null),
        onSuccess: () => {
          setEditUser(null);
          fetchUsers(currentPage);
        }
      }
    ),
    detailUser && /* @__PURE__ */ jsx(
      UserDetailModal,
      {
        user: detailUser,
        open: !!detailUser,
        onClose: () => setDetailUser(null)
      }
    ),
    /* @__PURE__ */ jsx(
      UserDeleteDialog,
      {
        user: deleteUser2,
        open: !!deleteUser2,
        onClose: () => setDeleteUser(null),
        onSuccess: () => {
          setDeleteUser(null);
          fetchUsers(currentPage);
        }
      }
    )
  ] });
}
function UserCreateModal({ open, onClose, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      await createUser(data);
      onSuccess();
    } catch (error) {
      console.error("Failed to create user:", error);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-md", children: [
    /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "Create New User" }) }),
    /* @__PURE__ */ jsx(UserForm, { onSubmit: handleSubmit, loading })
  ] }) });
}
const breadcrumbs = [
  {
    title: "Users",
    href: "/users"
  }
];
function UsersIndex() {
  const [search, setSearch] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title: "Users" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: "Users" }),
        /* @__PURE__ */ jsxs(Button, { onClick: () => setShowCreateModal(true), children: [
          /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-2" }),
          "Add User"
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx(CardTitle, { children: "User List" }),
          /* @__PURE__ */ jsxs("div", { className: "relative max-w-sm", children: [
            /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                placeholder: "Search users...",
                value: search,
                onChange: (e) => setSearch(e.target.value),
                className: "pl-10"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(UserTable, { search }) })
      ] }),
      /* @__PURE__ */ jsx(
        UserCreateModal,
        {
          open: showCreateModal,
          onClose: () => setShowCreateModal(false),
          onSuccess: () => setShowCreateModal(false)
        }
      )
    ] })
  ] });
}
export {
  UsersIndex as default
};
