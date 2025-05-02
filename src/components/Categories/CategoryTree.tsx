"use client";

import { Button } from "@/components/ui/button";
import { Category, getCategoryById } from "@/mockData/categories";
import {
  ChevronDown,
  ChevronRight,
  Edit,
  FolderClosed,
  FolderOpen,
  MoreHorizontal,
  Plus,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface CategoryTreeProps {
  categories: Category[];
  level?: number;
  onEdit: (category: Category) => void;
  onDelete: (category: Category) => void;
  onAdd: (parentId: string | null) => void;
}

export const CategoryTree = ({
  categories,
  level = 0,
  onEdit,
  onDelete,
  onAdd,
}: CategoryTreeProps) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpanded = (categoryId: string) => {
    setExpanded((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  return (
    <div className="space-y-1">
      {categories.map((category) => {
        // Get child categories
        const childCategories = categories.filter(
          (cat) => cat.parentId === category.id
        );
        const hasChildren = childCategories.length > 0;
        const isExpanded = expanded[category.id] || false;

        return (
          <div key={category.id} className="w-full">
            <div
              className={cn(
                "flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-100 transition-all",
                level > 0 && "ml-6"
              )}
            >
              <div className="flex items-center flex-1 min-w-0">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 p-0"
                  onClick={() => toggleExpanded(category.id)}
                  disabled={!hasChildren}
                >
                  {hasChildren ? (
                    isExpanded ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )
                  ) : (
                    <span className="w-4" />
                  )}
                </Button>

                {isExpanded ? (
                  <FolderOpen className="h-4 w-4 mr-2 text-amber-500" />
                ) : (
                  <FolderClosed className="h-4 w-4 mr-2 text-amber-500" />
                )}

                <span className="truncate font-medium">{category.name}</span>

                <Badge variant="outline" className="ml-2">
                  {category.productCount}
                </Badge>
              </div>

              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 p-0"
                  onClick={() => onAdd(category.id)}
                >
                  <Plus className="h-4 w-4" />
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-7 w-7 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-36">
                    <DropdownMenuItem onClick={() => onEdit(category)}>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onDelete(category)}>
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {hasChildren && isExpanded && (
              <CategoryTree
                categories={categories}
                level={level + 1}
                onEdit={onEdit}
                onDelete={onDelete}
                onAdd={onAdd}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
