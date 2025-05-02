export type StaffRole = "admin" | "manager" | "cashier" | "inventory";

export interface Staff {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: StaffRole;
  storeId: string;
  storeName: string;
  avatar?: string;
  status: "active" | "inactive";
  joinDate: string;
  lastActive: string;
  permissions: {
    products: boolean;
    orders: boolean;
    customers: boolean;
    reports: boolean;
    settings: boolean;
  };
  salesPerformance?: {
    totalOrders: number;
    totalSales: number;
    averageOrderValue: number;
  };
}

export const staffData: Staff[] = [
  {
    id: "staff-001",
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "(123) 456-7890",
    role: "admin",
    storeId: "store-001",
    storeName: "Main Store",
    avatar: "https://i.pravatar.cc/150?img=1",
    status: "active",
    joinDate: "2022-01-15",
    lastActive: "2023-05-01",
    permissions: {
      products: true,
      orders: true,
      customers: true,
      reports: true,
      settings: true,
    },
    salesPerformance: {
      totalOrders: 120,
      totalSales: 9800,
      averageOrderValue: 81.67,
    },
  },
  {
    id: "staff-002",
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    phone: "(234) 567-8901",
    role: "manager",
    storeId: "store-001",
    storeName: "Main Store",
    avatar: "https://i.pravatar.cc/150?img=5",
    status: "active",
    joinDate: "2022-03-22",
    lastActive: "2023-05-01",
    permissions: {
      products: true,
      orders: true,
      customers: true,
      reports: true,
      settings: false,
    },
    salesPerformance: {
      totalOrders: 95,
      totalSales: 7600,
      averageOrderValue: 80,
    },
  },
  {
    id: "staff-003",
    name: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "(345) 678-9012",
    role: "cashier",
    storeId: "store-002",
    storeName: "Downtown Branch",
    avatar: "https://i.pravatar.cc/150?img=3",
    status: "active",
    joinDate: "2022-06-10",
    lastActive: "2023-05-01",
    permissions: {
      products: false,
      orders: true,
      customers: true,
      reports: false,
      settings: false,
    },
    salesPerformance: {
      totalOrders: 78,
      totalSales: 5200,
      averageOrderValue: 66.67,
    },
  },
  {
    id: "staff-004",
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    phone: "(456) 789-0123",
    role: "inventory",
    storeId: "store-001",
    storeName: "Main Store",
    avatar: "https://i.pravatar.cc/150?img=8",
    status: "inactive",
    joinDate: "2022-09-05",
    lastActive: "2023-04-15",
    permissions: {
      products: true,
      orders: false,
      customers: false,
      reports: true,
      settings: false,
    },
  },
  {
    id: "staff-005",
    name: "David Lee",
    email: "david.lee@example.com",
    phone: "(567) 890-1234",
    role: "manager",
    storeId: "store-002",
    storeName: "Downtown Branch",
    avatar: "https://i.pravatar.cc/150?img=4",
    status: "active",
    joinDate: "2022-04-18",
    lastActive: "2023-05-01",
    permissions: {
      products: true,
      orders: true,
      customers: true,
      reports: true,
      settings: false,
    },
    salesPerformance: {
      totalOrders: 110,
      totalSales: 8900,
      averageOrderValue: 80.91,
    },
  },
  {
    id: "staff-006",
    name: "Jessica Martinez",
    email: "jessica.martinez@example.com",
    phone: "(678) 901-2345",
    role: "cashier",
    storeId: "store-003",
    storeName: "Mall Kiosk",
    avatar: "https://i.pravatar.cc/150?img=6",
    status: "active",
    joinDate: "2022-11-20",
    lastActive: "2023-05-01",
    permissions: {
      products: false,
      orders: true,
      customers: true,
      reports: false,
      settings: false,
    },
    salesPerformance: {
      totalOrders: 45,
      totalSales: 3200,
      averageOrderValue: 71.11,
    },
  },
];
