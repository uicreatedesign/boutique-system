import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import { B as Button } from "./app-logo-icon-yMlft2ma.js";
import { I as Input } from "./input-DRU_9M1j.js";
import { L as Label } from "./label-HS0cC0xf.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-mdHWliXL.js";
import { T as Textarea } from "./textarea-B9zFq2cw.js";
import { H as HeadingSmall } from "./heading-small-CT3emyQQ.js";
import { I as InputError } from "./input-error-6hokYpE7.js";
import { A as AppLayout } from "./app-layout-BNU1zxoI.js";
import { S as SettingsLayout } from "./layout-DBoo5xPq.js";
import { toast } from "sonner";
import axios from "axios";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "@radix-ui/react-select";
import "lucide-react";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-collapsible";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
import "./index-BSn8jdXv.js";
import "@radix-ui/react-separator";
import "./index-t_V3m3ZX.js";
const breadcrumbs = [
  {
    title: "General Settings",
    href: "/settings/general"
  }
];
const currencies = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "INR", symbol: "₹", name: "Indian Rupee" },
  { code: "PKR", symbol: "₨", name: "Pakistani Rupee" },
  { code: "BDT", symbol: "৳", name: "Bangladeshi Taka" }
];
const timezones = [
  "UTC",
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "Europe/London",
  "Europe/Paris",
  "Europe/Berlin",
  "Asia/Kolkata",
  "Asia/Karachi",
  "Asia/Dhaka",
  "Asia/Tokyo",
  "Australia/Sydney"
];
function GeneralSettings() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [settings, setSettings] = useState({
    app_name: "",
    currency: "USD",
    currency_symbol: "$",
    tax_rate: "0",
    order_prefix: "ORD",
    default_delivery_days: "7",
    business_name: "",
    business_address: "",
    business_phone: "",
    business_email: "",
    timezone: "UTC"
  });
  useEffect(() => {
    fetchSettings();
  }, []);
  const fetchSettings = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/settings/general");
      const data = response.data;
      setSettings((prev) => ({
        ...prev,
        app_name: data.app_name || "",
        currency: data.currency || "USD",
        currency_symbol: data.currency_symbol || "$",
        tax_rate: data.tax_rate || "0",
        order_prefix: data.order_prefix || "ORD",
        default_delivery_days: data.default_delivery_days || "7",
        business_name: data.business_name || "",
        business_address: data.business_address || "",
        business_phone: data.business_phone || "",
        business_email: data.business_email || "",
        timezone: data.timezone || "UTC"
      }));
    } catch (error) {
      toast.error("Failed to load settings");
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    try {
      await axios.put("/api/settings/general", settings);
      toast.success("General settings updated successfully");
    } catch (error) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      }
      toast.error("Failed to update general settings");
      console.error("Failed to update general settings:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleCurrencyChange = (currencyCode) => {
    const currency = currencies.find((c) => c.code === currencyCode);
    if (currency) {
      setSettings((prev) => ({
        ...prev,
        currency: currency.code,
        currency_symbol: currency.symbol
      }));
    }
  };
  if (loading && !settings.app_name) {
    return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
      /* @__PURE__ */ jsx(Head, { title: "General Settings" }),
      /* @__PURE__ */ jsx(SettingsLayout, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsx(
          HeadingSmall,
          {
            title: "General Settings",
            description: "Configure application and business settings"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "h-4 w-32 bg-gray-200 rounded animate-pulse" }),
              /* @__PURE__ */ jsx("div", { className: "h-10 w-full bg-gray-200 rounded animate-pulse" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "h-4 w-32 bg-gray-200 rounded animate-pulse" }),
              /* @__PURE__ */ jsx("div", { className: "h-10 w-full bg-gray-200 rounded animate-pulse" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "h-4 w-24 bg-gray-200 rounded animate-pulse" }),
              /* @__PURE__ */ jsx("div", { className: "h-10 w-full bg-gray-200 rounded animate-pulse" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "h-4 w-24 bg-gray-200 rounded animate-pulse" }),
              /* @__PURE__ */ jsx("div", { className: "h-10 w-full bg-gray-200 rounded animate-pulse" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "h-4 w-32 bg-gray-200 rounded animate-pulse" }),
              /* @__PURE__ */ jsx("div", { className: "h-10 w-full bg-gray-200 rounded animate-pulse" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: "h-4 w-24 bg-gray-200 rounded animate-pulse" }),
            /* @__PURE__ */ jsx("div", { className: "h-10 w-full bg-gray-200 rounded animate-pulse" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: "h-4 w-32 bg-gray-200 rounded animate-pulse" }),
            /* @__PURE__ */ jsx("div", { className: "h-10 w-full bg-gray-200 rounded animate-pulse" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: "h-4 w-32 bg-gray-200 rounded animate-pulse" }),
            /* @__PURE__ */ jsx("div", { className: "h-24 w-full bg-gray-200 rounded animate-pulse" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "h-4 w-32 bg-gray-200 rounded animate-pulse" }),
              /* @__PURE__ */ jsx("div", { className: "h-10 w-full bg-gray-200 rounded animate-pulse" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "h-4 w-32 bg-gray-200 rounded animate-pulse" }),
              /* @__PURE__ */ jsx("div", { className: "h-10 w-full bg-gray-200 rounded animate-pulse" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-10 w-24 bg-gray-200 rounded animate-pulse" })
        ] })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title: "General Settings" }),
    /* @__PURE__ */ jsx(SettingsLayout, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsx(
        HeadingSmall,
        {
          title: "General Settings",
          description: "Configure application and business settings"
        }
      ),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "app_name", children: "Application Name" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "app_name",
                value: settings.app_name,
                onChange: (e) => setSettings((prev) => ({ ...prev, app_name: e.target.value })),
                placeholder: "Boutique System",
                className: "mt-1 block w-full"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.app_name?.[0] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "order_prefix", children: "Order Number Prefix" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "order_prefix",
                value: settings.order_prefix,
                onChange: (e) => setSettings((prev) => ({ ...prev, order_prefix: e.target.value })),
                placeholder: "ORD",
                className: "mt-1 block w-full"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.order_prefix?.[0] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "currency", children: "Currency" }),
            /* @__PURE__ */ jsxs(Select, { value: settings.currency, onValueChange: handleCurrencyChange, children: [
              /* @__PURE__ */ jsx(SelectTrigger, { className: "mt-1 block w-full", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsx(SelectContent, { children: currencies.map((currency) => /* @__PURE__ */ jsxs(SelectItem, { value: currency.code, children: [
                currency.symbol,
                " ",
                currency.code,
                " - ",
                currency.name
              ] }, currency.code)) })
            ] }),
            /* @__PURE__ */ jsx(InputError, { message: errors.currency?.[0] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "tax_rate", children: "Tax Rate (%)" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "tax_rate",
                type: "number",
                min: "0",
                max: "100",
                step: "0.01",
                value: settings.tax_rate,
                onChange: (e) => setSettings((prev) => ({ ...prev, tax_rate: e.target.value })),
                className: "mt-1 block w-full"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.tax_rate?.[0] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "default_delivery_days", children: "Default Delivery Days" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "default_delivery_days",
                type: "number",
                min: "1",
                value: settings.default_delivery_days,
                onChange: (e) => setSettings((prev) => ({ ...prev, default_delivery_days: e.target.value })),
                className: "mt-1 block w-full"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.default_delivery_days?.[0] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "timezone", children: "Timezone" }),
          /* @__PURE__ */ jsxs(Select, { value: settings.timezone, onValueChange: (value) => setSettings((prev) => ({ ...prev, timezone: value })), children: [
            /* @__PURE__ */ jsx(SelectTrigger, { className: "mt-1 block w-full", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsx(SelectContent, { children: timezones.map((tz) => /* @__PURE__ */ jsx(SelectItem, { value: tz, children: tz }, tz)) })
          ] }),
          /* @__PURE__ */ jsx(InputError, { message: errors.timezone?.[0] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "business_name", children: "Business Name" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "business_name",
              value: settings.business_name,
              onChange: (e) => setSettings((prev) => ({ ...prev, business_name: e.target.value })),
              placeholder: "My Boutique",
              className: "mt-1 block w-full"
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.business_name?.[0] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "business_address", children: "Business Address" }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              id: "business_address",
              value: settings.business_address,
              onChange: (e) => setSettings((prev) => ({ ...prev, business_address: e.target.value })),
              placeholder: "Enter your complete business address",
              rows: 3,
              className: "mt-1 block w-full"
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.business_address?.[0] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "business_phone", children: "Business Phone" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "business_phone",
                value: settings.business_phone,
                onChange: (e) => setSettings((prev) => ({ ...prev, business_phone: e.target.value })),
                placeholder: "+1 (555) 123-4567",
                className: "mt-1 block w-full"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.business_phone?.[0] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "business_email", children: "Business Email" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "business_email",
                type: "email",
                value: settings.business_email,
                onChange: (e) => setSettings((prev) => ({ ...prev, business_email: e.target.value })),
                placeholder: "contact@myboutique.com",
                className: "mt-1 block w-full"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.business_email?.[0] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsx(Button, { type: "submit", disabled: loading, children: loading ? "Saving..." : "Save" }) })
      ] })
    ] }) })
  ] });
}
export {
  GeneralSettings as default
};
