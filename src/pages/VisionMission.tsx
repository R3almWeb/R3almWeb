import React from 'react';
import { Target, Eye, Compass, Star } from 'lucide-react';

export function VisionMission() {
  return (
    <div className="fade-in">
      <section className="py-20 bg-gradient-to-br from-[#121212] to-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="gradient-text">Vision & Mission</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Guiding principles that drive our commitment to democratizing wealth creation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Vision */}
            <div className="glass-effect rounded-2xl p-12 scale-on-hover slide-up">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00BFFF] to-[#0099CC] rounded-full flex items-center justify-center mr-6 floating">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#FFD700] text-reveal">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6 text-reveal stagger-1">
                To democratize wealth creation by providing innovative investment opportunities 
                in real estate, startups, and digital assets through cutting-edge blockchain technology.
              </p>
              <p className="text-gray-400 leading-relaxed text-reveal stagger-2">
                We envision a world where financial opportunities are accessible to everyone, 
                regardless of their background or starting capital. Through our integrated 
                ecosystem, we're breaking down traditional barriers and creating new pathways 
                to prosperity.
              </p>
            </div>

            {/* Mission */}
            <div className="glass-effect rounded-2xl p-12 scale-on-hover slide-up stagger-1">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center mr-6 floating stagger-1">
                  <Target className="h-8 w-8 text-[#121212]" />
                </div>
                <h2 className="text-3xl font-bold text-[#00BFFF] text-reveal">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6 text-reveal stagger-1">
                To deliver secure, transparent, and scalable solutions with a focus on 
                compliance and community engagement, empowering individuals to build wealth 
                through Web3 innovation.
              </p>
              <p className="text-gray-400 leading-relaxed text-reveal stagger-2">
                We are committed to maintaining the highest standards of security and regulatory 
                compliance while fostering a supportive community that empowers our users to 
                make informed investment decisions.
              </p>
            </div>
          </div>

          {/* Core Principles */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="gradient-text">Core Principles</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The fundamental beliefs that shape our approach to Web3 finance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Compass,
                title: "Innovation-Driven",
                description: "We continuously explore new technologies and methodologies to stay at the forefront of financial innovation."
              },
              {
                icon: Star,
                title: "Community-Centric",
                description: "Our users are at the heart of everything we do. We build solutions that serve their needs and empower their success."
              },
              {
                icon: Target,
                title: "Results-Focused",
                description: "We measure our success by the tangible value we create for our users and their financial outcomes."
              },
              {
                icon: Eye,
                title: "Transparency First",
                description: "We believe in open communication, clear processes, and transparent fee structures in all our operations."
              }
            ].map((principle, index) => (
              <div key={index} className={`glass-effect rounded-xl p-8 hover:bg-[#1E1E1E]/80 transition-all duration-300 scale-on-hover slide-up stagger-${index + 1}`}>
                <principle.icon className="h-12 w-12 text-[#00BFFF] mb-6 floating" />
                <h3 className="text-2xl font-bold text-white mb-4 text-reveal">{principle.title}</h3>
                <p className="text-gray-300 leading-relaxed text-reveal stagger-1">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}