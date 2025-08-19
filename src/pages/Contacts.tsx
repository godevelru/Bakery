import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contacts: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      details: ['+7 (495) 123-45-67', '+7 (495) 123-45-68'],
      description: 'Звоните с 7:00 до 21:00'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@zlatayakorochka.ru', 'orders@zlatayakorochka.ru'],
      description: 'Отвечаем в течение часа'
    },
    {
      icon: MapPin,
      title: 'Адрес',
      details: ['Москва, ул. Хлебная, 15'],
      description: 'Метро Арбатская, 5 минут пешком'
    },
    {
      icon: Clock,
      title: 'Режим работы',
      details: ['Пн-Пт: 7:00 - 21:00', 'Сб-Вс: 8:00 - 20:00'],
      description: 'Без выходных и праздников'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Контакты</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы всегда рады помочь!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {contact.title}
                </h3>
                <div className="space-y-1 mb-2">
                  {contact.details.map((detail, idx) => (
                    <div key={idx} className="text-gray-900 font-medium">
                      {detail}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  {contact.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="w-6 h-6 mr-2 text-amber-600" />
                Напишите нам
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Ваше имя" />
                  <Input type="email" placeholder="Email" />
                </div>
                <Input placeholder="Тема сообщения" />
                <Textarea 
                  placeholder="Ваше сообщение" 
                  rows={6}
                  className="resize-none"
                />
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>

          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Как нас найти</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Интерактивная карта</p>
                    <p className="text-sm">Москва, ул. Хлебная, 15</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Мы находимся в самом центре Москвы, недалеко от станции метро Арбатская. 
                  Удобная парковка и доступность общественного транспорта.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Социальные сети</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <a href="#" className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">VK</span>
                    </div>
                    <span className="text-gray-900">ВКонтакте</span>
                  </a>
                  <a href="#" className="flex items-center p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
                    <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">IG</span>
                    </div>
                    <span className="text-gray-900">Instagram</span>
                  </a>
                  <a href="#" className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">TG</span>
                    </div>
                    <span className="text-gray-900">Telegram</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contacts;