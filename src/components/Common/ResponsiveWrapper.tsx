"use client";

import { useState } from "react";
import AppSidebar from "./AppSidebar";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle } from "../ui/sheet";

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
        <AppSidebar />
      </div>

      {/* Mobile Sidebar using Sheet component */}
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent side="left" className="p-0 w-[280px] max-w-[80vw]">
          <div className="h-full overflow-auto">
            <SheetTitle className="sr-only">Menu điều hướng</SheetTitle>
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                <div className="bg-blue-400 text-white w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold">
                  SC
                </div>
                <span className="font-semibold text-lg">SapoClone</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMenuOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="overflow-y-auto h-[calc(100%-60px)]">
              <AppSidebar
                onItemClick={() => setMenuOpen(false)}
                hideHeader={true}
              />
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <main className="flex-1 overflow-auto flex flex-col pt-10 md:pt-0">
        {/* Mobile header with menu button */}
        <div className="h-14 md:h-0 fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 z-10 border-b md:border-b-0 flex items-center px-4">
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="ml-2 font-semibold block md:hidden">SapoClone</div>
        </div>

        {/* Add a header spacing for mobile view */}
        <div className="h-14 md:h-0 relative"></div>
        <div className="p-3 flex-1 bg-slate-50">{children}</div>
      </main>
    </div>
  );
}
