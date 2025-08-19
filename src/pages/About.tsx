import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Clock, label: 'Лет на рынке', value: '29' },
    { icon: Users, label: 'Довольных клиентов', value: '10,000+' },
    { icon: Award, label: 'Наград получено', value: '15' },
    { icon: Heart, label: 'Видов продукции', value: '50+' }
  ];

  const team = [
    {
      name: 'Иван Петрович',
      position: 'Главный пекарь',
      experience: '29 лет',
      image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg'
    },
    {
      name: 'Анна Михайловна',
      position: 'Кондитер',
      experience: '15 лет',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    },
    {
      name: 'Сергей Александрович',
      position: 'Технолог',
      experience: '12 лет',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">О нашей пекарне</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            История семейной пекарни, которая уже почти 30 лет радует москвичей 
            свежей и вкусной выпечкой
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-amber-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Наша миссия</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Мы верим, что хорошая выпечка способна сделать день лучше. Наша миссия — 
              создавать продукты высочайшего качества, используя только натуральные 
              ингредиенты и традиционные технологии.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Каждое утро мы начинаем работу в 5:00, чтобы к открытию магазина 
              у нас была свежая, ароматная выпечка. Мы гордимся тем, что сохраняем 
              семейные традиции и передаём их новому поколению пекарей.
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg"
              alt="Пекарня изнутри"
              className="rounded-2xl shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Наша команда
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-amber-600 font-medium mb-1">
                    {member.position}
                  </p>
                  <p className="text-gray-600">
                    Опыт: {member.experience}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;