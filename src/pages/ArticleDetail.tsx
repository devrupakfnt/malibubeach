import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, User, Calendar, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { articles } from '../data/articles';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link to="/" className="text-amber-500 hover:text-amber-600 transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = articles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <span className="inline-block bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {article.category}
            </span>
            {article.trending && (
              <span className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Trending
              </span>
            )}
            {article.featured && (
              <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Featured
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-t border-b border-gray-200">
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span className="font-medium">{article.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{new Date(article.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{article.readTime} min read</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-600 flex items-center">
                <Share2 className="h-5 w-5 mr-2" />
                Share:
              </span>
              <button className="text-blue-600 hover:text-blue-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="text-blue-400 hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="text-blue-700 hover:text-blue-800 transition-colors">
                <Linkedin className="h-5 w-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div 
            className="text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* Tags */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-300 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio 
        <div className="bg-white rounded-lg p-6 shadow-sm mb-12">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{article.author}</h3>
              <p className="text-gray-600">Senior Correspondent</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            {article.author} is a seasoned journalist with over a decade of experience covering {article.category.toLowerCase()} topics. 
            Known for insightful analysis and engaging storytelling, they bring complex subjects to life for readers worldwide.
          </p>
        </div>
        */}

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  to={`/article/${relatedArticle.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <img
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-amber-500 transition-colors line-clamp-2">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {relatedArticle.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

export default ArticleDetail;