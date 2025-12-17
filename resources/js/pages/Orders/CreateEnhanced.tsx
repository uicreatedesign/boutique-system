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
import { toast } from 'sonner';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { ChevronDown, ChevronUp, Camera, Trash2, Image as ImageIcon } from 'lucide-react';

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
  customers: Array<{ id: number; name: string }>;
  garmentTypes: Array<{ id: number; name: string }>;
  tailors: Array<{ id: number; name: string }>;
  fabrics: Array<{ id: number; name: string; price_per_meter: number }>;
  statuses: Array<{ id: number; name: string; color: string }>;
  categories: MeasurementCategory[];
}

export default function OrdersCreateEnhanced({ customers, garmentTypes, tailors, fabrics, statuses, categories }: Props) {
  const [existingMeasurements, setExistingMeasurements] = useState<any[]>([]);
  const [measurementOption, setMeasurementOption] = useState<'existing' | 'new' | 'skip'>('skip');
  const [showMeasurements, setShowMeasurements] = useState(false);
  const [newMeasurements, setNewMeasurements] = useState<Record<string, string>>({});
  const [selectedMeasurementType, setSelectedMeasurementType] = useState('');
  const [designPreview, setDesignPreview] = useState<string | null>(null);
  const [fabricPreview, setFabricPreview] = useState<string | null>(null);
  const [boutiqueFabricPreview, setBoutiqueFabricPreview] = useState<string | null>(null);
  const designInputRef = useRef<HTMLInputElement>(null);
  const fabricInputRef = useRef<HTMLInputElement>(null);
  const boutiqueFabricInputRef = useRef<HTMLInputElement>(null);



  const { data, setData, post, processing, errors } = useForm({
    customer_id: '',
    garment_type_id: '',
    tailor_id: '',
    measurement_id: '',
    measurement_option: 'skip',
    new_measurement_type: '',
    new_measurements: {},
    measurement_notes: '',
    fabric_id: '',
    customer_fabric: false,
    boutique_fabric: false,
    customer_fabric_photo: null as File | null,
    boutique_fabric_photo: null as File | null,
    design_image: null as File | null,
    payment_method: 'cash',
    stitching_status_id: statuses[0]?.id.toString() || '',
    order_date: new Date().toISOString().split('T')[0],
    delivery_date: '',
    priority: 'normal',
    total_amount: '',
    advance_paid: '',
    discount: '0',
    special_instructions: '',
    notes: '',
  });

  const handleCustomerChange = async (customerId: string) => {
    setData('customer_id', customerId);
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

  const handleMeasurementOptionChange = (option: 'existing' | 'new' | 'skip') => {
    setMeasurementOption(option);
    setData('measurement_option', option);
    if (option === 'new') {
      setShowMeasurements(true);
    } else {
      setShowMeasurements(false);
    }
  };

  const selectedCategory = categories.find(cat => cat.slug === selectedMeasurementType);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = {
      ...data,
      new_measurements: measurementOption === 'new' ? newMeasurements : {},
    };

    post('/orders', {
      data: formData,
      onSuccess: () => {
        toast.success('Order created successfully');
      },
      onError: () => {
        toast.error('Failed to create order');
      }
    });
  };

  return (
    <AppLayout>
      <Head title="Create Order" />
      
      <div className="space-y-6 p-4 max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Create Order</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Order Details */}
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
                      <div className="px-2 pb-2 sticky top-0 bg-popover z-10">
                        <Input
                          placeholder="Search customer..."
                          className="h-8"
                          onChange={(e) => {
                            const search = e.target.value.toLowerCase();
                            const items = document.querySelectorAll('[data-customer-item]');
                            items.forEach((item) => {
                              const text = item.textContent?.toLowerCase() || '';
                              (item as HTMLElement).style.display = text.includes(search) ? '' : 'none';
                            });
                          }}
                          onKeyDown={(e) => e.stopPropagation()}
                        />
                      </div>
                      {customers.map((customer) => (
                        <SelectItem key={customer.id} value={customer.id.toString()} data-customer-item>
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

          {/* Measurement Section */}
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
                          {categories.map((category) => (
                            <SelectItem key={category.id} value={category.slug}>
                              {category.name}
                            </SelectItem>
                          ))}
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

                        {showMeasurements && (
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                            {selectedCategory.fields.map((field) => (
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
                          <Label>Measurement Notes</Label>
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

          {/* Fabric & Design */}
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

          {/* Pricing & Payment */}
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

          {/* Dates & Additional Info */}
          <Card>
            <CardHeader>
              <CardTitle>Dates & Additional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label>Order Date *</Label>
                  <Input
                    type="date"
                    value={data.order_date}
                    onChange={(e) => setData('order_date', e.target.value)}
                  />
                  {errors.order_date && <p className="text-sm text-red-500 mt-1">{errors.order_date}</p>}
                </div>

                <div>
                  <Label>Delivery Date *</Label>
                  <Input
                    type="date"
                    value={data.delivery_date}
                    onChange={(e) => setData('delivery_date', e.target.value)}
                  />
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
              {processing ? 'Creating...' : 'Create Order'}
            </Button>
          </div>
        </form>
      </div>
    </AppLayout>
  );
}
