export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  slug: string;
  isActive: boolean;
  sortOrder: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductAdmin extends Product {
  categoryId: string;
  isActive: boolean;
  stock: number;
  sku: string;
  tags: string[];
  nutritionInfo?: NutritionInfo;
  images: string[];
}

export interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  allergens: string[];
}

export interface OrderAdmin {
  id: string;
  orderNumber: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  paymentMethod: string;
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  deliveryAddress: string;
  deliveryTime: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  type: 'discount' | 'gift' | 'delivery';
  value: number;
  code: string;
  validFrom: Date;
  validUntil: Date;
  isActive: boolean;
  usageLimit?: number;
  usageCount: number;
  conditions: string[];
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface NewsAdmin {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  author: string;
  isPublished: boolean;
  publishedAt?: Date;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}