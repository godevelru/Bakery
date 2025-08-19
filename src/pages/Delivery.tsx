import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Clock, MapPin, CreditCard, Package, Phone } from 'lucide-react';

const Delivery: React.FC = () => {
  const deliveryZones = [
    { zone: 'Центр Москвы', time: '1-2 часа', cost: 'Бесплатно от 1500₽' },
    { zone: 'Москва в пределах МКАД', time: '2-3 часа', cost: 'Бесплатно от 2000₽' },
    { zone: 'Московская область', time: '3-4 часа', cost: 'Бесплатно от 3000₽' }
  ];

  const paymentMethods = [
    'Наличными курьеру',
    'Банковской картой курьеру',
    'Онлайн-оплата на сайте',
    'Банковский перевод'
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Доставка и оплата</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы доставляем свежую выпечку по всей Москве и Московской области
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Truck className="w-6 h-6 mr-2 text-amber-600" />
                Зоны доставки
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {deliveryZones.map((zone, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-gray-900">{zone.zone}</div>
                      <div className="text-sm text-gray-600">Время: {zone.time}</div>
                    </div>
                    <div className="text-amber-600 font-semibold">
                      {zone.cost}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="w-6 h-6 mr-2 text-amber-600" />
                Способы оплаты
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    <span className="text-gray-900">{method}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Время доставки
              </h3>
              <p className="text-gray-600">
                Ежедневно с 8:00 до 22:00
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Package className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Упаковка
              </h3>
              <p className="text-gray-600">
                Экологичная упаковка, сохраняющая свежесть
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Phone className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Отслеживание
              </h3>
              <p className="text-gray-600">
                SMS-уведомления о статусе заказа
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-amber-50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Условия доставки
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Минимальная сумма заказа</h3>
                <p className="text-gray-600 mb-4">500 рублей для всех зон доставки</p>
                
                <h3 className="font-semibold text-gray-900 mb-2">Предзаказ</h3>
                <p className="text-gray-600">
                  Возможен заказ на определённое время (за 2 часа до доставки)
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Особые условия</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Торты доставляются в специальных коробках</li>
                  <li>• Хлеб упаковывается в бумажные пакеты</li>
                  <li>• Горячая выпечка доставляется в термосумках</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Delivery;