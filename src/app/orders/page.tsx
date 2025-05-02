"use client";

import { useState } from "react";
import { Search, Plus, ChevronDown, Filter } from "lucide-react";
import { orders } from "../../mockData/orders";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Orders() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDate] = useState("Hôm nay");
  const [activeTab, setActiveTab] = useState("Tất cả");

  const tabs = [
    { name: "Tất cả", count: orders.length },
    {
      name: "Hoàn thành",
      count: orders.filter((o) => o.status === "Hoàn thành").length,
    },
    {
      name: "Đang xử lý",
      count: orders.filter((o) => o.status === "Đang xử lý").length,
    },
    {
      name: "Đã hủy",
      count: orders.filter((o) => o.status === "Đã hủy").length,
    },
  ];

  const filteredOrders =
    activeTab === "Tất cả"
      ? orders
      : orders.filter((order) => order.status === activeTab);

  return (
    <div className="bg-slate-50 min-h-screen pb-6">
      {/* Header */}
      <div className="bg-white p-4 border-b">
        <h1 className="text-xl font-semibold mb-1">Đơn hàng</h1>
        <p className="text-gray-500 text-sm">Quản lý và theo dõi đơn hàng</p>
      </div>

      {/* Search and Filters - Desktop */}
      <div className="bg-white p-4 hidden md:block">
        <div className="flex flex-wrap gap-2">
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

          <div className="relative">
            <button className="px-4 py-2 border border-gray-300 rounded-md flex items-center">
              <span>{filterDate}</span>
              <ChevronDown size={16} className="ml-2" />
            </button>
          </div>

          <div className="relative">
            <button className="px-4 py-2 border border-gray-300 rounded-md flex items-center">
              <span>Tất cả chi nhánh</span>
              <ChevronDown size={16} className="ml-2" />
            </button>
          </div>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus size={18} className="mr-2" />
            <span>Tạo đơn hàng</span>
          </Button>
        </div>
      </div>

      {/* Mobile Search and Filter */}
      <div className="bg-white p-4 flex items-center space-x-2 md:hidden sticky top-14 z-10 border-b">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search size={16} className="text-gray-400" />
          </div>
          <input
            type="search"
            className="pl-10 pr-3 py-2 text-sm border border-gray-300 rounded-md w-full h-10"
            placeholder="Tìm kiếm..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Button variant="outline" size="icon" className="h-10 w-10 shrink-0">
          <Filter size={16} />
        </Button>

        <div className="relative">
          <Button variant="outline" className="h-10 flex items-center text-sm">
            <span>{filterDate}</span>
            <ChevronDown size={14} className="ml-1" />
          </Button>
        </div>

        <Button
          size="sm"
          className="bg-blue-600 hover:bg-blue-700 text-white h-10 px-3"
        >
          <Plus size={16} />
          <span className="sr-only md:not-sr-only md:ml-2">Tạo đơn hàng</span>
        </Button>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex whitespace-nowrap min-w-full">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`px-4 py-3 font-medium relative flex items-center ${
                  activeTab === tab.name ? "text-blue-600" : "text-gray-500"
                }`}
              >
                {tab.name}
                {tab.count > 0 && (
                  <span className="ml-1 text-xs text-gray-400">
                    ({tab.count})
                  </span>
                )}
                {activeTab === tab.name && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Orders - Desktop View */}
      <div className="overflow-x-auto hidden md:block bg-white mx-4 mt-4 rounded-md shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left text-xs text-gray-500">
              <th className="py-3 px-4 font-medium">Mã đơn</th>
              <th className="py-3 px-4 font-medium">Khách hàng</th>
              <th className="py-3 px-4 font-medium">Chi nhánh</th>
              <th className="py-3 px-4 font-medium">Tổng tiền</th>
              <th className="py-3 px-4 font-medium">Trạng thái</th>
              <th className="py-3 px-4 font-medium">Thời gian</th>
              <th className="py-3 px-4 font-medium">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-4 px-4 text-blue-600">{order.id}</td>
                <td className="py-4 px-4">{order.customer}</td>
                <td className="py-4 px-4">{order.branch}</td>
                <td className="py-4 px-4 font-medium">{order.total}</td>
                <td className="py-4 px-4">
                  <Badge
                    className={`px-2 py-1 ${
                      order.statusColor === "green"
                        ? "bg-green-100 text-green-600 hover:bg-green-100"
                        : order.statusColor === "yellow"
                        ? "bg-yellow-100 text-yellow-600 hover:bg-yellow-100"
                        : "bg-red-100 text-red-600 hover:bg-red-100"
                    }`}
                    variant="outline"
                  >
                    {order.status}
                  </Badge>
                </td>
                <td className="py-4 px-4">{order.time}</td>
                <td className="py-4 px-4">
                  <button className="text-gray-500">
                    <ChevronDown size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Orders - Mobile Card View */}
      <div className="md:hidden space-y-3 p-3">
        {filteredOrders.map((order, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-4 border border-gray-100"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-blue-600 font-medium">{order.id}</span>
              <div className="flex items-center">
                <Badge
                  className={`font-normal text-xs px-2 ${
                    order.statusColor === "green"
                      ? "bg-green-100 text-green-600 hover:bg-green-100"
                      : order.statusColor === "yellow"
                      ? "bg-yellow-100 text-yellow-600 hover:bg-yellow-100"
                      : "bg-red-100 text-red-600 hover:bg-red-100"
                  }`}
                  variant="outline"
                >
                  {order.status}
                </Badge>
                <div className="ml-2 text-gray-500 flex items-center text-sm">
                  {order.time}
                  <ChevronDown size={16} className="ml-1" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-1 text-sm">
              <div className="text-gray-500">Khách hàng</div>
              <div className="font-medium">{order.customer}</div>

              <div className="text-gray-500">Chi nhánh</div>
              <div>{order.branch}</div>

              <div className="text-gray-500 mt-1">Tổng tiền</div>
              <div className="font-medium text-base">{order.total}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Action Button for Mobile */}
      <div className="md:hidden fixed bottom-6 right-6">
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg h-14 w-14 flex items-center justify-center"
        >
          <Plus size={24} />
          <span className="sr-only">Tạo đơn hàng</span>
        </Button>
      </div>
    </div>
  );
}
