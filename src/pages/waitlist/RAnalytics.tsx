import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BarChart3, Users, Shield, Zap, CheckCircle, Building2, Globe, Target, ArrowRight, Hexagon, TrendingUp, Activity } from 'lucide-react';

export function RAnalytics() {
  const keyFeatures = [
    {
      icon: BarChart3,
      title: "Real-time Data Aggregation",
      description: "Comprehensive market data collection from multiple sources with real-time processing and analysis."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Advanced machine learning models for market trend prediction and investment opportunity identification."
    },
    {
      icon: Target,
      title: "Portfolio Optimization",
      description: "AI-powered portfolio optimization tools that maximize returns while minimizing risk exposure."
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Sophisticated risk assessment algorithms with real-time monitoring and alert systems."
    },
    {
      icon: Activity,
      title: "Social Sentiment Analysis",
      description: "Market sentiment analysis from social media, news, and community discussions for informed decisions."
    },
    {
      icon: Globe,
      title: "Custom Dashboards",
      description: "Personalized dashboard creation with drag-and-drop widgets and customizable analytics views."
    }
  ];

  const analyticsTypes = [
    {
      title: "Market Intelligence",
      description: "Real-time market data and trend analysis",
      features: ["Price movements", "Volume analysis", "Market sentiment"],
      users: "All Investors"
    },
    {
      title: "Portfolio Analytics",
      description: "Comprehensive portfolio performance tracking",
      features: ["ROI tracking", "Risk metrics", "Asset allocation"],
      users: "Active Traders"
    },
    {
      title: "Predictive Models",
      description: "AI-powered market predictions and forecasts",
      features: ["Price predictions", "Trend forecasting", "Risk modeling"],
      users: "Professional Traders"
    }
  ];

  const platformBenefits = [
    "Data-driven investment decision making",
    "Early market trend identification",
    "Optimized portfolio performance tracking",
    "Reduced investment risks through analysis",
    "Competitive market intelligence access",
    "Personalized investment insights and recommendations",
    "Real-time alerts and notifications",
    "Professional-grade analytics tools"
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
                  <h1 className="text-4xl md:text-5xl font-bold text-white text-reveal">R3alm Analytics</h1>
                  <p className="text-xl text-[#FFD700] font-semibold text-reveal stagger-1">Market Intelligence</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-reveal stagger-2">
                <div className="px-4 py-2 rounded-full text-sm font-medium border bg-[#00BFFF]/20 text-[#00BFFF] border-[#00BFFF]/30 pulse-glow">
                  Expected Launch: Q2 2026
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <BarChart3 className="h-5 w-5 text-[#00BFFF]" />
                  <span>Analytics</span>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed text-reveal stagger-3">
                Advanced analytics platform providing real-time market insights, predictive modeling, 
                and investment intelligence across all asset classes with AI-powered analysis and 
                personalized recommendations.
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
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg"
                alt="R3alm Analytics Platform"
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
              Analytics <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional-grade analytics tools for informed investment decisions
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

      {/* Analytics Types */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Analytics <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored analytics solutions for different types of investors and traders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {analyticsTypes.map((type, index) => (
              <div key={index} className={`glass-effect rounded-xl p-8 scale-on-hover slide-up stagger-${index + 1}`}>
                <h3 className="text-2xl font-bold text-white mb-4 text-reveal">{type.title}</h3>
                <p className="text-gray-300 mb-6 text-reveal stagger-1">{type.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 text-reveal stagger-2">Key Features:</h4>
                  <div className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className={`flex items-center space-x-3 text-reveal stagger-${featureIndex + 1}`}>
                        <CheckCircle className="h-4 w-4 text-[#00BFFF] flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-[#FFD700] font-bold text-lg text-reveal stagger-3">{type.users}</div>
                  <div className="text-gray-400 text-sm text-reveal stagger-4">Target Users</div>
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
            Unlock <span className="gradient-text">Market Intelligence</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed text-reveal stagger-1">
            Join the waitlist for R3alm Analytics and gain access to professional-grade market intelligence
          </p>
          
          <Link
            to="/waitlist/r3alm-analytics"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#121212] rounded-lg hover:from-[#FFA500] hover:to-[#FF8C00] transition-all duration-300 hover-glow button-magnetic space-x-3 text-reveal stagger-2"
          >
            <BarChart3 className="h-5 w-5" />
            <span className="text-lg font-semibold">Join Waitlist</span>
          </Link>
        </div>
      </section>
    </div>
  );
}