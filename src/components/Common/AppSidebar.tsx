"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  DollarSign,
  FileText,
  Home,
  Layers,
  LucideIcon,
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
  useSidebar,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  onItemClick?: () => void;
  hideHeader?: boolean;
}

interface MenuItem {
  href: string;
  label: string;
  tooltip: string;
  icon: LucideIcon;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

export default function AppSidebar({
  onItemClick,
  hideHeader,
}: AppSidebarProps) {
  const pathname = usePathname();

  const isActivePath = (path: string) => {
    return pathname === path;
  };

  // Define all menu sections
  const menuSections: MenuSection[] = [
    {
      title: "", // Dashboard has no section title
      items: [
        {
          href: "/",
          label: "Dashboard",
          tooltip: "Dashboard",
          icon: Home,
        },
      ],
    },
    {
      title: "BÁN HÀNG",
      items: [
        {
          href: "/pos",
          label: "POS Bán hàng",
          tooltip: "POS Bán hàng",
          icon: ShoppingBag,
        },
        {
          href: "/orders",
          label: "Đơn hàng",
          tooltip: "Đơn hàng",
          icon: FileText,
        },
        {
          href: "/customers",
          label: "Khách hàng",
          tooltip: "Khách hàng",
          icon: Users,
        },
      ],
    },
    {
      title: "SẢN PHẨM",
      items: [
        {
          href: "/products",
          label: "Sản phẩm",
          tooltip: "Sản phẩm",
          icon: Package,
        },
        {
          href: "/categories",
          label: "Danh mục",
          tooltip: "Danh mục",
          icon: Layers,
        },
      ],
    },
    {
      title: "BÁO CÁO",
      items: [
        {
          href: "/revenue",
          label: "Doanh thu",
          tooltip: "Doanh thu",
          icon: DollarSign,
        },
        {
          href: "/bestsellers",
          label: "Sản phẩm bán chạy",
          tooltip: "Sản phẩm bán chạy",
          icon: BarChart3,
        },
      ],
    },
    {
      title: "HỆ THỐNG",
      items: [
        {
          href: "/stores",
          label: "Chi nhánh",
          tooltip: "Chi nhánh",
          icon: Store,
        },
        {
          href: "/staff",
          label: "Nhân viên",
          tooltip: "Nhân viên",
          icon: Users,
        },
        {
          href: "/settings",
          label: "Cài đặt",
          tooltip: "Cài đặt",
          icon: Settings,
        },
      ],
    },
  ];

  const sidebarContent = (
    <>
      {!hideHeader && (
        <SidebarHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-400 text-white w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold">
              SC
            </div>
            <span className="font-semibold text-lg md:group-data-[collapsible=icon]:hidden">
              SapoClone
            </span>
          </div>
          <SidebarTrigger />
        </SidebarHeader>
      )}
      <SidebarContent>
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            {section.title && (
              <div className="px-4 py-1 text-xs text-gray-500 md:group-data-[collapsible=icon]:hidden">
                {section.title}
              </div>
            )}
            <SidebarMenu>
              {section.items.map((item, itemIndex) => {
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={itemIndex}>
                    <Link
                      className="flex justify-center"
                      href={item.href}
                      onClick={() => onItemClick?.()}
                    >
                      <SidebarMenuButton
                        isActive={isActivePath(item.href)}
                        tooltip={item.tooltip}
                      >
                        <Icon className="size-4 shrink-0" />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </div>
        ))}
      </SidebarContent>

      <SidebarFooter className="bg-gray-50 dark:bg-gray-800/50">
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0">
            U
          </div>
          <div className="flex flex-col text-sm md:group-data-[collapsible=icon]:hidden">
            <span className="font-medium">User</span>
            <span className="text-xs text-gray-500">admin@sapo.com</span>
          </div>
        </div>
      </SidebarFooter>
    </>
  );

  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar collapsible="icon">{sidebarContent}</Sidebar>
    </SidebarProvider>
  );
}
