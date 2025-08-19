import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Handshake, Building, TrendingUp, Award, Users, Globe } from 'lucide-react';

const Partnership: React.FC = () => {
  const partnershipTypes = [
    {
      icon: Building,
      title: 'Поставщики ингредиентов',
      description: 'Сотрудничество с фермерами и производителями качественного сырья',
      benefits: ['Долгосрочные контракты', 'Стабильные объёмы', 'Справедливые цены']
    },
    {
      icon: TrendingUp,
      title: 'Инвесторы',
      description: 'Привлечение инвестиций для развития сети пекарен',
      benefits: ['Прозрачная отчётность', 'Растущий рынок', 'Опытная команда']
    },
    {
      icon: Users,
      title: 'Франчайзи',
      description: 'Развитие сети через франчайзинговую модель',
      benefits: ['Проверенная модель', 'Полная поддержка', 'Обучение персонала']
    },
    {
      icon: Globe,
      title: 'Технологические партнёры',
      description: 'Внедрение современных технологий в производство',
      benefits: ['Инновации', 'Автоматизация', 'Повышение качества']
    }
  ];

  const currentPartners = [
    {
      name: 'ЭкоФерма "Золотые поля"',
      type: 'Поставщик органической муки',
      since: '2020',
      description: 'Поставляет органическую пшеничную и ржаную муку высшего качества'
    },
    {
      name: 'Молочная ферма "Утренняя роса"',
      type: 'Поставщик молочных продуктов',
      since: '2019',
      description: 'Свежие молочные продукты от коров свободного выпаса'
    },
    {
      name: 'ТехноХлеб',
      type: 'Технологический партнёр',
      since: '2022',
      description: 'Современное оборудование для автоматизации производства'
    }
  ];

  const benefits = [
    'Стабильный и растущий бизнес с 29-летней историей',
    'Сильный бренд с высокой узнаваемостью',
    'Опытная команда управления',
    'Постоянная клиентская база',
    'Планы расширения по России',
    'Инновационный подход к традиционному бизнесу'
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Партнёрство</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Развиваем взаимовыгодные отношения с поставщиками, инвесторами и технологическими партнёрами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {partnershipTypes.map((type, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <type.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {type.description}
                </p>
                <div className="space-y-1">
                  {type.benefits.map((benefit, idx) => (
                    <div key={idx} className="text-sm text-gray-500">
                      • {benefit}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Наши партнёры
            </h2>
            <div className="space-y-4">
              {currentPartners.map((partner, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                        <Handshake className="w-6 h-6 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {partner.name}
                        </h3>
                        <div className="text-amber-600 font-medium mb-1">
                          {partner.type}
                        </div>
                        <p className="text-gray-600 mb-2">
                          {partner.description}
                        </p>
                        <div className="text-sm text-gray-500">
                          Партнёры с {partner.since} года
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Почему выбирают нас
            </h2>
            <Card className="mb-6">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Предложение о партнёрстве</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Название компании" />
                    <Input placeholder="Контактное лицо" />
                  </div>
                  <Input type="email" placeholder="Email" />
                  <Input type="tel" placeholder="Телефон" />
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none">
                    <option value="">Тип партнёрства</option>
                    <option value="supplier">Поставщик</option>
                    <option value="investor">Инвестор</option>
                    <option value="franchise">Франчайзи</option>
                    <option value="technology">Технологический партнёр</option>
                    <option value="other">Другое</option>
                  </select>
                  <Textarea 
                    placeholder="Расскажите о вашем предложении" 
                    rows={4}
                  />
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Отправить предложение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-gradient-to-r from-amber-50 to-orange-50">
          <CardContent className="p-8 text-center">
            <Award className="w-16 h-16 text-amber-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Стратегическое партнёрство
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Мы открыты для долгосрочного сотрудничества с компаниями, 
              разделяющими наши ценности качества и ответственности. 
              Вместе мы можем достичь больших результатов.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">15+</div>
                <div className="text-gray-600">Активных партнёров</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">29</div>
                <div className="text-gray-600">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">100%</div>
                <div className="text-gray-600">Надёжность</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Partnership;