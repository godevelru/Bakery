import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { TrendingUp, Users, Award, DollarSign, Building, Handshake } from 'lucide-react';

const Franchise: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Проверенная бизнес-модель',
      description: 'Окупаемость от 18 месяцев'
    },
    {
      icon: Users,
      title: 'Обучение персонала',
      description: 'Полное обучение технологиям и управлению'
    },
    {
      icon: Award,
      title: 'Узнаваемый бренд',
      description: '29 лет на рынке, тысячи довольных клиентов'
    },
    {
      icon: DollarSign,
      title: 'Поддержка маркетинга',
      description: 'Готовые рекламные материалы и стратегии'
    }
  ];

  const packages = [
    {
      name: 'Стандарт',
      investment: '2,500,000',
      area: '50-80 м²',
      features: ['Полное оборудование', 'Обучение 2 недели', 'Поддержка 6 месяцев']
    },
    {
      name: 'Премиум',
      investment: '4,000,000',
      area: '80-120 м²',
      features: ['Премиум оборудование', 'Обучение 1 месяц', 'Поддержка 12 месяцев', 'Кафе-зона']
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Франшиза</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Станьте частью успешной сети пекарен "Золотая Корочка"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <Card key={index} className={index === 1 ? 'border-amber-500 border-2' : ''}>
              <CardHeader>
                <CardTitle className="text-center">
                  <Building className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  Пакет "{pkg.name}"
                  {index === 1 && (
                    <Badge className="ml-2 bg-amber-500">Популярный</Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">
                  {pkg.investment} ₽
                </div>
                <div className="text-gray-600 mb-6">
                  Площадь: {pkg.area}
                </div>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center space-x-2">
                      <Handshake className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Выбрать пакет
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Почему франшиза "Золотая Корочка"?
            </h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                За 29 лет работы мы создали уникальную систему, которая позволяет 
                нашим франчайзи успешно развивать бизнес в сфере хлебопечения.
              </p>
              <p>
                Мы предоставляем полную поддержку: от выбора помещения до обучения 
                персонала и маркетингового продвижения.
              </p>
              <p>
                Наши франчайзи получают доступ к проверенным рецептам, технологиям 
                и поставщикам качественного сырья.
              </p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Заявка на франшизу</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Фамилия" />
                </div>
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Телефон" />
                <Input placeholder="Город для открытия" />
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none">
                  <option value="">Выберите пакет</option>
                  <option value="standard">Стандарт</option>
                  <option value="premium">Премиум</option>
                </select>
                <Textarea 
                  placeholder="Расскажите о себе и своём опыте в бизнесе" 
                  rows={4}
                />
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Franchise;