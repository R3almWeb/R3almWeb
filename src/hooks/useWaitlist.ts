import { useState } from 'react'
import { supabase } from '../lib/supabase'

export function useWaitlist() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const joinWaitlist = async (email: string, productId: string, productName: string) => {
    setLoading(true)
    setError(null)

    try {
      // Check if Supabase is available
      if (!import.meta.env.VITE_SUPABASE_URL) {
        // Demo mode - just return success
        await new Promise(resolve => setTimeout(resolve, 1000))
        setLoading(false)
        return { success: true, error: null }
      }

      const { data, error } = await supabase
        .from('waitlist_signups')
        .insert({
          email,
          product_id: productId,
          product_name: productName,
          source: 'website'
        })
        .select()
        .single()

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          setError('You are already on the waitlist for this product')
        } else {
          setError(error.message)
        }
        setLoading(false)
        return { success: false, error: error.message }
      }

      // Send confirmation email if email service is configured
      try {
        await sendWaitlistConfirmation(email, productName)
      } catch (emailError) {
        console.warn('Failed to send confirmation email:', emailError)
        // Don't fail the signup if email fails
      }

      setLoading(false)
      return { success: true, error: null, data }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred'
      setError(errorMessage)
      setLoading(false)
      return { success: false, error: errorMessage }
    }
  }

  const getWaitlistStats = async () => {
    try {
      if (!import.meta.env.VITE_SUPABASE_URL) {
        // Return demo stats
        return {
          totalSignups: 12456,
          byProduct: [
            { product_id: 'r3alm-ventures', product_name: 'R3alm Ventures', count: 3456 },
            { product_id: 'r3alm-insurance', product_name: 'R3alm Insurance', count: 2890 },
            { product_id: 'r3alm-lending', product_name: 'R3alm Lending', count: 2345 },
            { product_id: 'r3alm-analytics', product_name: 'R3alm Analytics', count: 1876 },
            { product_id: 'r3alm-education', product_name: 'R3alm Education', count: 1889 }
          ]
        }
      }

      const { data, error } = await supabase
        .from('waitlist_signups')
        .select('product_id, product_name, count(*)')
        .group('product_id, product_name')

      if (error) throw error

      const { count: totalSignups } = await supabase
        .from('waitlist_signups')
        .select('*', { count: 'exact', head: true })

      return {
        totalSignups: totalSignups || 0,
        byProduct: data || []
      }
    } catch (err) {
      console.error('Error fetching waitlist stats:', err)
      return { totalSignups: 0, byProduct: [] }
    }
  }

  return {
    joinWaitlist,
    getWaitlistStats,
    loading,
    error
  }
}