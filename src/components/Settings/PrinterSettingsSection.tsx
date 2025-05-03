"use client";

import { Control } from "react-hook-form";
import { Printer } from "lucide-react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InvoiceFormValues } from "./InvoiceSettingsSchema";

interface PrinterSettingsSectionProps {
  control: Control<InvoiceFormValues>;
}

export function PrinterSettingsSection({
  control,
}: PrinterSettingsSectionProps) {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
        <Printer className="h-4 w-4" />
        Cài đặt máy in
      </h3>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={control}
            name="printerType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Loại máy in</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn loại máy in" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="thermal">Máy in nhiệt</SelectItem>
                    <SelectItem value="laser">Máy in laser</SelectItem>
                    <SelectItem value="inkjet">Máy in phun</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="paperSize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Khổ giấy</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn khổ giấy" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="k80">Khổ 80mm</SelectItem>
                    <SelectItem value="k57">Khổ 57mm</SelectItem>
                    <SelectItem value="a4">A4 (210 × 297mm)</SelectItem>
                    <SelectItem value="a5">A5 (148 × 210mm)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={control}
          name="autoPrint"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between p-3 border rounded-md">
              <FormLabel className="cursor-pointer">
                Tự động in khi hoàn thành đơn hàng
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
      </div>
    </div>
  );
}
