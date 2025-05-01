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
    <div className="flex overflow-x-auto space-x-2 py-1 no-scrollbar">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`px-4 py-2 whitespace-nowrap rounded-full transition-all ${
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
