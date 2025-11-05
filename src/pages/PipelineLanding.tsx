import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Zap, ArrowRight, Hexagon, Star, Target, Shield, BarChart3, Wallet, GraduationCap } from 'lucide-react';
import { productsData } from '../data/content';
import { waitlistDivisions } from '../data/waitlist';

export function PipelineLanding() {
  const allUpcoming = [
    ...Object.entries(productsData).map(([key, product]) => ({
      id: key,
      name: product.name,
      description: product.description,
      status: product.status,
      image: product.image,
      path: `/products-dev/${key}`,
      type: 'product'
    })),
    ...waitlistDivisions.map(item => ({
      id: item.id,
      name: item.name,
      description: item.description,
      status: item.expectedLaunch,
      image: item.image,
      path: `/waitlist/${item.id}`,
      type: 'waitlist'
    }))
  ];

  const getStatusIcon = (status: string) => {
    if (status === 'Beta Access') return Zap;
    if (status === 'Coming Soon') return Clock;
    return Clock;
  };

  const getStatusColor = (status: string) => {
    if (status === 'Beta Access') return 'bg-[#00BFFF]/20 text-[#00BFFF] border-[#00BFFF]/30';
    if (status === 'Coming Soon') return 'bg-[#FFD700]/20 text-[#FFD700] border-[#FFD700]/30';
    return 'bg-[#FFD700]/20 text-[#FFD700] border-[#FFD700]/30';
  };

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#121212] to-[#1E1E1E] blockchain-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Product <span className="gradient-text">Pipeline</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Innovative financial products in development and beta testing, expanding our comprehensive ecosystem
            </p>
          </div>

          {/* Pipeline Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="glass-effect rounded-xl p-8 text-center scale-on-hover slide-up">
              <Zap className="h-12 w-12 text-[#00BFFF] mx-auto mb-4 floating" />
              <div className="text-3xl font-bold text-[#00BFFF] mb-2">3</div>
              <div className="text-gray-400">Beta Access Products</div>
            </div>
            <div className="glass-effect rounded-xl p-8 text-center scale-on-hover slide-up stagger-1">
              <Clock className="h-12 w-12 text-[#FFD700] mx-auto mb-4 floating" />
              <div className="text-3xl font-bold text-[#FFD700] mb-2">8</div>
              <div className="text-gray-400">Coming Soon</div>
            </div>
            <div className="glass-effect rounded-xl p-8 text-center scale-on-hover slide-up stagger-2">
              <Target className="h-12 w-12 text-white mx-auto mb-4 floating" />
              <div className="text-3xl font-bold text-white mb-2">2025-2026</div>
              <div className="text-gray-400">Launch Timeline</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products in Development */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Innovation <span className="gradient-text">Products</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced financial tools currently in development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(productsData).map(([key, product], index) => {
              const StatusIcon = getStatusIcon(product.status);
              return (
                <div key={key} className={`glass-effect rounded-2xl overflow-hidden scale-on-hover slide-up stagger-${(index % 3) + 1}`}>
                  <div className="relative h-48">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(product.status)} pulse-glow`}>
                        <StatusIcon className="h-4 w-4 inline mr-1" />
                        {product.status}
                      </div>
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
                          <Zap className="h-4 w-4" />
                        </a>
                      ) : (
                        <Link
                          to="/waitlist"
                          className="px-4 py-2 border border-[#FFD700] text-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-[#121212] transition-all duration-300 button-magnetic flex items-center justify-center space-x-2"
                        >
                          <span>Join Waitlist</span>
                          <Clock className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Subsidiaries */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Future <span className="gradient-text">Divisions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              New divisions planned for 2025-2026 expansion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {waitlistDivisions.slice(0, 4).map((item, index) => (
              <div key={item.id} className={`glass-effect rounded-2xl overflow-hidden scale-on-hover slide-up stagger-${(index % 2) + 1}`}>
                <div className="relative h-48">
                  <img 
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-[#FFD700]/20 text-[#FFD700] border border-[#FFD700]/30 px-3 py-1 rounded-full text-sm font-medium">
                      <Clock className="h-4 w-4 inline mr-1" />
                      {item.expectedLaunch}
                    </div>
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
                      <h3 className="text-xl font-bold text-white">{item.name}</h3>
                      <p className="text-[#FFD700] text-sm font-semibold">{item.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">{item.description}</p>
                  
                  <Link
                    to={`/waitlist/${item.id}`}
                    className="block px-4 py-2 bg-[#FFD700] text-[#121212] rounded-lg hover:bg-[#FFA500] transition-all duration-300 hover-glow button-magnetic flex items-center justify-center space-x-2"
                  >
                    <span>Join Waitlist</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
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
            Be Part of the <span className="gradient-text">Innovation</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join our waitlists to get early access to revolutionary financial products
          </p>
          
          <Link
            to="/waitlist"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#121212] rounded-lg hover:from-[#FFA500] hover:to-[#FF8C00] transition-all duration-300 hover-glow button-magnetic space-x-3"
          >
            <Star className="h-5 w-5" />
            <span className="text-lg font-semibold">Join All Waitlists</span>
          </Link>
        </div>
      </section>
    </div>
  );
}