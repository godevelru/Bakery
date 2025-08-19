import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Gift, Star, CreditCard, Percent, Trophy, Heart } from 'lucide-react';

const Loyalty: React.FC = () => {
  const benefits = [
    {
      icon: Percent,
      title: 'Скидки до 15%',
      description: 'Накопительная система скидок для постоянных клиентов'
    },
    {
      icon: Gift,
      title: 'Подарки',
      description: 'Бесплатная выпечка в день рождения и праздники'
    },
    {
      icon: Star,
      title: 'Бонусные баллы',
      description: '1 балл за каждые 100 рублей покупки'
    },
    {
      icon: Trophy,
      title: 'Эксклюзивные предложения',
      description: 'Первыми узнавайте о новинках и акциях'
    }
  ];

  const levels = [
    {
      name: 'Бронзовый',
      spending: '0 - 10,000 ₽',
      discount: '3%',
      bonusRate: '1%',
      color: 'bg-amber-100 text-amber-800'
    },
    {
      name: 'Серебряный',
      spending: '10,001 - 30,000 ₽',
      discount: '7%',
      bonusRate: '2%',
      color: 'bg-gray-100 text-gray-800'
    },
    {
      name: 'Золотой',
      spending: '30,001 - 60,000 ₽',
      discount: '12%',
      bonusRate: '3%',
      color: 'bg-yellow-100 text-yellow-800'
    },
    {
      name: 'Платиновый',
      spending: 'свыше 60,000 ₽',
      discount: '15%',
      bonusRate: '5%',
      color: 'bg-purple-100 text-purple-800'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Программа лояльности</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Получайте больше выгоды от каждой покупки в нашей пекарне
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

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Уровни программы лояльности
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((level, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-center">
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2 ${level.color}`}>
                      {level.name}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <div className="text-sm text-gray-500">Сумма покупок</div>
                    <div className="font-semibold text-gray-900">{level.spending}</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Скидка</div>
                      <div className="text-lg font-bold text-amber-600">{level.discount}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Бонусы</div>
                      <div className="text-lg font-bold text-amber-600">{level.bonusRate}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Как работает программа
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Регистрация</h3>
                  <p className="text-gray-600">Заполните форму и получите карту лояльности</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Покупки</h3>
                  <p className="text-gray-600">Совершайте покупки и накапливайте баллы</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Выгода</h3>
                  <p className="text-gray-600">Получайте скидки и тратьте баллы на покупки</p>
                </div>
              </div>
            </div>

            <Card className="mt-8 bg-amber-50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Heart className="w-5 h-5 text-amber-600" />
                  <h3 className="font-semibold text-gray-900">Особые привилегии</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Бесплатная выпечка в день рождения</li>
                  <li>• Приоритетное обслуживание</li>
                  <li>• Уведомления о новинках</li>
                  <li>• Участие в закрытых дегустациях</li>
                  <li>• Скидки на мастер-классы</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="w-6 h-6 mr-2 text-amber-600" />
                Получить карту лояльности
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Имя" />
                  <Input placeholder="Фамилия" />
                </div>
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Телефон" />
                <Input type="date" placeholder="Дата рождения" />
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none">
                  <option value="">Как узнали о нас?</option>
                  <option value="friends">От друзей</option>
                  <option value="internet">Интернет</option>
                  <option value="advertising">Реклама</option>
                  <option value="social">Социальные сети</option>
                  <option value="other">Другое</option>
                </select>
                
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="agreement" className="rounded" />
                  <label htmlFor="agreement" className="text-sm text-gray-600">
                    Согласен на обработку персональных данных и получение рассылки
                  </label>
                </div>
                
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Получить карту
                </Button>
              </form>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-700 text-center">
                  <Gift className="w-4 h-4 inline mr-1" />
                  При регистрации вы получите 500 бонусных баллов!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Loyalty;