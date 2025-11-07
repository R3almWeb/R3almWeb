// src/components/Navbar.tsx
import React, { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LogOut, Loader2, User, Search } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useMenuToggle } from '../hooks/useMenuToggle';

// Menu items structure (extendable via props if dynamic)
const menuItems = [
  { name: 'Home', path: '/', icon: <Search className="h-4 w-4" /> },
  { 
    name: 'About', 
    path: '/about', 
    icon: <User className="h-4 w-4" />,
    children: [
      { name: 'Vision & Mission', path: '/about/vision-mission' },
      { name: 'Partnerships', path: '/about/partnerships' },
      { name: 'Architecture', path: '/about/architecture' },
    ]
  },
  { 
    name: 'Products', 
    path: '/products', 
    icon: <Menu className="h-4 w-4" />,
    children: [
      { name: 'R3alm Crowdfund', path: '/products/crowdfund' },
      { name: 'R3alm Assets', path: '/products/assets' },
      { name: 'R3alm Trade', path: '/products/trade' },
      { name: 'R3alm Governance', path: '/products/governance' },
      { name: 'R3alm Connect', path: '/products/connect' },
    ]
  },
  { name: 'Blog', path: '/blog', icon: <User className="h-4 w-4" /> },
  { name: 'FAQ', path: '/faq', icon: <User className="h-4 w-4" /> },
  { name: 'Waitlist', path: '/waitlist', icon: <User className="h-4 w-4" /> },
  { name: 'Contact', path: '/contact', icon: <User className="h-4 w-4" /> },
];

interface NavbarProps {} // Extend if needed

const Navbar: React.FC<NavbarProps> = memo(() => {
  const location = useLocation();
  const { user, loading, logout } = useAuth();
  const { isOpen: isMobileOpen, setIsOpen: setMobileOpen, ref: mobileRef } = useMenuToggle(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
    setMobileOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Extend with search API (e.g., Supabase query)
    console.log('Search:', searchQuery);
    setSearchQuery('');
  };

  const isAuthenticated = !loading && user && user.id;
  const isAdminOrEditor = isAuthenticated && (user.role === 'ADMIN' || user.role === 'EDITOR');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/95 backdrop-blur-md border-b border-gray-800/50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <svg className="h-8 w-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-xl font-bold text-white">R3ALM</span>
          </Link>

          {/* Search - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                aria-label="Search"
              />
            </div>
          </form>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <li key={item.path} className="relative group">
                <Link
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-cyan-400 bg-cyan-900/20'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                  aria-haspopup={item.children ? 'true' : 'false'}
                  aria-expanded={false}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
                {item.children && (
                  <AnimatePresence>
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-2 w-64 bg-[#121212] rounded-lg shadow-xl border border-gray-800/50"
                      style={{ top: '100%' }}
                    >
                      {item.children.map((child) => (
                        <li key={child.path}>
                          <Link
                            to={child.path}
                            className={`block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-all ${
                              isActive(child.path) ? 'text-cyan-400 bg-gray-700' : ''
                            }`}
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          {/* Auth & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            {/* Search - Mobile */}
            <form onSubmit={handleSearch} className="md:hidden">
              <button type="submit" className="p-2 text-gray-400 hover:text-white">
                <Search className="h-5 w-5" />
              </button>
            </form>

            {/* Auth Buttons */}
            {loading ? (
              <div className="flex items-center space-x-2 px-2 py-1">
                <Loader2 className="h-4 w-4 animate-spin text-gray-400" />
                <span className="text-sm text-gray-400">Loading...</span>
              </div>
            ) : !isAuthenticated ? (
              <Link
                to="/login"
                className="px-4 py-2 bg-purple-600 rounded-full font-bold text-sm hover:bg-purple-500 transition-all"
                aria-label="Sign in"
              >
                Login
              </Link>
            ) : (
              <>
                {isAdminOrEditor && (
                  <Link
                    to="/admin/dashboard"
                    className="px-4 py-2 bg-red-600 rounded-full font-bold text-sm hover:bg-red-500 transition-all"
                    aria-label="Admin Portal"
                  >
                    Admin
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-600 rounded-full font-bold text-sm hover:bg-red-500 transition-all"
                  disabled={loading}
                  aria-label="Sign out"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin inline mr-1" />
                      Logging out...
                    </>
                  ) : (
                    'Logout'
                  )}
                </button>
              </>
            )}

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!isMobileOpen)}
              className="md:hidden p-1 text-gray-400 hover:text-white"
              aria-label="Toggle menu"
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Off-Canvas Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 z-40 w-80 h-screen bg-[#121212] shadow-2xl md:hidden"
            ref={mobileRef}
            role="menu"
            aria-modal="true"
          >
            <div className="flex flex-col h-full">
              <div className="p-4 border-b border-gray-800 flex-shrink-0">
                <h1 className="text-xl font-bold text-white">Menu</h1>
              </div>
              <nav className="flex-1 overflow-y-auto p-4">
                <ul className="space-y-2">
                  {menuItems.map((item) => (
                    <li key={item.path}>
                      <details className="group" open={false}>
                        <summary className="cursor-pointer flex items-center space-x-2 text-lg font-medium text-gray-300 group-open:text-cyan-400">
                          <span>{item.name}</span>
                          <span className="ml-auto text-gray-400">{item.children ? '▼' : ''}</span>
                        </summary>
                        {item.children && (
                          <ul className="mt-2 ml-4 space-y-1">
                            {item.children.map((child) => (
                              <li key={child.path}>
                                <Link
                                  to={child.path}
                                  onClick={() => setMobileOpen(false)}
                                  className={`block text-gray-300 hover:text-white hover:bg-gray-700 px-2 py-1 rounded ${
                                    isActive(child.path) ? 'text-cyan-400 bg-gray-700' : ''
                                  }`}
                                >
                                  {child.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </details>
                    </li>
                  ))}
                </ul>
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="mt-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      aria-label="Search"
                    />
                  </div>
                </form>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-30"
          />
        )}
      </AnimatePresence>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;