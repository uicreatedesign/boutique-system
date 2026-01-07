import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Head, router } from "@inertiajs/react";
import { toast } from "sonner";
import { A as AppLayout, B as Badge } from "./app-layout-BNU1zxoI.js";
import { S as SettingsLayout } from "./layout-DBoo5xPq.js";
import { C as Card, a as CardHeader, b as CardTitle, d as CardDescription, c as CardContent } from "./card-fzyh6nXg.js";
import { B as Button } from "./app-logo-icon-yMlft2ma.js";
import { A as Alert, a as AlertDescription } from "./alert-CciJvyAJ.js";
import { Bell, Mail, Send, MessageSquare, Smartphone, AlertCircle } from "lucide-react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-collapsible";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
import "./index-BSn8jdXv.js";
import "axios";
import "./input-DRU_9M1j.js";
import "@radix-ui/react-separator";
import "./index-t_V3m3ZX.js";
import "clsx";
import "tailwind-merge";
const breadcrumbs = [
  {
    title: "Notification Settings",
    href: "/settings/notifications"
  }
];
function NotificationSettings({ settings }) {
  const [emailEnabled, setEmailEnabled] = useState(settings?.email_enabled || false);
  const [whatsappEnabled, setWhatsappEnabled] = useState(settings?.whatsapp_enabled || false);
  const [smsEnabled, setSmsEnabled] = useState(settings?.sms_enabled || false);
  const [pushEnabled, setPushEnabled] = useState(settings?.push_enabled || true);
  const [orderCreated, setOrderCreated] = useState(settings?.order_created || false);
  const [orderStatusChanged, setOrderStatusChanged] = useState(settings?.order_status_changed || false);
  const [paymentReceived, setPaymentReceived] = useState(settings?.payment_received || false);
  const [deliveryReminder, setDeliveryReminder] = useState(settings?.delivery_reminder || false);
  const [lowStockAlert, setLowStockAlert] = useState(settings?.low_stock_alert || false);
  const [deliveryReminderDays, setDeliveryReminderDays] = useState(settings?.delivery_reminder_days || 1);
  const [isSaving, setIsSaving] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const handleTestNotification = (channel) => {
    setIsTesting(true);
    router.post("/api/settings/notifications/test", { channel }, {
      onSuccess: () => {
        toast.success(`Test notification sent via ${channel}`);
        setIsTesting(false);
      },
      onError: () => {
        toast.error(`Failed to send test notification via ${channel}`);
        setIsTesting(false);
      }
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaving(true);
    router.put("/api/settings/notifications", {
      email_enabled: emailEnabled,
      whatsapp_enabled: whatsappEnabled,
      sms_enabled: smsEnabled,
      push_enabled: pushEnabled,
      order_created: orderCreated,
      order_status_changed: orderStatusChanged,
      payment_received: paymentReceived,
      delivery_reminder: deliveryReminder,
      low_stock_alert: lowStockAlert,
      delivery_reminder_days: deliveryReminderDays
    }, {
      onSuccess: () => {
        toast.success("Notification settings updated successfully");
        setIsSaving(false);
      },
      onError: () => {
        toast.error("Failed to update notification settings");
        setIsSaving(false);
      }
    });
  };
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title: "Notification Settings" }),
    /* @__PURE__ */ jsx(SettingsLayout, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: "Notification Settings" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Configure how you want to receive notifications" })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Bell, { className: "h-5 w-5" }),
              "Notification Channels"
            ] }),
            /* @__PURE__ */ jsx(CardDescription, { children: "Choose how you want to receive notifications" })
          ] }),
          /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 border rounded-lg", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: "p-2 bg-blue-100 dark:bg-blue-900 rounded", children: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5 text-blue-600 dark:text-blue-300" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Email Notifications" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Receive notifications via email" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Badge, { variant: emailEnabled ? "default" : "secondary", children: emailEnabled ? "Enabled" : "Disabled" }),
                emailEnabled && /* @__PURE__ */ jsxs(
                  Button,
                  {
                    type: "button",
                    variant: "outline",
                    size: "sm",
                    onClick: () => handleTestNotification("email"),
                    disabled: isTesting,
                    children: [
                      /* @__PURE__ */ jsx(Send, { className: "h-3 w-3 mr-1" }),
                      "Test"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: emailEnabled,
                      onChange: (e) => setEmailEnabled(e.target.checked),
                      className: "sr-only peer"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 border rounded-lg", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: "p-2 bg-green-100 dark:bg-green-900 rounded", children: /* @__PURE__ */ jsx(MessageSquare, { className: "h-5 w-5 text-green-600 dark:text-green-300" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-medium", children: "WhatsApp Notifications" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Receive notifications via WhatsApp" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Badge, { variant: whatsappEnabled ? "default" : "secondary", children: whatsappEnabled ? "Enabled" : "Disabled" }),
                whatsappEnabled && /* @__PURE__ */ jsxs(
                  Button,
                  {
                    type: "button",
                    variant: "outline",
                    size: "sm",
                    onClick: () => handleTestNotification("whatsapp"),
                    disabled: isTesting,
                    children: [
                      /* @__PURE__ */ jsx(Send, { className: "h-3 w-3 mr-1" }),
                      "Test"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: whatsappEnabled,
                      onChange: (e) => setWhatsappEnabled(e.target.checked),
                      className: "sr-only peer"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 border rounded-lg", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: "p-2 bg-orange-100 dark:bg-orange-900 rounded", children: /* @__PURE__ */ jsx(Smartphone, { className: "h-5 w-5 text-orange-600 dark:text-orange-300" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-medium", children: "SMS Notifications" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Receive notifications via SMS" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Badge, { variant: smsEnabled ? "default" : "secondary", children: smsEnabled ? "Enabled" : "Disabled" }),
                smsEnabled && /* @__PURE__ */ jsxs(
                  Button,
                  {
                    type: "button",
                    variant: "outline",
                    size: "sm",
                    onClick: () => handleTestNotification("sms"),
                    disabled: isTesting,
                    children: [
                      /* @__PURE__ */ jsx(Send, { className: "h-3 w-3 mr-1" }),
                      "Test"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: smsEnabled,
                      onChange: (e) => setSmsEnabled(e.target.checked),
                      className: "sr-only peer"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 border rounded-lg", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: "p-2 bg-purple-100 dark:bg-purple-900 rounded", children: /* @__PURE__ */ jsx(Bell, { className: "h-5 w-5 text-purple-600 dark:text-purple-300" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Push Notifications" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "In-app notifications" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Badge, { variant: pushEnabled ? "default" : "secondary", children: pushEnabled ? "Enabled" : "Disabled" }),
                pushEnabled && /* @__PURE__ */ jsxs(
                  Button,
                  {
                    type: "button",
                    variant: "outline",
                    size: "sm",
                    onClick: () => handleTestNotification("push"),
                    disabled: isTesting,
                    children: [
                      /* @__PURE__ */ jsx(Send, { className: "h-3 w-3 mr-1" }),
                      "Test"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: pushEnabled,
                      onChange: (e) => setPushEnabled(e.target.checked),
                      className: "sr-only peer"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" })
                ] })
              ] })
            ] }),
            (whatsappEnabled || smsEnabled) && /* @__PURE__ */ jsxs(Alert, { children: [
              /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsx(AlertDescription, { className: "text-xs", children: "WhatsApp and SMS integrations require API configuration. Contact support for setup assistance." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsx(CardTitle, { children: "Notification Events" }),
            /* @__PURE__ */ jsx(CardDescription, { children: "Select which events should trigger notifications" })
          ] }),
          /* @__PURE__ */ jsxs(CardContent, { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 border rounded-lg", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-medium text-sm", children: "Order Created" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Notify when a new order is created" })
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: orderCreated,
                    onChange: (e) => setOrderCreated(e.target.checked),
                    className: "sr-only peer"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 border rounded-lg", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-medium text-sm", children: "Order Status Changed" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Notify when order status is updated" })
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: orderStatusChanged,
                    onChange: (e) => setOrderStatusChanged(e.target.checked),
                    className: "sr-only peer"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 border rounded-lg", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-medium text-sm", children: "Payment Received" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Notify when payment is received" })
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: paymentReceived,
                    onChange: (e) => setPaymentReceived(e.target.checked),
                    className: "sr-only peer"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 border rounded-lg", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsx("p", { className: "font-medium text-sm", children: "Delivery Reminder" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Notify before delivery date" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                deliveryReminder && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "number",
                      min: "1",
                      max: "7",
                      value: deliveryReminderDays,
                      onChange: (e) => setDeliveryReminderDays(Number(e.target.value)),
                      className: "w-16 px-2 py-1 text-sm border rounded-md"
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: "days before" })
                ] }),
                /* @__PURE__ */ jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: deliveryReminder,
                      onChange: (e) => setDeliveryReminder(e.target.checked),
                      className: "sr-only peer"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 border rounded-lg", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-medium text-sm", children: "Low Stock Alert" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Notify when fabric stock is low" })
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: lowStockAlert,
                    onChange: (e) => setLowStockAlert(e.target.checked),
                    className: "sr-only peer"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(Button, { type: "submit", disabled: isSaving, children: isSaving ? "Saving..." : "Save Settings" }) })
      ] })
    ] }) })
  ] });
}
export {
  NotificationSettings as default
};
