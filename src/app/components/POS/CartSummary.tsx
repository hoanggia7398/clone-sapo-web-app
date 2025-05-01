"use client";

import { ChevronRight } from "lucide-react";

interface CartSummaryProps {
  calculateTotal: () => string;
}

export default function CartSummary({ calculateTotal }: CartSummaryProps) {
  return (
    <div className="p-3 bg-white">
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

      <div className="mt-4 flex space-x-2">
        <button className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
          Huỷ
        </button>
        <button className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors shadow-sm">
          <span>Thanh toán</span>
          <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
}
