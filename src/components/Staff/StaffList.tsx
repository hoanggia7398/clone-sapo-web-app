"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { staffData, Staff } from "@/mockData/staff";
import { MoreHorizontal } from "lucide-react";
import StaffDetail from "@/components/Staff/StaffDetail";
import StaffForm from "@/components/Staff/StaffForm";
import DeleteStaffDialog from "@/components/Staff/DeleteStaffDialog";

export default function StaffList() {
  const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

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

  const handleViewDetail = (staff: Staff) => {
    setSelectedStaff(staff);
    setShowDetailModal(true);
  };

  const handleEdit = (staff: Staff) => {
    setSelectedStaff(staff);
    setShowEditModal(true);
  };

  const handleDelete = (staff: Staff) => {
    setSelectedStaff(staff);
    setShowDeleteDialog(true);
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">ID</TableHead>
            <TableHead className="w-[200px]">Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Store</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {staffData.map((staff) => (
            <TableRow key={staff.id}>
              <TableCell className="font-medium">
                {staff.id.split("-")[1]}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  {staff.avatar && (
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img
                        src={staff.avatar}
                        alt={staff.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <span>{staff.name}</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={getRoleBadgeColor(staff.role)}
                >
                  {staff.role.charAt(0).toUpperCase() + staff.role.slice(1)}
                </Badge>
              </TableCell>
              <TableCell>{staff.storeName}</TableCell>
              <TableCell>{staff.email}</TableCell>
              <TableCell>
                <Badge
                  variant={staff.status === "active" ? "default" : "secondary"}
                  className={
                    staff.status === "active"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }
                >
                  {staff.status.charAt(0).toUpperCase() + staff.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleViewDetail(staff)}>
                      View details
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleEdit(staff)}>
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleDelete(staff)}
                      className="text-red-600 focus:text-red-600"
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {selectedStaff && (
        <>
          <StaffDetail
            staff={selectedStaff}
            open={showDetailModal}
            onOpenChange={setShowDetailModal}
          />
          <StaffForm
            staff={selectedStaff}
            open={showEditModal}
            onOpenChange={setShowEditModal}
            mode="edit"
          />
          <DeleteStaffDialog
            staff={selectedStaff}
            open={showDeleteDialog}
            onOpenChange={setShowDeleteDialog}
          />
        </>
      )}
    </div>
  );
}
