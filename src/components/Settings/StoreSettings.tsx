"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building2, MapPin, Globe, Mail, Phone } from "lucide-react";

const storeFormSchema = z.object({
  name: z.string().min(2, {
    message: "Tên cửa hàng phải có ít nhất 2 ký tự.",
  }),
  address: z.string().min(5, {
    message: "Địa chỉ phải có ít nhất 5 ký tự.",
  }),
  phone: z.string().min(10, {
    message: "Số điện thoại không hợp lệ.",
  }),
  email: z.string().email({
    message: "Email không hợp lệ.",
  }),
  website: z
    .string()
    .url({
      message: "URL website không hợp lệ.",
    })
    .optional()
    .or(z.literal("")),
  taxId: z.string().optional(),
  description: z.string().optional(),
});

type StoreFormValues = z.infer<typeof storeFormSchema>;

// This would come from your actual store data
const defaultValues: Partial<StoreFormValues> = {
  name: "Sapo Web Store",
  address: "123 Đường ABC, Quận 1, TP. Hồ Chí Minh",
  phone: "0987654321",
  email: "contact@sapostore.com",
  website: "https://sapostore.com",
  taxId: "0123456789",
  description: "Cửa hàng bán lẻ các sản phẩm điện tử và gia dụng",
};

export default function StoreSettings() {
  const form = useForm<StoreFormValues>({
    resolver: zodResolver(storeFormSchema),
    defaultValues,
  });

  function onSubmit(data: StoreFormValues) {
    // In a real app, you would save these settings to your backend
    console.log(data);
    alert("Đã lưu thông tin cửa hàng thành công!");
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Thông tin cửa hàng</h2>
        <p className="text-sm text-muted-foreground">
          Quản lý thông tin cơ bản của cửa hàng
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    Tên cửa hàng
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập tên cửa hàng" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="taxId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mã số thuế</FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập mã số thuế" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Địa chỉ
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập địa chỉ cửa hàng" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Số điện thoại
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập số điện thoại" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="contact@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    Website
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mô tả</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Nhập mô tả về cửa hàng của bạn"
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Button type="submit">Lưu thay đổi</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
