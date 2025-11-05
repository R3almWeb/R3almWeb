import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, FileText, Shield, Users, Zap, CheckCircle, Scale, Globe, Target, ArrowRight, Hexagon, Gavel } from 'lucide-react';

export function RGovernance() {
  const keyFeatures = [
    {
      icon: FileText,
      title: "Document Management",
      description: "Secure storage and version control for all statutory documents, contracts, and corporate records with blockchain verification."
    },
    {
      icon: Gavel,
      title: "Automated Workflows",
      description: "Streamlined processes for board meetings, resolutions, and corporate actions with automated approval chains."
    },
    {
      icon: Users,
      title: "Digital Share Registry",
      description: "Comprehensive cap table management with real-time updates, transfer tracking, and compliance monitoring."
    },
    {
      icon: Scale,
      title: "Regulatory Compliance",
      description: "Integrated FINRA/SEC compliance tools with automated reporting and filing capabilities."
    },
    {
      icon: Shield,
      title: "Security & Audit",
      description: "Enterprise-grade security with comprehensive audit trails and immutable record keeping."
    },
    {
      icon: Globe,
      title: "Multi-Jurisdiction Support",
      description: "Support for various corporate structures and regulatory requirements across different jurisdictions."
    }
  ];

  const complianceAreas = [
    {
      title: "Securities Compliance",
      description: "SEC regulations, Reg D, Reg A+, and other securities laws",
      coverage: "Complete",
      automation: "High"
    },
    {
      title: "Corporate Governance",
      description: "Board resolutions, shareholder meetings, and voting",
      coverage: "Complete",
      automation: "High"
    },
    {
      title: "Financial Reporting",
      description: "Automated financial statements and regulatory filings",
      coverage: "Comprehensive",
      automation: "Medium"
    },
    {
      title: "Tax Compliance",
      description: "Tax reporting, K-1 generation, and jurisdiction requirements",
      coverage: "Multi-State",
      automation: "High"
    }
  ];

  const platformBenefits = [
    "Centralized document repository",
    "Automated compliance monitoring",
    "Real-time cap table management",
    "Digital board meeting tools",
    "Regulatory filing automation",
    "Audit trail maintenance",
    "Multi-user access controls",
    "Integration with legal systems"
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
                  <h1 className="text-4xl md:text-5xl font-bold text-white text-reveal">R3alm Governance</h1>
                  <p className="text-xl text-[#FFD700] font-semibold text-reveal stagger-1">CorpGov</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed text-reveal stagger-2">
                Comprehensive corporate governance system that centralizes compliance, document management, 
                and communication while reducing administrative overhead and ensuring regulatory compliance 
                across all business operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 text-reveal stagger-3">
                <a
                  href="https://governance.r3alm.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic flex items-center justify-center space-x-2"
                >
                  <span className="text-lg font-semibold">Access Platform</span>
                  <ExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                
                <button className="px-8 py-4 border border-[#FFD700] text-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-[#121212] transition-all duration-300 button-magnetic flex items-center justify-center space-x-2">
                  <span className="text-lg font-semibold">Schedule Demo</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="relative slide-up stagger-1">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
                alt="R3alm Governance Platform"
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
              Governance <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete corporate governance infrastructure for modern businesses
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

      {/* Compliance Areas */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Compliance <span className="gradient-text">Coverage</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive regulatory compliance across all business areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceAreas.map((area, index) => (
              <div key={index} className={`glass-effect rounded-xl p-8 scale-on-hover slide-up stagger-${(index % 2) + 1}`}>
                <h3 className="text-2xl font-bold text-white mb-4 text-reveal">{area.title}</h3>
                <p className="text-gray-300 mb-6 text-reveal stagger-1">{area.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-reveal stagger-2">
                  <div className="text-center">
                    <div className="text-[#FFD700] font-bold text-lg">{area.coverage}</div>
                    <div className="text-gray-400 text-sm">Coverage</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#00BFFF] font-bold text-lg">{area.automation}</div>
                    <div className="text-gray-400 text-sm">Automation</div>
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
                Why Choose <span className="text-[#00BFFF]">R3alm Governance?</span>
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
                <h3 className="text-2xl font-bold text-white mb-6 text-reveal">Platform Metrics</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center text-reveal stagger-1">
                    <span className="text-gray-300">Companies Managed</span>
                    <span className="text-[#FFD700] font-bold text-xl">500+</span>
                  </div>
                  <div className="flex justify-between items-center text-reveal stagger-2">
                    <span className="text-gray-300">Documents Processed</span>
                    <span className="text-[#00BFFF] font-bold text-xl">50K+</span>
                  </div>
                  <div className="flex justify-between items-center text-reveal stagger-3">
                    <span className="text-gray-300">Compliance Rate</span>
                    <span className="text-white font-bold text-xl">99.8%</span>
                  </div>
                  <div className="flex justify-between items-center text-reveal stagger-4">
                    <span className="text-gray-300">Time Savings</span>
                    <span className="text-[#FFD700] font-bold text-xl">75%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Implementation <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Seamless onboarding and setup for your governance needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Assessment", description: "Analyze current governance structure" },
              { step: "2", title: "Configuration", description: "Customize platform for your needs" },
              { step: "3", title: "Migration", description: "Transfer existing documents and data" },
              { step: "4", title: "Training", description: "Team training and ongoing support" }
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
            Streamline Your <span className="gradient-text">Corporate Governance</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed text-reveal stagger-1">
            Join forward-thinking companies using modern governance solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-reveal stagger-2">
            <a
              href="https://governance.r3alm.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#0099CC] text-white rounded-lg hover:from-[#0099CC] hover:to-[#007ACC] transition-all duration-300 hover-glow button-magnetic space-x-3"
            >
              <span className="text-lg font-semibold">Get Started</span>
              <ExternalLink className="h-5 w-5" />
            </a>
            
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-[#FFD700] text-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-[#121212] transition-all duration-300 button-magnetic space-x-3"
            >
              <span className="text-lg font-semibold">Contact Sales</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}