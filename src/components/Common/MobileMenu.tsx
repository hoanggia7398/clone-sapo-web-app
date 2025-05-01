import { Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";

interface MobileMenuProps {
  menuOpen: boolean;
  setMenuOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({ menuOpen, setMenuOpen }: MobileMenuProps) {
  // Close menu when a menu item is clicked
  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 bg-blue-600 text-white rounded-md flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40 transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)} // Close menu when clicking on overlay
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
        <div
          className={`w-64 bg-blue-950 h-full overflow-y-auto transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent click from propagating to overlay
        >
          <Sidebar onItemClick={handleMenuItemClick} />
        </div>
      </div>
    </>
  );
}
