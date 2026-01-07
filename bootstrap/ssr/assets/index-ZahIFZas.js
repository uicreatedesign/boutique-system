import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { usePage, Head, router } from "@inertiajs/react";
import { B as Badge, A as AppLayout } from "./app-layout-BNU1zxoI.js";
import { B as Button } from "./app-logo-icon-yMlft2ma.js";
import { I as Input } from "./input-DRU_9M1j.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-fzyh6nXg.js";
import axios from "axios";
import { Eye, Edit, Trash2, Plus, Search } from "lucide-react";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription, e as DialogFooter, f as DialogClose } from "./dialog-DqkYa_S8.js";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { L as Label } from "./label-HS0cC0xf.js";
import { T as Textarea } from "./textarea-B9zFq2cw.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-mdHWliXL.js";
import { C as Checkbox } from "./checkbox-DbX0FY8V.js";
import { toast } from "sonner";
import { S as Skeleton } from "./skeleton-GNTkvGbs.js";
import { P as Pagination } from "./pagination-DvZWC5ih.js";
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
import "@radix-ui/react-select";
import "@radix-ui/react-checkbox";
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
const getTailors = (params) => api.get("/tailors", { params });
const createTailor = (data) => api.post("/tailors", data);
const updateTailor = (id, data) => api.put(`/tailors/${id}`, data);
const deleteTailor = (id) => api.delete(`/tailors/${id}`);
const getTailor = (id) => api.get(`/tailors/${id}`);
const tailorSchema = z.object({
  name: z.string().min(1, "Name is required").max(191),
  phone: z.string().min(1, "Phone is required").max(20),
  email: z.string().email("Invalid email").max(191).optional().or(z.literal("")),
  skill_level: z.enum(["beginner", "intermediate", "expert"]),
  address: z.string().optional().or(z.literal("")),
  status: z.enum(["active", "inactive", "on_leave"]),
  hourly_rate: z.string().optional().or(z.literal("")),
  specialization: z.string().optional().or(z.literal("")),
  join_date: z.string().optional().or(z.literal("")),
  create_user_account: z.boolean().optional(),
  password: z.string().min(8).optional().or(z.literal(""))
});
function TailorForm({ onSubmit, loading, initialData }) {
  const { appSettings } = usePage().props;
  const currencySymbol = appSettings?.currency_symbol || "$";
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(tailorSchema),
    defaultValues: {
      skill_level: "intermediate",
      status: "active",
      create_user_account: false,
      ...initialData
    }
  });
  const skillLevel = watch("skill_level");
  const status = watch("status");
  const createUserAccount = watch("create_user_account");
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
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
        /* @__PURE__ */ jsx(Label, { htmlFor: "phone", children: "Phone *" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "phone",
            ...register("phone"),
            className: errors.phone ? "border-red-500" : ""
          }
        ),
        errors.phone && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.phone.message })
      ] })
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
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "skill_level", children: "Skill Level *" }),
        /* @__PURE__ */ jsxs(Select, { value: skillLevel, onValueChange: (value) => setValue("skill_level", value), children: [
          /* @__PURE__ */ jsx(SelectTrigger, { className: errors.skill_level ? "border-red-500" : "", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select skill level" }) }),
          /* @__PURE__ */ jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsx(SelectItem, { value: "beginner", children: "Beginner" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "intermediate", children: "Intermediate" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "expert", children: "Expert" })
          ] })
        ] }),
        errors.skill_level && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.skill_level.message })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "status", children: "Status *" }),
        /* @__PURE__ */ jsxs(Select, { value: status, onValueChange: (value) => setValue("status", value), children: [
          /* @__PURE__ */ jsx(SelectTrigger, { className: errors.status ? "border-red-500" : "", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select status" }) }),
          /* @__PURE__ */ jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsx(SelectItem, { value: "active", children: "Active" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "inactive", children: "Inactive" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "on_leave", children: "On Leave" })
          ] })
        ] }),
        errors.status && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.status.message })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(Label, { htmlFor: "hourly_rate", children: [
          "Hourly Rate (",
          currencySymbol,
          ")"
        ] }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "hourly_rate",
            type: "number",
            step: "0.01",
            ...register("hourly_rate"),
            className: errors.hourly_rate ? "border-red-500" : ""
          }
        ),
        errors.hourly_rate && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.hourly_rate.message })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "join_date", children: "Join Date" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "join_date",
            type: "date",
            ...register("join_date"),
            className: errors.join_date ? "border-red-500" : ""
          }
        ),
        errors.join_date && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.join_date.message })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "specialization", children: "Specialization" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          id: "specialization",
          placeholder: "e.g., Wedding dresses, Suits, Alterations",
          ...register("specialization"),
          className: errors.specialization ? "border-red-500" : ""
        }
      ),
      errors.specialization && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.specialization.message })
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
    !initialData && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 border-t pt-4", children: [
        /* @__PURE__ */ jsx(
          Checkbox,
          {
            id: "create_user_account",
            checked: createUserAccount,
            onCheckedChange: (checked) => setValue("create_user_account", checked)
          }
        ),
        /* @__PURE__ */ jsx("label", { htmlFor: "create_user_account", className: "text-sm cursor-pointer", children: "Create user account for tailor dashboard access" })
      ] }),
      createUserAccount && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "Password *" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "password",
            type: "password",
            ...register("password"),
            className: errors.password ? "border-red-500" : ""
          }
        ),
        errors.password && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.password.message })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Button, { type: "submit", disabled: loading, className: "w-full", children: loading ? "Saving..." : "Save Tailor" })
  ] });
}
function TailorEditModal({ tailor, open, onClose, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      await updateTailor(tailor.id, data);
      toast.success(`${tailor.name} updated successfully`);
      onSuccess();
    } catch (error) {
      console.error("Failed to update tailor:", error);
      toast.error("Failed to update tailor. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-2xl max-h-[90vh] overflow-y-auto", "aria-describedby": "tailor-edit-description", children: [
    /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "Edit Tailor" }) }),
    /* @__PURE__ */ jsx("div", { id: "tailor-edit-description", className: "sr-only", children: "Form to edit tailor information" }),
    /* @__PURE__ */ jsx(
      TailorForm,
      {
        onSubmit: handleSubmit,
        loading,
        initialData: tailor
      }
    )
  ] }) });
}
function TailorDetailModal({ tailor, open, onClose }) {
  const { appSettings } = usePage().props;
  const currencySymbol = appSettings?.currency_symbol || "$";
  const [tailorDetail, setTailorDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (open && tailor) {
      fetchTailorDetail();
    }
  }, [open, tailor]);
  const fetchTailorDetail = async () => {
    try {
      const response = await getTailor(tailor.id);
      setTailorDetail(response.data);
    } catch (error) {
      console.error("Failed to fetch tailor detail:", error);
    } finally {
      setLoading(false);
    }
  };
  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-gray-100 text-gray-800";
      case "on_leave":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  const getSkillColor = (skill) => {
    switch (skill) {
      case "expert":
        return "bg-purple-100 text-purple-800";
      case "intermediate":
        return "bg-blue-100 text-blue-800";
      case "beginner":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-2xl max-h-[80vh] overflow-y-auto", "aria-describedby": "tailor-detail-description", children: [
    /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "Tailor Details" }) }),
    /* @__PURE__ */ jsx("div", { id: "tailor-detail-description", className: "sr-only", children: "Detailed view of tailor information" }),
    loading ? /* @__PURE__ */ jsx("div", { className: "text-center py-4", children: "Loading..." }) : /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Personal Information" }) }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Name:" }),
            " ",
            tailorDetail?.name
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Phone:" }),
            " ",
            tailorDetail?.phone
          ] }),
          tailorDetail?.email && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Email:" }),
            " ",
            tailorDetail.email
          ] }),
          tailorDetail?.address && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Address:" }),
            " ",
            tailorDetail.address
          ] }),
          tailorDetail?.join_date && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Join Date:" }),
            " ",
            new Date(tailorDetail.join_date).toLocaleDateString()
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Professional Details" }) }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("strong", { children: "Skill Level:" }),
            /* @__PURE__ */ jsx(Badge, { className: getSkillColor(tailorDetail?.skill_level || ""), children: tailorDetail?.skill_level })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("strong", { children: "Status:" }),
            /* @__PURE__ */ jsx(Badge, { className: getStatusColor(tailorDetail?.status || ""), children: tailorDetail?.status.replace("_", " ") })
          ] }),
          tailorDetail?.hourly_rate && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Hourly Rate:" }),
            " ",
            currencySymbol,
            tailorDetail.hourly_rate,
            "/hr"
          ] }),
          tailorDetail?.specialization && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Specialization:" }),
            " ",
            tailorDetail.specialization
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
function TailorDeleteDialog({ tailor, open, onClose, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const handleDelete = async () => {
    if (!tailor) return;
    try {
      setLoading(true);
      await deleteTailor(tailor.id);
      toast.success(`${tailor.name} has been successfully deleted`);
      onSuccess();
      onClose();
    } catch (error) {
      console.error("Failed to delete tailor:", error);
      toast.error("Failed to delete tailor. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { "aria-describedby": "delete-tailor-description", children: [
    /* @__PURE__ */ jsx(DialogTitle, { children: "Are you sure you want to delete this tailor?" }),
    /* @__PURE__ */ jsxs(DialogDescription, { id: "delete-tailor-description", children: [
      "Once deleted, all of ",
      tailor?.name,
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
          children: loading ? "Deleting..." : "Delete Tailor"
        }
      )
    ] })
  ] }) });
}
function TailorTable({ search, statusFilter }) {
  const { appSettings } = usePage().props;
  const currencySymbol = appSettings?.currency_symbol || "$";
  const [tailors, setTailors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editTailor, setEditTailor] = useState(null);
  const [detailTailor, setDetailTailor] = useState(null);
  const [deleteTailor2, setDeleteTailor] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const fetchTailors = async (page = 1) => {
    try {
      setLoading(true);
      const params = { search, page };
      if (statusFilter && statusFilter !== "all") {
        params.status = statusFilter;
      }
      const response = await getTailors(params);
      setTailors(response.data.data);
      setCurrentPage(response.data.current_page);
      setTotalPages(response.data.last_page);
      setTotal(response.data.total);
      setFrom(response.data.from || 0);
      setTo(response.data.to || 0);
    } catch (error) {
      console.error("Failed to fetch tailors:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPage(1);
      fetchTailors(1);
    }, 300);
    return () => clearTimeout(timer);
  }, [search, statusFilter]);
  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchTailors(page);
  };
  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-gray-100 text-gray-800";
      case "on_leave":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  const getSkillColor = (skill) => {
    switch (skill) {
      case "expert":
        return "bg-purple-100 text-purple-800";
      case "intermediate":
        return "bg-blue-100 text-blue-800";
      case "beginner":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "#" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Name" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Contact" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Skill Level" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Status" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Hourly Rate" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Orders" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-8" }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-32" }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-28" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-36" })
        ] }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-24" }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-20" }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-16" }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-12" }) }),
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
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "#" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Name" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Contact" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Skill Level" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Status" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Hourly Rate" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Orders" }),
        /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: tailors.map((tailor, index) => /* @__PURE__ */ jsxs("tr", { className: "border-b hover:bg-gray-50 dark:hover:bg-[oklch(0.269_0_0)]", children: [
        /* @__PURE__ */ jsx("td", { className: "p-4 text-sm text-gray-600", children: from + index }),
        /* @__PURE__ */ jsx("td", { className: "p-4 font-medium", children: tailor.name }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm", children: tailor.phone }),
          tailor.email && /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: tailor.email })
        ] }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Badge, { className: getSkillColor(tailor.skill_level), children: tailor.skill_level }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Badge, { className: getStatusColor(tailor.status), children: tailor.status.replace("_", " ") }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4 text-sm", children: tailor.hourly_rate ? `${currencySymbol}${tailor.hourly_rate}/hr` : "-" }),
        /* @__PURE__ */ jsx("td", { className: "p-4 text-sm", children: /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: tailor.orders_count || 0 }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              onClick: () => setDetailTailor(tailor),
              children: /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              onClick: () => setEditTailor(tailor),
              children: /* @__PURE__ */ jsx(Edit, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              onClick: () => setDeleteTailor(tailor),
              children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
            }
          )
        ] }) })
      ] }, tailor.id)) })
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
    editTailor && /* @__PURE__ */ jsx(
      TailorEditModal,
      {
        tailor: editTailor,
        open: !!editTailor,
        onClose: () => setEditTailor(null),
        onSuccess: () => {
          setEditTailor(null);
          fetchTailors(currentPage);
        }
      }
    ),
    detailTailor && /* @__PURE__ */ jsx(
      TailorDetailModal,
      {
        tailor: detailTailor,
        open: !!detailTailor,
        onClose: () => setDetailTailor(null)
      }
    ),
    /* @__PURE__ */ jsx(
      TailorDeleteDialog,
      {
        tailor: deleteTailor2,
        open: !!deleteTailor2,
        onClose: () => setDeleteTailor(null),
        onSuccess: () => {
          setDeleteTailor(null);
          fetchTailors(currentPage);
        }
      }
    )
  ] });
}
function TailorCreateModal({ open, onClose }) {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      await createTailor(data);
      toast.success("Tailor created successfully");
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Failed to create tailor:", error);
      toast.error("Failed to create tailor. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-2xl max-h-[90vh] overflow-y-auto", "aria-describedby": "tailor-create-description", children: [
    /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "Add New Tailor" }) }),
    /* @__PURE__ */ jsx("div", { id: "tailor-create-description", className: "sr-only", children: "Form to create a new tailor" }),
    /* @__PURE__ */ jsx(TailorForm, { onSubmit: handleSubmit, loading })
  ] }) });
}
const breadcrumbs = [
  {
    title: "Tailors",
    href: "/tailors"
  }
];
function TailorsIndex() {
  const { url } = usePage();
  const urlParams = new URLSearchParams(window.location.search);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [search, setSearch] = useState(urlParams.get("search") || "");
  const [statusFilter, setStatusFilter] = useState("");
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchParam = params.get("search");
    if (searchParam) {
      setSearch(searchParam);
    }
  }, [url]);
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title: "Tailors" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl sm:text-3xl font-bold", children: "Tailors" }),
        /* @__PURE__ */ jsxs(Button, { onClick: () => setShowCreateModal(true), children: [
          /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-2" }),
          "Add Tailor"
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsx(CardTitle, { children: "Tailor List" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-2 w-full sm:w-auto", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative w-full sm:w-64", children: [
              /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  placeholder: "Search tailors...",
                  value: search,
                  onChange: (e) => {
                    setSearch(e.target.value);
                    const params = new URLSearchParams(window.location.search);
                    if (e.target.value) {
                      params.set("search", e.target.value);
                    } else {
                      params.delete("search");
                    }
                    router.get("/tailors", Object.fromEntries(params), { preserveState: true, replace: true });
                  },
                  className: "pl-10 w-full"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(Select, { value: statusFilter, onValueChange: setStatusFilter, children: [
              /* @__PURE__ */ jsx(SelectTrigger, { className: "w-full sm:w-40", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "All Status" }) }),
              /* @__PURE__ */ jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsx(SelectItem, { value: "all", children: "All Status" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "active", children: "Active" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "inactive", children: "Inactive" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "on_leave", children: "On Leave" })
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(TailorTable, { search, statusFilter }) })
      ] }),
      /* @__PURE__ */ jsx(
        TailorCreateModal,
        {
          open: showCreateModal,
          onClose: () => setShowCreateModal(false)
        }
      )
    ] })
  ] });
}
export {
  TailorsIndex as default
};
