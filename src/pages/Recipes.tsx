import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { recipes } from '@/data/recipes';
import { Clock, Users, ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';

const Recipes: React.FC = () => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'Легко';
      case 'medium': return 'Средне';
      case 'hard': return 'Сложно';
      default: return difficulty;
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Рецепты</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Делимся секретами приготовления вкусной домашней выпечки
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {recipes.map((recipe) => (
            <Card key={recipe.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-64 object-cover"
              />
              
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className={getDifficultyColor(recipe.difficulty)}>
                    {getDifficultyText(recipe.difficulty)}
                  </Badge>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{recipe.prepTime + recipe.cookTime} мин</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>4-6 порций</span>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-2xl">{recipe.name}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-6">
                  {recipe.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <ChefHat className="w-6 h-6 text-amber-600 mx-auto mb-1" />
                    <div className="text-sm text-gray-500">Подготовка</div>
                    <div className="font-semibold">{recipe.prepTime} мин</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Clock className="w-6 h-6 text-amber-600 mx-auto mb-1" />
                    <div className="text-sm text-gray-500">Выпечка</div>
                    <div className="font-semibold">{recipe.cookTime} мин</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Ингредиенты:</h4>
                  <ul className="space-y-1">
                    {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
                      <li key={index} className="text-gray-600 text-sm">
                        • {ingredient}
                      </li>
                    ))}
                    {recipe.ingredients.length > 3 && (
                      <li className="text-gray-500 text-sm">
                        и ещё {recipe.ingredients.length - 3} ингредиентов...
                      </li>
                    )}
                  </ul>
                </div>

                <Link to={`/recipe/${recipe.id}`}>
                  <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg transition-colors">
                    Посмотреть полный рецепт
                  </button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Recipes;