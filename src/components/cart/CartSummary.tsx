import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';
import { Truck, Gift, Percent, CreditCard } from 'lucide-react';

const CartSummary: React.FC = () => {
  const { state } = useCart();
  const [promoCode, setPromoCode] = React.useState('');
  const [appliedPromo, setAppliedPromo] = React.useState<string | null>(null);

  const deliveryCost = state.total >= 1500 ? 0 : 200;
  const promoDiscount = appliedPromo ? state.total * 0.1 : 0; // 10% скидка
  const totalWithDelivery = state.total + deliveryCost - promoDiscount;

  const applyPromoCode = () => {
    // Демо промокоды
    const validCodes = ['SAVE10', 'WELCOME', 'FIRST'];
    if (validCodes.includes(promoCode.toUpperCase())) {
      setAppliedPromo(promoCode.toUpperCase());
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    setPromoCode('');
  };

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle>Итого к оплате</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Товары ({state.items.reduce((sum, item) => sum + item.quantity, 0)}):</span>
            <span>{state.total} ₽</span>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Truck className="w-4 h-4 text-gray-500" />
              <span>Доставка:</span>
            </div>
            <div className="text-right">
              {deliveryCost === 0 ? (
                <div>
                  <span className="text-green-600 font-semibold">Бесплатно</span>
                  <div className="text-xs text-gray-500">при заказе от 1500₽</div>
                </div>
              ) : (
                <div>
                  <span>{deliveryCost} ₽</span>
                  <div className="text-xs text-gray-500">
                    Бесплатно от {1500 - state.total} ₽
                  </div>
                </div>
              )}
            </div>
          </div>

          {appliedPromo && (
            <div className="flex justify-between items-center text-green-600">
              <div className="flex items-center space-x-2">
                <Percent className="w-4 h-4" />
                <span>Скидка ({appliedPromo}):</span>
              </div>
              <span>-{promoDiscount} ₽</span>
            </div>
          )}
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between text-lg font-semibold">
            <span>Итого:</span>
            <span className="text-amber-600">{totalWithDelivery} ₽</span>
          </div>
        </div>

        <div className="space-y-3">
          {!appliedPromo ? (
            <div className="flex gap-2">
              <Input
                placeholder="Промокод"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1"
              />
              <Button variant="outline" onClick={applyPromoCode}>
                Применить
              </Button>
            </div>
          ) : (
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Gift className="w-4 h-4 text-green-600" />
                <span className="text-green-700 font-medium">Промокод {appliedPromo}</span>
              </div>
              <Button variant="ghost" size="sm" onClick={removePromoCode}>
                Удалить
              </Button>
            </div>
          )}
        </div>

        <div className="space-y-3">
          <Link to="/checkout" className="block">
            <Button className="w-full bg-amber-600 hover:bg-amber-700" size="lg">
              <CreditCard className="w-4 h-4 mr-2" />
              Оформить заказ
            </Button>
          </Link>
          
          <Link to="/catalog" className="block">
            <Button variant="outline" className="w-full">
              Продолжить покупки
            </Button>
          </Link>
        </div>

        <div className="space-y-2 text-xs text-gray-500">
          <div className="flex items-center space-x-2">
            <Truck className="w-3 h-3" />
            <span>Доставка по Москве 1-3 часа</span>
          </div>
          <div className="flex items-center space-x-2">
            <CreditCard className="w-3 h-3" />
            <span>Оплата наличными или картой</span>
          </div>
          <div className="flex items-center space-x-2">
            <Gift className="w-3 h-3" />
            <span>Упаковка в подарок бесплатно</span>
          </div>
        </div>

        {state.total < 1500 && (
          <div className="p-3 bg-amber-50 rounded-lg">
            <div className="text-sm text-amber-700">
              Добавьте товаров на {1500 - state.total} ₽ для бесплатной доставки
            </div>
            <div className="w-full bg-amber-200 rounded-full h-2 mt-2">
              <div 
                className="bg-amber-600 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${(state.total / 1500) * 100}%` }}
              ></div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CartSummary;