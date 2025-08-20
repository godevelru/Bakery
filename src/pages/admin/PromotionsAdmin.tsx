import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Plus, Edit, Trash2, Eye, Calendar, Percent, Gift } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const PromotionsAdmin: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const promotions = [
    {
      id: '1',
      title: 'Скидка 20% на все торты',
      type: 'discount',
      value: 20,
      code: 'CAKE20',
      validFrom: '2024-01-01',
      validUntil: '2024-02-29',
      isActive: true,
      usageCount: 45,
      usageLimit: 100,
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg'
    },
    {
      id: '2',
      title: 'Бесплатная доставка',
      type: 'delivery',
      value: 0,
      code: 'DELIVERY',
      validFrom: '2024-01-15',
      validUntil: '2024-02-15',
      isActive: true,
      usageCount: 128,
      usageLimit: 200,
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg'
    },
    {
      id: '3',
      title: '3+1 на круассаны',
      type: 'gift',
      value: 25,
      code: 'CROISSANT3',
      validFrom: '2024-01-10',
      validUntil: '2024-02-20',
      isActive: false,
      usageCount: 23,
      usageLimit: 50,
      image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'discount': return Percent;
      case 'delivery': return Calendar;
      case 'gift': return Gift;
      default: return Gift;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'discount': return 'bg-red-100 text-red-800';
      case 'delivery': return 'bg-blue-100 text-blue-800';
      case 'gift': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredPromotions = promotions.filter(promotion =>
    promotion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    promotion.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Управление акциями
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Создавайте и управляйте промо-акциями и скидками
            </p>
          </div>
          <Button className="bg-amber-600 hover:bg-amber-700">
            <Plus className="w-4 h-4 mr-2" />
            Создать акцию
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Поиск акций..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Акция</TableHead>
                  <TableHead>Тип</TableHead>
                  <TableHead>Код</TableHead>
                  <TableHead>Период действия</TableHead>
                  <TableHead>Использование</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead>Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPromotions.map((promotion) => {
                  const TypeIcon = getTypeIcon(promotion.type);
                  return (
                    <TableRow key={promotion.id}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <img
                            src={promotion.image}
                            alt={promotion.title}
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                          <div>
                            <div className="font-medium">{promotion.title}</div>
                            <div className="text-sm text-gray-500">
                              {promotion.type === 'discount' ? `${promotion.value}% скидка` :
                               promotion.type === 'delivery' ? 'Бесплатная доставка' :
                               `${promotion.value}% при покупке 3+1`}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getTypeColor(promotion.type)}>
                          <TypeIcon className="w-3 h-3 mr-1" />
                          {promotion.type === 'discount' ? 'Скидка' :
                           promotion.type === 'delivery' ? 'Доставка' : 'Подарок'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                          {promotion.code}
                        </code>
                      </TableCell>
                      <TableCell className="text-sm">
                        <div>{promotion.validFrom}</div>
                        <div>{promotion.validUntil}</div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>{promotion.usageCount} / {promotion.usageLimit}</div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                            <div 
                              className="bg-amber-600 h-2 rounded-full" 
                              style={{ width: `${(promotion.usageCount / promotion.usageLimit) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={promotion.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                          {promotion.isActive ? 'Активна' : 'Неактивна'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="icon">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default PromotionsAdmin;