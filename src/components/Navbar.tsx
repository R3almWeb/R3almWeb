// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

// Inline SVG icons (no external dependencies – 100% reliable)
const IconHome = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const IconAbout = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconProducts = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const IconBlog = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const IconFAQ = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 1.763-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconWaitlist = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconContact = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const IconDashboard = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h-4m-6 0H5a2 2 0 002-2v-4a2 2 0 012-2h6a2 2 0 012 2v4a2 2 0 002 2z" />
  </svg>
);

const IconUsers = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H9a2 2 0 01-2-2v-1a6 6 0 0112 0v1a2 2 0 01-2 2zm-6-4a6 6 0 00-6 6h12a6 6 0 00-6-6z" />
  </svg>
);

const IconSettings = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconChevronLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const IconChevronRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export const Navbar = () => {
  const { user, signOut } = useAuth();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(() => {
    const saved = localStorage.getItem('navbarCollapsed');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('navbarCollapsed', JSON.stringify(collapsed));
  }, [collapsed]);

  const toggleCollapse = () => setCollapsed(prev => !prev);

  const menuItems = [
    { path: '/', label: 'Home', Icon: IconHome },
    { path: '/about', label: 'About', Icon: IconAbout },
    { path: '/products', label: 'Products', Icon: IconProducts },
    { path: '/blog', label: 'Blog', Icon: IconBlog },
    { path: '/faq', label: 'FAQ', Icon: IconFAQ },
    { path: '/waitlist', label: 'Waitlist', Icon: IconWaitlist },
    { path: '/contact', label: 'Contact', Icon: IconContact },
  ];

  const adminItems = [
    { path: '/admin/dashboard', label: 'Dashboard', Icon: IconDashboard },
    { path: '/admin/blog', label: 'Blog Manager', Icon: IconBlog },
    { path: '/admin/faq-manager', label: 'FAQ Manager', Icon: IconFAQ },
    { path: '/admin/waitlist', label: 'Waitlist Manager', Icon: IconWaitlist },
    { path: '/admin/users', label: 'User Manager', Icon: IconUsers },
    { path: '/admin/settings', label: 'Settings', Icon: IconSettings },
  ];

  const NavLink = ({ item }: { item: any }) => {
    const Icon = item.Icon;
    const isActive = item.path === '/' ? location.pathname === '/' : location.pathname.startsWith(item.path);
    return (
      <Link
        to={item.path}
        className={`flex items-center w-full px-4 py-3 rounded-xl text-sm font-medium transition-all group relative
          ${isActive ? 'bg-cyan-500/10 text-cyan-400 shadow-lg shadow-cyan-500/20' : 'text-gray-400 hover:bg-gray-800/60 hover:text-white'}
        `}
        onClick={() => window.innerWidth < 1024 && setCollapsed(true)}
      >
        <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-cyan-400' : 'text-gray-500'}`} />
        <span className={`ml-3 transition-opacity duration-300 ${collapsed ? 'opacity-0' : 'opacity-100'}`}>
          {item.label}
        </span>
        {collapsed && (
          <span className="absolute left-full ml-3 px-4 py-2 bg-gray-900 text-white text-xs rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 border border-gray-800 pointer-events-none">
            {item.label}
          </span>
        )}
      </Link>
    );
  };

  return (
    <>
      {/* Mobile backdrop */}
      {!collapsed && window.innerWidth < 1024 && (
        <div className="fixed inset-0 bg-black/70 z-40" onClick={toggleCollapse} />
      )}

      {/* Sidebar */}
      <nav className={`fixed left-0 top-0 h-full bg-gray-950 border-r border-gray-800 z-50 transition-all duration-300 ease-in-out flex flex-col ${collapsed ? 'w-20' : 'w-64'}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-800">
          <h1 className={`font-bold text-2xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent transition-all duration-300 ${collapsed ? 'w-0 opacity-0 overflow-hidden' : 'w-auto opacity-100'}`}>
            R3alm
          </h1>
          <button
            onClick={toggleCollapse}
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
            aria-label="Toggle sidebar"
          >
            {collapsed ? <IconChevronRight className="w-6 h-6 text-gray-400" /> : <IconChevronLeft className="w-6 h-6 text-gray-400" />}
          </button>
        </div>

        {/* Menu */}
        <div className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {menuItems.map(item => (
              <li key={item.path}>
                <NavLink item={item} />
              </li>
            ))}
          </ul>

          {/* Admin Section */}
          {user && ['EDITOR', 'ADMIN'].includes(user.role) && (
            <>
              <div className="my-5 mx-3 border-t border-gray-800" />
              <p className={`px-7 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 transition-opacity duration-300 ${collapsed ? 'opacity-0' : 'opacity-100'}`}>
                Admin Panel
              </p>
              <ul className="space-y-1 px-3">
                {adminItems.map(item => (
                  <li key={item.path}>
                    <NavLink item={item} />
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-gray-800">
          {user ? (
            <div className="space-y-4">
              <div className={`transition-all duration-300 ${collapsed ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto'}`}>
                <p className="text-xs text-gray-500">Signed in as</p>
                <p className="text-sm font-medium text-cyan-400 truncate">{user.email}</p>
                <p className="text-xs text-gray-500">Role: {user.role}</p>
              </div>
              <button
                onClick={signOut}
                className="w-full py-3 bg-red-500/10 text-red-400 rounded-xl hover:bg-red-500/20 transition-all text-sm font-medium flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7" />
                </svg>
                {collapsed ? '' : 'Sign Out'}
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="block text-center py-3 bg-cyan-500 text-white rounded-xl hover:bg-cyan-600 transition text-sm font-medium"
              onClick={() => setCollapsed(true)}
            >
              Login
            </Link>
          )}
        </div>
      </nav>

      {/* Main content padding – NO OVERLAP */}
      <div className={`transition-padding duration-300 ${collapsed ? 'pl-20' : 'pl-64'} min-h-screen`} />
    </>
  );
};