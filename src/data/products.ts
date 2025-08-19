import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Французский багет',
    description: 'Классический французский багет с хрустящей корочкой и мягким мякишем',
    price: 120,
    image: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg',
    category: 'bread',
    ingredients: ['мука пшеничная', 'вода', 'соль', 'дрожжи'],
    weight: 300,
    available: true,
    preparationTime: 240
  },
  {
    id: '2',
    name: 'Круассан с шоколадом',
    description: 'Слоёный круассан с тёмным шоколадом, выпеченный по французской технологии',
    price: 85,
    image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg',
    category: 'pastry',
    ingredients: ['мука', 'масло сливочное', 'шоколад', 'яйца', 'молоко'],
    weight: 80,
    available: true,
    preparationTime: 180
  },
  {
    id: '3',
    name: 'Торт "Наполеон"',
    description: 'Многослойный торт с нежным кремом и тонкими коржами',
    price: 890,
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
    category: 'cakes',
    ingredients: ['мука', 'масло', 'яйца', 'сахар', 'ванилин', 'сливки'],
    weight: 1200,
    available: true,
    preparationTime: 360
  },
  {
    id: '4',
    name: 'Ржаной хлеб',
    description: 'Полезный ржаной хлеб на закваске с семенами подсолнечника',
    price: 95,
    image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg',
    category: 'bread',
    ingredients: ['мука ржаная', 'закваска', 'семена подсолнечника', 'соль'],
    weight: 400,
    available: true,
    preparationTime: 480
  },
  {
    id: '5',
    name: 'Эклеры с кремом',
    description: 'Воздушные эклеры с заварным кремом и глазурью',
    price: 65,
    image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg',
    category: 'pastry',
    ingredients: ['мука', 'яйца', 'масло', 'молоко', 'сахар', 'ванилин'],
    weight: 60,
    available: true,
    preparationTime: 120
  },
  {
    id: '6',
    name: 'Чизкейк "Нью-Йорк"',
    description: 'Классический американский чизкейк с творожным сыром',
    price: 450,
    image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg',
    category: 'cakes',
    ingredients: ['творожный сыр', 'яйца', 'сахар', 'печенье', 'масло'],
    weight: 800,
    available: true,
    preparationTime: 300
  }
];

export const categories = [
  { id: 'bread', name: 'Хлеб', icon: '🍞' },
  { id: 'pastry', name: 'Выпечка', icon: '🥐' },
  { id: 'cakes', name: 'Торты', icon: '🎂' },
  { id: 'cookies', name: 'Печенье', icon: '🍪' },
  { id: 'pies', name: 'Пироги', icon: '🥧' }
];