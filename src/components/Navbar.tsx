import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Hexagon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function Navbar() {
  const { user, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // When menu opens, expand all dropdowns
  useEffect(() => {
    if (isOpen) {
      // Set all dropdowns as active when menu opens
      setActiveDropdown('all');
    } else {
      setActiveDropdown(null);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'About Us', 
      path: '/about',
      dropdown: [
        { name: 'Vision & Mission', path: '/about/vision-mission' },
        { name: 'Strategic Partnerships', path: '/about/partnerships' },
        { name: 'Technical Architecture', path: '/about/architecture' }
      ]
    },
    {
      name: 'Products',
      path: '/products',
      dropdown: [
        { name: 'R3alm Crowdfund', path: '/products/crowdfund' },
        { name: 'R3alm Assets', path: '/products/assets' },
        { name: 'R3alm Trade', path: '/products/trade' },
        { name: 'R3alm Governance', path: '/products/governance' },
        { name: 'R3alm Connect', path: '/products/connect' }
      ]
    },
    {
      name: 'Pipeline',
      dropdown: [
        { name: 'R3alm Insights', path: '/products-dev/insights' },
        { name: 'R3alm DeFi', path: '/products-dev/defi' },
        { name: 'R3alm Wallet', path: '/products-dev/wallet' },
        { name: 'R3alm Collectibles', path: '/products-dev/collectibles' },
        { name: 'R3alm Shield', path: '/products-dev/shield' },
        { name: 'R3alm Academy', path: '/products-dev/academy' }
      ]
    },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Waitlist', path: '/waitlist' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#121212]/95 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Hexagon className="h-10 w-10 text-[#00BFFF] group-hover:text-[#FFD700] transition-all duration-300 group-hover:rotate-180" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-white">R3</span>
              </div>
            </div>
            <span className="text-2xl font-bold gradient-text">Capital R3alm</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 cursor-pointer py-2 text-white hover:text-[#00BFFF] transition-all duration-300 hover:scale-105"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span className="font-medium">{item.name}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    
                    {/* Dropdown */}
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 glass-effect rounded-lg shadow-xl py-2 z-50 slide-up">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            className="block px-4 py-3 text-white hover:text-[#00BFFF] hover:bg-white/5 transition-all duration-300 hover:translate-x-2"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`font-medium transition-all duration-300 hover:scale-105 ${
                      location.pathname === item.path
                        ? 'text-[#00BFFF]'
                        : 'text-white hover:text-[#00BFFF]'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="flex items-center space-x-4 ml-8">
              {user ? (
                <div className="flex items-center space-x-4">
                  {(user.role === 'admin' || user.role === 'editor') && (
                    <Link
                      to="/admin/dashboard"
                      className="text-[#FFD700] hover:text-[#00BFFF] transition-all duration-300 hover:scale-105"
                    >
                      Admin
                    </Link>
                  )}
                  <button
                    onClick={signOut}
                    className="text-white hover:text-[#00BFFF] transition-all duration-300 hover:scale-105"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-white hover:text-[#00BFFF] transition-all duration-300 hover:scale-105"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-6 py-2 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-[#00BFFF] transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-[#121212] transform transition-transform duration-300 ease-in-out lg:hidden ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } border-r border-white/10 shadow-2xl`}>
        <div className="h-full overflow-y-auto">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/20 bg-[#1E1E1E] sticky top-0 z-10">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Hexagon className="h-8 w-8 text-[#00BFFF]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-white">R3</span>
                </div>
              </div>
              <span className="text-xl font-bold gradient-text">Capital R3alm</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-[#00BFFF] transition-colors duration-300"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="px-6 py-4 space-y-2">
            {menuItems.map((item) => (
              <div key={item.name} className="border-b border-white/5 pb-2 mb-2 last:border-b-0">
                {item.dropdown ? (
                  <div>
                    <div className="flex items-center">
                      <Link
                        to={item.path || '#'}
                        className={`flex-1 py-3 px-3 rounded-lg font-medium transition-all duration-300 ${
                          location.pathname === item.path
                            ? 'text-[#00BFFF] bg-[#00BFFF]/20 border border-[#00BFFF]/30'
                            : 'text-white hover:text-[#00BFFF] hover:bg-[#1E1E1E]/60'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <button
                        className="p-3 text-white hover:text-[#00BFFF] hover:bg-[#1E1E1E]/60 rounded-lg transition-all duration-300"
                        onClick={() => setActiveDropdown(activeDropdown === 'all' ? null : 'all')}
                      >
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                          activeDropdown === 'all' ? 'rotate-180' : ''
                        }`} />
                      </button>
                    </div>
                    {activeDropdown === 'all' && (
                      <div className="ml-4 mt-2 space-y-1 slide-up">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            className="block py-2 px-3 text-gray-300 hover:text-[#00BFFF] hover:bg-[#1E1E1E]/60 rounded-lg transition-all duration-300 text-sm"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`block py-3 px-3 rounded-lg font-medium transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'text-[#00BFFF] bg-[#00BFFF]/20 border border-[#00BFFF]/30'
                        : 'text-white hover:text-[#00BFFF] hover:bg-[#1E1E1E]/60'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* User Section */}
          <div className="border-t border-white/20 p-6 space-y-3 bg-[#1E1E1E] mt-auto">
            {user ? (
              <div className="space-y-2">
                <div className="text-center py-3 px-4 bg-[#121212] rounded-lg border border-white/10">
                  <div className="text-sm text-[#FFD700] font-medium">Welcome back</div>
                  <div className="font-semibold text-white">{user.name || user.email}</div>
                  <div className="text-xs text-gray-400 capitalize">{user.role} Account</div>
                </div>
                
                {(user.role === 'admin' || user.role === 'editor') && (
                  <Link
                    to="/admin/dashboard"
                    className="block w-full py-3 px-4 text-center text-[#FFD700] hover:text-[#00BFFF] bg-[#121212] hover:bg-[#1E1E1E] rounded-lg transition-all duration-300 font-medium border border-[#FFD700]/30 hover:border-[#00BFFF]/50"
                    onClick={() => setIsOpen(false)}
                  >
                    Admin Dashboard
                  </Link>
                )}
                <button
                  onClick={() => {
                    signOut();
                    setIsOpen(false);
                  }}
                  className="w-full py-3 px-4 text-red-400 hover:text-red-300 bg-[#121212] hover:bg-red-500/10 rounded-lg transition-all duration-300 font-medium border border-red-500/30 hover:border-red-400/50"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <Link
                  to="/login"
                  className="block w-full py-3 px-4 text-center text-white hover:text-[#00BFFF] bg-[#121212] hover:bg-[#1E1E1E] rounded-lg transition-all duration-300 font-medium border border-white/30 hover:border-[#00BFFF]/50"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block w-full py-3 px-4 bg-[#00BFFF] text-white text-center rounded-lg hover:bg-[#0099CC] transition-all duration-300 font-medium border border-[#00BFFF]/50"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}