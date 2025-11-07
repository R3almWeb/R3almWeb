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

  // Single useEffect for auth state management via onAuthStateChange (handles initial + changes)
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth event:', event, !!session?.user); // Debug log for troubleshooting
      try {
        // 10s timeout for auth changes (including profile fetches)
        const controller = new AbortController();
        timeoutId = setTimeout(() => controller.abort(), 10000);

        if (event === 'INITIAL_SESSION') {
          // Handle initial load: Fetch profile if session exists, then resolve loading
          if (session?.user) {
            const profile = await fetchUserProfile(session.user);
            setUser(profile);
          } else {
            setUser(null);
          }
          setLoading(false);
          return; // Exit early for initial session
        }

        if (event === 'SIGNED_IN' && session?.user) {
          const profile = await fetchUserProfile(session.user);
          setUser(profile);
        } else if (event === 'SIGNED_OUT') {
          setUser(null);
        } else if (session?.user && (event === 'TOKEN_REFRESHED' || event === 'USER_UPDATED')) {
          // Refresh profile on token/user updates
          const profile = await fetchUserProfile(session.user);
          setUser(profile);
        } else if (!session?.user) {
          setUser(null);
        }
      } catch (error: any) {
        if (error.name !== 'AbortError') {
          console.error('Auth state change error:', error);
        }
        setUser(null);
      } finally {
        clearTimeout(timeoutId);
      }
    });

    return () => {
      subscription.unsubscribe();
      clearTimeout(timeoutId);
    };
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

      // Immediately confirm and sync state after signOut
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      if (sessionError) {
        console.warn('Post-logout session check error:', sessionError);
      }
      if (session?.user) {
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
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        const profile = await fetchUserProfile(session.user);
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