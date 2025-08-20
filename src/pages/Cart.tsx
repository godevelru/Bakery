import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/context/CartContext';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import { ShoppingBag, ArrowLeft, Gift, Percent } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  if (state.items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Корзина пуста</h1>
            <p className="text-xl text-gray-600 mb-8">
              Добавьте товары из каталога, чтобы сделать заказ
            </p>
            <div className="space-y-4">
              <Link to="/catalog">
                <Button size="lg" className="w-full bg-amber-600 hover:bg-amber-700">
                  Перейти в каталог
                </Button>
              </Link>
              <Link to="/promotions">
                <Button variant="outline" size="lg" className="w-full">
                  <Percent className="w-4 h-4 mr-2" />
                  Посмотреть акции
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/catalog" className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Продолжить покупки
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Корзина</h1>
              <p className="text-gray-600">
                {state.items.reduce((sum, item) => sum + item.quantity, 0)} товаров на сумму {state.total} ₽
              </p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => dispatch({ type: 'CLEAR_CART' })}
              className="text-red-600 border-red-200 hover:bg-red-50"
            >
              Очистить корзину
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {state.items.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>

            <Card className="mt-6 bg-amber-50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <Gift className="w-6 h-6 text-amber-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Рекомендуем добавить</h3>
                    <p className="text-gray-600 text-sm">
                      Популярные товары, которые часто покупают вместе
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <img
                      src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg"
                      alt="Эклеры"
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <div className="font-medium">Эклеры с кремом</div>
                      <div className="text-amber-600 font-semibold">65 ₽</div>
                    </div>
                    <Button size="sm" variant="outline">
                      Добавить
                    </Button>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <img
                      src="https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg"
                      alt="Чизкейк"
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <div className="font-medium">Чизкейк "Нью-Йорк"</div>
                      <div className="text-amber-600 font-semibold">450 ₽</div>
                    </div>
                    <Button size="sm" variant="outline">
                      Добавить
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <CartSummary />

            <Card className="mt-6 bg-green-50">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Безопасная покупка
                </h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>✓ SSL шифрование данных</div>
                  <div>✓ Защищённые платежи</div>
                  <div>✓ Гарантия возврата</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-gradient-to-r from-amber-50 to-orange-50">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Нужна помощь с заказом?
                </h2>
                <p className="text-gray-600 mb-6">
                  Наши консультанты помогут оформить заказ и ответят на все вопросы
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">Телефон:</span>
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">Время работы:</span>
                    <span>Пн-Вс: 8:00 - 22:00</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Button className="bg-amber-600 hover:bg-amber-700" size="lg">
                  Связаться с консультантом
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Cart;
            ))}
          </div>

          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Итого к оплате</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Товары:</span>
                  <span>{state.total} ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Доставка:</span>
                  <span>{state.total >= 1500 ? 'Бесплатно' : '200 ₽'}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Итого:</span>
                    <span className="text-amber-600">
                      {state.total + (state.total >= 1500 ? 0 : 200)} ₽
                    </span>
                  </div>
                </div>
                
                <Link to="/checkout" className="block">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700" size="lg">
                    Оформить заказ
                  </Button>
                </Link>
                
                <Link to="/catalog" className="block">
                  <Button variant="outline" className="w-full">
                    Продолжить покупки
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;