import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Search, Filter, X } from 'lucide-react';
import { categories } from '@/data/products';

interface ProductFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  selectedIngredients: string[];
  onIngredientsChange: (ingredients: string[]) => void;
  onClearFilters: () => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  selectedIngredients,
  onIngredientsChange,
  onClearFilters
}) => {
  const ingredients = [
    'мука пшеничная',
    'мука ржаная',
    'дрожжи',
    'сахар',
    'масло сливочное',
    'яйца',
    'молоко',
    'шоколад',
    'ванилин',
    'орехи'
  ];

  const handleIngredientChange = (ingredient: string, checked: boolean) => {
    if (checked) {
      onIngredientsChange([...selectedIngredients, ingredient]);
    } else {
      onIngredientsChange(selectedIngredients.filter(i => i !== ingredient));
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              Фильтры
            </span>
            <Button variant="ghost" size="sm" onClick={onClearFilters}>
              <X className="w-4 h-4 mr-1" />
              Очистить
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Поиск
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Найти продукт..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Категории
            </label>
            <div className="space-y-2">
              <button
                onClick={() => onCategoryChange('all')}
                className={`w-full text-left p-2 rounded ${
                  selectedCategory === 'all' ? 'bg-amber-100 text-amber-700' : 'hover:bg-gray-100'
                }`}
              >
                Все категории
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => onCategoryChange(category.id)}
                  className={`w-full text-left p-2 rounded flex items-center space-x-2 ${
                    selectedCategory === category.id ? 'bg-amber-100 text-amber-700' : 'hover:bg-gray-100'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Цена: {priceRange[0]} - {priceRange[1]} ₽
            </label>
            <Slider
              value={priceRange}
              onValueChange={(value) => onPriceRangeChange(value as [number, number])}
              max={1000}
              min={0}
              step={50}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Ингредиенты
            </label>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {ingredients.map((ingredient) => (
                <div key={ingredient} className="flex items-center space-x-2">
                  <Checkbox
                    id={ingredient}
                    checked={selectedIngredients.includes(ingredient)}
                    onCheckedChange={(checked) => 
                      handleIngredientChange(ingredient, checked as boolean)
                    }
                  />
                  <label
                    htmlFor={ingredient}
                    className="text-sm text-gray-700 cursor-pointer"
                  >
                    {ingredient}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductFilters;