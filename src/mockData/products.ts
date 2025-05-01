export interface Product {
  id: string;
  name: string;
  sku: string;
  image: string;
  price: number;
  originalPrice?: number;
  stock: number;
  category: string;
  status: 'active' | 'inactive' | 'out_of_stock';
  description?: string;
  variations?: ProductVariation[];
  createdAt: string;
  updatedAt: string;
}

export interface ProductVariation {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
  attributes: {
    [key: string]: string;
  };
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Nike Air Max 270',
    sku: 'NKE-AM-270',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7675bae9-76f5-4b65-9b65-e966a8cea46d/air-max-270-mens-shoes-KkLcGR.png',
    price: 150.00,
    originalPrice: 180.00,
    stock: 45,
    category: 'Footwear',
    status: 'active',
    description: 'The Nike Air Max 270 delivers visible cushioning under every step. It features Nike\'s biggest heel Air unit yet, offering an ultrasoft ride that feels as impossible as it looks.',
    variations: [
      {
        id: '1-1',
        name: 'Nike Air Max 270 - Black/White - Size 41',
        sku: 'NKE-AM-270-BW-41',
        price: 150.00,
        stock: 15,
        attributes: {
          color: 'Black/White',
          size: '41'
        }
      },
      {
        id: '1-2',
        name: 'Nike Air Max 270 - Black/White - Size 42',
        sku: 'NKE-AM-270-BW-42',
        price: 150.00,
        stock: 12,
        attributes: {
          color: 'Black/White',
          size: '42'
        }
      },
      {
        id: '1-3',
        name: 'Nike Air Max 270 - Red/Black - Size 41',
        sku: 'NKE-AM-270-RB-41',
        price: 155.00,
        stock: 8,
        attributes: {
          color: 'Red/Black',
          size: '41'
        }
      },
      {
        id: '1-4',
        name: 'Nike Air Max 270 - Red/Black - Size 42',
        sku: 'NKE-AM-270-RB-42',
        price: 155.00,
        stock: 10,
        attributes: {
          color: 'Red/Black',
          size: '42'
        }
      }
    ],
    createdAt: '2023-09-15T10:30:00Z',
    updatedAt: '2024-04-20T15:45:00Z'
  },
  {
    id: '2',
    name: 'Apple MacBook Pro 16"',
    sku: 'APL-MBP-16',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671304673229',
    price: 2499.00,
    stock: 12,
    category: 'Electronics',
    status: 'active',
    description: 'The most powerful MacBook Pro ever is here. With the blazing-fast M2 Pro or M2 Max chip — the most powerful and efficient chip ever in a pro laptop.',
    variations: [
      {
        id: '2-1',
        name: 'MacBook Pro 16" - M2 Pro - 512GB - Space Gray',
        sku: 'APL-MBP-16-M2P-512-SG',
        price: 2499.00,
        stock: 7,
        attributes: {
          processor: 'M2 Pro',
          storage: '512GB',
          color: 'Space Gray'
        }
      },
      {
        id: '2-2',
        name: 'MacBook Pro 16" - M2 Pro - 512GB - Silver',
        sku: 'APL-MBP-16-M2P-512-S',
        price: 2499.00,
        stock: 5,
        attributes: {
          processor: 'M2 Pro',
          storage: '512GB',
          color: 'Silver'
        }
      }
    ],
    createdAt: '2023-10-05T09:15:00Z',
    updatedAt: '2024-04-18T11:20:00Z'
  },
  {
    id: '3',
    name: 'Samsung Galaxy S24 Ultra',
    sku: 'SAM-GS24U',
    image: 'https://images.samsung.com/is/image/samsung/p6pim/levant/sm-s928bzkgmeo/gallery/levant-galaxy-s24-ultra-s928-sm-s928bzkgmeo-thumb-538788800',
    price: 1199.99,
    originalPrice: 1299.99,
    stock: 28,
    category: 'Electronics',
    status: 'active',
    description: 'Meet Galaxy S24 Ultra, the ultimate AI phone that\'s changing how you work and play. Write with ease using the built-in S Pen. Capture stunning photos and videos in any light.',
    createdAt: '2024-01-20T14:00:00Z',
    updatedAt: '2024-04-15T16:30:00Z'
  },
  {
    id: '4',
    name: 'IKEA MALM Desk',
    sku: 'IKEA-MALM-DSK',
    image: 'https://www.ikea.com/us/en/images/products/malm-desk-black-brown__0735973_pe740307_s5.jpg',
    price: 179.00,
    stock: 0,
    category: 'Furniture',
    status: 'out_of_stock',
    description: `A clean design that's just as beautiful on all sides – place it in the middle of the room or against a wall. Use with other MALM products in the series for a unified look.`,
    createdAt: '2023-08-12T11:45:00Z',
    updatedAt: '2024-04-10T09:15:00Z'
  },
  {
    id: '5',
    name: 'Levi\'s 501 Original Fit Jeans',
    sku: 'LEV-501-OFJ',
    image: 'https://lsco.scene7.com/is/image/lsco/005010114-front-pdp?fmt=jpeg&qlt=70&resMode=bisharp&fit=crop,0&op_usm=1.25,0.6,8&wid=2000&hei=1800',
    price: 69.50,
    stock: 56,
    category: 'Clothing',
    status: 'active',
    description: 'The iconic straight fit with the signature button fly and authentic vintage-inspired look. Made with a mid-weight denim.',
    variations: [
      {
        id: '5-1',
        name: 'Levi\'s 501 - Dark Blue - Size 32x32',
        sku: 'LEV-501-OFJ-DB-32-32',
        price: 69.50,
        stock: 12,
        attributes: {
          color: 'Dark Blue',
          size: '32x32'
        }
      },
      {
        id: '5-2',
        name: 'Levi\'s 501 - Dark Blue - Size 34x32',
        sku: 'LEV-501-OFJ-DB-34-32',
        price: 69.50,
        stock: 15,
        attributes: {
          color: 'Dark Blue',
          size: '34x32'
        }
      },
      {
        id: '5-3',
        name: 'Levi\'s 501 - Black - Size 32x32',
        sku: 'LEV-501-OFJ-BL-32-32',
        price: 69.50,
        stock: 18,
        attributes: {
          color: 'Black',
          size: '32x32'
        }
      },
      {
        id: '5-4',
        name: 'Levi\'s 501 - Black - Size 34x32',
        sku: 'LEV-501-OFJ-BL-34-32',
        price: 69.50,
        stock: 11,
        attributes: {
          color: 'Black',
          size: '34x32'
        }
      }
    ],
    createdAt: '2023-07-20T13:25:00Z',
    updatedAt: '2024-04-05T14:40:00Z'
  },
  {
    id: '6',
    name: 'Sony WH-1000XM5',
    sku: 'SNY-WH1000XM5',
    image: 'https://www.sony.com/image/2327d785b6db744c6ceaa4fa93883df8?fmt=png-alpha&wid=720',
    price: 399.99,
    originalPrice: 449.99,
    stock: 23,
    category: 'Electronics',
    status: 'active',
    description: 'Industry-leading noise cancellation optimized to you. Crystal clear hands-free calling. Magnificent Sound, engineered to perfection.',
    createdAt: '2023-11-08T10:10:00Z',
    updatedAt: '2024-03-25T11:05:00Z'
  },
  {
    id: '7',
    name: 'The North Face Eco Nuptse Jacket',
    sku: 'TNF-ECO-NPJ',
    image: 'https://images.thenorthface.com/is/image/TheNorthFaceEU/55jr_jk3_hero',
    price: 320.00,
    stock: 0,
    category: 'Clothing',
    status: 'inactive',
    description: 'Inspired by the iconic 1996 Nuptse Jacket, this warm, durable 700-fill down jacket is now made with recycled materials.',
    createdAt: '2023-09-28T16:20:00Z',
    updatedAt: '2024-04-02T17:30:00Z'
  },
  {
    id: '8',
    name: 'Dyson V12 Detect Slim',
    sku: 'DYS-V12-DS',
    image: 'https://media.dyson.com/images/dynamic/1180x664/2a9c9d3a8c311dcb332ca-Lifestyle.webp',
    price: 649.99,
    stock: 15,
    category: 'Home Appliances',
    status: 'active',
    description: `Dyson's lightest intelligent cordless vacuum with a precisely-angled laser that reveals invisible dust on hard floors.`,
    createdAt: '2023-12-10T08:45:00Z',
    updatedAt: '2024-04-01T09:20:00Z'
  },
  {
    id: '9',
    name: 'Nintendo Switch OLED',
    sku: 'NIN-SWITCH-OLED',
    image: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_800/ncom/en_US/switch/site-design-update/hardware/switch/nintendo-switch-oled-model-white-set/gallery/image01',
    price: 349.99,
    stock: 8,
    category: 'Gaming',
    status: 'active',
    description: 'The Nintendo Switch OLED Model features a vibrant 7-inch OLED screen, a wide adjustable stand, enhanced audio, and 64GB of internal storage.',
    createdAt: '2023-10-15T15:30:00Z',
    updatedAt: '2024-03-28T12:50:00Z'
  },
  {
    id: '10',
    name: 'Adidas Ultraboost 22',
    sku: 'ADI-UB-22',
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg',
    price: 190.00,
    originalPrice: 210.00,
    stock: 34,
    category: 'Footwear',
    status: 'active',
    description: 'Chase your running goals in these responsive running shoes built specifically for women. A BOOST midsole delivers incredible energy return.',
    variations: [
      {
        id: '10-1',
        name: 'Adidas Ultraboost 22 - Black - Size 40',
        sku: 'ADI-UB-22-BLK-40',
        price: 190.00,
        stock: 7,
        attributes: {
          color: 'Black',
          size: '40'
        }
      },
      {
        id: '10-2',
        name: 'Adidas Ultraboost 22 - Black - Size 41',
        sku: 'ADI-UB-22-BLK-41',
        price: 190.00,
        stock: 9,
        attributes: {
          color: 'Black',
          size: '41'
        }
      },
      {
        id: '10-3',
        name: 'Adidas Ultraboost 22 - White - Size 40',
        sku: 'ADI-UB-22-WHT-40',
        price: 190.00,
        stock: 10,
        attributes: {
          color: 'White',
          size: '40'
        }
      },
      {
        id: '10-4',
        name: 'Adidas Ultraboost 22 - White - Size 41',
        sku: 'ADI-UB-22-WHT-41',
        price: 190.00,
        stock: 8,
        attributes: {
          color: 'White',
          size: '41'
        }
      }
    ],
    createdAt: '2023-11-20T14:15:00Z',
    updatedAt: '2024-03-22T10:35:00Z'
  }
];