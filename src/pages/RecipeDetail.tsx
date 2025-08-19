import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { recipes } from '@/data/recipes';
import { ArrowLeft, Clock, Users, ChefHat, CheckCircle } from 'lucide-react';

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Рецепт не найден</h1>
          <Link to="/recipes">
            <Button>Вернуться к рецептам</Button>
          </Link>
        </div>
      </Layout>
    );
  }

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
        <Link to="/recipes" className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Вернуться к рецептам
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-96 object-cover rounded-2xl shadow-lg mb-8"
            />

            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
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
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {recipe.name}
              </h1>
              <p className="text-xl text-gray-600">
                {recipe.description}
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Пошаговый рецепт</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 flex-1 pt-1">
                        {instruction}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Время приготовления</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <ChefHat className="w-5 h-5 text-amber-600" />
                    <span>Подготовка</span>
                  </div>
                  <span className="font-semibold">{recipe.prepTime} мин</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-amber-600" />
                    <span>Выпечка</span>
                  </div>
                  <span className="font-semibold">{recipe.cookTime} мин</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-amber-600" />
                    <span className="font-semibold">Общее время</span>
                  </div>
                  <span className="font-bold text-amber-600">
                    {recipe.prepTime + recipe.cookTime} мин
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ингредиенты</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      <span className="text-gray-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-amber-50">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Не хотите готовить сами?
                </h3>
                <p className="text-gray-600 mb-4">
                  Закажите готовую выпечку с доставкой
                </p>
                <Link to="/catalog">
                  <Button className="bg-amber-600 hover:bg-amber-700">
                    Заказать готовое
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RecipeDetail;