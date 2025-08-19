import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, DollarSign, Users, Award, Heart } from 'lucide-react';

const Careers: React.FC = () => {
  const vacancies = [
    {
      title: 'Пекарь',
      location: 'Москва, ул. Хлебная, 15',
      schedule: 'Полный день',
      salary: '60,000 - 80,000 ₽',
      requirements: ['Опыт работы от 2 лет', 'Знание технологий выпечки', 'Ответственность'],
      type: 'full-time'
    },
    {
      title: 'Кондитер',
      location: 'Москва, ул. Хлебная, 15',
      schedule: 'Полный день',
      salary: '70,000 - 90,000 ₽',
      requirements: ['Опыт в кондитерском деле', 'Креативность', 'Внимание к деталям'],
      type: 'full-time'
    },
    {
      title: 'Продавец-консультант',
      location: 'Москва, ул. Хлебная, 15',
      schedule: 'Сменный график',
      salary: '45,000 - 55,000 ₽',
      requirements: ['Опыт в продажах', 'Коммуникабельность', 'Знание продукции'],
      type: 'part-time'
    },
    {
      title: 'Курьер',
      location: 'Москва',
      schedule: 'Гибкий график',
      salary: '50,000 - 70,000 ₽',
      requirements: ['Водительские права', 'Знание города', 'Пунктуальность'],
      type: 'flexible'
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Достойная зарплата',
      description: 'Конкурентная оплата труда и премии'
    },
    {
      icon: Users,
      title: 'Дружный коллектив',
      description: 'Работа в команде профессионалов'
    },
    {
      icon: Award,
      title: 'Обучение и развитие',
      description: 'Курсы повышения квалификации'
    },
    {
      icon: Heart,
      title: 'Соцпакет',
      description: 'Медстраховка и корпоративные скидки'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Карьера</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Присоединяйтесь к нашей команде профессионалов и развивайтесь вместе с нами
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
            Открытые вакансии
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {vacancies.map((vacancy, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{vacancy.title}</CardTitle>
                    <Badge variant={vacancy.type === 'full-time' ? 'default' : 'secondary'}>
                      {vacancy.type === 'full-time' ? 'Полная занятость' : 
                       vacancy.type === 'part-time' ? 'Частичная занятость' : 'Гибкий график'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{vacancy.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{vacancy.schedule}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-amber-600 font-semibold">
                      <DollarSign className="w-4 h-4" />
                      <span>{vacancy.salary}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Требования:</h4>
                    <ul className="space-y-1">
                      {vacancy.requirements.map((req, idx) => (
                        <li key={idx} className="text-gray-600 text-sm">
                          • {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Откликнуться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-gray-50">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              Не нашли подходящую вакансию?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-6">
                  Оставьте свои контакты, и мы свяжемся с вами, когда появится 
                  подходящая позиция. Мы всегда ищем талантливых людей!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <span className="font-semibold">HR-отдел:</span>
                    <span>hr@zlatayakorochka.ru</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <span className="font-semibold">Телефон:</span>
                    <span>+7 (495) 123-45-69</span>
                  </div>
                </div>
              </div>
              
              <form className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Телефон" />
                <Input placeholder="Желаемая позиция" />
                <Textarea placeholder="Расскажите о своём опыте" rows={4} />
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Отправить резюме
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Careers;