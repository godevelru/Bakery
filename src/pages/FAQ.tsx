import React from 'react';
import Layout from '@/components/layout/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { HelpCircle, Search, MessageCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const faqs = [
    {
      category: 'Заказы и доставка',
      questions: [
        {
          question: 'Какой минимальный заказ для доставки?',
          answer: 'Минимальная сумма заказа составляет 500 рублей. При заказе от 1500 рублей доставка по Москве бесплатная.'
        },
        {
          question: 'Сколько времени занимает доставка?',
          answer: 'Доставка по Москве занимает от 1 до 3 часов в зависимости от района. Точное время сообщается при оформлении заказа.'
        },
        {
          question: 'Можно ли заказать доставку на определённое время?',
          answer: 'Да, мы принимаем предзаказы. Заказ нужно сделать минимум за 2 часа до желаемого времени доставки.'
        },
        {
          question: 'Доставляете ли вы в выходные?',
          answer: 'Да, мы работаем без выходных. В выходные доставка осуществляется с 8:00 до 20:00.'
        }
      ]
    },
    {
      category: 'Продукция',
      questions: [
        {
          question: 'Есть ли у вас безглютеновая выпечка?',
          answer: 'Да, у нас есть специальная линейка безглютеновой продукции. Она готовится в отдельном цехе для исключения перекрёстного загрязнения.'
        },
        {
          question: 'Как долго хранится ваша выпечка?',
          answer: 'Хлеб хранится 2-3 дня, выпечка - 1-2 дня, торты - 3-5 дней в холодильнике. Рекомендуем употреблять в день покупки для лучшего вкуса.'
        },
        {
          question: 'Можно ли заказать торт по индивидуальному дизайну?',
          answer: 'Конечно! Мы делаем торты на заказ по вашему дизайну. Заказ нужно сделать минимум за 3 дня.'
        },
        {
          question: 'Используете ли вы консерванты?',
          answer: 'Мы используем только натуральные ингредиенты без искусственных консервантов. Вся продукция готовится ежедневно.'
        }
      ]
    },
    {
      category: 'Оплата',
      questions: [
        {
          question: 'Какие способы оплаты вы принимаете?',
          answer: 'Мы принимаем наличные, банковские карты, онлайн-оплату на сайте и банковские переводы для юридических лиц.'
        },
        {
          question: 'Можно ли оплатить заказ онлайн?',
          answer: 'Да, на нашем сайте доступна безопасная онлайн-оплата банковскими картами.'
        },
        {
          question: 'Выдаёте ли вы чеки?',
          answer: 'Да, мы выдаём фискальные чеки при любом способе оплаты. Электронный чек можем отправить на email.'
        }
      ]
    },
    {
      category: 'Программа лояльности',
      questions: [
        {
          question: 'Как получить карту лояльности?',
          answer: 'Карту можно получить бесплатно в нашем магазине или заказать через сайт. При регистрации вы получите 500 бонусных баллов.'
        },
        {
          question: 'Как тратить бонусные баллы?',
          answer: '1 балл = 1 рубль скидки. Баллами можно оплатить до 50% от суммы заказа.'
        },
        {
          question: 'Сгорают ли бонусные баллы?',
          answer: 'Баллы действуют в течение 12 месяцев с момента последней покупки.'
        }
      ]
    }
  ];

  const filteredFAQs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Часто задаваемые вопросы</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ответы на самые популярные вопросы о нашей пекарне и услугах
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Поиск по вопросам..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3"
              />
            </div>
          </div>

          <div className="space-y-8">
            {filteredFAQs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`${categoryIndex}-${index}`} className="border rounded-lg">
                      <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ничего не найдено
              </h3>
              <p className="text-gray-600">
                Попробуйте изменить поисковый запрос или свяжитесь с нами напрямую
              </p>
            </div>
          )}

          <Card className="mt-12 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-center">
                Не нашли ответ на свой вопрос?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="text-center">
                  <MessageCircle className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Свяжитесь с нами
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Наши специалисты ответят на любые вопросы
                  </p>
                  <div className="space-y-2">
                    <div>Телефон: +7 (495) 123-45-67</div>
                    <div>Email: info@zlatayakorochka.ru</div>
                  </div>
                </div>
                
                <form className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input type="email" placeholder="Email" />
                  <Input placeholder="Тема вопроса" />
                  <textarea
                    placeholder="Ваш вопрос"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none resize-none"
                  />
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Задать вопрос
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;