import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Hexagon, TrendingUp, Users, Shield, Building2, Clock, Zap } from 'lucide-react';
import { divisionsData, productsData } from '../data/content';

export function ProductsLanding() {
  const liveProducts = Object.entries(divisionsData);
  const developmentProducts = Object.entries(productsData);

  const productStats = [
    { label: "Live Products", value: "5", icon: Building2 },
    { label: "In Development", value: "6", icon: Clock },
    { label: "Total Users", value: "50K+", icon: Users },
    { label: "Success Rate", value: "98%", icon: Shield }
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#121212] to-[#1E1E1E] blockchain-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="gradient-text">Products</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive Web3 financial solutions spanning investment, trading, governance, and social engagement
            </p>
          </div>

          {/* Product Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {productStats.map((stat, index) => (
              <div key={index} className={`glass-effect rounded-xl p-6 text-center scale-on-hover slide-up stagger-${index + 1}`}>
                <stat.icon className="h-10 w-10 text-[#00BFFF] mx-auto mb-4 floating" />
                <div className="text-3xl font-bold text-[#FFD700] mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Products */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Live <span className="gradient-text">Products</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Fully operational platforms ready for your investment and trading needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {liveProducts.map(([key, product], index) => (
              <div key={key} className={`glass-effect rounded-2xl overflow-hidden scale-on-hover slide-up stagger-${(index % 3) + 1}`}>
                <div className="relative h-48">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium pulse-glow">
                      Live
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="relative">
                      <Hexagon className="h-8 w-8 text-[#00BFFF] floating" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold text-white">R3</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{product.name}</h3>
                      <p className="text-[#FFD700] text-sm font-semibold">{product.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">{product.description}</p>
                  
                  <div className="flex flex-col gap-3">
                    <Link
                      to={`/products/${key}`}
                      className="px-4 py-2 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic flex items-center justify-center space-x-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={product.appUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-[#FFD700] text-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-[#121212] transition-all duration-300 button-magnetic flex items-center justify-center space-x-2"
                    >
                      <span>Access App</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products in Development */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Products in <span className="gradient-text">Development</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Innovative solutions currently in development to expand our ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProducts.map(([key, product], index) => (
              <div key={key} className={`glass-effect rounded-2xl overflow-hidden scale-on-hover slide-up stagger-${(index % 3) + 1}`}>
                <div className="relative h-48">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      product.status === 'Coming Soon' 
                        ? 'bg-[#FFD700]/20 text-[#FFD700] border border-[#FFD700]/30' 
                        : 'bg-[#00BFFF]/20 text-[#00BFFF] border border-[#00BFFF]/30'
                    }`}>
                      {product.status === 'Coming Soon' && <Clock className="h-4 w-4 inline mr-1" />}
                      {product.status === 'Beta Access' && <Zap className="h-4 w-4 inline mr-1" />}
                      {product.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="relative">
                      <Hexagon className="h-8 w-8 text-[#00BFFF] floating" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold text-white">R3</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">{product.description}</p>
                  
                  <div className="flex flex-col gap-3">
                    <Link
                      to={`/products-dev/${key}`}
                      className="px-4 py-2 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic flex items-center justify-center space-x-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    {product.status === 'Beta Access' ? (
                      <a
                        href={product.appUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-[#00BFFF] text-[#00BFFF] rounded-lg hover:bg-[#00BFFF] hover:text-white transition-all duration-300 button-magnetic flex items-center justify-center space-x-2"
                      >
                        <span>Access Beta</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : (
                      <Link
                        to="/waitlist"
                        className="px-4 py-2 border border-[#FFD700] text-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-[#121212] transition-all duration-300 button-magnetic flex items-center justify-center space-x-2"
                      >
                        <span>Join Waitlist</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#00BFFF]/10 to-[#FFD700]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to <span className="gradient-text">Get Started?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Explore our ecosystem and discover the perfect platform for your investment goals
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products/crowdfund"
              className="px-8 py-4 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic flex items-center justify-center space-x-2"
            >
              <span className="text-lg font-semibold">Start Investing</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            
            <Link
              to="/contact"
              className="px-8 py-4 border border-[#FFD700] text-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-[#121212] transition-all duration-300 button-magnetic flex items-center justify-center space-x-2"
            >
              <span className="text-lg font-semibold">Contact Us</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}