import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Hexagon, TrendingUp, Users, Shield, Building2 } from 'lucide-react';
import { divisionsData } from '../data/content';

export function Subsidiaries() {
  const divisionCategories = [
    {
      title: "Core Investment Platforms",
      description: "Primary platforms for investment opportunities and asset management",
      divisions: ['crowdfund', 'assets', 'trade'],
      icon: TrendingUp
    },
    {
      title: "Supporting Infrastructure",
      description: "Essential services for compliance, governance, and community engagement",
      divisions: ['governance', 'connect'],
      icon: Building2
    }
  ];

  const stats = [
    { label: "Active Divisions", value: "5", icon: Building2 },
    { label: "Combined Users", value: "50K+", icon: Users },
    { label: "Assets Under Management", value: "$2.5B+", icon: TrendingUp },
    { label: "Security Rating", value: "AAA", icon: Shield }
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#121212] to-[#1E1E1E] blockchain-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-reveal">
              Our <span className="gradient-text">Products</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-reveal stagger-1">
              Five specialized products working together to create a comprehensive Web3 financial ecosystem
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className={`glass-effect rounded-xl p-6 text-center scale-on-hover slide-up stagger-${index + 1}`}>
                <stat.icon className="h-10 w-10 text-[#00BFFF] mx-auto mb-4 floating" />
                <div className="text-2xl font-bold text-[#FFD700] mb-2 text-reveal">{stat.value}</div>
                <div className="text-gray-400 text-sm text-reveal stagger-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidiaries by Category */}
      {divisionCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-[#0A0A0A]' : 'bg-[#121212]'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 slide-up">
              <div className="flex items-center justify-center mb-6">
                <category.icon className="h-12 w-12 text-[#00BFFF] mr-4 floating" />
                <h2 className="text-4xl font-bold text-white text-reveal">{category.title}</h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto text-reveal stagger-1">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {category.divisions.map((divisionKey, index) => {
                const division = divisionsData[divisionKey as keyof typeof divisionsData];
                return (
                  <div key={divisionKey} className={`glass-effect rounded-2xl p-8 scale-on-hover slide-up stagger-${index + 1}`}>
                    <div className="flex items-center mb-6">
                      <div className="relative mr-4">
                        <Hexagon className="h-12 w-12 text-[#00BFFF] floating" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-sm font-bold text-white">R3</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white text-reveal">{division.name}</h3>
                        <p className="text-[#FFD700] font-semibold text-reveal stagger-1">{division.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-6 text-reveal stagger-2">
                      {division.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-white mb-4 text-reveal stagger-3">Key Features</h4>
                      <div className="space-y-2">
                        {division.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className={`flex items-start space-x-3 text-reveal stagger-${featureIndex + 1}`}>
                            <div className="w-2 h-2 bg-[#00BFFF] rounded-full mt-2 flex-shrink-0 pulse-glow"></div>
                            <p className="text-gray-400 text-sm leading-relaxed">{feature}</p>
                          </div>
                        ))}
                        {division.features.length > 3 && (
                          <p className="text-[#FFD700] text-sm font-medium text-reveal stagger-4">
                            +{division.features.length - 3} more features
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 text-reveal stagger-4">
                      <Link
                        to={`/products/${divisionKey}`}
                        className="flex-1 px-6 py-3 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic flex items-center justify-center space-x-2"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <a
                        href={division.appUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 border border-[#FFD700] text-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-[#121212] transition-all duration-300 button-magnetic flex items-center justify-center space-x-2"
                      >
                        <span>Visit App</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Ecosystem Integration */}
      <section className="py-20 bg-gradient-to-br from-[#00BFFF]/10 to-[#FFD700]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 text-reveal">
              Integrated <span className="gradient-text">Ecosystem</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-reveal stagger-1">
              See how our divisions and products work together to create a comprehensive financial platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cross-Platform Integration",
                description: "Seamless data sharing and user experience across all products",
                icon: Building2
              },
              {
                title: "Unified Compliance",
                description: "Centralized regulatory compliance through R3alm Governance",
                icon: Shield
              },
              {
                title: "Shared User Base",
                description: "Single account access to all platforms and services",
                icon: Users
              },
              {
                title: "Combined Analytics",
                description: "Comprehensive insights across all investment activities",
                icon: TrendingUp
              },
              {
                title: "Integrated Marketing",
                description: "Coordinated promotion through R3alm Connect",
                icon: ExternalLink
              },
              {
                title: "Synergistic Growth",
                description: "Each platform enhances the value of the entire ecosystem",
                icon: ArrowRight
              }
            ].map((benefit, index) => (
              <div key={index} className={`glass-effect rounded-xl p-6 hover:bg-[#1E1E1E]/80 transition-all duration-300 scale-on-hover slide-up stagger-${(index % 3) + 1}`}>
                <benefit.icon className="h-10 w-10 text-[#00BFFF] mb-4 floating" />
                <h3 className="text-xl font-bold text-white mb-3 text-reveal">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed text-reveal stagger-1">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 text-reveal">
            Ready to <span className="gradient-text">Get Started?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed text-reveal stagger-1">
            Explore our products and discover the perfect platform for your investment goals
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-reveal stagger-2">
            <Link
              to="/waitlist"
              className="px-8 py-4 bg-[#FFD700] text-[#121212] rounded-lg hover:bg-[#FFA500] transition-all duration-300 hover-glow button-magnetic flex items-center justify-center space-x-2"
            >
              <span className="text-lg font-semibold">Join Upcoming Waitlists</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            
            <Link
              to="/products/crowdfund"
              className="px-8 py-4 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic flex items-center justify-center space-x-2"
            >
              <span className="text-lg font-semibold">Start with Crowdfunding</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            
            <Link
              to="/contact"
              className="px-8 py-4 border border-[#FFD700] text-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-[#121212] transition-all duration-300 button-magnetic flex items-center justify-center space-x-2"
            >
              <span className="text-lg font-semibold">Contact Us</span>
              <ExternalLink className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}