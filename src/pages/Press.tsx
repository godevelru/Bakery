import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Newspaper, Download, Camera, Mic, Award, Calendar } from 'lucide-react';

const Press: React.FC = () => {
  const pressReleases = [
    {
      id: '1',
      title: 'Пекарня "Золотая Корочка" запускает линейку безглютеновой продукции',
      date: '2024-01-15',
      excerpt: 'Новая линейка продуктов для людей с особыми диетическими потребностями',
      category: 'Новости продукции'
    },
    {
      id: '2',
      title: 'Открытие второй точки пекарни в центре Москвы',
      date: '2024-01-10',
      excerpt: 'Расширение сети и улучшение доступности для клиентов',
      category: 'Развитие бизнеса'
    },
    {
      id: '3',
      title: 'Получение сертификата "Лучшая пекарня Москвы 2023"',
      date: '2023-12-20',
      excerpt: 'Признание профессионального сообщества и клиентов',
      category: 'Награды'
    }
  ];

  const mediaKit = [
    {
      type: 'Логотипы',
      description: 'Логотипы в различных форматах и цветовых решениях',
      format: 'PNG, SVG, EPS',
      size: '2.5 MB'
    },
    {
      type: 'Фотографии продукции',
      description: 'Высококачественные фото нашей выпечки',
      format: 'JPG, RAW',
      size: '45 MB'
    },
    {
      type: 'Фотографии пекарни',
      description: 'Интерьер, процесс производства, команда',
      format: 'JPG',
      size: '25 MB'
    },
    {
      type: 'Брендбук',
      description: 'Руководство по использованию фирменного стиля',
      format: 'PDF',
      size: '8 MB'
    }
  ];

  const awards = [
    {
      year: '2023',
      title: 'Лучшая пекарня Москвы',
      organization: 'Ассоциация рестораторов'
    },
    {
      year: '2022',
      title: 'Премия за качество',
      organization: 'Торгово-промышленная палата'
    },
    {
      year: '2021',
      title: 'Экологически ответственный бизнес',
      organization: 'Министерство экологии'
    }
  ];

  const contacts = [
    {
      role: 'Пресс-секретарь',
      name: 'Анна Петрова',
      email: 'press@zlatayakorochka.ru',
      phone: '+7 (495) 123-45-70'
    },
    {
      role: 'Директор по маркетингу',
      name: 'Сергей Иванов',
      email: 'marketing@zlatayakorochka.ru',
      phone: '+7 (495) 123-45-71'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Пресс-центр</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Информация для СМИ, пресс-релизы и медиа-материалы
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Последние пресс-релизы
            </h2>
            <div className="space-y-6">
              {pressReleases.map((release) => (
                <Card key={release.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                        <Newspaper className="w-6 h-6 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-sm text-amber-600 font-medium">{release.category}</span>
                          <span className="text-sm text-gray-500">
                            {new Date(release.date).toLocaleDateString('ru-RU')}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {release.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {release.excerpt}
                        </p>
                        <Button variant="outline" size="sm">
                          Читать полностью
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Медиа-кит</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mediaKit.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">{item.type}</div>
                      <div className="text-sm text-gray-600">{item.format} • {item.size}</div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Скачать весь медиа-кит
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Контакты для СМИ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contacts.map((contact, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900">{contact.role}</div>
                    <div className="text-amber-600 font-medium">{contact.name}</div>
                    <div className="text-sm text-gray-600">{contact.email}</div>
                    <div className="text-sm text-gray-600">{contact.phone}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Награды и достижения
            </h2>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{award.title}</div>
                        <div className="text-amber-600 font-medium">{award.year}</div>
                        <div className="text-sm text-gray-600">{award.organization}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Запрос на интервью</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input placeholder="Название издания/канала" />
                <Input placeholder="Ваше имя" />
                <Input placeholder="Должность" />
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Телефон" />
                
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none">
                  <option value="">Тип интервью</option>
                  <option value="written">Письменное интервью</option>
                  <option value="phone">Телефонное интервью</option>
                  <option value="video">Видео-интервью</option>
                  <option value="visit">Визит в пекарню</option>
                </select>
                
                <Textarea 
                  placeholder="Тема интервью и основные вопросы" 
                  rows={4}
                />
                
                <Input type="date" placeholder="Желаемая дата" />
                
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Отправить запрос
                </Button>
              </form>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Camera className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold text-gray-900">Фото и видео съёмка</span>
                </div>
                <p className="text-sm text-gray-600">
                  Возможна организация фото и видео съёмки в пекарне 
                  по предварительной договорённости
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gray-50">
          <CardContent className="p-8 text-center">
            <Mic className="w-16 h-16 text-amber-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Открыты для сотрудничества
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Мы всегда рады сотрудничеству со СМИ и готовы предоставить 
              всю необходимую информацию о нашей деятельности, продукции и планах развития.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">50+</div>
                <div className="text-gray-600">Публикаций в СМИ</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">15</div>
                <div className="text-gray-600">Телевизионных сюжетов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">100+</div>
                <div className="text-gray-600">Упоминаний в прессе</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Press;