"use client";

import { User, ChevronDown } from "lucide-react";

export default function CustomerSelection() {
  return (
    <div className="p-3 md:p-4 border-b border-gray-200 bg-white">
      <button className="w-full flex justify-between items-center py-2 md:py-2.5 px-3 border border-gray-300 bg-white rounded-lg hover:border-blue-400 transition-colors">
        <div className="flex items-center">
          <User size={18} className="mr-2 text-gray-500" />
          <span className="text-gray-700 text-sm md:text-base">
            Chọn khách hàng
          </span>
        </div>
        <ChevronDown size={16} className="text-gray-500" />
      </button>
    </div>
  );
}
