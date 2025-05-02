"use client";

import { productChartData } from "@/mockData/bestsellers";
import { chartColors, formatLargeNumber, withOpacity } from "@/lib/chartUtils";
import { Bar } from "react-chartjs-2";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { ChartOptions, TooltipItem, ScriptableScaleContext } from "chart.js";

const BestsellingProductsChart = () => {
  // Bar chart configuration
  const barChartData = {
    labels: productChartData.labels,
    datasets: [
      {
        label: "Doanh thu (triệu đồng)",
        data: productChartData.data,
        backgroundColor: productChartData.labels.map((_, i) =>
          withOpacity(
            Object.values(chartColors)[i % Object.values(chartColors).length],
            0.8
          )
        ),
        borderColor: productChartData.labels.map(
          (_, i) =>
            Object.values(chartColors)[i % Object.values(chartColors).length]
        ),
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  const chartOptions: ChartOptions<"bar"> = {
    indexAxis: "y", // Horizontal bar
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<"bar">) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.x !== null) {
              label += new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
                maximumFractionDigits: 0,
              }).format(context.parsed.x * 1000000);
            }
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          callback: function (tickValue: string | number) {
            // Ensure tickValue is treated as a number for formatting
            const numericValue = typeof tickValue === 'string' ? parseFloat(tickValue) : tickValue;
            if (isNaN(numericValue)) {
              return ''; // Handle cases where conversion might fail
            }
            return formatLargeNumber(numericValue) + " tr";
          },
        },
        grid: {
          display: true,
          color: function (context: ScriptableScaleContext) {
            return context.tick && context.tick.major
              ? "rgba(0, 0, 0, 0.1)"
              : "rgba(0, 0, 0, 0.05)";
          },
          lineWidth: 1,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-medium">
          Top 5 sản phẩm bán chạy
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <Bar data={barChartData} options={chartOptions} />
        </div>
      </CardContent>
    </Card>
  );
};

export default BestsellingProductsChart;
