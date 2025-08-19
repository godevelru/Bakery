import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { newsArticles } from '@/data/news';
import { Calendar, User } from 'lucide-react';

const NewsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Новости пекарни
          </h2>
          <p className="text-xl text-gray-600">
            Следите за нашими новинками и событиями
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.publishedAt.toLocaleDateString('ru-RU')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {article.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                <Link to={`/news/${article.id}`}>
                  <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                    Читать далее
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/news">
            <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
              Все новости
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;