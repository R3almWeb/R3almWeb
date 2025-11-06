// src/pages/VisionMission.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function VisionMission() {
  return (
    <div className="min-h-screen bg-[#121212] text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <Link
          to="/about"
          className="inline-flex items-center text-[#00BFFF] hover:text-[#FFD700] mb-8 transition-colors duration-300"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to About
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Vision & Mission
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our guiding principles that drive the R3alm ecosystem forward.
          </p>
        </div>

        {/* Vision Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                To create a borderless financial world where every individual has equal access to wealth-building opportunities, 
                powered by blockchain innovation and decentralized principles. We envision a future where traditional barriers 
                to investment are eliminated, and global communities collaborate seamlessly to drive economic empowerment.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-[#00BFFF] rounded-full"></span>
                  <span>Democratizing access to high-yield investments</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-[#00BFFF] rounded-full"></span>
                  <span>Building trust through transparency and security</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-[#00BFFF] rounded-full"></span>
                  <span>Fostering innovation in Web3 financial services</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="glass-effect rounded-2xl p-8 h-full">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600"
                  alt="Vision Illustration"
                  className="rounded-xl w-full h-64 object-cover mb-4"
                />
                <p className="text-center text-sm text-gray-400 italic">
                  "Empowering the next generation of wealth creators."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glass-effect rounded-2xl p-8 h-full">
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600"
                  alt="Mission Illustration"
                  className="rounded-xl w-full h-64 object-cover mb-4"
                />
                <p className="text-center text-sm text-gray-400 italic">
                  "Innovation meets integrity in every transaction."
                </p>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                To deliver cutting-edge financial products that integrate traditional finance with blockchain technology, 
                ensuring compliance, security, and user-centric design. Through our subsidiaries and innovative solutions, 
                we aim to educate, protect, and empower users to navigate the Web3 landscape with confidence.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                  <span>Provide secure and scalable investment platforms</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                  <span>Educate communities on decentralized finance</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                  <span>Drive partnerships for ecosystem growth</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🔒', title: 'Security First', desc: 'Enterprise-grade protection for every asset and transaction.' },
              { icon: '🌍', title: 'Global Inclusion', desc: 'Accessible tools for users worldwide, regardless of location.' },
              { icon: '🚀', title: 'Innovation Driven', desc: 'Pioneering solutions that push the boundaries of Web3.' },
              { icon: '🤝', title: 'Community Focused', desc: 'Empowering users through education and collaborative governance.' },
              { icon: '⚖️', title: 'Compliance Centric', desc: 'Adhering to global regulations while embracing decentralization.' },
              { icon: '📈', title: 'Growth Oriented', desc: 'Sustainable strategies for long-term value creation.' }
            ].map((value, index) => (
              <div key={index} className="glass-effect rounded-xl p-6 text-center scale-on-hover">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/products"
            className="inline-flex items-center px-8 py-4 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow"
          >
            Join Our Mission
            <ArrowLeft className="h-5 w-5 ml-2 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}