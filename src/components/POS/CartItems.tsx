"use client";

import { ShoppingBag, X, Plus, Minus, Package } from "lucide-react";
import { RefObject } from "react";

interface CartItem {
  id: number;
  name: string;
  sku: string;
  price: string;
  quantity: number;
  image?: string;
}

interface CartItemsProps {
  cart: CartItem[];
  updateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
  cartRef: RefObject<HTMLDivElement | null> | undefined;
}

export default function CartItems({
  cart,
  updateQuantity,
  removeFromCart,
  cartRef,
}: CartItemsProps) {
  return (
    <div className="flex-1 overflow-y-auto p-3 md:p-4 relative" ref={cartRef}>
      {cart.length === 0 ? (
        <div className="h-full flex flex-col items-center justify-center text-gray-400 py-6 md:py-10">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-50 flex items-center justify-center mb-3 md:mb-4">
            <ShoppingBag size={28} strokeWidth={1} className="text-blue-500" />
          </div>
          <p className="text-center font-medium text-gray-500">
            Giỏ hàng trống
          </p>
          <p className="text-center text-xs md:text-sm mt-1 md:mt-2 text-gray-400">
            Thêm sản phẩm để bắt đầu đơn hàng
          </p>
        </div>
      ) : (
        <div>
          <div className="bg-blue-50 rounded-lg mb-3 md:mb-4 p-2 md:p-3 flex items-center">
            <Package size={16} className="text-blue-600 mr-2" />
            <span className="text-blue-700 text-xs md:text-sm">
              {cart.length} sản phẩm |{" "}
              {cart.reduce((sum, item) => sum + item.quantity, 0)} số lượng
            </span>
          </div>

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center mb-4 md:mb-6 pb-2 border-b border-gray-300 group relative"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-md overflow-hidden mr-3 md:mr-4 flex-shrink-0 border border-gray-200">
                <div className="w-full h-full bg-gray-50 flex items-center justify-center">
                  {item.image && item.image.startsWith("/") ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-2xl md:text-3xl">
                      {item.image || "🛍️"}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-base md:text-lg text-gray-800 truncate mb-0.5 md:mb-1">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-500 mb-1 md:mb-2">
                  SKU: {item.sku}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <button
                      className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        updateQuantity(item.id, item.quantity - 1);
                      }}
                    >
                      <Minus size={14} className="md:hidden" />
                      <Minus size={16} className="hidden md:inline" />
                    </button>
                    <span className="px-2 md:px-4 font-medium text-base md:text-lg">
                      {item.quantity}
                    </span>
                    <button
                      className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        updateQuantity(item.id, item.quantity + 1);
                      }}
                    >
                      <Plus size={14} className="md:hidden" />
                      <Plus size={16} className="hidden md:inline" />
                    </button>
                  </div>
                  <p className="text-lg md:text-xl font-semibold">
                    {item.price}
                  </p>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeFromCart(item.id);
                }}
                className="absolute top-0 right-0 text-gray-400 hover:text-red-500"
              >
                <X size={16} className="md:hidden" />
                <X size={18} className="hidden md:inline" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
