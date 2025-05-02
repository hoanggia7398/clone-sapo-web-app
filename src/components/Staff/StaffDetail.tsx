"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Staff } from "@/mockData/staff";
import { Separator } from "@/components/ui/separator";
import { Check, X } from "lucide-react";

interface StaffDetailProps {
  staff: Staff;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function StaffDetail({
  staff,
  open,
  onOpenChange,
}: StaffDetailProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-purple-100 text-purple-800";
      case "manager":
        return "bg-blue-100 text-blue-800";
      case "cashier":
        return "bg-green-100 text-green-800";
      case "inventory":
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Staff Details</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <img
                src={staff.avatar || "https://via.placeholder.com/150"}
                alt={staff.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold">{staff.name}</h3>
            <Badge variant="outline" className={getRoleBadgeColor(staff.role)}>
              {staff.role.charAt(0).toUpperCase() + staff.role.slice(1)}
            </Badge>
            <p className="text-sm text-muted-foreground mt-1">
              {staff.storeName}
            </p>
            <Badge
              className="mt-2"
              variant={staff.status === "active" ? "default" : "outline"}
            >
              {staff.status.charAt(0).toUpperCase() + staff.status.slice(1)}
            </Badge>
          </div>

          <div className="col-span-2 space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">Contact Information</h4>
              <div className="grid grid-cols-1 gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email:</span>
                  <span>{staff.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Phone:</span>
                  <span>{staff.phone}</span>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <h4 className="font-medium">Employment Information</h4>
              <div className="grid grid-cols-1 gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Join Date:</span>
                  <span>{formatDate(staff.joinDate)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Active:</span>
                  <span>{formatDate(staff.lastActive)}</span>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <h4 className="font-medium">Permissions</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <div className="flex items-center">
                  {staff.permissions.products ? (
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                  ) : (
                    <X className="h-4 w-4 text-red-500 mr-2" />
                  )}
                  <span>Products</span>
                </div>
                <div className="flex items-center">
                  {staff.permissions.orders ? (
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                  ) : (
                    <X className="h-4 w-4 text-red-500 mr-2" />
                  )}
                  <span>Orders</span>
                </div>
                <div className="flex items-center">
                  {staff.permissions.customers ? (
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                  ) : (
                    <X className="h-4 w-4 text-red-500 mr-2" />
                  )}
                  <span>Customers</span>
                </div>
                <div className="flex items-center">
                  {staff.permissions.reports ? (
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                  ) : (
                    <X className="h-4 w-4 text-red-500 mr-2" />
                  )}
                  <span>Reports</span>
                </div>
                <div className="flex items-center">
                  {staff.permissions.settings ? (
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                  ) : (
                    <X className="h-4 w-4 text-red-500 mr-2" />
                  )}
                  <span>Settings</span>
                </div>
              </div>
            </div>

            {staff.salesPerformance && (
              <>
                <Separator />
                <div className="space-y-2">
                  <h4 className="font-medium">Sales Performance</h4>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Total Orders:
                      </span>
                      <span>{staff.salesPerformance.totalOrders}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Total Sales:
                      </span>
                      <span>
                        ${staff.salesPerformance.totalSales.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Average Order Value:
                      </span>
                      <span>
                        ${staff.salesPerformance.averageOrderValue.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
