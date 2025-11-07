// src/components/TopNav.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Menu, User, LogOut, ChevronDown, Shield } from 'lucide-react';

interface TopNavProps {
  toggleMobile: () => void;
  isMobileOpen: boolean;
}

export function TopNav({ toggleMobile, isMobileOpen }: TopNavProps) {
  const { user, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#333] p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Mobile Menu Toggle + Logo */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleMobile}
            className="lg:hidden p-2 rounded-lg hover:bg-[#1E1E1E] transition-colors"
          >
            <Menu className="h-5 w-5 text-white" />
          </button>
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="h-8 w-8 bg-gradient-to-br from-[#00BFFF] to-[#FFD700] rounded-lg flex items-center justify-center">
              <span className="text-[#121212] font-bold text-sm">R</span>
            </div>
            <span className="text-xl font-bold text-white hidden md:block">Capital R3alm</span>
          </Link>
        </div>

        {/* Right: User Menu */}
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-[#1E1E1E] transition-colors group"
              >
                <User className="h-5 w-5 text-gray-300" />
                <span className="hidden md:block text-white">{user.email.split('@')[0]}</span>
                <ChevronDown className="h-4 w-4 text-gray-300 hidden md:block" />
              </button>
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-[#1E1E1E] rounded-lg shadow-lg border border-[#333] py-1 z-50">
                  <Link
                    to="/admin/dashboard"
                    className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-300 hover:bg-[#2A2A2A] hover:text-white"
                    onClick={() => setShowUserMenu(false)}
                  >
                    <Shield className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setShowUserMenu(false);
                    }}
                    className="flex items-center space-x-2 w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-[#2A2A2A] hover:text-white"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-colors font-medium"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}