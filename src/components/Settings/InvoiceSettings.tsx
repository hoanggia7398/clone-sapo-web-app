"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Printer, Eye } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Import schema and types
import {
  invoiceFormSchema,
  defaultValues,
  InvoiceFormValues,
  PrintSettings,
} from "./InvoiceSettingsSchema";

// Import section components
import { InvoiceCodeSection } from "./InvoiceCodeSection";
import { FooterTextSection } from "./FooterTextSection";
import { DisplayOptionsSection } from "./DisplayOptionsSection";
import { PrinterSettingsSection } from "./PrinterSettingsSection";

// Import preview and print utilities
import { InvoicePreview } from "./InvoicePreview";
import { handlePrintTest } from "./PrintUtils";

export default function InvoiceSettings() {
  const { toast } = useToast();
  const form = useForm<InvoiceFormValues>({
    resolver: zodResolver(invoiceFormSchema),
    defaultValues,
  });

  // Preview state
  const [previewSettings, setPreviewSettings] = useState<PrintSettings>({
    paperSize: defaultValues.paperSize,
    orientation: "portrait",
    printLogo: defaultValues.showLogo,
    logoPosition: "center",
    logoSize: 50,
    footerText: defaultValues.footerText,
    includeVAT: defaultValues.showTaxId,
  });

  // Update preview when form values change
  useEffect(() => {
    const subscription = form.watch((value) => {
      setPreviewSettings({
        paperSize: value.paperSize || defaultValues.paperSize,
        orientation: "portrait",
        printLogo: value.showLogo ?? defaultValues.showLogo,
        logoPosition: "center",
        logoSize: 50,
        footerText: value.footerText,
        includeVAT: value.showTaxId ?? defaultValues.showTaxId,
      });
    });

    return () => subscription.unsubscribe();
  }, [form.watch]);

  function onSubmit(data: InvoiceFormValues) {
    // In a real app, you would save these settings to your backend
    console.log(data);
    toast({
      title: "Thành công",
      description: "Đã lưu cài đặt hóa đơn thành công!",
    });
  }

  // Handle print test button click
  const onPrintTest = () => {
    const success = handlePrintTest(previewSettings);

    if (success) {
      toast({
        title: "In thử hóa đơn",
        description: "Đã mở cửa sổ in thử hóa đơn với cài đặt hiện tại.",
      });
    } else {
      toast({
        title: "Lỗi",
        description:
          "Không thể mở cửa sổ in. Vui lòng kiểm tra cài đặt trình duyệt.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Printer className="h-5 w-5" />
          Cài đặt in hóa đơn
        </h2>
        <p className="text-sm text-muted-foreground">
          Quản lý cài đặt in và định dạng hóa đơn
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Invoice Code Section */}
              <InvoiceCodeSection control={form.control} />

              {/* Footer Text Section */}
              <FooterTextSection control={form.control} />

              {/* Display Options Section */}
              <DisplayOptionsSection control={form.control} />

              {/* Printer Settings Section */}
              <PrinterSettingsSection control={form.control} />

              <div className="flex justify-end space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => form.reset(defaultValues)}
                >
                  Huỷ
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={onPrintTest}
                  className="flex items-center gap-2"
                >
                  <Printer className="h-4 w-4" />
                  In thử
                </Button>
                <Button type="submit">Lưu cài đặt</Button>
              </div>
            </form>
          </Form>
        </div>

        <div className="lg:col-span-1">
          <div className="border rounded-lg p-4 h-full flex flex-col">
            <div className="mb-4">
              <h3 className="text-base font-medium flex items-center gap-2">
                <Eye className="h-4 w-4" /> Xem trước mẫu hóa đơn
              </h3>
            </div>
            <div className="flex-grow flex items-center justify-center">
              <InvoicePreview settings={previewSettings} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
