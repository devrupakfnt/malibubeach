import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  size?: 'small' | 'medium' | 'large';
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, size = 'medium' }) => {
  const sizeClasses = {
    small: 'h-48',
    medium: 'h-64',
    large: 'h-80'
  };

  const textSizes = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg'
  };

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <Link to={`/article/${article.id}`}>
        <div className={`relative ${sizeClasses[size]} overflow-hidden`}>
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-block bg-yellow-500 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
              {article.category}
            </span>
          </div>
          {article.trending && (
            <div className="absolute top-4 right-4">
              <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Trending
              </span>
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-6">
        <Link to={`/article/${article.id}`}>
          <h3 className={`font-bold text-gray-900 mb-2 hover:text-yellow-500 transition-colors line-clamp-2 ${textSizes[size]}`}>
            {article.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{article.readTime} min read</span>
            </div>
          </div>
          <span className="text-xs">
            {new Date(article.publishedAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;