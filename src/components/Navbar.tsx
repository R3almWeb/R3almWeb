// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // === ULTRA-LOCK SCROLL (Works on iOS + Android + Desktop) ===
  useEffect(() => {
    if (isOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;

      // Lock BOTH html and body
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restore scroll
      const scrollY = document.body.style.top;
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    // Cleanup on unmount
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

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
    <>
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
                <button className="text-gray-300 hover:text-white text-sm font-medium px-3 py-2 flex items-center gap-1">
                  Products <span className="text-xs">▼</span>
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 glass-effect rounded-lg shadow-2xl border border-white/10 p-2">
                  {productItems.map((product) => (
                    <Link
                      key={product.path}
                      to={product.path}
                      className={`block px-4 py-3 text-sm rounded-md hover:bg-white/5 transition-all ${
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
              className="lg:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* === MODAL MOBILE MENU (Now with INTERNAL scrolling only) === */}
      {isOpen && (
        <>
          {/* Dark Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Panel - Scrollable ONLY inside */}
          <div className="fixed inset-x-0 top-0 z-50 bg-[#121212] shadow-2xl flex flex-col max-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/10 shrink-0">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <span className="text-2xl font-bold gradient-text">R3ALM</span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <X size={28} className="text-white" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 py-8">
              <div className="space-y-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block text-2xl font-medium transition-all ${
                      isActive(item.path) ? 'text-cyan-400' : 'text-gray-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="pt-6">
                  <p className="text-sm font-semibold text-gray-400 mb-4">Products</p>
                  <div className="space-y-4 pl-4">
                    {productItems.map((product) => (
                      <Link
                        key={product.path}
                        to={product.path}
                        onClick={() => setIsOpen(false)}
                        className={`block text-xl ${
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
                  onClick={() => setIsOpen(false)}
                  className="block mt-10 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-center text-lg hover:scale-105 transition-all shadow-lg"
                >
                  Join Waitlist
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}