import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { I as InputError } from "./input-error-6hokYpE7.js";
import { T as TextLink } from "./text-link-DpGkSOGE.js";
import { B as Button } from "./app-logo-icon-yMlft2ma.js";
import { C as Checkbox } from "./checkbox-DbX0FY8V.js";
import { I as Input } from "./input-DRU_9M1j.js";
import { L as Label } from "./label-HS0cC0xf.js";
import { S as Spinner } from "./spinner-CHOqoWxj.js";
import { A as AuthLayout } from "./auth-layout-Ck0h1brf.js";
import { q as queryParams, r as register } from "./index-BSn8jdXv.js";
import { r as request } from "./index-D6E4jEdI.js";
import { Head, Form } from "@inertiajs/react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-checkbox";
import "lucide-react";
import "@radix-ui/react-label";
import "./index-lTztsZCp.js";
const store = (options) => ({
  url: store.url(options),
  method: "post"
});
store.definition = {
  methods: ["post"],
  url: "/login"
};
store.url = (options) => {
  return store.definition.url + queryParams(options);
};
store.post = (options) => ({
  url: store.url(options),
  method: "post"
});
const storeForm = (options) => ({
  action: store.url(options),
  method: "post"
});
storeForm.post = (options) => ({
  action: store.url(options),
  method: "post"
});
store.form = storeForm;
({
  store: Object.assign(store, store)
});
function Login({
  status,
  canResetPassword,
  canRegister
}) {
  return /* @__PURE__ */ jsxs(
    AuthLayout,
    {
      title: "Log in to your account",
      description: "Enter your email and password below to log in",
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Log in" }),
        status && /* @__PURE__ */ jsx("div", { className: "mb-4 text-center text-sm font-medium text-green-600", children: status }),
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "button",
            variant: "outline",
            className: "w-full",
            asChild: true,
            children: /* @__PURE__ */ jsxs("a", { href: "/auth/google", children: [
              /* @__PURE__ */ jsxs("svg", { className: "mr-2 h-4 w-4", viewBox: "0 0 24 24", children: [
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    fill: "currentColor",
                    d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    fill: "currentColor",
                    d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    fill: "currentColor",
                    d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    fill: "currentColor",
                    d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  }
                )
              ] }),
              "Continue with Google"
            ] })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsx("span", { className: "w-full border-t" }) }),
          /* @__PURE__ */ jsx("div", { className: "relative flex justify-center text-xs uppercase", children: /* @__PURE__ */ jsx("span", { className: "bg-background px-2 text-muted-foreground", children: "Or continue with" }) })
        ] }),
        /* @__PURE__ */ jsx(
          Form,
          {
            ...store.form(),
            resetOnSuccess: ["password"],
            className: "flex flex-col gap-6",
            children: ({ processing, errors }) => /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsxs("div", { className: "grid gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email address" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "email",
                      type: "email",
                      name: "email",
                      required: true,
                      autoFocus: true,
                      tabIndex: 1,
                      autoComplete: "email",
                      placeholder: "email@example.com"
                    }
                  ),
                  /* @__PURE__ */ jsx(InputError, { message: errors.email })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                    /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "Password" }),
                    canResetPassword && /* @__PURE__ */ jsx(
                      TextLink,
                      {
                        href: request(),
                        className: "ml-auto text-sm",
                        tabIndex: 5,
                        children: "Forgot password?"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "password",
                      type: "password",
                      name: "password",
                      required: true,
                      tabIndex: 2,
                      autoComplete: "current-password",
                      placeholder: "Password"
                    }
                  ),
                  /* @__PURE__ */ jsx(InputError, { message: errors.password })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
                  /* @__PURE__ */ jsx(
                    Checkbox,
                    {
                      id: "remember",
                      name: "remember",
                      tabIndex: 3
                    }
                  ),
                  /* @__PURE__ */ jsx(Label, { htmlFor: "remember", children: "Remember me" })
                ] }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    type: "submit",
                    className: "mt-4 w-full",
                    tabIndex: 4,
                    disabled: processing,
                    "data-test": "login-button",
                    children: [
                      processing && /* @__PURE__ */ jsx(Spinner, {}),
                      "Log in"
                    ]
                  }
                )
              ] }),
              canRegister && /* @__PURE__ */ jsxs("div", { className: "text-center text-sm text-muted-foreground", children: [
                "Don't have an account?",
                " ",
                /* @__PURE__ */ jsx(TextLink, { href: register(), tabIndex: 5, children: "Sign up" })
              ] })
            ] })
          }
        )
      ]
    }
  );
}
export {
  Login as default
};
