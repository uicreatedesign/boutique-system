import { jsxs, jsx } from "react/jsx-runtime";
function HeadingSmall({
  title,
  description
}) {
  return /* @__PURE__ */ jsxs("header", { children: [
    /* @__PURE__ */ jsx("h3", { className: "mb-0.5 text-base font-medium", children: title }),
    description && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: description })
  ] });
}
export {
  HeadingSmall as H
};
