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
              className="flex items-start mb-4 pb-4 border-b group"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 mr-3 text-lg">
                {item.image || "👕"}
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFromCart(item.id);
                    }}
                    className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={16} />
                  </button>
                </div>
                <p className="text-xs text-gray-500">SKU: {item.sku}</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center border rounded-lg overflow-hidden bg-gray-50">
                    <button
                      className="px-2 py-1 text-gray-500 hover:bg-gray-200 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        updateQuantity(item.id, item.quantity - 1);
                      }}
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-3 font-medium text-sm">
                      {item.quantity}
                    </span>
                    <button
                      className="px-2 py-1 text-gray-500 hover:bg-gray-200 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        updateQuantity(item.id, item.quantity + 1);
                      }}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <p className="text-blue-600 font-medium">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
