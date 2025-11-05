import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Bot, TrendingUp, Shield, Zap, CheckCircle, Activity, Globe, Target, ArrowRight, Hexagon, BarChart3 } from 'lucide-react';
import { faqData } from '../../data/faq';

export function RTrade() {
  const keyFeatures = [
    {
      icon: Bot,
      title: "AI Trading Bots",
      description: "Advanced algorithmic trading bots for simple, triangular, and cross-market arbitrage opportunities with machine learning optimization."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Configurable risk metrics with real-time monitoring, stop-loss mechanisms, and portfolio protection algorithms."
    },
    {
      icon: Globe,
      title: "Multi-Exchange Integration",
      description: "Seamless integration with major exchanges including Binance, Coinbase Pro, Kraken, and other leading platforms."
    },
    {
      icon: Activity,
      title: "Real-time Analytics",
      description: "Advanced market data analysis with predictive algorithms, trend identification, and performance optimization."
    },
    {
      icon: BarChart3,
      title: "Portfolio Tracking",
      description: "Comprehensive portfolio management across multiple asset classes with detailed performance metrics and reporting."
    },
    {
      icon: Zap,
      title: "High-Frequency Trading",
      description: "Lightning-fast execution with microsecond latency for capturing fleeting arbitrage opportunities."
    }
  ];

  const tradingStrategies = [
    {
      title: "Simple Arbitrage",
      description: "Price differences between exchanges for the same asset",
      profitRange: "0.1-2%",
      frequency: "High",
      riskLevel: "Low"
    },
    {
      title: "Triangular Arbitrage",
      description: "Currency pair imbalances within single exchanges",
      profitRange: "0.05-1%",
      frequency: "Very High",
      riskLevel: "Low"
    },
    {
      title: "Cross-Market Arbitrage",
      description: "Opportunities across different market types and regions",
      profitRange: "0.5-5%",
      frequency: "Medium",
      riskLevel: "Medium"
    },
    {
      title: "Statistical Arbitrage",
      description: "Mean reversion and correlation-based strategies",
      profitRange: "1-8%",
      frequency: "Medium",
      riskLevel: "Medium-High"
    }
  ];

  const platformBenefits = [
    "24/7 automated trading operations",
    "Advanced risk management protocols",
    "Multi-exchange connectivity",
    "Real-time market data feeds",
    "Customizable trading parameters",
    "Comprehensive performance analytics",
    "Professional-grade security",
    "API integration capabilities"
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
                  <h1 className="text-4xl md:text-5xl font-bold text-white text-reveal">R3alm Trade</h1>
                  <p className="text-xl text-[#FFD700] font-semibold text-reveal stagger-1">ArbitrageX Pro</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed text-reveal stagger-2">
                AI-driven multi-market trading platform that maximizes returns through automated 
                arbitrage strategies while minimizing risks with intelligent algorithms and 
                real-time market analysis across global exchanges.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 text-reveal stagger-3">
                <a
                  href="https://multi-market-arbitra-kfbn.bolt.host/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic flex items-center justify-center space-x-2"
                >
                  <span className="text-lg font-semibold">Access Platform</span>
                  <ExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                
                <button className="px-8 py-4 border border-[#FFD700] text-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-[#121212] transition-all duration-300 button-magnetic flex items-center justify-center space-x-2">
                  <span className="text-lg font-semibold">Live Demo</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="relative slide-up stagger-1">
              <img 
                src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg"
                alt="R3alm Trade Platform"
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
              Trading <span className="gradient-text">Technology</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI-powered trading infrastructure for professional arbitrage strategies
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

      {/* Trading Strategies */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Trading <span className="gradient-text">Strategies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Sophisticated arbitrage strategies designed for consistent profitability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tradingStrategies.map((strategy, index) => (
              <div key={index} className={`glass-effect rounded-xl p-8 scale-on-hover slide-up stagger-${(index % 2) + 1}`}>
                <h3 className="text-2xl font-bold text-white mb-4 text-reveal">{strategy.title}</h3>
                <p className="text-gray-300 mb-6 text-reveal stagger-1">{strategy.description}</p>
                
                <div className="grid grid-cols-3 gap-4 text-reveal stagger-2">
                  <div className="text-center">
                    <div className="text-[#FFD700] font-bold text-lg">{strategy.profitRange}</div>
                    <div className="text-gray-400 text-sm">Profit Range</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#00BFFF] font-bold text-lg">{strategy.frequency}</div>
                    <div className="text-gray-400 text-sm">Frequency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold text-lg">{strategy.riskLevel}</div>
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
                Why Choose <span className="text-[#00BFFF]">R3alm Trade?</span>
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
                <h3 className="text-2xl font-bold text-white mb-6 text-reveal">Trading Performance</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center text-reveal stagger-1">
                    <span className="text-gray-300">Total Volume Traded</span>
                    <span className="text-[#FFD700] font-bold text-xl">$2.1B+</span>
                  </div>
                  <div className="flex justify-between items-center text-reveal stagger-2">
                    <span className="text-gray-300">Successful Trades</span>
                    <span className="text-[#00BFFF] font-bold text-xl">98.7%</span>
                  </div>
                  <div className="flex justify-between items-center text-reveal stagger-3">
                    <span className="text-gray-300">Active Traders</span>
                    <span className="text-white font-bold text-xl">8,500+</span>
                  </div>
                  <div className="flex justify-between items-center text-reveal stagger-4">
                    <span className="text-gray-300">Average Monthly Return</span>
                    <span className="text-[#FFD700] font-bold text-xl">12.4%</span>
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
              How <span className="gradient-text">Trading</span> Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple steps to start automated arbitrage trading
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Connect Exchanges", description: "Link your exchange accounts securely" },
              { step: "2", title: "Configure Strategy", description: "Set risk parameters and trading rules" },
              { step: "3", title: "Deploy Bots", description: "Activate AI trading algorithms" },
              { step: "4", title: "Monitor & Optimize", description: "Track performance and adjust settings" }
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
              Trading <span className="gradient-text">FAQs</span>
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
            {faqData.filter(faq => faq.category === 'Trading').slice(0, 4).map((faq, index) => (
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
            Start <span className="gradient-text">Automated Trading</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed text-reveal stagger-1">
            Join professional traders using AI-powered arbitrage strategies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-reveal stagger-2">
            <a
              href="https://multi-market-arbitra-kfbn.bolt.host/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#0099CC] text-white rounded-lg hover:from-[#0099CC] hover:to-[#007ACC] transition-all duration-300 hover-glow button-magnetic space-x-3"
            >
              <span className="text-lg font-semibold">Start Trading Now</span>
              <ExternalLink className="h-5 w-5" />
            </a>
            
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-[#FFD700] text-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-[#121212] transition-all duration-300 button-magnetic space-x-3"
            >
              <span className="text-lg font-semibold">Request Demo</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}