"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function POSSidebar() {
  return (
    <aside className="w-60 bg-blue-950 text-white h-full overflow-y-auto">
      <div className="flex items-center p-4 mb-8">
        <div className="bg-blue-400 text-white w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold mr-2">
          SC
        </div>
        <span className="font-semibold text-lg">SapoClone</span>
      </div>

      <div className="px-4 pb-2 text-xs text-gray-400">TỔNG QUAN</div>
      <Link
        href="/"
        className="flex items-center px-4 py-3 text-white hover:bg-blue-900 transition-colors"
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
        <div className="flex items-center px-4 py-3 text-white bg-blue-900 relative">
          <div className="absolute left-0 w-1 h-full bg-blue-400"></div>
          <div className="mr-3">
            <ShoppingBag size={20} />
          </div>
          <span>POS Bán hàng</span>
        </div>
        <Link
          href="/orders"
          className="flex items-center px-4 py-3 text-white hover:bg-blue-900 transition-colors"
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
              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
              <polyline points="13 2 13 9 20 9" />
            </svg>
          </div>
          <span>Đơn hàng</span>
        </Link>
        <Link
          href="/customers"
          className="flex items-center px-4 py-3 text-white hover:bg-blue-900 transition-colors"
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
          className="flex items-center px-4 py-3 text-white hover:bg-blue-900 transition-colors"
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
          className="flex items-center px-4 py-3 text-white hover:bg-blue-900 transition-colors"
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
          className="flex items-center px-4 py-3 text-white hover:bg-blue-900 transition-colors"
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
          className="flex items-center px-4 py-3 text-white hover:bg-blue-900 transition-colors"
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
          className="flex items-center px-4 py-3 text-white hover:bg-blue-900 transition-colors"
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
          className="flex items-center px-4 py-3 text-white hover:bg-blue-900 transition-colors"
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
          className="flex items-center px-4 py-3 text-white hover:bg-blue-900 transition-colors"
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
  );
}
