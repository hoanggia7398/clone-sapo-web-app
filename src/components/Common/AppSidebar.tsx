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

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  variant?: "default" | "pos";
  onItemClick?: () => void;
}

export default function AppSidebar({
  variant = "default",
  onItemClick,
}: AppSidebarProps) {
  const pathname = usePathname();

  const isActivePath = (path: string) => {
    return pathname === path;
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar collapsible="icon">
        <SidebarHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-400 text-white w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold">
              SC
            </div>
            <span className="font-semibold text-lg group-data-[collapsible=icon]:hidden">
              SapoClone
            </span>
          </div>
          <SidebarTrigger />
        </SidebarHeader>

        <SidebarContent>
          {/* Dashboard Section */}
          <SidebarMenu>
            <SidebarMenuItem>
              <Link href="/" onClick={() => onItemClick?.()}>
                <SidebarMenuButton
                  isActive={isActivePath("/")}
                  tooltip="Dashboard"
                >
                  <Home className="size-4 shrink-0" />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>

          {/* Sales Section */}
          <div className="px-4 py-1 text-xs text-gray-500 group-data-[collapsible=icon]:hidden">
            BÁN HÀNG
          </div>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link href="/pos" onClick={() => onItemClick?.()}>
                <SidebarMenuButton
                  isActive={isActivePath("/pos")}
                  tooltip="POS Bán hàng"
                >
                  <ShoppingBag className="size-4 shrink-0" />
                  <span>POS Bán hàng</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <Link href="/orders" onClick={() => onItemClick?.()}>
                <SidebarMenuButton
                  isActive={isActivePath("/orders")}
                  tooltip="Đơn hàng"
                >
                  <FileText className="size-4 shrink-0" />
                  <span>Đơn hàng</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <Link href="/customers" onClick={() => onItemClick?.()}>
                <SidebarMenuButton
                  isActive={isActivePath("/customers")}
                  tooltip="Khách hàng"
                >
                  <Users className="size-4 shrink-0" />
                  <span>Khách hàng</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>

          {/* Products Section */}
          <div className="px-4 py-1 text-xs text-gray-500 group-data-[collapsible=icon]:hidden">
            SẢN PHẨM
          </div>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link href="/products" onClick={() => onItemClick?.()}>
                <SidebarMenuButton
                  isActive={isActivePath("/products")}
                  tooltip="Sản phẩm"
                >
                  <Package className="size-4 shrink-0" />
                  <span>Sản phẩm</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <Link href="/categories" onClick={() => onItemClick?.()}>
                <SidebarMenuButton
                  isActive={isActivePath("/categories")}
                  tooltip="Danh mục"
                >
                  <Layers className="size-4 shrink-0" />
                  <span>Danh mục</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>

          {/* Reports Section */}
          <div className="px-4 py-1 text-xs text-gray-500 group-data-[collapsible=icon]:hidden">
            BÁO CÁO
          </div>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link href="/revenue" onClick={() => onItemClick?.()}>
                <SidebarMenuButton
                  isActive={isActivePath("/revenue")}
                  tooltip="Doanh thu"
                >
                  <DollarSign className="size-4 shrink-0" />
                  <span>Doanh thu</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <Link href="/bestsellers" onClick={() => onItemClick?.()}>
                <SidebarMenuButton
                  isActive={isActivePath("/bestsellers")}
                  tooltip="Sản phẩm bán chạy"
                >
                  <BarChart3 className="size-4 shrink-0" />
                  <span>Sản phẩm bán chạy</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>

          {/* System Section */}
          <div className="px-4 py-1 text-xs text-gray-500 group-data-[collapsible=icon]:hidden">
            HỆ THỐNG
          </div>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link href="/stores" onClick={() => onItemClick?.()}>
                <SidebarMenuButton
                  isActive={isActivePath("/stores")}
                  tooltip="Chi nhánh"
                >
                  <Store className="size-4 shrink-0" />
                  <span>Chi nhánh</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <Link href="/staff" onClick={() => onItemClick?.()}>
                <SidebarMenuButton
                  isActive={isActivePath("/staff")}
                  tooltip="Nhân viên"
                >
                  <Users className="size-4 shrink-0" />
                  <span>Nhân viên</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <Link href="/settings" onClick={() => onItemClick?.()}>
                <SidebarMenuButton
                  isActive={isActivePath("/settings")}
                  tooltip="Cài đặt"
                >
                  <Settings className="size-4 shrink-0" />
                  <span>Cài đặt</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter className="bg-gray-50 dark:bg-gray-800/50">
          <div className="flex items-center gap-2 px-2 py-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0">
              U
            </div>
            <div className="flex flex-col text-sm group-data-[collapsible=icon]:hidden">
              <span className="font-medium">User</span>
              <span className="text-xs text-gray-500">admin@sapo.com</span>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
}
