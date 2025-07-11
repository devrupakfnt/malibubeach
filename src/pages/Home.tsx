import React from 'react';
import BreakingNews from '../components/BreakingNews';
import FeaturedArticle from '../components/FeaturedArticle';
import ArticleCard from '../components/ArticleCard';
import { articles } from '../data/articles';
import { TrendingUp, Clock, Star, Users, Award, Globe, Calendar, Eye, MessageCircle } from 'lucide-react';

const Home: React.FC = () => {
  const featuredArticles = articles.filter(article => article.featured);
  const trendingArticles = articles.filter(article => article.trending);
  const recentArticles = articles
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 6);

  const businessArticles = articles.filter(article => article.category === 'Business').slice(0, 3);
  const sportsArticles = articles.filter(article => article.category === 'Sports').slice(0, 3);
  const lifestyleArticles = articles.filter(article => article.category === 'Lifestyle').slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <BreakingNews />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {featuredArticles[0] && <FeaturedArticle article={featuredArticles[0]} />}
            </div>
            <div className="space-y-5">
              {/* Ad Space */}

              <div className="text-gray-500">
                <div className="w-full bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <img src='12.gif' className="w-auto h-42" />
                </div>


              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="h-6 w-6 text-red-500 mr-2" />
                  Trending Now
                </h2>
                <div className="space-y-4">
                  {trendingArticles.slice(0, 3).map((article, index) => (
                    <div key={article.id} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-sm leading-tight hover:text-yellow-500 transition-colors cursor-pointer">
                          {article.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">{article.readTime} min read</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-8 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-gray-800" />
                </div>
                <div className="text-2xl font-bold text-yellow-400">2.5M+</div>
                <div className="text-sm text-gray-300">Monthly Readers</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-gray-800" />
                </div>
                <div className="text-2xl font-bold text-yellow-400">15+</div>
                <div className="text-sm text-gray-300">Awards Won</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="h-6 w-6 text-gray-800" />
                </div>
                <div className="text-2xl font-bold text-yellow-400">50+</div>
                <div className="text-sm text-gray-300">Countries</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="h-6 w-6 text-gray-800" />
                </div>
                <div className="text-2xl font-bold text-yellow-400">20+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Star className="h-8 w-8 text-yellow-500 mr-3" />
            Featured Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.slice(1).map((article) => (
              <ArticleCard key={article.id} article={article} size="medium" />
            ))}
          </div>
        </section>

        {/* Ad Banner */}
        <section className="mb-12">
       
             <div className="w-full bg-stone-900 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <img src='final.gif' className="w-[800px] h-auto" />
              </div>
          
        </section>

        {/* Category Sections */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Business */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-yellow-500 pb-2">
                Business
              </h3>
              <div className="space-y-6">
                {businessArticles.map((article) => (
                  <div key={article.id} className="flex space-x-4 bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm leading-tight hover:text-yellow-500 transition-colors cursor-pointer line-clamp-2">
                        {article.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{article.readTime} min read</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sports */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-yellow-500 pb-2">
                Sports
              </h3>
              <div className="space-y-6">
                {sportsArticles.map((article) => (
                  <div key={article.id} className="flex space-x-4 bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm leading-tight hover:text-yellow-500 transition-colors cursor-pointer line-clamp-2">
                        {article.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{article.readTime} min read</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lifestyle */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-yellow-500 pb-2">
                Lifestyle
              </h3>
              <div className="space-y-6">
                {lifestyleArticles.map((article) => (
                  <div key={article.id} className="flex space-x-4 bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm leading-tight hover:text-yellow-500 transition-colors cursor-pointer line-clamp-2">
                        {article.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{article.readTime} min read</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Most Recent */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Clock className="h-8 w-8 text-blue-500 mr-3" />
            Most Recent
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article) => (
              <ArticleCard key={article.id} article={article} size="medium" />
            ))}
          </div>
        </section>

        {/* Editor's Pick */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Eye className="h-8 w-8 text-purple-500 mr-3" />
              Editor's Pick
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {articles.slice(0, 3).map((article) => (
                  <div key={article.id} className="flex space-x-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1">
                      <span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium mb-2">
                        {article.category}
                      </span>
                      <h4 className="font-semibold text-gray-900 leading-tight hover:text-yellow-500 transition-colors cursor-pointer line-clamp-2">
                        {article.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-2">{article.author} • {article.readTime} min read</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Ad Space */}
              
                 <div className="w-full bg-stone-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <img src='mms.png' className="w-auto md:h-[430px] sm:h-auto" />
              
              </div>
            </div>
          </div>
        </section>

        {/* Popular Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Business', 'Lifestyle', 'Political', 'Sports', 'Education', 'Technology'].map((category) => (
              <div
                key={category}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group border-l-4 border-yellow-500"
              >
                <h3 className="font-semibold text-gray-900 text-center group-hover:text-yellow-500 transition-colors">
                  {category}
                </h3>
                <p className="text-sm text-gray-500 text-center mt-2">
                  {articles.filter(a => a.category === category).length} articles
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-8 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="h-8 w-8 text-gray-800" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
            <p className="text-xl mb-6 opacity-90">Get the latest news and insights delivered to your inbox weekly.</p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-300 mt-4">Join 50,000+ subscribers. No spam, unsubscribe anytime.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;