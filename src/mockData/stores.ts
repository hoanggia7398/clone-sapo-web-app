export interface Store {
  id: string;
  name: string;
  code: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  manager: string;
  status: "active" | "inactive";
  openingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  createdAt: string;
  isHeadquarters: boolean;
}

export const stores: Store[] = [
  {
    id: "st-001",
    name: "Sapo Headquarters",
    code: "HQ-001",
    address: "123 Main Street",
    city: "Hanoi",
    phone: "024-1234-5678",
    email: "hq@sapoclone.com",
    manager: "Nguyen Van A",
    status: "active",
    openingHours: {
      weekdays: "08:00 - 20:00",
      saturday: "08:00 - 18:00",
      sunday: "10:00 - 16:00",
    },
    createdAt: "2023-01-01T00:00:00.000Z",
    isHeadquarters: true,
  },
  {
    id: "st-002",
    name: "Sapo Downtown Branch",
    code: "DTB-002",
    address: "456 Downtown Avenue",
    city: "Hanoi",
    phone: "024-8765-4321",
    email: "downtown@sapoclone.com",
    manager: "Le Thi B",
    status: "active",
    openingHours: {
      weekdays: "09:00 - 21:00",
      saturday: "09:00 - 20:00",
      sunday: "10:00 - 18:00",
    },
    createdAt: "2023-02-15T00:00:00.000Z",
    isHeadquarters: false,
  },
  {
    id: "st-003",
    name: "Sapo Mall Branch",
    code: "MLB-003",
    address: "789 Shopping Mall, Floor 3",
    city: "Ho Chi Minh City",
    phone: "028-2468-1357",
    email: "mall@sapoclone.com",
    manager: "Tran Van C",
    status: "active",
    openingHours: {
      weekdays: "10:00 - 22:00",
      saturday: "10:00 - 22:00",
      sunday: "10:00 - 22:00",
    },
    createdAt: "2023-03-20T00:00:00.000Z",
    isHeadquarters: false,
  },
  {
    id: "st-004",
    name: "Sapo Express Branch",
    code: "EXP-004",
    address: "101 Express Road",
    city: "Da Nang",
    phone: "0236-9753-1246",
    email: "express@sapoclone.com",
    manager: "Pham Thi D",
    status: "active",
    openingHours: {
      weekdays: "07:30 - 19:30",
      saturday: "08:00 - 18:00",
      sunday: "09:00 - 17:00",
    },
    createdAt: "2023-04-10T00:00:00.000Z",
    isHeadquarters: false,
  },
  {
    id: "st-005",
    name: "Sapo North Branch",
    code: "NTH-005",
    address: "202 North Street",
    city: "Hai Phong",
    phone: "0225-8642-9753",
    email: "north@sapoclone.com",
    manager: "Hoang Van E",
    status: "inactive",
    openingHours: {
      weekdays: "08:30 - 20:30",
      saturday: "09:00 - 19:00",
      sunday: "10:00 - 17:00",
    },
    createdAt: "2023-05-05T00:00:00.000Z",
    isHeadquarters: false,
  },
];
