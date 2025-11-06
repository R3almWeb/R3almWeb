// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabase } from '../lib/supabase';
import type { Session, User as SupabaseUser } from '@supabase/supabase-js';

// === Types ===
type Role = 'USER' | 'EDITOR' | 'ADMIN';

interface AppUser {
  id: string;
  email: string;
  role: Role;
  metadata: Record<string, any>;
}

interface AuthContextValue {
  user: AppUser | null;
  loading: boolean;
  signUp: (email: string, password: string, metadata?: Partial<AppUser>) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateRole: (role: Role) => Promise<void>;
}

// === Context ===
const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// === Helper: Convert Supabase User to AppUser ===
const mapSupabaseUser = (sbUser: SupabaseUser | null): AppUser | null => {
  if (!sbUser) return null;

  const metadata = sbUser.user_metadata || {};
  const role = (metadata.role as Role) || 'USER';

  return {
    id: sbUser.id,
    email: sbUser.email || '',
    role,
    metadata,
  };
};

// === Provider Component ===
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);

  // === Real-time Auth Listener ===
  useEffect(() => {
    // Initial session
    supabase.auth.getSession().then(({ data: { session }, error }) => {
      if (error) {
        console.error('Error getting session:', error);
      } else {
        setUser(mapSupabaseUser(session?.user ?? null));
      }
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log('Auth state changed:', _event, session?.user?.email);
      setUser(mapSupabaseUser(session?.user ?? null));
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // === Sign Up ===
  const signUp = async (email: string, password: string, metadata: Partial<AppUser> = {}) => {
    console.log('Signing up:', email);
    const { error, data } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          role: metadata.role || 'USER',
          ...metadata,
        },
      },
    });

    if (error) {
      console.error('Sign-up error:', error);
      throw error;
    }

    if (data.user) {
      console.log('Sign-up success:', data.user.email);
      setUser(mapSupabaseUser(data.user));
    }
  };

  // === Sign In ===
  const signIn = async (email: string, password: string) => {
    console.log('Signing in:', email);
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Sign-in error:', error);
      throw error;
    }

    if (data.user) {
      console.log('Sign-in success:', data.user.email);
      setUser(mapSupabaseUser(data.user));
    }
  };

  // === Sign Out ===
  const signOut = async () => {
    console.log('Signing out');
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Sign-out error:', error);
      throw error;
    }
    setUser(null);
  };

  // === Update Role (Admin only) ===
  const updateRole = async (role: Role) => {
    if (!user) throw new Error('No user logged in');

    console.log('Updating role to:', role);
    const { error } = await supabase.auth.updateUser({
      data: { role },
    });

    if (error) {
      console.error('Update role error:', error);
      throw error;
    }

    setUser((prev) => (prev ? { ...prev, role } : null));
  };

  // === Context Value ===
  const value: AuthContextValue = {
    user,
    loading,
    signUp,
    signIn,
    signOut,
    updateRole,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// === Custom Hook ===
export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};