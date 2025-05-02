"use client";

import { revenueByTime } from "@/mockData/revenue";
import {
  chartColors,
  formatLargeNumber,
  getGradient,
  withOpacity,
} from "@/lib/chartUtils";
import { Bar, Line } from "react-chartjs-2";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { ChartOptions } from "chart.js";

const RevenueTrendChart = () => {
  const [chartType, setChartType] = useState<"bar" | "line">("bar");

  // Bar chart configuration
  const barChartData = {
    labels: revenueByTime.labels,
    datasets: [
      {
        label: "Doanh thu",
        data: revenueByTime.data,
        backgroundColor: withOpacity(chartColors.blue, 0.8),
        borderColor: chartColors.blue,
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  // Line chart configuration
  const lineChartData = {
    labels: revenueByTime.labels,
    datasets: [
      {
        label: "Doanh thu",
        data: revenueByTime.data,
        borderColor: chartColors.primary,
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return;
          }
          return getGradient(ctx, chartArea, chartColors.primary);
        },
        pointBackgroundColor: chartColors.primary,
        borderWidth: 2,
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const chartOptions: ChartOptions<"bar" | "line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
                maximumFractionDigits: 0,
              }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value: any) {
            return formatLargeNumber(value);
          },
        },
        grid: {
          // Fix: replace drawBorder with display and color options that are properly typed
          display: true,
          color: function (context) {
            return context.tick && context.tick.major
              ? "rgba(0, 0, 0, 0.1)"
              : "rgba(0, 0, 0, 0.05)";
          },
          lineWidth: 1,
        },
      },
    },
  };

  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">
          Doanh thu theo thời gian
        </CardTitle>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setChartType("bar")}
            className={`px-3 py-1 rounded-md ${
              chartType === "bar"
                ? "bg-blue-100 text-blue-700"
                : "text-gray-500"
            }`}
          >
            Bar
          </button>
          <button
            onClick={() => setChartType("line")}
            className={`px-3 py-1 rounded-md ${
              chartType === "line"
                ? "bg-blue-100 text-blue-700"
                : "text-gray-500"
            }`}
          >
            Line
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          {chartType === "bar" ? (
            <Bar data={barChartData} options={chartOptions} />
          ) : (
            <Line data={lineChartData} options={chartOptions} />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueTrendChart;
