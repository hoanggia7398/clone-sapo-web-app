import {
  Calendar,
  ChevronDown,
  Filter,
  MoreHorizontal,
  Search,
} from "lucide-react";
import { useState } from "react";

// Sample order data
const orders = [
  {
    id: "#ĐH123",
    customer: "Trần Văn A",
    branch: "Chi nhánh Hà Nội",
    total: "850,000đ",
    status: "completed",
    time: "15:32",
  },
  {
    id: "#ĐH125",
    customer: "Nguyễn Thị B",
    branch: "Chi nhánh Hồ Chí Minh",
    total: "750,000đ",
    status: "completed",
    time: "15:25",
  },
];

// Status badge component
const StatusBadge = ({ status }: { status: string }) => {
  let bgColor = "bg-gray-100";
  let textColor = "text-gray-700";

  if (status === "completed") {
    bgColor = "bg-green-50";
    textColor = "text-green-600";
  } else if (status === "pending") {
    bgColor = "bg-yellow-50";
    textColor = "text-yellow-600";
  } else if (status === "cancelled") {
    bgColor = "bg-red-50";
    textColor = "text-red-600";
  }

  // Translate status for display
  const getStatusText = () => {
    switch (status) {
      case "completed":
        return "Hoàn thành";
      case "pending":
        return "Đang xử lý";
      case "cancelled":
        return "Đã hủy";
      default:
        return "Đang xử lý";
    }
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor} ${textColor}`}
    >
      {getStatusText()}
    </span>
  );
};

export default function RecentOrders() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-50 mt-6">
      {/* Header */}
      <div className="p-5 border-b border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-lg font-medium">Đơn hàng gần đây</h2>

          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm đơn hàng..."
                className="pl-8 pr-4 py-1.5 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 w-full sm:w-64"
              />
              <Search
                size={16}
                className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>

            {/* Filter button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-1 px-3 py-1.5 border border-gray-200 rounded-md text-sm hover:bg-gray-50"
            >
              <Filter size={16} />
              <span>Lọc</span>
            </button>
          </div>
        </div>

        {/* Filter options - conditionally shown */}
        {showFilters && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-100">
            <div>
              <label className="block text-xs text-gray-500 mb-1">
                Trạng thái
              </label>
              <select className="w-full border border-gray-200 rounded-md px-3 py-1.5 text-sm">
                <option>Tất cả</option>
                <option>Hoàn thành</option>
                <option>Đang xử lý</option>
                <option>Đã hủy</option>
              </select>
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-1">
                Chi nhánh
              </label>
              <select className="w-full border border-gray-200 rounded-md px-3 py-1.5 text-sm">
                <option>Tất cả chi nhánh</option>
                <option>Chi nhánh Hà Nội</option>
                <option>Chi nhánh Hồ Chí Minh</option>
              </select>
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-1">Ngày</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Chọn ngày"
                  className="w-full border border-gray-200 rounded-md px-3 py-1.5 text-sm pl-8"
                />
                <Calendar
                  size={16}
                  className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-100">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mã đơn
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Khách hàng
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Chi nhánh
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tổng tiền
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Trạng thái
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Thời gian
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                  {order.id}
                </td>
                <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-800">
                  {order.customer}
                </td>
                <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-600">
                  {order.branch}
                </td>
                <td className="px-5 py-4 whitespace-nowrap text-sm font-medium">
                  {order.total}
                </td>
                <td className="px-5 py-4 whitespace-nowrap">
                  <StatusBadge status={order.status} />
                </td>
                <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-600">
                  {order.time}
                </td>
                <td className="px-5 py-4 whitespace-nowrap text-sm">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-5 py-4 flex items-center justify-between border-t border-gray-100">
        <div className="flex-1 flex justify-between sm:hidden">
          <button className="px-4 py-2 border border-gray-200 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Trước
          </button>
          <button className="ml-3 px-4 py-2 border border-gray-200 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Tiếp
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Hiển thị <span className="font-medium">1</span> đến{" "}
              <span className="font-medium">2</span> trong{" "}
              <span className="font-medium">2</span> đơn hàng
            </p>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-200 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Trước</span>
                <ChevronDown className="h-4 w-4 rotate-90" />
              </button>
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                1
              </button>
              <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-200 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Tiếp</span>
                <ChevronDown className="h-4 w-4 -rotate-90" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
