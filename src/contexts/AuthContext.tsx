// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Session, User } from '@supabase/supabase-js'
import { supabase, supabaseUrl } from '../lib/supabase'
import { Database } from '../types/supabase'

type Profile = Database['public']['Tables']['profiles']['Row'] | null

type AuthContextType = {
  user: User | null
  session: Session | null
  profile: Profile | null
  loading: boolean
  signUp: (email: string, password: string, fullName?: string) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  updateProfile: (updates: Partial<Database['public']['Tables']['profiles']['Update']>) => Promise<void>
  getRole: () => string | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchProfile = async (userId: string) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()

    if (error && error.code !== 'PGRST116') { // No rows returned
      console.error('Error fetching profile:', error)
    } else {
      setProfile(data || null)
    }
  }

  useEffect(() => {
    // Check active session with validation
    const initializeAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setSession(session)
      setUser(session?.user ?? null)
      
      if (session?.user) {
        await fetchProfile(session.user.id)
      } else {
        setProfile(null)
      }
      setLoading(false)
    }

    initializeAuth()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth change event:', event) // Debug log
        setSession(session)
        setUser(session?.user ?? null)
        setLoading(false)

        if (session?.user) {
          // Update or create profile on sign up/in
          const { error } = await supabase
            .from('profiles')
            .upsert({
              id: session.user.id,
              email: session.user.email!,
              role: 'USER' // Default role
            })
          if (error) console.error('Error creating/updating profile:', error)
          
          // Fetch the profile
          await fetchProfile(session.user.id)
        } else {
          setProfile(null)
        }
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const signUp = async (email: string, password: string, fullName?: string) => {
    const { error } = await supabase.auth.signUp({ 
      email, 
      password,
      options: {
        data: { full_name: fullName } // Store in user_metadata if needed
      }
    })
    if (error) throw error
  }

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
  }

  const signOut = async () => {
    // Clear all auth state immediately
    setUser(null)
    setSession(null)
    setProfile(null)

    const { error } = await supabase.auth.signOut({ scope: 'local' })
    if (error) throw error

    // Force clear localStorage entry if persists (dev safety)
    if (typeof window !== 'undefined') {
      const projectRef = supabaseUrl.split('/').pop() // Extract project ID from URL
      localStorage.removeItem(`sb-${projectRef}-auth-token`)
      // Also clear any other potential keys
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith('sb-')) {
          localStorage.removeItem(key)
        }
      })
    }
    console.log('Logout completed, states cleared') // Debug log
  }

  const updateProfile = async (updates: Partial<Database['public']['Tables']['profiles']['Update']>) => {
    if (!user) throw new Error('No user logged in')
    const { error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', user.id)
    if (error) throw error
    // Refetch profile after update
    await fetchProfile(user.id)
  }

  const getRole = () => {
    return profile?.role || null
  }

  const value = {
    user,
    session,
    profile,
    loading,
    signUp,
    signIn,
    signOut,
    updateProfile,
    getRole
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}