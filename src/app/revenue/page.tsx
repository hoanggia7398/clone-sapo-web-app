import { Metadata } from "next";
import RevenueHeader from "@/components/Revenue/RevenueHeader";
import RevenueStats from "@/components/Revenue/RevenueStats";
import RevenueByBranchChart from "@/components/Revenue/RevenueByBranchChart";
import RevenueByPaymentMethodChart from "@/components/Revenue/RevenueByPaymentMethodChart";
import RevenueTrendChart from "@/components/Revenue/RevenueTrendChart";

export const metadata: Metadata = {
  title: "Báo cáo doanh thu | SAPO",
  description: "Thống kê doanh thu theo thời gian và chi nhánh",
};

export default function RevenuePage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <RevenueHeader />
      <RevenueStats />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueTrendChart />
        <div className="grid grid-cols-1 gap-6">
          <RevenueByBranchChart />
          <RevenueByPaymentMethodChart />
        </div>
      </div>
    </div>
  );
}
