import React from 'react';
import { useParams } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import { articles } from '../data/articles';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const categoryName = category?.charAt(0).toUpperCase() + category?.slice(1);
  
  const categoryArticles = articles.filter(
    article => article.category.toLowerCase() === category?.toLowerCase()
  );

  if (categoryArticles.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600">No articles found for this category.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {categoryName} Articles
          </h1>
          <p className="text-xl text-gray-600">
            Discover our latest {categoryName?.toLowerCase()} coverage and insights
          </p>
          <div className="mt-4">
            <span className="inline-block bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {categoryArticles.length} Articles
            </span>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryArticles.map((article) => (
            <ArticleCard key={article.id} article={article} size="medium" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;