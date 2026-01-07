import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { toast } from 'sonner';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { ChevronDown, ChevronUp, Camera, Trash2, Image as ImageIcon, CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface MeasurementField {
  id: number;
  name: string;
  slug: string;
  unit: string;
  is_required: boolean;
}

interface MeasurementCategory {
  id: number;
  name: string;
  slug: string;
  fields: MeasurementField[];
}

interface Props {
  order: any;
  customers: Array<{ id: number; name: string }>;
  garmentTypes: Array<{ id: number; name: string }>;
  tailors: Array<{ id: number; name: string }>;
  fabrics: Array<{ id: number; name: string; price_per_meter: number }>;
  statuses: Array<{ id: number; name: string; color: string }>;
  categories: MeasurementCategory[];
}

export default function OrdersEdit({ order, customers, garmentTypes, tailors, fabrics, statuses, categories = [] }: Props) {
  const [existingMeasurements, setExistingMeasurements] = useState<any[]>([]);
  const [measurementOption, setMeasurementOption] = useState<'existing' | 'new' | 'skip'>(order.measurement_id ? 'existing' : 'skip');
  const [showMeasurements, setShowMeasurements] = useState(false);
  const [newMeasurements, setNewMeasurements] = useState<Record<string, string>>(order.measurement?.measurements || {});
  const [selectedMeasurementType, setSelectedMeasurementType] = useState(order.measurement?.measurement_type || '');
  const [designPreview, setDesignPreview] = useState<string | null>(order.design_image || null);
  const [fabricPreview, setFabricPreview] = useState<string | null>(order.customer_fabric_photo || null);
  const [boutiqueFabricPreview, setBoutiqueFabricPreview] = useState<string | null>(order.boutique_fabric_photo || null);
  const designInputRef = useRef<HTMLInputElement>(null);
  const fabricInputRef = useRef<HTMLInputElement>(null);
  const boutiqueFabricInputRef = useRef<HTMLInputElement>(null);

  const { data, setData, put, processing, errors } = useForm({
    customer_id: order.customer_id?.toString() || '',
    garment_type_id: order.garment_type_id?.toString() || '',
    tailor_id: order.tailor_id?.toString() || '',
    measurement_id: order.measurement_id?.toString() || '',
    measurement_option: order.measurement_id ? 'existing' : 'skip',
    new_measurement_type: '',
    new_measurements: {},
    measurement_notes: '',
    fabric_id: order.fabric_id?.toString() || '',
    customer_fabric: order.customer_fabric || false,
    boutique_fabric: order.boutique_fabric || false,
    customer_fabric_photo: null as File | null,
    boutique_fabric_photo: null as File | null,
    design_image: null as File | null,
    payment_method: 'cash',
    stitching_status_id: order.stitching_status_id?.toString() || '',
    order_date: order.order_date ? format(new Date(order.order_date), 'yyyy-MM-dd') : '',
    delivery_date: order.delivery_date ? format(new Date(order.delivery_date), 'yyyy-MM-dd') : '',
    priority: order.priority || 'normal',
    total_amount: order.total_amount?.toString() || '',
    advance_paid: order.advance_paid?.toString() || '',
    discount: order.discount?.toString() || '',
    special_instructions: order.special_instructions || '',
    notes: order.notes || '',
  });

  useEffect(() => {
    if (order.customer_id) {
      loadMeasurements(order.customer_id.toString());
    }
  }, []);

  const loadMeasurements = async (customerId: string) => {
    if (customerId) {
      try {
        const response = await axios.get(`/api/measurements?customer_id=${customerId}`);
        setExistingMeasurements(response.data);
      } catch (error) {
        console.error('Failed to fetch measurements:', error);
      }
    } else {
      setExistingMeasurements([]);
    }
  };

  const handleCustomerChange = async (customerId: string) => {
    setData('customer_id', customerId);
    loadMeasurements(customerId);
  };

  const handleMeasurementOptionChange = (option: 'existing' | 'new' | 'skip') => {
    setMeasurementOption(option);
    setData('measurement_option', option);
    if (option === 'new') {
      setShowMeasurements(true);
    } else {
      setShowMeasurements(false);
    }
  };

  const selectedCategory = categories?.find(cat => cat.slug === selectedMeasurementType);
  const showMeasurementFields = measurementOption === 'new' && selectedCategory;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = {
      ...data,
      new_measurements: measurementOption === 'new' ? newMeasurements : {},
    };

    put(`/orders/${order.id}`, {
      data: formData,
      onSuccess: () => {
        toast.success('Order updated successfully');
      },
      onError: () => {
        toast.error('Failed to update order');
      }
    });
  };

  return (
    <AppLayout>
      <Head title={`Edit Order ${order.order_number}`} />
      
      <div className="space-y-6 p-4 max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Edit Order {order.order_number}</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Customer *</Label>
                  <Select value={data.customer_id} onValueChange={handleCustomerChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select customer" />
                    </SelectTrigger>
                    <SelectContent>
                      {customers.map((customer) => (
                        <SelectItem key={customer.id} value={customer.id.toString()}>
                          {customer.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.customer_id && <p className="text-sm text-red-500 mt-1">{errors.customer_id}</p>}
                </div>

                <div>
                  <Label>Garment Type *</Label>
                  <Select value={data.garment_type_id} onValueChange={(value) => setData('garment_type_id', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select garment type" />
                    </SelectTrigger>
                    <SelectContent>
                      {garmentTypes.map((type) => (
                        <SelectItem key={type.id} value={type.id.toString()}>
                          {type.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.garment_type_id && <p className="text-sm text-red-500 mt-1">{errors.garment_type_id}</p>}
                </div>

                <div>
                  <Label>Tailor *</Label>
                  <Select value={data.tailor_id} onValueChange={(value) => setData('tailor_id', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select tailor" />
                    </SelectTrigger>
                    <SelectContent>
                      {tailors.map((tailor) => (
                        <SelectItem key={tailor.id} value={tailor.id.toString()}>
                          {tailor.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.tailor_id && <p className="text-sm text-red-500 mt-1">{errors.tailor_id}</p>}
                </div>

                <div>
                  <Label>Status *</Label>
                  <Select value={data.stitching_status_id} onValueChange={(value) => setData('stitching_status_id', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {statuses.map((status) => (
                        <SelectItem key={status.id} value={status.id.toString()}>
                          {status.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {data.customer_id && (
            <Card>
              <CardHeader>
                <CardTitle>Measurements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <RadioGroup value={measurementOption} onValueChange={handleMeasurementOptionChange}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="skip" id="skip" />
                    <Label htmlFor="skip" className="cursor-pointer">Skip measurements</Label>
                  </div>
                  
                  {existingMeasurements.length > 0 && (
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="existing" id="existing" />
                      <Label htmlFor="existing" className="cursor-pointer">Use existing measurement</Label>
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="new" id="new" />
                    <Label htmlFor="new" className="cursor-pointer">Create new measurement</Label>
                  </div>
                </RadioGroup>

                {measurementOption === 'existing' && existingMeasurements.length > 0 && (
                  <div>
                    <Label>Select Measurement</Label>
                    <Select value={data.measurement_id} onValueChange={(value) => setData('measurement_id', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select measurement" />
                      </SelectTrigger>
                      <SelectContent>
                        {existingMeasurements.map((measurement) => (
                          <SelectItem key={measurement.id} value={measurement.id.toString()}>
                            {measurement.measurement_type} - {new Date(measurement.created_at).toLocaleDateString()}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {measurementOption === 'new' && (
                  <div className="space-y-4 border-t pt-4">
                    <div>
                      <Label>Measurement Type *</Label>
                      <Select value={selectedMeasurementType} onValueChange={(value) => {
                        setSelectedMeasurementType(value);
                        setData('new_measurement_type', value);
                      }}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select measurement type" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories?.map((category) => (
                            <SelectItem key={category.id} value={category.slug}>
                              {category.name}
                            </SelectItem>
                          )) || []}
                        </SelectContent>
                      </Select>
                    </div>

                    {selectedCategory && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label className="text-base font-semibold">{selectedCategory.name} Measurements</Label>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => setShowMeasurements(!showMeasurements)}
                          >
                            {showMeasurements ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                          </Button>
                        </div>

                        {showMeasurementFields && (
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 rounded-lg border border-muted">
                            {selectedCategory?.fields.map((field) => (
                              <div key={field.id}>
                                <Label htmlFor={field.slug} className="text-sm">
                                  {field.name} ({field.unit})
                                  {field.is_required && <span className="text-red-500 ml-1">*</span>}
                                </Label>
                                <Input
                                  id={field.slug}
                                  type="number"
                                  step="0.1"
                                  placeholder="0.0"
                                  value={newMeasurements[field.slug] || ''}
                                  onChange={(e) => {
                                    const updated = { ...newMeasurements, [field.slug]: e.target.value };
                                    setNewMeasurements(updated);
                                    setData('new_measurements', updated);
                                  }}
                                  required={field.is_required}
                                />
                              </div>
                            ))}
                          </div>
                        )}

                        <div>
                          <Label className="mb-2">Measurement Notes</Label>
                          <Textarea
                            value={data.measurement_notes}
                            onChange={(e) => setData('measurement_notes', e.target.value)}
                            rows={2}
                            placeholder="Any special notes about measurements..."
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle>Fabric & Design</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="customer_fabric"
                    checked={data.customer_fabric}
                    onCheckedChange={(checked) => setData('customer_fabric', checked as boolean)}
                  />
                  <label htmlFor="customer_fabric" className="text-sm cursor-pointer">
                    Customer provided fabric
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="boutique_fabric"
                    checked={data.boutique_fabric}
                    onCheckedChange={(checked) => setData('boutique_fabric', checked as boolean)}
                  />
                  <label htmlFor="boutique_fabric" className="text-sm cursor-pointer">
                    Boutique provided fabric
                  </label>
                </div>
              </div>

              {data.boutique_fabric && (
                <div>
                  <Label>Fabric</Label>
                  <Select value={data.fabric_id} onValueChange={(value) => setData('fabric_id', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select fabric" />
                    </SelectTrigger>
                    <SelectContent>
                      {fabrics.map((fabric) => (
                        <SelectItem key={fabric.id} value={fabric.id.toString()}>
                          {fabric.name} - ${fabric.price_per_meter}/meter
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {data.boutique_fabric && (
                <div>
                  <Label>Boutique Fabric Photo</Label>
                  <div className="flex items-center gap-4 mt-2">
                    <Avatar className="h-24 w-24 rounded-md">
                      <AvatarImage src={boutiqueFabricPreview || undefined} alt="Boutique Fabric" className="object-cover" />
                      <AvatarFallback className="rounded-md bg-muted">
                        <ImageIcon className="h-8 w-8 text-muted-foreground" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => boutiqueFabricInputRef.current?.click()}
                      >
                        <Camera className="h-4 w-4 mr-2" />
                        {boutiqueFabricPreview ? 'Change' : 'Upload'}
                      </Button>
                      {boutiqueFabricPreview && (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setBoutiqueFabricPreview(null);
                            setData('boutique_fabric_photo', null);
                          }}
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Remove
                        </Button>
                      )}
                    </div>
                  </div>
                  <input
                    ref={boutiqueFabricInputRef}
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setData('boutique_fabric_photo', file);
                        setBoutiqueFabricPreview(URL.createObjectURL(file));
                      }
                    }}
                    className="hidden"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Upload boutique fabric photo (JPG, PNG or GIF. Max 2MB)
                  </p>
                </div>
              )}

              {data.customer_fabric && (
                <div>
                  <Label>Customer Fabric Photo</Label>
                  <div className="flex items-center gap-4 mt-2">
                    <Avatar className="h-24 w-24 rounded-md">
                      <AvatarImage src={fabricPreview || undefined} alt="Fabric" className="object-cover" />
                      <AvatarFallback className="rounded-md bg-muted">
                        <ImageIcon className="h-8 w-8 text-muted-foreground" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => fabricInputRef.current?.click()}
                      >
                        <Camera className="h-4 w-4 mr-2" />
                        {fabricPreview ? 'Change' : 'Upload'}
                      </Button>
                      {fabricPreview && (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setFabricPreview(null);
                            setData('customer_fabric_photo', null);
                          }}
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Remove
                        </Button>
                      )}
                    </div>
                  </div>
                  <input
                    ref={fabricInputRef}
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setData('customer_fabric_photo', file);
                        setFabricPreview(URL.createObjectURL(file));
                      }
                    }}
                    className="hidden"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Upload customer fabric photo (JPG, PNG or GIF. Max 2MB)
                  </p>
                </div>
              )}

              <div>
                <Label>Design Image</Label>
                <div className="flex items-center gap-4 mt-2">
                  <Avatar className="h-24 w-24 rounded-md">
                    <AvatarImage src={designPreview || undefined} alt="Design" className="object-cover" />
                    <AvatarFallback className="rounded-md bg-muted">
                      <ImageIcon className="h-8 w-8 text-muted-foreground" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => designInputRef.current?.click()}
                    >
                      <Camera className="h-4 w-4 mr-2" />
                      {designPreview ? 'Change' : 'Upload'}
                    </Button>
                    {designPreview && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setDesignPreview(null);
                          setData('design_image', null);
                        }}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Remove
                      </Button>
                    )}
                  </div>
                </div>
                <input
                  ref={designInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setData('design_image', file);
                      setDesignPreview(URL.createObjectURL(file));
                    }
                  }}
                  className="hidden"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Upload design reference image (JPG, PNG or GIF. Max 2MB)
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pricing & Payment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label>Total Amount *</Label>
                  <Input
                    type="number"
                    step="0.01"
                    value={data.total_amount}
                    onChange={(e) => setData('total_amount', e.target.value)}
                    placeholder="0.00"
                  />
                  {errors.total_amount && <p className="text-sm text-red-500 mt-1">{errors.total_amount}</p>}
                </div>

                <div>
                  <Label>Discount</Label>
                  <Input
                    type="number"
                    step="0.01"
                    value={data.discount}
                    onChange={(e) => setData('discount', e.target.value)}
                    placeholder="0.00"
                  />
                </div>

                <div>
                  <Label>Advance Paid</Label>
                  <Input
                    type="number"
                    step="0.01"
                    value={data.advance_paid}
                    onChange={(e) => setData('advance_paid', e.target.value)}
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div>
                <Label>Payment Method</Label>
                <Select value={data.payment_method} onValueChange={(value) => setData('payment_method', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cash">Cash</SelectItem>
                    <SelectItem value="card">Card</SelectItem>
                    <SelectItem value="upi">UPI</SelectItem>
                    <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dates & Additional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label>Order Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !data.order_date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {data.order_date ? format(new Date(data.order_date), "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={data.order_date ? new Date(data.order_date) : undefined}
                        onSelect={(date) => setData('order_date', date ? format(date, 'yyyy-MM-dd') : '')}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  {errors.order_date && <p className="text-sm text-red-500 mt-1">{errors.order_date}</p>}
                </div>

                <div>
                  <Label>Delivery Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !data.delivery_date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {data.delivery_date ? format(new Date(data.delivery_date), "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={data.delivery_date ? new Date(data.delivery_date) : undefined}
                        onSelect={(date) => setData('delivery_date', date ? format(date, 'yyyy-MM-dd') : '')}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  {errors.delivery_date && <p className="text-sm text-red-500 mt-1">{errors.delivery_date}</p>}
                </div>

                <div>
                  <Label>Priority *</Label>
                  <Select value={data.priority} onValueChange={(value) => setData('priority', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="normal">Normal</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label>Special Instructions</Label>
                <Textarea
                  value={data.special_instructions}
                  onChange={(e) => setData('special_instructions', e.target.value)}
                  rows={3}
                  placeholder="Any special instructions for this order..."
                />
              </div>

              <div>
                <Label>Notes</Label>
                <Textarea
                  value={data.notes}
                  onChange={(e) => setData('notes', e.target.value)}
                  rows={2}
                  placeholder="Internal notes..."
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => window.history.back()}>
              Cancel
            </Button>
            <Button type="submit" disabled={processing}>
              {processing ? 'Updating...' : 'Update Order'}
            </Button>
          </div>
        </form>
      </div>
    </AppLayout>
  );
}
