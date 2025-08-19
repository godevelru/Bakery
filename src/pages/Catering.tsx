import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PartyPopper, Users, Calendar, Gift, Star, Clock } from 'lucide-react';

const Catering: React.FC = () => {
  const services = [
    {
      icon: PartyPopper,
      title: 'Корпоративные мероприятия',
      description: 'Кофе-брейки, презентации, конференции',
      minOrder: '5,000 ₽'
    },
    {
      icon: Gift,
      title: 'Частные праздники',
      description: 'Дни рождения, свадьбы, юбилеи',
      minOrder: '3,000 ₽'
    },
    {
      icon: Users,
      title: 'Детские мероприятия',
      description: 'Школьные праздники, детские сады',
      minOrder: '2,000 ₽'
    },
    {
      icon: Star,
      title: 'VIP-обслуживание',
      description: 'Эксклюзивные торты и десерты',
      minOrder: '10,000 ₽'
    }
  ];

  const packages = [
    {
      name: 'Кофе-брейк',
      people: '10-20 человек',
      price: '500 ₽/чел',
      includes: ['Мини-круассаны', 'Печенье', 'Кексы', 'Кофе/чай']
    },
    {
      name: 'Бизнес-ланч',
      people: '20-50 человек',
      price: '800 ₽/чел',
      includes: ['Сэндвичи', 'Салаты', 'Десерты', 'Напитки']
    },
    {
      name: 'Праздничный стол',
      people: '30-100 человек',
      price: '1,200 ₽/чел',
      includes: ['Торты', 'Пирожные', 'Канапе', 'Фуршетные закуски']
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Кейтеринг</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Организуем выездное обслуживание для ваших мероприятий любого масштаба
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {service.description}
                </p>
                <div className="text-amber-600 font-semibold">
                  от {service.minOrder}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Готовые пакеты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-center">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">{pkg.price}</div>
                    <div className="text-gray-600">{pkg.people}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-gray-900 mb-3">В пакет входит:</h4>
                  <ul className="space-y-2 mb-6">
                    {pkg.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Заказать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Как мы работаем
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Консультация</h3>
                  <p className="text-gray-600">Обсуждаем ваши потребности и составляем меню</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Расчёт стоимости</h3>
                  <p className="text-gray-600">Предоставляем детальный расчёт с учётом всех услуг</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Приготовление</h3>
                  <p className="text-gray-600">Готовим свежую продукцию к назначенному времени</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Доставка и сервис</h3>
                  <p className="text-gray-600">Доставляем и при необходимости организуем сервировку</p>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Заказать кейтеринг</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Компания" />
                </div>
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Телефон" />
                <Input type="date" placeholder="Дата мероприятия" />
                <Input placeholder="Количество гостей" />
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none">
                  <option value="">Тип мероприятия</option>
                  <option value="corporate">Корпоративное</option>
                  <option value="private">Частное</option>
                  <option value="wedding">Свадьба</option>
                  <option value="birthday">День рождения</option>
                  <option value="other">Другое</option>
                </select>
                <Textarea 
                  placeholder="Дополнительные пожелания и требования" 
                  rows={4}
                />
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Отправить заявку
                </Button>
              </form>
              
              <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span className="font-semibold text-gray-900">Важно!</span>
                </div>
                <p className="text-sm text-gray-600">
                  Заказы на кейтеринг принимаем минимум за 48 часов до мероприятия. 
                  Для крупных заказов рекомендуем обращаться за неделю.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Catering;