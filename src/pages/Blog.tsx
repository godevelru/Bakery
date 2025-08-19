import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: '1',
      title: 'История хлебопечения: от древности до наших дней',
      excerpt: 'Узнайте, как развивалось искусство хлебопечения на протяжении тысячелетий',
      content: 'Полная статья о истории хлебопечения...',
      category: 'История',
      author: 'Иван Петрович',
      publishedAt: new Date('2024-01-20'),
      readTime: '8 мин',
      image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg',
      tags: ['история', 'хлеб', 'традиции']
    },
    {
      id: '2',
      title: 'Секреты идеального круассана',
      excerpt: 'Раскрываем профессиональные секреты приготовления французских круассанов',
      content: 'Подробное руководство по приготовлению круассанов...',
      category: 'Рецепты',
      author: 'Анна Михайловна',
      publishedAt: new Date('2024-01-18'),
      readTime: '12 мин',
      image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg',
      tags: ['круассаны', 'французская выпечка', 'техника']
    },
    {
      id: '3',
      title: 'Польза ржаного хлеба для здоровья',
      excerpt: 'Почему ржаной хлеб полезнее пшеничного и как выбрать качественный продукт',
      content: 'Научная статья о пользе ржаного хлеба...',
      category: 'Здоровье',
      author: 'Елена Васильевна',
      publishedAt: new Date('2024-01-15'),
      readTime: '6 мин',
      image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg',
      tags: ['здоровье', 'ржаной хлеб', 'питание']
    },
    {
      id: '4',
      title: 'Тренды в мире выпечки 2024',
      excerpt: 'Какие новые направления в выпечке набирают популярность в этом году',
      content: 'Обзор трендов в выпечке...',
      category: 'Тренды',
      author: 'Сергей Александрович',
      publishedAt: new Date('2024-01-12'),
      readTime: '10 мин',
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
      tags: ['тренды', 'новинки', '2024']
    }
  ];

  const categories = ['Все', 'История', 'Рецепты', 'Здоровье', 'Тренды'];
  const [selectedCategory, setSelectedCategory] = React.useState('Все');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'Все' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Блог пекарни</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Интересные статьи о выпечке, рецепты, советы и новости мира хлебопечения
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="w-5 h-5 mr-2" />
                  Поиск
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  type="text"
                  placeholder="Поиск статей..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Категории</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left p-2 rounded transition-colors ${
                        selectedCategory === category 
                          ? 'bg-amber-100 text-amber-700' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>

          <div className="flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      {post.title}
                    </h2>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.publishedAt.toLocaleDateString('ru-RU')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                    >
                      Читать полностью
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">Статьи не найдены</p>
                <p className="text-gray-500 mt-2">Попробуйте изменить поисковый запрос или категорию</p>
              </div>
            )}
          </div>
        </div>

        <Card className="mt-12 bg-amber-50">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Подпишитесь на наш блог
            </h2>
            <p className="text-gray-600 mb-6">
              Получайте новые статьи, рецепты и советы прямо на почту
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Ваш email"
                className="flex-1"
              />
              <Button className="bg-amber-600 hover:bg-amber-700">
                Подписаться
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Blog;