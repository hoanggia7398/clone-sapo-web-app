"use client";

import Link from "next/link";
import { useState } from "react";
import { FileText, Search, Plus, ChevronDown } from "lucide-react";

export default function Orders() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDate, setFilterDate] = useState("Hôm nay");
  const [filterBranch, setFilterBranch] = useState("");

  // Hardcoded orders data
  const orders = [
    {
      id: "#DH0124",
      customer: "Trần Văn B",
      branch: "Chi nhánh Hà Nội",
      total: "486,000đ",
      status: "Hoàn thành",
      statusColor: "green",
      time: "15:42",
    },
    {
      id: "#DH0123",
      customer: "Nguyễn Thị C",
      branch: "Chi nhánh Hồ Chí Minh",
      total: "750,000đ",
      status: "Hoàn thành",
      statusColor: "green",
      time: "15:36",
    },
    {
      id: "#DH0122",
      customer: "Phạm Văn D",
      branch: "Chi nhánh Hà Nội",
      total: "285,000đ",
      status: "Đang xử lý",
      statusColor: "yellow",
      time: "14:52",
    },
    {
      id: "#DH0121",
      customer: "Lê Thị E",
      branch: "Chi nhánh Hà Nội",
      total: "1,250,000đ",
      status: "Hoàn thành",
      statusColor: "green",
      time: "14:05",
    },
    {
      id: "#DH0120",
      customer: "Hoàng Văn F",
      branch: "Chi nhánh Hồ Chí Minh",
      total: "645,000đ",
      status: "Đã hủy",
      statusColor: "red",
      time: "13:48",
    },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar - reusing styles from main page */}
      <aside className="w-60 bg-blue-950 text-white">
        <div className="flex items-center p-4 mb-8">
          <div className="bg-blue-400 text-white w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold mr-2">
            SC
          </div>
          <span className="font-semibold text-lg">SapoClone</span>
        </div>

        <div className="px-4 pb-2 text-xs text-gray-400">TỔNG QUAN</div>
        <Link
          href="/"
          className="flex items-center px-4 py-3 text-white hover:bg-blue-900"
        >
          <div className="mr-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
            </svg>
          </div>
          <span>Dashboard</span>
        </Link>

        <div className="mt-4 px-4 pb-2 text-xs text-gray-400">BÁN HÀNG</div>
        <nav>
          <Link
            href="/pos"
            className="flex items-center px-4 py-3 text-white hover:bg-blue-900"
          >
            <div className="mr-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 10.82v7.18c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h7.18" />
                <path d="M20 2v8h-8" />
                <path d="M23 21h-3v-3" />
                <path d="M18 16l-5-5" />
              </svg>
            </div>
            <span>POS Bán hàng</span>
          </Link>
          <div className="flex items-center px-4 py-3 text-white bg-blue-900">
            <div className="mr-3">
              <FileText size={20} />
            </div>
            <span>Đơn hàng</span>
          </div>
          <Link
            href="/customers"
            className="flex items-center px-4 py-3 text-white hover:bg-blue-900"
          >
            <div className="mr-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <span>Khách hàng</span>
          </Link>
        </nav>

        <div className="mt-4 px-4 pb-2 text-xs text-gray-400">SẢN PHẨM</div>
        <nav>
          <Link
            href="/products"
            className="flex items-center px-4 py-3 text-white hover:bg-blue-900"
          >
            <div className="mr-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <span>Sản phẩm</span>
          </Link>
          <Link
            href="/categories"
            className="flex items-center px-4 py-3 text-white hover:bg-blue-900"
          >
            <div className="mr-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3" y2="6" />
                <line x1="3" y1="12" x2="3" y2="12" />
                <line x1="3" y1="18" x2="3" y2="18" />
              </svg>
            </div>
            <span>Danh mục</span>
          </Link>
        </nav>

        <div className="mt-4 px-4 pb-2 text-xs text-gray-400">BÁO CÁO</div>
        <nav>
          <Link
            href="/revenue"
            className="flex items-center px-4 py-3 text-white hover:bg-blue-900"
          >
            <div className="mr-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="12" y1="20" x2="12" y2="10" />
                <line x1="18" y1="20" x2="18" y2="4" />
                <line x1="6" y1="20" x2="6" y2="16" />
              </svg>
            </div>
            <span>Doanh thu</span>
          </Link>
          <Link
            href="/bestsellers"
            className="flex items-center px-4 py-3 text-white hover:bg-blue-900"
          >
            <div className="mr-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 20V10" />
                <path d="M18 20V4" />
                <path d="M6 20v-4" />
              </svg>
            </div>
            <span>Sản phẩm bán chạy</span>
          </Link>
        </nav>

        <div className="mt-4 px-4 pb-2 text-xs text-gray-400">HỆ THỐNG</div>
        <nav>
          <Link
            href="/stores"
            className="flex items-center px-4 py-3 text-white hover:bg-blue-900"
          >
            <div className="mr-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <span>Chi nhánh</span>
          </Link>
          <Link
            href="/staff"
            className="flex items-center px-4 py-3 text-white hover:bg-blue-900"
          >
            <div className="mr-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <span>Nhân viên</span>
          </Link>
          <Link
            href="/settings"
            className="flex items-center px-4 py-3 text-white hover:bg-blue-900"
          >
            <div className="mr-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </div>
            <span>Cài đặt</span>
          </Link>
        </nav>
      </aside>

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
