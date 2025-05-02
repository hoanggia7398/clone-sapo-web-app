"use client";

import { revenueByPaymentMethod } from "@/mockData/revenue";
import { Pie } from "react-chartjs-2";
import { chartColors } from "@/lib/chartUtils";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { ChartOptions, TooltipItem } from "chart.js";

const RevenueByPaymentMethodChart = () => {
  // Colors for payment methods
  const paymentColors = [
    chartColors.green,
    chartColors.blue,
    chartColors.purple,
  ];

  const chartData = {
    labels: revenueByPaymentMethod.labels,
    datasets: [
      {
        label: "Phương thức thanh toán",
        data: revenueByPaymentMethod.data,
        backgroundColor: paymentColors,
        borderColor: paymentColors.map((color) => color),
        borderWidth: 1,
      },
    ],
  };

  const chartOptions: ChartOptions<"pie"> = {
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
          label: function (context: TooltipItem<"pie">) {
            let label = context.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed !== null) {
              label += context.parsed + "%";
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-medium">
          Doanh thu theo phương thức thanh toán
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[220px]">
          <Pie data={chartData} options={chartOptions} />
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueByPaymentMethodChart;
