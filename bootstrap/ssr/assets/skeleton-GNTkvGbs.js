import { jsx } from "react/jsx-runtime";
import { c as cn } from "./app-logo-icon-yMlft2ma.js";
function Skeleton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn("animate-pulse rounded-md bg-muted", className),
      ...props
    }
  );
}
export {
  Skeleton as S
};
