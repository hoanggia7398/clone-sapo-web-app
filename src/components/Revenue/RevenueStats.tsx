import { revenueStats } from "@/mockData/revenue";
import { formatCurrency } from "@/lib/utils";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

const RevenueStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Total Revenue */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-lg font-medium text-gray-500">Tổng doanh thu</h3>
        <div className="mt-2">
          <div className="text-3xl font-bold">
            {formatCurrency(revenueStats.totalRevenue.value)}đ
          </div>
          <div className="mt-2 flex items-center">
            {revenueStats.totalRevenue.change > 0 ? (
              <div className="flex items-center text-emerald-600">
                <ArrowUpIcon className="h-4 w-4 mr-1" />
                <span>
                  +{revenueStats.totalRevenue.change}% so với kỳ trước
                </span>
              </div>
            ) : (
              <div className="flex items-center text-red-600">
                <ArrowDownIcon className="h-4 w-4 mr-1" />
                <span>{revenueStats.totalRevenue.change}% so với kỳ trước</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Order Count */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-lg font-medium text-gray-500">Số đơn hàng</h3>
        <div className="mt-2">
          <div className="text-3xl font-bold">
            {revenueStats.orderCount.value}
          </div>
          <div className="mt-2 flex items-center">
            {revenueStats.orderCount.change > 0 ? (
              <div className="flex items-center text-emerald-600">
                <ArrowUpIcon className="h-4 w-4 mr-1" />
                <span>+{revenueStats.orderCount.change}% so với kỳ trước</span>
              </div>
            ) : (
              <div className="flex items-center text-red-600">
                <ArrowDownIcon className="h-4 w-4 mr-1" />
                <span>{revenueStats.orderCount.change}% so với kỳ trước</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Average Order Value */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-lg font-medium text-gray-500">
          Giá trị trung bình
        </h3>
        <div className="mt-2">
          <div className="text-3xl font-bold">
            {formatCurrency(revenueStats.averageValue.value)}đ
          </div>
          <div className="mt-2 flex items-center">
            {revenueStats.averageValue.change > 0 ? (
              <div className="flex items-center text-emerald-600">
                <ArrowUpIcon className="h-4 w-4 mr-1" />
                <span>
                  +{revenueStats.averageValue.change}% so với kỳ trước
                </span>
              </div>
            ) : (
              <div className="flex items-center text-red-600">
                <ArrowDownIcon className="h-4 w-4 mr-1" />
                <span>{revenueStats.averageValue.change}% so với kỳ trước</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueStats;
