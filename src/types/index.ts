export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  ingredients: string[];
  weight: number;
  available: boolean;
  preparationTime: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customerInfo: CustomerInfo;
  deliveryInfo: DeliveryInfo;
  status: OrderStatus;
  createdAt: Date;
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
}

export interface DeliveryInfo {
  address: string;
  city: string;
  postalCode: string;
  deliveryTime: string;
  notes?: string;
}

export type OrderStatus = 'pending' | 'confirmed' | 'preparing' | 'baking' | 'ready' | 'delivering' | 'delivered' | 'cancelled';

export interface Recipe {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  prepTime: number;
  cookTime: number;
  difficulty: 'easy' | 'medium' | 'hard';
  image: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  publishedAt: Date;
  author: string;
}