import React from 'react';
import { breakingNews } from '../data/articles';

const BreakingNews: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white py-2 overflow-hidden relative z-40">
      <div className="flex items-center h-8">
        <div className="flex-shrink-0 bg-yellow-500 text-gray-800 px-4 py-1 text-sm font-bold whitespace-nowrap">
          BREAKING NEWS
        </div>
        <div className="flex-1 relative overflow-hidden ml-4">
          <div className="animate-marquee whitespace-nowrap">
            {breakingNews.map((news, index) => (
              <span key={index} className="inline-block px-8 text-sm">
                {news}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;