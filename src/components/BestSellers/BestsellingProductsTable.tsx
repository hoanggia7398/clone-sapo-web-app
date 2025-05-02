"use client";

import { bestsellingProducts } from "@/mockData/bestsellers";
import { formatCurrency } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { useState } from "react";
import { Button } from "../ui/button";
import { ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_PAGE = 5;

const BestsellingProductsTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<"revenue" | "quantitySold">("revenue");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  // Sort products
  const sortedProducts = [...bestsellingProducts].sort((a, b) => {
    return sortOrder === "desc" ? b[sortBy] - a[sortBy] : a[sortBy] - b[sortBy];
  });

  // Calculate pagination
  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = sortedProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleSort = (column: "revenue" | "quantitySold") => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("desc");
    }
  };

  return (
    <Card className="overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">STT</TableHead>
              <TableHead className="w-48">Sản phẩm</TableHead>
              <TableHead>Danh mục</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead className="text-right">Giá bán</TableHead>
              <TableHead className="text-right">
                <Button
                  variant="ghost"
                  onClick={() => handleSort("quantitySold")}
                  className="px-0 font-medium text-xs flex items-center"
                >
                  Số lượng bán
                  <ArrowUpDown className="ml-1 h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead className="text-right">
                <Button
                  variant="ghost"
                  onClick={() => handleSort("revenue")}
                  className="px-0 font-medium text-xs flex items-center"
                >
                  Doanh thu
                  <ArrowUpDown className="ml-1 h-3 w-3" />
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedProducts.map((product, index) => (
              <TableRow key={product.id}>
                <TableCell>{startIndex + index + 1}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 rounded-md overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="font-medium">{product.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{product.category}</Badge>
                </TableCell>
                <TableCell>{product.sku}</TableCell>
                <TableCell className="text-right">
                  {formatCurrency(product.price)}đ
                </TableCell>
                <TableCell className="text-right font-medium">
                  {product.quantitySold.toLocaleString()}
                </TableCell>
                <TableCell className="text-right font-medium">
                  {formatCurrency(product.revenue)}đ
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between p-4 border-t">
        <div className="text-sm text-gray-500">
          Hiển thị {startIndex + 1}-
          {Math.min(startIndex + ITEMS_PER_PAGE, bestsellingProducts.length)}{" "}
          của {bestsellingProducts.length} sản phẩm
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm">
            {currentPage} / {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default BestsellingProductsTable;
