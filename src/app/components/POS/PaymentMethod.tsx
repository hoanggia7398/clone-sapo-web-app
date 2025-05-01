"use client";

import { Banknote, CreditCard } from "lucide-react";

interface PaymentMethodProps {
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
}

export default function PaymentMethod({
  paymentMethod,
  setPaymentMethod,
}: PaymentMethodProps) {
  return (
    <div className="mb-4 rounded-lg border overflow-hidden">
      <div className="flex border-b">
        <button
          className={`flex-1 p-2 text-center text-sm flex justify-center items-center ${
            paymentMethod === "cash"
              ? "bg-blue-50 text-blue-600 border-b-2 border-blue-500"
              : "bg-white text-gray-600"
          }`}
          onClick={() => setPaymentMethod("cash")}
        >
          <Banknote size={16} className="mr-1" />
          <span>Tiền mặt</span>
        </button>
        <button
          className={`flex-1 p-2 text-center text-sm flex justify-center items-center ${
            paymentMethod === "card"
              ? "bg-blue-50 text-blue-600 border-b-2 border-blue-500"
              : "bg-white text-gray-600"
          }`}
          onClick={() => setPaymentMethod("card")}
        >
          <CreditCard size={16} className="mr-1" />
          <span>Thẻ</span>
        </button>
      </div>
    </div>
  );
}
