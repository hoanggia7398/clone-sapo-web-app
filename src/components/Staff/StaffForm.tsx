"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Staff, StaffRole } from "@/mockData/staff";

interface StaffFormProps {
  staff?: Staff;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "add" | "edit";
}

export default function StaffForm({
  staff,
  open,
  onOpenChange,
  mode,
}: StaffFormProps) {
  const isEditMode = mode === "edit";
  const dialogTitle = isEditMode ? "Edit Staff Member" : "Add New Staff Member";

  const [formData, setFormData] = useState<Partial<Staff>>({
    name: "",
    email: "",
    phone: "",
    role: "cashier",
    storeId: "",
    storeName: "",
    status: "active",
    permissions: {
      products: false,
      orders: false,
      customers: false,
      reports: false,
      settings: false,
    },
  });

  useEffect(() => {
    if (isEditMode && staff) {
      setFormData({
        ...staff,
      });
    }
  }, [staff, isEditMode]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRoleChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      role: value as StaffRole,
    }));

    // Set default permissions based on role
    if (value === "admin") {
      setFormData((prev) => ({
        ...prev,
        permissions: {
          products: true,
          orders: true,
          customers: true,
          reports: true,
          settings: true,
        },
      }));
    } else if (value === "manager") {
      setFormData((prev) => ({
        ...prev,
        permissions: {
          products: true,
          orders: true,
          customers: true,
          reports: true,
          settings: false,
        },
      }));
    } else if (value === "cashier") {
      setFormData((prev) => ({
        ...prev,
        permissions: {
          products: false,
          orders: true,
          customers: true,
          reports: false,
          settings: false,
        },
      }));
    } else if (value === "inventory") {
      setFormData((prev) => ({
        ...prev,
        permissions: {
          products: true,
          orders: false,
          customers: false,
          reports: true,
          settings: false,
        },
      }));
    }
  };

  const handleStoreChange = (value: string) => {
    // Simulating store selection
    const storeMapping: Record<string, string> = {
      "store-001": "Main Store",
      "store-002": "Downtown Branch",
      "store-003": "Mall Kiosk",
    };

    setFormData((prev) => ({
      ...prev,
      storeId: value,
      storeName: storeMapping[value],
    }));
  };

  const handleStatusChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      status: value as "active" | "inactive",
    }));
  };

  const handlePermissionChange = (
    permission: keyof Staff["permissions"],
    checked: boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      permissions: {
        ...prev.permissions!,
        [permission]: checked,
      },
    }));
  };

  const handleSave = () => {
    console.log("Saving staff member:", formData);
    // Here you would typically save the data to your backend
    // For now, we'll just close the dialog
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter full name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email address"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter phone number"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select value={formData.role} onValueChange={handleRoleChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="cashier">Cashier</SelectItem>
                  <SelectItem value="inventory">Inventory</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="store">Assigned Store</Label>
              <Select
                value={formData.storeId}
                onValueChange={handleStoreChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select store" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="store-001">Main Store</SelectItem>
                  <SelectItem value="store-002">Downtown Branch</SelectItem>
                  <SelectItem value="store-003">Mall Kiosk</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select
                value={formData.status}
                onValueChange={handleStatusChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3 pt-2">
              <Label>Permissions</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="products"
                    checked={formData.permissions?.products}
                    onCheckedChange={(checked: boolean) =>
                      handlePermissionChange("products", checked)
                    }
                  />
                  <Label htmlFor="products" className="cursor-pointer">
                    Products
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="orders"
                    checked={formData.permissions?.orders}
                    onCheckedChange={(checked: boolean) =>
                      handlePermissionChange("orders", checked)
                    }
                  />
                  <Label htmlFor="orders" className="cursor-pointer">
                    Orders
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="customers"
                    checked={formData.permissions?.customers}
                    onCheckedChange={(checked: boolean) =>
                      handlePermissionChange("customers", checked)
                    }
                  />
                  <Label htmlFor="customers" className="cursor-pointer">
                    Customers
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="reports"
                    checked={formData.permissions?.reports}
                    onCheckedChange={(checked: boolean) =>
                      handlePermissionChange("reports", checked)
                    }
                  />
                  <Label htmlFor="reports" className="cursor-pointer">
                    Reports
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="settings"
                    checked={formData.permissions?.settings}
                    onCheckedChange={(checked: boolean) =>
                      handlePermissionChange("settings", checked)
                    }
                  />
                  <Label htmlFor="settings" className="cursor-pointer">
                    Settings
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            {isEditMode ? "Update Staff" : "Add Staff"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
