import { jsxs, jsx } from "react/jsx-runtime";
import { ChevronLeft, MoreHorizontal, ChevronRight } from "lucide-react";
import { B as Button } from "./app-logo-icon-yMlft2ma.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-mdHWliXL.js";
function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  showingFrom,
  showingTo,
  total,
  perPage = 10,
  onPerPageChange
}) {
  const getVisiblePages = () => {
    if (totalPages === 0 || totalPages === 1) return [1];
    const pages = [];
    const showEllipsis = totalPages > 7;
    if (!showEllipsis) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }
    if (currentPage <= 3) {
      for (let i = 1; i <= 4; i++) pages.push(i);
      pages.push("...");
      pages.push(totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1);
      pages.push("...");
      for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      pages.push("...");
      pages.push(currentPage - 1);
      pages.push(currentPage);
      pages.push(currentPage + 1);
      pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-2 py-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground", children: [
        "Showing ",
        showingFrom,
        " to ",
        showingTo,
        " of ",
        total,
        " results"
      ] }),
      onPerPageChange && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Rows per page" }),
        /* @__PURE__ */ jsxs(
          Select,
          {
            value: perPage.toString(),
            onValueChange: (value) => onPerPageChange(Number(value)),
            children: [
              /* @__PURE__ */ jsx(SelectTrigger, { className: "w-16", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsx(SelectContent, { children: [10, 20, 30, 50].map((size) => /* @__PURE__ */ jsx(SelectItem, { value: size.toString(), children: size }, size)) })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 w-full sm:w-auto justify-center sm:justify-end", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "outline",
          size: "icon",
          onClick: () => onPageChange(currentPage - 1),
          disabled: currentPage === 1,
          children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
        }
      ),
      getVisiblePages().map((page, index) => page === "..." ? /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", disabled: true, children: /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" }) }, `ellipsis-${index}`) : /* @__PURE__ */ jsx(
        Button,
        {
          variant: currentPage === page ? "default" : "outline",
          size: "icon",
          onClick: () => onPageChange(page),
          children: page
        },
        page
      )),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "outline",
          size: "icon",
          onClick: () => onPageChange(currentPage + 1),
          disabled: currentPage === totalPages,
          children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
        }
      )
    ] })
  ] });
}
export {
  Pagination as P
};
