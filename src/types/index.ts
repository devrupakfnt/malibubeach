export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  publishedAt: string;
  readTime: number;
  image: string;
  featured: boolean;
  trending: boolean;
  tags: string[];
}

export type Category = 'Business' | 'Lifestyle' | 'Political' | 'Sports' | 'Education' | 'Technology';