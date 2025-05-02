"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { branchOptions, timePeriodOptions } from "@/mockData/revenue";
import {
  ArrowDown,
  BarChart3,
  Calendar,
  Download,
  LineChart,
} from "lucide-react";
import { useState } from "react";

const RevenueHeader = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(timePeriodOptions[0]);
  const [selectedBranch, setSelectedBranch] = useState(branchOptions[0]);
  const [activeChart, setActiveChart] = useState<"bar" | "line">("bar");

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-bold">Báo cáo doanh thu</h1>
        <p className="text-gray-500">
          Thống kê doanh thu theo thời gian và chi nhánh
        </p>
      </div>

      <div className="flex flex-wrap gap-2 items-center">
        {/* Time period selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {selectedPeriod.label}
              <ArrowDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {timePeriodOptions.map((option) => (
              <DropdownMenuItem
                key={option.value}
                onClick={() => setSelectedPeriod(option)}
              >
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Branch selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              {selectedBranch.label}
              <ArrowDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {branchOptions.map((option) => (
              <DropdownMenuItem
                key={option.value}
                onClick={() => setSelectedBranch(option)}
              >
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Chart type toggle */}
        <div className="flex items-center border rounded-md overflow-hidden">
          <Button
            variant={activeChart === "bar" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveChart("bar")}
            className="rounded-none"
          >
            <BarChart3 className="h-4 w-4" />
          </Button>

          <Button
            variant={activeChart === "line" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveChart("line")}
            className="rounded-none"
          >
            <LineChart className="h-4 w-4" />
          </Button>
        </div>

        {/* Export button */}
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Xuất báo cáo
        </Button>
      </div>
    </div>
  );
};

export default RevenueHeader;
