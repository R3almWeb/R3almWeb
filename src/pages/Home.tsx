import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Users, Target, Hexagon, Play } from 'lucide-react';
import { divisionsData, productsData } from '../data/content';
import { recentArticles } from '../data/articles';
import { featuredFAQs } from '../data/faq';

export function Home() {
  const stats = [
    { label: "Total Assets Under Management", value: "$2.5B+", icon: TrendingUp },
    { label: "Active Users", value: "50K+", icon: Users },
    { label: "Security Rating", value: "AAA", icon: Shield },
    { label: "Success Rate", value: "98%", icon: Target }
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden blockchain-grid">
        <div className="absolute inset-0 bg-gradient-to-br from-[#121212] via-[#121212]/90 to-[#1E1E1E]/80">
          <div className="absolute top-20 left-20 w-2 h-2 bg-[#00BFFF] rounded-full floating stagger-1"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-[#FFD700] rounded-full floating stagger-2"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-[#00BFFF] rounded-full floating stagger-3"></div>
          <div className="absolute bottom-20 right-20 w-1 h-1 bg-[#FFD700] rounded-full floating stagger-4"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 text-reveal">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight stagger-1">
              Democratizing{' '}
              <span className="gradient-text">Wealth Creation</span>
              <br />
              in Web3 Finance
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed text-reveal stagger-2">
              A unified ecosystem of innovative financial solutions combining traditional finance 
              with cutting-edge blockchain technology to create new opportunities for wealth building.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 text-reveal stagger-3">
              <Link
                to="/products"
                className="group px-8 py-4 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic flex items-center space-x-2"
              >
                <span className="text-lg font-semibold">Explore Products</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/waitlist"
                className="group px-8 py-4 border-2 border-[#FFD700] text-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-[#121212] transition-all duration-300 button-magnetic flex items-center space-x-2"
              >
                <span className="text-lg font-semibold">Join Waitlist</span>
                <Play className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce pulse-glow">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Complete <span className="gradient-text">Web3 Financial Ecosystem</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Capital R3alm represents a revolutionary approach to financial services, 
              combining five operational subsidiaries with six innovative products to create 
              a comprehensive platform for modern wealth creation.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 slide-up">
            {stats.map((stat, index) => (
              <div key={index} className={`glass-effect rounded-xl p-8 text-center scale-on-hover stagger-${index + 1}`}>
                <stat.icon className="h-12 w-12 text-[#00BFFF] mx-auto mb-4" />
                <div className="text-3xl font-bold text-[#FFD700] mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 slide-up">
              <h3 className="text-3xl font-bold text-white text-reveal">Executive Summary</h3>
              <p className="text-gray-300 leading-relaxed text-reveal stagger-1">
                Our unified ecosystem leverages blockchain technology to democratize access to 
                investment opportunities across real estate, startups, and digital assets. Through 
                our integrated subsidiaries and innovative products, we provide secure, transparent, 
                and scalable solutions that prioritize compliance and community engagement.
              </p>
              <div className="grid grid-cols-2 gap-6 text-reveal stagger-2">
                <div className="text-center p-6 bg-[#1E1E1E] rounded-lg card-hover">
                  <div className="text-2xl font-bold text-[#00BFFF] mb-2">5</div>
                  <div className="text-gray-400">Active Divisions</div>
                </div>
                <div className="text-center p-6 bg-[#1E1E1E] rounded-lg card-hover">
                  <div className="text-2xl font-bold text-[#FFD700] mb-2">6</div>
                  <div className="text-gray-400">Innovation Products</div>
                </div>
              </div>
            </div>
            
            <div className="relative slide-up stagger-1">
              <img 
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
                alt="Web3 Finance Innovation"
                className="rounded-xl shadow-2xl w-full scale-on-hover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Map */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Interconnected <span className="gradient-text">Ecosystem</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our subsidiaries and products work together to create a comprehensive financial platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Core Subsidiaries */}
            <div className="space-y-6 slide-up">
              <h3 className="text-2xl font-bold text-[#FFD700] text-center text-reveal">Core Divisions</h3>
              {Object.entries(divisionsData).slice(0, 3).map(([key, division], index) => (
                <Link
                  key={key}
                  to={`/divisions/${key}`}
                  className="block group"
                >
                  <div className={`glass-effect rounded-lg p-6 hover:bg-[#1E1E1E]/80 transition-all duration-300 scale-on-hover text-reveal stagger-${index + 1}`}>
                    <div className="flex items-center space-x-3 mb-3">
                      <Hexagon className="h-6 w-6 text-[#00BFFF] group-hover:text-[#FFD700] transition-colors duration-300" />
                      <h4 className="text-lg font-semibold text-white">{division.name}</h4>
                    </div>
                    <p className="text-gray-400 text-sm">{division.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Supporting Services */}
            <div className="space-y-6 slide-up stagger-1">
              <h3 className="text-2xl font-bold text-[#FFD700] text-center text-reveal">Supporting Services</h3>
              {Object.entries(divisionsData).slice(3).map(([key, division], index) => (
                <Link
                  key={key}
                  to={`/divisions/${key}`}
                  className="block group"
                >
                  <div className={`glass-effect rounded-lg p-6 hover:bg-[#1E1E1E]/80 transition-all duration-300 scale-on-hover text-reveal stagger-${index + 1}`}>
                    <div className="flex items-center space-x-3 mb-3">
                      <Hexagon className="h-6 w-6 text-[#00BFFF] group-hover:text-[#FFD700] transition-colors duration-300" />
                      <h4 className="text-lg font-semibold text-white">{division.name}</h4>
                    </div>
                    <p className="text-gray-400 text-sm">{division.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Innovation Products */}
            <div className="space-y-6 slide-up stagger-2">
              <h3 className="text-2xl font-bold text-[#FFD700] text-center text-reveal">Products in Development</h3>
              {Object.entries(productsData).slice(0, 3).map(([key, product], index) => (
                <Link
                  key={key}
                  to={`/products-dev/${key}`}
                  className="block group"
                >
                  <div className={`glass-effect rounded-lg p-6 hover:bg-[#1E1E1E]/80 transition-all duration-300 scale-on-hover text-reveal stagger-${index + 1}`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Hexagon className="h-6 w-6 text-[#00BFFF] group-hover:text-[#FFD700] transition-colors duration-300" />
                        <h4 className="text-lg font-semibold text-white">{product.name}</h4>
                      </div>
                      <span className="text-xs bg-[#00BFFF]/20 text-[#00BFFF] px-2 py-1 rounded-full">
                        {product.status}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-white">Latest <span className="gradient-text">Insights</span></h2>
            <Link 
              to="/blog"
              className="text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300 flex items-center space-x-2"
            >
              <span>View All Articles</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article, index) => (
              <Link
                key={article.id}
                to={`/blog/${article.id}`}
                className={`group slide-up stagger-${index + 1}`}
              >
                <div className="glass-effect rounded-xl overflow-hidden scale-on-hover">
                  <div className="relative h-48">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#00BFFF] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-gray-400 text-sm mb-2">{article.date}</div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#00BFFF] transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{article.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick FAQ Section */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-white">Quick <span className="gradient-text">Answers</span></h2>
            <Link 
              to="/faq"
              className="text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300 flex items-center space-x-2"
            >
              <span>View All FAQs</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredFAQs.slice(0, 3).map((faq, index) => (
              <div key={faq.id} className={`glass-effect rounded-xl p-6 scale-on-hover slide-up stagger-${index + 1}`}>
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-8 h-8 bg-[#00BFFF] rounded-full flex items-center justify-center flex-shrink-0 pulse-glow">
                    <span className="text-white font-bold text-sm">Q</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white leading-tight">{faq.question}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#00BFFF]/10 to-[#FFD700]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-reveal">
            Join the <span className="gradient-text">R3alm Revolution</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed text-reveal stagger-1">
            Be part of the future of finance. Start your journey with Capital R3alm today 
            and unlock new opportunities in the Web3 economy.
          </p>
          
          <form className="max-w-md mx-auto mb-8 text-reveal stagger-2">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300 focus:scale-105"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic flex items-center space-x-2"
              >
                <span>Join</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
          
          <p className="text-sm text-gray-400 text-reveal stagger-3">
            Get exclusive updates on new features and investment opportunities.
          </p>
        </div>
      </section>
    </div>
  );
}