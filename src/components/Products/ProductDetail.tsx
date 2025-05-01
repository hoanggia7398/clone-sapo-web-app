"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/mockData/products";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  Package,
  Tag,
  Calendar,
  DollarSign,
  Layers,
  Info,
} from "lucide-react";

interface ProductDetailProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onEdit: (product: Product) => void;
}

export const ProductDetail = ({
  product,
  isOpen,
  onClose,
  onEdit,
}: ProductDetailProps) => {
  if (!product) return null;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            Active
          </Badge>
        );
      case "inactive":
        return (
          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">
            <XCircle className="w-3 h-3 mr-1" />
            Inactive
          </Badge>
        );
      case "out_of_stock":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
            <AlertCircle className="w-3 h-3 mr-1" />
            Out of Stock
          </Badge>
        );
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Package className="h-5 w-5" />
            Product Details
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="flex flex-col">
            <div className="relative h-64 w-full rounded-lg overflow-hidden border mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4 text-gray-500" />
                <span className="text-gray-600">SKU: {product.sku}</span>
              </div>

              <div className="flex justify-between">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-gray-500" />
                    <span className="font-semibold">
                      {formatCurrency(product.price)}
                    </span>
                  </div>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {formatCurrency(product.originalPrice)}
                    </span>
                  )}
                </div>

                <div>{getStatusBadge(product.status)}</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-md bg-gray-50 p-4">
              <h3 className="text-sm font-medium text-gray-900 mb-2">
                Product Information
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Category</span>
                  <span className="font-medium">{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Stock</span>
                  <span
                    className={`font-medium ${
                      product.stock === 0 ? "text-red-600" : ""
                    }`}
                  >
                    {product.stock} units
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Created</span>
                  <span>{formatDate(product.createdAt)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Last Updated</span>
                  <span>{formatDate(product.updatedAt)}</span>
                </div>
              </div>
            </div>

            {product.description && (
              <div>
                <h3 className="text-sm font-medium flex items-center gap-1 mb-1">
                  <Info className="h-4 w-4" />
                  Description
                </h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
            )}

            {product.variations && product.variations.length > 0 && (
              <div>
                <h3 className="text-sm font-medium flex items-center gap-1 mb-2">
                  <Layers className="h-4 w-4" />
                  Variations ({product.variations.length})
                </h3>
                <div className="max-h-40 overflow-y-auto pr-2">
                  {product.variations.map((variation) => (
                    <div
                      key={variation.id}
                      className="border rounded p-2 mb-2 text-sm"
                    >
                      <p className="font-medium">{variation.name}</p>
                      <div className="flex justify-between mt-1">
                        <span className="text-gray-500">Price:</span>
                        <span>{formatCurrency(variation.price)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Stock:</span>
                        <span>{variation.stock} units</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <DialogFooter className="mt-6">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button onClick={() => onEdit(product)}>Edit Product</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
