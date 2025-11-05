import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Building2, TrendingUp, Shield, Zap, CheckCircle, DollarSign, Globe, Target, ArrowRight, Hexagon, PieChart } from 'lucide-react';
import { faqData } from '../../data/faq';

export function RAssets() {
  const keyFeatures = [
    {
      icon: Building2,
      title: "Asset Tokenization",
      description: "Convert real estate properties into digital tokens with blockchain verification, enabling fractional ownership and transparent trading."
    },
    {
      icon: PieChart,
      title: "Fractional Ownership",
      description: "Own fractions of premium properties starting from $100, making real estate investment accessible to everyone."
    },
    {
      icon: DollarSign,
      title: "Automated Distributions",
      description: "Receive rental income and profits automatically through smart contracts with transparent fee structures."
    },
    {
      icon: Shield,
      title: "SEC Compliance",
      description: "Full regulatory compliance with SEC Reg A+ requirements, ensuring legal protection for all investors."
    },
    {
      icon: TrendingUp,
      title: "Real-time Analytics",
      description: "Comprehensive dashboard with ROI tracking, property performance metrics, and market analysis."
    },
    {
      icon: Globe,
      title: "Global Properties",
      description: "Access to international real estate markets with properties across multiple countries and asset classes."
    }
  ];

  const propertyTypes = [
    {
      title: "Residential Properties",
      description: "Single-family homes, condos, and apartment complexes",
      avgReturn: "8-12%",
      minInvestment: "$100",
      liquidity: "High"
    },
    {
      title: "Commercial Real Estate",
      description: "Office buildings, retail spaces, and warehouses",
      avgReturn: "10-15%",
      minInvestment: "$500",
      liquidity: "Medium"
    },
    {
      title: "Industrial Assets",
      description: "Manufacturing facilities, logistics centers, and data centers",
      avgReturn: "12-18%",
      minInvestment: "$1,000",
      liquidity: "Medium"
    },
    {
      title: "Mixed-Use Developments",
      description: "Combined residential, commercial, and retail projects",
      avgReturn: "9-14%",
      minInvestment: "$250",
      liquidity: "High"
    }
  ];

  const platformBenefits = [
    "Fractional ownership of premium properties",
    "Automated rental income distribution",
    "Professional property management",
    "Transparent fee structure",
    "Secondary market liquidity",
    "Global diversification opportunities",
    "Real-time performance tracking",
    "Tax-optimized investment structures"
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#121212] to-[#1E1E1E] overflow-hidden">
        <div className="absolute inset-0 blockchain-grid opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/products"
            className="inline-flex items-center text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 slide-up">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <Hexagon className="h-16 w-16 text-[#00BFFF] floating" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">R3</span>
                  </div>
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white text-reveal">R3alm Assets</h1>
                  <p className="text-xl text-[#FFD700] font-semibold text-reveal stagger-1">Token Estate</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed text-reveal stagger-2">
                Revolutionary property tokenization platform that democratizes real estate investment 
                through fractional ownership, transparent management, and blockchain-verified assets 
                across residential, commercial, and industrial properties.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 text-reveal stagger-3">
                <a
                  href="https://property-tokenizatio-bkcb.bolt.host/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic flex items-center justify-center space-x-2"
                >
                  <span className="text-lg font-semibold">Access Platform</span>
                  <ExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                
                <button className="px-8 py-4 border border-[#FFD700] text-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-[#121212] transition-all duration-300 button-magnetic flex items-center justify-center space-x-2">
                  <span className="text-lg font-semibold">View Properties</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="relative slide-up stagger-1">
              <img 
                src="https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg"
                alt="R3alm Assets Platform"
                className="rounded-xl shadow-2xl w-full scale-on-hover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/60 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Platform <span className="gradient-text">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced tokenization technology that transforms real estate investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className={`glass-effect rounded-xl p-8 hover:bg-[#1E1E1E]/80 transition-all duration-300 scale-on-hover slide-up stagger-${(index % 3) + 1}`}>
                <feature.icon className="h-12 w-12 text-[#00BFFF] mb-6 floating" />
                <h3 className="text-2xl font-bold text-white mb-4 text-reveal">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed text-reveal stagger-1">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Property <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Diversified real estate opportunities across multiple asset classes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {propertyTypes.map((property, index) => (
              <div key={index} className={`glass-effect rounded-xl p-8 scale-on-hover slide-up stagger-${(index % 2) + 1}`}>
                <h3 className="text-2xl font-bold text-white mb-4 text-reveal">{property.title}</h3>
                <p className="text-gray-300 mb-6 text-reveal stagger-1">{property.description}</p>
                
                <div className="grid grid-cols-3 gap-4 text-reveal stagger-2">
                  <div className="text-center">
                    <div className="text-[#FFD700] font-bold text-lg">{property.avgReturn}</div>
                    <div className="text-gray-400 text-sm">Avg Return</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#00BFFF] font-bold text-lg">{property.minInvestment}</div>
                    <div className="text-gray-400 text-sm">Min Investment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold text-lg">{property.liquidity}</div>
                    <div className="text-gray-400 text-sm">Liquidity</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="slide-up">
              <h2 className="text-4xl font-bold text-white mb-8 text-reveal">
                Why Choose <span className="text-[#00BFFF]">R3alm Assets?</span>
              </h2>
              <div className="space-y-4">
                {platformBenefits.map((benefit, index) => (
                  <div key={index} className={`flex items-start space-x-4 text-reveal stagger-${(index % 4) + 1}`}>
                    <CheckCircle className="h-6 w-6 text-[#00BFFF] flex-shrink-0 mt-1" />
                    <p className="text-gray-300 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative slide-up stagger-1">
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-reveal">Portfolio Performance</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center text-reveal stagger-1">
                    <span className="text-gray-300">Total Assets Value</span>
                    <span className="text-[#FFD700] font-bold text-xl">$850M+</span>
                  </div>
                  <div className="flex justify-between items-center text-reveal stagger-2">
                    <span className="text-gray-300">Properties Tokenized</span>
                    <span className="text-[#00BFFF] font-bold text-xl">1,200+</span>
                  </div>
                  <div className="flex justify-between items-center text-reveal stagger-3">
                    <span className="text-gray-300">Active Investors</span>
                    <span className="text-white font-bold text-xl">25,000+</span>
                  </div>
                  <div className="flex justify-between items-center text-reveal stagger-4">
                    <span className="text-gray-300">Average Annual Return</span>
                    <span className="text-[#FFD700] font-bold text-xl">11.8%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Tokenization Works */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              How <span className="gradient-text">Tokenization</span> Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding the process of converting real estate into digital assets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Property Selection", description: "Professional due diligence and valuation" },
              { step: "2", title: "Legal Structure", description: "SEC-compliant tokenization framework" },
              { step: "3", title: "Token Creation", description: "Blockchain-based digital asset creation" },
              { step: "4", title: "Investment & Trading", description: "Fractional ownership and liquidity" }
            ].map((item, index) => (
              <div key={index} className={`text-center slide-up stagger-${index + 1}`}>
                <div className="w-16 h-16 bg-gradient-to-br from-[#00BFFF] to-[#0099CC] rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl floating">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-reveal">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-reveal stagger-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-white">
              Real Estate <span className="gradient-text">FAQs</span>
            </h2>
            <Link 
              to="/faq"
              className="text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300 flex items-center space-x-2"
            >
              <span>View All FAQs</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqData.filter(faq => faq.category === 'Real Estate').slice(0, 4).map((faq, index) => (
              <div key={faq.id} className={`glass-effect rounded-xl p-6 scale-on-hover slide-up stagger-${(index % 2) + 1}`}>
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-8 h-8 bg-[#00BFFF] rounded-full flex items-center justify-center flex-shrink-0 pulse-glow">
                    <span className="text-white font-bold text-sm">Q</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white leading-tight text-reveal">{faq.question}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed text-reveal stagger-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#00BFFF]/10 to-[#FFD700]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 text-reveal">
            Start Your <span className="gradient-text">Real Estate Journey</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed text-reveal stagger-1">
            Join thousands of investors building wealth through tokenized real estate
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-reveal stagger-2">
            <a
              href="https://property-tokenizatio-bkcb.bolt.host/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#0099CC] text-white rounded-lg hover:from-[#0099CC] hover:to-[#007ACC] transition-all duration-300 hover-glow button-magnetic space-x-3"
            >
              <span className="text-lg font-semibold">Explore Properties</span>
              <ExternalLink className="h-5 w-5" />
            </a>
            
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-[#FFD700] text-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-[#121212] transition-all duration-300 button-magnetic space-x-3"
            >
              <span className="text-lg font-semibold">Schedule Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}