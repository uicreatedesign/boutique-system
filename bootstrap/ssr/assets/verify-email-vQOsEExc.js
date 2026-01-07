import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { T as TextLink } from "./text-link-DpGkSOGE.js";
import { B as Button } from "./app-logo-icon-yMlft2ma.js";
import { S as Spinner } from "./spinner-CHOqoWxj.js";
import { A as AuthLayout } from "./auth-layout-Ck0h1brf.js";
import { b as logout } from "./index-BSn8jdXv.js";
import { s as send } from "./index-Dll6oKrP.js";
import { Head, Form } from "@inertiajs/react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "lucide-react";
function VerifyEmail({ status }) {
  return /* @__PURE__ */ jsxs(
    AuthLayout,
    {
      title: "Verify email",
      description: "Please verify your email address by clicking on the link we just emailed to you.",
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Email verification" }),
        status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mb-4 text-center text-sm font-medium text-green-600", children: "A new verification link has been sent to the email address you provided during registration." }),
        /* @__PURE__ */ jsx(Form, { ...send.form(), className: "space-y-6 text-center", children: ({ processing }) => /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs(Button, { disabled: processing, variant: "secondary", children: [
            processing && /* @__PURE__ */ jsx(Spinner, {}),
            "Resend verification email"
          ] }),
          /* @__PURE__ */ jsx(
            TextLink,
            {
              href: logout(),
              className: "mx-auto block text-sm",
              children: "Log out"
            }
          )
        ] }) })
      ]
    }
  );
}
export {
  VerifyEmail as default
};
