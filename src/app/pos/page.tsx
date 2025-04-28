"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, ShoppingBag, Barcode, Plus, Minus, X, ChevronDown } from "lucide-react";

export default function POS() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [cart, setCart] = useState<any[]>([
    {
      id: 1,
      name: "Áo thun nam cổ tròn",
      sku: "SP0012",
      price: "90,000đ",
      quantity: 1,
    },
    {
      id: 2,
      name: "Áo khoác bomber",
      sku: "SP0013",
      price: "350,000đ",
      quantity: 1,
    },
    {
      id: 3,
      name: "Quần jean nam",
      sku: "SP0014",
      price: "450,000đ",
      quantity: 1,
    },
  ]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  // Hardcoded products data
  const products = [
    {
      id: 1,
      name: "Áo thun nam cổ tròn",
      sku: "SP0012",
      price: "90,000đ",
      image: "👕",
      category: "Quần áo",
    },
    {
      id: 2,
      name: "Áo khoác bomber",
      sku: "SP0013",
      price: "350,000đ",
      image: "👕",
      category: "Quần áo",
    },
    {
      id: 3,
      name: "Quần jean nam",
      sku: "SP0014",
      price: "450,000đ",
      image: "👖",
      category: "Quần áo",
    },
    {
      id: 4,
      name: "Ốp lưng iPhone 13",
      sku: "SP0045",
      price: "50,000đ",
      image: "📱",
      category: "Điện tử",
    },
    {
      id: 5,
      name: "Tai nghe Bluetooth",
      sku: "SP0078",
      price: "120,000đ",
      image: "🎧",
      category: "Điện tử",
    },
    {
      id: 6,
      name: "Cốc giữ nhiệt",
      sku: "SP0124",
      price: "70,000đ",
      image: "☕",
      category: "Nhà bếp",
    },
    {
      id: 7,
      name: "Sổ tay ghi chép",
      sku: "SP0256",
      price: "50,000đ",
      image: "📓",
      category: "Văn phòng phẩm",
    },
    {
      id: 8,
      name: "Chuột không dây",
      sku: "SP0301",
      price: "180,000đ",
      image: "🖱️",
      category: "Điện tử",
    },
  ];

  // Get unique categories
  const categories = [
    "Tất cả",
    ...Array.from(new Set(products.map((product) => product.category))),
  ];

  // Filter products by category
  const filteredProducts =
    activeCategory === "Tất cả"
      ? products
      : products.filter((product) => product.category === activeCategory);

  // Add product to cart
  const addToCart = (product: any) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Update product quantity in cart
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // Remove product from cart
  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Calculate total
  const calculateTotal = () => {
    return "890,000đ"; // Hardcoded for demo
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar - reusing styles from main page */}
      <aside className="w-60 bg-blue-950 text-white">
        <div className="flex items-center p-4 mb-8">
          <div className="bg-blue-400 text-white w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold mr-2">
            SC
          </div>
          <span className="font-semibold text-lg">SapoClone</span>
        </div>

        <div className="px-4 pb-2 text-xs text-gray-400">TỔNG QUAN</div>
        <Link
          href="/"
          className="flex items-center px-4 py-3 text-white hover:bg-blue-900"
        >
          <div className="mr-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
            </svg>
          </div>
          <span>Dashboard</span>
        </Link>

        <div className="mt-4 px-4 pb-2 text-xs text-gray-400">BÁN HÀNG</div>
        <nav>
          <div className="flex items-center px-4 py-3 text-white bg-blue-900">
            <div className="mr-3">
              <ShoppingBag size={20} />
            </div>
            <span>POS Bán hàng</span>
          </div>
          <Link
            href="/orders"
            className="flex items-center px-4 py-3 text-white hover:bg-blue-900"
          >
            <div className="mr-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                <polyline points="13 2 13 9 20 9" />
              </svg>
            </div>
            <span>Đơn hàng</span>
          </Link>
          <Link
            href="/customers"
            className="flex items-center px-4 py-3 text-white hover:bg-blue-900"
          >
            <div className="mr-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <span>Khách hàng</span>
          </Link>
        </nav>

        <div className="mt-4 px-4 pb-2 text-xs text-gray-400">SẢN PHẨM</div>
        <nav>
          <Link
            href="/products"
            className="flex items-center px-4 py-3 text-white hover:bg-blue-900"
          >
            <div className="mr-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <span>Sản phẩm</span>
          </Link>
          <Link
            href="/categories"
            className="flex items-center px-4 py-3 text-white hover:bg-blue-900"
          >
            <div className="mr-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3" y2="6" />
                <line x1="3" y1="12" x2="3" y2="12" />
                <line x1="3" y1="18" x2="3" y2="18" />
              </svg>
            </div>
            <span>Danh mục</span>
          </Link>
        </nav>

        <div className="mt-4 px-4 pb-2 text-xs text-gray-400">BÁO CÁO</div>
        <nav>
          <Link
            href="/revenue"
            className="flex items-center px-4 py-3 text-white hover:bg-blue-900"
          >
            <div className="mr-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="12" y1="20" x2="12" y2="10" />
                <line x1="18" y1="20" x2="18" y2="4" />
                <line x1="6" y1="20" x2="6" y2="16" />
              </svg>
            </div>
            <span>Doanh thu</span>
          </Link>
          <Link
            href="/bestsellers"
            className="flex items-center px-4 py-3 text-white hover:bg-blue-900"
          >
            <div className="mr-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 20V10" />
                <path d="M18 20V4" />
                <path d="M6 20v-4" />
              </svg>
            </div>
            <span>Sản phẩm bán chạy</span>
          </Link>
        </nav>

        <div className="mt-4 px-4 pb-2 text-xs text-gray-400">HỆ THỐNG</div>
        <nav>
          <Link
            href="/stores"
            className="flex items-center px-4 py-3 text-white hover:bg-blue-900"
          >
            <div className="mr-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <span>Chi nhánh</span>
          </Link>
          <Link
            href="/staff"
            className="flex items-center px-4 py-3 text-white hover:bg-blue-900"
          >
            <div className="mr-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <span>Nhân viên</span>
          </Link>
          <Link
            href="/settings"
            className="flex items-center px-4 py-3 text-white hover:bg-blue-900"
          >
            <div className="mr-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </div>
            <span>Cài đặt</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Products Section */}
        <div className="w-2/3 border-r p-6">
          <h1 className="text-xl font-semibold mb-1">POS Bán hàng</h1>
          <p className="text-gray-500 text-sm mb-4">
            Tạo đơn hàng mới và thanh toán
          </p>

          {/* Search */}
          <div className="flex mb-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full"
                placeholder="Tìm sản phẩm (tên, mã)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="bg-gray-100 border border-gray-300 text-gray-700 px-3 py-2 ml-2 rounded-md flex items-center">
              <Barcode size={18} className="mr-2" />
              <span>Quét mã vạch</span>
            </button>
          </div>

          {/* Categories */}
          <div className="flex overflow-x-auto space-x-2 py-2 mb-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 whitespace-nowrap rounded-md ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-md overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => addToCart(product)}
              >
                <div className="h-32 bg-gray-50 flex items-center justify-center text-4xl">
                  {product.image}
                </div>
                <div className="p-3">
                  <p className="font-medium text-sm truncate">{product.name}</p>
                  <p className="text-xs text-gray-500">SKU: {product.sku}</p>
                  <p className="text-blue-600 font-medium mt-1">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Section */}
        <div className="w-1/3 flex flex-col">
          {/* Customer Selection */}
          <div className="p-4 border-b">
            <button className="w-full flex justify-between items-center py-2 px-3 border border-gray-300 rounded-md">
              <div className="flex items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mr-2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span>Chọn khách hàng</span>
              </div>
              <ChevronDown size={16} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-400">
                <ShoppingBag size={64} strokeWidth={1} className="mb-4" />
                <p className="text-center">Giỏ hàng trống</p>
                <p className="text-center text-sm mt-2">
                  Thêm sản phẩm để bắt đầu đơn hàng
                </p>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center mb-4 pb-4 border-b"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 mr-3 text-lg">
                    {item.image || "👕"}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-medium">{item.name}</p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <p className="text-xs text-gray-500">SKU: {item.sku}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border rounded-md">
                        <button
                          className="px-2 py-1 text-gray-500"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3">{item.quantity}</span>
                        <button
                          className="px-2 py-1 text-gray-500"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="text-blue-600 font-medium">{item.price}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Summary */}
          <div className="border-t p-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-500">Tạm tính</span>
              <span>{calculateTotal()}</span>
            </div>
            <div className="flex justify-between text-sm mb-4">
              <span className="text-gray-500">Giảm giá</span>
              <span>0đ</span>
            </div>
            <div className="flex justify-between font-medium mb-4">
              <span>Tổng cộng</span>
              <span className="text-blue-600">{calculateTotal()}</span>
            </div>
            <div className="flex space-x-2">
              <button className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700">
                Huỷ
              </button>
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md">
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
