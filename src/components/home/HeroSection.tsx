import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-amber-50 to-orange-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">Более 10,000 довольных клиентов</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Свежая выпечка
              <span className="text-amber-600"> каждый день</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Традиционные рецепты, натуральные ингредиенты и любовь к своему делу. 
              Доставляем свежую выпечку прямо к вашему столу.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/catalog">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  Посмотреть каталог
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/delivery">
                <Button variant="outline" size="lg" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                  Узнать о доставке
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg"
              alt="Свежая выпечка"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-amber-600">29 лет</div>
              <div className="text-gray-600">опыта</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;