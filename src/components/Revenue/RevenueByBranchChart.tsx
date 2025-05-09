"use client";

import { revenueByBranch } from "@/mockData/revenue";
import { Bar } from "react-chartjs-2";
import { chartColors, formatLargeNumber } from "@/lib/chartUtils";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ChartOptions, TooltipItem, ScriptableScaleContext } from "chart.js";

const RevenueByBranchChart = () => {
  // Generate colors for each branch
  const branchColors = [
    chartColors.primary,
    chartColors.teal,
    chartColors.orange,
  ];

  const chartData = {
    labels: revenueByBranch.labels,
    datasets: [
      {
        label: "Doanh thu",
        data: revenueByBranch.data,
        backgroundColor: branchColors,
        borderColor: branchColors,
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  const chartOptions: ChartOptions<"bar"> = {
    indexAxis: "y",
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
              }).format(context.parsed.x);
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
            // Ensure value is treated as a number before formatting
            const numericValue = typeof tickValue === 'string' ? parseFloat(tickValue) : tickValue;
            return formatLargeNumber(numericValue);
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
          Doanh thu theo chi nhánh
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[220px]">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueByBranchChart;
