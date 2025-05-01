"use client";

import { Clock, User } from "lucide-react";

export default function POSHeader() {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-semibold mb-1 text-gray-800">
          POS Bán hàng
        </h1>
        <div className="flex items-center text-gray-500 text-sm">
          <Clock size={14} className="mr-1" />
          <span>
            {new Date().toLocaleDateString("vi-VN", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
          <span className="text-blue-600">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </span>
        </div>
        <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
          <span className="text-blue-600">
            <User size={16} />
          </span>
        </div>
      </div>
    </div>
  );
}
