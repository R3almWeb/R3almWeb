import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, ChevronUp, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';
import { faqData, faqCategories, featuredFAQs } from '../data/faq';

export function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#121212] to-[#1E1E1E] blockchain-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <HelpCircle className="h-16 w-16 text-[#00BFFF] mr-4 floating" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about Capital R3alm's services, investments, and platform features
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300 focus:scale-105"
                />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-6 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-colors duration-300"
              >
                {faqCategories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 justify-center">
              {faqCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#00BFFF] text-white pulse-glow'
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

      {/* Featured FAQs */}
      {selectedCategory === 'All' && searchTerm === '' && (
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Most <span className="gradient-text">Popular</span> Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Quick answers to the questions we hear most often
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredFAQs.map((faq, index) => (
                <div key={faq.id} className={`glass-effect rounded-xl p-6 scale-on-hover slide-up stagger-${(index % 3) + 1}`}>
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="w-8 h-8 bg-[#00BFFF] rounded-full flex items-center justify-center flex-shrink-0 pulse-glow">
                      <span className="text-white font-bold text-sm">Q</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white leading-tight text-reveal">{faq.question}</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed text-reveal stagger-1">{faq.answer}</p>
                  <div className="mt-4">
                    <span className="inline-block bg-[#FFD700]/20 text-[#FFD700] px-3 py-1 rounded-full text-xs font-medium">
                      {faq.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All FAQs */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              {selectedCategory === 'All' ? 'All' : selectedCategory} <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-300">
              {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div key={faq.id} className={`glass-effect rounded-xl overflow-hidden slide-up stagger-${(index % 5) + 1}`}>
                  <button
                    onClick={() => toggleExpanded(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#1E1E1E]/80 transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="w-8 h-8 bg-[#00BFFF] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFD700] transition-colors duration-300">
                        <span className="text-white font-bold text-sm">Q</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#00BFFF] transition-colors duration-300">
                          {faq.question}
                        </h3>
                        <span className="inline-block bg-[#FFD700]/20 text-[#FFD700] px-3 py-1 rounded-full text-xs font-medium">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4">
                      {expandedItems.includes(faq.id) ? (
                        <ChevronUp className="h-5 w-5 text-[#00BFFF] group-hover:text-[#FFD700] transition-colors duration-300" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-[#00BFFF] group-hover:text-[#FFD700] transition-colors duration-300" />
                      )}
                    </div>
                  </button>
                  
                  {expandedItems.includes(faq.id) && (
                    <div className="px-6 pb-6 slide-up">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-[#121212] font-bold text-sm">A</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed flex-1">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-400 mb-4">No questions found matching your criteria.</p>
              <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Still Have <span className="gradient-text">Questions?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Our support team is here to help you with any questions not covered in our FAQ
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="glass-effect rounded-xl p-6 scale-on-hover">
              <MessageCircle className="h-12 w-12 text-[#00BFFF] mx-auto mb-4 floating" />
              <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
              <p className="text-gray-400 text-sm mb-4">Get instant answers from our support team</p>
              <button className="px-6 py-2 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic">
                Start Chat
              </button>
            </div>

            <div className="glass-effect rounded-xl p-6 scale-on-hover">
              <Mail className="h-12 w-12 text-[#00BFFF] mx-auto mb-4 floating stagger-1" />
              <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
              <p className="text-gray-400 text-sm mb-4">Send us a detailed message</p>
              <Link
                to="/contact"
                className="inline-block px-6 py-2 border border-[#FFD700] text-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-[#121212] transition-all duration-300 button-magnetic"
              >
                Contact Us
              </Link>
            </div>

            <div className="glass-effect rounded-xl p-6 scale-on-hover">
              <Phone className="h-12 w-12 text-[#00BFFF] mx-auto mb-4 floating stagger-2" />
              <h3 className="text-xl font-bold text-white mb-2">Phone Support</h3>
              <p className="text-gray-400 text-sm mb-4">Speak directly with our experts</p>
              <a
                href="tel:+15551234567"
                className="inline-block px-6 py-2 bg-[#FFD700] text-[#121212] rounded-lg hover:bg-[#FFA500] transition-all duration-300 hover-glow button-magnetic"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="glass-effect rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-300 mb-6">
              Submit a question and we'll add it to our FAQ to help other users
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#0099CC] text-white rounded-lg hover:from-[#0099CC] hover:to-[#007ACC] transition-all duration-300 hover-glow button-magnetic space-x-2"
            >
              <span className="text-lg font-semibold">Submit a Question</span>
              <MessageCircle className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}