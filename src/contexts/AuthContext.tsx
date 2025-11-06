import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface User {
  uid: string;
  email: string;
  role: 'ADMIN' | 'EDITOR' | 'USER';
  displayName?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  logout: async () => {},
  isLoading: true,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const timeoutPromise = (ms: number, errorMsg: string) => new Promise((_, reject) => setTimeout(() => reject(new Error(errorMsg)), ms));

  useEffect(() => {
    // Check initial session with timeout
    const checkSession = async () => {
      try {
        const { data: { session }, error } = await Promise.race([
          supabase.auth.getSession(),
          timeoutPromise(10000, 'Session check timed out')
        ]) as any;
        if (error) {
          console.error('Session check error:', error.message);
        }
        await updateUserFromSession(session);
      } catch (err: any) {
        console.error('Unexpected session check error:', err.message);
      } finally {
        setIsLoading(false);
      }
    };

    checkSession();

    // Listen for auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      try {
        await updateUserFromSession(session);
      } catch (err: any) {
        console.error('Auth state change error:', err.message);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const updateUserFromSession = async (session: any) => {
    if (session?.user) {
      try {
        const { data: userData, error: userError } = await Promise.race([
          supabase.auth.getUser(),
          timeoutPromise(10000, 'Get user timed out')
        ]) as any;
        if (userError) {
          console.error('Get user error:', userError.message);
          throw userError;
        }

        const metadata = userData.user.user_metadata || {};
        const role = metadata.role || 'USER';

        const newUser: User = {
          uid: session.user.id,
          email: session.user.email || '',
          role: role as 'ADMIN' | 'EDITOR' | 'USER',
          displayName: metadata.displayName,
        };

        setUser(newUser);
        localStorage.setItem('r3alm_user', JSON.stringify(newUser));
      } catch (err: any) {
        console.error('Update user error:', err.message);
        setUser(null);
      }
    } else {
      setUser(null);
      localStorage.removeItem('r3alm_user');
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const { data, error } = await Promise.race([
        supabase.auth.signInWithPassword({
          email: email.toLowerCase().trim(),
          password,
        }),
        timeoutPromise(10000, 'Login timed out')
      ]) as any;
      if (error) {
        console.error('Login error:', error.message);
        throw error;
      }
      console.log('Login successful:', data);
      // Listener will handle user update
    } catch (err: any) {
      console.error('Unexpected login error:', err.message);
      throw err;
    }
  };

  const logout = async () => {
    try {
      const { error } = await Promise.race([
        supabase.auth.signOut(),
        timeoutPromise(10000, 'Logout timed out')
      ]) as any;
      if (error) {
        console.error('Logout error:', error.message);
        throw error;
      }
      // Listener will handle clearing user
    } catch (err: any) {
      console.error('Unexpected logout error:', err.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);