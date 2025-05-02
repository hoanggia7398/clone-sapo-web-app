"use client";

import { Store } from "@/mockData/stores";
import { useRouter } from "next/navigation";
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

interface DeleteStoreDialogProps {
  store: Store | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function DeleteStoreDialog({
  store,
  isOpen,
  onClose,
}: DeleteStoreDialogProps) {
  const router = useRouter();

  if (!store) return null;

  const handleDelete = () => {
    // In a real app, this would make an API call to delete the store
    console.log("Deleting store:", store.id);

    // Simulate successful deletion
    setTimeout(() => {
      router.refresh();
      onClose();
    }, 500);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action will permanently delete the store branch{" "}
            <strong>{store.name}</strong> ({store.code}).
            {store.isHeadquarters && (
              <div className="mt-2 text-red-500">
                Warning: This is your headquarters store! Deleting it may affect
                your business operations.
              </div>
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
