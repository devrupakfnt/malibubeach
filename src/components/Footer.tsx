import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                <span className="text-yellow-400 font-bold text-xl">MB</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  <span className="text-yellow-500">Malibu</span> Beach
                </h3>
                <p className="text-xs text-gray-400 uppercase tracking-wide">MAGAZINE</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your premier source for insightful journalism, covering business, lifestyle, politics, sports, and education with excellence and integrity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  All Articles
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/category/business" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Business
                </Link>
              </li>
              <li>
                <Link to="/category/lifestyle" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link to="/category/political" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Political
                </Link>
              </li>
              <li>
                <Link to="/category/sports" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Sports
                </Link>
              </li>
              <li>
                <Link to="/category/education" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Education
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                <span className="text-gray-300">123 Magazine St, Malibu, CA 90265</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                <span className="text-gray-300">info@malibubeachmagazine.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Malibu Magazine. All rights reserved. Crafted with ❤️ by <a className='text-yellow-500' href='https://marchstreetmedia.com'>March Street Media</a> | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;