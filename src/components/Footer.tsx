import React from 'react';
import { Link } from 'react-router-dom';
import { Hexagon, Twitter, Linkedin, Github, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1E1E1E] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 slide-up">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 text-reveal stagger-1">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Hexagon className="h-8 w-8 text-[#00BFFF] floating" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-white">R3</span>
                </div>
              </div>
              <span className="text-xl font-bold gradient-text">Capital R3alm</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Democratizing wealth creation through innovative Web3 finance solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#00BFFF] transition-colors duration-300">
                <Twitter className="h-5 w-5 hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00BFFF] transition-colors duration-300">
                <Linkedin className="h-5 w-5 hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00BFFF] transition-colors duration-300">
                <Github className="h-5 w-5 hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00BFFF] transition-colors duration-300">
                <Mail className="h-5 w-5 hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Subsidiaries */}
          <div className="space-y-4 text-reveal stagger-2">
            <h3 className="text-lg font-semibold text-[#FFD700] text-reveal">Products</h3>
            <div className="space-y-2">
              <Link to="/products/crowdfund" className="block text-gray-400 hover:text-[#00BFFF] transition-colors duration-300 text-sm">
                R3alm Crowdfund
              </Link>
              <Link to="/products/assets" className="block text-gray-400 hover:text-[#00BFFF] transition-colors duration-300 text-sm">
                R3alm Assets
              </Link>
              <Link to="/products/trade" className="block text-gray-400 hover:text-[#00BFFF] transition-colors duration-300 text-sm">
                R3alm Trade
              </Link>
              <Link to="/products/governance" className="block text-gray-400 hover:text-[#00BFFF] transition-colors duration-300 text-sm">
                R3alm Governance
              </Link>
              <Link to="/products/connect" className="block text-gray-400 hover:text-[#00BFFF] transition-colors duration-300 text-sm">
                R3alm Connect
              </Link>
            </div>
          </div>

          {/* Products in Development */}
          <div className="space-y-4 text-reveal stagger-3">
            <h3 className="text-lg font-semibold text-[#FFD700] text-reveal">Products in Development</h3>
            <div className="space-y-2">
              <Link to="/products-dev/insights" className="block text-gray-400 hover:text-[#00BFFF] transition-colors duration-300 text-sm">
                R3alm Insights
              </Link>
              <Link to="/products-dev/defi" className="block text-gray-400 hover:text-[#00BFFF] transition-colors duration-300 text-sm">
                R3alm DeFi
              </Link>
              <Link to="/products-dev/wallet" className="block text-gray-400 hover:text-[#00BFFF] transition-colors duration-300 text-sm">
                R3alm Wallet
              </Link>
              <Link to="/products-dev/shield" className="block text-gray-400 hover:text-[#00BFFF] transition-colors duration-300 text-sm">
                R3alm Shield
              </Link>
              <Link to="/products-dev/academy" className="block text-gray-400 hover:text-[#00BFFF] transition-colors duration-300 text-sm">
                R3alm Academy
              </Link>
            </div>
          </div>

          {/* Legal & Contact */}
          <div className="space-y-4 text-reveal stagger-4">
            <h3 className="text-lg font-semibold text-[#FFD700] text-reveal">Legal</h3>
            <div className="space-y-2">
              <Link to="/privacy" className="block text-gray-400 hover:text-[#00BFFF] transition-colors duration-300 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-gray-400 hover:text-[#00BFFF] transition-colors duration-300 text-sm">
                Terms of Service
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-[#00BFFF] transition-colors duration-300 text-sm">
                Contact Us
              </Link>
              <Link to="/blog" className="block text-gray-400 hover:text-[#00BFFF] transition-colors duration-300 text-sm">
                Blog
              </Link>
              <Link to="/faq" className="block text-gray-400 hover:text-[#00BFFF] transition-colors duration-300 text-sm">
                FAQ
              </Link>
              <Link to="/waitlist" className="block text-gray-400 hover:text-[#00BFFF] transition-colors duration-300 text-sm">
                Waitlist
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1E1E1E] mt-12 pt-8 text-center text-reveal">
          <p className="text-gray-400 text-sm">
            © 2025 Capital R3alm. All rights reserved. Democratizing wealth creation in Web3 finance.
          </p>
        </div>
      </div>
    </footer>
  );
}