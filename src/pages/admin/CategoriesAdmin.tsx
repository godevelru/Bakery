import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { categories } from '@/data/products';
import { Plus, Edit, Trash2, GripVertical } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const CategoriesAdmin: React.FC = () => {
  const [isAddingCategory, setIsAddingCategory] = useState(false);

  const extendedCategories = categories.map((cat, index) => ({
    ...cat,
    description: `Описание категории ${cat.name}`,
    isActive: true,
    sortOrder: index + 1,
    productCount: Math.floor(Math.random() * 20) + 5
  }));

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Управление категориями
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Организуйте товары по категориям
            </p>
          </div>
          <Button 
            className="bg-amber-600 hover:bg-amber-700"
            onClick={() => setIsAddingCategory(true)}
          >
            <Plus className="w-4 h-4 mr-2" />
            Добавить категорию
          </Button>
        </div>

        {isAddingCategory && (
          <Card>
            <CardHeader>
              <CardTitle>Новая категория</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Название категории" />
                <Input placeholder="Иконка (emoji)" />
                <Input placeholder="Описание" className="md:col-span-2" />
                <div className="md:col-span-2 flex gap-2">
                  <Button className="bg-amber-600 hover:bg-amber-700">
                    Сохранить
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsAddingCategory(false)}
                  >
                    Отмена
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12"></TableHead>
                  <TableHead>Категория</TableHead>
                  <TableHead>Описание</TableHead>
                  <TableHead>Товаров</TableHead>
                  <TableHead>Порядок</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead>Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {extendedCategories.map((category) => (
                  <TableRow key={category.id}>
                    <TableCell>
                      <GripVertical className="w-4 h-4 text-gray-400 cursor-move" />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{category.icon}</span>
                        <span className="font-medium">{category.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {category.description}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{category.productCount} товаров</Badge>
                    </TableCell>
                    <TableCell>{category.sortOrder}</TableCell>
                    <TableCell>
                      <Badge className={category.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                        {category.isActive ? 'Активна' : 'Неактивна'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default CategoriesAdmin;