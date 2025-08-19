import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Star, ThumbsUp, MessageCircle, Filter } from 'lucide-react';

const Reviews: React.FC = () => {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const reviews = [
    {
      id: '1',
      name: 'Мария Иванова',
      rating: 5,
      date: '2024-01-20',
      text: 'Потрясающая пекарня! Хлеб всегда свежий, а круассаны просто тают во рту. Доставка быстрая и аккуратная. Особенно нравится торт "Наполеон" - как у бабушки!',
      product: 'Торт "Наполеон"',
      helpful: 12,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    },
    {
      id: '2',
      name: 'Алексей Петров',
      rating: 5,
      date: '2024-01-18',
      text: 'Заказываю торты для семейных праздников уже несколько лет. Качество всегда на высоте, вкус потрясающий! Персонал очень вежливый и профессиональный.',
      product: 'Чизкейк "Нью-Йорк"',
      helpful: 8,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    },
    {
      id: '3',
      name: 'Елена Сидорова',
      rating: 4,
      date: '2024-01-15',
      text: 'Очень удобно заказывать онлайн. Выпечка приходит тёплая и ароматная. Единственное - хотелось бы больше вариантов безглютеновой продукции.',
      product: 'Французский багет',
      helpful: 5,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
    },
    {
      id: '4',
      name: 'Дмитрий Козлов',
      rating: 5,
      date: '2024-01-12',
      text: 'Лучшие эклеры в городе! Крем нежный, тесто воздушное. Заказывал для офиса - все коллеги были в восторге. Обязательно буду заказывать ещё.',
      product: 'Эклеры с кремом',
      helpful: 15,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
    }
  ];

  const stats = [
    { label: 'Общий рейтинг', value: '4.8', icon: Star },
    { label: 'Всего отзывов', value: '1,247', icon: MessageCircle },
    { label: 'Рекомендуют', value: '96%', icon: ThumbsUp }
  ];

  const filteredReviews = reviews.filter(review => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'positive') return review.rating >= 4;
    if (selectedFilter === 'negative') return review.rating < 4;
    return true;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Отзывы клиентов</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Читайте отзывы наших клиентов и делитесь своим мнением
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-amber-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Фильтры
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    По рейтингу
                  </label>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedFilter('all')}
                      className={`w-full text-left p-2 rounded ${
                        selectedFilter === 'all' ? 'bg-amber-100 text-amber-700' : 'hover:bg-gray-100'
                      }`}
                    >
                      Все отзывы
                    </button>
                    <button
                      onClick={() => setSelectedFilter('positive')}
                      className={`w-full text-left p-2 rounded ${
                        selectedFilter === 'positive' ? 'bg-amber-100 text-amber-700' : 'hover:bg-gray-100'
                      }`}
                    >
                      Положительные (4-5 ⭐)
                    </button>
                    <button
                      onClick={() => setSelectedFilter('negative')}
                      className={`w-full text-left p-2 rounded ${
                        selectedFilter === 'negative' ? 'bg-amber-100 text-amber-700' : 'hover:bg-gray-100'
                      }`}
                    >
                      Требуют внимания (1-3 ⭐)
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3 space-y-6">
            {filteredReviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">{review.name}</h3>
                          <div className="flex items-center space-x-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">
                              {new Date(review.date).toLocaleDateString('ru-RU')}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-3">
                        {review.text}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          Товар: <span className="text-amber-600">{review.product}</span>
                        </div>
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
                          <ThumbsUp className="w-4 h-4" />
                          <span className="text-sm">Полезно ({review.helpful})</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-amber-50">
              <CardHeader>
                <CardTitle>Оставить отзыв</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Ваше имя" />
                    <Input type="email" placeholder="Email" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Оценка
                    </label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                          key={rating}
                          type="button"
                          onClick={() => setSelectedRating(rating)}
                          className="p-1"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              rating <= selectedRating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <Input placeholder="Какой товар покупали?" />
                  <Textarea placeholder="Ваш отзыв" rows={4} />
                  
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Отправить отзыв
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reviews;