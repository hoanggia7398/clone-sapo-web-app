"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ProductTable } from "@/components/Products/ProductTable";
import { ProductDetail } from "@/components/Products/ProductDetail";
import {
  ProductForm,
  ProductFormValues,
} from "@/components/Products/ProductForm";
import { DeleteProductDialog } from "@/components/Products/DeleteProductDialog";
import { Product, products as mockProducts } from "@/mockData/products";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // State for product detail modal
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // State for product form modal
  const [productToEdit, setProductToEdit] = useState<Product | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // State for delete confirmation modal
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  // Load products on mount
  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  // Filter products based on search term
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle view product
  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsDetailOpen(true);
  };

  // Handle create new product
  const handleCreateProduct = () => {
    setProductToEdit(null);
    setIsFormOpen(true);
  };

  // Handle edit product
  const handleEditProduct = (product: Product) => {
    setProductToEdit(product);
    setIsFormOpen(true);
    setIsDetailOpen(false); // Close detail view if open
  };

  // Handle delete product
  const handleDeleteProduct = (product: Product) => {
    setProductToDelete(product);
    setIsDeleteOpen(true);
  };

  // Save product (create or update)
  const handleSaveProduct = (data: ProductFormValues) => {
    if (productToEdit) {
      // Update existing product
      setProducts(
        products.map((product) =>
          product.id === productToEdit.id
            ? {
                ...product,
                ...data,
                updatedAt: new Date().toISOString(),
              }
            : product
        )
      );
    } else {
      // Create new product
      const newProduct: Product = {
        id: `${products.length + 1}`,
        ...data,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setProducts([...products, newProduct]);
    }
    setIsFormOpen(false);
  };

  // Confirm product deletion
  const handleConfirmDelete = () => {
    if (productToDelete) {
      setProducts(
        products.filter((product) => product.id !== productToDelete.id)
      );
      setIsDeleteOpen(false);
      setProductToDelete(null);
    }
  };

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold">Products</h1>
        <Button
          className="flex items-center gap-1"
          onClick={handleCreateProduct}
        >
          <Plus className="w-4 h-4" />
          Add Product
        </Button>
      </div>

      {/* Search and filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {/* Additional filters can be added here */}
      </div>

      {/* Product Table */}
      {filteredProducts.length > 0 ? (
        <ProductTable
          products={filteredProducts}
          onViewProduct={handleViewProduct}
          onEditProduct={handleEditProduct}
          onDeleteProduct={handleDeleteProduct}
        />
      ) : (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <p className="text-muted-foreground">
            {searchTerm
              ? "No products match your search criteria."
              : "No products found. Add some products to get started."}
          </p>
        </div>
      )}

      {/* Product Detail Modal */}
      <ProductDetail
        product={selectedProduct}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        onEdit={handleEditProduct}
      />

      {/* Product Form Modal */}
      <ProductForm
        product={productToEdit}
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSaveProduct}
      />

      {/* Delete Confirmation Modal */}
      <DeleteProductDialog
        product={productToDelete}
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onDelete={handleConfirmDelete}
      />
    </div>
  );
}
