import React, { useState, useMemo } from 'react';
import Layout from '@/components/layout/Layout';
import { products } from '@/data/products';
import ProductFilters from '@/components/catalog/ProductFilters';
import ProductGrid from '@/components/catalog/ProductGrid';
import ProductSort from '@/components/catalog/ProductSort';
import ProductPagination from '@/components/catalog/ProductPagination';

const Catalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesIngredients = selectedIngredients.length === 0 || 
        selectedIngredients.some(ingredient => 
          product.ingredients.some(prodIngredient => 
            prodIngredient.toLowerCase().includes(ingredient.toLowerCase())
          )
        );
      
      return matchesCategory && matchesSearch && matchesPrice && matchesIngredients;
    });

    // Сортировка
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'weight':
          return b.weight - a.weight;
        case 'popularity':
          return Math.random() - 0.5; // Случайная сортировка для демо
        case 'newest':
          return Math.random() - 0.5; // Случайная сортировка для демо
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [products, selectedCategory, searchQuery, priceRange, selectedIngredients, sortBy]);

  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const clearFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setPriceRange([0, 1000]);
    setSelectedIngredients([]);
    setCurrentPage(1);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Каталог продукции</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите свежую выпечку на любой вкус из нашего широкого ассортимента
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-80">
            <ProductFilters
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
              selectedIngredients={selectedIngredients}
              onIngredientsChange={setSelectedIngredients}
              onClearFilters={clearFilters}
            />
          </aside>

          <div className="flex-1 space-y-6">
            <ProductSort
              sortBy={sortBy}
              onSortChange={setSortBy}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              totalProducts={filteredAndSortedProducts.length}
            />

            <ProductGrid products={paginatedProducts} viewMode={viewMode} />

            {filteredAndSortedProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Товары не найдены
                </h3>
                <p className="text-gray-600 mb-4">
                  Попробуйте изменить параметры поиска или фильтры
                </p>
                <Button onClick={clearFilters} variant="outline">
                  Сбросить фильтры
                </Button>
              </div>
            )}

            {totalPages > 1 && (
              <ProductPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                itemsPerPage={itemsPerPage}
                onItemsPerPageChange={setItemsPerPage}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Catalog;