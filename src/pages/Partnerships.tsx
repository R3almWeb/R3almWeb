import React from 'react';
import { Building2, Shield, TrendingUp, Globe, ArrowRight } from 'lucide-react';

export function Partnerships() {
  const partners = [
    {
      name: "North Capital",
      type: "Regulatory Services",
      description: "Leading provider of regulatory compliance services for investment platforms. North Capital ensures our crowdfunding and investment activities meet all FINRA and SEC requirements.",
      services: ["SEC Regulation Compliance", "KYC/AML Services", "Legal Documentation", "Regulatory Consulting"],
      icon: Shield
    },
    {
      name: "Rialto Markets",
      type: "Secondary Trading",
      description: "Specialized secondary market platform enabling liquidity for alternative investments. Rialto Markets provides the infrastructure for trading tokenized assets.",
      services: ["Secondary Market Trading", "Liquidity Solutions", "Price Discovery", "Market Making"],
      icon: TrendingUp
    }
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#121212] to-[#1E1E1E] blockchain-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Strategic <span className="gradient-text">Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Collaborating with industry leaders to provide comprehensive, compliant, and innovative financial services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {partners.map((partner, index) => (
              <div key={index} className={`glass-effect rounded-2xl p-8 scale-on-hover slide-up stagger-${index + 1}`}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00BFFF] to-[#0099CC] rounded-full flex items-center justify-center mr-6 floating">
                    <partner.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white text-reveal">{partner.name}</h2>
                    <p className="text-[#FFD700] font-semibold text-reveal stagger-1">{partner.type}</p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-8 text-reveal stagger-2">{partner.description}</p>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-reveal stagger-3">Key Services</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {partner.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className={`flex items-center space-x-3 p-3 bg-[#1E1E1E]/50 rounded-lg card-hover text-reveal stagger-${serviceIndex + 1}`}>
                        <Building2 className="h-4 w-4 text-[#00BFFF]" />
                        <span className="text-gray-300 text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Partnership <span className="gradient-text">Benefits</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How our strategic alliances enhance your experience and security
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Regulatory Compliance",
                description: "Full FINRA and SEC compliance through our partnership with North Capital, ensuring all activities meet regulatory standards.",
                icon: Shield
              },
              {
                title: "Market Access",
                description: "Enhanced liquidity and trading capabilities through Rialto Markets' secondary trading infrastructure.",
                icon: Globe
              },
              {
                title: "Risk Management",
                description: "Professional risk assessment and management protocols developed in collaboration with industry experts.",
                icon: TrendingUp
              },
              {
                title: "Legal Framework",
                description: "Robust legal documentation and structure ensuring protection for all participants in our ecosystem.",
                icon: Building2
              },
              {
                title: "Technology Integration",
                description: "Seamless integration of partner services into our platform for a unified user experience.",
                icon: Globe
              },
              {
                title: "Continuous Innovation",
                description: "Ongoing collaboration to develop new products and services that meet evolving market needs.",
                icon: TrendingUp
              }
            ].map((benefit, index) => (
              <div key={index} className="glass-effect rounded-xl p-6 hover:bg-[#1E1E1E]/80 transition-all duration-300 hover:scale-105">
                <benefit.icon className="h-12 w-12 text-[#00BFFF] mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Partnerships */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Future <span className="gradient-text">Collaborations</span>
          </h2>
          <div className="glass-effect rounded-2xl p-12">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We're continuously seeking strategic partnerships with innovative companies 
              that share our vision of democratizing finance. If you're interested in 
              exploring collaboration opportunities, we'd love to hear from you.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#0099CC] text-white rounded-lg hover:from-[#0099CC] hover:to-[#007ACC] transition-all duration-300 hover-glow space-x-3"
            >
              <span className="text-lg font-semibold">Explore Partnership</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}