"use client";

import { useState } from "react";
import { Search, Plus, ChevronDown } from "lucide-react";
import { orders } from "../../mockData/orders";

export default function Orders() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDate] = useState("Hôm nay");

  return (
    <div className="min-h-screen flex">
      {/* Main Content */}
      <main className="flex-1 p-6 bg-white">
        <div className="pb-6 border-b">
          <h1 className="text-xl font-semibold mb-1">Đơn hàng</h1>
          <p className="text-gray-500 text-sm">Quản lý và theo dõi đơn hàng</p>
        </div>

        {/* Search and Add Order */}
        <div className="pt-6 pb-4">
          <div className="flex">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full"
                placeholder="Tìm kiếm mã đơn, khách hàng..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="relative mx-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md flex items-center">
                <span>{filterDate}</span>
                <ChevronDown size={16} className="ml-2" />
              </button>
            </div>

            <div className="relative mx-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md flex items-center">
                <span>Tất cả chi nhánh</span>
                <ChevronDown size={16} className="ml-2" />
              </button>
            </div>

            <button className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
              <Plus size={18} className="mr-2" />
              <span>Tạo đơn hàng</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="border-b">
          <div className="flex">
            <button className="px-4 py-3 border-b-2 border-blue-600 font-medium text-blue-600">
              Tất cả
            </button>
            <button className="px-4 py-3 text-gray-500">Hoàn thành</button>
            <button className="px-4 py-3 text-gray-500">Đang xử lý</button>
            <button className="px-4 py-3 text-gray-500">Đã hủy</button>
          </div>
        </div>

        {/* Orders Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left text-xs text-gray-500">
                <th className="py-3 font-medium">Mã đơn</th>
                <th className="py-3 font-medium">Khách hàng</th>
                <th className="py-3 font-medium">Chi nhánh</th>
                <th className="py-3 font-medium">Tổng tiền</th>
                <th className="py-3 font-medium">Trạng thái</th>
                <th className="py-3 font-medium">Thời gian</th>
                <th className="py-3 font-medium">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="border-b">
                  <td className="py-4 text-blue-600">{order.id}</td>
                  <td className="py-4">{order.customer}</td>
                  <td className="py-4">{order.branch}</td>
                  <td className="py-4">{order.total}</td>
                  <td className="py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        order.statusColor === "green"
                          ? "bg-green-100 text-green-600"
                          : order.statusColor === "yellow"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4">{order.time}</td>
                  <td className="py-4">
                    <button className="text-gray-500">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
