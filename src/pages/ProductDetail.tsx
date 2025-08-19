import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, ArrowLeft, Clock, Weight, ChefHat } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { dispatch } = useCart();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Продукт не найден</h1>
          <Link to="/catalog">
            <Button>Вернуться к каталогу</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const addToCart = () => {
    dispatch({ type: 'ADD_ITEM', product });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Link to="/catalog" className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Вернуться к каталогу
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div>
            <div className="mb-4">
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Weight className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                <div className="text-sm text-gray-500">Вес</div>
                <div className="font-semibold">{product.weight}г</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Clock className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                <div className="text-sm text-gray-500">Приготовление</div>
                <div className="font-semibold">{product.preparationTime} мин</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <ChefHat className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                <div className="text-sm text-gray-500">Статус</div>
                <div className="font-semibold text-green-600">В наличии</div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Состав</h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient, index) => (
                  <Badge key={index} variant="outline">
                    {ingredient}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="text-3xl font-bold text-amber-600">
                {product.price} ₽
              </div>
              <div className="text-sm text-gray-500">
                за {product.weight}г
              </div>
            </div>

            <div className="flex gap-4">
              <Button 
                onClick={addToCart}
                size="lg"
                className="flex-1 bg-amber-600 hover:bg-amber-700"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Добавить в корзину
              </Button>
              <Link to="/cart">
                <Button variant="outline" size="lg">
                  Перейти в корзину
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;