import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Building2, Truck, Calculator, Clock, Award, Users } from 'lucide-react';

const Wholesale: React.FC = () => {
  const advantages = [
    {
      icon: Calculator,
      title: 'Выгодные цены',
      description: 'Скидки до 30% при больших объёмах'
    },
    {
      icon: Truck,
      title: 'Регулярная доставка',
      description: 'Ежедневные поставки по графику'
    },
    {
      icon: Award,
      title: 'Гарантия качества',
      description: 'Сертифицированная продукция'
    },
    {
      icon: Clock,
      title: 'Точные сроки',
      description: 'Соблюдение договорённостей'
    }
  ];

  const clientTypes = [
    {
      type: 'Кафе и рестораны',
      minOrder: '10,000 ₽',
      discount: '15-25%',
      delivery: 'Ежедневно'
    },
    {
      type: 'Магазины',
      minOrder: '15,000 ₽',
      discount: '20-30%',
      delivery: '2-3 раза в неделю'
    },
    {
      type: 'Офисы и предприятия',
      minOrder: '5,000 ₽',
      discount: '10-20%',
      delivery: 'По запросу'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Оптовые продажи</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Поставляем свежую выпечку для кафе, ресторанов, магазинов и офисов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {advantages.map((advantage, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Условия для разных типов клиентов
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientTypes.map((client, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-center">
                    <Building2 className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                    {client.type}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div>
                    <div className="text-sm text-gray-500">Минимальный заказ</div>
                    <div className="text-lg font-semibold text-gray-900">{client.minOrder}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Скидка</div>
                    <div className="text-lg font-semibold text-amber-600">{client.discount}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Доставка</div>
                    <div className="text-lg font-semibold text-gray-900">{client.delivery}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Наши услуги для бизнеса
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Индивидуальный подход
                  </h3>
                  <p className="text-gray-600">
                    Разрабатываем индивидуальные решения под потребности вашего бизнеса. 
                    Можем изготавливать продукцию по вашим рецептам и требованиям.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Гибкая логистика
                  </h3>
                  <p className="text-gray-600">
                    Настраиваем график поставок под ваши потребности. Возможна доставка 
                    в определённое время и экстренные заказы.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Маркетинговая поддержка
                  </h3>
                  <p className="text-gray-600">
                    Предоставляем рекламные материалы, помогаем с продвижением 
                    и обучаем персонал презентации продукции.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Заявка на сотрудничество</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input placeholder="Название компании" />
                <Input placeholder="Контактное лицо" />
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Телефон" />
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none">
                  <option value="">Тип бизнеса</option>
                  <option value="cafe">Кафе/Ресторан</option>
                  <option value="shop">Магазин</option>
                  <option value="office">Офис/Предприятие</option>
                  <option value="other">Другое</option>
                </select>
                <Input placeholder="Примерный объём заказов в месяц" />
                <Textarea 
                  placeholder="Дополнительная информация о ваших потребностях" 
                  rows={4}
                />
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Отправить заявку
                </Button>
              </form>
              
              <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  Наш менеджер свяжется с вами в течение 24 часов для обсуждения условий сотрудничества
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Wholesale;