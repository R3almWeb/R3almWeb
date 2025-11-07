// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { Database } from '../types/supabase'; // Adjust path if your DB types are elsewhere

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Env validation
if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase env vars: VITE_SUPABASE_URL and/or VITE_SUPABASE_ANON_KEY');
  throw new Error('Supabase configuration is required');
}

const supabase: SupabaseClient<Database> = createClient(supabaseUrl, supabaseKey);

interface Profile {
  id: string;
  email: string;
  role: 'ADMIN' | 'EDITOR' | 'USER';
  full_name?: string | null;
  avatar_url?: string | null;
}

interface AuthContextType {
  user: Profile | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string, fullName: string) => Promise<void>;
  refreshSession: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch user profile from profiles table
  const fetchUserProfile = async (supabaseUser: User): Promise<Profile | null> => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('id, email, role, full_name, avatar_url')
        .eq('id', supabaseUser.id)
        .single();

      if (error) {
        console.warn('Profile fetch error:', error);
        // Fallback to basic user data with default role
        return {
          id: supabaseUser.id,
          email: supabaseUser.email || '',
          role: 'USER',
          full_name: null,
          avatar_url: null,
        };
      }

      return data || {
        id: supabaseUser.id,
        email: supabaseUser.email || '',
        role: 'USER',
        full_name: null,
        avatar_url: null,
      };
    } catch (error) {
      console.error('Unexpected profile fetch error:', error);
      return null;
    }
  };

  // Create temporary profile from Supabase user (for quick UI sync)
  const createTempProfile = (supabaseUser: User): Profile => ({
    id: supabaseUser.id,
    email: supabaseUser.email || '',
    role: 'USER', // Default; updated async from DB
    full_name: null,
    avatar_url: null,
  });

  // Initial session check with refresh validation and timeout
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let aborted = false;

    const checkInitialSession = async () => {
      try {
        // 10s timeout for initial session
        const controller = new AbortController();
        timeoutId = setTimeout(() => {
          controller.abort();
          aborted = true;
        }, 10000);

        // Use refreshSession to validate/refresh any cached session
        const { data, error } = await supabase.auth.refreshSession().signal(controller.signal);

        if (error && !aborted) {
          console.warn('Initial refreshSession error (expected post-logout):', error.message);
          // Force clear any cached invalid session
          await supabase.auth.signOut();
          localStorage.removeItem('supabase.auth.token');
        }

        if (data?.session?.user && !aborted) {
          console.log('Initial valid session found:', data.session.user.email); // Debug
          const tempProfile = createTempProfile(data.session.user);
          setUser(tempProfile);
          // Async full profile fetch without blocking loading
          fetchUserProfile(data.session.user)
            .then((profile) => {
              if (profile) setUser(profile);
            })
            .catch((err) => {
              console.error('Initial profile fetch error:', err);
              // Retain temp on error
            });
        } else {
          console.log('No valid initial session'); // Debug
          setUser(null);
        }
      } catch (error: any) {
        if (error.name !== 'AbortError') {
          console.error('Initial session check failed:', error);
        }
        if (!aborted) {
          setUser(null);
        }
      } finally {
        clearTimeout(timeoutId);
        setLoading(false);
      }
    };

    checkInitialSession();

    return () => clearTimeout(timeoutId);
  }, []);

  // Real-time auth state listener (for changes after initial load)
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('Auth event:', event, !!session?.user); // Debug log for troubleshooting
      if (event === 'INITIAL_SESSION') {
        // Ignore - handled by initial check to avoid duplication
        return;
      }

      // Handle events synchronously
      if (event === 'SIGNED_IN' && session?.user) {
        const tempProfile = createTempProfile(session.user);
        setUser(tempProfile);
        // Async full profile fetch
        fetchUserProfile(session.user)
          .then((profile) => {
            if (profile) setUser(profile);
          })
          .catch(console.error);
      } else if (event === 'SIGNED_OUT') {
        setUser(null);
      } else if (session?.user && (event === 'TOKEN_REFRESHED' || event === 'USER_UPDATED')) {
        const tempProfile = createTempProfile(session.user);
        setUser(tempProfile);
        // Async full profile fetch
        fetchUserProfile(session.user)
          .then((profile) => {
            if (profile) setUser(profile);
          })
          .catch(console.error);
      } else if (!session?.user) {
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
    } catch (error: any) {
      console.error('Login error:', error);
      throw new Error(error.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const register = async (email: string, password: string, fullName: string): Promise<void> => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: fullName, role: 'USER' } },
      });
      if (error) throw error;
      if (data.user) {
        // Insert profile if not exists
        await supabase.from('profiles').upsert({
          id: data.user.id,
          email,
          full_name: fullName,
          role: 'USER',
        });
      }
    } catch (error: any) {
      console.error('Register error:', error);
      throw new Error(error.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    setLoading(true);
    try {
      const { error: signOutError } = await supabase.auth.signOut();
      if (signOutError) throw signOutError;

      // Confirm with refreshSession for extra validation
      const { data, error: refreshError } = await supabase.auth.refreshSession();
      if (refreshError) {
        console.warn('Post-logout refresh error (expected):', refreshError.message);
      }
      if (data?.session?.user) {
        console.warn('Session still active after logout - forcing null');
      }
      setUser(null); // Explicitly null user to prevent persistence
    } catch (error: any) {
      console.error('Logout error:', error);
      throw new Error(error.message || 'Logout failed');
    } finally {
      setLoading(false);
    }
  };

  const refreshSession = async (): Promise<void> => {
    setLoading(true);
    try {
      const { data } = await supabase.auth.refreshSession();
      if (data?.session?.user) {
        const profile = await fetchUserProfile(data.session.user);
        setUser(profile);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Session refresh error:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    logout,
    register,
    refreshSession,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthContext };

export default AuthProvider;