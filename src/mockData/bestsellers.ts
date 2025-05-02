// Mock data for bestselling products

export const timePeriodOptions = [
  { value: "today", label: "Hôm nay" },
  { value: "yesterday", label: "Hôm qua" },
  { value: "thisWeek", label: "Tuần này" },
  { value: "lastWeek", label: "Tuần trước" },
  { value: "thisMonth", label: "Tháng này" },
  { value: "lastMonth", label: "Tháng trước" },
  { value: "custom", label: "Tùy chỉnh" },
];

export const branchOptions = [
  { value: "all", label: "Tất cả chi nhánh" },
  { value: "branch1", label: "Chi nhánh Hà Nội" },
  { value: "branch2", label: "Chi nhánh Hồ Chí Minh" },
  { value: "branch3", label: "Chi nhánh Đà Nẵng" },
];

export const categoryOptions = [
  { value: "all", label: "Tất cả danh mục" },
  { value: "cat1", label: "Điện thoại" },
  { value: "cat2", label: "Máy tính bảng" },
  { value: "cat3", label: "Máy tính xách tay" },
  { value: "cat4", label: "Phụ kiện" },
];

export const bestsellingProducts = [
  {
    id: "P001",
    name: "iPhone 15 Pro Max 256GB",
    category: "Điện thoại",
    sku: "IP15PM256",
    price: 32990000,
    quantitySold: 142,
    revenue: 4684580000,
    image: "https://placehold.co/80",
  },
  {
    id: "P002",
    name: "Samsung Galaxy S23 Ultra",
    category: "Điện thoại",
    sku: "SGS23U",
    price: 25990000,
    quantitySold: 128,
    revenue: 3326720000,
    image: "https://placehold.co/80",
  },
  {
    id: "P003",
    name: "MacBook Pro M3 14-inch",
    category: "Máy tính xách tay",
    sku: "MBM3P14",
    price: 49990000,
    quantitySold: 56,
    revenue: 2799440000,
    image: "https://placehold.co/80",
  },
  {
    id: "P004",
    name: "iPad Pro 12.9 M2 WiFi",
    category: "Máy tính bảng",
    sku: "IPADPRM2",
    price: 29990000,
    quantitySold: 78,
    revenue: 2339220000,
    image: "https://placehold.co/80",
  },
  {
    id: "P005",
    name: "AirPods Pro 2",
    category: "Phụ kiện",
    sku: "APP2",
    price: 6590000,
    quantitySold: 210,
    revenue: 1383900000,
    image: "https://placehold.co/80",
  },
  {
    id: "P006",
    name: "Apple Watch Series 9",
    category: "Phụ kiện",
    sku: "AWS9",
    price: 11990000,
    quantitySold: 95,
    revenue: 1139050000,
    image: "https://placehold.co/80",
  },
  {
    id: "P007",
    name: "Xiaomi Redmi Note 12 Pro",
    category: "Điện thoại",
    sku: "XRN12P",
    price: 7990000,
    quantitySold: 135,
    revenue: 1078650000,
    image: "https://placehold.co/80",
  },
  {
    id: "P008",
    name: "Samsung Galaxy Tab S9",
    category: "Máy tính bảng",
    sku: "SGTS9",
    price: 22990000,
    quantitySold: 45,
    revenue: 1034550000,
    image: "https://placehold.co/80",
  },
  {
    id: "P009",
    name: "Dell XPS 13 Plus",
    category: "Máy tính xách tay",
    sku: "DX13P",
    price: 42990000,
    quantitySold: 22,
    revenue: 945780000,
    image: "https://placehold.co/80",
  },
  {
    id: "P010",
    name: "Sạc nhanh Samsung 25W",
    category: "Phụ kiện",
    sku: "SS25W",
    price: 490000,
    quantitySold: 380,
    revenue: 186200000,
    image: "https://placehold.co/80",
  },
];

// Data for charts
export const productChartData = {
  labels: bestsellingProducts.slice(0, 5).map((p) => p.name),
  data: bestsellingProducts.slice(0, 5).map((p) => p.revenue / 1000000),
};

export const categoryChartData = {
  labels: ["Điện thoại", "Máy tính xách tay", "Máy tính bảng", "Phụ kiện"],
  data: [9089950000, 3745220000, 3373770000, 2709150000].map(
    (val) => val / 1000000
  ),
};
