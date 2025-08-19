import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Heart, Zap, Shield, Apple, Droplets } from 'lucide-react';

const Nutrition: React.FC = () => {
  const nutritionInfo = [
    {
      product: 'Французский багет',
      calories: 274,
      protein: 9.1,
      carbs: 55.8,
      fat: 1.2,
      fiber: 2.3,
      allergens: ['глютен'],
      benefits: ['Источник энергии', 'Содержит витамины группы B'],
      image: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg'
    },
    {
      product: 'Ржаной хлеб',
      calories: 259,
      protein: 8.5,
      carbs: 48.3,
      fat: 3.3,
      fiber: 8.5,
      allergens: ['глютен'],
      benefits: ['Высокое содержание клетчатки', 'Полезен для пищеварения', 'Низкий гликемический индекс'],
      image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg'
    },
    {
      product: 'Круассан с шоколадом',
      calories: 406,
      protein: 8.2,
      carbs: 45.8,
      fat: 21.0,
      fiber: 2.6,
      allergens: ['глютен', 'молоко', 'яйца'],
      benefits: ['Источник энергии', 'Содержит антиоксиданты из какао'],
      image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg'
    }
  ];

  const healthyOptions = [
    {
      icon: Leaf,
      title: 'Безглютеновая выпечка',
      description: 'Специальная линейка для людей с непереносимостью глютена'
    },
    {
      icon: Heart,
      title: 'Низкокалорийные десерты',
      description: 'Десерты с пониженным содержанием сахара и жира'
    },
    {
      icon: Zap,
      title: 'Энергетические батончики',
      description: 'Полезные перекусы с орехами и сухофруктами'
    },
    {
      icon: Shield,
      title: 'Без консервантов',
      description: 'Вся продукция без искусственных добавок'
    }
  ];

  const tips = [
    {
      icon: Apple,
      title: 'Сбалансированное питание',
      text: 'Сочетайте выпечку с фруктами и овощами для полноценного рациона'
    },
    {
      icon: Droplets,
      title: 'Питьевой режим',
      text: 'Не забывайте пить достаточно воды, особенно при употреблении хлебобулочных изделий'
    },
    {
      icon: Clock,
      title: 'Время употребления',
      text: 'Лучшее время для выпечки - первая половина дня, когда организм активно тратит энергию'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Пищевая ценность</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Подробная информация о составе и пищевой ценности нашей продукции
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {healthyOptions.map((option, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-600">
                  {option.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Пищевая ценность продукции
          </h2>
          <div className="space-y-6">
            {nutritionInfo.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1">
                      <img
                        src={item.image}
                        alt={item.product}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="lg:col-span-2">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {item.product}
                      </h3>
                      
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-gray-900">{item.calories}</div>
                          <div className="text-xs text-gray-500">ккал</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-blue-600">{item.protein}г</div>
                          <div className="text-xs text-gray-500">белки</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-yellow-600">{item.carbs}г</div>
                          <div className="text-xs text-gray-500">углеводы</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-red-600">{item.fat}г</div>
                          <div className="text-xs text-gray-500">жиры</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-green-600">{item.fiber}г</div>
                          <div className="text-xs text-gray-500">клетчатка</div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Аллергены:</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.allergens.map((allergen, idx) => (
                            <Badge key={idx} variant="outline" className="text-red-600 border-red-200">
                              {allergen}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-1">
                      <h4 className="font-semibold text-gray-900 mb-3">Полезные свойства:</h4>
                      <ul className="space-y-2">
                        {item.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-gray-600 text-sm flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Советы по здоровому питанию
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <tip.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600">
                    {tip.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-green-50">
          <CardContent className="p-8 text-center">
            <Leaf className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Натуральные ингредиенты
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Мы используем только натуральные ингредиенты высшего качества: 
              органическую муку, натуральные дрожжи, свежие яйца от проверенных поставщиков 
              и сливочное масло без растительных жиров.
            </p>
            <Button className="bg-green-600 hover:bg-green-700">
              Узнать больше об ингредиентах
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Nutrition;