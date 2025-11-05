import { useState } from 'react'
import { supabase } from '../lib/supabase'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export function useContact() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submitContactForm = async (formData: ContactFormData) => {
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
        .from('contact_submissions')
        .insert({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          status: 'new'
        })
        .select()
        .single()

      if (error) {
        setError(error.message)
        setLoading(false)
        return { success: false, error: error.message }
      }

      // Send confirmation email if email service is configured
      try {
        await sendContactConfirmation(formData.email, formData.name, formData.subject)
      } catch (emailError) {
        console.warn('Failed to send confirmation email:', emailError)
        // Don't fail the submission if email fails
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

  const getContactSubmissions = async () => {
    try {
      if (!import.meta.env.VITE_SUPABASE_URL) {
        // Return demo data
        return []
      }

      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      return data || []
    } catch (err) {
      console.error('Error fetching contact submissions:', err)
      return []
    }
  }

  return {
    submitContactForm,
    getContactSubmissions,
    loading,
    error
  }
}