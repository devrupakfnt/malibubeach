import React from 'react';
import { Users, Award, Globe, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-amber-500">Malibu</span> Beach
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            For over two decades, Malibu Magazine has been at the forefront of exceptional journalism, 
            delivering insightful coverage across business, lifestyle, politics, sports, and education.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            To inform, inspire, and engage our readers through fearless journalism, thoughtful analysis, 
            and compelling storytelling that matters. We believe in the power of quality journalism to 
            shape understanding, drive conversations, and create positive change in our communities.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
            <p className="text-gray-600">
              We uphold the highest standards of journalistic integrity and ethical reporting.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Perspective</h3>
            <p className="text-gray-600">
              Our coverage spans local to international stories with comprehensive analysis.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
            <p className="text-gray-600">
              We foster meaningful connections between our readers and the stories that matter.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
            <p className="text-gray-600">
              We strive for excellence in every story, every interview, and every publication.
            </p>
          </div>
        </div>

        {/* History Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Founded in 2001 in the heart of Malibu, California, our magazine began as a local publication 
              with a simple mission: to tell stories that matter. What started as a small team of passionate 
              journalists has grown into a respected voice in modern journalism.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Over the years, we've expanded our coverage to include national and international stories, 
              while never losing sight of our roots in community journalism. Our award-winning team has 
              covered everything from local business innovations to global political movements.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, Malibu Magazine reaches readers across multiple platforms, maintaining our commitment 
              to quality journalism while embracing new technologies and storytelling methods. We continue 
              to evolve, but our core values remain the same: truth, integrity, and service to our readers.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Editorial Team</h2>
          <p className="text-lg text-gray-600 mb-8">
            Led by experienced journalists and industry experts, our editorial team brings decades 
            of combined experience in journalism, digital media, and storytelling.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rupak Pudasaini</h3>
              <p className="text-gray-600 mb-2">Editor-in-Chief</p>
              <p className="text-sm text-gray-500">
                15+ years in business journalism, formerly with Financial Times
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Saurav Maharjan</h3>
              <p className="text-gray-600 mb-2">Sports Editor</p>
              <p className="text-sm text-gray-500">
                Former ESPN correspondent with expertise in championship coverage
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Nikita Ghimire</h3>
              <p className="text-gray-600 mb-2">Lifestyle Editor</p>
              <p className="text-sm text-gray-500">
                Fashion and lifestyle expert with international magazine experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;