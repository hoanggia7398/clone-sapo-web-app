"use client";

import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Chart } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function RevenueChart() {
  const [activeTab, setActiveTab] = useState("hour");

  // Sample hourly revenue data (in millions)
  const hourlyData = [
    1.25, 2.34, 3.85, 2.78, 3.12, 2.45, 2.95, 4.98, 3.85, 3.22, 2.78, 1.95,
  ];

  // Sample daily revenue data (in millions)
  const dailyData = [2.5, 1.8, 3.2, 4.1, 3.7, 3.0, 2.8];

  // Labels for x-axis
  const hourLabels = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
  ];
  const dayLabels = [
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
    "CN",
  ];

  // Format value as Vietnamese currency
  const formatCurrency = (value: number) => {
    return value.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
      maximumFractionDigits: 0,
    });
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          callback: function (this: any, tickValue: number | string) {
            return tickValue + "M";
          },
        },
        grid: {
          color: "rgba(241, 245, 249, 1)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          usePointStyle: true,
          boxWidth: 8,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: { parsed: { y: number } }) {
            const value = context.parsed.y;
            return `Doanh thu: ${formatCurrency(value * 1000000)}`;
          },
        },
      },
    },
  };

  // Chart data
  const data = {
    labels: activeTab === "hour" ? hourLabels : dayLabels,
    datasets: [
      {
        type: "bar" as const,
        label: "Doanh thu hôm nay",
        data: activeTab === "hour" ? hourlyData : dailyData,
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 1,
        borderRadius: 4,
        hoverBackgroundColor: "rgba(59, 130, 246, 0.4)",
      },
      {
        type: "line" as const,
        label: "Doanh thu hôm qua",
        data:
          activeTab === "hour"
            ? hourlyData.map((value) => value * 0.85)
            : dailyData.map((value) => value * 0.85),
        backgroundColor: "rgba(255, 255, 255, 0)",
        borderColor: "rgba(59, 130, 246, 0.6)",
        borderWidth: 2,
        borderDash: [5, 5],
        pointBackgroundColor: "rgba(59, 130, 246, 0.8)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-50">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
        <h2 className="text-lg font-medium mb-2 sm:mb-0">
          Doanh thu theo {activeTab === "hour" ? "giờ" : "ngày"}
        </h2>
        <div className="flex items-center bg-gray-100 rounded-md overflow-hidden">
          <button
            className={`px-3 py-1 rounded-l-md ${
              activeTab === "hour"
                ? "bg-blue-100 text-blue-600"
                : "bg-gray-100 text-gray-600"
            } focus:outline-none transition-colors`}
            onClick={() => setActiveTab("hour")}
          >
            Giờ
          </button>
          <button
            className={`px-3 py-1 rounded-r-md ${
              activeTab === "day"
                ? "bg-blue-100 text-blue-600"
                : "bg-gray-100 text-gray-600"
            } focus:outline-none transition-colors`}
            onClick={() => setActiveTab("day")}
          >
            Ngày
          </button>
        </div>
      </div>

      {/* Chart.js chart */}
      <div className="h-64">
        <Chart type="bar" options={options} data={data} />
      </div>
    </div>
  );
}
