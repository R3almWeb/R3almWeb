// src/contexts/AuthContext.tsx
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

  useEffect(() => {
    // Check initial session
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      await updateUserFromSession(session);
      setIsLoading(false);
    };

    checkSession();

    // Listen for auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      await updateUserFromSession(session);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const updateUserFromSession = async (session: any) => {
    if (session?.user) {
      const { data: userData, error } = await supabase.auth.getUser();
      if (error) {
        console.error('Failed to get user data', error);
        setUser(null);
        return;
      }

      const metadata = userData.user.user_metadata || {};
      const role = metadata.role || 'USER'; // Default to USER if no role

      const newUser: User = {
        uid: session.user.id,
        email: session.user.email || '',
        role: role as 'ADMIN' | 'EDITOR' | 'USER',
        displayName: metadata.displayName,
      };

      setUser(newUser);
      localStorage.setItem('r3alm_user', JSON.stringify(newUser));
    } else {
      setUser(null);
      localStorage.removeItem('r3alm_user');
    }
  };

  const login = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.toLowerCase().trim(),
      password,
    });
    if (error) throw error;
    // onAuthStateChange will handle setting the user
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error('Logout error', error);
    // onAuthStateChange will handle clearing the user
  };

  // ALWAYS render children — never block the app
  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);