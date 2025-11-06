// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Vision & Mission', path: '/about/vision-mission' },
    { name: 'Partnerships', path: '/about/partnerships' },
    { name: 'Architecture', path: '/about/architecture' },
    { name: 'Products', path: '/products' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Waitlist', path: '/waitlist' },
    { name: 'Contact', path: '/contact' },
  ];

  const productItems = [
    { name: 'R3alm Crowdfund', path: '/products/crowdfund' },
    { name: 'R3alm Assets', path: '/products/assets' },
    { name: 'R3alm Trade', path: '/products/trade' },
    { name: 'R3alm Governance', path: '/products/governance' },
    { name: 'R3alm Connect', path: '/products/connect' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
              R3
            </div>
            <span className="text-2xl font-bold gradient-text">R3ALM</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-all ${
                  isActive(item.path)
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"></span>
                )}
              </Link>
            ))}

            {/* Products Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-white text-sm font-medium px-3 py-2">
                Products ▼
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 glass-effect rounded-lg shadow-2xl border border-white/10">
                {productItems.map((product) => (
                  <Link
                    key={product.path}
                    to={product.path}
                    className={`block px-4 py-3 text-sm hover:bg-white/5 transition-all ${
                      isActive(product.path) ? 'text-cyan-400' : 'text-gray-300'
                    }`}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/waitlist"
              className="ml-8 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-cyan-500/25"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 text-lg font-medium ${
                  isActive(item.path) ? 'text-cyan-400' : 'text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="py-4 px-4">
              <p className="text-sm font-semibold text-gray-400 mb-2">Products</p>
              {productItems.map((product) => (
                <Link
                  key={product.path}
                  to={product.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-4 text-base ${
                    isActive(product.path) ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {product.name}
                </Link>
              ))}
            </div>
            <Link
              to="/waitlist"
              onClick={() => setIsOpen(false)}
              className="block mx-4 mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-center"
            >
              Join Waitlist
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}