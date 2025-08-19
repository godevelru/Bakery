import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/context/CartContext';
import { CreditCard, Truck, User, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Checkout: React.FC = () => {
  const { state } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: 'Москва',
    postalCode: '',
    deliveryTime: '',
    notes: '',
    paymentMethod: 'cash'
  });

  const deliveryCost = state.total >= 1500 ? 0 : 200;
  const totalWithDelivery = state.total + deliveryCost;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки заказа
    alert('Заказ успешно оформлен! Мы свяжемся с вами в ближайшее время.');
  };

  if (state.items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Корзина пуста</h1>
          <p className="text-xl text-gray-600 mb-8">
            Добавьте товары в корзину, чтобы оформить заказ
          </p>
          <Link to="/catalog">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              Перейти в каталог
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Оформление заказа</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="w-5 h-5 mr-2 text-amber-600" />
                    Контактная информация
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-amber-600" />
                    Адрес доставки
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    name="address"
                    placeholder="Улица, дом, квартира"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      name="city"
                      placeholder="Город"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      name="postalCode"
                      placeholder="Индекс"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Truck className="w-5 h-5 mr-2 text-amber-600" />
                    Время доставки
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <select
                    name="deliveryTime"
                    value={formData.deliveryTime}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none"
                    required
                  >
                    <option value="">Выберите время доставки</option>
                    <option value="asap">Как можно скорее</option>
                    <option value="morning">Утром (9:00-12:00)</option>
                    <option value="afternoon">Днём (12:00-17:00)</option>
                    <option value="evening">Вечером (17:00-21:00)</option>
                  </select>
                  <Textarea
                    name="notes"
                    placeholder="Комментарий к заказу (необязательно)"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={3}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2 text-amber-600" />
                    Способ оплаты
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        checked={formData.paymentMethod === 'cash'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <span>Наличными курьеру</span>
                    </label>
                    <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <span>Картой курьеру</span>
                    </label>
                    <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="online"
                        checked={formData.paymentMethod === 'online'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <span>Онлайн-оплата</span>
                    </label>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Ваш заказ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {state.items.map((item) => (
                      <div key={item.product.id} className="flex justify-between items-center">
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{item.product.name}</div>
                          <div className="text-sm text-gray-600">
                            {item.quantity} × {item.product.price} ₽
                          </div>
                        </div>
                        <div className="font-semibold">
                          {item.product.price * item.quantity} ₽
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Товары:</span>
                      <span>{state.total} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Доставка:</span>
                      <span>{deliveryCost === 0 ? 'Бесплатно' : `${deliveryCost} ₽`}</span>
                    </div>
                    <div className="flex justify-between text-lg font-semibold border-t pt-2">
                      <span>Итого:</span>
                      <span className="text-amber-600">{totalWithDelivery} ₽</span>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-amber-600 hover:bg-amber-700" 
                    size="lg"
                  >
                    Подтвердить заказ
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с условиями доставки и оплаты
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Checkout;