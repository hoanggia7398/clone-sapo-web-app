"use client";

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
}

export default function ProductGrid({
  products,
  addToCart,
  productRefs,
}: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          ref={(el) => {
            if (el) productRefs.current[product.id] = el;
          }}
          className="bg-white border rounded-xl overflow-hidden cursor-pointer hover:shadow-md transition-all transform hover:-translate-y-1"
          onClick={() => addToCart(product)}
        >
          <div className="h-36 bg-blue-50 flex items-center justify-center text-4xl">
            {product.image}
          </div>
          <div className="p-3">
            <p className="font-medium text-sm truncate text-gray-800">
              {product.name}
            </p>
            <p className="text-xs text-gray-500">SKU: {product.sku}</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-blue-600 font-semibold">{product.price}</p>
              <button
                className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
              >
                Thêm +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
