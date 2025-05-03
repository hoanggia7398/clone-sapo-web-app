import { PrintSettings } from "./InvoiceSettingsSchema";

/**
 * Open a new window with a print preview of the invoice based on current settings
 */
export const handlePrintTest = (settings: PrintSettings): boolean => {
  const printWindow = window.open("", "_blank");
  if (!printWindow) return false;

  // Write the HTML document for printing
  printWindow.document.write(
    "<html><head><title>In hóa đơn thử nghiệm</title>"
  );
  printWindow.document.write("<style>");
  printWindow.document.write(`
    body { 
      font-family: system-ui, -apple-system, sans-serif; 
      padding: 20px;
      display: flex;
      justify-content: center;
    }
    .invoice-container {
      max-width: ${
        settings.paperSize === "k80"
          ? "80mm"
          : settings.paperSize === "k57"
          ? "57mm"
          : settings.paperSize === "a5"
          ? "148mm"
          : "210mm"
      };
      margin: 0 auto;
      padding: 10px;
      border: 1px solid #eee;
    }
    h1 { font-size: 18px; text-align: center; margin-bottom: 10px; }
    h2 { font-size: 16px; text-align: center; text-transform: uppercase; }
    table { width: 100%; border-collapse: collapse; }
    th, td { padding: 4px; }
    th { text-align: left; border-bottom: 1px solid #ddd; }
    .text-right { text-align: right; }
    .text-center { text-align: center; }
    .total { font-weight: bold; }
    .footer { text-align: center; margin-top: 20px; font-size: 12px; }
  `);
  printWindow.document.write("</style></head><body>");

  // Write the invoice content
  printWindow.document.write('<div class="invoice-container">');

  // Logo if enabled
  if (settings.printLogo) {
    const logoAlignment =
      settings.logoPosition === "center"
        ? "center"
        : settings.logoPosition === "right"
        ? "right"
        : "left";
    printWindow.document.write(
      `<div style="text-align: ${logoAlignment}; margin-bottom: 15px;">`
    );
    printWindow.document.write(
      '<div style="display: inline-block; width: 50px; height: 50px; background: #f0f0f0; text-align: center; line-height: 50px;">Logo</div>'
    );
    printWindow.document.write("</div>");
  }

  // Store info
  printWindow.document.write("<h1>Sapo Web Store</h1>");
  printWindow.document.write('<div style="text-align: center;">');
  printWindow.document.write("<p>123 Đường ABC, Quận 1, TP. Hồ Chí Minh</p>");
  printWindow.document.write("<p>0987654321</p>");
  printWindow.document.write("</div>");

  // Invoice title
  printWindow.document.write("<h2>Hóa Đơn Bán Hàng</h2>");

  // Invoice details
  printWindow.document.write('<div style="margin: 15px 0;">');
  printWindow.document.write("<p><strong>Số HĐ:</strong> INV-2025-00123</p>");
  printWindow.document.write("<p><strong>Ngày:</strong> 03/05/2025</p>");
  printWindow.document.write(
    "<p><strong>Khách hàng:</strong> Nguyễn Văn A</p>"
  );
  printWindow.document.write("<p><strong>Điện thoại:</strong> 0912345678</p>");
  printWindow.document.write("</div>");

  // Items table
  printWindow.document.write("<table>");
  printWindow.document.write(
    '<thead><tr><th>Sản phẩm</th><th class="text-center">SL</th><th class="text-right">Đơn giá</th><th class="text-right">Thành tiền</th></tr></thead>'
  );
  printWindow.document.write("<tbody>");
  printWindow.document.write(
    '<tr><td>Điện thoại iPhone 15</td><td class="text-center">1</td><td class="text-right">25.000.000₫</td><td class="text-right">25.000.000₫</td></tr>'
  );
  printWindow.document.write(
    '<tr><td>Ốp lưng silicone</td><td class="text-center">2</td><td class="text-right">250.000₫</td><td class="text-right">500.000₫</td></tr>'
  );
  printWindow.document.write(
    '<tr><td>Cường lực màn hình</td><td class="text-center">1</td><td class="text-right">150.000₫</td><td class="text-right">150.000₫</td></tr>'
  );
  printWindow.document.write("</tbody>");
  printWindow.document.write("</table>");

  // Totals
  printWindow.document.write('<div style="margin-top: 15px;">');
  printWindow.document.write(
    '<p style="display: flex; justify-content: space-between;"><span>Tổng tiền hàng:</span> <span>25.650.000₫</span></p>'
  );

  // VAT if enabled
  if (settings.includeVAT) {
    printWindow.document.write(
      '<p style="display: flex; justify-content: space-between;"><span>VAT (10%):</span> <span>2.565.000₫</span></p>'
    );
    printWindow.document.write(
      '<p style="display: flex; justify-content: space-between;"><strong>Tổng thanh toán:</strong> <strong>28.215.000₫</strong></p>'
    );
  } else {
    printWindow.document.write(
      '<p style="display: flex; justify-content: space-between;"><strong>Tổng thanh toán:</strong> <strong>25.650.000₫</strong></p>'
    );
  }

  printWindow.document.write(
    '<p style="display: flex; justify-content: space-between;"><span>Hình thức thanh toán:</span> <span>Thẻ tín dụng</span></p>'
  );
  printWindow.document.write("</div>");

  // Footer
  if (settings.footerText) {
    printWindow.document.write('<div class="footer">');
    printWindow.document.write(settings.footerText);
    printWindow.document.write("</div>");
  }

  printWindow.document.write("</div>");
  printWindow.document.write("</body></html>");

  // Trigger print
  printWindow.document.close();
  printWindow.focus();
  setTimeout(() => {
    printWindow.print();
    printWindow.close();
  }, 250);

  return true;
};
