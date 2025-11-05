import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Handshake } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To deliver secure, transparent, and scalable Web3 financial solutions with a focus on compliance and community engagement.",
      link: "/about/vision-mission"
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To democratize wealth creation by providing innovative investment opportunities in real estate, startups, and digital assets.",
      link: "/about/vision-mission"
    },
    {
      icon: Handshake,
      title: "Strategic Partnerships",
      description: "Collaborating with industry leaders like North Capital and Rialto Markets to ensure regulatory compliance and market access.",
      link: "/about/partnerships"
    }
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#121212] to-[#1E1E1E] blockchain-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="gradient-text">Capital R3alm</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future of finance through innovative blockchain solutions 
              and a commitment to democratizing wealth creation for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Link key={index} to={item.link} className={`group slide-up stagger-${index + 1}`}>
                <div className="glass-effect rounded-xl p-8 h-full hover:bg-[#1E1E1E]/80 transition-all duration-300 scale-on-hover">
                  <item.icon className="h-12 w-12 text-[#00BFFF] mb-6 group-hover:text-[#FFD700] transition-colors duration-300" />
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{item.description}</p>
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

      {/* Company Story */}
      <section className="py-20 bg-[#0A0A0A]">
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
                Our comprehensive ecosystem spans five operational divisions and six innovative products, 
                creating synergies that benefit all participants in our network. From tokenized real estate 
                to AI-driven trading, from corporate governance to social media management, we provide 
                the tools needed to succeed in the digital economy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 text-reveal stagger-3">
                <Link
                  to="/about/vision-mission"
                  className="px-6 py-3 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic text-center"
                >
                  Our Vision & Mission
                </Link>
                <Link
                  to="/about/architecture"
                  className="px-6 py-3 border border-[#FFD700] text-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-[#121212] transition-all duration-300 button-magnetic text-center"
                >
                  Technical Architecture
                </Link>
              </div>
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

      {/* Values Section */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do at Capital R3alm
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Transparency", description: "Open, honest communication in all our operations" },
              { title: "Innovation", description: "Continuously pushing the boundaries of financial technology" },
              { title: "Security", description: "Protecting our users' assets with industry-leading security measures" },
              { title: "Compliance", description: "Maintaining the highest standards of regulatory compliance" }
            ].map((value, index) => (
              <div key={index} className={`text-center slide-up stagger-${index + 1}`}>
                <div className="w-16 h-16 bg-gradient-to-br from-[#00BFFF] to-[#FFD700] rounded-full mx-auto mb-4 flex items-center justify-center text-[#121212] font-bold text-xl floating">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-reveal">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed text-reveal stagger-1">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}