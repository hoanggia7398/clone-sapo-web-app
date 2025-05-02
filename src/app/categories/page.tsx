"use client";

import { Button } from "@/components/ui/button";
import { CategoryTree } from "@/components/Categories/CategoryTree";
import { DeleteCategoryDialog } from "@/components/Categories/DeleteCategoryDialog";
import { CategoryForm } from "@/components/Categories/CategoryForm";
import {
  categories as initialCategories,
  Category,
} from "@/mockData/categories";
import { Plus, RefreshCw, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [searchTerm, setSearchTerm] = useState("");

  // Category form state
  const [formOpen, setFormOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [selectedParentId, setSelectedParentId] = useState<string | null>(null);

  // Delete dialog state
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState<Category | null>(
    null
  );

  // Filter categories based on search term
  const filteredCategories = searchTerm
    ? categories.filter(
        (category) =>
          category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (category.description &&
            category.description
              .toLowerCase()
              .includes(searchTerm.toLowerCase()))
      )
    : categories;

  // Root categories (for display)
  const rootCategories = filteredCategories.filter(
    (cat) => cat.parentId === null
  );

  // Handle category form actions
  const handleAddCategory = (parentId: string | null = null) => {
    setSelectedCategory(null);
    setSelectedParentId(parentId);
    setFormOpen(true);
  };

  const handleEditCategory = (category: Category) => {
    setSelectedCategory(category);
    setSelectedParentId(null);
    setFormOpen(true);
  };

  // Handle delete actions
  const handleDeleteRequest = (category: Category) => {
    setCategoryToDelete(category);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (!categoryToDelete) return;

    // Get children of the category to delete
    const childCategories = categories.filter(
      (cat) => cat.parentId === categoryToDelete.id
    );

    // Update children to have the parent's parentId
    const updatedChildren = childCategories.map((child) => ({
      ...child,
      parentId: categoryToDelete.parentId,
    }));

    // Remove the category and update any children
    setCategories((prevCategories) =>
      prevCategories
        .filter((cat) => cat.id !== categoryToDelete.id) // Remove the category
        .map((cat) => {
          // Update any children
          const updated = updatedChildren.find(
            (updatedChild) => updatedChild.id === cat.id
          );
          return updated || cat;
        })
    );

    setDeleteDialogOpen(false);
    setCategoryToDelete(null);
  };

  // Handle save (add/edit) category
  const handleSaveCategory = (data: Partial<Category>) => {
    if (selectedCategory) {
      // Editing existing category
      setCategories((prevCategories) =>
        prevCategories.map((cat) =>
          cat.id === selectedCategory.id ? { ...cat, ...data } : cat
        )
      );
    } else {
      // Adding new category
      setCategories((prevCategories) => [...prevCategories, data as Category]);
    }
  };

  return (
    <div className="container py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Product Categories</h1>
        <div className="flex items-center gap-2">
          <Button variant="default" onClick={() => handleAddCategory(null)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Category
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search categories..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCategories(initialCategories)}
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>

      <div className="border rounded-lg bg-white p-4">
        <div className="flex flex-col gap-1">
          {rootCategories.length === 0 ? (
            <div className="py-16 text-center text-muted-foreground">
              {searchTerm ? (
                <>
                  <p>No categories found for &quot;{searchTerm}&quot;</p>
                  <Button
                    variant="link"
                    className="mt-2"
                    onClick={() => setSearchTerm("")}
                  >
                    Clear search
                  </Button>
                </>
              ) : (
                <>
                  <p className="text-lg">No categories found</p>
                  <Button
                    variant="link"
                    className="mt-2"
                    onClick={() => handleAddCategory(null)}
                  >
                    Add your first category
                  </Button>
                </>
              )}
            </div>
          ) : (
            <CategoryTree
              categories={filteredCategories}
              onEdit={handleEditCategory}
              onDelete={handleDeleteRequest}
              onAdd={handleAddCategory}
            />
          )}
        </div>
      </div>

      {/* Category form dialog */}
      <CategoryForm
        open={formOpen}
        onOpenChange={setFormOpen}
        initialData={selectedCategory}
        parentId={selectedParentId}
        onSave={handleSaveCategory}
      />

      {/* Delete confirmation dialog */}
      <DeleteCategoryDialog
        category={categoryToDelete}
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
}
