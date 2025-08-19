import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Gift, Percent, Calendar, Clock, Star, Users } from 'lucide-react';

const Promotions: React.FC = () => {
  const currentPromotions = [
    {
      id: '1',
      title: 'Скидка 20% на все торты',
      description: 'При заказе торта весом от 1 кг получите скидку 20%',
      discount: '20%',
      validUntil: '2024-02-29',
      code: 'CAKE20',
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
      type: 'discount',
      conditions: ['Минимальный вес торта 1 кг', 'Не суммируется с другими скидками']
    },
    {
      id: '2',
      title: 'Бесплатная доставка',
      description: 'Бесплатная доставка при заказе от 1000 рублей',
      discount: 'Бесплатно',
      validUntil: '2024-02-15',
      code: 'DELIVERY',
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg',
      type: 'delivery',
      conditions: ['Минимальная сумма заказа 1000₽', 'Только по Москве в пределах МКАД']
    },
    {
      id: '3',
      title: '3+1 на круассаны',
      description: 'При покупке 3 круассанов четвёртый в подарок',
      discount: '25%',
      validUntil: '2024-02-20',
      code: 'CROISSANT3',
      image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg',
      type: 'gift',
      conditions: ['Только на круассаны', 'Действует в магазине и при доставке']
    }
  ];

  const seasonalOffers = [
    {
      title: 'Весенние новинки',
      description: 'Попробуйте новые вкусы весенней коллекции',
      period: 'Март - Май',
      image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg'
    },
    {
      title: 'Летние лёгкие десерты',
      description: 'Освежающие десерты для жаркого лета',
      period: 'Июнь - Август',
      image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'discount': return Percent;
      case 'delivery': return Clock;
      case 'gift': return Gift;
      default: return Star;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'discount': return 'bg-red-100 text-red-800';
      case 'delivery': return 'bg-blue-100 text-blue-800';
      case 'gift': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Акции и предложения</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выгодные предложения и специальные акции для наших клиентов
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Текущие акции
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {currentPromotions.map((promotion) => {
              const IconComponent = getTypeIcon(promotion.type);
              return (
                <Card key={promotion.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={promotion.image}
                      alt={promotion.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className={getTypeColor(promotion.type)}>
                        <IconComponent className="w-3 h-3 mr-1" />
                        {promotion.discount}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl">{promotion.title}</CardTitle>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>До {new Date(promotion.validUntil).toLocaleDateString('ru-RU')}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      {promotion.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="bg-gray-100 p-3 rounded-lg text-center">
                        <div className="text-sm text-gray-500 mb-1">Промокод</div>
                        <div className="font-mono font-bold text-amber-600 text-lg">
                          {promotion.code}
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Условия:</h4>
                      <ul className="space-y-1">
                        {promotion.conditions.map((condition, idx) => (
                          <li key={idx} className="text-gray-600 text-sm">
                            • {condition}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full bg-amber-600 hover:bg-amber-700">
                      Воспользоваться
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Сезонные предложения
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seasonalOffers.map((offer, index) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {offer.description}
                  </p>
                  <div className="flex items-center space-x-2 text-amber-600">
                    <Calendar className="w-4 h-4" />
                    <span className="font-semibold">{offer.period}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-gradient-to-r from-amber-50 to-orange-50">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Подпишитесь на рассылку
                </h2>
                <p className="text-gray-600 mb-6">
                  Будьте первыми в курсе новых акций, скидок и специальных предложений. 
                  Подписчики получают эксклюзивные промокоды!
                </p>
                <div className="flex items-center space-x-2 text-amber-600 mb-4">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">Более 5,000 подписчиков уже экономят с нами!</span>
                </div>
              </div>
              
              <div>
                <form className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Ваш email"
                    className="bg-white"
                  />
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="newsletter" className="rounded" />
                    <label htmlFor="newsletter" className="text-sm text-gray-600">
                      Согласен получать рассылку с акциями и новостями
                    </label>
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Подписаться на акции
                  </Button>
                </form>
                
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-700 text-center">
                    <Gift className="w-4 h-4 inline mr-1" />
                    Промокод на 10% скидку сразу после подписки!
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Promotions;