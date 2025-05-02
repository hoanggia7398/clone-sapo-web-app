"use client";

import { Store, stores } from "@/mockData/stores";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Search, Edit, Trash2 } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import DeleteStoreDialog from "./DeleteStoreDialog";
import StoreDetail from "./StoreDetail";
import StoreForm from "./StoreForm";


export default function StoresList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [storeToDelete, setStoreToDelete] = useState<Store | null>(null);
  const [storeToView, setStoreToView] = useState<Store | null>(null);
  const [storeToEdit, setStoreToEdit] = useState<Store | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  // Filter stores based on search term
  const filteredStores = stores.filter(
    (store) =>
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search stores by name, code, or city..."
          className="pl-8"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Store</TableHead>
            <TableHead>Code</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Manager</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredStores.map((store) => (
            <TableRow key={store.id}>
              <TableCell className="font-medium">
                {store.name}
                {store.isHeadquarters && (
                  <Badge variant="secondary" className="ml-2">
                    HQ
                  </Badge>
                )}
              </TableCell>
              <TableCell>{store.code}</TableCell>
              <TableCell>{store.city}</TableCell>
              <TableCell>{store.manager}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    store.status === "active" ? "default" : "destructive"
                  }
                  className={
                    store.status === "active"
                      ? "bg-green-100 text-green-800 hover:bg-green-200"
                      : ""
                  }
                >
                  {store.status}
                </Badge>
              </TableCell>
              <TableCell>{formatDate(store.createdAt)}</TableCell>
              <TableCell className="text-right space-x-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setStoreToView(store)}
                    >
                      <Search className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle>Store Details</DialogTitle>
                    </DialogHeader>
                    {storeToView && <StoreDetail store={storeToView} />}
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setStoreToEdit(store)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle>Edit Store</DialogTitle>
                      <DialogDescription>
                        Update the details of this store branch.
                      </DialogDescription>
                    </DialogHeader>
                    {storeToEdit && <StoreForm initialData={storeToEdit} />}
                  </DialogContent>
                </Dialog>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setStoreToDelete(store);
                    setShowDeleteDialog(true);
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {filteredStores.length === 0 && (
        <div className="text-center py-4">No stores match your search.</div>
      )}

      <DeleteStoreDialog
        isOpen={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
        store={storeToDelete}
      />
    </div>
  );
}
