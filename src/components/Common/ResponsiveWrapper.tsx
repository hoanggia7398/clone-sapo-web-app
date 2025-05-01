"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import MobileMenu from "./MobileMenu";

export default function ResponsiveWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Desktop Sidebar - hidden on mobile */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile Menu */}
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Main Content */}
      <main className="flex-1 overflow-auto flex flex-col pt-10 md:pt-0">
        {/* Add a header spacing for mobile view */}
        <div className="h-14 md:h-0 relative"></div>
        <div className="flex-1">{children}</div>
      </main>
    </div>
  );
}
