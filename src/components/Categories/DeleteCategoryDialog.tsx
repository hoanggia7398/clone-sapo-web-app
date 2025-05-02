"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Category, getChildCategories } from "@/mockData/categories";

interface DeleteCategoryDialogProps {
  category: Category | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}

export const DeleteCategoryDialog = ({
  category,
  open,
  onOpenChange,
  onConfirm,
}: DeleteCategoryDialogProps) => {
  if (!category) return null;

  const childCategories = getChildCategories(category.id);
  const hasChildren = childCategories.length > 0;

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            {hasChildren ? (
              <>
                <p className="font-medium text-destructive mb-2">
                  Warning: This category has {childCategories.length}{" "}
                  subcategories.
                </p>
                <p>
                  Deleting this category will move all its subcategories to the
                  root level.
                </p>
              </>
            ) : (
              <p>
                This will permanently delete the category &quot;{category.name}
                &quot;.
              </p>
            )}

            {category.productCount > 0 && (
              <p className="mt-2">
                {category.productCount} products associated with this category
                will be unassigned.
              </p>
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
