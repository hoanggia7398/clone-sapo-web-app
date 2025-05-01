"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  DollarSign,
  FileText,
  Home,
  Layers,
  Package,
  Settings,
  ShoppingBag,
  Store,
  Users,
} from "lucide-react";

interface SidebarProps {
  variant?: "default" | "pos";
  onItemClick?: () => void; // Thêm prop onItemClick
}

export default function Sidebar({
  variant = "default",
  onItemClick,
}: SidebarProps) {
  const pathname = usePathname();

  const isActivePath = (path: string) => {
    return pathname === path;
  };

  // Wrapper cho các Link để xử lý onItemClick nếu được cung cấp
  const NavLink = ({
    href,
    children,
    className,
  }: {
    href: string;
    children: React.ReactNode;
    className: string;
  }) => {
    return (
      <Link
        href={href}
        className={className}
        onClick={() => onItemClick && onItemClick()}
      >
        {children}
      </Link>
    );
  };

  return (
    <aside
      className={`w-60 bg-blue-950 text-white ${
        variant === "default" ? "min-h-screen" : "h-full overflow-y-auto"
      }`}
    >
      <div className="flex items-center p-4 mb-8">
        <div className="bg-blue-400 text-white w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold mr-2">
          SC
        </div>
        <span className="pl-3 md:pl-0 font-semibold text-lg">SapoClone</span>
      </div>

      <div className="px-4 pb-2 text-xs text-gray-400">TỔNG QUAN</div>
      <NavLink
        href="/"
        className={`flex items-center px-4 py-3 text-white ${
          isActivePath("/")
            ? "bg-blue-900"
            : "hover:bg-blue-900 transition-colors"
        }`}
      >
        <div className="mr-3">
          <Home size={20} />
        </div>
        <span>Dashboard</span>
      </NavLink>

      <div className="mt-4 px-4 pb-2 text-xs text-gray-400">BÁN HÀNG</div>
      <nav>
        <NavLink
          href="/pos"
          className={`flex items-center px-4 py-3 text-white ${
            isActivePath("/pos")
              ? "bg-blue-900 relative"
              : "hover:bg-blue-900 transition-colors"
          }`}
        >
          {isActivePath("/pos") && variant === "pos" && (
            <div className="absolute left-0 w-1 h-full bg-blue-400"></div>
          )}
          <div className="mr-3">
            <ShoppingBag size={20} />
          </div>
          <span>POS Bán hàng</span>
        </NavLink>
        <NavLink
          href="/orders"
          className={`flex items-center px-4 py-3 text-white ${
            isActivePath("/orders")
              ? "bg-blue-900"
              : "hover:bg-blue-900 transition-colors"
          }`}
        >
          <div className="mr-3">
            <FileText size={20} />
          </div>
          <span>Đơn hàng</span>
        </NavLink>
        <NavLink
          href="/customers"
          className={`flex items-center px-4 py-3 text-white ${
            isActivePath("/customers")
              ? "bg-blue-900"
              : "hover:bg-blue-900 transition-colors"
          }`}
        >
          <div className="mr-3">
            <Users size={20} />
          </div>
          <span>Khách hàng</span>
        </NavLink>
      </nav>

      <div className="mt-4 px-4 pb-2 text-xs text-gray-400">SẢN PHẨM</div>
      <nav>
        <NavLink
          href="/products"
          className={`flex items-center px-4 py-3 text-white ${
            isActivePath("/products")
              ? "bg-blue-900"
              : "hover:bg-blue-900 transition-colors"
          }`}
        >
          <div className="mr-3">
            <Package size={20} />
          </div>
          <span>Sản phẩm</span>
        </NavLink>
        <NavLink
          href="/categories"
          className={`flex items-center px-4 py-3 text-white ${
            isActivePath("/categories")
              ? "bg-blue-900"
              : "hover:bg-blue-900 transition-colors"
          }`}
        >
          <div className="mr-3">
            <Layers size={20} />
          </div>
          <span>Danh mục</span>
        </NavLink>
      </nav>

      <div className="mt-4 px-4 pb-2 text-xs text-gray-400">BÁO CÁO</div>
      <nav>
        <NavLink
          href="/revenue"
          className={`flex items-center px-4 py-3 text-white ${
            isActivePath("/revenue")
              ? "bg-blue-900"
              : "hover:bg-blue-900 transition-colors"
          }`}
        >
          <div className="mr-3">
            <DollarSign size={20} />
          </div>
          <span>Doanh thu</span>
        </NavLink>
        <NavLink
          href="/bestsellers"
          className={`flex items-center px-4 py-3 text-white ${
            isActivePath("/bestsellers")
              ? "bg-blue-900"
              : "hover:bg-blue-900 transition-colors"
          }`}
        >
          <div className="mr-3">
            <BarChart3 size={20} />
          </div>
          <span>Sản phẩm bán chạy</span>
        </NavLink>
      </nav>

      <div className="mt-4 px-4 pb-2 text-xs text-gray-400">HỆ THỐNG</div>
      <nav>
        <NavLink
          href="/stores"
          className={`flex items-center px-4 py-3 text-white ${
            isActivePath("/stores")
              ? "bg-blue-900"
              : "hover:bg-blue-900 transition-colors"
          }`}
        >
          <div className="mr-3">
            <Store size={20} />
          </div>
          <span>Chi nhánh</span>
        </NavLink>
        <NavLink
          href="/staff"
          className={`flex items-center px-4 py-3 text-white ${
            isActivePath("/staff")
              ? "bg-blue-900"
              : "hover:bg-blue-900 transition-colors"
          }`}
        >
          <div className="mr-3">
            <Users size={20} />
          </div>
          <span>Nhân viên</span>
        </NavLink>
        <NavLink
          href="/settings"
          className={`flex items-center px-4 py-3 text-white ${
            isActivePath("/settings")
              ? "bg-blue-900"
              : "hover:bg-blue-900 transition-colors"
          }`}
        >
          <div className="mr-3">
            <Settings size={20} />
          </div>
          <span>Cài đặt</span>
        </NavLink>
      </nav>
    </aside>
  );
}
