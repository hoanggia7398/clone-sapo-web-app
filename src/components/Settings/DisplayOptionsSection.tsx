"use client";

import { Control } from "react-hook-form";
import { Image } from "lucide-react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { InvoiceFormValues } from "./InvoiceSettingsSchema";

interface DisplayOptionsSectionProps {
  control: Control<InvoiceFormValues>;
}

export function DisplayOptionsSection({ control }: DisplayOptionsSectionProps) {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
        <Image className="h-4 w-4" />
        Tùy chọn hiển thị
      </h3>
      <div className="space-y-4">
        <FormField
          control={control}
          name="showLogo"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between p-3 border rounded-md">
              <FormLabel className="cursor-pointer">
                Hiển thị logo trên hóa đơn
              </FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="showTaxId"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between p-3 border rounded-md">
              <FormLabel className="cursor-pointer">Hoá đơn có VAT</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
