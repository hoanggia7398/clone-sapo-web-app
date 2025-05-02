"use client";

import { useState, useRef, useEffect } from "react";
import { products, initialCart, categories } from "../../mockData/pos";
import { ChevronUp, ChevronDown, GripHorizontal } from "lucide-react"; // Import icons

// Import các component đã tạo
import POSHeader from "../../components/POS/POSHeader";
import ProductSearch from "../../components/POS/ProductSearch";
import CategoryFilter from "../../components/POS/CategoryFilter";
import ProductGrid from "../../components/POS/ProductGrid";
import CustomerSelection from "../../components/POS/CustomerSelection";
import CartItems from "../../components/POS/CartItems";
import PaymentMethod from "../../components/POS/PaymentMethod";
import CartSummary from "../../components/POS/CartSummary";
import { useIsMobile } from "../../hooks/use-mobile";

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
  const [cart, setCart] = useState<CartItem[]>(initialCart);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [showSearchResults, setShowSearchResults] = useState(false);

  // New state for cart height on mobile
  const [cartHeight, setCartHeight] = useState(60); // Default 60vh
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const isMobile = useIsMobile();

  const cartRef = useRef<HTMLDivElement>(null);
  const productRefs = useRef<{ [key: number]: HTMLDivElement }>({});
  const dragHandleRef = useRef<HTMLDivElement>(null);

  // Handle drag start
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isMobile) return;

    setIsDragging(true);
    if ("touches" in e) {
      setStartY(e.touches[0].clientY);
    } else {
      setStartY(e.clientY);
    }
    document.body.style.userSelect = "none";
  };

  // Handle drag move
  const handleDragMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging || !isMobile) return;

    let currentY: number;
    if ("touches" in e) {
      currentY = e.touches[0].clientY;
    } else {
      currentY = e.clientY;
    }

    const deltaY = startY - currentY;
    const windowHeight = window.innerHeight;
    const newHeightPercent = cartHeight + (deltaY / windowHeight) * 100;

    // Limit height between 30vh and 90vh
    if (newHeightPercent >= 30 && newHeightPercent <= 90) {
      setCartHeight(newHeightPercent);
      setStartY(currentY);
    }
  };

  // Handle drag end
  const handleDragEnd = () => {
    if (!isMobile) return;

    setIsDragging(false);
    document.body.style.userSelect = "";
  };

  // Set up event listeners for drag
  useEffect(() => {
    if (isMobile) {
      window.addEventListener("mousemove", handleDragMove);
      window.addEventListener("touchmove", handleDragMove);
      window.addEventListener("mouseup", handleDragEnd);
      window.addEventListener("touchend", handleDragEnd);

      return () => {
        window.removeEventListener("mousemove", handleDragMove);
        window.removeEventListener("touchmove", handleDragMove);
        window.removeEventListener("mouseup", handleDragEnd);
        window.removeEventListener("touchend", handleDragEnd);
      };
    }
  }, [isDragging, startY, cartHeight, isMobile]);

  // Toggle between expanded and collapsed states
  const toggleCartExpand = () => {
    if (isMobile) {
      setCartHeight(cartHeight < 75 ? 85 : 60); // Toggle between default and expanded
    }
  };

  // Filter products by search query and category
  const filteredProducts = products
    .filter(
      (product) =>
        activeCategory === "Tất cả" || product.category === activeCategory
    )
    .filter(
      (product) =>
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // Add product to cart - simplified without flying animation
  const addToCart = (product: Product) => {
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

  // Handle search query changes
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setShowSearchResults(query.length > 0);
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden relative h-[calc(100vh-3.5rem)] md:h-full">
      {/* Products and Cart Layout */}
      <div className="flex flex-col md:flex-row h-full">
        {/* Products Section - Always visible but with dynamic height on mobile */}
        <div className="w-full md:w-2/3 p-4 md:p-6 overflow-y-auto h-[40vh] md:h-full">
          <POSHeader />

          {/* Search & Filter Row */}
          <div className="bg-white rounded-xl shadow-sm p-3 md:p-4 mb-4 md:mb-6">
            <ProductSearch
              searchQuery={searchQuery}
              setSearchQuery={handleSearchChange}
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
            showSearchResults={showSearchResults}
            searchQuery={searchQuery}
          />
        </div>

        {/* Cart Section - Always visible */}
        <div
          className="w-full md:w-1/3 bg-white border-t md:border-t-0 md:border-l border-gray-300 flex flex-col"
          style={{ height: isMobile ? `${cartHeight}vh` : "100%" }}
        >
          {/* Drag Handle - Only visible on mobile */}
          {isMobile && (
            <div
              ref={dragHandleRef}
              className="cursor-grab active:cursor-grabbing bg-gray-100 flex items-center justify-center py-1 border-b border-gray-200"
              onMouseDown={handleDragStart}
              onTouchStart={handleDragStart}
            >
              <div className="flex flex-col items-center">
                <GripHorizontal size={20} className="text-gray-400" />
              </div>
              <button
                onClick={toggleCartExpand}
                className="absolute right-3 p-1"
              >
                {cartHeight < 75 ? (
                  <ChevronUp size={18} className="text-gray-500" />
                ) : (
                  <ChevronDown size={18} className="text-gray-500" />
                )}
              </button>
            </div>
          )}

          <CustomerSelection />

          {/* Cart Items */}
          <CartItems
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            cartRef={cartRef}
          />

          {/* Cart Summary - Reduced padding on mobile */}
          <div
            className={`border-t border-gray-300 ${
              isMobile ? "p-2" : "p-4"
            } bg-gray-50`}
          >
            {/* Payment Method */}
            <PaymentMethod
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />
            <CartSummary calculateTotal={calculateTotal} />
          </div>
        </div>
      </div>
    </div>
  );
}
