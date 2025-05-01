"use client";

import { useState, useRef, useEffect } from "react";
import { products, initialCart, categories } from "../../mockData/pos";
import { Menu, X, ShoppingBag } from "lucide-react";

// Import các component đã tạo
import POSHeader from "../../components/POS/POSHeader";
import ProductSearch from "../../components/POS/ProductSearch";
import CategoryFilter from "../../components/POS/CategoryFilter";
import ProductGrid from "../../components/POS/ProductGrid";
import CustomerSelection from "../../components/POS/CustomerSelection";
import CartItems from "../../components/POS/CartItems";
import PaymentMethod from "../../components/POS/PaymentMethod";
import CartSummary from "../../components/POS/CartSummary";

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
  const [showCart, setShowCart] = useState(false);

  const cartRef = useRef<HTMLDivElement>(null);
  const productRefs = useRef<{ [key: number]: HTMLDivElement }>({});

  // Auto-hide cart in mobile view when cart is empty
  useEffect(() => {
    if (cart.length === 0 && window.innerWidth < 768) {
      setShowCart(false);
    }
  }, [cart]);

  // Filter products by category
  const filteredProducts =
    activeCategory === "Tất cả"
      ? products
      : products.filter((product) => product.category === activeCategory);

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

    // Show cart when adding items (helpful on mobile)
    if (window.innerWidth < 768) {
      setShowCart(true);
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

  // Function to toggle cart visibility on mobile
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  // Count total items in cart
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="flex-1 flex flex-col md:flex-row h-full overflow-hidden relative">
      {/* Mobile cart toggle button */}
      <div className="md:hidden fixed bottom-4 right-4 z-10">
        <button
          onClick={toggleCart}
          className="bg-blue-600 text-white rounded-full p-3 shadow-lg flex items-center justify-center"
        >
          {showCart ? (
            <X size={24} />
          ) : (
            <div className="relative">
              <ShoppingBag size={24} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </div>
          )}
        </button>
      </div>

      {/* Products Section */}
      <div
        className={`w-full md:w-2/3 p-4 md:p-6 overflow-y-auto h-full ${
          showCart ? "hidden" : "block"
        } md:block`}
      >
        <POSHeader />

        {/* Search & Filter Row */}
        <div className="bg-white rounded-xl shadow-sm p-3 md:p-4 mb-4 md:mb-6">
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
      <div
        className={`w-full md:w-1/3 bg-white border-l border-gray-300 flex flex-col h-full ${
          showCart ? "block" : "hidden"
        } md:block`}
      >
        <div className="md:hidden flex justify-between items-center p-4 border-b">
          <h2 className="font-bold text-lg">Giỏ hàng</h2>
          <button onClick={toggleCart} className="text-gray-500">
            <X size={24} />
          </button>
        </div>

        <CustomerSelection />

        {/* Cart Items */}
        <CartItems
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          cartRef={cartRef}
        />

        {/* Cart Summary */}
        <div className="border-t border-gray-300 p-4 bg-gray-50">
          {/* Payment Method */}
          <PaymentMethod
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
          <CartSummary calculateTotal={calculateTotal} />
        </div>
      </div>
    </div>
  );
}
