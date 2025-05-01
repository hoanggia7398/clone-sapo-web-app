"use client";

import { useState } from "react";
import { Search, Plus, MoreHorizontal, Edit, Trash2 } from "lucide-react";
import { customers as initialCustomers } from "../../mockData/customers";

export default function Customers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState<number | null>(null);
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  // Use customers data from mockData folder
  const [customers, setCustomers] = useState(initialCustomers);

  // Filter customers based on search query
  const filteredCustomers = customers.filter((customer) => {
    const query = searchQuery.toLowerCase();
    return (
      customer.name.toLowerCase().includes(query) ||
      customer.phone.includes(query) ||
      customer.email.toLowerCase().includes(query) ||
      customer.address.toLowerCase().includes(query)
    );
  });

  // Add new customer
  const handleAddCustomer = () => {
    // Simple validation
    if (!newCustomer.name || !newCustomer.phone) {
      alert("Vui lòng nhập tên và số điện thoại của khách hàng!");
      return;
    }

    const newId =
      customers.length > 0 ? Math.max(...customers.map((c) => c.id)) + 1 : 1;
    const today = new Date().toISOString().split("T")[0];

    setCustomers([
      ...customers,
      {
        id: newId,
        ...newCustomer,
        createdAt: today,
      },
    ]);

    // Reset form
    setNewCustomer({
      name: "",
      phone: "",
      email: "",
      address: "",
    });
    setShowAddModal(false);
  };

  // Delete customer
  const handleDeleteCustomer = (id: number) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa khách hàng này?")) {
      setCustomers(customers.filter((customer) => customer.id !== id));
    }
    setShowDropdown(null);
  };

  return (
    <div className="min-h-screen flex">
      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
        <div className="pb-6 border-b">
          <h1 className="text-xl font-semibold mb-1">Khách hàng</h1>
          <p className="text-gray-500 text-sm">Quản lý thông tin khách hàng</p>
        </div>

        {/* Search and Add Customer */}
        <div className="pt-6 pb-4">
          <div className="flex flex-wrap gap-4">
            <div className="relative flex-1 min-w-[300px]">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tìm kiếm theo tên, SĐT, email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center transition-colors"
            >
              <Plus size={18} className="mr-2" />
              <span>Thêm khách hàng</span>
            </button>
          </div>
        </div>

        {/* Customers Table */}
        <div className="bg-white rounded-md shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-500">
                    Tên khách hàng
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-500">
                    Số điện thoại
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-500">
                    Email
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-500">
                    Địa chỉ
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-500">
                    Ngày tạo
                  </th>
                  <th className="text-center py-3 px-4 font-medium text-sm text-gray-500 w-20">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-10">
                      <div className="flex flex-col items-center text-gray-500">
                        <svg
                          width="64"
                          height="64"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <circle cx="12" cy="7" r="4" />
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        </svg>
                        <p className="mt-4">
                          {searchQuery
                            ? "Không tìm thấy khách hàng phù hợp"
                            : "Không có khách hàng nào"}
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredCustomers.map((customer) => (
                    <tr key={customer.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">{customer.name}</td>
                      <td className="py-3 px-4">{customer.phone}</td>
                      <td className="py-3 px-4">{customer.email}</td>
                      <td className="py-3 px-4">{customer.address}</td>
                      <td className="py-3 px-4">{customer.createdAt}</td>
                      <td className="py-3 px-4 text-center relative">
                        <button
                          className="text-gray-500 hover:bg-gray-100 p-2 rounded-full"
                          onClick={() =>
                            setShowDropdown(
                              showDropdown === customer.id ? null : customer.id
                            )
                          }
                        >
                          <MoreHorizontal size={18} />
                        </button>

                        {/* Dropdown menu */}
                        {showDropdown === customer.id && (
                          <div className="absolute right-4 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border">
                            <div className="py-1">
                              <button className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex w-full items-center">
                                <Edit size={16} className="mr-2" />
                                Chỉnh sửa
                              </button>
                              <button
                                className="px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex w-full items-center"
                                onClick={() =>
                                  handleDeleteCustomer(customer.id)
                                }
                              >
                                <Trash2 size={16} className="mr-2" />
                                Xóa
                              </button>
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        {filteredCustomers.length > 0 && (
          <div className="flex justify-between items-center mt-6">
            <div className="text-sm text-gray-500">
              Hiển thị {filteredCustomers.length} trên tổng số{" "}
              {customers.length} khách hàng
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 bg-white border rounded-md text-gray-500 hover:bg-gray-50">
                Trước
              </button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded-md">
                1
              </button>
              <button className="px-3 py-1 bg-white border rounded-md text-gray-500 hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-1 bg-white border rounded-md text-gray-500 hover:bg-gray-50">
                Sau
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Add Customer Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Thêm khách hàng mới</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tên khách hàng <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập tên khách hàng"
                  value={newCustomer.name}
                  onChange={(e) =>
                    setNewCustomer({ ...newCustomer, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập số điện thoại"
                  value={newCustomer.phone}
                  onChange={(e) =>
                    setNewCustomer({ ...newCustomer, phone: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập email"
                  value={newCustomer.email}
                  onChange={(e) =>
                    setNewCustomer({ ...newCustomer, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Địa chỉ
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập địa chỉ"
                  rows={3}
                  value={newCustomer.address}
                  onChange={(e) =>
                    setNewCustomer({ ...newCustomer, address: e.target.value })
                  }
                ></textarea>
              </div>

              <div className="pt-4 flex justify-end space-x-3">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                >
                  Hủy
                </button>
                <button
                  onClick={handleAddCustomer}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Lưu
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
