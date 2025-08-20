import React from 'react';
import { Button } from '@/components/ui/button';
import { Grid, List, ArrowUpDown } from 'lucide-react';

interface ProductSortProps {
  sortBy: string;
  onSortChange: (sort: string) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  totalProducts: number;
}

const ProductSort: React.FC<ProductSortProps> = ({
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
  totalProducts
}) => {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">
          Найдено товаров: <span className="font-semibold">{totalProducts}</span>
        </span>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <ArrowUpDown className="w-4 h-4 text-gray-400" />
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-amber-500 focus:outline-none"
          >
            <option value="name">По названию</option>
            <option value="price-asc">Цена: по возрастанию</option>
            <option value="price-desc">Цена: по убыванию</option>
            <option value="weight">По весу</option>
            <option value="popularity">По популярности</option>
            <option value="newest">Новинки</option>
          </select>
        </div>

        <div className="flex items-center border border-gray-300 rounded-lg">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onViewModeChange('grid')}
            className="rounded-r-none"
          >
            <Grid className="w-4 h-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onViewModeChange('list')}
            className="rounded-l-none"
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductSort;