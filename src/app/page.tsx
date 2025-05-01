"use client";

import { useState } from "react";
import { Calendar, ChevronDown, Search } from "lucide-react";
import StatsCard from "../components/Dashboard/StatsCard";
import RevenueChart from "../components/Dashboard/RevenueChart";
import BestSellingProducts from "../components/Dashboard/BestSellingProducts";
import RecentOrders from "../components/Dashboard/RecentOrders";
import BranchPerformance from "../components/Dashboard/BranchPerformance";
import PaymentMethods from "../components/Dashboard/PaymentMethods";
import Footer from "../components/Dashboard/Footer";
import { statsCards, dateOptions } from "../mockData/dashboard";

export default function Home() {
  const [dateFilter, setDateFilter] = useState("today");
  const [showDateDropdown, setShowDateDropdown] = useState(false);

  // Get current date option label
  const getCurrentDateLabel = () => {
    const option = dateOptions.find((opt) => opt.value === dateFilter);
    return option ? option.label : "Hôm nay";
  };

  return (
    <>
      {/* Mobile Menu */}
      {/* <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}

      <div className="p-4 md:p-6 bg-slate-50 overflow-y-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
          <div className="pl-12 md:pl-0">
            {/* Added padding-left for mobile view */}
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
            <RecentOrders />
          </div>
          <div className="grid grid-cols-1 gap-6">
            <BranchPerformance />
            <PaymentMethods />
            <BestSellingProducts />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
