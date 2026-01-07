import { jsx, jsxs } from "react/jsx-runtime";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function isSameUrl(url1, url2) {
  return resolveUrl(url1) === resolveUrl(url2);
}
function resolveUrl(url) {
  return typeof url === "string" ? url : url.url;
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size,
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
function AppLogoIcon(props) {
  return /* @__PURE__ */ jsxs("svg", { ...props, width: "44", height: "48", viewBox: "0 0 44 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsxs("g", { clipPath: "url(#clip0)", children: [
      /* @__PURE__ */ jsx("path", { d: "M27.2694 4.12169L23.0486 2.99072L19.4917 16.2654L16.2804 4.28093L12.0595 5.4119L15.5291 18.3602L6.88724 9.71841L3.79738 12.8083L13.2764 22.2874L1.47179 19.1243L0.34082 23.3451L13.2388 26.8011C13.0912 26.1642 13.0131 25.5006 13.0131 24.8187C13.0131 19.992 16.9258 16.0792 21.7525 16.0792C26.5792 16.0792 30.492 19.992 30.492 24.8187C30.492 25.4962 30.4148 26.1557 30.269 26.7889L41.9909 29.9297L43.1218 25.709L30.1725 22.2392L41.9779 19.0759L40.8469 14.8551L27.8981 18.3247L36.54 9.68293L33.4501 6.59307L24.1026 15.9406L27.2694 4.12169Z", fill: "currentColor" }),
      /* @__PURE__ */ jsx("path", { d: "M30.2567 26.838C29.8948 28.368 29.1308 29.7424 28.0825 30.8435L36.5745 39.3357L39.6644 36.2458L30.2567 26.838Z", fill: "currentColor" }),
      /* @__PURE__ */ jsx("path", { d: "M27.9968 30.9323C26.9359 32.0159 25.5951 32.8245 24.0916 33.2413L27.1817 44.7735L31.4025 43.6425L27.9968 30.9323Z", fill: "currentColor" }),
      /* @__PURE__ */ jsx("path", { d: "M23.934 33.2835C23.2364 33.4628 22.5053 33.5581 21.7518 33.5581C20.9446 33.5581 20.1629 33.4486 19.4208 33.2437L16.3279 44.7866L20.5487 45.9175L23.934 33.2835Z", fill: "currentColor" }),
      /* @__PURE__ */ jsx("path", { d: "M19.2715 33.2012C17.791 32.7638 16.4741 31.9448 15.4348 30.8581L6.92192 39.3711L10.0118 42.4609L19.2715 33.2012Z", fill: "currentColor" }),
      /* @__PURE__ */ jsx("path", { d: "M15.3647 30.7829C14.3432 29.6893 13.5992 28.3333 13.2451 26.827L1.48486 29.9781L2.61582 34.1989L15.3647 30.7829Z", fill: "currentColor" })
    ] }),
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip0", children: /* @__PURE__ */ jsx("rect", { width: "44", height: "44", fill: "white", transform: "translate(0 2)" }) }) })
  ] });
}
export {
  AppLogoIcon as A,
  Button as B,
  buttonVariants as b,
  cn as c,
  isSameUrl as i,
  resolveUrl as r
};
