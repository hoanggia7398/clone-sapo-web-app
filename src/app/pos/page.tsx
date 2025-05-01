"use client";

import { useState, useRef } from "react";
import { products, initialCart, categories } from "../../mockData/pos";

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

  const cartRef = useRef<HTMLDivElement>(null);
  const productRefs = useRef<{ [key: number]: HTMLDivElement }>({});

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
    </div>
  );
}
