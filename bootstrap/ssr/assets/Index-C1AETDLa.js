import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Head, router } from "@inertiajs/react";
import { Search, Save, CalendarIcon, X, Star, History } from "lucide-react";
import { A as AppLayout, B as Badge } from "./app-layout-BNU1zxoI.js";
import { B as Button, c as cn } from "./app-logo-icon-yMlft2ma.js";
import { I as Input } from "./input-DRU_9M1j.js";
import { L as Label } from "./label-HS0cC0xf.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-fzyh6nXg.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-mdHWliXL.js";
import { P as Popover, a as PopoverTrigger, b as PopoverContent, C as Calendar } from "./popover-CImn5mfV.js";
import { format } from "date-fns";
import axios from "axios";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-collapsible";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
import "./index-BSn8jdXv.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "@radix-ui/react-select";
import "react-day-picker";
import "@radix-ui/react-popover";
function SearchIndex() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [savedSearches, setSavedSearches] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [filters, setFilters] = useState({
    date_from: null,
    date_to: null,
    status: "",
    type: ""
  });
  useEffect(() => {
    loadSavedSearches();
    loadSearchHistory();
  }, []);
  const loadSavedSearches = async () => {
    try {
      const response = await axios.get("/api/search/saved");
      setSavedSearches(response.data.searches);
    } catch (error) {
      console.error("Failed to load saved searches:", error);
    }
  };
  const loadSearchHistory = async () => {
    try {
      const response = await axios.get("/api/search/history");
      setSearchHistory(response.data.history);
    } catch (error) {
      console.error("Failed to load search history:", error);
    }
  };
  const performSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const params = {
        q: query,
        filters: {
          ...filters,
          date_from: filters.date_from ? format(filters.date_from, "yyyy-MM-dd") : null,
          date_to: filters.date_to ? format(filters.date_to, "yyyy-MM-dd") : null
        }
      };
      const response = await axios.get("/api/search", { params });
      setResults(response.data.results);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setLoading(false);
    }
  };
  const saveSearch = async () => {
    const name = prompt("Enter a name for this search:");
    if (!name) return;
    try {
      await axios.post("/api/search/save", {
        name,
        query,
        filters
      });
      loadSavedSearches();
    } catch (error) {
      console.error("Failed to save search:", error);
    }
  };
  const loadSavedSearch = (search) => {
    setQuery(search.query);
    setFilters(search.filters);
  };
  const clearFilters = () => {
    setFilters({
      date_from: null,
      date_to: null,
      status: "",
      type: ""
    });
  };
  const getTypeColor = (type) => {
    const colors = {
      customer: "bg-blue-100 text-blue-800",
      order: "bg-green-100 text-green-800",
      tailor: "bg-purple-100 text-purple-800",
      fabric: "bg-orange-100 text-orange-800"
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };
  return /* @__PURE__ */ jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Advanced Search" }),
    /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-6", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: "Advanced Search" }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-3 space-y-6", children: [
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Search, { className: "h-5 w-5" }),
              "Search & Filters"
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    placeholder: "Search across all modules...",
                    value: query,
                    onChange: (e) => setQuery(e.target.value),
                    onKeyPress: (e) => e.key === "Enter" && performSearch(),
                    className: "flex-1"
                  }
                ),
                /* @__PURE__ */ jsxs(Button, { onClick: performSearch, disabled: loading, children: [
                  /* @__PURE__ */ jsx(Search, { className: "h-4 w-4 mr-2" }),
                  loading ? "Searching..." : "Search"
                ] }),
                /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: saveSearch, disabled: !query, children: /* @__PURE__ */ jsx(Save, { className: "h-4 w-4" }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(Label, { children: "Date From" }),
                  /* @__PURE__ */ jsxs(Popover, { children: [
                    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
                      Button,
                      {
                        variant: "outline",
                        className: cn(
                          "w-full justify-start text-left font-normal",
                          !filters.date_from && "text-muted-foreground"
                        ),
                        children: [
                          /* @__PURE__ */ jsx(CalendarIcon, { className: "mr-2 h-4 w-4" }),
                          filters.date_from ? format(filters.date_from, "PPP") : "Pick a date"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsx(PopoverContent, { className: "w-auto p-0", children: /* @__PURE__ */ jsx(
                      Calendar,
                      {
                        mode: "single",
                        selected: filters.date_from,
                        onSelect: (date) => setFilters((prev) => ({ ...prev, date_from: date })),
                        initialFocus: true
                      }
                    ) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(Label, { children: "Date To" }),
                  /* @__PURE__ */ jsxs(Popover, { children: [
                    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
                      Button,
                      {
                        variant: "outline",
                        className: cn(
                          "w-full justify-start text-left font-normal",
                          !filters.date_to && "text-muted-foreground"
                        ),
                        children: [
                          /* @__PURE__ */ jsx(CalendarIcon, { className: "mr-2 h-4 w-4" }),
                          filters.date_to ? format(filters.date_to, "PPP") : "Pick a date"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsx(PopoverContent, { className: "w-auto p-0", children: /* @__PURE__ */ jsx(
                      Calendar,
                      {
                        mode: "single",
                        selected: filters.date_to,
                        onSelect: (date) => setFilters((prev) => ({ ...prev, date_to: date })),
                        initialFocus: true
                      }
                    ) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(Label, { children: "Type" }),
                  /* @__PURE__ */ jsxs(Select, { value: filters.type, onValueChange: (value) => setFilters((prev) => ({ ...prev, type: value })), children: [
                    /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "All types" }) }),
                    /* @__PURE__ */ jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsx(SelectItem, { value: "", children: "All types" }),
                      /* @__PURE__ */ jsx(SelectItem, { value: "customer", children: "Customers" }),
                      /* @__PURE__ */ jsx(SelectItem, { value: "order", children: "Orders" }),
                      /* @__PURE__ */ jsx(SelectItem, { value: "tailor", children: "Tailors" }),
                      /* @__PURE__ */ jsx(SelectItem, { value: "fabric", children: "Fabrics" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex items-end", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", onClick: clearFilters, className: "w-full", children: [
                  /* @__PURE__ */ jsx(X, { className: "h-4 w-4 mr-2" }),
                  "Clear"
                ] }) })
              ] })
            ] })
          ] }),
          results.length > 0 && /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { children: [
              "Search Results (",
              results.length,
              ")"
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: results.map((result) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer",
                onClick: () => router.visit(result.url),
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsx("div", { className: "font-medium", children: result.title }),
                    /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: result.subtitle }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: result.created_at })
                  ] }),
                  /* @__PURE__ */ jsx(Badge, { className: getTypeColor(result.type), children: result.type })
                ]
              },
              `${result.type}-${result.id}`
            )) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Star, { className: "h-4 w-4" }),
              "Saved Searches"
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: savedSearches.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "No saved searches" }) : /* @__PURE__ */ jsx("div", { className: "space-y-2", children: savedSearches.map((search) => /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "w-full justify-start",
                onClick: () => loadSavedSearch(search),
                children: [
                  /* @__PURE__ */ jsx(Star, { className: "h-3 w-3 mr-2" }),
                  search.name
                ]
              },
              search.id
            )) }) })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(History, { className: "h-4 w-4" }),
              "Recent Searches"
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: searchHistory.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "No recent searches" }) : /* @__PURE__ */ jsx("div", { className: "space-y-2", children: searchHistory.slice(0, 5).map((search, index) => /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "w-full justify-start",
                onClick: () => setQuery(search.query),
                children: [
                  /* @__PURE__ */ jsx(History, { className: "h-3 w-3 mr-2" }),
                  search.query
                ]
              },
              index
            )) }) })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  SearchIndex as default
};
