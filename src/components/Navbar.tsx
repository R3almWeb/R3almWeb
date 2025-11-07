// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  // === BULLETPROOF SCROLL LOCK ===
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/');
  };

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

  // Robust auth check: Treat as logged out if no user or no user.id
  const isAuthenticated = user && user.id;

  return (
    <>
      {/* === MOBILE MODAL MENU === */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 z-50 w-80 bg-[#121212] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <h1 className="text-2xl font-bold text-white">R3ALM</h1>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="p-6">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block text-2xl font-medium transition-all ${
                        isActive(item.path) ? 'text-cyan-400' : 'text-gray-300'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <details className="group">
                    <summary className="cursor-pointer text-xl font-semibold text-gray-300 group-open:text-cyan-400">
                      Products
                    </summary>
                    <ul className="mt-2 space-y-2 ml-4">
                      {productItems.map((product) => (
                        <li key={product.path}>
                          <Link
                            to={product.path}
                            onClick={() => setIsOpen(false)}
                            className={`block text-xl ${
                              isActive(product.path) ? 'text-cyan-400' : 'text-gray-300'
                            }`}
                          >
                            {product.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              </ul>
              <Link
                to="/waitlist"
                onClick={() => setIsOpen(false)}
                className="block mt-10 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-center text-lg hover:scale-105 transition-all shadow-lg"
              >
                Join Waitlist
              </Link>
              {/* Mobile Auth */}
              {!isAuthenticated ? (
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block mt-6 px-8 py-4 bg-purple-600 rounded-full font-bold text-center text-lg hover:scale-105 transition-all shadow-lg"
                >
                  Login
                </Link>
              ) : (
                <>
                  {(user.role === 'ADMIN' || user.role === 'EDITOR') && (
                    <Link
                      to="/admin/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="block mt-6 px-8 py-4 bg-red-600 rounded-full font-bold text-center text-lg hover:scale-105 transition-all shadow-lg"
                    >
                      Admin Portal
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="block mt-6 px-8 py-4 bg-red-600 rounded-full font-bold text-center text-lg hover:scale-105 transition-all shadow-lg"
                  >
                    Logout
                  </button>
                </>
              )}
            </nav>
          </div>
        </div>
      )}

      {/* === DESKTOP NAVBAR === */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#121212]/95 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <svg
                  className="h-8 w-8 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span className="text-xl font-bold text-white">R3ALM</span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`transition-all duration-200 relative ${
                    isActive(item.path)
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-white'
                  } after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full ${
                    isActive(item.path) ? 'after:w-full' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <details className="group relative">
                <summary className="cursor-pointer text-gray-300 hover:text-white font-medium transition-all">
                  Products
                </summary>
                <div className="absolute left-0 mt-2 w-64 bg-[#121212] rounded-lg shadow-xl border border-gray-800/50 opacity-0 invisible group-open:opacity-100 group-open:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {productItems.map((product) => (
                      <Link
                        key={product.path}
                        to={product.path}
                        className={`block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-all ${
                          isActive(product.path) ? 'text-cyan-400 bg-gray-800' : ''
                        }`}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </details>
              <Link
                to="/waitlist"
                className="hidden md:inline-flex px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-sm hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg hover:shadow-xl"
              >
                Join Waitlist
              </Link>
              {/* Desktop Auth */}
              <div className="flex items-center space-x-4">
                {!isAuthenticated ? (
                  <Link
                    to="/login"
                    className="px-4 py-2 bg-purple-600 rounded-full font-bold text-sm hover:bg-purple-500 transition-all"
                  >
                    Login
                  </Link>
                ) : (
                  <>
                    {(user.role === 'ADMIN' || user.role === 'EDITOR') && (
                      <Link
                        to="/admin/dashboard"
                        className="px-4 py-2 bg-red-600 rounded-full font-bold text-sm hover:bg-red-500 transition-all"
                      >
                        Admin Portal
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="px-4 py-2 bg-red-600 rounded-full font-bold text-sm hover:bg-red-500 transition-all"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </nav>
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="text-gray-400 hover:text-white p-1"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}