import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, Star } from 'lucide-react';

interface RelatedProductsProps {
  currentProductId: string;
  category: string;
  products: Product[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ 
  currentProductId, 
  category, 
  products 
}) => {
  const { dispatch } = useCart();

  const relatedProducts = products
    .filter(p => p.category === category && p.id !== currentProductId)
    .slice(0, 4);

  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', product });
  };

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Похожие товары
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-cover"
              />
              <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                {product.price} ₽
              </div>
            </div>
            
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                {product.name}
              </h3>
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500">(4.8)</span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">
                {product.description}
              </p>
            </CardContent>
            
            <CardFooter className="p-4 pt-0 flex gap-2">
              <Link to={`/product/${product.id}`} className="flex-1">
                <Button variant="outline" size="sm" className="w-full">
                  Подробнее
                </Button>
              </Link>
              <Button 
                size="sm"
                onClick={() => addToCart(product)}
                className="bg-amber-600 hover:bg-amber-700"
              >
                <ShoppingCart className="w-3 h-3" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;