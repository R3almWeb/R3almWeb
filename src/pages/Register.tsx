import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Hexagon, ArrowRight, CheckCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function Register() {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setLoading(true);
    setError('');
    
    const { user, error } = await signUp(
      formData.email, 
      formData.password, 
      `${formData.firstName} ${formData.lastName}`
    );
    
    if (error) {
      setError(error);
    } else if (user) {
      navigate('/');
    }
    
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="fade-in min-h-screen flex items-center justify-center bg-gradient-to-br from-[#121212] to-[#1E1E1E] blockchain-grid py-12">
      <div className="max-w-md w-full mx-4">
        <div className="glass-effect rounded-2xl p-8 scale-on-hover">
          {/* Logo */}
          <div className="text-center mb-8 text-reveal">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="relative">
                <Hexagon className="h-12 w-12 text-[#00BFFF] floating" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">R3</span>
                </div>
              </div>
              <span className="text-2xl font-bold gradient-text">Capital R3alm</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2 text-reveal stagger-1">Create Account</h1>
            <p className="text-gray-400 text-reveal stagger-2">Join the Web3 finance revolution</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 slide-up stagger-1">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300 focus:scale-105"
                  placeholder="First"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300 focus:scale-105"
                  placeholder="Last"
                />
              </div>
            </div>

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
                  placeholder="Create a strong password"
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

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300 pr-12 focus:scale-105"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
                className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF] mt-1"
              />
              <label htmlFor="agreeToTerms" className="ml-3 text-sm text-gray-300">
                I agree to the{' '}
                <a href="#" className="text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300">Privacy Policy</a>
              </label>
            </div>

            <button
              type="submit"
              disabled={!formData.agreeToTerms}
              className="w-full px-6 py-4 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="text-lg font-semibold">{loading ? 'Creating Account...' : 'Create Account'}</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>

          <div className="text-center mt-8 text-reveal stagger-2">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link to="/login" className="text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300 font-medium">
                Sign In
              </Link>
            </p>
          </div>

          {/* Benefits */}
          <div className="mt-8 pt-8 border-t border-[#333] text-reveal stagger-3">
            <h3 className="text-lg font-semibold text-white mb-4 text-reveal">Why Join Capital R3alm?</h3>
            <div className="space-y-3">
              {[
                'Access to exclusive investment opportunities',
                'Personalized portfolio management',
                'Educational resources and market insights',
                'Community of like-minded investors'
              ].map((benefit, index) => (
                <div key={index} className={`flex items-center space-x-3 text-reveal stagger-${index + 1}`}>
                  <CheckCircle className="h-4 w-4 text-[#00BFFF]" />
                  <span className="text-sm text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}