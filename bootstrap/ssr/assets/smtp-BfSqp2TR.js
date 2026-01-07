import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import { B as Button } from "./app-logo-icon-yMlft2ma.js";
import { I as Input } from "./input-DRU_9M1j.js";
import { L as Label } from "./label-HS0cC0xf.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-mdHWliXL.js";
import { H as HeadingSmall } from "./heading-small-CT3emyQQ.js";
import { I as InputError } from "./input-error-6hokYpE7.js";
import { A as AppLayout } from "./app-layout-BNU1zxoI.js";
import { S as SettingsLayout } from "./layout-DBoo5xPq.js";
import { toast } from "sonner";
import axios from "axios";
import { D as Dialog, g as DialogTrigger, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-DqkYa_S8.js";
import { Mail, Send } from "lucide-react";
import { S as Skeleton } from "./skeleton-GNTkvGbs.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "@radix-ui/react-select";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-collapsible";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
import "./index-BSn8jdXv.js";
import "@radix-ui/react-separator";
import "./index-t_V3m3ZX.js";
function TestEmailModal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSendTest = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter an email address");
      return;
    }
    setLoading(true);
    try {
      await axios.post("/api/settings/smtp/test", { email });
      toast.success("Test email sent successfully!");
      setOpen(false);
      setEmail("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send test email");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", children: [
      /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 mr-2" }),
      "Test Email"
    ] }) }),
    /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-md", children: [
      /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "Send Test Email" }) }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSendTest, className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "test-email", children: "Email Address" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "test-email",
              type: "email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              placeholder: "Enter email to test",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-2", children: [
          /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", onClick: () => setOpen(false), children: "Cancel" }),
          /* @__PURE__ */ jsx(Button, { type: "submit", disabled: loading, children: loading ? "Sending..." : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Send, { className: "h-4 w-4 mr-2" }),
            "Send Test"
          ] }) })
        ] })
      ] })
    ] })
  ] });
}
const breadcrumbs = [
  {
    title: "SMTP Settings",
    href: "/settings/smtp"
  }
];
function SmtpSettings() {
  const [settings, setSettings] = useState({
    smtp_host: "",
    smtp_port: "587",
    smtp_username: "",
    smtp_password: "",
    smtp_encryption: "tls",
    mail_from_address: "",
    mail_from_name: ""
  });
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [errors, setErrors] = useState({});
  useEffect(() => {
    fetchSettings();
  }, []);
  const fetchSettings = async () => {
    try {
      const response = await axios.get("/api/settings/smtp");
      setSettings(response.data);
    } catch (error) {
      console.error("Failed to fetch SMTP settings:", error);
    } finally {
      setPageLoading(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    try {
      await axios.put("/api/settings/smtp", settings);
      toast.success("SMTP settings updated successfully");
    } catch (error) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      }
      toast.error("Failed to update SMTP settings");
      console.error("Failed to update SMTP settings:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };
  if (pageLoading) {
    return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
      /* @__PURE__ */ jsx(Head, { title: "SMTP Settings" }),
      /* @__PURE__ */ jsx(SettingsLayout, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Skeleton, { className: "h-7 w-32" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-80" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
              /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-20" }),
              /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
              /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-20" }),
              /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-28" }),
            /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-28" }),
            /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-20" }),
            /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
              /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-20" }),
              /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
              /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-20" }),
              /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-16" }),
            /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-24" })
          ] })
        ] })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title: "SMTP Settings" }),
    /* @__PURE__ */ jsx(SettingsLayout, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsx(
        HeadingSmall,
        {
          title: "SMTP Settings",
          description: "Configure email server settings for sending emails"
        }
      ),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "smtp_host", children: "SMTP Host" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "smtp_host",
                value: settings.smtp_host,
                onChange: (e) => handleChange("smtp_host", e.target.value),
                placeholder: "smtp.gmail.com",
                className: "mt-1 block w-full"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.smtp_host?.[0] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "smtp_port", children: "SMTP Port" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "smtp_port",
                type: "number",
                value: settings.smtp_port,
                onChange: (e) => handleChange("smtp_port", e.target.value),
                placeholder: "587",
                className: "mt-1 block w-full"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.smtp_port?.[0] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "smtp_username", children: "SMTP Username" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "smtp_username",
              value: settings.smtp_username,
              onChange: (e) => handleChange("smtp_username", e.target.value),
              placeholder: "your-email@gmail.com",
              className: "mt-1 block w-full"
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.smtp_username?.[0] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "smtp_password", children: "SMTP Password" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "smtp_password",
              type: "password",
              value: settings.smtp_password,
              onChange: (e) => handleChange("smtp_password", e.target.value),
              placeholder: "Your app password",
              className: "mt-1 block w-full",
              autoComplete: "current-password"
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.smtp_password?.[0] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "smtp_encryption", children: "Encryption" }),
          /* @__PURE__ */ jsxs(Select, { value: settings.smtp_encryption, onValueChange: (value) => handleChange("smtp_encryption", value), children: [
            /* @__PURE__ */ jsx(SelectTrigger, { className: "mt-1 block w-full", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsx(SelectItem, { value: "tls", children: "TLS" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "ssl", children: "SSL" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "none", children: "None" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(InputError, { message: errors.smtp_encryption?.[0] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "mail_from_address", children: "From Email" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "mail_from_address",
                type: "email",
                value: settings.mail_from_address,
                onChange: (e) => handleChange("mail_from_address", e.target.value),
                placeholder: "noreply@yoursite.com",
                className: "mt-1 block w-full"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.mail_from_address?.[0] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "mail_from_name", children: "From Name" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "mail_from_name",
                value: settings.mail_from_name,
                onChange: (e) => handleChange("mail_from_name", e.target.value),
                placeholder: "Your Company",
                className: "mt-1 block w-full"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.mail_from_name?.[0] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx(Button, { type: "submit", disabled: loading, children: loading ? "Saving..." : "Save" }),
          /* @__PURE__ */ jsx(TestEmailModal, {})
        ] })
      ] })
    ] }) })
  ] });
}
export {
  SmtpSettings as default
};
