import { jsx, jsxs } from "react/jsx-runtime";
import { c as cn, B as Button, i as isSameUrl, r as resolveUrl } from "./app-logo-icon-yMlft2ma.js";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { q as queryParams } from "./index-BSn8jdXv.js";
import { u as useHasPermission, e as edit$2 } from "./app-layout-BNU1zxoI.js";
import { b as show } from "./index-t_V3m3ZX.js";
import { Link } from "@inertiajs/react";
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SeparatorPrimitive.Root,
    {
      "data-slot": "separator-root",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}
function Heading({
  title,
  description
}) {
  return /* @__PURE__ */ jsxs("div", { className: "mb-8 space-y-0.5", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold tracking-tight", children: title }),
    description && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: description })
  ] });
}
const edit$1 = (options) => ({
  url: edit$1.url(options),
  method: "get"
});
edit$1.definition = {
  methods: ["get", "head"],
  url: "/settings/appearance"
};
edit$1.url = (options) => {
  return edit$1.definition.url + queryParams(options);
};
edit$1.get = (options) => ({
  url: edit$1.url(options),
  method: "get"
});
edit$1.head = (options) => ({
  url: edit$1.url(options),
  method: "head"
});
const editForm$1 = (options) => ({
  action: edit$1.url(options),
  method: "get"
});
editForm$1.get = (options) => ({
  action: edit$1.url(options),
  method: "get"
});
editForm$1.head = (options) => ({
  action: edit$1.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
edit$1.form = editForm$1;
({
  edit: Object.assign(edit$1, edit$1)
});
const edit = (options) => ({
  url: edit.url(options),
  method: "get"
});
edit.definition = {
  methods: ["get", "head"],
  url: "/settings/password"
};
edit.url = (options) => {
  return edit.definition.url + queryParams(options);
};
edit.get = (options) => ({
  url: edit.url(options),
  method: "get"
});
edit.head = (options) => ({
  url: edit.url(options),
  method: "head"
});
const editForm = (options) => ({
  action: edit.url(options),
  method: "get"
});
editForm.get = (options) => ({
  action: edit.url(options),
  method: "get"
});
editForm.head = (options) => ({
  action: edit.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
edit.form = editForm;
const update = (options) => ({
  url: update.url(options),
  method: "put"
});
update.definition = {
  methods: ["put"],
  url: "/settings/password"
};
update.url = (options) => {
  return update.definition.url + queryParams(options);
};
update.put = (options) => ({
  url: update.url(options),
  method: "put"
});
const updateForm = (options) => ({
  action: update.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "PUT",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "post"
});
updateForm.put = (options) => ({
  action: update.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "PUT",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "post"
});
update.form = updateForm;
({
  edit: Object.assign(edit, edit),
  update: Object.assign(update, update)
});
const getAllNavItems = () => [
  {
    title: "General",
    href: "/settings/general",
    icon: null,
    permission: "manage_general_settings"
  },
  {
    title: "Profile",
    href: edit$2(),
    icon: null,
    permission: "access_profile_settings"
  },
  {
    title: "Password",
    href: edit(),
    icon: null,
    permission: "change_own_password"
  },
  {
    title: "Two-Factor Auth",
    href: show(),
    icon: null,
    permission: "manage_own_2fa"
  },
  {
    title: "SMTP",
    href: "/settings/smtp",
    icon: null,
    permission: "manage_smtp_settings"
  },
  {
    title: "Appearance",
    href: edit$1(),
    icon: null,
    permission: "manage_appearance_settings"
  },
  {
    title: "Notifications",
    href: "/settings/notifications",
    icon: null,
    permission: "view_own_notifications"
  },
  {
    title: "Backup",
    href: "/settings/backup",
    icon: null,
    permission: "manage_backup_settings"
  }
];
function SettingsLayout({ children }) {
  const { hasPermission } = useHasPermission();
  if (typeof window === "undefined") {
    return null;
  }
  const currentPath = window.location.pathname;
  const sidebarNavItems = getAllNavItems().filter(
    (item) => !item.permission || hasPermission(item.permission)
  );
  return /* @__PURE__ */ jsxs("div", { className: "px-4 py-6", children: [
    /* @__PURE__ */ jsx(
      Heading,
      {
        title: "Settings",
        description: "Manage your application and account settings"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-12", children: [
      /* @__PURE__ */ jsx("aside", { className: "w-full lg:w-64 xl:w-72", children: /* @__PURE__ */ jsx("nav", { className: "flex flex-col space-y-1", children: sidebarNavItems.map((item, index) => /* @__PURE__ */ jsx(
        Button,
        {
          size: "sm",
          variant: "ghost",
          asChild: true,
          className: cn("w-full justify-start", {
            "bg-muted": isSameUrl(
              currentPath,
              item.href
            )
          }),
          children: /* @__PURE__ */ jsxs(Link, { href: item.href, children: [
            item.icon && /* @__PURE__ */ jsx(item.icon, { className: "h-4 w-4" }),
            item.title
          ] })
        },
        `${resolveUrl(item.href)}-${index}`
      )) }) }),
      /* @__PURE__ */ jsx(Separator, { className: "my-6 lg:hidden" }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 lg:max-w-3xl xl:max-w-4xl", children: /* @__PURE__ */ jsx("section", { className: "space-y-8", children }) })
    ] })
  ] });
}
export {
  SettingsLayout as S,
  edit as a,
  edit$1 as e
};
