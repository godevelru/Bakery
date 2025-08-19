import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Award, Calendar, ChefHat, Star } from 'lucide-react';

const MasterClasses: React.FC = () => {
  const classes = [
    {
      id: '1',
      title: 'Выпечка хлеба на закваске',
      description: 'Научитесь готовить настоящий хлеб на натуральной закваске',
      duration: '4 часа',
      participants: '8 человек',
      price: '3,500 ₽',
      level: 'Начинающий',
      date: '2024-02-15',
      time: '10:00',
      image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg',
      includes: ['Все ингредиенты', 'Рецепты', 'Готовая продукция домой', 'Сертификат']
    },
    {
      id: '2',
      title: 'Французские круассаны',
      description: 'Освойте технику приготовления слоёного теста и круассанов',
      duration: '6 часов',
      participants: '6 человек',
      price: '4,500 ₽',
      level: 'Продвинутый',
      date: '2024-02-20',
      time: '9:00',
      image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg',
      includes: ['Все ингредиенты', 'Профессиональные секреты', 'Дегустация', 'Сертификат']
    },
    {
      id: '3',
      title: 'Торты и пирожные',
      description: 'Создавайте красивые торты и изысканные пирожные',
      duration: '5 часов',
      participants: '10 человек',
      price: '4,000 ₽',
      level: 'Средний',
      date: '2024-02-25',
      time: '11:00',
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
      includes: ['Все материалы', 'Техники декорирования', 'Готовый торт', 'Рецептурник']
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Начинающий': return 'bg-green-100 text-green-800';
      case 'Средний': return 'bg-yellow-100 text-yellow-800';
      case 'Продвинутый': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Мастер-классы</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Научитесь готовить профессиональную выпечку под руководством наших мастеров
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {classes.map((masterClass) => (
            <Card key={masterClass.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={masterClass.image}
                alt={masterClass.title}
                className="w-full h-48 object-cover"
              />
              
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className={getLevelColor(masterClass.level)}>
                    {masterClass.level}
                  </Badge>
                  <div className="text-2xl font-bold text-amber-600">
                    {masterClass.price}
                  </div>
                </div>
                <CardTitle className="text-xl">{masterClass.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {masterClass.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Clock className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                    <div className="text-sm text-gray-500">Длительность</div>
                    <div className="font-semibold">{masterClass.duration}</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Users className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                    <div className="text-sm text-gray-500">Участников</div>
                    <div className="font-semibold">{masterClass.participants}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="w-4 h-4 text-amber-600" />
                    <span className="font-semibold">
                      {new Date(masterClass.date).toLocaleDateString('ru-RU')} в {masterClass.time}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">В стоимость входит:</h4>
                  <ul className="space-y-1">
                    {masterClass.includes.map((item, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-center space-x-2">
                        <Star className="w-3 h-3 text-amber-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Записаться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-amber-50">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Индивидуальные мастер-классы
                </h2>
                <p className="text-gray-600 mb-6">
                  Организуем персональные занятия или мастер-классы для вашей компании. 
                  Программа адаптируется под ваши пожелания и уровень подготовки.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <ChefHat className="w-5 h-5 text-amber-600" />
                    <span className="text-gray-700">Персональный подход</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-amber-600" />
                    <span className="text-gray-700">Группы от 4 до 15 человек</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-amber-600" />
                    <span className="text-gray-700">Сертификат об окончании</span>
                  </div>
                </div>
              </div>
              
              <form className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Телефон" />
                <Input placeholder="Количество участников" />
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none">
                  <option value="">Выберите тему</option>
                  <option value="bread">Хлебопечение</option>
                  <option value="pastry">Выпечка</option>
                  <option value="cakes">Торты и десерты</option>
                  <option value="custom">Индивидуальная программа</option>
                </select>
                <Textarea placeholder="Дополнительные пожелания" rows={3} />
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Заказать мастер-класс
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default MasterClasses;