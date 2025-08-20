import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Plus, Edit, Trash2, Mail, Phone, Shield } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const UsersAdmin: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');

  const users = [
    {
      id: '1',
      name: 'Администратор',
      email: 'admin@zlatayakorochka.ru',
      role: 'admin',
      phone: '+7 (495) 123-45-67',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      createdAt: '2023-01-15',
      lastLogin: '2024-01-20',
      ordersCount: 0,
      totalSpent: 0
    },
    {
      id: '2',
      name: 'Иван Петров',
      email: 'ivan@example.com',
      role: 'customer',
      phone: '+7 (495) 987-65-43',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      createdAt: '2023-06-10',
      lastLogin: '2024-01-19',
      ordersCount: 15,
      totalSpent: 12500
    },
    {
      id: '3',
      name: 'Анна Сидорова',
      email: 'anna@example.com',
      role: 'customer',
      phone: '+7 (495) 555-12-34',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      createdAt: '2023-08-22',
      lastLogin: '2024-01-18',
      ordersCount: 8,
      totalSpent: 6800
    }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === 'all' || user.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Управление пользователями
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Просматривайте и управляйте аккаунтами пользователей
            </p>
          </div>
          <Button className="bg-amber-600 hover:bg-amber-700">
            <Plus className="w-4 h-4 mr-2" />
            Добавить пользователя
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Поиск пользователей..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none"
              >
                <option value="all">Все роли</option>
                <option value="admin">Администраторы</option>
                <option value="customer">Клиенты</option>
              </select>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Пользователь</TableHead>
                  <TableHead>Роль</TableHead>
                  <TableHead>Контакты</TableHead>
                  <TableHead>Статистика</TableHead>
                  <TableHead>Последний вход</TableHead>
                  <TableHead>Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'}>
                        {user.role === 'admin' ? (
                          <>
                            <Shield className="w-3 h-3 mr-1" />
                            Админ
                          </>
                        ) : (
                          'Клиент'
                        )}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-1 text-sm">
                          <Mail className="w-3 h-3" />
                          <span>{user.email}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm">
                          <Phone className="w-3 h-3" />
                          <span>{user.phone}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{user.ordersCount} заказов</div>
                        <div className="text-amber-600 font-semibold">{user.totalSpent} ₽</div>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-gray-500">
                      {user.lastLogin}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
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

export default UsersAdmin;