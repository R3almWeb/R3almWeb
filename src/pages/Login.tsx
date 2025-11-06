import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Hexagon, ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { demoAccounts } from '../data/demoAccounts';

export function Login() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const { user, error } = await signIn(formData.email, formData.password);
    
    if (error) {
      setError(error);
    } else if (user) {
      if (user.role === 'admin' || user.role === 'editor') {
        navigate('/admin/dashboard');
      } else {
        navigate('/');
      }
    }
    
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="fade-in bg-gradient-to-br from-[#121212] to-[#1E1E1E] blockchain-grid">
      {/* Mobile-first container with guaranteed scroll space */}
      <div className="min-h-screen w-full px-4 py-4 pb-96">
        <div className="w-full max-w-md mx-auto">
          <div className="glass-effect rounded-2xl p-6 scale-on-hover">
            {/* Logo */}
            <div className="text-center mb-6 text-reveal">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="relative">
                  <Hexagon className="h-12 w-12 text-[#00BFFF] floating" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-white">R3</span>
                  </div>
                </div>
                <span className="text-2xl font-bold gradient-text">Capital R3alm</span>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2 text-reveal stagger-1">Welcome Back</h1>
              <p className="text-gray-400 text-reveal stagger-2">Sign in to your account to continue</p>
            </div>

            {/* Demo Accounts - Compact Mobile Version */}
            <div className="glass-effect rounded-xl p-4 mb-6 text-reveal stagger-1">
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-white mb-2">Try Our Platform</h3>
                <p className="text-gray-400 text-sm">Select a demo account to explore</p>
              </div>
              <div className="space-y-3">
                {Object.entries(demoAccounts).map(([role, account]) => (
                  <button
                    key={role}
                    onClick={() => setFormData({ email: account.email, password: account.password })}
                    className="w-full p-3 bg-gradient-to-br from-[#1E1E1E] to-[#2A2A2A] rounded-lg hover:from-[#2A2A2A] hover:to-[#333] transition-all duration-300 border border-[#333] hover:border-[#00BFFF]/50 flex items-center space-x-3"
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                      role === 'admin' ? 'bg-gradient-to-br from-red-500 to-red-600' : 
                      role === 'editor' ? 'bg-gradient-to-br from-yellow-500 to-yellow-600' : 
                      'bg-gradient-to-br from-green-500 to-green-600'
                    }`}>
                      {role.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-white font-semibold capitalize">{role}</div>
                      <div className="text-gray-400 text-sm truncate">{account.email}</div>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${
                      role === 'admin' ? 'bg-red-500' : 
                      role === 'editor' ? 'bg-yellow-500' : 
                      'bg-green-500'
                    }`}></div>
                  </button>
                ))}
              </div>
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  Click any account above to auto-fill login credentials
                </p>
              </div>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 slide-up stagger-1">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300 focus:scale-105"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300 pr-12 focus:scale-105"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]" />
                  <span className="ml-2 text-sm text-gray-300">Remember me</span>
                </label>
                <a href="#" className="text-sm text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-4 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <span className="text-lg font-semibold">{loading ? 'Signing In...' : 'Sign In'}</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>

            <div className="text-center mt-6 text-reveal stagger-2">
              <p className="text-gray-400">
                Don't have an account?{' '}
                <Link to="/register" className="text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300 font-medium">
                  Create Account
                </Link>
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-[#333] text-reveal stagger-3">
              <p className="text-center text-sm text-gray-400">
                By signing in, you agree to our{' '}
                <a href="#" className="text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}