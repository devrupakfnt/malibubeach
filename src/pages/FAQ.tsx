import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openItems, setOpenItems] = useState<string[]>([]);

  const faqData: FAQItem[] = [
    {
      id: '1',
      question: 'How often is new content published?',
      answer: 'We publish new articles daily, with major features released weekly. Our editorial calendar ensures fresh content across all our categories throughout the week.',
      category: 'General'
    },
    {
      id: '2',
      question: 'How can I subscribe to the newsletter?',
      answer: 'You can subscribe to our newsletter by entering your email address in the subscription form on our homepage or at the bottom of any article. You\'ll receive weekly updates with our latest articles and exclusive content.',
      category: 'Subscription'
    },
    {
      id: '3',
      question: 'Can I submit a story or article pitch?',
      answer: 'Yes! We welcome story pitches and freelance submissions. Please send your pitch to editorial@malibumagazine.com with a brief summary, your credentials, and any relevant supporting materials.',
      category: 'Editorial'
    },
    {
      id: '4',
      question: 'How do I contact the editorial team?',
      answer: 'You can reach our editorial team at editorial@malibumagazine.com or through our contact form. For urgent news tips, call our editorial hotline at (555) 123-4568.',
      category: 'Editorial'
    },
    {
      id: '5',
      question: 'Do you accept advertising?',
      answer: 'Yes, we offer various advertising opportunities including display ads, sponsored content, and newsletter placements. Contact our advertising team at ads@malibumagazine.com for rates and availability.',
      category: 'Business'
    },
    {
      id: '6',
      question: 'Is the content free to read?',
      answer: 'Yes, all our articles are free to read. We believe in making quality journalism accessible to everyone. Premium features like ad-free reading and exclusive content are available through our membership program.',
      category: 'Subscription'
    },
    {
      id: '7',
      question: 'How can I share articles on social media?',
      answer: 'Every article includes social sharing buttons for Facebook, Twitter, and LinkedIn. You can also copy the article URL and share it directly on any platform.',
      category: 'General'
    },
    {
      id: '8',
      question: 'Do you have a mobile app?',
      answer: 'Currently, we don\'t have a dedicated mobile app, but our website is fully optimized for mobile devices. You can access all our content seamlessly on your smartphone or tablet.',
      category: 'Technical'
    },
    {
      id: '9',
      question: 'How do I report an error in an article?',
      answer: 'We take accuracy seriously. If you notice an error, please email corrections@malibumagazine.com with the article title, URL, and details about the error. We\'ll review and correct it promptly.',
      category: 'Editorial'
    },
    {
      id: '10',
      question: 'Can I republish or reprint articles?',
      answer: 'Articles are protected by copyright. For reprint permissions, licensing, or syndication inquiries, please contact rights@malibumagazine.com with your request details.',
      category: 'Legal'
    }
  ];

  const categories = ['All', ...Array.from(new Set(faqData.map(item => item.category)))];

  const filteredFAQs = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Malibu Magazine, our content, and services.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {faq.question}
                    </h3>
                    <span className="inline-block bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">
                      {faq.category}
                    </span>
                  </div>
                  {openItems.includes(faq.id) ? (
                    <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0 ml-4" />
                  )}
                </button>
                
                {openItems.includes(faq.id) && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-16 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No FAQs found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search terms or selecting a different category.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Still need help section */}
        <div className="mt-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
          <p className="text-lg mb-6 opacity-90">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-amber-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;