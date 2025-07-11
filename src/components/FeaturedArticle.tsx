import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';
import { Article } from '../types';

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  return (
    <article className="relative h-96 md:h-[550px] rounded-lg overflow-hidden group cursor-pointer">
      <Link to={`/article/${article.id}`}>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="flex items-center space-x-4 mb-4">
            <span className="inline-block bg-yellow-500 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
              {article.category}
            </span>
            {article.featured && (
              <span className="inline-block bg-blue-500 px-3 py-1 rounded-full text-xs font-semibold">
                Featured
              </span>
            )}
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight hover:text-yellow-300 transition-colors">
            {article.title}
          </h2>
          
          <p className="text-gray-200 mb-4 line-clamp-2 text-lg leading-relaxed">
            {article.excerpt}
          </p>
          
          <div className="flex items-center space-x-6 text-sm text-gray-300">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{article.readTime} min read</span>
            </div>
            <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default FeaturedArticle;