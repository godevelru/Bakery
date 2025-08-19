import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Package, Clock, Truck, CheckCircle, Phone } from 'lucide-react';

const OrderTracking: React.FC = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [orderFound, setOrderFound] = useState(false);

  // Пример данных заказа
  const orderData = {
    id: 'ORD-2024-001234',
    status: 'delivering',
    items: [
      { name: 'Французский багет', quantity: 2, price: 120 },
      { name: 'Круассан с шоколадом', quantity: 4, price: 85 }
    ],
    total: 580,
    customer: {
      name: 'Иван Петров',
      phone: '+7 (495) 123-45-67',
      address: 'Москва, ул. Тверская, 15, кв. 42'
    },
    timeline: [
      { status: 'confirmed', time: '09:30', completed: true, title: 'Заказ подтверждён', description: 'Ваш заказ принят в обработку' },
      { status: 'preparing', time: '10:15', completed: true, title: 'Готовим заказ', description: 'Наши пекари приступили к приготовлению' },
      { status: 'baking', time: '11:00', completed: true, title: 'Выпекаем', description: 'Ваша выпечка в духовке' },
      { status: 'ready', time: '11:45', completed: true, title: 'Заказ готов', description: 'Упаковываем и передаём курьеру' },
      { status: 'delivering', time: '12:30', completed: true, title: 'В пути', description: 'Курьер направляется к вам' },
      { status: 'delivered', time: '13:15', completed: false, title: 'Доставлено', description: 'Заказ будет доставлен' }
    ],
    estimatedDelivery: '13:15',
    courier: {
      name: 'Михаил',
      phone: '+7 (495) 987-65-43'
    }
  };

  const handleSearch = () => {
    if (orderNumber.trim()) {
      setOrderFound(true);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'preparing': return 'bg-yellow-100 text-yellow-800';
      case 'baking': return 'bg-orange-100 text-orange-800';
      case 'ready': return 'bg-purple-100 text-purple-800';
      case 'delivering': return 'bg-indigo-100 text-indigo-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed': return 'Подтверждён';
      case 'preparing': return 'Готовится';
      case 'baking': return 'Выпекается';
      case 'ready': return 'Готов';
      case 'delivering': return 'Доставляется';
      case 'delivered': return 'Доставлен';
      default: return status;
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Отслеживание заказа</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Следите за статусом вашего заказа в режиме реального времени
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="w-6 h-6 mr-2 text-amber-600" />
                Поиск заказа
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input
                  type="text"
                  placeholder="Введите номер заказа"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleSearch} className="bg-amber-600 hover:bg-amber-700">
                  Найти
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Номер заказа указан в SMS-уведомлении или email-подтверждении
              </p>
            </CardContent>
          </Card>
        </div>

        {orderFound && (
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Заказ {orderData.id}</CardTitle>
                  <Badge className={getStatusColor(orderData.status)}>
                    {getStatusText(orderData.status)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Состав заказа:</h3>
                    <div className="space-y-2">
                      {orderData.items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-medium">{item.name}</div>
                            <div className="text-sm text-gray-600">{item.quantity} шт. × {item.price} ₽</div>
                          </div>
                          <div className="font-semibold">
                            {item.quantity * item.price} ₽
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mt-4 p-3 bg-amber-50 rounded-lg">
                      <span className="font-semibold">Итого:</span>
                      <span className="text-xl font-bold text-amber-600">{orderData.total} ₽</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Информация о доставке:</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Package className="w-4 h-4 text-amber-600" />
                        <span className="text-gray-700">Получатель: {orderData.customer.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-amber-600" />
                        <span className="text-gray-700">Телефон: {orderData.customer.phone}</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Truck className="w-4 h-4 text-amber-600 mt-1" />
                        <span className="text-gray-700">{orderData.customer.address}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-amber-600" />
                        <span className="text-gray-700">Ожидаемое время: {orderData.estimatedDelivery}</span>
                      </div>
                    </div>

                    {orderData.status === 'delivering' && (
                      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Ваш курьер:</h4>
                        <div className="text-gray-700">
                          <div>{orderData.courier.name}</div>
                          <div className="text-sm">{orderData.courier.phone}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Статус заказа</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderData.timeline.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step.completed ? 'bg-green-500' : 'bg-gray-300'
                      }`}>
                        {step.completed ? (
                          <CheckCircle className="w-5 h-5 text-white" />
                        ) : (
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className={`font-semibold ${
                            step.completed ? 'text-gray-900' : 'text-gray-500'
                          }`}>
                            {step.title}
                          </h3>
                          <span className={`text-sm ${
                            step.completed ? 'text-gray-600' : 'text-gray-400'
                          }`}>
                            {step.time}
                          </span>
                        </div>
                        <p className={`text-sm ${
                          step.completed ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-amber-50">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Нужна помощь?
                </h3>
                <p className="text-gray-600 mb-4">
                  Если у вас есть вопросы по заказу, свяжитесь с нами
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline">
                    <Phone className="w-4 h-4 mr-2" />
                    Позвонить
                  </Button>
                  <Button variant="outline">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Написать в чат
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {!orderFound && orderNumber && (
          <div className="max-w-2xl mx-auto text-center">
            <Card>
              <CardContent className="p-8">
                <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Заказ не найден
                </h3>
                <p className="text-gray-600 mb-6">
                  Проверьте правильность номера заказа или свяжитесь с нами для уточнения
                </p>
                <Button className="bg-amber-600 hover:bg-amber-700">
                  Связаться с поддержкой
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default OrderTracking;