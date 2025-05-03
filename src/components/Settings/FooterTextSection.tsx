"use client";

import { Control } from "react-hook-form";
import { LayoutTemplate } from "lucide-react";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { InvoiceFormValues } from "./InvoiceSettingsSchema";

interface FooterTextSectionProps {
  control: Control<InvoiceFormValues>;
}

export function FooterTextSection({ control }: FooterTextSectionProps) {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
        <LayoutTemplate className="h-4 w-4" />
        Ghi chú cuối hóa đơn
      </h3>
      <div className="space-y-4">
        <FormField
          control={control}
          name="footerText"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Nhập nội dung chân trang hóa đơn"
                  className="min-h-[80px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
