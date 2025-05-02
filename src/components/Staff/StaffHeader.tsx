"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import StaffForm from "./StaffForm";

interface StaffHeaderProps {
  onSearch?: (query: string) => void;
}

export default function StaffHeader({ onSearch }: StaffHeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddStaffModal, setShowAddStaffModal] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setSearchQuery(newQuery);
    if (onSearch) {
      onSearch(newQuery);
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Staff Management</h1>
          <p className="text-muted-foreground">
            Manage your staff members and their permissions
          </p>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Input
            placeholder="Search staff..."
            className="w-full sm:w-[300px]"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Button onClick={() => setShowAddStaffModal(true)}>Add Staff</Button>
        </div>
      </div>

      <StaffForm
        open={showAddStaffModal}
        onOpenChange={setShowAddStaffModal}
        mode="add"
      />
    </>
  );
}
