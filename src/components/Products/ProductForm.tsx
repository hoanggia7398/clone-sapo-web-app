"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "@/mockData/products";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ImagePlus } from "lucide-react";

interface ProductFormProps {
  product?: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: ProductFormValues) => void;
}

// Define the form schema
const productFormSchema = z.object({
  name: z.string().min(1, { message: "Tên sản phẩm không được bỏ trống" }),
  sku: z.string().min(1, { message: "Mã SKU không được bỏ trống" }),
  price: z.coerce.number().min(0, { message: "Giá phải là số dương" }),
  originalPrice: z.coerce
    .number()
    .min(0, { message: "Giá gốc phải là số dương" })
    .optional(),
  stock: z.coerce
    .number()
    .min(0, { message: "Số lượng tồn kho phải là số dương" }),
  category: z.string().min(1, { message: "Danh mục không được bỏ trống" }),
  status: z.enum(["active", "inactive", "out_of_stock"]),
  description: z.string().optional(),
  image: z.string().min(1, { message: "URL hình ảnh không được bỏ trống" }),
});

export type ProductFormValues = z.infer<typeof productFormSchema>;

export const ProductForm = ({
  product,
  isOpen,
  onClose,
  onSave,
}: ProductFormProps) => {
  const isEditing = !!product;
  const [imagePreview, setImagePreview] = useState<string>("");

  // Initialize form with default values or product data
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      name: "",
      sku: "",
      price: 0,
      originalPrice: undefined,
      stock: 0,
      category: "",
      status: "active",
      description: "",
      image: "",
    },
  });

  // Populate form with product data when editing
  useEffect(() => {
    if (product) {
      form.reset({
        name: product.name,
        sku: product.sku,
        price: product.price,
        originalPrice: product.originalPrice,
        stock: product.stock,
        category: product.category,
        status: product.status,
        description: product.description || "",
        image: product.image,
      });
      setImagePreview(product.image);
    } else {
      form.reset({
        name: "",
        sku: "",
        price: 0,
        originalPrice: undefined,
        stock: 0,
        category: "",
        status: "active",
        description: "",
        image: "",
      });
      setImagePreview("");
    }
  }, [product, form]);

  // Handle image URL change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    form.setValue("image", value);
    setImagePreview(value);
  };

  // Handle form submission
  const onSubmit = (values: ProductFormValues) => {
    onSave(values);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? "Chỉnh sửa sản phẩm" : "Thêm sản phẩm mới"}
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tên sản phẩm</FormLabel>
                      <FormControl>
                        <Input placeholder="Nhập tên sản phẩm" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="sku"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mã SKU</FormLabel>
                      <FormControl>
                        <Input placeholder="Nhập mã SKU" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Giá bán</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          step="0.01"
                          min="0"
                          placeholder="0"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="originalPrice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Giá gốc (Không bắt buộc)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          step="0.01"
                          min="0"
                          placeholder="0.00"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="stock"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tồn kho</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min="0"
                          placeholder="0"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>URL hình ảnh</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nhập URL hình ảnh"
                          {...field}
                          onChange={(e) => handleImageChange(e)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="border rounded-md p-2 flex justify-center items-center h-40 bg-gray-50">
                  {imagePreview ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={imagePreview}
                        alt="Xem trước sản phẩm"
                        fill
                        className="object-contain"
                        onError={() => setImagePreview("")}
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-gray-400">
                      <ImagePlus className="h-10 w-10" />
                      <span className="text-sm mt-2">Xem trước ảnh</span>
                    </div>
                  )}
                </div>

                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Danh mục</FormLabel>
                      <FormControl>
                        <Input placeholder="Nhập danh mục" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Trạng thái</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Chọn trạng thái" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="active">Đang bán</SelectItem>
                          <SelectItem value="inactive">Ngừng bán</SelectItem>
                          <SelectItem value="out_of_stock">Hết hàng</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mô tả</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Nhập mô tả sản phẩm"
                      className="resize-none min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="gap-2">
              <Button variant="outline" type="button" onClick={onClose}>
                Hủy
              </Button>
              <Button type="submit">
                {isEditing ? "Cập nhật sản phẩm" : "Thêm sản phẩm"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
