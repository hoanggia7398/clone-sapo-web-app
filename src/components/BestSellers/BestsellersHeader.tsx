"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  branchOptions,
  categoryOptions,
  timePeriodOptions,
} from "@/mockData/bestsellers";
import { ArrowDown, Calendar, Download, FolderTree, Store } from "lucide-react";
import { useState } from "react";

const BestsellersHeader = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(timePeriodOptions[4]); // Default to "Tháng này"
  const [selectedBranch, setSelectedBranch] = useState(branchOptions[0]);
  const [selectedCategory, setSelectedCategory] = useState(categoryOptions[0]);

  return (
    <div className="bg-white rounded-lg shadow-sm border p-5 mb-5">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        {/* Title and description */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Sản phẩm bán chạy
          </h1>
          <p className="text-gray-500 mt-1">
            Thống kê sản phẩm bán chạy nhất theo thời gian, danh mục, và chi
            nhánh
          </p>
        </div>

        {/* Filters - updated to display in a wrapped row on mobile */}
        <div className="flex flex-wrap gap-2">
          {/* Time period selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-9 px-3 flex items-center gap-1.5 bg-white border-gray-200"
              >
                <Calendar className="h-4 w-4 text-gray-500" />
                <span>{selectedPeriod.label}</span>
                <ArrowDown className="h-3.5 w-3.5 ml-1 text-gray-400" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              {timePeriodOptions.map((option) => (
                <DropdownMenuItem
                  key={option.value}
                  onClick={() => setSelectedPeriod(option)}
                  className="cursor-pointer"
                >
                  {option.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Branch selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-9 px-3 flex items-center gap-1.5 bg-white border-gray-200"
              >
                <Store className="h-4 w-4 text-gray-500" />
                <span>{selectedBranch.label}</span>
                <ArrowDown className="h-3.5 w-3.5 ml-1 text-gray-400" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {branchOptions.map((option) => (
                <DropdownMenuItem
                  key={option.value}
                  onClick={() => setSelectedBranch(option)}
                  className="cursor-pointer"
                >
                  {option.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Category selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-9 px-3 flex items-center gap-1.5 bg-white border-gray-200"
              >
                <FolderTree className="h-4 w-4 text-gray-500" />
                <span>{selectedCategory.label}</span>
                <ArrowDown className="h-3.5 w-3.5 ml-1 text-gray-400" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              {categoryOptions.map((option) => (
                <DropdownMenuItem
                  key={option.value}
                  onClick={() => setSelectedCategory(option)}
                  className="cursor-pointer"
                >
                  {option.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Export button */}
          <Button
            variant="outline"
            size="sm"
            className="h-9 px-3 flex items-center gap-1.5 bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
          >
            <Download className="h-4 w-4" />
            <span>Xuất báo cáo</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BestsellersHeader;
