import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductGallery from '@/components/product/ProductGallery';
import ProductReviews from '@/components/product/ProductReviews';
import RelatedProducts from '@/components/product/RelatedProducts';
import { 
  ShoppingCart, 
  ArrowLeft, 
  Clock, 
  Weight, 
  ChefHat, 
  Heart,
  Share2,
  Truck,
  Shield,
  Award,
  Minus,
  Plus
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { dispatch } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = React.useState(1);
  const [selectedVariant, setSelectedVariant] = React.useState(0);
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

  // Расширенная информация о продукте
  const productImages = [product.image, product.image, product.image];
  const variants = [
    { name: 'Стандартный', price: product.price, weight: product.weight },
    { name: 'Большой', price: Math.round(product.price * 1.5), weight: Math.round(product.weight * 1.5) },
    { name: 'Семейный', price: Math.round(product.price * 2.2), weight: Math.round(product.weight * 2.5) }
  ];

  const nutritionInfo = {
    calories: 274,
    protein: 9.1,
    carbs: 55.8,
    fat: 1.2,
    fiber: 2.3,
    allergens: ['глютен']
  };

  const addToCart = () => {
    const selectedProduct = {
      ...product,
      price: variants[selectedVariant].price,
      weight: variants[selectedVariant].weight,
      name: `${product.name} (${variants[selectedVariant].name})`
    };
    
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: 'ADD_ITEM', product: selectedProduct });
    }
    
    toast({
      title: 'Товар добавлен в корзину',
      description: `${selectedProduct.name} x${quantity}`
    });
  };

  const addToFavorites = () => {
    toast({
      title: 'Добавлено в избранное',
      description: product.name
    });
  };

  const shareProduct = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: 'Ссылка скопирована',
        description: 'Ссылка на товар скопирована в буфер обмена'
      });
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Link to="/catalog" className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Вернуться к каталогу
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <ProductGallery 
              images={productImages} 
              productName={product.name}
            />
          </div>

          <div>
            <div className="mb-6">
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-4xl font-bold text-gray-900 flex-1">
                  {product.name}
                </h1>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" onClick={addToFavorites}>
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={shareProduct}>
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold">4.8</span>
                </div>
                <span className="text-gray-500">(127 отзывов)</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Выберите размер:</h3>
              <div className="grid grid-cols-3 gap-3">
                {variants.map((variant, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedVariant(index)}
                    className={`p-3 rounded-lg border-2 transition-colors ${
                      selectedVariant === index
                        ? 'border-amber-500 bg-amber-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-semibold">{variant.name}</div>
                    <div className="text-sm text-gray-600">{variant.weight}г</div>
                    <div className="text-amber-600 font-semibold">{variant.price} ₽</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Weight className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                <div className="text-sm text-gray-500">Вес</div>
                <div className="font-semibold">{variants[selectedVariant].weight}г</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Clock className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                <div className="text-sm text-gray-500">Приготовление</div>
                <div className="font-semibold">{product.preparationTime} мин</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <ChefHat className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                <div className="text-sm text-gray-500">Статус</div>
                <div className="font-semibold text-green-600">
                  {product.available ? 'В наличии' : 'Нет в наличии'}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Количество:</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-16 text-center font-semibold text-lg">
                    {quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="text-sm text-gray-500">
                  Общий вес: {variants[selectedVariant].weight * quantity}г
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6 p-4 bg-amber-50 rounded-lg">
              <div>
                <div className="text-sm text-gray-600">Цена за штуку:</div>
                <div className="text-2xl font-bold text-amber-600">
                  {variants[selectedVariant].price} ₽
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Итого:</div>
                <div className="text-3xl font-bold text-gray-900">
                  {variants[selectedVariant].price * quantity} ₽
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button 
                onClick={addToCart}
                size="lg"
                className="w-full bg-amber-600 hover:bg-amber-700"
                disabled={!product.available}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Добавить в корзину
              </Button>
              
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="lg">
                  <Heart className="w-4 h-4 mr-2" />
                  В избранное
                </Button>
                <Link to="/cart">
                  <Button variant="outline" size="lg" className="w-full">
                    Перейти в корзину
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Truck className="w-4 h-4 text-green-600" />
                <span>Доставка 1-3 часа</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-blue-600" />
                <span>Гарантия качества</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Award className="w-4 h-4 text-purple-600" />
                <span>Натуральные ингредиенты</span>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="description">Описание</TabsTrigger>
            <TabsTrigger value="ingredients">Состав</TabsTrigger>
            <TabsTrigger value="nutrition">Пищевая ценность</TabsTrigger>
            <TabsTrigger value="delivery">Доставка</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Подробное описание
                </h3>
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {product.description} Этот продукт изготавливается по традиционной рецептуре 
                    с использованием только натуральных ингредиентов высшего качества.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Наши мастера-пекари начинают работу с раннего утра, чтобы к открытию 
                    магазина у нас была свежая, ароматная выпечка. Каждое изделие проходит 
                    строгий контроль качества.
                  </p>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Особенности:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Выпекается ежедневно</li>
                    <li>Без консервантов и искусственных добавок</li>
                    <li>Традиционная рецептура</li>
                    <li>Контроль качества на всех этапах</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ingredients" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Состав продукта
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Ингредиенты:</h4>
                    <div className="space-y-2">
                      {product.ingredients.map((ingredient, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                          <span className="text-gray-700">{ingredient}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Аллергены:</h4>
                    <div className="flex flex-wrap gap-2">
                      {nutritionInfo.allergens.map((allergen, index) => (
                        <Badge key={index} variant="outline" className="text-red-600 border-red-200">
                          {allergen}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-3">
                      Продукт может содержать следы орехов, молока и яиц.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="nutrition" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Пищевая ценность на 100г
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">{nutritionInfo.calories}</div>
                    <div className="text-sm text-gray-500">ккал</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{nutritionInfo.protein}г</div>
                    <div className="text-sm text-gray-500">белки</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">{nutritionInfo.carbs}г</div>
                    <div className="text-sm text-gray-500">углеводы</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">{nutritionInfo.fat}г</div>
                    <div className="text-sm text-gray-500">жиры</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{nutritionInfo.fiber}г</div>
                    <div className="text-sm text-gray-500">клетчатка</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="delivery" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Условия доставки
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                    <Truck className="w-6 h-6 text-green-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Быстрая доставка</div>
                      <div className="text-sm text-gray-600">По Москве в течение 1-3 часов</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                    <Shield className="w-6 h-6 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Гарантия свежести</div>
                      <div className="text-sm text-gray-600">Доставляем только свежую продукцию</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Стоимость доставки:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Бесплатно при заказе от 1500₽</li>
                        <li>• 200₽ при заказе до 1500₽</li>
                        <li>• Экспресс-доставка: +300₽</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Время работы:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Пн-Пт: 8:00 - 22:00</li>
                        <li>• Сб-Вс: 9:00 - 21:00</li>
                        <li>• Предзаказ: за 2 часа</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <ProductReviews productId={product.id} />
          </div>
          
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Рекомендации</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg">
                    <ChefHat className="w-5 h-5 text-amber-600" />
                    <div className="text-sm">
                      <div className="font-semibold">Совет пекаря</div>
                      <div className="text-gray-600">Лучше всего употреблять в течение 2 дней</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Award className="w-5 h-5 text-blue-600" />
                    <div className="text-sm">
                      <div className="font-semibold">Сочетается с</div>
                      <div className="text-gray-600">Кофе, чай, джем, масло</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Условия хранения</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-600 space-y-2">
                  <div>• Хранить при температуре 18-25°C</div>
                  <div>• Избегать прямых солнечных лучей</div>
                  <div>• Срок годности: 2-3 дня</div>
                  <div>• В холодильнике: до 5 дней</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <RelatedProducts
          currentProductId={product.id}
          category={product.category}
          products={products}
        />
      </div>
    </Layout>
  );
};

export default ProductDetail;
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