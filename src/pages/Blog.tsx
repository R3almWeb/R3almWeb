import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, ArrowRight, Filter, User } from 'lucide-react';
import { articles, categories } from '../data/articles';

export function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  

  const filteredPosts = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#121212] to-[#1E1E1E] blockchain-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              R3alm <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed with the latest trends, insights, and updates from the world of Web3 finance
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-colors duration-300"
                />
              </div>
              
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-12 pr-8 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-colors duration-300"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#00BFFF] text-white'
                      : 'bg-[#1E1E1E] text-gray-400 hover:bg-[#333] hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 slide-up">
              {filteredPosts.map((article, index) => (
                <Link
                  key={article.id}
                  to={`/blog/${article.id}`}
                  className={`group slide-up stagger-${(index % 3) + 1}`}
                >
                  <div className="glass-effect rounded-xl overflow-hidden scale-on-hover">
                    <div className="relative h-48">
                      <img 
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#00BFFF] text-white px-3 py-1 rounded-full text-sm font-medium pulse-glow">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-gray-400 text-sm mb-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#00BFFF] transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500 text-xs">
                          <User className="h-3 w-3 mr-1" />
                          {article.author}
                        </div>
                        <div className="text-gray-500 text-xs">{article.readTime}</div>
                      </div>
                      <div className="flex items-center text-[#00BFFF] group-hover:text-[#FFD700] transition-colors duration-300">
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-400">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}