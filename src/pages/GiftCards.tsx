import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Gift, CreditCard, Heart, Star, Calendar, Mail } from 'lucide-react';

const GiftCards: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>('');

  const predefinedAmounts = [500, 1000, 2000, 3000, 5000];

  const giftCardDesigns = [
    {
      id: 'classic',
      name: 'Классический',
      image: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg',
      description: 'Элегантный дизайн с логотипом пекарни'
    },
    {
      id: 'birthday',
      name: 'День рождения',
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
      description: 'Праздничный дизайн для дня рождения'
    },
    {
      id: 'holiday',
      name: 'Праздничный',
      image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg',
      description: 'Новогодний и праздничный дизайн'
    }
  ];

  const benefits = [
    {
      icon: Gift,
      title: 'Идеальный подарок',
      description: 'Подходит для любого повода и получателя'
    },
    {
      icon: Calendar,
      title: 'Длительный срок действия',
      description: 'Действует 12 месяцев с момента покупки'
    },
    {
      icon: Star,
      title: 'Любая продукция',
      description: '可以用于购买任何商品'
    },
    {
      icon: CreditCard,
      title: 'Удобное использование',
      description: 'Можно использовать частями или полностью'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Подарочные карты</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Подарите близким возможность насладиться свежей выпечкой от "Золотой Корочки"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Оформить подарочную карту
            </h2>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Выберите сумму</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`p-3 rounded-lg border-2 transition-colors ${
                        selectedAmount === amount && !customAmount
                          ? 'border-amber-500 bg-amber-50 text-amber-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {amount} ₽
                    </button>
                  ))}
                </div>
                
                <div className="relative">
                  <Input
                    type="number"
                    placeholder="Другая сумма"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(0);
                    }}
                    min="100"
                    max="50000"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    ₽
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Минимальная сумма: 100 ₽, максимальная: 50,000 ₽
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Выберите дизайн</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {giftCardDesigns.map((design) => (
                    <div key={design.id} className="text-center">
                      <img
                        src={design.image}
                        alt={design.name}
                        className="w-full h-24 object-cover rounded-lg mb-2"
                      />
                      <h4 className="font-medium text-gray-900">{design.name}</h4>
                      <p className="text-xs text-gray-600">{design.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Информация о получателе</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Имя получателя" />
                  <Input type="email" placeholder="Email получателя" />
                </div>
                
                <Textarea 
                  placeholder="Персональное сообщение (необязательно)"
                  rows={4}
                />
                
                <div className="border-t pt-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Информация покупателя</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Ваше имя" />
                    <Input type="email" placeholder="Ваш email" />
                  </div>
                  <Input type="tel" placeholder="Ваш телефон" className="mt-4" />
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Способ доставки</h3>
                  <div className="space-y-3">
                    <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input type="radio" name="delivery" value="email" className="mr-3" defaultChecked />
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-sm text-gray-600">Мгновенная доставка на email</div>
                      </div>
                    </label>
                    <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input type="radio" name="delivery" value="physical" className="mr-3" />
                      <div>
                        <div className="font-medium">Физическая карта</div>
                        <div className="text-sm text-gray-600">Доставка курьером (+200 ₽)</div>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Сумма карты:</span>
                    <span className="text-xl font-bold text-amber-600">
                      {customAmount || selectedAmount} ₽
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>Комиссия:</span>
                    <span>0 ₽</span>
                  </div>
                </div>

                <Button className="w-full bg-amber-600 hover:bg-amber-700" size="lg">
                  <Gift className="w-5 h-5 mr-2" />
                  Купить подарочную карту
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Корпоративные подарочные карты
                </h2>
                <p className="text-gray-600 mb-6">
                  Отличное решение для корпоративных подарков сотрудникам и партнёрам. 
                  Предоставляем специальные условия для больших заказов.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-amber-600" />
                    <span className="text-gray-700">Скидки от 5% при заказе от 10 карт</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-amber-600" />
                    <span className="text-gray-700">Персональный менеджер</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Gift className="w-4 h-4 text-amber-600" />
                    <span className="text-gray-700">Индивидуальный дизайн карт</span>
                  </div>
                </div>
                <Button className="bg-amber-600 hover:bg-amber-700">
                  Узнать подробности
                </Button>
              </div>
              
              <div className="text-center">
                <img
                  src="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg"
                  alt="Корпоративные подарки"
                  className="rounded-xl w-full h-64 object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default GiftCards;