import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, DollarSign, Users, Shield, Zap, CheckCircle, Building2, Globe, Target, ArrowRight, Hexagon, TrendingUp } from 'lucide-react';

export function RLending() {
  const keyFeatures = [
    {
      icon: Users,
      title: "Peer-to-Peer Marketplace",
      description: "Direct lending between individuals and institutions without traditional banking intermediaries."
    },
    {
      icon: Building2,
      title: "Tokenized Collateral",
      description: "Use tokenized real estate and other digital assets as collateral for loans with transparent valuation."
    },
    {
      icon: Shield,
      title: "AI Credit Scoring",
      description: "Advanced machine learning algorithms for accurate credit assessment and risk evaluation."
    },
    {
      icon: Zap,
      title: "Automated Servicing",
      description: "Smart contract-based loan servicing with automatic payments, interest calculations, and default management."
    },
    {
      icon: Globe,
      title: "Cross-Border Lending",
      description: "Global lending capabilities enabling international borrowers and lenders to connect seamlessly."
    },
    {
      icon: DollarSign,
      title: "Flexible Terms",
      description: "Customizable repayment structures with various term lengths and interest rate options."
    }
  ];

  const lendingTypes = [
    {
      title: "Personal Loans",
      description: "Unsecured loans for personal use and debt consolidation",
      rates: "8-15%",
      terms: "1-5 years",
      minAmount: "$1,000"
    },
    {
      title: "Business Loans",
      description: "Working capital and expansion loans for businesses",
      rates: "6-12%",
      terms: "1-7 years",
      minAmount: "$5,000"
    },
    {
      title: "Asset-Backed Loans",
      description: "Loans secured by tokenized real estate or digital assets",
      rates: "4-8%",
      terms: "1-10 years",
      minAmount: "$10,000"
    }
  ];

  const platformBenefits = [
    "Higher yields for lenders than traditional banks",
    "Lower borrowing costs than conventional loans",
    "Access to global capital markets",
    "Transparent risk assessment and pricing",
    "Automated loan management and servicing",
    "Fractional loan participation for diversification",
    "Real-time portfolio tracking and analytics",
    "Regulatory compliance and investor protection"
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
                  <h1 className="text-4xl md:text-5xl font-bold text-white text-reveal">R3alm Lending</h1>
                  <p className="text-xl text-[#FFD700] font-semibold text-reveal stagger-1">Peer-to-Peer Finance</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-reveal stagger-2">
                <div className="px-4 py-2 rounded-full text-sm font-medium border bg-[#00BFFF]/20 text-[#00BFFF] border-[#00BFFF]/30 pulse-glow">
                  Expected Launch: Q1 2026
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <DollarSign className="h-5 w-5 text-[#00BFFF]" />
                  <span>Lending</span>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed text-reveal stagger-3">
                Decentralized lending platform enabling peer-to-peer loans backed by tokenized assets 
                with automated risk assessment and management, connecting global borrowers and lenders 
                through transparent, efficient processes.
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
                src="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg"
                alt="R3alm Lending Platform"
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
              Lending <span className="gradient-text">Technology</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced peer-to-peer lending infrastructure for the digital economy
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

      {/* Lending Types */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Loan <span className="gradient-text">Products</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible lending options for various needs and risk profiles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lendingTypes.map((type, index) => (
              <div key={index} className={`glass-effect rounded-xl p-8 scale-on-hover slide-up stagger-${index + 1}`}>
                <h3 className="text-2xl font-bold text-white mb-4 text-reveal">{type.title}</h3>
                <p className="text-gray-300 mb-6 text-reveal stagger-1">{type.description}</p>
                
                <div className="space-y-4 text-reveal stagger-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Interest Rates:</span>
                    <span className="text-[#FFD700] font-bold">{type.rates}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Terms:</span>
                    <span className="text-[#00BFFF] font-bold">{type.terms}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Min Amount:</span>
                    <span className="text-white font-bold">{type.minAmount}</span>
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
          <h2 className="text-4xl font-bold text-white mb-6 text-reveal">
            Join the <span className="gradient-text">Lending Revolution</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed text-reveal stagger-1">
            Be part of the future of peer-to-peer lending with R3alm Lending
          </p>
          
          <Link
            to="/waitlist/r3alm-lending"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#121212] rounded-lg hover:from-[#FFA500] hover:to-[#FF8C00] transition-all duration-300 hover-glow button-magnetic space-x-3 text-reveal stagger-2"
          >
            <DollarSign className="h-5 w-5" />
            <span className="text-lg font-semibold">Join Waitlist</span>
          </Link>
        </div>
      </section>
    </div>
  );
}