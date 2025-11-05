import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Handshake, Code, ArrowRight, Building2 } from 'lucide-react';

export function AboutLanding() {
  const aboutSections = [
    {
      icon: Target,
      title: "Vision & Mission",
      description: "Our guiding principles and commitment to democratizing wealth creation through innovative blockchain solutions.",
      path: "/about/vision-mission",
      color: "from-[#00BFFF] to-[#0099CC]"
    },
    {
      icon: Handshake,
      title: "Strategic Partnerships",
      description: "Collaborating with industry leaders like North Capital and Rialto Markets for regulatory compliance and market access.",
      path: "/about/partnerships",
      color: "from-[#FFD700] to-[#FFA500]"
    },
    {
      icon: Code,
      title: "Technical Architecture",
      description: "Built on cutting-edge technology stack designed for scale, security, and performance in the Web3 ecosystem.",
      path: "/about/architecture",
      color: "from-[#9333EA] to-[#7C3AED]"
    }
  ];

  const companyHighlights = [
    { label: "Founded", value: "2024" },
    { label: "Subsidiaries", value: "5" },
    { label: "Products", value: "11" },
    { label: "Team Members", value: "50+" }
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#121212] to-[#1E1E1E] blockchain-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="gradient-text">Capital R3alm</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the future of finance through innovative blockchain solutions and a commitment to democratizing wealth creation for everyone.
            </p>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {companyHighlights.map((stat, index) => (
              <div key={index} className={`glass-effect rounded-xl p-6 text-center scale-on-hover slide-up stagger-${index + 1}`}>
                <div className="text-3xl font-bold text-[#FFD700] mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Sections */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Learn More <span className="gradient-text">About Us</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore different aspects of our company, mission, and technical approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutSections.map((section, index) => (
              <Link
                key={index}
                to={section.path}
                className={`group slide-up stagger-${index + 1}`}
              >
                <div className="glass-effect rounded-2xl p-8 h-full hover:bg-[#1E1E1E]/80 transition-all duration-300 scale-on-hover">
                  <div className={`w-16 h-16 bg-gradient-to-br ${section.color} rounded-full flex items-center justify-center mb-6 floating`}>
                    <section.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00BFFF] transition-colors duration-300">
                    {section.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{section.description}</p>
                  <div className="flex items-center text-[#00BFFF] group-hover:text-[#FFD700] transition-colors duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story Preview */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 slide-up">
              <h2 className="text-4xl font-bold text-white text-reveal">
                Building the Future of <span className="gradient-text">Financial Services</span>
              </h2>
              <p className="text-gray-300 leading-relaxed text-reveal stagger-1">
                Capital R3alm was founded on the belief that everyone deserves access to sophisticated 
                financial tools and investment opportunities. We combine the transparency and innovation 
                of blockchain technology with the security and compliance of traditional financial services.
              </p>
              <p className="text-gray-300 leading-relaxed text-reveal stagger-2">
                Our comprehensive ecosystem spans five operational subsidiaries and six innovative products, 
                creating synergies that benefit all participants in our network.
              </p>
              <Link
                to="/about/vision-mission"
                className="inline-flex items-center px-6 py-3 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic space-x-2 text-reveal stagger-3"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="relative slide-up stagger-1">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Team collaboration"
                className="rounded-xl shadow-2xl w-full scale-on-hover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/60 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}