import { jsxs, jsx } from "react/jsx-runtime";
import { useForm, Head } from "@inertiajs/react";
import { A as AppLayout, a as Avatar, b as AvatarImage, c as AvatarFallback } from "./app-layout-BNU1zxoI.js";
import { B as Button, c as cn } from "./app-logo-icon-yMlft2ma.js";
import { I as Input } from "./input-DRU_9M1j.js";
import { L as Label } from "./label-HS0cC0xf.js";
import { T as Textarea } from "./textarea-B9zFq2cw.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-mdHWliXL.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-fzyh6nXg.js";
import { C as Checkbox } from "./checkbox-DbX0FY8V.js";
import { R as RadioGroup, a as RadioGroupItem } from "./radio-group-C8KfI6PF.js";
import { P as Popover, a as PopoverTrigger, b as PopoverContent, C as Calendar } from "./popover-CImn5mfV.js";
import { toast } from "sonner";
import { useState, useRef } from "react";
import axios from "axios";
import { ChevronUp, ChevronDown, Image, Camera, Trash2, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
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
import "@radix-ui/react-checkbox";
import "@radix-ui/react-radio-group";
import "react-day-picker";
import "@radix-ui/react-popover";
function OrdersCreateEnhanced({ customers, garmentTypes, tailors, fabrics, statuses, categories }) {
  const [existingMeasurements, setExistingMeasurements] = useState([]);
  const [measurementOption, setMeasurementOption] = useState("skip");
  const [showMeasurements, setShowMeasurements] = useState(false);
  const [newMeasurements, setNewMeasurements] = useState({});
  const [selectedMeasurementType, setSelectedMeasurementType] = useState("");
  const [designPreview, setDesignPreview] = useState(null);
  const [fabricPreview, setFabricPreview] = useState(null);
  const [boutiqueFabricPreview, setBoutiqueFabricPreview] = useState(null);
  const designInputRef = useRef(null);
  const fabricInputRef = useRef(null);
  const boutiqueFabricInputRef = useRef(null);
  const { data, setData, post, processing, errors } = useForm({
    customer_id: "",
    garment_type_id: "",
    tailor_id: "",
    measurement_id: "",
    measurement_option: "skip",
    new_measurement_type: "",
    new_measurements: {},
    measurement_notes: "",
    fabric_id: "",
    customer_fabric: false,
    boutique_fabric: false,
    customer_fabric_photo: null,
    boutique_fabric_photo: null,
    design_image: null,
    payment_method: "cash",
    stitching_status_id: statuses[0]?.id.toString() || "",
    order_date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    delivery_date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    priority: "normal",
    total_amount: "",
    advance_paid: "",
    discount: "0",
    special_instructions: "",
    notes: ""
  });
  const handleCustomerChange = async (customerId) => {
    setData("customer_id", customerId);
    if (customerId) {
      try {
        const response = await axios.get(`/api/measurements?customer_id=${customerId}`);
        setExistingMeasurements(response.data);
      } catch (error) {
        console.error("Failed to fetch measurements:", error);
      }
    } else {
      setExistingMeasurements([]);
    }
  };
  const handleMeasurementOptionChange = (option) => {
    setMeasurementOption(option);
    setData("measurement_option", option);
    if (option === "new") {
      setShowMeasurements(true);
    } else {
      setShowMeasurements(false);
    }
  };
  const selectedCategory = categories.find((cat) => cat.slug === selectedMeasurementType);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      ...data,
      new_measurements: measurementOption === "new" ? newMeasurements : {}
    };
    post("/orders", {
      data: formData,
      onSuccess: () => {
        toast.success("Order created successfully");
      },
      onError: () => {
        toast.error("Failed to create order");
      }
    });
  };
  return /* @__PURE__ */ jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Create Order" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-4 max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: "Create Order" }) }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Order Details" }) }),
          /* @__PURE__ */ jsx(CardContent, { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { children: "Customer *" }),
              /* @__PURE__ */ jsxs(Select, { value: data.customer_id, onValueChange: handleCustomerChange, children: [
                /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select customer" }) }),
                /* @__PURE__ */ jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsx("div", { className: "px-2 pb-2 sticky top-0 bg-popover z-10", children: /* @__PURE__ */ jsx(
                    Input,
                    {
                      placeholder: "Search customer...",
                      className: "h-8",
                      onChange: (e) => {
                        const search = e.target.value.toLowerCase();
                        const items = document.querySelectorAll("[data-customer-item]");
                        items.forEach((item) => {
                          const text = item.textContent?.toLowerCase() || "";
                          item.style.display = text.includes(search) ? "" : "none";
                        });
                      },
                      onKeyDown: (e) => e.stopPropagation()
                    }
                  ) }),
                  customers.map((customer) => /* @__PURE__ */ jsx(SelectItem, { value: customer.id.toString(), "data-customer-item": true, children: customer.name }, customer.id))
                ] })
              ] }),
              errors.customer_id && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.customer_id })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { children: "Garment Type *" }),
              /* @__PURE__ */ jsxs(Select, { value: data.garment_type_id, onValueChange: (value) => setData("garment_type_id", value), children: [
                /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select garment type" }) }),
                /* @__PURE__ */ jsx(SelectContent, { children: garmentTypes.map((type) => /* @__PURE__ */ jsx(SelectItem, { value: type.id.toString(), children: type.name }, type.id)) })
              ] }),
              errors.garment_type_id && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.garment_type_id })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { children: "Tailor *" }),
              /* @__PURE__ */ jsxs(Select, { value: data.tailor_id, onValueChange: (value) => setData("tailor_id", value), children: [
                /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select tailor" }) }),
                /* @__PURE__ */ jsx(SelectContent, { children: tailors.map((tailor) => /* @__PURE__ */ jsx(SelectItem, { value: tailor.id.toString(), children: tailor.name }, tailor.id)) })
              ] }),
              errors.tailor_id && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.tailor_id })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { children: "Status *" }),
              /* @__PURE__ */ jsxs(Select, { value: data.stitching_status_id, onValueChange: (value) => setData("stitching_status_id", value), children: [
                /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsx(SelectContent, { children: statuses.map((status) => /* @__PURE__ */ jsx(SelectItem, { value: status.id.toString(), children: status.name }, status.id)) })
              ] })
            ] })
          ] }) })
        ] }),
        data.customer_id && /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Measurements" }) }),
          /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs(RadioGroup, { value: measurementOption, onValueChange: handleMeasurementOptionChange, children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx(RadioGroupItem, { value: "skip", id: "skip" }),
                /* @__PURE__ */ jsx(Label, { htmlFor: "skip", className: "cursor-pointer", children: "Skip measurements" })
              ] }),
              existingMeasurements.length > 0 && /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx(RadioGroupItem, { value: "existing", id: "existing" }),
                /* @__PURE__ */ jsx(Label, { htmlFor: "existing", className: "cursor-pointer", children: "Use existing measurement" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx(RadioGroupItem, { value: "new", id: "new" }),
                /* @__PURE__ */ jsx(Label, { htmlFor: "new", className: "cursor-pointer", children: "Create new measurement" })
              ] })
            ] }),
            measurementOption === "existing" && existingMeasurements.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { children: "Select Measurement" }),
              /* @__PURE__ */ jsxs(Select, { value: data.measurement_id, onValueChange: (value) => setData("measurement_id", value), children: [
                /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select measurement" }) }),
                /* @__PURE__ */ jsx(SelectContent, { children: existingMeasurements.map((measurement) => /* @__PURE__ */ jsxs(SelectItem, { value: measurement.id.toString(), children: [
                  measurement.measurement_type,
                  " - ",
                  new Date(measurement.created_at).toLocaleDateString()
                ] }, measurement.id)) })
              ] })
            ] }),
            measurementOption === "new" && /* @__PURE__ */ jsxs("div", { className: "space-y-4 border-t pt-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Label, { children: "Measurement Type *" }),
                /* @__PURE__ */ jsxs(Select, { value: selectedMeasurementType, onValueChange: (value) => {
                  setSelectedMeasurementType(value);
                  setData("new_measurement_type", value);
                }, children: [
                  /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select measurement type" }) }),
                  /* @__PURE__ */ jsx(SelectContent, { children: categories.map((category) => /* @__PURE__ */ jsx(SelectItem, { value: category.slug, children: category.name }, category.id)) })
                ] })
              ] }),
              selectedCategory && /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxs(Label, { className: "text-base font-semibold", children: [
                    selectedCategory.name,
                    " Measurements"
                  ] }),
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      type: "button",
                      variant: "ghost",
                      size: "sm",
                      onClick: () => setShowMeasurements(!showMeasurements),
                      children: showMeasurements ? /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
                    }
                  )
                ] }),
                showMeasurements && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4 p-4 rounded-lg border border-muted", children: selectedCategory.fields.map((field) => /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs(Label, { htmlFor: field.slug, className: "text-sm", children: [
                    field.name,
                    " (",
                    field.unit,
                    ")",
                    field.is_required && /* @__PURE__ */ jsx("span", { className: "text-red-500 ml-1", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: field.slug,
                      type: "number",
                      step: "0.1",
                      placeholder: "0.0",
                      value: newMeasurements[field.slug] || "",
                      onChange: (e) => {
                        const updated = { ...newMeasurements, [field.slug]: e.target.value };
                        setNewMeasurements(updated);
                        setData("new_measurements", updated);
                      },
                      required: field.is_required
                    }
                  )
                ] }, field.id)) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(Label, { className: "mb-2", children: "Measurement Notes" }),
                  /* @__PURE__ */ jsx(
                    Textarea,
                    {
                      value: data.measurement_notes,
                      onChange: (e) => setData("measurement_notes", e.target.value),
                      rows: 2,
                      placeholder: "Any special notes about measurements..."
                    }
                  )
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Fabric & Design" }) }),
          /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx(
                  Checkbox,
                  {
                    id: "customer_fabric",
                    checked: data.customer_fabric,
                    onCheckedChange: (checked) => setData("customer_fabric", checked)
                  }
                ),
                /* @__PURE__ */ jsx("label", { htmlFor: "customer_fabric", className: "text-sm cursor-pointer", children: "Customer provided fabric" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx(
                  Checkbox,
                  {
                    id: "boutique_fabric",
                    checked: data.boutique_fabric,
                    onCheckedChange: (checked) => setData("boutique_fabric", checked)
                  }
                ),
                /* @__PURE__ */ jsx("label", { htmlFor: "boutique_fabric", className: "text-sm cursor-pointer", children: "Boutique provided fabric" })
              ] })
            ] }),
            data.boutique_fabric && /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { children: "Fabric" }),
              /* @__PURE__ */ jsxs(Select, { value: data.fabric_id, onValueChange: (value) => setData("fabric_id", value), children: [
                /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select fabric" }) }),
                /* @__PURE__ */ jsx(SelectContent, { children: fabrics.map((fabric) => /* @__PURE__ */ jsxs(SelectItem, { value: fabric.id.toString(), children: [
                  fabric.name,
                  " - $",
                  fabric.price_per_meter,
                  "/meter"
                ] }, fabric.id)) })
              ] })
            ] }),
            data.boutique_fabric && /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { children: "Boutique Fabric Photo" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mt-2", children: [
                /* @__PURE__ */ jsxs(Avatar, { className: "h-24 w-24 rounded-md", children: [
                  /* @__PURE__ */ jsx(AvatarImage, { src: boutiqueFabricPreview || void 0, alt: "Boutique Fabric", className: "object-cover" }),
                  /* @__PURE__ */ jsx(AvatarFallback, { className: "rounded-md bg-muted", children: /* @__PURE__ */ jsx(Image, { className: "h-8 w-8 text-muted-foreground" }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxs(
                    Button,
                    {
                      type: "button",
                      variant: "outline",
                      size: "sm",
                      onClick: () => boutiqueFabricInputRef.current?.click(),
                      children: [
                        /* @__PURE__ */ jsx(Camera, { className: "h-4 w-4 mr-2" }),
                        boutiqueFabricPreview ? "Change" : "Upload"
                      ]
                    }
                  ),
                  boutiqueFabricPreview && /* @__PURE__ */ jsxs(
                    Button,
                    {
                      type: "button",
                      variant: "outline",
                      size: "sm",
                      onClick: () => {
                        setBoutiqueFabricPreview(null);
                        setData("boutique_fabric_photo", null);
                      },
                      children: [
                        /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4 mr-2" }),
                        "Remove"
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  ref: boutiqueFabricInputRef,
                  type: "file",
                  accept: "image/*",
                  onChange: (e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setData("boutique_fabric_photo", file);
                      setBoutiqueFabricPreview(URL.createObjectURL(file));
                    }
                  },
                  className: "hidden"
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Upload boutique fabric photo (JPG, PNG or GIF. Max 2MB)" })
            ] }),
            data.customer_fabric && /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { children: "Customer Fabric Photo" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mt-2", children: [
                /* @__PURE__ */ jsxs(Avatar, { className: "h-24 w-24 rounded-md", children: [
                  /* @__PURE__ */ jsx(AvatarImage, { src: fabricPreview || void 0, alt: "Fabric", className: "object-cover" }),
                  /* @__PURE__ */ jsx(AvatarFallback, { className: "rounded-md bg-muted", children: /* @__PURE__ */ jsx(Image, { className: "h-8 w-8 text-muted-foreground" }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxs(
                    Button,
                    {
                      type: "button",
                      variant: "outline",
                      size: "sm",
                      onClick: () => fabricInputRef.current?.click(),
                      children: [
                        /* @__PURE__ */ jsx(Camera, { className: "h-4 w-4 mr-2" }),
                        fabricPreview ? "Change" : "Upload"
                      ]
                    }
                  ),
                  fabricPreview && /* @__PURE__ */ jsxs(
                    Button,
                    {
                      type: "button",
                      variant: "outline",
                      size: "sm",
                      onClick: () => {
                        setFabricPreview(null);
                        setData("customer_fabric_photo", null);
                      },
                      children: [
                        /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4 mr-2" }),
                        "Remove"
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  ref: fabricInputRef,
                  type: "file",
                  accept: "image/*",
                  onChange: (e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setData("customer_fabric_photo", file);
                      setFabricPreview(URL.createObjectURL(file));
                    }
                  },
                  className: "hidden"
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Upload customer fabric photo (JPG, PNG or GIF. Max 2MB)" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { children: "Design Image" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mt-2", children: [
                /* @__PURE__ */ jsxs(Avatar, { className: "h-24 w-24 rounded-md", children: [
                  /* @__PURE__ */ jsx(AvatarImage, { src: designPreview || void 0, alt: "Design", className: "object-cover" }),
                  /* @__PURE__ */ jsx(AvatarFallback, { className: "rounded-md bg-muted", children: /* @__PURE__ */ jsx(Image, { className: "h-8 w-8 text-muted-foreground" }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxs(
                    Button,
                    {
                      type: "button",
                      variant: "outline",
                      size: "sm",
                      onClick: () => designInputRef.current?.click(),
                      children: [
                        /* @__PURE__ */ jsx(Camera, { className: "h-4 w-4 mr-2" }),
                        designPreview ? "Change" : "Upload"
                      ]
                    }
                  ),
                  designPreview && /* @__PURE__ */ jsxs(
                    Button,
                    {
                      type: "button",
                      variant: "outline",
                      size: "sm",
                      onClick: () => {
                        setDesignPreview(null);
                        setData("design_image", null);
                      },
                      children: [
                        /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4 mr-2" }),
                        "Remove"
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  ref: designInputRef,
                  type: "file",
                  accept: "image/*",
                  onChange: (e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setData("design_image", file);
                      setDesignPreview(URL.createObjectURL(file));
                    }
                  },
                  className: "hidden"
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Upload design reference image (JPG, PNG or GIF. Max 2MB)" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Pricing & Payment" }) }),
          /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Label, { children: "Total Amount *" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    type: "number",
                    step: "0.01",
                    value: data.total_amount,
                    onChange: (e) => setData("total_amount", e.target.value),
                    placeholder: "0.00"
                  }
                ),
                errors.total_amount && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.total_amount })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Label, { children: "Discount" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    type: "number",
                    step: "0.01",
                    value: data.discount,
                    onChange: (e) => setData("discount", e.target.value),
                    placeholder: "0.00"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Label, { children: "Advance Paid" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    type: "number",
                    step: "0.01",
                    value: data.advance_paid,
                    onChange: (e) => setData("advance_paid", e.target.value),
                    placeholder: "0.00"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { children: "Payment Method" }),
              /* @__PURE__ */ jsxs(Select, { value: data.payment_method, onValueChange: (value) => setData("payment_method", value), children: [
                /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsx(SelectItem, { value: "cash", children: "Cash" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "card", children: "Card" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "upi", children: "UPI" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "bank_transfer", children: "Bank Transfer" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "other", children: "Other" })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Dates & Additional Information" }) }),
          /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Label, { children: "Order Date *" }),
                /* @__PURE__ */ jsxs(Popover, { children: [
                  /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
                    Button,
                    {
                      variant: "outline",
                      className: cn(
                        "w-full justify-start text-left font-normal",
                        !data.order_date && "text-muted-foreground"
                      ),
                      children: [
                        /* @__PURE__ */ jsx(CalendarIcon, { className: "mr-2 h-4 w-4" }),
                        data.order_date ? format(new Date(data.order_date), "PPP") : /* @__PURE__ */ jsx("span", { children: "Pick a date" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsx(PopoverContent, { className: "w-auto p-0", children: /* @__PURE__ */ jsx(
                    Calendar,
                    {
                      mode: "single",
                      selected: data.order_date ? new Date(data.order_date) : void 0,
                      onSelect: (date) => setData("order_date", date ? format(date, "yyyy-MM-dd") : ""),
                      initialFocus: true
                    }
                  ) })
                ] }),
                errors.order_date && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.order_date })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Label, { children: "Delivery Date *" }),
                /* @__PURE__ */ jsxs(Popover, { children: [
                  /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
                    Button,
                    {
                      variant: "outline",
                      className: cn(
                        "w-full justify-start text-left font-normal",
                        !data.delivery_date && "text-muted-foreground"
                      ),
                      children: [
                        /* @__PURE__ */ jsx(CalendarIcon, { className: "mr-2 h-4 w-4" }),
                        data.delivery_date ? format(new Date(data.delivery_date), "PPP") : /* @__PURE__ */ jsx("span", { children: "Pick a date" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsx(PopoverContent, { className: "w-auto p-0", children: /* @__PURE__ */ jsx(
                    Calendar,
                    {
                      mode: "single",
                      selected: data.delivery_date ? new Date(data.delivery_date) : void 0,
                      onSelect: (date) => setData("delivery_date", date ? format(date, "yyyy-MM-dd") : ""),
                      initialFocus: true
                    }
                  ) })
                ] }),
                errors.delivery_date && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 mt-1", children: errors.delivery_date })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Label, { children: "Priority *" }),
                /* @__PURE__ */ jsxs(Select, { value: data.priority, onValueChange: (value) => setData("priority", value), children: [
                  /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsx(SelectItem, { value: "normal", children: "Normal" }),
                    /* @__PURE__ */ jsx(SelectItem, { value: "urgent", children: "Urgent" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { children: "Special Instructions" }),
              /* @__PURE__ */ jsx(
                Textarea,
                {
                  value: data.special_instructions,
                  onChange: (e) => setData("special_instructions", e.target.value),
                  rows: 3,
                  placeholder: "Any special instructions for this order..."
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { children: "Notes" }),
              /* @__PURE__ */ jsx(
                Textarea,
                {
                  value: data.notes,
                  onChange: (e) => setData("notes", e.target.value),
                  rows: 2,
                  placeholder: "Internal notes..."
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-2", children: [
          /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", onClick: () => window.history.back(), children: "Cancel" }),
          /* @__PURE__ */ jsx(Button, { type: "submit", disabled: processing, children: processing ? "Creating..." : "Create Order" })
        ] })
      ] })
    ] })
  ] });
}
export {
  OrdersCreateEnhanced as default
};
