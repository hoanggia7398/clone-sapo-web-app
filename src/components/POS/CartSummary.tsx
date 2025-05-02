"use client";

import { ChevronRight } from "lucide-react";
import { useIsMobile } from "../../hooks/use-mobile";

interface CartSummaryProps {
  calculateTotal: () => string;
}

export default function CartSummary({ calculateTotal }: CartSummaryProps) {
  const isMobile = useIsMobile();

  return (
    <div className="p-3 md:p-3 bg-white">
      {/* Compact mobile layout */}
      {isMobile ? (
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Tạm tính</span>
                <span className="font-medium">{calculateTotal()}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Giảm giá</span>
                <span>0đ</span>
              </div>
            </div>
            <div className="ml-4 flex flex-col items-end">
              <span className="text-xs text-gray-600">Tổng cộng</span>
              <span className="text-blue-600 text-base font-bold">
                {calculateTotal()}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors text-xs">
              Huỷ
            </button>
            <button className="px-2 py-2 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors shadow-sm text-xs">
              <span>Thanh toán</span>
              <ChevronRight size={14} className="ml-1" />
            </button>
          </div>
        </div>
      ) : (
        /* Desktop layout - unchanged */
        <>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-500">Tạm tính</span>
            <span className="font-medium">{calculateTotal()}</span>
          </div>
          <div className="flex justify-between text-sm mb-3">
            <span className="text-gray-500">Giảm giá</span>
            <span>0đ</span>
          </div>
          <div className="h-px bg-gray-200 mb-3"></div>
          <div className="flex justify-between font-medium">
            <span>Tổng cộng</span>
            <span className="text-blue-600 text-lg">{calculateTotal()}</span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <button className="px-3 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors text-base">
              Huỷ
            </button>
            <button className="px-2 py-2.5 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors shadow-sm text-base">
              <span>Thanh toán</span>
              <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
