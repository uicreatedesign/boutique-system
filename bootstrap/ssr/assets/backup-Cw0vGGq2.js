import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Head, router } from "@inertiajs/react";
import axios from "axios";
import { A as AppLayout, B as Badge } from "./app-layout-BNU1zxoI.js";
import { S as SettingsLayout } from "./layout-DBoo5xPq.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-fzyh6nXg.js";
import { B as Button } from "./app-logo-icon-yMlft2ma.js";
import { A as Alert, a as AlertDescription } from "./alert-CciJvyAJ.js";
import { Shield, Download, Clock, Upload, AlertTriangle, Calendar, Database, CheckCircle } from "lucide-react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-collapsible";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
import "./index-BSn8jdXv.js";
import "./input-DRU_9M1j.js";
import "@radix-ui/react-separator";
import "./index-t_V3m3ZX.js";
import "clsx";
import "tailwind-merge";
const breadcrumbs = [
  {
    title: "Backup Settings",
    href: "/settings/backup"
  }
];
function BackupSettings({ backups = [], settings }) {
  const [isBackingUp, setIsBackingUp] = useState(false);
  const [autoBackupEnabled, setAutoBackupEnabled] = useState(settings?.auto_backup_enabled || false);
  const [retentionDays, setRetentionDays] = useState(settings?.retention_days || 30);
  const [isSaving, setIsSaving] = useState(false);
  console.log("Backups received:", backups);
  console.log("Settings received:", settings);
  const handleBackup = () => {
    setIsBackingUp(true);
    window.location.href = "/api/settings/backup/create";
    setTimeout(() => {
      setIsBackingUp(false);
      router.reload();
    }, 2e3);
  };
  const handleDownload = (id) => {
    window.location.href = `/api/settings/backup/download/${id}`;
  };
  const handleSettingsUpdate = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await axios.put("/api/settings/backup/settings", {
        auto_backup_enabled: autoBackupEnabled,
        retention_days: retentionDays
      });
      router.reload();
    } catch (error) {
      console.error("Failed to update settings:", error);
    } finally {
      setIsSaving(false);
    }
  };
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title: "Database Backup - Settings" }),
    /* @__PURE__ */ jsx(SettingsLayout, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: "Database Backup" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Manage your boutique data backups and restore points" })
      ] }),
      /* @__PURE__ */ jsxs(Alert, { children: [
        /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx(AlertDescription, { children: "Regular backups help protect your boutique data. We recommend creating backups before major updates or changes." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Download, { className: "h-5 w-5" }),
            "Create Backup"
          ] }) }),
          /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Create a complete backup of your boutique database including customers, orders, and settings." }),
            /* @__PURE__ */ jsx(
              Button,
              {
                onClick: handleBackup,
                disabled: isBackingUp,
                className: "w-full",
                children: isBackingUp ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 mr-2 animate-spin" }),
                  "Creating Backup..."
                ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
                  "Create Backup Now"
                ] })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Upload, { className: "h-5 w-5" }),
            "Restore Backup"
          ] }) }),
          /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Restore your boutique data from a previous backup file." }),
            /* @__PURE__ */ jsxs(Alert, { children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsx(AlertDescription, { className: "text-xs", children: "This will overwrite current data. Use with caution." })
            ] }),
            /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full", children: [
              /* @__PURE__ */ jsx(Upload, { className: "h-4 w-4 mr-2" }),
              "Choose Backup File"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Calendar, { className: "h-5 w-5" }),
          "Backup History"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: backups.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground text-center py-4", children: "No backup history available" }) : backups.map((backup) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 border rounded-lg", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "p-2 bg-muted rounded", children: /* @__PURE__ */ jsx(Database, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium text-sm", children: backup.date }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
                "Size: ",
                backup.size
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Badge, { variant: backup.type === "automatic" ? "secondary" : "default", children: backup.type }),
            /* @__PURE__ */ jsxs(Badge, { className: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 mr-1" }),
              backup.status
            ] }),
            /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", onClick: () => handleDownload(backup.id), children: /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }) })
          ] })
        ] }, backup.id)) }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Automatic Backups" }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSettingsUpdate, className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Daily Automatic Backups" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Automatically create backups every day at 2:00 AM" })
            ] }),
            /* @__PURE__ */ jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "checkbox",
                  checked: autoBackupEnabled,
                  onChange: (e) => setAutoBackupEnabled(e.target.checked),
                  className: "sr-only peer"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Retention Period" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Keep backups for specified days" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "number",
                  min: "1",
                  max: "365",
                  value: retentionDays,
                  onChange: (e) => setRetentionDays(Number(e.target.value)),
                  className: "w-20 px-3 py-2 border rounded-md"
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "days" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(Button, { type: "submit", disabled: isSaving, className: "sm:w-auto", children: isSaving ? "Saving..." : "Save Settings" })
        ] }) })
      ] })
    ] }) })
  ] });
}
export {
  BackupSettings as default
};
