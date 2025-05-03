"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Suspense, lazy } from "react";

// Use dynamic imports to avoid TypeScript issues
const StoreSettings = lazy(() => import("./StoreSettings"));
const UserSettings = lazy(() => import("./UserSettings"));
const InvoiceSettings = lazy(() => import("./InvoiceSettings"));

// Loading placeholder
const TabLoading = () => (
  <div className="py-10 text-center">
    <p className="text-muted-foreground">Đang tải...</p>
  </div>
);

export default function SettingsTabs() {
  return (
    <Card className="p-6">
      <Tabs defaultValue="store" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="store">Thông tin cửa hàng</TabsTrigger>
          <TabsTrigger value="user">Tài khoản người dùng</TabsTrigger>
          <TabsTrigger value="invoice">Cài đặt in hóa đơn</TabsTrigger>
        </TabsList>

        <TabsContent value="store">
          <Suspense fallback={<TabLoading />}>
            <StoreSettings />
          </Suspense>
        </TabsContent>

        <TabsContent value="user">
          <Suspense fallback={<TabLoading />}>
            <UserSettings />
          </Suspense>
        </TabsContent>

        <TabsContent value="invoice">
          <Suspense fallback={<TabLoading />}>
            <InvoiceSettings />
          </Suspense>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
