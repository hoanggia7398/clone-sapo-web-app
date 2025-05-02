import BestsellersHeader from "@/components/BestSellers/BestsellersHeader";
import BestsellingCategoryChart from "@/components/BestSellers/BestsellingCategoryChart";
import BestsellingProductsChart from "@/components/BestSellers/BestsellingProductsChart";
import BestsellingProductsTable from "@/components/BestSellers/BestsellingProductsTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sản phẩm bán chạy | SAPO",
  description: "Thống kê sản phẩm bán chạy nhất",
};

export default function BestsellersPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <BestsellersHeader />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BestsellingProductsChart />
        <BestsellingCategoryChart />
      </div>
      <BestsellingProductsTable />
    </div>
  );
}
