import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Package, ShoppingCart, DollarSign, Eye } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Общая выручка',
      value: '₽2,450,000',
      change: '+12.5%',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Заказы',
      value: '1,247',
      change: '+8.2%',
      icon: ShoppingCart,
      color: 'text-blue-600'
    },
    {
      title: 'Клиенты',
      value: '892',
      change: '+15.3%',
      icon: Users,
      color: 'text-purple-600'
    },
    {
      title: 'Товары',
      value: '156',
      change: '+3.1%',
      icon: Package,
      color: 'text-amber-600'
    }
  ];

  const salesData = [
    { month: 'Янв', sales: 65000, orders: 120 },
    { month: 'Фев', sales: 78000, orders: 145 },
    { month: 'Мар', sales: 82000, orders: 156 },
    { month: 'Апр', sales: 95000, orders: 178 },
    { month: 'Май', sales: 88000, orders: 165 },
    { month: 'Июн', sales: 102000, orders: 195 }
  ];

  const categoryData = [
    { name: 'Хлеб', value: 35, color: '#f59e0b' },
    { name: 'Выпечка', value: 28, color: '#ef4444' },
    { name: 'Торты', value: 22, color: '#8b5cf6' },
    { name: 'Печенье', value: 15, color: '#06b6d4' }
  ];

  const recentOrders = [
    { id: 'ORD-001', customer: 'Иван Петров', total: 1250, status: 'delivered' },
    { id: 'ORD-002', customer: 'Анна Сидорова', total: 890, status: 'preparing' },
    { id: 'ORD-003', customer: 'Михаил Козлов', total: 2100, status: 'confirmed' }
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Панель управления
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Обзор деятельности пекарни
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </p>
                    <p className={`text-sm ${stat.color}`}>
                      {stat.change} за месяц
                    </p>
                  </div>
                  <div className={`w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Продажи по месяцам</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#f59e0b" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Продажи по категориям</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Последние заказы</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-semibold">{order.id}</div>
                      <div className="text-sm text-gray-600">{order.customer}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{order.total} ₽</div>
                      <div className={`text-sm ${
                        order.status === 'delivered' ? 'text-green-600' :
                        order.status === 'preparing' ? 'text-yellow-600' :
                        'text-blue-600'
                      }`}>
                        {order.status === 'delivered' ? 'Доставлен' :
                         order.status === 'preparing' ? 'Готовится' :
                         'Подтверждён'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Быстрые действия</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Link to="/admin/products/new">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Добавить товар
                  </Button>
                </Link>
                <Link to="/admin/orders">
                  <Button variant="outline" className="w-full">
                    Просмотреть заказы
                  </Button>
                </Link>
                <Link to="/admin/promotions/new">
                  <Button variant="outline" className="w-full">
                    Создать акцию
                  </Button>
                </Link>
                <Link to="/admin/news/new">
                  <Button variant="outline" className="w-full">
                    Добавить новость
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;