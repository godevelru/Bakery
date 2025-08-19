import React from 'react';
import { Clock, Truck, Award, Heart, Wheat, Users } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Clock,
      title: 'Свежесть каждый день',
      description: 'Выпекаем продукцию ежедневно с раннего утра'
    },
    {
      icon: Truck,
      title: 'Быстрая доставка',
      description: 'Доставляем по Москве в течение 2 часов'
    },
    {
      icon: Award,
      title: 'Качество премиум',
      description: 'Используем только натуральные ингредиенты'
    },
    {
      icon: Heart,
      title: 'С любовью',
      description: 'Каждое изделие создано с душой и заботой'
    },
    {
      icon: Wheat,
      title: 'Традиционные рецепты',
      description: 'Следуем семейным рецептам уже 29 лет'
    },
    {
      icon: Users,
      title: 'Опытные пекари',
      description: 'Команда мастеров с многолетним опытом'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы создаём не просто выпечку, а настоящие произведения кулинарного искусства
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;