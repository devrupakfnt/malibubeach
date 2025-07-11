import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const categories = ['Business', 'Lifestyle', 'Political', 'Sports', 'Education', 'Technology'];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[18]">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mr-3 mt-1">
              <img src='image.png' className="text-yellow-400 font-bold text-xl" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                <span className="text-yellow-500">Malibu </span> Beach  <span className="text-yellow-500">Magazine</span>
              </h1>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                {new Date().toLocaleDateString('en-US', {
                  weekday: 'long',   // Adds the day name
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }).replace(',', '')}
              </p>

            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">
              About
            </Link>

            {/* Categories Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="flex items-center text-gray-700 hover:text-yellow-500 transition-colors font-medium"
              >
                Categories
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isCategoryOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      to={`/category/${category.toLowerCase()}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-yellow-500 transition-colors"
                      onClick={() => setIsCategoryOpen(false)}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/articles" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">
              Articles
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">
              Contact
            </Link>
            <Link to="/faq" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">
              FAQ
            </Link>
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-yellow-500 transition-colors">
              <Search className="h-5 w-5" />
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-yellow-500 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">
                About
              </Link>

              <div>
                <button
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  className="flex items-center text-gray-700 hover:text-yellow-500 transition-colors font-medium"
                >
                  Categories
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {isCategoryOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {categories.map((category) => (
                      <Link
                        key={category}
                        to={`/category/${category.toLowerCase()}`}
                        className="block text-gray-600 hover:text-yellow-500 transition-colors"
                        onClick={() => {
                          setIsCategoryOpen(false);
                          setIsMenuOpen(false);
                        }}
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/articles" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">
                Articles
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">
                Contact
              </Link>
              <Link to="/faq" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">
                FAQ
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;