import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Наша история началась в 1995 году
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Семейная пекарня "Золотая Корочка" была основана мастером-пекарем Иваном Петровичем. 
              За почти 30 лет работы мы сохранили традиционные рецепты и добавили современные технологии.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Сегодня мы гордимся тем, что каждый день радуем жителей Москвы свежей, 
              ароматной выпечкой, приготовленной с любовью и заботой о качестве.
            </p>
            <Link to="/about">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                Узнать больше о нас
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg"
              alt="Пекарь за работой"
              className="rounded-lg shadow-lg h-48 w-full object-cover"
            />
            <img
              src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg"
              alt="Свежий хлеб"
              className="rounded-lg shadow-lg h-48 w-full object-cover mt-8"
            />
            <img
              src="https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg"
              alt="Выпечка"
              className="rounded-lg shadow-lg h-48 w-full object-cover -mt-8"
            />
            <img
              src="https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg"
              alt="Круассаны"
              className="rounded-lg shadow-lg h-48 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;