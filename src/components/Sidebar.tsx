// src/components/Sidebar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  Home, 
  Info, 
  Package, 
  BookOpen, 
  Calendar, 
  MessageCircle, 
  Shield, 
  ChevronLeft,
  X 
} from 'lucide-react';

interface SidebarProps {
  isCollapsed: boolean;
  toggleCollapse: () => void;
  isMobileOpen: boolean;
  toggleMobile: () => void;
}

export function Sidebar({ isCollapsed, toggleCollapse, isMobileOpen, toggleMobile }: SidebarProps) {
  const { user } = useAuth();
  const location = useLocation();

  const menuItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'About', path: '/about', icon: Info },
    { label: 'Products', path: '/products', icon: Package },
    { label: 'Blog', path: '/blog', icon: BookOpen },
    { label: 'Waitlist', path: '/waitlist', icon: Calendar },
    { label: 'Contact', path: '/contact', icon: MessageCircle },
  ];

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <aside className={`
      fixed lg:static inset-y-0 left-0 z-50 transition-transform duration-300 ease-in-out
      w-full lg:w-${isCollapsed ? '16' : '64'} bg-[#1E1E1E] border-r border-[#333]
      ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
      overflow-y-auto
    `}>
      {/* Logo & Controls */}
      <div className="p-4 border-b border-[#333] flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="h-8 w-8 bg-[#00BFFF] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          {!isCollapsed && (
            <span className="text-xl font-bold text-white transition-all">Capital R3alm</span>
          )}
        </Link>
        <div className="flex items-center space-x-2">
          {/* Mobile Close Button */}
          <button
            onClick={toggleMobile}
            className="lg:hidden p-1 rounded-lg hover:bg-[#2A2A2A] transition-colors"
          >
            <X className="h-5 w-5 text-gray-400" />
          </button>
          {/* Desktop Collapse Button */}
          <button
            onClick={toggleCollapse}
            className="lg:block hidden p-1 rounded-lg hover:bg-[#2A2A2A] transition-colors"
          >
            <ChevronLeft 
              className={`h-5 w-5 text-gray-400 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} 
            />
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-2 space-y-2 mt-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`
              group flex items-center space-x-${isCollapsed ? '0' : '3'} px-3 py-2 rounded-lg 
              transition-all duration-200 relative overflow-hidden
              ${isActive(item.path) 
                ? 'bg-[#00BFFF]/20 text-[#00BFFF] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-[#00BFFF]' 
                : 'text-gray-300 hover:bg-[#00BFFF]/10 hover:text-[#00BFFF]'
              }
              ${isCollapsed ? 'justify-center' : ''}
            `}
            title={isCollapsed ? item.label : ''}
            onClick={isMobileOpen ? toggleMobile : undefined}
          >
            <item.icon className={`h-5 w-5 flex-shrink-0 ${isActive(item.path) ? 'text-[#00BFFF]' : ''}`} />
            {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
            {!isCollapsed && isActive(item.path) && (
              <div className="absolute right-0 top-0 h-full w-1 bg-[#00BFFF]"></div>
            )}
          </Link>
        ))}
      </nav>

      {/* Admin Section - Conditional */}
      {user && (user.user_metadata?.role === 'ADMIN' || user.user_metadata?.role === 'EDITOR') && (
        <>
          <div className="border-t border-[#333] my-4 px-2"></div>
          <nav className="p-2 space-y-2">
            <Link
              to="/admin/dashboard"
              className={`
                group flex items-center space-x-${isCollapsed ? '0' : '3'} px-3 py-2 rounded-lg 
                transition-all duration-200 relative overflow-hidden
                ${location.pathname.startsWith('/admin') 
                  ? 'bg-[#00BFFF]/20 text-[#00BFFF] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-[#00BFFF]' 
                  : 'text-gray-300 hover:bg-[#00BFFF]/10 hover:text-[#00BFFF]'
                }
                ${isCollapsed ? 'justify-center' : ''}
              `}
              title={isCollapsed ? 'Admin Dashboard' : ''}
              onClick={isMobileOpen ? toggleMobile : undefined}
            >
              <Shield className={`h-5 w-5 flex-shrink-0 ${location.pathname.startsWith('/admin') ? 'text-[#00BFFF]' : ''}`} />
              {!isCollapsed && <span className="text-sm font-medium">Admin Dashboard</span>}
              {!isCollapsed && location.pathname.startsWith('/admin') && (
                <div className="absolute right-0 top-0 h-full w-1 bg-[#00BFFF]"></div>
              )}
            </Link>
          </nav>
        </>
      )}

      {/* Collapse Toggle for Large Screens */}
      <div className="border-t border-[#333] p-4 lg:block hidden">
        <button
          onClick={toggleCollapse}
          className="w-full flex items-center justify-center space-x-3 p-2 rounded-lg hover:bg-[#2A2A2A] transition-colors text-gray-400 hover:text-[#00BFFF]"
        >
          <ChevronLeft 
            className={`h-5 w-5 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} 
          />
          {!isCollapsed && <span className="text-sm font-medium">Collapse</span>}
        </button>
      </div>
    </aside>
  );
}