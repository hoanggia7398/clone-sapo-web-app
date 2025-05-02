"use client";

import { categoryChartData } from "@/mockData/bestsellers";
import { chartColors } from "@/lib/chartUtils";
import { Doughnut } from "react-chartjs-2";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { ChartOptions } from "chart.js";

const BestsellingCategoryChart = () => {
  // Colors for categories
  const categoryColors = [
    chartColors.blue,
    chartColors.green,
    chartColors.purple,
    chartColors.orange,
    chartColors.teal,
  ];

  const chartData = {
    labels: categoryChartData.labels,
    datasets: [
      {
        data: categoryChartData.data,
        backgroundColor: categoryChartData.labels.map(
          (_, i) => categoryColors[i % categoryColors.length]
        ),
        borderColor: categoryChartData.labels.map(
          (_, i) => categoryColors[i % categoryColors.length]
        ),
        borderWidth: 1,
      },
    ],
  };

  const chartOptions: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          boxWidth: 10,
          padding: 15,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const label = context.label || "";
            const value = context.parsed || 0;
            const total = context.dataset.data.reduce(
              (a: number, b: number) => a + b,
              0
            );
            const percentage = ((value / total) * 100).toFixed(1);

            return `${label}: ${new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
              maximumFractionDigits: 0,
            }).format(value * 1000000)} (${percentage}%)`;
          },
        },
      },
    },
    cutout: "65%",
  };

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-medium">
          Doanh thu theo danh mục
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <Doughnut data={chartData} options={chartOptions} />
        </div>
      </CardContent>
    </Card>
  );
};

export default BestsellingCategoryChart;
