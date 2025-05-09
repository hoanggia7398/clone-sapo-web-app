"use client";

import { Plus } from "lucide-react";
import { MutableRefObject } from "react";

interface Product {
  id: number;
  name: string;
  sku: string;
  price: string;
  image: string;
  category: string;
}

interface ProductGridProps {
  products: Product[];
  addToCart: (product: Product) => void;
  productRefs: MutableRefObject<{ [key: number]: HTMLDivElement }>;
  showSearchResults?: boolean;
  searchQuery?: string;
}

export default function ProductGrid({
  products,
  addToCart,
  productRefs,
  showSearchResults = false,
  searchQuery = "",
}: ProductGridProps) {
  // Helper function to highlight the search term in text
  const highlightSearchTerm = (text: string) => {
    if (!searchQuery) return text;

    const parts = text.split(new RegExp(`(${searchQuery})`, "gi"));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === searchQuery.toLowerCase() ? (
            <span key={index} className="bg-yellow-200">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 ${
        showSearchResults ? "pb-4" : ""
      }`}
    >
      {products.map((product) => (
        <div
          key={product.id}
          ref={(el) => {
            if (el) productRefs.current[product.id] = el;
          }}
          className="bg-white border border-gray-300 rounded-xl overflow-hidden cursor-pointer hover:shadow-md transition-all transform hover:-translate-y-1"
          onClick={() => addToCart(product)}
        >
          <div className="h-20 sm:h-36 bg-blue-50 flex items-center justify-center text-4xl">
            {product.image}
          </div>
          <div className="p-3">
            <p className="font-medium text-sm truncate text-gray-800">
              {searchQuery ? highlightSearchTerm(product.name) : product.name}
            </p>
            <p className="text-xs text-gray-500 hidden sm:block">
              SKU:{" "}
              {searchQuery ? highlightSearchTerm(product.sku) : product.sku}
            </p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-blue-600 font-semibold">{product.price}</p>
              <button
                className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
              >
                <Plus size={14} className="md:hidden" />
                <Plus size={16} className="hidden md:inline" />
              </button>
            </div>
          </div>
        </div>
      ))}

      {products.length === 0 && (
        <div className="col-span-full flex flex-col items-center justify-center py-8 md:py-12 text-gray-400">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="md:w-48 md:h-48"
          >
            <rect x="2" y="3" width="20" height="18" rx="2" ry="2"></rect>
            <line x1="2" y1="9" x2="22" y2="9"></line>
          </svg>
          <p className="mt-2 md:mt-4 text-center text-sm md:text-base">
            {searchQuery
              ? `Không tìm thấy sản phẩm cho "${searchQuery}"`
              : "Không tìm thấy sản phẩm nào"}
          </p>
        </div>
      )}
    </div>
  );
}
