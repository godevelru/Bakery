import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Truck, Clock, MapPin, CreditCard } from 'lucide-react';

const DeliverySection: React.FC = () => {
  const deliveryFeatures = [
    {
      icon: Truck,
      title: 'Быстрая доставка',
      description: 'По Москве в течение 2 часов'
    },
    {
      icon: Clock,
      title: 'Удобное время',
      description: 'Доставка с 8:00 до 22:00'
    },
    {
      icon: MapPin,
      title: 'Широкая география',
      description: 'Доставляем по всей Москве и области'
    },
    {
      icon: CreditCard,
      title: 'Удобная оплата',
      description: 'Наличными или картой курьеру'
    }
  ];

  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Доставка свежей выпечки
          </h2>
          <p className="text-xl text-gray-600">
            Привезём тёплую выпечку прямо к вашему дому
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {deliveryFeatures.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Бесплатная доставка от 1500 ₽
              </h3>
              <p className="text-gray-600 mb-6">
                При заказе от 1500 рублей доставка по Москве абсолютно бесплатна. 
                Для заказов меньшей суммы стоимость доставки составляет всего 200 рублей.
              </p>
              <Link to="/delivery">
                <Button className="bg-amber-600 hover:bg-amber-700">
                  Подробнее о доставке
                </Button>
              </Link>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg"
                alt="Доставка"
                className="rounded-xl w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;