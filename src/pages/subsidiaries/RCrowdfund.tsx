import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Users, TrendingUp, Shield, Zap, CheckCircle, Star, Globe, Target, ArrowRight, Hexagon } from 'lucide-react';
import { investmentFAQs } from '../../data/faq';

export function RCrowdfund() {
  const keyFeatures = [
    {
      icon: Users,
      title: "Multi-Category Investments",
      description: "Access diverse investment opportunities across startups, real estate, private equity, and innovative projects with comprehensive due diligence."
    },
    {
      icon: Shield,
      title: "FINRA/SEC Compliance",
      description: "Full regulatory compliance with comprehensive KYC/AML procedures, ensuring all investments meet federal securities regulations."
    },
    {
      icon: Globe,
      title: "Social Media Integration",
      description: "Revolutionary social crowdfunding platform that combines investment opportunities with community engagement and viral marketing."
    },
    {
      icon: Zap,
      title: "AI Robo-Advisory",
      description: "Personalized investment recommendations powered by advanced AI algorithms that analyze your risk profile and investment goals."
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description: "Comprehensive performance tracking with real-time analytics, ROI calculations, and detailed investment portfolio insights."
    },
    {
      icon: Target,
      title: "Campaign Management",
      description: "Full front/back-end campaign oversight with automated workflows, investor communications, and funding milestone tracking."
    }
  ];

  const investmentCategories = [
    {
      title: "Technology Startups",
      description: "Early-stage technology companies with disruptive potential",
      minInvestment: "$100",
      avgReturn: "15-25%",
      riskLevel: "High"
    },
    {
      title: "Real Estate Projects",
      description: "Commercial and residential development opportunities",
      minInvestment: "$500",
      avgReturn: "8-12%",
      riskLevel: "Medium"
    },
    {
      title: "Private Equity",
      description: "Established businesses seeking growth capital",
      minInvestment: "$1,000",
      avgReturn: "12-18%",
      riskLevel: "Medium-High"
    },
    {
      title: "Green Energy",
      description: "Sustainable energy and environmental projects",
      minInvestment: "$250",
      avgReturn: "10-15%",
      riskLevel: "Medium"
    }
  ];

  const platformBenefits = [
    "Access to pre-vetted investment opportunities",
    "Diversified portfolio across multiple asset classes",
    "Social community of like-minded investors",
    "Educational resources and market insights",
    "Automated portfolio rebalancing",
    "Tax-optimized investment structures",
    "24/7 customer support and guidance",
    "Mobile app for on-the-go investing"
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
                  <h1 className="text-4xl md:text-5xl font-bold text-white text-reveal">R3alm Crowdfund</h1>
                  <p className="text-xl text-[#FFD700] font-semibold text-reveal stagger-1">Capital Realm Networks</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed text-reveal stagger-2">
                Revolutionary crowdfunding social network portal that integrates investment opportunities 
                with social media engagement, creating vibrant investor communities while simplifying 
                the fundraising process for entrepreneurs and creators.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 text-reveal stagger-3">
                <a
                  href="https://majestic-mandazi-ab5aa3.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic flex items-center justify-center space-x-2"
                >
                  <span className="text-lg font-semibold">Access Platform</span>
                  <ExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                
                <button className="px-8 py-4 border border-[#FFD700] text-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-[#121212] transition-all duration-300 button-magnetic flex items-center justify-center space-x-2">
                  <span className="text-lg font-semibold">Watch Demo</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="relative slide-up stagger-1">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="R3alm Crowdfund Platform"
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
              Comprehensive crowdfunding capabilities designed for modern investors and entrepreneurs
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

      {/* Investment Categories */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Investment <span className="gradient-text">Categories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Diverse opportunities across multiple asset classes and risk profiles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investmentCategories.map((category, index) => (
              <div key={index} className={`glass-effect rounded-xl p-8 scale-on-hover slide-up stagger-${(index % 2) + 1}`}>
                <h3 className="text-2xl font-bold text-white mb-4 text-reveal">{category.title}</h3>
                <p className="text-gray-300 mb-6 text-reveal stagger-1">{category.description}</p>
                
                <div className="grid grid-cols-3 gap-4 text-reveal stagger-2">
                  <div className="text-center">
                    <div className="text-[#00BFFF] font-bold text-lg">{category.minInvestment}</div>
                    <div className="text-gray-400 text-sm">Min Investment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#FFD700] font-bold text-lg">{category.avgReturn}</div>
                    <div className="text-gray-400 text-sm">Avg Return</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold text-lg">{category.riskLevel}</div>
                    <div className="text-gray-400 text-sm">Risk Level</div>
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
                Why Choose <span className="text-[#00BFFF]">R3alm Crowdfund?</span>
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
                <h3 className="text-2xl font-bold text-white mb-6 text-reveal">Platform Statistics</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center text-reveal stagger-1">
                    <span className="text-gray-300">Total Funding Raised</span>
                    <span className="text-[#FFD700] font-bold text-xl">$125M+</span>
                  </div>
                  <div className="flex justify-between items-center text-reveal stagger-2">
                    <span className="text-gray-300">Successful Campaigns</span>
                    <span className="text-[#00BFFF] font-bold text-xl">2,500+</span>
                  </div>
                  <div className="flex justify-between items-center text-reveal stagger-3">
                    <span className="text-gray-300">Active Investors</span>
                    <span className="text-white font-bold text-xl">15,000+</span>
                  </div>
                  <div className="flex justify-between items-center text-reveal stagger-4">
                    <span className="text-gray-300">Average ROI</span>
                    <span className="text-[#FFD700] font-bold text-xl">14.2%</span>
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
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple steps to start your crowdfunding investment journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Create Account", description: "Sign up and complete KYC verification" },
              { step: "2", title: "Browse Opportunities", description: "Explore vetted investment campaigns" },
              { step: "3", title: "Invest & Engage", description: "Make investments and join the community" },
              { step: "4", title: "Track Returns", description: "Monitor performance and receive returns" }
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
              Crowdfunding <span className="gradient-text">FAQs</span>
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
            {investmentFAQs.slice(0, 4).map((faq, index) => (
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
            Ready to Start <span className="gradient-text">Crowdfunding?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed text-reveal stagger-1">
            Join thousands of investors who are building wealth through our innovative crowdfunding platform
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-reveal stagger-2">
            <a
              href="https://majestic-mandazi-ab5aa3.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#0099CC] text-white rounded-lg hover:from-[#0099CC] hover:to-[#007ACC] transition-all duration-300 hover-glow button-magnetic space-x-3"
            >
              <span className="text-lg font-semibold">Start Investing Today</span>
              <ExternalLink className="h-5 w-5" />
            </a>
            
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-[#FFD700] text-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-[#121212] transition-all duration-300 button-magnetic space-x-3"
            >
              <span className="text-lg font-semibold">Learn More</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}