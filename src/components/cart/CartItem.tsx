import React from 'react';
import { Button } from '@/components/ui/button';
import { CartItem as CartItemType } from '@/types';
import { useCart } from '@/context/CartContext';
import { Minus, Plus, Trash2, Heart } from 'lucide-react';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { dispatch } = useCart();

  const updateQuantity = (quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId: item.product.id, quantity });
  };

  const removeItem = () => {
    dispatch({ type: 'REMOVE_ITEM', productId: item.product.id });
  };

  return (
    <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-sm border">
      <img
        src={item.product.image}
        alt={item.product.name}
        className="w-24 h-24 object-cover rounded-lg"
      />
      
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {item.product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-2">
          {item.product.description}
        </p>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <span>Вес: {item.product.weight}г</span>
          <span>•</span>
          <span>Время: {item.product.preparationTime} мин</span>
        </div>
        <div className="text-amber-600 font-semibold mt-2">
          {item.product.price} ₽ за штуку
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <Button
          variant="outline"
          size="icon"
          onClick={() => updateQuantity(item.quantity - 1)}
          disabled={item.quantity <= 1}
        >
          <Minus className="w-4 h-4" />
        </Button>
        <span className="w-12 text-center font-semibold text-lg">
          {item.quantity}
        </span>
        <Button
          variant="outline"
          size="icon"
          onClick={() => updateQuantity(item.quantity + 1)}
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>

      <div className="text-right">
        <div className="text-xl font-semibold text-gray-900 mb-2">
          {item.product.price * item.quantity} ₽
        </div>
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon">
            <Heart className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={removeItem}
            className="text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;