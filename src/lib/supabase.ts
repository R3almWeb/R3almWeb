import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Demo accounts for testing
export const demoAccounts = {
  admin: {
    email: 'admin@r3alm.com',
    password: 'admin123',
    role: 'admin'
  },
  editor: {
    email: 'editor@r3alm.com',
    password: 'editor123',
    role: 'editor'
  },
  user: {
    email: 'user@r3alm.com',
    password: 'user123',
    role: 'user'
  }
}

export interface User {
  id: string
  email: string
  role: 'admin' | 'editor' | 'user'
  name?: string
  avatar?: string
}

// Mock authentication for demo purposes
class AuthService {
  private currentUser: User | null = null
  private listeners: ((user: User | null) => void)[] = []

  async signIn(email: string, password: string): Promise<{ user: User | null; error: string | null }> {
    // Check demo accounts first
    const demoAccount = Object.values(demoAccounts).find(
      account => account.email === email && account.password === password
    )

    if (demoAccount) {
      const user: User = {
        id: Math.random().toString(36).substr(2, 9),
        email: demoAccount.email,
        role: demoAccount.role as 'admin' | 'editor' | 'user',
        name: demoAccount.role.charAt(0).toUpperCase() + demoAccount.role.slice(1) + ' User'
      }
      
      this.currentUser = user
      localStorage.setItem('auth_user', JSON.stringify(user))
      this.notifyListeners()
      
      return { user, error: null }
    }

    // If not a demo account, try Supabase authentication
    if (supabaseUrl && supabaseAnonKey) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password
        })

        if (error) {
          return { user: null, error: error.message }
        }

        if (data.user) {
          // Get user profile from database
          const { data: profile } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', data.user.id)
            .single()

          const user: User = {
            id: data.user.id,
            email: data.user.email!,
            role: profile?.role || 'user',
            name: profile?.name || data.user.email!.split('@')[0]
          }

          this.currentUser = user
          localStorage.setItem('auth_user', JSON.stringify(user))
          this.notifyListeners()

          return { user, error: null }
        }
      } catch (error) {
        console.error('Supabase auth error:', error)
        return { user: null, error: 'Authentication failed' }
      }
    }
    return { user: null, error: 'Invalid credentials' }
  }

  async signUp(email: string, password: string, name: string): Promise<{ user: User | null; error: string | null }> {
    // Try Supabase signup first if available
    if (supabaseUrl && supabaseAnonKey) {
      try {
        const { data, error } = await supabase.auth.signUp({
          email,
          password
        })

        if (error) {
          return { user: null, error: error.message }
        }

        if (data.user) {
          // Create user profile
          const { error: profileError } = await supabase
            .from('profiles')
            .insert({
              id: data.user.id,
              email: data.user.email,
              name,
              role: 'user'
            })

          if (profileError) {
            console.error('Profile creation error:', profileError)
          }

          const user: User = {
            id: data.user.id,
            email: data.user.email!,
            role: 'user',
            name
          }

          this.currentUser = user
          localStorage.setItem('auth_user', JSON.stringify(user))
          this.notifyListeners()

          return { user, error: null }
        }
      } catch (error) {
        console.error('Supabase signup error:', error)
        // Fall back to demo account creation
      }
    }
    
    // Fallback: create demo user
    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      role: 'user',
      name
    }
    
    this.currentUser = user
    localStorage.setItem('auth_user', JSON.stringify(user))
    this.notifyListeners()
    
    return { user, error: null }
  }

  async signOut(): Promise<void> {
    // Sign out from Supabase if available
    if (supabaseUrl && supabaseAnonKey) {
      try {
        await supabase.auth.signOut()
      } catch (error) {
        console.error('Supabase signout error:', error)
      }
    }

    this.currentUser = null
    localStorage.removeItem('auth_user')
    this.notifyListeners()
  }

  getCurrentUser(): User | null {
    if (this.currentUser) return this.currentUser
    
    // Check for Supabase session first
    if (supabaseUrl && supabaseAnonKey) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session?.user) {
          // Get user profile and update current user
          supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single()
            .then(({ data: profile }) => {
              const user: User = {
                id: session.user.id,
                email: session.user.email!,
                role: profile?.role || 'user',
                name: profile?.name || session.user.email!.split('@')[0]
              }
              this.currentUser = user
              localStorage.setItem('auth_user', JSON.stringify(user))
              this.notifyListeners()
            })
        }
      })
    }
    
    const stored = localStorage.getItem('auth_user')
    if (stored) {
      this.currentUser = JSON.parse(stored)
      return this.currentUser
    }
    
    return null
  }

  onAuthStateChange(callback: (user: User | null) => void) {
    // Listen to Supabase auth changes if available
    if (supabaseUrl && supabaseAnonKey) {
      supabase.auth.onAuthStateChange(async (event, session) => {
        if (session?.user) {
          const { data: profile } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single()

          const user: User = {
            id: session.user.id,
            email: session.user.email!,
            role: profile?.role || 'user',
            name: profile?.name || session.user.email!.split('@')[0]
          }

          this.currentUser = user
          localStorage.setItem('auth_user', JSON.stringify(user))
          callback(user)
        } else if (event === 'SIGNED_OUT') {
          this.currentUser = null
          localStorage.removeItem('auth_user')
          callback(null)
        }
      })
    }

    this.listeners.push(callback)
    callback(this.getCurrentUser())
    
    return () => {
      this.listeners = this.listeners.filter(listener => listener !== callback)
    }
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.currentUser))
  }
}

export const authService = new AuthService()