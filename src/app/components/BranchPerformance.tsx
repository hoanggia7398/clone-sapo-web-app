import React from "react";

interface BranchStats {
  name: string;
  revenue: string;
  orders: number;
  percentage: string;
}

const BranchPerformance = () => {
  const branches: BranchStats[] = [
    {
      name: "Chi nhánh Hà Nội",
      revenue: "5,840,000đ",
      orders: 72,
      percentage: "+15.4%",
    },
    {
      name: "Chi nhánh Hồ Chí Minh",
      revenue: "4,250,000đ",
      orders: 58,
      percentage: "+8.7%",
    },
    {
      name: "Chi nhánh Đà Nẵng",
      revenue: "2,496,000đ",
      orders: 34,
      percentage: "+5.2%",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-50">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-medium text-gray-800">Hiệu suất theo chi nhánh</h2>
        <button className="text-blue-600 text-sm">Xem chi tiết</button>
      </div>

      <div className="space-y-4">
        {branches.map((branch, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <div>
                <h3 className="font-medium">{branch.name}</h3>
                <p className="text-sm text-gray-500">
                  {branch.orders} đơn hàng
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium">{branch.revenue}</p>
                <p className="text-sm text-green-600">{branch.percentage}</p>
              </div>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${
                  index === 0
                    ? "bg-blue-500"
                    : index === 1
                    ? "bg-orange-500"
                    : "bg-purple-500"
                }`}
                style={{
                  width: index === 0 ? "75%" : index === 1 ? "55%" : "35%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BranchPerformance;
