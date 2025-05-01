// Stats card data
export const statsCards = [
  {
    title: "Doanh thu",
    value: "123,456,000đ",
    change: { value: "12.5%", isPositive: true },
    previousValue: "11,184,000đ",
    icon: "DollarSign", // Component will render the appropriate icon
    iconBgColor: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    title: "Đơn hàng",
    value: "164",
    change: { value: "8.3%", isPositive: true },
    previousValue: "152",
    icon: "FileText", // Component will render the appropriate icon
    iconBgColor: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    title: "Khách hàng",
    value: "38",
    change: { value: "4.2%", isPositive: false },
    previousValue: "42",
    icon: "Users", // Component will render the appropriate icon
    iconBgColor: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    title: "Giá trị trung bình",
    value: "76,610đ",
    change: { value: "3.8%", isPositive: true },
    previousValue: "73,576đ",
    icon: "BarChart2", // Component will render the appropriate icon
    iconBgColor: "bg-green-50",
    iconColor: "text-green-500",
  },
];

// Date range options
export const dateOptions = [
  { label: "Hôm nay", value: "today" },
  { label: "Hôm qua", value: "yesterday" },
  { label: "7 ngày qua", value: "7days" },
  { label: "Tháng này", value: "thisMonth" },
  { label: "Tháng trước", value: "lastMonth" },
  { label: "Tùy chỉnh", value: "custom" },
];

// Orders data
export const orders = [
  {
    id: "#DH0124",
    customer: "Trần Văn B",
    branch: "Chi nhánh Hà Nội",
    total: "486,000đ",
    status: "Hoàn thành",
    statusColor: "green",
    time: "15:42",
  },
  {
    id: "#DH0123",
    customer: "Nguyễn Thị C",
    branch: "Chi nhánh Hồ Chí Minh",
    total: "750,000đ",
    status: "Hoàn thành",
    statusColor: "green",
    time: "15:36",
  },
  {
    id: "#DH0122",
    customer: "Phạm Văn D",
    branch: "Chi nhánh Hà Nội",
    total: "285,000đ",
    status: "Đang xử lý",
    statusColor: "yellow",
    time: "14:52",
  },
  {
    id: "#DH0121",
    customer: "Lê Thị E",
    branch: "Chi nhánh Hà Nội",
    total: "1,250,000đ",
    status: "Hoàn thành",
    statusColor: "green",
    time: "14:05",
  },
  {
    id: "#DH0120",
    customer: "Hoàng Văn F",
    branch: "Chi nhánh Hồ Chí Minh",
    total: "645,000đ",
    status: "Đã hủy",
    statusColor: "red",
    time: "13:48",
  },
];

// Products data
export const products = [
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

// Best selling products data
export const bestSellingProducts = [
  {
    id: "SP0012",
    name: "Áo phông unisex",
    price: "3,420,000đ",
    quantity: "38 cái",
    image: "/public/shirt.png", // Placeholder, replace with actual image
  },
  {
    id: "SP0045",
    name: "Quần shorts",
    price: "1,450,000đ",
    quantity: "29 cái",
    image: "/public/shorts.png",
  },
  {
    id: "SP0078",
    name: "Áo sơ mi nam",
    price: "2,880,000đ",
    quantity: "24 cái",
    image: "/public/shirt.png",
  },
  {
    id: "SP0124",
    name: "Váy đầm nữ",
    price: "1,260,000đ",
    quantity: "18 cái",
    image: "/public/dress.png",
  },
  {
    id: "SP0256",
    name: "Áo khoác jean",
    price: "750,000đ",
    quantity: "15 cái",
    image: "/public/jacket.png",
  },
];

// Customer data
export const customers = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    phone: "0987654321",
    email: "nguyenvana@example.com",
    address: "123 Đường Lê Lợi, Quận 1, TP.HCM",
    createdAt: "2025-04-15",
  },
  {
    id: 2,
    name: "Trần Thị B",
    phone: "0912345678",
    email: "tranthib@example.com",
    address: "456 Đường Nguyễn Huệ, Quận 1, TP.HCM",
    createdAt: "2025-04-10",
  },
  {
    id: 3,
    name: "Lê Văn C",
    phone: "0909123456",
    email: "levanc@example.com",
    address: "789 Đường Cách Mạng Tháng 8, Quận 3, TP.HCM",
    createdAt: "2025-04-05",
  },
];

// RecentOrders sample data
export const recentOrders = [
  {
    id: "#ĐH123",
    customer: "Trần Văn A",
    branch: "Chi nhánh Hà Nội",
    total: "850,000đ",
    status: "completed",
    time: "15:32",
  },
  {
    id: "#ĐH125",
    customer: "Nguyễn Thị B",
    branch: "Chi nhánh Hồ Chí Minh",
    total: "750,000đ",
    status: "completed",
    time: "15:25",
  },
];

// Payment methods data
export const paymentMethods = [
  {
    method: "Tiền mặt",
    amount: "8,240,000đ",
    percentage: 65,
    color: "bg-blue-500",
  },
  {
    method: "Thẻ",
    amount: "3,146,000đ",
    percentage: 25,
    color: "bg-orange-500",
  },
  {
    method: "QR Code / Chuyển khoản",
    amount: "1,200,000đ",
    percentage: 10,
    color: "bg-purple-500",
  },
];

// Branch performance data
export const branches = [
  {
    name: "Chi nhánh Hà Nội",
    revenue: "5,840,000đ",
    orders: 72,
    percentage: "+15.4%",
  },
  {
    name: "Chi nhánh Hồ Chí Minh",
    revenue: "4,250,000đ",
    orders: 58,
    percentage: "+8.7%",
  },
  {
    name: "Chi nhánh Đà Nẵng",
    revenue: "2,496,000đ",
    orders: 34,
    percentage: "+5.2%",
  },
];

// Revenue chart data
export const revenueData = {
  hourly: [
    1.25, 2.34, 3.85, 2.78, 3.12, 2.45, 2.95, 4.98, 3.85, 3.22, 2.78, 1.95,
  ],
  daily: [2.5, 1.8, 3.2, 4.1, 3.7, 3.0, 2.8],
  hourLabels: [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
  ],
  dayLabels: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"],
};

// Cart data
export const initialCart = [
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
];
