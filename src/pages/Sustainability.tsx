import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Recycle, Droplets, Sun, TreePine, Users } from 'lucide-react';

const Sustainability: React.FC = () => {
  const initiatives = [
    {
      icon: Leaf,
      title: 'Органические ингредиенты',
      description: 'Используем органическую муку и натуральные ингредиенты от местных фермеров',
      impact: '70% ингредиентов - органические'
    },
    {
      icon: Recycle,
      title: 'Экологичная упаковка',
      description: 'Переходим на биоразлагаемую упаковку и сокращаем использование пластика',
      impact: '90% упаковки - экологичная'
    },
    {
      icon: Droplets,
      title: 'Экономия воды',
      description: 'Установили системы рециркуляции воды и энергоэффективное оборудование',
      impact: '30% экономии воды'
    },
    {
      icon: Sun,
      title: 'Возобновляемая энергия',
      description: 'Переходим на солнечную энергию для питания производства',
      impact: '40% энергии - возобновляемая'
    },
    {
      icon: TreePine,
      title: 'Углеродная нейтральность',
      description: 'Компенсируем углеродный след через посадку деревьев',
      impact: '100 деревьев в год'
    },
    {
      icon: Users,
      title: 'Социальная ответственность',
      description: 'Поддерживаем местные сообщества и благотворительные организации',
      impact: '50 семей получают помощь'
    }
  ];

  const certifications = [
    {
      name: 'Органик сертификат',
      description: 'Подтверждает использование органических ингредиентов',
      year: '2023'
    },
    {
      name: 'Эко-упаковка',
      description: 'Сертификат экологичности упаковочных материалов',
      year: '2024'
    },
    {
      name: 'Социальная ответственность',
      description: 'Признание вклада в развитие местного сообщества',
      year: '2023'
    }
  ];

  const goals = [
    {
      year: '2024',
      goals: [
        'Переход на 100% экологичную упаковку',
        'Сокращение пищевых отходов на 50%',
        'Установка солнечных панелей'
      ]
    },
    {
      year: '2025',
      goals: [
        'Углеродная нейтральность производства',
        '80% органических ингредиентов',
        'Открытие эко-кафе'
      ]
    },
    {
      year: '2026',
      goals: [
        'Полный переход на возобновляемую энергию',
        'Создание собственной органической фермы',
        'Программа переработки упаковки'
      ]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Экологическая ответственность</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы заботимся о планете и будущих поколениях, внедряя экологичные практики в производство
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {initiatives.map((initiative, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <initiative.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {initiative.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {initiative.description}
                </p>
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="text-sm text-green-600 font-semibold">
                    Результат: {initiative.impact}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Наши сертификаты
            </h2>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <Leaf className="w-8 h-8 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {cert.name}
                        </h3>
                        <p className="text-gray-600 mb-1">
                          {cert.description}
                        </p>
                        <div className="text-sm text-green-600 font-semibold">
                          Получен в {cert.year} году
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
              Планы на будущее
            </h2>
            <div className="space-y-6">
              {goals.map((yearGoals, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-center text-2xl text-amber-600">
                      {yearGoals.year}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {yearGoals.goals.map((goal, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <Card className="bg-gradient-to-r from-green-50 to-blue-50">
          <CardContent className="p-8 text-center">
            <TreePine className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Присоединяйтесь к нашей миссии
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Каждая покупка в нашей пекарне — это вклад в экологичное будущее. 
              Вместе мы можем сделать мир чище и лучше.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">500+</div>
                <div className="text-gray-600">Тонн CO₂ сэкономлено</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">1,000+</div>
                <div className="text-gray-600">Деревьев посажено</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">95%</div>
                <div className="text-gray-600">Отходов перерабатывается</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Sustainability;