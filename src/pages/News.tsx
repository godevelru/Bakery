import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { newsArticles } from '@/data/news';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const News: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Новости пекарни</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Следите за нашими новинками, акциями и интересными событиями
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {newsArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 object-cover"
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
                <h2 className="text-2xl font-bold text-gray-900">
                  {article.title}
                </h2>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>
                <Link 
                  to={`/news/${article.id}`}
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                >
                  Читать полностью
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-amber-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Подпишитесь на новости
          </h2>
          <p className="text-gray-600 mb-6">
            Получайте уведомления о новых продуктах и специальных предложениях
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 p-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:outline-none"
            />
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition-colors">
              Подписаться
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default News;