import React from "react";

interface PaymentMethodType {
  method: string;
  amount: string;
  percentage: number;
  icon: React.ReactNode;
  color: string;
}

const PaymentMethods = () => {
  const methods: PaymentMethodType[] = [
    {
      method: "Tiền mặt",
      amount: "8,240,000đ",
      percentage: 65,
      icon: (
        <div className="bg-blue-100 p-2 rounded-md">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-blue-500"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <line x1="2" y1="10" x2="22" y2="10" />
          </svg>
        </div>
      ),
      color: "bg-blue-500",
    },
    {
      method: "Thẻ",
      amount: "3,146,000đ",
      percentage: 25,
      icon: (
        <div className="bg-orange-100 p-2 rounded-md">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-orange-500"
          >
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
            <line x1="1" y1="10" x2="23" y2="10" />
          </svg>
        </div>
      ),
      color: "bg-orange-500",
    },
    {
      method: "QR Code / Chuyển khoản",
      amount: "1,200,000đ",
      percentage: 10,
      icon: (
        <div className="bg-purple-100 p-2 rounded-md">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-purple-500"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <rect x="7" y="7" width="3" height="3" />
            <rect x="14" y="7" width="3" height="3" />
            <rect x="7" y="14" width="3" height="3" />
            <rect x="14" y="14" width="3" height="3" />
          </svg>
        </div>
      ),
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-50">
      <div className="mb-4">
        <h2 className="font-medium text-gray-800">Phương thức thanh toán</h2>
      </div>

      <div className="space-y-4">
        {methods.map((method, index) => (
          <div key={index} className="flex items-center">
            <div className="mr-3">{method.icon}</div>
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <p className="font-medium text-gray-800">{method.method}</p>
                <p className="font-medium">{method.percentage}%</p>
              </div>
              <div className="flex justify-between text-sm">
                <p className="text-gray-500">{method.amount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethods;
