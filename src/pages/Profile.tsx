import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/context/AuthContext';
import { User, Package, Heart, Settings, LogOut } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Profile: React.FC = () => {
  const { state, logout, updateProfile } = useAuth();

  if (!state.user) return null;

  const orderHistory = [
    {
      id: 'ORD-001',
      date: '2024-01-20',
      total: 1250,
      status: 'delivered',
      items: ['Французский багет', 'Круассан с шоколадом']
    },
    {
      id: 'ORD-002',
      date: '2024-01-15',
      total: 890,
      status: 'delivered',
      items: ['Торт "Наполеон"']
    }
  ];

  const favorites = [
    {
      id: '1',
      name: 'Французский багет',
      price: 120,
      image: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg'
    },
    {
      id: '2',
      name: 'Круассан с шоколадом',
      price: 85,
      image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Личный кабинет</h1>
          <Button variant="outline" onClick={logout}>
            <LogOut className="w-4 h-4 mr-2" />
            Выйти
          </Button>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Профиль</TabsTrigger>
            <TabsTrigger value="orders">Заказы</TabsTrigger>
            <TabsTrigger value="favorites">Избранное</TabsTrigger>
            <TabsTrigger value="settings">Настройки</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Информация профиля
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="text-center">
                    <img
                      src={state.user.avatar || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'}
                      alt={state.user.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                    />
                    <Button variant="outline" size="sm">
                      Изменить фото
                    </Button>
                  </div>
                  
                  <div className="lg:col-span-2 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Имя
                        </label>
                        <Input defaultValue={state.user.name} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <Input defaultValue={state.user.email} disabled />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Телефон
                        </label>
                        <Input defaultValue={state.user.phone || ''} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Роль
                        </label>
                        <Input value={state.user.role === 'admin' ? 'Администратор' : 'Клиент'} disabled />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Адрес
                      </label>
                      <Input defaultValue={state.user.address || ''} />
                    </div>
                    
                    <Button className="bg-amber-600 hover:bg-amber-700">
                      Сохранить изменения
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="w-5 h-5 mr-2" />
                  История заказов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderHistory.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold">Заказ {order.id}</div>
                        <div className="text-sm text-gray-500">{order.date}</div>
                      </div>
                      <div className="text-gray-600 mb-2">
                        {order.items.join(', ')}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-amber-600">{order.total} ₽</div>
                        <div className="text-sm text-green-600">Доставлен</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="favorites">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="w-5 h-5 mr-2" />
                  Избранные товары
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {favorites.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <div className="text-amber-600 font-semibold">{item.price} ₽</div>
                      </div>
                      <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                        В корзину
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  Настройки аккаунта
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Уведомления</h3>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span>Email уведомления о заказах</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span>SMS уведомления</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Рассылка с акциями</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Смена пароля</h3>
                  <div className="space-y-4 max-w-md">
                    <Input type="password" placeholder="Текущий пароль" />
                    <Input type="password" placeholder="Новый пароль" />
                    <Input type="password" placeholder="Подтвердите новый пароль" />
                    <Button className="bg-amber-600 hover:bg-amber-700">
                      Изменить пароль
                    </Button>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4 text-red-600">Опасная зона</h3>
                  <Button variant="destructive">
                    Удалить аккаунт
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Profile;