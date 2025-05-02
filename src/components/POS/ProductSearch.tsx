"use client";

import { Search, Barcode, X } from "lucide-react";

interface ProductSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function ProductSearch({
  searchQuery,
  setSearchQuery,
}: ProductSearchProps) {
  return (
    <div className="flex mb-2 md:mb-4">
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search size={16} className="text-gray-400" />
        </div>
        <input
          type="text"
          className="pl-9 pr-9 py-2 md:py-2.5 text-sm md:text-base border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Tìm sản phẩm..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <div
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
            onClick={() => setSearchQuery("")}
          >
            <X size={16} className="text-gray-400 hover:text-gray-600" />
          </div>
        )}
      </div>
      <button className="bg-blue-50 border border-blue-200 text-blue-700 px-2 md:px-4 py-2 md:py-2.5 ml-2 md:ml-3 rounded-lg flex items-center hover:bg-blue-100 transition-colors">
        <Barcode size={16} className="md:mr-2" />
        <span className="hidden md:inline">Quét mã vạch</span>
      </button>
    </div>
  );
}
