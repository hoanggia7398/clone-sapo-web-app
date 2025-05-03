import * as z from "zod";

export const invoiceFormSchema = z.object({
  invoicePrefix: z.string().min(1, {
    message: "Tiền tố mã hóa đơn là bắt buộc",
  }),
  footerText: z.string().optional(),
  showLogo: z.boolean(),
  showTaxId: z.boolean(),
  paperSize: z.string(),
  printerType: z.string(),
  autoPrint: z.boolean(),
});

export type InvoiceFormValues = z.infer<typeof invoiceFormSchema>;

export const defaultValues: InvoiceFormValues = {
  invoicePrefix: "HD",
  footerText: "Cảm ơn quý khách đã mua hàng tại SapoClone!",
  showLogo: true,
  showTaxId: true,
  paperSize: "k80",
  printerType: "thermal",
  autoPrint: true,
};

export interface PrintSettings {
  paperSize: string;
  orientation: "portrait" | "landscape";
  printLogo: boolean;
  logoPosition: "left" | "center" | "right";
  logoSize: number;
  footerText: string | undefined;
  includeVAT: boolean;
}
