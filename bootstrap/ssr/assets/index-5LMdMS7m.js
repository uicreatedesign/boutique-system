import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { usePage, Head, router } from "@inertiajs/react";
import { B as Badge, A as AppLayout } from "./app-layout-BNU1zxoI.js";
import { B as Button } from "./app-logo-icon-yMlft2ma.js";
import { I as Input } from "./input-DRU_9M1j.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-fzyh6nXg.js";
import axios from "axios";
import { C as Checkbox } from "./checkbox-DbX0FY8V.js";
import { Trash2, Eye, Edit, Plus, Search } from "lucide-react";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription, e as DialogFooter, f as DialogClose } from "./dialog-DqkYa_S8.js";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { L as Label } from "./label-HS0cC0xf.js";
import { T as Textarea } from "./textarea-B9zFq2cw.js";
import { toast } from "sonner";
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
import "@radix-ui/react-checkbox";
import "@radix-ui/react-label";
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
const getCustomers = (params) => api.get("/customers", { params });
const createCustomer = (data) => api.post("/customers", data);
const updateCustomer = (id, data) => api.put(`/customers/${id}`, data);
const deleteCustomer = (id) => api.delete(`/customers/${id}`);
const getCustomer = (id) => api.get(`/customers/${id}`);
const getCustomerOrders = (id, params) => api.get(`/customers/${id}/orders`, { params });
const customerSchema = z.object({
  name: z.string().min(1, "Name is required").max(191),
  phone: z.string().max(20).optional().or(z.literal("")),
  email: z.string().email("Invalid email").max(191).optional().or(z.literal("")),
  address: z.string().optional().or(z.literal("")),
  dob: z.string().optional().or(z.literal("")),
  create_user_account: z.boolean().optional(),
  user_password: z.string().min(6, "Password must be at least 6 characters").optional().or(z.literal(""))
});
function CustomerForm({ onSubmit, loading, initialData }) {
  const [createUserAccount, setCreateUserAccount] = useState(initialData?.create_user_account || false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    resolver: zodResolver(customerSchema),
    defaultValues: initialData
  });
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-4", children: [
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
      /* @__PURE__ */ jsx(Label, { htmlFor: "phone", children: "Phone" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          id: "phone",
          ...register("phone"),
          className: errors.phone ? "border-red-500" : ""
        }
      ),
      errors.phone && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.phone.message })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          id: "email",
          type: "email",
          ...register("email"),
          className: errors.email ? "border-red-500" : ""
        }
      ),
      errors.email && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.email.message })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "address", children: "Address" }),
      /* @__PURE__ */ jsx(
        Textarea,
        {
          id: "address",
          ...register("address"),
          className: errors.address ? "border-red-500" : ""
        }
      ),
      errors.address && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.address.message })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "dob", children: "Date of Birth" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          id: "dob",
          type: "date",
          ...register("dob"),
          className: errors.dob ? "border-red-500" : ""
        }
      ),
      errors.dob && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.dob.message })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ jsx(
        Checkbox,
        {
          id: "create_user_account",
          checked: createUserAccount,
          onCheckedChange: (checked) => {
            setCreateUserAccount(!!checked);
            setValue("create_user_account", !!checked);
          }
        }
      ),
      /* @__PURE__ */ jsx(Label, { htmlFor: "create_user_account", children: "Create User Account" })
    ] }),
    createUserAccount && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "user_password", children: "Password" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          id: "user_password",
          type: "password",
          placeholder: "Enter password",
          ...register("user_password"),
          className: errors.user_password ? "border-red-500" : ""
        }
      ),
      errors.user_password && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.user_password.message }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mt-1", children: "Customer can login with email and password" })
    ] }),
    /* @__PURE__ */ jsx(Button, { type: "submit", disabled: loading, className: "w-full", children: loading ? "Saving..." : "Save Customer" })
  ] });
}
function CustomerEditModal({ customer, open, onClose, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      await updateCustomer(customer.id, data);
      toast.success(`${customer.name} updated successfully`);
      onSuccess();
    } catch (error) {
      console.error("Failed to update customer:", error);
      toast.error("Failed to update customer. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-md", "aria-describedby": "customer-edit-description", children: [
    /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "Edit Customer" }) }),
    /* @__PURE__ */ jsx("div", { id: "customer-edit-description", className: "sr-only", children: "Form to edit customer information" }),
    /* @__PURE__ */ jsx(
      CustomerForm,
      {
        onSubmit: handleSubmit,
        loading,
        initialData: customer
      }
    )
  ] }) });
}
function CustomerDetailModal({ customer, open, onClose }) {
  const [customerDetail, setCustomerDetail] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (open && customer) {
      fetchCustomerDetail();
      fetchCustomerOrders();
    }
  }, [open, customer]);
  const fetchCustomerDetail = async () => {
    try {
      const response = await getCustomer(customer.id);
      setCustomerDetail(response.data.data);
    } catch (error) {
      console.error("Failed to fetch customer detail:", error);
    }
  };
  const fetchCustomerOrders = async () => {
    try {
      const response = await getCustomerOrders(customer.id);
      setOrders(response.data.data);
    } catch (error) {
      console.error("Failed to fetch customer orders:", error);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-2xl max-h-[80vh] overflow-y-auto", "aria-describedby": "customer-detail-description", children: [
    /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "Customer Details" }) }),
    /* @__PURE__ */ jsx("div", { id: "customer-detail-description", className: "sr-only", children: "Detailed view of customer information and order history" }),
    loading ? /* @__PURE__ */ jsx("div", { className: "text-center py-4", children: "Loading..." }) : /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Customer Information" }) }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Name:" }),
            " ",
            customerDetail?.name
          ] }),
          customerDetail?.phone && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Phone:" }),
            " ",
            customerDetail.phone
          ] }),
          customerDetail?.email && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Email:" }),
            " ",
            customerDetail.email
          ] }),
          customerDetail?.address && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Address:" }),
            " ",
            customerDetail.address
          ] }),
          customerDetail?.dob && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Date of Birth:" }),
            " ",
            customerDetail.dob
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Total Orders:" }),
            " ",
            /* @__PURE__ */ jsx(Badge, { children: customerDetail?.orders_count })
          ] }),
          customerDetail?.last_order_at && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Last Order:" }),
            " ",
            new Date(customerDetail.last_order_at).toLocaleDateString()
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Recent Orders" }) }),
        /* @__PURE__ */ jsx(CardContent, { children: orders.length > 0 ? /* @__PURE__ */ jsx("div", { className: "space-y-2", children: orders.map((order) => /* @__PURE__ */ jsxs("div", { className: "p-3 border rounded", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxs("span", { children: [
              "Order #",
              order.id
            ] }),
            /* @__PURE__ */ jsx(Badge, { variant: "outline", children: order.status })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: new Date(order.created_at).toLocaleDateString() })
        ] }, order.id)) }) : /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "No orders found" }) })
      ] })
    ] })
  ] }) });
}
function CustomerDeleteDialog({ customer, open, onClose, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const handleDelete = async () => {
    if (!customer) return;
    try {
      setLoading(true);
      await deleteCustomer(customer.id);
      toast.success(`${customer.name} has been successfully deleted`);
      onSuccess();
      onClose();
    } catch (error) {
      console.error("Failed to delete customer:", error);
      toast.error("Failed to delete customer. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { "aria-describedby": "delete-customer-description", children: [
    /* @__PURE__ */ jsx(DialogTitle, { children: "Are you sure you want to delete this customer?" }),
    /* @__PURE__ */ jsxs(DialogDescription, { id: "delete-customer-description", children: [
      "Once deleted, all of ",
      customer?.name,
      "'s data will be permanently removed. This action cannot be undone."
    ] }),
    /* @__PURE__ */ jsxs(DialogFooter, { className: "gap-2", children: [
      /* @__PURE__ */ jsx(DialogClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "secondary", children: "Cancel" }) }),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "destructive",
          disabled: loading,
          onClick: handleDelete,
          children: loading ? "Deleting..." : "Delete Customer"
        }
      )
    ] })
  ] }) });
}
function CustomerBulkDeleteDialog({
  open,
  selectedIds,
  onClose,
  onSuccess
}) {
  const [loading, setLoading] = useState(false);
  const handleDelete = async () => {
    try {
      setLoading(true);
      await axios.post("/api/customers/bulk-delete", { ids: selectedIds });
      toast.success("Customers deleted successfully");
      onSuccess();
    } catch (error) {
      toast.error("Failed to delete customers");
      console.error("Failed to delete customers:", error);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { children: [
    /* @__PURE__ */ jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxs(DialogTitle, { children: [
        "Delete ",
        selectedIds.length,
        " Customers?"
      ] }),
      /* @__PURE__ */ jsx(DialogDescription, { children: "This action cannot be undone. All selected customers will be permanently deleted." })
    ] }),
    /* @__PURE__ */ jsxs(DialogFooter, { children: [
      /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: onClose, disabled: loading, children: "Cancel" }),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "destructive",
          onClick: handleDelete,
          disabled: loading,
          children: loading ? "Deleting..." : "Delete"
        }
      )
    ] })
  ] }) });
}
function CustomerTable({ search }) {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editCustomer, setEditCustomer] = useState(null);
  const [detailCustomer, setDetailCustomer] = useState(null);
  const [deleteCustomer2, setDeleteCustomer] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [total, setTotal] = useState(0);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [selectedIds, setSelectedIds] = useState([]);
  const [showBulkDelete, setShowBulkDelete] = useState(false);
  const fetchCustomers = async (page = 1, pageSize = perPage) => {
    try {
      setLoading(true);
      const response = await getCustomers({ search, page, per_page: pageSize });
      const data = response.data.data || [];
      const meta = response.data.meta || response.data;
      setCustomers(data);
      setCurrentPage(meta.current_page || 1);
      setTotalPages(meta.last_page || 1);
      setTotal(meta.total || 0);
      setFrom(meta.from || 0);
      setTo(meta.to || 0);
      setSelectedIds([]);
    } catch (error) {
      console.error("Failed to fetch customers:", error);
      setCustomers([]);
      setTotal(0);
      setFrom(0);
      setTo(0);
      setTotalPages(0);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCustomers(1, perPage);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPage(1);
      fetchCustomers(1, perPage);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);
  useEffect(() => {
    if (perPage !== 10) {
      fetchCustomers(1, perPage);
    }
  }, [perPage]);
  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchCustomers(page, perPage);
  };
  const handlePerPageChange = (newPerPage) => {
    setPerPage(newPerPage);
    setCurrentPage(1);
  };
  const toggleSelectAll = () => {
    if (selectedIds.length === customers.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(customers.map((c) => c.id));
    }
  };
  const toggleSelect = (id) => {
    setSelectedIds(
      (prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };
  if (loading && customers.length === 0) {
    return /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
        /* @__PURE__ */ jsx("th", { className: "text-left p-4 w-12", children: /* @__PURE__ */ jsx(Checkbox, { disabled: true }) }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Name" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Contact" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Orders" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Last Order" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-32" }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-28" }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-8" }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-24" }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx("div", { className: "flex space-x-2", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-9 w-9" }) }) })
      ] }, i)) })
    ] }) });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    selectedIds.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mb-4 p-4 bg-blue-50 rounded-lg flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium", children: [
        selectedIds.length,
        " customer(s) selected"
      ] }),
      /* @__PURE__ */ jsxs(
        Button,
        {
          size: "sm",
          variant: "destructive",
          onClick: () => setShowBulkDelete(true),
          children: [
            /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4 mr-2" }),
            "Delete Selected"
          ]
        }
      )
    ] }),
    customers.length === 0 && !loading ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center py-16 px-4", children: [
      /* @__PURE__ */ jsx("svg", { className: "w-48 h-48 mb-6 text-gray-300", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1, d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-700 mb-2", children: "No Customers Found" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-center mb-6 max-w-md", children: search ? "No customers match your search criteria." : "Get started by adding your first customer." })
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
          /* @__PURE__ */ jsx("th", { className: "text-left p-4 w-12", children: /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: selectedIds.length === customers.length && customers.length > 0,
              onCheckedChange: toggleSelectAll
            }
          ) }),
          /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Name" }),
          /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Contact" }),
          /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Orders" }),
          /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Last Order" }),
          /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: customers.map((customer) => /* @__PURE__ */ jsxs("tr", { className: "border-b hover:bg-gray-50 dark:hover:bg-[oklch(0.269_0_0)]", children: [
          /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: selectedIds.includes(customer.id),
              onCheckedChange: () => toggleSelect(customer.id)
            }
          ) }),
          /* @__PURE__ */ jsx("td", { className: "p-4 font-medium", children: customer.name }),
          /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            customer.phone && /* @__PURE__ */ jsx("div", { className: "text-sm", children: customer.phone }),
            customer.email && /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: customer.email })
          ] }) }),
          /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: customer.orders_count }) }),
          /* @__PURE__ */ jsx("td", { className: "p-4 text-sm text-gray-600", children: customer.last_order_at ? new Date(customer.last_order_at).toLocaleDateString() : "Never" }),
          /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
            /* @__PURE__ */ jsx(Button, { size: "sm", variant: "outline", onClick: () => setDetailCustomer(customer), children: /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsx(Button, { size: "sm", variant: "outline", onClick: () => setEditCustomer(customer), children: /* @__PURE__ */ jsx(Edit, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsx(Button, { size: "sm", variant: "outline", onClick: () => setDeleteCustomer(customer), children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }) })
          ] }) })
        ] }, customer.id)) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(
        Pagination,
        {
          currentPage,
          totalPages,
          onPageChange: handlePageChange,
          showingFrom: from,
          showingTo: to,
          total,
          perPage,
          onPerPageChange: handlePerPageChange
        }
      ) })
    ] }),
    editCustomer && /* @__PURE__ */ jsx(
      CustomerEditModal,
      {
        customer: editCustomer,
        open: !!editCustomer,
        onClose: () => setEditCustomer(null),
        onSuccess: () => {
          setEditCustomer(null);
          fetchCustomers(currentPage);
        }
      }
    ),
    detailCustomer && /* @__PURE__ */ jsx(
      CustomerDetailModal,
      {
        customer: detailCustomer,
        open: !!detailCustomer,
        onClose: () => setDetailCustomer(null)
      }
    ),
    /* @__PURE__ */ jsx(
      CustomerDeleteDialog,
      {
        customer: deleteCustomer2,
        open: !!deleteCustomer2,
        onClose: () => setDeleteCustomer(null),
        onSuccess: () => {
          setDeleteCustomer(null);
          fetchCustomers(currentPage);
        }
      }
    ),
    /* @__PURE__ */ jsx(
      CustomerBulkDeleteDialog,
      {
        open: showBulkDelete,
        selectedIds,
        onClose: () => setShowBulkDelete(false),
        onSuccess: () => {
          setShowBulkDelete(false);
          fetchCustomers(currentPage);
        }
      }
    )
  ] });
}
function CustomerCreateModal({ open, onClose }) {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      console.log("Submitting customer data:", data);
      const response = await createCustomer(data);
      console.log("Customer created successfully:", response);
      toast.success("Customer created successfully");
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Failed to create customer:", error);
      console.error("Error response:", error.response?.data);
      if (error.response?.status === 422) {
        const errors = error.response.data.errors;
        const errorMessages = Object.values(errors).flat().join(", ");
        toast.error(`Validation error: ${errorMessages}`);
      } else {
        toast.error("Failed to create customer. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-md", "aria-describedby": "customer-create-description", children: [
    /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "Add New Customer" }) }),
    /* @__PURE__ */ jsx("div", { id: "customer-create-description", className: "sr-only", children: "Form to create a new customer" }),
    /* @__PURE__ */ jsx(CustomerForm, { onSubmit: handleSubmit, loading })
  ] }) });
}
const breadcrumbs = [
  {
    title: "Customers",
    href: "/customers"
  }
];
function CustomersIndex() {
  const { url } = usePage();
  const urlParams = new URLSearchParams(window.location.search);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [search, setSearch] = useState(urlParams.get("search") || "");
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchParam = params.get("search");
    if (searchParam) {
      setSearch(searchParam);
    }
  }, [url]);
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title: "Customers" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: "Customers" }),
        /* @__PURE__ */ jsxs(Button, { onClick: () => setShowCreateModal(true), children: [
          /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-2" }),
          "Add Customer"
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx(CardTitle, { children: "Customer List" }),
          /* @__PURE__ */ jsxs("div", { className: "relative max-w-sm", children: [
            /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                placeholder: "Search customers...",
                value: search,
                onChange: (e) => {
                  setSearch(e.target.value);
                  const params = new URLSearchParams(window.location.search);
                  if (e.target.value) {
                    params.set("search", e.target.value);
                  } else {
                    params.delete("search");
                  }
                  router.get("/customers", Object.fromEntries(params), { preserveState: true, replace: true });
                },
                className: "pl-10"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(CustomerTable, { search }) })
      ] }),
      /* @__PURE__ */ jsx(
        CustomerCreateModal,
        {
          open: showCreateModal,
          onClose: () => setShowCreateModal(false)
        }
      )
    ] })
  ] });
}
export {
  CustomersIndex as default
};
