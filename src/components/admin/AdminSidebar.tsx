import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingCart,
  Tag,
  FileText,
  Settings,
  BarChart3,
  Gift,
  Truck
} from 'lucide-react';

const AdminSidebar: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Панель управления', href: '/admin' },
    { icon: Package, label: 'Товары', href: '/admin/products' },
    { icon: Tag, label: 'Категории', href: '/admin/categories' },
    { icon: ShoppingCart, label: 'Заказы', href: '/admin/orders' },
    { icon: Users, label: 'Пользователи', href: '/admin/users' },
    { icon: FileText, label: 'Новости', href: '/admin/news' },
    { icon: Gift, label: 'Акции', href: '/admin/promotions' },
    { icon: BarChart3, label: 'Аналитика', href: '/admin/analytics' },
    { icon: Truck, label: 'Доставка', href: '/admin/delivery' },
    { icon: Settings, label: 'Настройки', href: '/admin/settings' }
  ];

  return (
    <div className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">🍞</span>
          </div>
          <span className="text-xl font-bold">Админ-панель</span>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors',
                  isActive
                    ? 'bg-amber-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default AdminSidebar;