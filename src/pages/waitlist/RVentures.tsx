import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, TrendingUp, Users, Shield, Zap, CheckCircle, Building2, Globe, Target, ArrowRight, Hexagon, DollarSign } from 'lucide-react';

export function RVentures() {
  const keyFeatures = [
    {
      icon: DollarSign,
      title: "Tokenized Equity",
      description: "Revolutionary tokenized startup equity investments with blockchain verification and transparent ownership tracking."
    },
    {
      icon: Users,
      title: "Decentralized Due Diligence",
      description: "Community-driven due diligence processes with expert analysis and crowd-sourced startup evaluation."
    },
    {
      icon: Globe,
      title: "Global Investor Network",
      description: "Access to international startup opportunities and global investor community participation."
    },
    {
      icon: Shield,
      title: "Automated Cap Tables",
      description: "Smart contract-based cap table management with real-time updates and compliance monitoring."
    },
    {
      icon: Zap,
      title: "Smart Vesting",
      description: "Automated vesting schedules through smart contracts with milestone-based token releases."
    },
    {
      icon: TrendingUp,
      title: "Secondary Markets",
      description: "Liquidity for traditionally illiquid startup investments through integrated secondary trading."
    }
  ];

  const investmentTypes = [
    {
      title: "Early-Stage Startups",
      description: "Seed and Series A technology companies",
      minInvestment: "$100",
      avgReturn: "25-50%",
      riskLevel: "High"
    },
    {
      title: "Growth Companies",
      description: "Series B+ companies with proven traction",
      minInvestment: "$500",
      avgReturn: "15-30%",
      riskLevel: "Medium-High"
    },
    {
      title: "Pre-IPO Companies",
      description: "Late-stage companies preparing for public markets",
      minInvestment: "$1,000",
      avgReturn: "10-20%",
      riskLevel: "Medium"
    }
  ];

  const platformBenefits = [
    "Access to pre-IPO investment opportunities",
    "Fractional ownership of high-growth startups",
    "Transparent due diligence processes",
    "Global diversification opportunities",
    "Automated compliance and reporting",
    "Secondary market liquidity",
    "Professional investor network",
    "AI-powered startup analysis"
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#121212] to-[#1E1E1E] overflow-hidden">
        <div className="absolute inset-0 blockchain-grid opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/waitlist"
            className="inline-flex items-center text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Waitlist
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
                  <h1 className="text-4xl md:text-5xl font-bold text-white text-reveal">R3alm Ventures</h1>
                  <p className="text-xl text-[#FFD700] font-semibold text-reveal stagger-1">Venture Capital</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-reveal stagger-2">
                <div className="px-4 py-2 rounded-full text-sm font-medium border bg-[#FFD700]/20 text-[#FFD700] border-[#FFD700]/30 pulse-glow">
                  Expected Launch: Q3 2025
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <TrendingUp className="h-5 w-5 text-[#00BFFF]" />
                  <span>Investment</span>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed text-reveal stagger-3">
                Decentralized venture capital platform connecting startups with global investors through 
                tokenized equity and transparent funding mechanisms, democratizing access to early-stage 
                investment opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 text-reveal stagger-4">
                <button className="px-8 py-4 bg-[#FFD700] text-[#121212] rounded-lg hover:bg-[#FFA500] transition-all duration-300 hover-glow button-magnetic flex items-center justify-center space-x-2">
                  <span className="text-lg font-semibold">Join Waitlist</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                
                <Link
                  to="/contact"
                  className="px-8 py-4 border border-[#00BFFF] text-[#00BFFF] rounded-lg hover:bg-[#00BFFF] hover:text-white transition-all duration-300 button-magnetic flex items-center justify-center space-x-2"
                >
                  <span className="text-lg font-semibold">Learn More</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div className="relative slide-up stagger-1">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="R3alm Ventures Platform"
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
              Revolutionary venture capital capabilities designed for the Web3 era
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

      {/* Investment Types */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Investment <span className="gradient-text">Opportunities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Diverse startup investment categories across different stages and risk profiles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investmentTypes.map((type, index) => (
              <div key={index} className={`glass-effect rounded-xl p-8 scale-on-hover slide-up stagger-${index + 1}`}>
                <h3 className="text-2xl font-bold text-white mb-4 text-reveal">{type.title}</h3>
                <p className="text-gray-300 mb-6 text-reveal stagger-1">{type.description}</p>
                
                <div className="space-y-4 text-reveal stagger-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Min Investment:</span>
                    <span className="text-[#00BFFF] font-bold">{type.minInvestment}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Avg Return:</span>
                    <span className="text-[#FFD700] font-bold">{type.avgReturn}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Risk Level:</span>
                    <span className="text-white font-bold">{type.riskLevel}</span>
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
                Why Choose <span className="text-[#00BFFF]">R3alm Ventures?</span>
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
                <h3 className="text-2xl font-bold text-white mb-6 text-reveal">Market Opportunity</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center text-reveal stagger-1">
                    <span className="text-gray-300">Global VC Market</span>
                    <span className="text-[#FFD700] font-bold text-xl">$300B+</span>
                  </div>
                  <div className="flex justify-between items-center text-reveal stagger-2">
                    <span className="text-gray-300">Startups Funded Annually</span>
                    <span className="text-[#00BFFF] font-bold text-xl">50K+</span>
                  </div>
                  <div className="flex justify-between items-center text-reveal stagger-3">
                    <span className="text-gray-300">Average Deal Size</span>
                    <span className="text-white font-bold text-xl">$2.5M</span>
                  </div>
                  <div className="flex justify-between items-center text-reveal stagger-4">
                    <span className="text-gray-300">Success Rate Target</span>
                    <span className="text-[#FFD700] font-bold text-xl">15%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              How <span className="gradient-text">It Works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple steps to start investing in high-growth startups
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Browse Startups", description: "Explore vetted startup opportunities" },
              { step: "2", title: "Due Diligence", description: "Review community analysis and reports" },
              { step: "3", title: "Invest", description: "Purchase tokenized equity shares" },
              { step: "4", title: "Track & Trade", description: "Monitor performance and trade tokens" }
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#00BFFF]/10 to-[#FFD700]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 text-reveal">
            Ready to Invest in <span className="gradient-text">Startups?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed text-reveal stagger-1">
            Join the waitlist for R3alm Ventures and get early access to revolutionary startup investing
          </p>
          
          <Link
            to="/waitlist/r3alm-ventures"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#121212] rounded-lg hover:from-[#FFA500] hover:to-[#FF8C00] transition-all duration-300 hover-glow button-magnetic space-x-3 text-reveal stagger-2"
          >
            <TrendingUp className="h-5 w-5" />
            <span className="text-lg font-semibold">Join Waitlist</span>
          </Link>
        </div>
      </section>
    </div>
  );
}