import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';

const ProductsSection: React.FC = () => {
  const { dispatch } = useCart();
  const featuredProducts = products.slice(0, 6);

  const addToCart = (product: any) => {
    dispatch({ type: 'ADD_ITEM', product });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Популярная продукция
          </h2>
          <p className="text-xl text-gray-600">
            Самые любимые позиции наших клиентов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                  {product.price} ₽
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <div className="text-sm text-gray-500">
                  Вес: {product.weight}г • Время приготовления: {product.preparationTime} мин
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0 flex gap-2">
                <Link to={`/product/${product.id}`} className="flex-1">
                  <Button variant="outline" className="w-full">
                    Подробнее
                  </Button>
                </Link>
                <Button 
                  onClick={() => addToCart(product)}
                  className="bg-amber-600 hover:bg-amber-700"
                >
                  <ShoppingCart className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/catalog">
            <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
              Посмотреть весь каталог
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;