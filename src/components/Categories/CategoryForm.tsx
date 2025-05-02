"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Category, categories } from "@/mockData/categories";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";

interface CategoryFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialData?: Category | null;
  parentId?: string | null;
  onSave: (data: Partial<Category>) => void;
}

export const CategoryForm = ({
  open,
  onOpenChange,
  initialData,
  parentId,
  onSave,
}: CategoryFormProps) => {
  const isEditing = !!initialData;
  const title = isEditing ? "Edit Category" : "Add New Category";

  const [formData, setFormData] = useState<Partial<Category>>({
    name: "",
    description: "",
    parentId: parentId || null,
    isActive: true,
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
      });
    } else {
      setFormData({
        name: "",
        description: "",
        parentId: parentId || null,
        isActive: true,
      });
    }
  }, [initialData, parentId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      parentId: value === "none" ? null : value,
    }));
  };

  const handleStatusChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, isActive: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create a slug from the name
    const slug = formData.name?.toLowerCase().replace(/\s+/g, "-") || "";

    // Mock the creation of IDs, timestamps
    const submitData = {
      ...formData,
      slug,
      ...(isEditing
        ? {}
        : {
            id: `cat-${Math.floor(Math.random() * 1000)}`,
            createdAt: new Date().toISOString(),
            productCount: 0,
          }),
      updatedAt: new Date().toISOString(),
    };

    onSave(submitData);
    onOpenChange(false);
  };

  // Get parent categories excluding the current category and its children
  const getValidParentCategories = () => {
    if (!initialData) return categories;

    // When editing, we need to filter out the current category and all its descendants
    const isDescendantOf = (
      category: Category,
      potentialAncestorId: string
    ): boolean => {
      if (category.id === potentialAncestorId) return true;

      const parent = categories.find((c) => c.id === category.parentId);
      if (!parent) return false;

      return isDescendantOf(parent, potentialAncestorId);
    };

    return categories.filter(
      (cat) => cat.id !== initialData.id && !isDescendantOf(cat, initialData.id)
    );
  };

  const validParentCategories = getValidParentCategories();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description || ""}
                onChange={handleChange}
                className="col-span-3"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="parentCategory" className="text-right">
                Parent Category
              </Label>
              <Select
                value={formData.parentId || "none"}
                onValueChange={handleSelectChange}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select parent category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None (Root Category)</SelectItem>
                  {validParentCategories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="isActive" className="text-right">
                Status
              </Label>
              <div className="flex items-center gap-2 col-span-3">
                <Switch
                  id="isActive"
                  checked={formData.isActive}
                  onCheckedChange={handleStatusChange}
                />
                <span>{formData.isActive ? "Active" : "Inactive"}</span>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
