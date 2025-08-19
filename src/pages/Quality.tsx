import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Award, Microscope, Thermometer, Clock, CheckCircle } from 'lucide-react';

const Quality: React.FC = () => {
  const qualityStandards = [
    {
      icon: Shield,
      title: 'HACCP сертификация',
      description: 'Система анализа опасностей и критических контрольных точек',
      details: 'Международный стандарт безопасности пищевых продуктов'
    },
    {
      icon: Award,
      title: 'ISO 22000',
      description: 'Международный стандарт менеджмента безопасности пищевых продуктов',
      details: 'Подтверждает высокий уровень контроля качества'
    },
    {
      icon: Microscope,
      title: 'Лабораторный контроль',
      description: 'Ежедневные проверки сырья и готовой продукции',
      details: 'Собственная лаборатория с современным оборудованием'
    },
    {
      icon: Thermometer,
      title: 'Температурный режим',
      description: 'Строгое соблюдение температурных режимов на всех этапах',
      details: 'Автоматический мониторинг температуры 24/7'
    }
  ];

  const productionSteps = [
    {
      step: 1,
      title: 'Приёмка сырья',
      description: 'Проверка качества всех поступающих ингредиентов',
      controls: ['Органолептическая оценка', 'Лабораторные анализы', 'Проверка документов']
    },
    {
      step: 2,
      title: 'Подготовка',
      description: 'Подготовка ингредиентов согласно технологическим картам',
      controls: ['Точное взвешивание', 'Контроль температуры', 'Проверка сроков годности']
    },
    {
      step: 3,
      title: 'Производство',
      description: 'Приготовление теста и формование изделий',
      controls: ['Соблюдение рецептуры', 'Контроль времени', 'Проверка консистенции']
    },
    {
      step: 4,
      title: 'Выпечка',
      description: 'Выпекание в специальных печах с контролем параметров',
      controls: ['Температурный режим', 'Время выпечки', 'Влажность']
    },
    {
      step: 5,
      title: 'Контроль качества',
      description: 'Финальная проверка готовой продукции',
      controls: ['Внешний вид', 'Вкусовые качества', 'Соответствие стандартам']
    },
    {
      step: 6,
      title: 'Упаковка и хранение',
      description: 'Упаковка в экологичные материалы и правильное хранение',
      controls: ['Гигиена упаковки', 'Маркировка', 'Условия хранения']
    }
  ];

  const certificates = [
    {
      name: 'Сертификат соответствия ГОСТ',
      number: 'РОСС RU.АГ39.Н03924',
      validUntil: '2025-06-15',
      scope: 'Хлебобулочные изделия'
    },
    {
      name: 'Декларация о соответствии ТР ТС',
      number: 'ТС N RU Д-RU.АГ39.В.03156/24',
      validUntil: '2025-03-20',
      scope: 'Кондитерские изделия'
    },
    {
      name: 'Сертификат ISO 22000',
      number: 'ISO 22000:2018',
      validUntil: '2025-12-31',
      scope: 'Система менеджмента безопасности'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Контроль качества</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы гарантируем высочайшее качество продукции благодаря строгим стандартам и современным технологиям контроля
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {qualityStandards.map((standard, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <standard.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {standard.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {standard.description}
                </p>
                <p className="text-sm text-blue-600 font-medium">
                  {standard.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Этапы производства и контроля
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productionSteps.map((step) => (
              <Card key={step.step} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                      {step.step}
                    </div>
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {step.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Контрольные точки:</h4>
                    <ul className="space-y-1">
                      {step.controls.map((control, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                          <span>{control}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Сертификаты и лицензии
            </h2>
            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {cert.name}
                        </h3>
                        <div className="text-sm text-gray-600 mb-2">
                          Номер: {cert.number}
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                          Область применения: {cert.scope}
                        </div>
                        <Badge variant="outline" className="text-green-600 border-green-200">
                          Действует до {new Date(cert.validUntil).toLocaleDateString('ru-RU')}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Лабораторные исследования
            </h2>
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">100%</div>
                    <div className="text-sm text-gray-600">Проверка сырья</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">24/7</div>
                    <div className="text-sm text-gray-600">Мониторинг</div>
                  </div>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-3">Ежедневные анализы:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Microscope className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">Микробиологические исследования</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Thermometer className="w-4 h-4 text-red-600" />
                    <span className="text-gray-700">Контроль температурных режимов</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <span className="text-gray-700">Проверка сроков годности</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Органолептическая оценка</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-amber-50">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Гарантия качества
                </h3>
                <p className="text-gray-600 mb-4">
                  Если вы не удовлетворены качеством продукции, 
                  мы вернём деньги или заменим товар
                </p>
                <Button variant="outline" className="border-amber-600 text-amber-600">
                  Связаться с отделом качества
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-gray-50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
              Наши принципы качества
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Безопасность</h3>
                <p className="text-gray-600">Строгое соблюдение санитарных норм и стандартов</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Натуральность</h3>
                <p className="text-gray-600">Только натуральные ингредиенты без консервантов</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Свежесть</h3>
                <p className="text-gray-600">Ежедневное производство и быстрая доставка</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Quality;