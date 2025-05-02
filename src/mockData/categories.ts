export interface Category {
  id: string;
  name: string;
  description?: string;
  parentId: string | null;
  slug: string;
  productCount: number;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
}

export interface CategoryTree extends Category {
  children: CategoryTree[];
}

export const categories: Category[] = [
  {
    id: "cat-001",
    name: "Electronics",
    description: "Electronic devices and gadgets",
    parentId: null,
    slug: "electronics",
    productCount: 145,
    createdAt: "2023-01-15T08:00:00Z",
    updatedAt: "2023-04-18T14:30:00Z",
    isActive: true,
  },
  {
    id: "cat-002",
    name: "Smartphones",
    description: "Mobile phones and smartphones",
    parentId: "cat-001",
    slug: "smartphones",
    productCount: 48,
    createdAt: "2023-01-15T08:30:00Z",
    updatedAt: "2023-05-22T09:15:00Z",
    isActive: true,
  },
  {
    id: "cat-003",
    name: "Laptops",
    description: "Notebook computers and accessories",
    parentId: "cat-001",
    slug: "laptops",
    productCount: 36,
    createdAt: "2023-01-15T09:15:00Z",
    updatedAt: "2023-06-10T11:45:00Z",
    isActive: true,
  },
  {
    id: "cat-004",
    name: "Tablets",
    description: "Tablet devices",
    parentId: "cat-001",
    slug: "tablets",
    productCount: 22,
    createdAt: "2023-01-16T10:00:00Z",
    updatedAt: "2023-03-05T16:20:00Z",
    isActive: true,
  },
  {
    id: "cat-005",
    name: "Gaming Laptops",
    description: "High-performance laptops for gaming",
    parentId: "cat-003",
    slug: "gaming-laptops",
    productCount: 18,
    createdAt: "2023-02-01T11:30:00Z",
    updatedAt: "2023-04-12T13:40:00Z",
    isActive: true,
  },
  {
    id: "cat-006",
    name: "Business Laptops",
    description: "Laptops designed for business use",
    parentId: "cat-003",
    slug: "business-laptops",
    productCount: 14,
    createdAt: "2023-02-01T12:00:00Z",
    updatedAt: "2023-05-18T10:25:00Z",
    isActive: true,
  },
  {
    id: "cat-007",
    name: "Clothing",
    description: "Fashion and apparel",
    parentId: null,
    slug: "clothing",
    productCount: 210,
    createdAt: "2023-01-20T08:00:00Z",
    updatedAt: "2023-06-15T09:30:00Z",
    isActive: true,
  },
  {
    id: "cat-008",
    name: "Men's Clothing",
    description: "Men's fashion and apparel",
    parentId: "cat-007",
    slug: "mens-clothing",
    productCount: 85,
    createdAt: "2023-01-20T08:30:00Z",
    updatedAt: "2023-05-05T14:20:00Z",
    isActive: true,
  },
  {
    id: "cat-009",
    name: "Women's Clothing",
    description: "Women's fashion and apparel",
    parentId: "cat-007",
    slug: "womens-clothing",
    productCount: 125,
    createdAt: "2023-01-20T09:00:00Z",
    updatedAt: "2023-06-01T11:15:00Z",
    isActive: true,
  },
  {
    id: "cat-010",
    name: "Furniture",
    description: "Home and office furniture",
    parentId: null,
    slug: "furniture",
    productCount: 78,
    createdAt: "2023-02-10T10:00:00Z",
    updatedAt: "2023-05-28T15:45:00Z",
    isActive: true,
  },
  {
    id: "cat-011",
    name: "Home Decor",
    description: "Decorative items for home",
    parentId: null,
    slug: "home-decor",
    productCount: 64,
    createdAt: "2023-02-15T13:00:00Z",
    updatedAt: "2023-04-30T12:10:00Z",
    isActive: true,
  },
  {
    id: "cat-012",
    name: "Kitchen Accessories",
    description: "Tools and accessories for kitchen",
    parentId: "cat-011",
    slug: "kitchen-accessories",
    productCount: 32,
    createdAt: "2023-02-18T09:30:00Z",
    updatedAt: "2023-05-22T10:40:00Z",
    isActive: true,
  },
  {
    id: "cat-013",
    name: "T-Shirts",
    description: "Casual t-shirts for all",
    parentId: "cat-008",
    slug: "t-shirts",
    productCount: 42,
    createdAt: "2023-03-01T14:20:00Z",
    updatedAt: "2023-06-05T09:50:00Z",
    isActive: true,
  },
  {
    id: "cat-014",
    name: "Accessories",
    description: "Fashion accessories",
    parentId: "cat-007",
    slug: "accessories",
    productCount: 56,
    createdAt: "2023-03-05T11:00:00Z",
    updatedAt: "2023-04-18T16:30:00Z",
    isActive: true,
  },
  {
    id: "cat-015",
    name: "Beauty & Personal Care",
    description: "Beauty products and personal care items",
    parentId: null,
    slug: "beauty-personal-care",
    productCount: 98,
    createdAt: "2023-03-10T10:15:00Z",
    updatedAt: "2023-06-02T13:20:00Z",
    isActive: true,
  },
];

// Helper function to get categories in hierarchical structure
export const getCategoryHierarchy = () => {
  const rootCategories = categories.filter(
    (category) => category.parentId === null
  );

  const buildCategoryTree = (parent: Category): CategoryTree => {
    const children = categories.filter(
      (category) => category.parentId === parent.id
    );
    return {
      ...parent,
      children: children.map((child) => buildCategoryTree(child)),
    };
  };

  return rootCategories.map((root) => buildCategoryTree(root));
};

// Helper function to get category by ID
export const getCategoryById = (id: string) => {
  return categories.find((category) => category.id === id);
};

// Helper function to get child categories
export const getChildCategories = (parentId: string) => {
  return categories.filter((category) => category.parentId === parentId);
};
