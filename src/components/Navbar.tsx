// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

// Inline Heroicons (no external package needed)
const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const InformationCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const PencilSquareIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const QuestionMarkCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 1.763-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const EnvelopeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const HomeModernIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h-4m-6 0H5a2 2 0 002-2v-4a2 2 0 012-2h6a2 2 0 012 2v4a2 2 0 002 2z" />
  </svg>
);

const DocumentTextIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H9a2 2 0 01-2-2v-1a6 6 0 0112 0v1a2 2 0 01-2 2zm-6-4a6 6 0 00-6 6h12a6 6 0 00-6-6z" />
  </svg>
);

const Cog6ToothIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export const Navbar = () => {
  const { user, signOut } = useAuth();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => setCollapsed(!collapsed);

  const menuItems = [
    { path: '/', label: 'Home', icon: HomeIcon },
    { path: '/about', label: 'About', icon: InformationCircleIcon },
    { path: '/products', label: 'Products', icon: CubeIcon },
    { path: '/blog', label: 'Blog', icon: PencilSquareIcon },
    { path: '/faq', label: 'FAQ', icon: QuestionMarkCircleIcon },
    { path: '/waitlist', label: 'Waitlist', icon: ClockIcon },
    { path: '/contact', label: 'Contact', icon: EnvelopeIcon },
  ];

  const adminItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: HomeModernIcon },
    { path: '/admin/blog', label: 'Blog Manager', icon: DocumentTextIcon },
    { path: '/admin/faq-manager', label: 'FAQ Manager', icon: QuestionMarkCircleIcon },
    { path: '/admin/waitlist', label: 'Waitlist Manager', icon: ClockIcon },
    { path: '/admin/users', label: 'User Manager', icon: UsersIcon },
    { path: '/admin/settings', label: 'Settings', icon: Cog6ToothIcon },
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {!collapsed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-40 lg:hidden"
          onClick={toggleCollapse}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full bg-gray-950 border-r border-gray-800 z-50 transition-all duration-300 ease-in-out flex flex-col font-['Inter_var',system-ui,sans-serif]
          ${collapsed ? 'w-20' : 'w-64'}
        `}
      >
        {/* Header with toggle */}
        <div className="flex items-center justify-between p-5 border-b border-gray-800">
          <h1
            className={`font-bold text-2xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent transition-all ${
              collapsed ? 'opacity-0 w-0' : 'opacity-100'
            }`}
          >
            R3alm
          </h1>
          <button
            onClick={toggleCollapse}
            className="text-gray-400 hover:text-white transition-all"
            aria-label="Toggle menu"
          >
            {collapsed ? <ChevronRightIcon className="w-6 h-6" /> : <ChevronLeftIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Scrollable menu */}
        <div className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-0.5 px-3">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center py-2.5 px-3 rounded-xl transition-all group text-sm font-medium relative block w-full
                      ${isActive ? 'bg-cyan-500/10 text-cyan-400 shadow-lg shadow-cyan-500/20' : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'}
                    `}
                    onClick={() => window.innerWidth < 1024 && setCollapsed(true)}
                  >
                    <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-cyan-400' : 'text-gray-500'}`} />
                    <span className={`ml-3 transition-all ${collapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
                      {item.label}
                    </span>
                    {collapsed && (
                      <span className="absolute left-full ml-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 border border-gray-800 pointer-events-none">
                        {item.label}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Admin Section */}
          {user && (user.role === 'EDITOR' || user.role === 'ADMIN') && (
            <>
              <div className={`my-4 mx-3 border-t border-gray-800 ${collapsed ? 'opacity-0' : ''}`} />
              <p className={`text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-6 transition-all ${collapsed ? 'opacity-0' : 'opacity-100'}`}>
                Admin
              </p>
              <ul className="space-y-0.5 px-3">
                {adminItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname.startsWith(item.path);
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`flex items-center py-2.5 px-3 rounded-xl transition-all group text-sm font-medium relative block w-full
                          ${isActive ? 'bg-cyan-500/10 text-cyan-400 shadow-lg shadow-cyan-500/20' : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'}
                        `}
                        onClick={() => window.innerWidth < 1024 && setCollapsed(true)}
                      >
                        <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-cyan-400' : 'text-gray-500'}`} />
                        <span className={`ml-3 transition-all ${collapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
                          {item.label}
                        </span>
                        {collapsed && (
                          <span className="absolute left-full ml-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 border border-gray-800 pointer-events-none">
                            {item.label}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>

        {/* User footer */}
        <div className="p-4 border-t border-gray-800">
          {user ? (
            <div className="space-y-3">
              <div className={`text-xs ${collapsed ? 'hidden' : 'block'}`}>
                <p className="text-gray-500">Signed in as</p>
                <p className="font-medium text-cyan-400 truncate">{user.email}</p>
                <p className="text-xs text-gray-500">Role: {user.role}</p>
              </div>
              <button
                onClick={signOut}
                className="w-full py-2.5 bg-red-500/10 text-red-400 rounded-xl hover:bg-red-500/20 transition text-sm font-medium flex items-center justify-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7" />
                </svg>
                {collapsed ? '' : 'Sign Out'}
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <Link
                to="/login"
                className="block text-center py-2.5 bg-cyan-500 text-white rounded-xl hover:bg-cyan-600 transition text-sm font-medium"
                onClick={() => setCollapsed(true)}
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Content padding */}
      <div 
        className={`transition-all duration-300 ${collapsed ? 'pl-20' : 'pl-64'} min-h-screen`}
        aria-hidden="true"
      />
    </>
  );
};