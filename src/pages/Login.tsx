// src/pages/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const demoAccounts = [
  { email: 'admin@r3alm.com',  password: 'admin123',  label: 'Admin Login' },
  { email: 'editor@r3alm.com', password: 'editor123', label: 'Editor Login' },
  { email: 'user@r3alm.com',   password: 'user123',   label: 'User Login' },
];

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signIn(email, password);
      navigate('/');
    } catch (err: any) {
      setError(err.message || 'Invalid login credentials');
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async (email: string, password: string) => {
    setLoading(true);
    setError('');
    try {
      await signIn(email, password);
      navigate('/');
    } catch (err: any) {
      setError(err.message || 'Demo login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-900">
      <div className="w-full max-w-md">
        {/* Logo / Title */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold gradient-text mb-2">R3alm</h1>
          <p className="text-gray-400">Sign in to continue</p>
        </div>

        {/* Demo User Creator Button */}
        <div className="text-center mb-8">
          <button
            onClick={async () => {
              const { supabase } = await import('../lib/supabase');
              const demos = [
                { email: 'admin@r3alm.com', password: 'admin123', role: 'ADMIN' },
                { email: 'editor@r3alm.com', password: 'editor123', role: 'EDITOR' },
                { email: 'user@r3alm.com', password: 'user123', role: 'USER' },
              ];
              for (const d of demos) {
                const { error } = await supabase.auth.signUp({
                  email: d.email,
                  password: d.password,
                  options: { data: { role: d.role } },
                });
                if (error && !error.message.includes('already registered')) {
                  alert('Error creating ' + d.email + ': ' + error.message);
                  return;
                }
              }
              alert('All demo accounts created/ready! You can now log in.');
            }}
            className="px-8 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition"
          >
            CREATE DEMO USERS (Click Once)
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="glass-effect rounded-xl p-8 space-y-6">
          {error && (
            <div className="bg-red-900 bg-opacity-50 border border-red-600 text-red-200 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover-glow disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        {/* Demo Buttons */}
        <div className="mt-10">
          <p className="text-center text-gray-400 mb-4">Or use a demo account:</p>
          <div className="grid gap-3">
            {demoAccounts.map((acc) => (
              <button
                key={acc.email}
                onClick={() => handleDemoLogin(acc.email, acc.password)}
                disabled={loading}
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 hover-glow transition disabled:opacity-50"
              >
                {acc.label} ({acc.email})
              </button>
            ))}
          </div>
        </div>

        {/* Register Link */}
        <p className="text-center mt-8 text-gray-400">
          No account?{' '}
          <button onClick={() => navigate('/register')} className="text-cyan-400 hover:text-cyan-300 underline">
            Register
          </button>
        </p>
      </div>
    </div>
  );
};