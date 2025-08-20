import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Eye, Edit, Truck, Phone, MapPin } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const OrdersAdmin: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const orders = [
    {
      id: 'ORD-001',
      orderNumber: '2024-001234',
      customer: 'Иван Петров',
      email: 'ivan@example.com',
      phone: '+7 (495) 987-65-43',
      total: 1250,
      status: 'delivered',
      paymentStatus: 'paid',
      items: ['Французский багет', 'Круассан с шоколадом'],
      address: 'Москва, ул. Тверская, 15',
      createdAt: '2024-01-20 09:30',
      deliveredAt: '2024-01-20 13:15'
    },
    {
      id: 'ORD-002',
      orderNumber: '2024-001235',
      customer: 'Анна Сидорова',
      email: 'anna@example.com',
      phone: '+7 (495) 555-12-34',
      total: 890,
      status: 'preparing',
      paymentStatus: 'paid',
      items: ['Торт "Наполеон"'],
      address: 'Москва, ул. Арбат, 25',
      createdAt: '2024-01-20 11:45',
      deliveredAt: null
    },
    {
      id: 'ORD-003',
      orderNumber: '2024-001236',
      customer: 'Михаил Козлов',
      email: 'mikhail@example.com',
      phone: '+7 (495) 777-88-99',
      total: 2100,
      status: 'confirmed',
      paymentStatus: 'pending',
      items: ['Чизкейк "Нью-Йорк"', 'Эклеры с кремом'],
      address: 'Москва, ул. Ленина, 42',
      createdAt: '2024-01-20 14:20',
      deliveredAt: null
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'preparing': return 'bg-yellow-100 text-yellow-800';
      case 'ready': return 'bg-purple-100 text-purple-800';
      case 'delivering': return 'bg-indigo-100 text-indigo-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed': return 'Подтверждён';
      case 'preparing': return 'Готовится';
      case 'ready': return 'Готов';
      case 'delivering': return 'Доставляется';
      case 'delivered': return 'Доставлен';
      case 'cancelled': return 'Отменён';
      default: return status;
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.orderNumber.includes(searchQuery) ||
                         order.customer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || order.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Управление заказами
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Отслеживайте и управляйте заказами клиентов
            </p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Поиск по номеру заказа или клиенту..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none"
              >
                <option value="all">Все статусы</option>
                <option value="confirmed">Подтверждён</option>
                <option value="preparing">Готовится</option>
                <option value="ready">Готов</option>
                <option value="delivering">Доставляется</option>
                <option value="delivered">Доставлен</option>
                <option value="cancelled">Отменён</option>
              </select>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Заказ</TableHead>
                  <TableHead>Клиент</TableHead>
                  <TableHead>Товары</TableHead>
                  <TableHead>Сумма</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead>Дата</TableHead>
                  <TableHead>Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{order.orderNumber}</div>
                        <div className="text-sm text-gray-500">{order.id}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{order.customer}</div>
                        <div className="text-sm text-gray-500 flex items-center space-x-2">
                          <Mail className="w-3 h-3" />
                          <span>{order.email}</span>
                        </div>
                        <div className="text-sm text-gray-500 flex items-center space-x-2">
                          <Phone className="w-3 h-3" />
                          <span>{order.phone}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        {order.items.map((item, idx) => (
                          <div key={idx}>{item}</div>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-semibold">{order.total} ₽</div>
                      <Badge className={order.paymentStatus === 'paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                        {order.paymentStatus === 'paid' ? 'Оплачен' : 'Ожидает оплаты'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(order.status)}>
                        {getStatusText(order.status)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-gray-500">
                      {order.createdAt}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Truck className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default OrdersAdmin;