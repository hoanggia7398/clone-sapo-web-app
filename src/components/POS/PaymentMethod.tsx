"use client";

import { Banknote, CreditCard } from "lucide-react";
import { useIsMobile } from "../../hooks/use-mobile";

interface PaymentMethodProps {
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
}

export default function PaymentMethod({
  paymentMethod,
  setPaymentMethod,
}: PaymentMethodProps) {
  const isMobile = useIsMobile();

  return (
    <div
      className={`${
        isMobile ? "mb-2 rounded-md" : "mb-3 md:mb-4 rounded-lg"
      } border overflow-hidden`}
    >
      <div className="flex border-b">
        <button
          className={`flex-1 ${
            isMobile ? "py-1.5" : "py-2"
          } px-1 text-center text-xs md:text-sm flex justify-center items-center ${
            paymentMethod === "cash"
              ? "bg-blue-50 text-blue-600 border-b-2 border-blue-500"
              : "bg-white text-gray-600"
          }`}
          onClick={() => setPaymentMethod("cash")}
        >
          <Banknote size={isMobile ? 12 : 14} className="mr-1" />
          <span>Tiền mặt</span>
        </button>
        <button
          className={`flex-1 ${
            isMobile ? "py-1.5" : "py-2"
          } px-1 text-center text-xs md:text-sm flex justify-center items-center ${
            paymentMethod === "card"
              ? "bg-blue-50 text-blue-600 border-b-2 border-blue-500"
              : "bg-white text-gray-600"
          }`}
          onClick={() => setPaymentMethod("card")}
        >
          <CreditCard size={isMobile ? 12 : 14} className="mr-1" />
          <span>Thẻ</span>
        </button>
      </div>
    </div>
  );
}
