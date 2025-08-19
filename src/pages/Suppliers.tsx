import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Truck, Leaf, Award, MapPin, Calendar, Users } from 'lucide-react';

const Suppliers: React.FC = () => {
  const requirements = [
    {
      icon: Award,
      title: 'Сертификация качества',
      description: 'Наличие всех необходимых сертификатов и лицензий'
    },
    {
      icon: Leaf,
      title: 'Экологичность',
      description: 'Приоритет отдаём экологически чистым продуктам'
    },
    {
      icon: Truck,
      title: 'Надёжная логистика',
      description: 'Способность обеспечить регулярные поставки'
    },
    {
      icon: Users,
      title: 'Долгосрочное сотрудничество',
      description: 'Заинтересованность в развитии партнёрских отношений'
    }
  ];

  const currentSuppliers = [
    {
      name: 'ЭкоФерма "Золотые поля"',
      category: 'Мука и зерно',
      location: 'Тульская область',
      since: '2020',
      products: ['Пшеничная мука высшего сорта', 'Ржаная мука', 'Овсяная мука'],
      certification: 'Органик сертификат'
    },
    {
      name: 'Молочная ферма "Утренняя роса"',
      category: 'Молочные продукты',
      location: 'Московская область',
      since: '2019',
      products: ['Молоко', 'Сливки', 'Сливочное масло', 'Творог'],
      certification: 'ГОСТ Р сертификат'
    },
    {
      name: 'Пасека "Медовый край"',
      category: 'Мёд и продукты пчеловодства',
      location: 'Рязанская область',
      since: '2021',
      products: ['Цветочный мёд', 'Гречишный мёд', 'Прополис'],
      certification: 'Экологический сертификат'
    }
  ];

  const supplierCategories = [
    'Мука и зерновые',
    'Молочные продукты',
    'Яйца',
    'Масла и жиры',
    'Сахар и подсластители',
    'Дрожжи и разрыхлители',
    'Орехи и сухофрукты',
    'Специи и добавки',
    'Упаковочные материалы'
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Поставщикам</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы ищем надёжных партнёров для поставки качественного сырья и материалов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {requirements.map((requirement, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <requirement.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {requirement.title}
                </h3>
                <p className="text-gray-600">
                  {requirement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Наши поставщики
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {currentSuppliers.map((supplier, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{supplier.name}</CardTitle>
                  <div className="text-amber-600 font-medium">{supplier.category}</div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{supplier.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>Партнёры с {supplier.since} года</span>
                    </div>
                    <div className="flex items-center space-x-2 text-green-600">
                      <Award className="w-4 h-4" />
                      <span className="text-sm">{supplier.certification}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Поставляемая продукция:</h4>
                    <ul className="space-y-1">
                      {supplier.products.map((product, idx) => (
                        <li key={idx} className="text-gray-600 text-sm">
                          • {product}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Категории поставок
            </h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-6">
                  Мы заинтересованы в сотрудничестве с поставщиками следующих категорий товаров:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {supplierCategories.map((category, index) => (
                    <div key={index} className="flex items-center space-x-2 p-2">
                      <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      <span className="text-gray-700">{category}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6 bg-amber-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Условия сотрудничества
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Минимальный объём поставок от 500 кг в месяц</li>
                  <li>• Регулярность поставок 2-3 раза в неделю</li>
                  <li>• Оплата в течение 14 дней</li>
                  <li>• Возможность увеличения объёмов</li>
                  <li>• Долгосрочные контракты от 1 года</li>
                </ul>
              </CardContent>
            </Card>
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
                <Input placeholder="Юридический адрес" />
                
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none">
                  <option value="">Категория продукции</option>
                  {supplierCategories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
                
                <Textarea 
                  placeholder="Описание вашей продукции и условий поставки" 
                  rows={4}
                />
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Документы (прикрепите файлы)
                  </label>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.jpg,.png"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none"
                  />
                  <p className="text-xs text-gray-500">
                    Сертификаты, лицензии, каталог продукции (PDF, DOC, JPG, PNG)
                  </p>
                </div>
                
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Отправить заявку
                </Button>
              </form>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700 text-center">
                  Мы рассматриваем все заявки в течение 5 рабочих дней 
                  и свяжемся с вами для обсуждения деталей сотрудничества
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Suppliers;