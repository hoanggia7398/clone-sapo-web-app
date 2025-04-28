"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  ChevronDown,
  DollarSign,
  Filter,
  Package,
  Search,
  Users,
} from "lucide-react";
import Sidebar from "./components/Sidebar";
import MobileMenu from "./components/MobileMenu";
import StatsCard from "./components/StatsCard";
import RevenueChart from "./components/RevenueChart";
import BestSellingProducts from "./components/BestSellingProducts";
import RecentOrders from "./components/RecentOrders";
import BranchPerformance from "./components/BranchPerformance";
import PaymentMethods from "./components/PaymentMethods";
import Footer from "./components/Footer";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dateFilter, setDateFilter] = useState("today");
  const [showDateDropdown, setShowDateDropdown] = useState(false);

  // Stats data
  const statsCards = [
    {
      title: "Doanh thu",
      value: "123,456,000đ",
      change: { value: "12.5%", isPositive: true },
      previousValue: "11,184,000đ",
      icon: <DollarSign size={20} />,
      iconBgColor: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      title: "Đơn hàng",
      value: "164",
      change: { value: "8.3%", isPositive: true },
      previousValue: "152",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
          <polyline points="13 2 13 9 20 9" />
        </svg>
      ),
      iconBgColor: "bg-orange-50",
      iconColor: "text-orange-500",
    },
    {
      title: "Khách hàng",
      value: "38",
      change: { value: "4.2%", isPositive: false },
      previousValue: "42",
      icon: <Users size={20} />,
      iconBgColor: "bg-purple-50",
      iconColor: "text-purple-500",
    },
    {
      title: "Giá trị trung bình",
      value: "76,610đ",
      change: { value: "3.8%", isPositive: true },
      previousValue: "73,576đ",
      icon: (
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
      ),
      iconBgColor: "bg-green-50",
      iconColor: "text-green-500",
    },
  ];

  // Date range options
  const dateOptions = [
    { label: "Hôm nay", value: "today" },
    { label: "Hôm qua", value: "yesterday" },
    { label: "7 ngày qua", value: "7days" },
    { label: "Tháng này", value: "thisMonth" },
    { label: "Tháng trước", value: "lastMonth" },
    { label: "Tùy chỉnh", value: "custom" },
  ];

  // Get current date option label
  const getCurrentDateLabel = () => {
    const option = dateOptions.find((opt) => opt.value === dateFilter);
    return option ? option.label : "Hôm nay";
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Mobile Menu */}
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 bg-slate-50 overflow-y-auto mt-14 md:mt-0">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-semibold">
              Thông tin tổng quan hệ thống
            </h1>
          </div>
          <div className="flex items-center space-x-3">
            {/* Date filter dropdown */}
            <div className="relative">
              <button
                className="flex items-center px-3 py-2 bg-white border border-gray-200 rounded-md text-sm text-gray-700 hover:bg-gray-50 focus:outline-none"
                onClick={() => setShowDateDropdown(!showDateDropdown)}
              >
                <Calendar size={16} className="mr-2 text-gray-500" />
                <span>{getCurrentDateLabel()}</span>
                <ChevronDown size={16} className="ml-2 text-gray-500" />
              </button>

              {showDateDropdown && (
                <div className="absolute z-10 right-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200">
                  {dateOptions.map((option) => (
                    <button
                      key={option.value}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                        dateFilter === option.value
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700"
                      }`}
                      onClick={() => {
                        setDateFilter(option.value);
                        setShowDateDropdown(false);
                      }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md flex items-center justify-center hover:bg-blue-700 transition-colors shadow-sm">
              <span className="mr-2">Tạo đơn hàng</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Dashboard summary - new section */}
        <div className="mb-6 p-4 bg-white rounded-lg shadow-sm border border-gray-50">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-medium">Tổng quan hiệu suất</h2>
            <div className="flex items-center text-sm text-gray-600">
              <Search size={14} className="mr-1" />
              <span>Xem chi tiết báo cáo</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            Hiệu suất bán hàng đang tốt, tăng trưởng{" "}
            <span className="text-green-500 font-medium">12.5%</span> so với hôm
            qua.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          {statsCards.map((card, index) => (
            <StatsCard
              key={index}
              title={card.title}
              value={card.value}
              change={card.change}
              previousValue={card.previousValue}
              icon={card.icon}
              iconBgColor={card.iconBgColor}
              iconColor={card.iconColor}
            />
          ))}
        </div>

        {/* Charts and Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <div className="lg:col-span-1">
            <BestSellingProducts />
          </div>
        </div>

        {/* Branch Performance and Payment Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <BranchPerformance />
          <PaymentMethods />
        </div>

        {/* Recent Orders */}
        <RecentOrders />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
