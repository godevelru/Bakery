import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users, Ticket, Gift } from 'lucide-react';

const Events: React.FC = () => {
  const upcomingEvents = [
    {
      id: '1',
      title: 'Мастер-класс: Французские круассаны',
      description: 'Изучите секреты приготовления настоящих французских круассанов',
      date: '2024-02-15',
      time: '10:00',
      duration: '4 часа',
      location: 'Пекарня "Золотая Корочка"',
      price: 3500,
      maxParticipants: 8,
      currentParticipants: 5,
      image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg',
      type: 'masterclass',
      includes: ['Все ингредиенты', 'Рецепты', 'Дегустация', 'Сертификат']
    },
    {
      id: '2',
      title: 'День открытых дверей',
      description: 'Экскурсия по пекарне, дегустация и знакомство с процессом производства',
      date: '2024-02-20',
      time: '14:00',
      duration: '2 часа',
      location: 'Пекарня "Золотая Корочка"',
      price: 0,
      maxParticipants: 20,
      currentParticipants: 12,
      image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg',
      type: 'tour',
      includes: ['Экскурсия', 'Дегустация', 'Подарки', 'Скидка 20%']
    },
    {
      id: '3',
      title: 'Детский кулинарный праздник',
      description: 'Весёлое мероприятие для детей с приготовлением печенья',
      date: '2024-02-25',
      time: '11:00',
      duration: '3 часа',
      location: 'Пекарня "Золотая Корочка"',
      price: 2000,
      maxParticipants: 15,
      currentParticipants: 8,
      image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg',
      type: 'kids',
      includes: ['Приготовление печенья', 'Украшение', 'Игры', 'Подарки']
    }
  ];

  const pastEvents = [
    {
      title: 'Новогодний мастер-класс по пряникам',
      date: '2023-12-20',
      participants: 25,
      image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg'
    },
    {
      title: 'Фестиваль хлеба',
      date: '2023-10-15',
      participants: 150,
      image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg'
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'masterclass': return 'bg-blue-100 text-blue-800';
      case 'tour': return 'bg-green-100 text-green-800';
      case 'kids': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getEventTypeText = (type: string) => {
    switch (type) {
      case 'masterclass': return 'Мастер-класс';
      case 'tour': return 'Экскурсия';
      case 'kids': return 'Детское мероприятие';
      default: return type;
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Мероприятия</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Участвуйте в наших мастер-классах, экскурсиях и специальных событиях
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Ближайшие мероприятия
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getEventTypeColor(event.type)}>
                      {getEventTypeText(event.type)}
                    </Badge>
                  </div>
                  {event.price === 0 && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-500 text-white">
                        Бесплатно
                      </Badge>
                    </div>
                  )}
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(event.date).toLocaleDateString('ru-RU')}</span>
                      <Clock className="w-4 h-4 ml-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {event.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Clock className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                      <div className="text-sm text-gray-500">Длительность</div>
                      <div className="font-semibold">{event.duration}</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Users className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                      <div className="text-sm text-gray-500">Участников</div>
                      <div className="font-semibold">{event.currentParticipants}/{event.maxParticipants}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">В программе:</h4>
                    <ul className="space-y-1">
                      {event.includes.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-center space-x-2">
                          <Ticket className="w-3 h-3 text-amber-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                      {event.includes.length > 2 && (
                        <li className="text-gray-500 text-sm">
                          и ещё {event.includes.length - 2} бонусов...
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-amber-600">
                      {event.price === 0 ? 'Бесплатно' : `${event.price} ₽`}
                    </div>
                    <div className="text-sm text-gray-500">
                      за участника
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-amber-600 hover:bg-amber-700"
                    disabled={event.currentParticipants >= event.maxParticipants}
                  >
                    {event.currentParticipants >= event.maxParticipants ? 'Мест нет' : 'Записаться'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Прошедшие мероприятия
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <Card key={index}>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center justify-between text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(event.date).toLocaleDateString('ru-RU')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{event.participants} участников</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-amber-50">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Корпоративные мероприятия
                </h2>
                <p className="text-gray-600 mb-6">
                  Организуем тимбилдинги, корпоративные мастер-классы и праздники 
                  для вашей компании. Индивидуальный подход к каждому мероприятию.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <Gift className="w-4 h-4 text-amber-600" />
                    <span className="text-gray-700">Программы от 10 до 100 участников</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-amber-600" />
                    <span className="text-gray-700">Профессиональные ведущие</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Ticket className="w-4 h-4 text-amber-600" />
                    <span className="text-gray-700">Полное сопровождение мероприятия</span>
                  </div>
                </div>
                <Button className="bg-amber-600 hover:bg-amber-700">
                  Заказать корпоратив
                </Button>
              </div>
              
              <div>
                <img
                  src="https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg"
                  alt="Корпоративное мероприятие"
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

export default Events;