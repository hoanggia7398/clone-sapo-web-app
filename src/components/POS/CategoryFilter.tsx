"use client";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  setActiveCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex overflow-x-auto space-x-2 py-1 mt-3 pb-1 scrollbar-hide -mx-1 px-1">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm whitespace-nowrap rounded-full transition-all ${
            activeCategory === category
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
