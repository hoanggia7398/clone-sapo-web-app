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
    <div className="flex-1 overflow-y-auto p-4 relative" ref={cartRef}>
      {cart.length === 0 ? (
        <div className="h-full flex flex-col items-center justify-center text-gray-400 py-10">
          <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4">
            <ShoppingBag size={32} strokeWidth={1} className="text-blue-500" />
          </div>
          <p className="text-center font-medium text-gray-500">
            Giỏ hàng trống
          </p>
          <p className="text-center text-sm mt-2 text-gray-400">
            Thêm sản phẩm để bắt đầu đơn hàng
          </p>
        </div>
      ) : (
        <div>
          <div className="bg-blue-50 rounded-lg mb-4 p-3 flex items-center">
            <Package size={18} className="text-blue-600 mr-2" />
            <span className="text-blue-700 text-sm">
              {cart.length} sản phẩm |{" "}
              {cart.reduce((sum, item) => sum + item.quantity, 0)} số lượng
            </span>
          </div>

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center mb-6 pb-2 border-b group relative"
            >
              <div className="w-16 h-16 rounded-md overflow-hidden mr-4 flex-shrink-0 border border-gray-200">
                <div className="w-full h-full bg-gray-50 flex items-center justify-center">
                  {item.image && item.image.startsWith("/") ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-3xl">{item.image || "🛍️"}</span>
                  )}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-lg text-gray-800 truncate mb-1">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-500 mb-2">SKU: {item.sku}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <button
                      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        updateQuantity(item.id, item.quantity - 1);
                      }}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4 font-medium text-lg">
                      {item.quantity}
                    </span>
                    <button
                      className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        updateQuantity(item.id, item.quantity + 1);
                      }}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <p className="text-xl font-semibold">{item.price}</p>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeFromCart(item.id);
                }}
                className="absolute top-0 right-0 text-gray-400 hover:text-red-500"
              >
                <X size={18} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
