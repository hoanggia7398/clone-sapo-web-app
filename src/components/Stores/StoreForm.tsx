"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Store } from "@/mockData/stores";
import { useRouter } from "next/navigation";

interface StoreFormProps {
  initialData?: Store;
}

export default function StoreForm({ initialData }: StoreFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<Partial<Store>>(
    initialData || {
      name: "",
      code: "",
      address: "",
      city: "",
      phone: "",
      email: "",
      manager: "",
      status: "active",
      openingHours: {
        weekdays: "08:00 - 20:00",
        saturday: "08:00 - 18:00",
        sunday: "10:00 - 16:00",
      },
      isHeadquarters: false,
    }
  );

  // Basic form validation
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name?.trim()) newErrors.name = "Store name is required";
    if (!formData.code?.trim()) newErrors.code = "Store code is required";
    if (!formData.address?.trim()) newErrors.address = "Address is required";
    if (!formData.city?.trim()) newErrors.city = "City is required";
    if (!formData.phone?.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.manager?.trim())
      newErrors.manager = "Manager name is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: string, value: any) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      setFormData({
        ...formData,
        [parent]: {
          ...(formData[parent as keyof typeof formData] as any),
          [child]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [field]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    // In a real app, this would make an API call to save the store
    // For this mock implementation, we just simulate success and refresh
    console.log("Store data submitted:", formData);

    // Simulate successful submission
    setTimeout(() => {
      router.refresh();
      // Would close the dialog here in a real implementation
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">
            Store Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            value={formData.name || ""}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Store Name"
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="code">
            Store Code <span className="text-red-500">*</span>
          </Label>
          <Input
            id="code"
            value={formData.code || ""}
            onChange={(e) => handleChange("code", e.target.value)}
            placeholder="Store Code (e.g., ST-001)"
            className={errors.code ? "border-red-500" : ""}
          />
          {errors.code && <p className="text-red-500 text-sm">{errors.code}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">
            Address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="address"
            value={formData.address || ""}
            onChange={(e) => handleChange("address", e.target.value)}
            placeholder="Street Address"
            className={errors.address ? "border-red-500" : ""}
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="city">
            City <span className="text-red-500">*</span>
          </Label>
          <Input
            id="city"
            value={formData.city || ""}
            onChange={(e) => handleChange("city", e.target.value)}
            placeholder="City"
            className={errors.city ? "border-red-500" : ""}
          />
          {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">
            Phone <span className="text-red-500">*</span>
          </Label>
          <Input
            id="phone"
            value={formData.phone || ""}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="Phone Number"
            className={errors.phone ? "border-red-500" : ""}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email || ""}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Email"
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="manager">
            Manager <span className="text-red-500">*</span>
          </Label>
          <Input
            id="manager"
            value={formData.manager || ""}
            onChange={(e) => handleChange("manager", e.target.value)}
            placeholder="Manager Name"
            className={errors.manager ? "border-red-500" : ""}
          />
          {errors.manager && (
            <p className="text-red-500 text-sm">{errors.manager}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select
            value={formData.status || "active"}
            onValueChange={(value) => handleChange("status", value)}
          >
            <SelectTrigger id="status">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="p-4 border rounded-md space-y-3">
        <h3 className="font-medium">Opening Hours</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="weekdays">Weekdays</Label>
            <Input
              id="weekdays"
              value={formData.openingHours?.weekdays || ""}
              onChange={(e) =>
                handleChange("openingHours.weekdays", e.target.value)
              }
              placeholder="e.g., 08:00 - 20:00"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="saturday">Saturday</Label>
            <Input
              id="saturday"
              value={formData.openingHours?.saturday || ""}
              onChange={(e) =>
                handleChange("openingHours.saturday", e.target.value)
              }
              placeholder="e.g., 08:00 - 18:00"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="sunday">Sunday</Label>
            <Input
              id="sunday"
              value={formData.openingHours?.sunday || ""}
              onChange={(e) =>
                handleChange("openingHours.sunday", e.target.value)
              }
              placeholder="e.g., 10:00 - 16:00"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="isHeadquarters"
          checked={!!formData.isHeadquarters}
          onCheckedChange={(checked) => handleChange("isHeadquarters", checked)}
        />
        <Label htmlFor="isHeadquarters">This is the headquarters</Label>
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        <Button
          variant="outline"
          type="button"
          onClick={() => router.refresh()}
        >
          Cancel
        </Button>
        <Button type="submit">
          {initialData ? "Update Store" : "Create Store"}
        </Button>
      </div>
    </form>
  );
}
