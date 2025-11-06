// src/pages/Login.tsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from?.pathname || '/admin/dashboard';

  // Auto-redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/admin/dashboard', { replace: true });
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // === DEMO CREDENTIALS (replace later with real auth) ===
    if (email === 'admin@r3alm.com' && password === 'r3alm2025') {
      login({
        uid: 'admin123',
        email: 'admin@r3alm.com',
        role: 'ADMIN',
        displayName: 'R3alm Admin',
      });
      navigate(from, { replace: true });
      return;
    }

    if (email === 'editor@r3alm.com' && password === 'editor123') {
      login({
        uid: 'editor456',
        email: 'editor@r3alm.com',
        role: 'EDITOR',
        displayName: 'Editor',
      });
      navigate(from, { replace: true });
      return;
    }

    setError('Invalid credentials');
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121212] px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold gradient-text mb-2">Admin Login</h1>
          <p className="text-gray-400">R3alm Portal Access</p>
        </div>

        <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8 space-y-6">
          {error && (
            <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-red-400 text-center">
              {error}
            </div>
          )}

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@r3alm.com"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 outline-none transition-all"
            required
            disabled={loading}
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="r3alm2025"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 outline-none transition-all"
            required
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-lg disabled:opacity-70"
          >
            {loading ? 'Logging in...' : 'Login to Admin Portal'}
          </button>

          <div className="text-center text-sm text-gray-500 space-y-1">
            <p>Demo Accounts:</p>
            <p className="font-mono text-cyan-400">admin@r3alm.com / r3alm2025</p>
            <p className="font-mono text-cyan-400">editor@r3alm.com / editor123</p>
          </div>
        </form>
      </div>
    </div>
  );
}