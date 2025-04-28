import { Search, TrendingUp } from "lucide-react";

// Sample product data
const products = [
  {
    id: "SP0012",
    name: "Áo phông unisex",
    price: "3,420,000đ",
    quantity: "38 cái",
    image: "/public/shirt.png", // Placeholder, replace with actual image
  },
  {
    id: "SP0045",
    name: "Quần shorts",
    price: "1,450,000đ",
    quantity: "29 cái",
    image: "/public/shorts.png",
  },
  {
    id: "SP0078",
    name: "Áo sơ mi nam",
    price: "2,880,000đ",
    quantity: "24 cái",
    image: "/public/shirt.png",
  },
  {
    id: "SP0124",
    name: "Váy đầm nữ",
    price: "1,260,000đ",
    quantity: "18 cái",
    image: "/public/dress.png",
  },
  {
    id: "SP0256",
    name: "Áo khoác jean",
    price: "750,000đ",
    quantity: "15 cái",
    image: "/public/jacket.png",
  },
];

export default function BestSellingProducts() {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-50 h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <TrendingUp size={18} className="text-blue-500 mr-2" />
          <h2 className="text-lg font-medium">Sản phẩm bán chạy</h2>
        </div>
        <button className="text-blue-500 text-sm hover:underline focus:outline-none flex items-center">
          <Search size={14} className="mr-1" />
          <span>Xem tất cả</span>
        </button>
      </div>

      {/* Product List */}
      <div>
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`flex items-center py-3 ${
              index < products.length - 1 ? "border-b border-gray-100" : ""
            } hover:bg-gray-50 transition-colors px-2 rounded-md`}
          >
            <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-md mr-3">
              <span className="text-xs font-medium text-gray-500">
                {index + 1}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col">
                <p className="text-sm font-medium text-gray-800 truncate">
                  {product.name}
                </p>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <span className="bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded text-xs font-medium mr-2">
                    SKU: {product.id}
                  </span>
                  <span>{product.quantity}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-800">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View more button */}
      <div className="mt-4 text-center">
        <button className="text-sm text-gray-500 hover:text-blue-500 transition-colors focus:outline-none">
          Hiển thị thêm sản phẩm
        </button>
      </div>
    </div>
  );
}
