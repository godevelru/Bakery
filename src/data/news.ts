import { NewsArticle } from '@/types';

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Новая линейка безглютеновой выпечки',
    content: 'Мы рады представить новую линейку безглютеновой выпечки для людей с особыми диетическими потребностями...',
    excerpt: 'Представляем новую линейку безглютеновой выпечки',
    image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg',
    publishedAt: new Date('2024-01-15'),
    author: 'Анна Петрова'
  },
  {
    id: '2',
    title: 'Мастер-класс по выпечке хлеба',
    content: 'Приглашаем на мастер-класс по выпечке домашнего хлеба. Научитесь готовить настоящий хлеб на закваске...',
    excerpt: 'Мастер-класс по выпечке домашнего хлеба на закваске',
    image: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg',
    publishedAt: new Date('2024-01-10'),
    author: 'Михаил Иванов'
  }
];