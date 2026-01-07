import { jsxs, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { B as Badge, A as AppLayout } from "./app-layout-BNU1zxoI.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-DxUnHL7O.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { B as Button } from "./app-logo-icon-yMlft2ma.js";
import { I as Input } from "./input-DRU_9M1j.js";
import { L as Label } from "./label-HS0cC0xf.js";
import { T as Textarea } from "./textarea-B9zFq2cw.js";
import { C as Card, a as CardHeader, c as CardContent, b as CardTitle } from "./card-fzyh6nXg.js";
import { Check, Plus, X, Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { S as Skeleton } from "./skeleton-GNTkvGbs.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-mdHWliXL.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-collapsible";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
import "./index-BSn8jdXv.js";
import "@radix-ui/react-tabs";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
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
const getCategories = () => api.get("/measurement-categories");
const createCategory = (data) => api.post("/measurement-categories", data);
const updateCategory = (id, data) => api.put(`/measurement-categories/${id}`, data);
const deleteCategory = (id) => api.delete(`/measurement-categories/${id}`);
const getFields = (params) => api.get("/measurement-fields", { params });
const createField = (data) => api.post("/measurement-fields", data);
const updateField = (id, data) => api.put(`/measurement-fields/${id}`, data);
const deleteField = (id) => api.delete(`/measurement-fields/${id}`);
function CategoryManagement() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ name: "", description: "", is_active: true, sort_order: 0 });
  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await getCategories();
      setCategories(response.data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateCategory(editingId, formData);
        toast.success("Category updated successfully");
      } else {
        await createCategory(formData);
        toast.success("Category created successfully");
      }
      setFormData({ name: "", description: "", is_active: true, sort_order: 0 });
      setEditingId(null);
      fetchCategories();
    } catch (error) {
      console.error("Error saving category:", error);
      const errorMsg = error.response?.data?.message || "Failed to save category";
      toast.error(errorMsg);
    }
  };
  const handleEdit = (category) => {
    setEditingId(category.id);
    setFormData({
      name: category.name,
      description: category.description || "",
      is_active: category.is_active,
      sort_order: category.sort_order || 0
    });
  };
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this category?")) return;
    try {
      await deleteCategory(id);
      toast.success("Category deleted successfully");
      fetchCategories();
    } catch (error) {
      toast.error("Failed to delete category");
    }
  };
  const handleCancel = () => {
    setEditingId(null);
    setFormData({ name: "", description: "", is_active: true, sort_order: 0 });
  };
  if (loading) {
    return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxs(Card, { className: "lg:col-span-1", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-32" }) }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-16 mb-2" }),
            /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-20 mb-2" }),
            /* @__PURE__ */ jsx(Skeleton, { className: "h-20 w-full" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-20 mb-2" }),
            /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full" })
          ] }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-40" }) }),
        /* @__PURE__ */ jsx(CardContent, { className: "space-y-3", children: [...Array(3)].map((_, i) => /* @__PURE__ */ jsx("div", { className: "border rounded-lg p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
              /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-24" }),
              /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-16" })
            ] }),
            /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full mb-1" }),
            /* @__PURE__ */ jsx(Skeleton, { className: "h-3 w-32" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-8" }),
            /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-8" })
          ] })
        ] }) }, i)) })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
    /* @__PURE__ */ jsxs(Card, { className: "lg:col-span-1", children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: editingId ? "Edit Category" : "Add Category" }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Name *" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "name",
              value: formData.name,
              onChange: (e) => setFormData({ ...formData, name: e.target.value }),
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "description", children: "Description" }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              id: "description",
              value: formData.description,
              onChange: (e) => setFormData({ ...formData, description: e.target.value })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "sort_order", children: "Sort Order" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "sort_order",
              type: "number",
              value: formData.sort_order,
              onChange: (e) => setFormData({ ...formData, sort_order: parseInt(e.target.value) })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxs(Button, { type: "submit", className: "flex-1", children: [
            editingId ? /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-2" }),
            editingId ? "Update" : "Add"
          ] }),
          editingId && /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", onClick: handleCancel, children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "lg:col-span-2", children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { children: [
        "Categories (",
        categories.length,
        ")"
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: categories.map((category) => /* @__PURE__ */ jsxs("div", { className: "border rounded-lg p-4 flex items-start justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: category.name }),
            /* @__PURE__ */ jsxs(Badge, { variant: "secondary", children: [
              category.fields?.length || 0,
              " fields"
            ] })
          ] }),
          category.description && /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mt-1", children: category.description }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-500 mt-1", children: [
            "Slug: ",
            category.slug
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx(Button, { size: "sm", variant: "outline", onClick: () => handleEdit(category), children: /* @__PURE__ */ jsx(Edit, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsx(Button, { size: "sm", variant: "outline", onClick: () => handleDelete(category.id), children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }) })
        ] })
      ] }, category.id)) }) })
    ] })
  ] });
}
function FieldManagement() {
  const [categories, setCategories] = useState([]);
  const [fields, setFields] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [filterCategory, setFilterCategory] = useState("all");
  const [formData, setFormData] = useState({
    category_id: "",
    name: "",
    unit: "inches",
    is_required: false,
    sort_order: 0
  });
  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(response.data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };
  const fetchFields = async () => {
    try {
      setLoading(true);
      const params = filterCategory && filterCategory !== "all" ? { category_id: filterCategory } : {};
      const response = await getFields(params);
      setFields(response.data);
    } catch (error) {
      console.error("Failed to fetch fields:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  useEffect(() => {
    fetchFields();
  }, [filterCategory]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.category_id) {
      toast.error("Please select a category");
      return;
    }
    try {
      if (editingId) {
        await updateField(editingId, formData);
        toast.success("Field updated successfully");
      } else {
        await createField(formData);
        toast.success("Field created successfully");
      }
      setFormData({ category_id: "", name: "", unit: "inches", is_required: false, sort_order: 0 });
      setEditingId(null);
      fetchFields();
    } catch (error) {
      console.error("Error saving field:", error);
      const errorMsg = error.response?.data?.message || "Failed to save field";
      toast.error(errorMsg);
    }
  };
  const handleEdit = (field) => {
    setEditingId(field.id);
    setFormData({
      category_id: field.category_id.toString(),
      name: field.name,
      unit: field.unit,
      is_required: field.is_required,
      sort_order: field.sort_order || 0
    });
  };
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this field?")) return;
    try {
      await deleteField(id);
      toast.success("Field deleted successfully");
      fetchFields();
    } catch (error) {
      toast.error("Failed to delete field");
    }
  };
  const handleCancel = () => {
    setEditingId(null);
    setFormData({ category_id: "", name: "", unit: "inches", is_required: false, sort_order: 0 });
  };
  if (loading) {
    return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxs(Card, { className: "lg:col-span-1", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-24" }) }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-20 mb-2" }),
            /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-24 mb-2" }),
            /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-12 mb-2" }),
            /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-20 mb-2" }),
            /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full" })
          ] }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-32" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-48" })
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { className: "space-y-3", children: [...Array(4)].map((_, i) => /* @__PURE__ */ jsx("div", { className: "border rounded-lg p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
              /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-20" }),
              /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-12" }),
              /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-16" })
            ] }),
            /* @__PURE__ */ jsx(Skeleton, { className: "h-3 w-24" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-8" }),
            /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-8" })
          ] })
        ] }) }, i)) })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
    /* @__PURE__ */ jsxs(Card, { className: "lg:col-span-1", children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: editingId ? "Edit Field" : "Add Field" }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "category_id", children: "Category *" }),
          /* @__PURE__ */ jsxs(
            Select,
            {
              value: formData.category_id,
              onValueChange: (value) => setFormData({ ...formData, category_id: value }),
              required: true,
              children: [
                /* @__PURE__ */ jsx(SelectTrigger, { className: !formData.category_id ? "border-red-500" : "", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select category" }) }),
                /* @__PURE__ */ jsx(SelectContent, { children: categories.map((cat) => /* @__PURE__ */ jsx(SelectItem, { value: cat.id.toString(), children: cat.name }, cat.id)) })
              ]
            }
          ),
          !formData.category_id && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: "Category is required" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Field Name *" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "name",
              value: formData.name,
              onChange: (e) => setFormData({ ...formData, name: e.target.value }),
              placeholder: "e.g., Chest, Waist, Length",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "unit", children: "Unit *" }),
          /* @__PURE__ */ jsxs(
            Select,
            {
              value: formData.unit,
              onValueChange: (value) => setFormData({ ...formData, unit: value }),
              required: true,
              children: [
                /* @__PURE__ */ jsx(SelectTrigger, { className: !formData.unit ? "border-red-500" : "", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select unit" }) }),
                /* @__PURE__ */ jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsx(SelectItem, { value: "inches", children: "Inches (in)" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "cm", children: "Centimeters (cm)" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "mm", children: "Millimeters (mm)" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "meters", children: "Meters (m)" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "feet", children: "Feet (ft)" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "yards", children: "Yards (yd)" })
                ] })
              ]
            }
          ),
          !formData.unit && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: "Unit is required" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "sort_order", children: "Sort Order" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "sort_order",
              type: "number",
              value: formData.sort_order,
              onChange: (e) => setFormData({ ...formData, sort_order: parseInt(e.target.value) })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxs(Button, { type: "submit", className: "flex-1", children: [
            editingId ? /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-2" }),
            editingId ? "Update" : "Add"
          ] }),
          editingId && /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", onClick: handleCancel, children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "lg:col-span-2", children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(CardTitle, { children: [
          "Fields (",
          fields.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxs(Select, { value: filterCategory, onValueChange: setFilterCategory, children: [
          /* @__PURE__ */ jsx(SelectTrigger, { className: "w-48", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "All Categories" }) }),
          /* @__PURE__ */ jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsx(SelectItem, { value: "all", children: "All Categories" }),
            categories.map((cat) => /* @__PURE__ */ jsx(SelectItem, { value: cat.id.toString(), children: cat.name }, cat.id))
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: fields.map((field) => /* @__PURE__ */ jsxs("div", { className: "border rounded-lg p-4 flex items-start justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: field.name }),
            /* @__PURE__ */ jsx(Badge, { variant: "outline", children: field.unit }),
            /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: field.category.name })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-500 mt-1", children: [
            "Slug: ",
            field.slug
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx(Button, { size: "sm", variant: "outline", onClick: () => handleEdit(field), children: /* @__PURE__ */ jsx(Edit, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsx(Button, { size: "sm", variant: "outline", onClick: () => handleDelete(field.id), children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }) })
        ] })
      ] }, field.id)) }) })
    ] })
  ] });
}
const breadcrumbs = [
  {
    title: "Measurements",
    href: "/measurements"
  },
  {
    title: "Settings",
    href: "/measurement-settings"
  }
];
function MeasurementSettings() {
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title: "Measurement Settings" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: "Measurement Settings" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-1", children: "Manage measurement categories and fields" })
      ] }),
      /* @__PURE__ */ jsxs(Tabs, { defaultValue: "categories", className: "w-full", children: [
        /* @__PURE__ */ jsxs(TabsList, { children: [
          /* @__PURE__ */ jsx(TabsTrigger, { value: "categories", children: "Categories" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "fields", children: "Fields" })
        ] }),
        /* @__PURE__ */ jsx(TabsContent, { value: "categories", children: /* @__PURE__ */ jsx(CategoryManagement, {}) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "fields", children: /* @__PURE__ */ jsx(FieldManagement, {}) })
      ] })
    ] })
  ] });
}
export {
  MeasurementSettings as default
};
