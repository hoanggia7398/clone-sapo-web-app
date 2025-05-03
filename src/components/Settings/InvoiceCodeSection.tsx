"use client";

import { Control } from "react-hook-form";
import { FileText } from "lucide-react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InvoiceFormValues } from "./InvoiceSettingsSchema";

interface InvoiceCodeSectionProps {
  control: Control<InvoiceFormValues>;
}

export function InvoiceCodeSection({ control }: InvoiceCodeSectionProps) {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
        <FileText className="h-4 w-4" />
        Mã hóa đơn
      </h3>
      <div className="space-y-4">
        <FormField
          control={control}
          name="invoicePrefix"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tiền tố mã hóa đơn</FormLabel>
              <FormControl>
                <Input placeholder="HD" {...field} />
              </FormControl>
              <FormDescription>
                Ví dụ: HD sẽ tạo mã hóa đơn dạng HD00001
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
