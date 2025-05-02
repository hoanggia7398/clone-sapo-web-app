// Revenue overview statistics
export const revenueStats = {
  totalRevenue: {
    value: 49760000,
    change: 12.4,
  },
  orderCount: {
    value: 624,
    change: 8.7,
  },
  averageValue: {
    value: 79744,
    change: 3.2,
  },
};

// Revenue data by time period (last 7 days)
export const revenueByTime = {
  labels: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
  data: [5100000, 4800000, 6400000, 6900000, 8000000, 9200000, 7800000],
};

// Revenue data by branch
export const revenueByBranch = {
  labels: ["Chi nhánh Hà Nội", "Chi nhánh Hồ Chí Minh", "Chi nhánh Đà Nẵng"],
  data: [6500000, 4200000, 3100000],
};

// Revenue data by payment method
export const revenueByPaymentMethod = {
  labels: ["Tiền mặt", "Thẻ", "QR Code / Chuyển khoản"],
  data: [65, 10, 25],
};

// Time period options for filtering
export const timePeriodOptions = [
  { label: "7 ngày qua", value: "7d" },
  { label: "30 ngày qua", value: "30d" },
  { label: "Tháng này", value: "thisMonth" },
  { label: "Tháng trước", value: "lastMonth" },
  { label: "Năm nay", value: "thisYear" },
];

// Branch options for filtering
export const branchOptions = [
  { label: "Tất cả chi nhánh", value: "all" },
  { label: "Chi nhánh Hà Nội", value: "hanoi" },
  { label: "Chi nhánh Hồ Chí Minh", value: "hcm" },
  { label: "Chi nhánh Đà Nẵng", value: "danang" },
];
