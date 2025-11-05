import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Users, Zap, CheckCircle, Building2, Globe, Target, ArrowRight, Hexagon, DollarSign, Activity } from 'lucide-react';

export function RInsurance() {
  const keyFeatures = [
    {
      icon: Users,
      title: "Decentralized Pools",
      description: "Community-driven insurance pools where members collectively share risks and rewards through transparent governance."
    },
    {
      icon: Shield,
      title: "Smart Contract Coverage",
      description: "Comprehensive protection for smart contract failures, bugs, and exploits with automated claim processing."
    },
    {
      icon: Activity,
      title: "Parametric Insurance",
      description: "Automated insurance products that trigger payouts based on predefined parameters and real-world data."
    },
    {
      icon: Globe,
      title: "Community Risk Assessment",
      description: "Crowd-sourced risk evaluation with expert analysis and transparent scoring mechanisms."
    },
    {
      icon: Zap,
      title: "Instant Claims",
      description: "Automated claims processing with smart contract execution for qualifying events and instant payouts."
    },
    {
      icon: DollarSign,
      title: "Cross-Chain Protection",
      description: "Multi-blockchain asset protection covering Ethereum, Solana, and other major networks."
    }
  ];

  const insuranceTypes = [
    {
      title: "DeFi Protocol Insurance",
      description: "Protection against smart contract failures and exploits",
      coverage: "Up to $1M",
      premium: "2-5%",
      duration: "Flexible"
    },
    {
      title: "Crypto Asset Insurance",
      description: "Coverage for wallet hacks and exchange failures",
      coverage: "Up to $500K",
      premium: "1-3%",
      duration: "Annual"
    },
    {
      title: "Stablecoin Depeg Insurance",
      description: "Protection against stablecoin depegging events",
      coverage: "Up to $250K",
      premium: "0.5-2%",
      duration: "Continuous"
    }
  ];

  const platformBenefits = [
    "Lower premiums through community pooling",
    "Transparent claims processing",
    "Coverage for emerging digital risks",
    "Community participation in underwriting",
    "Instant payouts for qualifying claims",
    "Global coverage without restrictions",
    "Customizable coverage options",
    "Decentralized governance participation"
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
                  <h1 className="text-4xl md:text-5xl font-bold text-white text-reveal">R3alm Insurance</h1>
                  <p className="text-xl text-[#FFD700] font-semibold text-reveal stagger-1">Decentralized Protection</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-reveal stagger-2">
                <div className="px-4 py-2 rounded-full text-sm font-medium border bg-[#FFD700]/20 text-[#FFD700] border-[#FFD700]/30 pulse-glow">
                  Expected Launch: Q4 2025
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Shield className="h-5 w-5 text-[#00BFFF]" />
                  <span>Protection</span>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed text-reveal stagger-3">
                Blockchain-based insurance platform offering coverage for digital assets, smart contracts, 
                and traditional risks through community-driven pools with transparent claims processing 
                and automated payouts.
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
                src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg"
                alt="R3alm Insurance Platform"
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
              Insurance <span className="gradient-text">Innovation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary insurance capabilities for the digital age
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

      {/* Insurance Types */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Coverage <span className="gradient-text">Options</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive insurance products for digital asset protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insuranceTypes.map((type, index) => (
              <div key={index} className={`glass-effect rounded-xl p-8 scale-on-hover slide-up stagger-${index + 1}`}>
                <h3 className="text-2xl font-bold text-white mb-4 text-reveal">{type.title}</h3>
                <p className="text-gray-300 mb-6 text-reveal stagger-1">{type.description}</p>
                
                <div className="space-y-4 text-reveal stagger-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Coverage:</span>
                    <span className="text-[#00BFFF] font-bold">{type.coverage}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Premium:</span>
                    <span className="text-[#FFD700] font-bold">{type.premium}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white font-bold">{type.duration}</span>
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
            Protect Your <span className="gradient-text">Digital Assets</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed text-reveal stagger-1">
            Join the waitlist for R3alm Insurance and secure comprehensive protection for your investments
          </p>
          
          <Link
            to="/waitlist/r3alm-insurance"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#121212] rounded-lg hover:from-[#FFA500] hover:to-[#FF8C00] transition-all duration-300 hover-glow button-magnetic space-x-3 text-reveal stagger-2"
          >
            <Shield className="h-5 w-5" />
            <span className="text-lg font-semibold">Join Waitlist</span>
          </Link>
        </div>
      </section>
    </div>
  );
}