// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {
  HomeIcon,
  InformationCircleIcon,
  CubeIcon,
  PencilSquareIcon,
  QuestionMarkCircleIcon,
  ClockIcon,
  EnvelopeIcon,
  HomeModernIcon,
  DocumentTextIcon,
  UsersIcon,
  Cog6ToothIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

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
          lg:w-64
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
            className="text-gray-400 hover:text-white transition-all lg:block"
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
                    className={`flex items-center py-2.5 px-3 rounded-xl transition-all group text-sm font-medium
                      ${isActive ? 'bg-cyan-500/10 text-cyan-400 shadow-lg shadow-cyan-500/20' : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'}
                    `}
                    onClick={() => window.innerWidth < 1024 && setCollapsed(true)}
                  >
                    <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-cyan-400' : 'text-gray-500'}`} />
                    <span className={`ml-3 transition-all ${collapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
                      {item.label}
                    </span>
                    {collapsed && (
                      <span className="absolute left-20 ml-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 border border-gray-800">
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
                        className={`flex items-center py-2.5 px-3 rounded-xl transition-all group text-sm font-medium
                          ${isActive ? 'bg-cyan-500/10 text-cyan-400 shadow-lg shadow-cyan-500/20' : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'}
                        `}
                        onClick={() => window.innerWidth < 1024 && setCollapsed(true)}
                      >
                        <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-cyan-400' : 'text-gray-500'}`} />
                        <span className={`ml-3 transition-all ${collapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
                          {item.label}
                        </span>
                        {collapsed && (
                          <span className="absolute left-20 ml-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 border border-gray-800">
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

      {/* Content padding - prevents overlap */}
      <div className={`transition-all duration-300 ${collapsed ? 'lg:pl-20' : 'lg:pl-64'} min-h-screen`} />
    </>
  );
};