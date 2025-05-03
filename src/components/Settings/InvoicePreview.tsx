"use client";

import React from "react";
import Image from "next/image";
import {
  Building,
  Phone,
  Mail,
  Globe,
  CalendarDays,
  FileSpreadsheet,
  Receipt,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

// Sample invoice data for preview
const sampleInvoiceData = {
  invoiceNumber: "INV-2025-00123",
  date: "03/05/2025",
  customer: {
    name: "Nguyễn Văn A",
    phone: "0912345678",
    email: "nguyenvana@example.com",
    address: "123 Đường ABC, Phường XYZ, Quận 1, TP.HCM",
  },
  items: [
    {
      name: "Điện thoại iPhone 15",
      quantity: 1,
      price: 25000000,
      total: 25000000,
    },
    { name: "Ốp lưng silicone", quantity: 2, price: 250000, total: 500000 },
    { name: "Cường lực màn hình", quantity: 1, price: 150000, total: 150000 },
  ],
  subtotal: 25650000,
  vat: 2565000,
  total: 28215000,
  paymentMethod: "Thẻ tín dụng",
};

// Format currency
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
};

interface InvoicePreviewProps {
  settings: {
    paperSize: string;
    orientation: "portrait" | "landscape";
    printLogo: boolean;
    logoPosition: "left" | "center" | "right";
    logoSize: number;
    footerText: string | undefined;
    includeVAT: boolean;
  };
}

export function InvoicePreview({ settings }: InvoicePreviewProps) {
  const {
    paperSize,
    orientation,
    printLogo,
    logoPosition,
    logoSize,
    footerText,
    includeVAT,
  } = settings;

  // Calculate paper dimensions and styling
  const getPaperStyle = () => {
    // Default to A4 portrait
    let width = "210mm";
    let height = "297mm";
    let scale = 0.25; // Scale for preview

    switch (paperSize) {
      case "a4":
        width = orientation === "portrait" ? "210mm" : "297mm";
        height = orientation === "portrait" ? "297mm" : "210mm";
        scale = 0.2;
        break;
      case "a5":
        width = orientation === "portrait" ? "148mm" : "210mm";
        height = orientation === "portrait" ? "210mm" : "148mm";
        scale = 0.3;
        break;
      case "letter":
        width = orientation === "portrait" ? "216mm" : "279mm";
        height = orientation === "portrait" ? "279mm" : "216mm";
        scale = 0.2;
        break;
      case "k80":
        width = "80mm";
        height = "auto";
        scale = 0.8;
        break;
      case "k57":
        width = "57mm";
        height = "auto";
        scale = 0.9;
        break;
    }

    return {
      width,
      height,
      transform: `scale(${scale})`,
      transformOrigin: "top center",
    };
  };

  // Logo alignment based on settings
  const getLogoAlignment = () => {
    switch (logoPosition) {
      case "left":
        return "justify-start";
      case "center":
        return "justify-center";
      case "right":
        return "justify-end";
      default:
        return "justify-start";
    }
  };

  // Logo size based on settings
  const getLogoSize = () => {
    // Base size multiplied by the size percentage
    const baseSize = 50;
    return Math.max(20, Math.min(100, baseSize * (logoSize / 100)));
  };

  const paperStyle = getPaperStyle();
  const logoAlignment = getLogoAlignment();
  const calculatedLogoSize = getLogoSize();

  // Thermal receipt style for K80/K57 paper
  const isThermalReceipt = paperSize === "k80" || paperSize === "k57";

  return (
    <div className="relative bg-white shadow-md border rounded-md w-full max-w-[300px] h-[400px] mx-auto overflow-hidden flex items-start justify-center">
      <div
        className="overflow-auto flex justify-center"
        style={{
          maxHeight: "400px",
          maxWidth: "100%",
        }}
      >
        <div
          className={cn(
            "bg-white p-6 my-0 mx-auto",
            isThermalReceipt ? "text-xs" : "text-sm"
          )}
          style={paperStyle}
        >
          {/* Header with logo */}
          {printLogo && (
            <div className={cn("flex mb-4", logoAlignment)}>
              <div
                className="bg-gray-200 rounded"
                style={{
                  width: `${calculatedLogoSize}px`,
                  height: `${calculatedLogoSize}px`,
                }}
              >
                <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs">
                  Logo
                </div>
              </div>
            </div>
          )}

          {/* Store info */}
          <div
            className={cn(
              "text-center mb-6",
              isThermalReceipt ? "text-xs" : "text-base"
            )}
          >
            <h1 className="font-bold text-lg mb-1">Sapo Web Store</h1>
            <div className="flex items-center justify-center gap-1">
              <Building className="h-3 w-3" />
              <p>123 Đường ABC, Quận 1, TP. Hồ Chí Minh</p>
            </div>
            <div className="flex items-center justify-center gap-1">
              <Phone className="h-3 w-3" />
              <p>0987654321</p>
            </div>
            {!isThermalReceipt && (
              <>
                <div className="flex items-center justify-center gap-1">
                  <Mail className="h-3 w-3" />
                  <p>contact@sapostore.com</p>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Globe className="h-3 w-3" />
                  <p>https://sapostore.com</p>
                </div>
              </>
            )}
          </div>

          {/* Invoice title */}
          <div className="text-center mb-4">
            <h2 className="font-bold uppercase">
              {isThermalReceipt ? "PHIẾU THANH TOÁN" : "HÓA ĐƠN BÁN HÀNG"}
            </h2>
          </div>

          {/* Invoice details */}
          <div
            className={cn(
              "mb-4",
              isThermalReceipt ? "text-xs space-y-1" : "text-sm space-y-2"
            )}
          >
            <div className="flex items-center gap-1">
              <FileSpreadsheet className="h-3 w-3 flex-shrink-0" />
              <span className="font-semibold">Số HĐ:</span>
              <span>{sampleInvoiceData.invoiceNumber}</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarDays className="h-3 w-3 flex-shrink-0" />
              <span className="font-semibold">Ngày:</span>
              <span>{sampleInvoiceData.date}</span>
            </div>
            <div>
              <span className="font-semibold">Khách hàng:</span>
              <span> {sampleInvoiceData.customer.name}</span>
            </div>
            <div>
              <span className="font-semibold">Điện thoại:</span>
              <span> {sampleInvoiceData.customer.phone}</span>
            </div>
            {!isThermalReceipt && (
              <>
                <div>
                  <span className="font-semibold">Email:</span>
                  <span> {sampleInvoiceData.customer.email}</span>
                </div>
                <div>
                  <span className="font-semibold">Địa chỉ:</span>
                  <span> {sampleInvoiceData.customer.address}</span>
                </div>
              </>
            )}
          </div>

          {/* Items table */}
          <table
            className={cn(
              "w-full mb-4",
              isThermalReceipt ? "text-xs" : "text-sm"
            )}
          >
            <thead className="border-t border-b">
              <tr className="text-left">
                <th className="py-1">Sản phẩm</th>
                <th className="py-1 text-center">SL</th>
                <th className="py-1 text-right">Đơn giá</th>
                <th className="py-1 text-right">Thành tiền</th>
              </tr>
            </thead>
            <tbody>
              {sampleInvoiceData.items.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-1">{item.name}</td>
                  <td className="py-1 text-center">{item.quantity}</td>
                  <td className="py-1 text-right">
                    {formatCurrency(item.price)}
                  </td>
                  <td className="py-1 text-right">
                    {formatCurrency(item.total)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Totals */}
          <div
            className={cn(
              "space-y-1 mb-4",
              isThermalReceipt ? "text-xs" : "text-sm"
            )}
          >
            <div className="flex justify-between">
              <span className="font-semibold">Tổng tiền hàng:</span>
              <span>{formatCurrency(sampleInvoiceData.subtotal)}</span>
            </div>

            {includeVAT && (
              <div className="flex justify-between">
                <span className="font-semibold">VAT (10%):</span>
                <span>{formatCurrency(sampleInvoiceData.vat)}</span>
              </div>
            )}

            <div className="flex justify-between text-lg font-bold">
              <span>Tổng thanh toán:</span>
              <span>
                {formatCurrency(
                  includeVAT
                    ? sampleInvoiceData.total
                    : sampleInvoiceData.subtotal
                )}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Hình thức thanh toán:</span>
              <span>{sampleInvoiceData.paymentMethod}</span>
            </div>
          </div>

          {/* Footer */}
          {footerText && (
            <div
              className={cn(
                "text-center border-t pt-2",
                isThermalReceipt ? "text-xs" : "text-sm"
              )}
            >
              <p>{footerText}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
