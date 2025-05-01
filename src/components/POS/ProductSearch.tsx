"use client";

import { Search, Barcode } from "lucide-react";

interface ProductSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function ProductSearch({
  searchQuery,
  setSearchQuery,
}: ProductSearchProps) {
  return (
    <div className="flex mb-4">
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search size={18} className="text-gray-400" />
        </div>
        <input
          type="text"
          className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Tìm sản phẩm (tên, mã)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <button className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2.5 ml-3 rounded-lg flex items-center hover:bg-blue-100 transition-colors">
        <Barcode size={18} className="mr-2" />
        <span>Quét mã vạch</span>
      </button>
    </div>
  );
}
