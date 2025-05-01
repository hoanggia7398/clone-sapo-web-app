"use client";

import { useState, useRef, useEffect } from "react";

// Import các component đã tạo
import POSHeader from "../components/POS/POSHeader";
import ProductSearch from "../components/POS/ProductSearch";
import CategoryFilter from "../components/POS/CategoryFilter";
import ProductGrid from "../components/POS/ProductGrid";
import CustomerSelection from "../components/POS/CustomerSelection";
import CartItems from "../components/POS/CartItems";
import PaymentMethod from "../components/POS/PaymentMethod";
import CartSummary from "../components/POS/CartSummary";
import FlyingProduct from "../components/POS/FlyingProduct";

// Định nghĩa interface
interface Product {
  id: number;
  name: string;
  sku: string;
  price: string;
  image: string;
  category: string;
}

interface CartItem extends Product {
  quantity: number;
}

export default function POS() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 1,
      name: "Áo thun nam cổ tròn",
      sku: "SP0012",
      price: "90,000đ",
      quantity: 1,
      image: "👕",
      category: "Quần áo",
    },
    {
      id: 2,
      name: "Áo khoác bomber",
      sku: "SP0013",
      price: "350,000đ",
      quantity: 1,
      image: "👕",
      category: "Quần áo",
    },
    {
      id: 3,
      name: "Quần jean nam",
      sku: "SP0014",
      price: "450,000đ",
      quantity: 1,
      image: "👖",
      category: "Quần áo",
    },
  ]);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [flyingItem, setFlyingItem] = useState<{
    id: number;
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    image: string;
  } | null>(null);

  const cartRef = useRef<HTMLDivElement>(null);
  const productRefs = useRef<{ [key: number]: HTMLDivElement }>({});

  // Store cart position
  const [cartPosition, setCartPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Calculate cart position when component mounts and on window resize
    const updateCartPosition = () => {
      if (cartRef.current) {
        const rect = cartRef.current.getBoundingClientRect();
        setCartPosition({
          x: rect.left + rect.width / 2,
          y: rect.top + 100, // Target a point inside the cart area
        });
      }
    };

    updateCartPosition();
    window.addEventListener("resize", updateCartPosition);

    return () => {
      window.removeEventListener("resize", updateCartPosition);
    };
  }, []);

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

  // Add product to cart with flying animation
  const addToCart = (product: Product, event: React.MouseEvent) => {
    const targetElement = productRefs.current[product.id];

    if (!targetElement || !cartRef.current) return;

    const rect = targetElement.getBoundingClientRect();
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;

    setFlyingItem({
      id: product.id,
      startX,
      startY,
      endX: cartPosition.x,
      endY: cartPosition.y,
      image: product.image,
    });

    setTimeout(() => {
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

      setFlyingItem(null);
    }, 850); // Slightly longer than animation duration
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
    <div className="flex-1 flex h-full overflow-hidden">
      {/* Products Section */}
      <div className="w-2/3 p-6 overflow-y-auto h-full">
        <POSHeader />

        {/* Search & Filter Row */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <ProductSearch
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>

        {/* Products Grid */}
        <ProductGrid
          products={filteredProducts}
          addToCart={addToCart}
          productRefs={productRefs}
        />
      </div>

      {/* Cart Section */}
      <div className="w-1/3 bg-white border-l flex flex-col h-full">
        <CustomerSelection />

        {/* Cart Items */}
        <CartItems
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          cartRef={cartRef}
        />

        {/* Cart Summary */}
        <div className="border-t p-4 bg-gray-50">
          {/* Payment Method */}
          <PaymentMethod
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
          <CartSummary calculateTotal={calculateTotal} />
        </div>
      </div>

      {/* Flying product animation */}
      <FlyingProduct flyingItem={flyingItem} />
    </div>
  );
}
