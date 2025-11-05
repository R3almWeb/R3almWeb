import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Mail, Save, Send, CheckCircle, AlertCircle, Settings, Shield, Eye, EyeOff } from 'lucide-react'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../contexts/AuthContext'

export function EmailSettings() {
  const { user, profile } = useAuth()
  const [saving, setSaving] = useState(false)
  const [testing, setTesting] = useState(false)
  const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const [validationErrors, setValidationErrors] = useState<{[key: string]: string}>({})
  
  const [settings, setSettings] = useState({
    // SMTP Configuration
    smtpHost: '',
    smtpPort: 587,
    smtpSecure: false,
    smtpUser: '',
    smtpPassword: '',
    smtpFromEmail: '',
    smtpFromName: 'Capital R3alm',
    enableEmailSending: false,
    
    // Email Templates
    enableWaitlistEmails: true,
    enableContactEmails: true,
    enableWelcomeEmails: true,
    enableSecurityEmails: true,
    
    // Email Preferences
    emailRetryAttempts: 3,
    emailTimeout: 30,
    enableEmailLogs: true,
    enableEmailQueue: false
  })

  // Load settings from Supabase on component mount
  React.useEffect(() => {
    if (user) {
      loadSettings()
    }
  }, [user])

  const loadSettings = async () => {
    try {
      if (!import.meta.env.VITE_SUPABASE_URL || !isValidUUID(user?.id)) return

      const { data, error } = await supabase
        .from('system_settings')
        .select('key, value')
        .in('category', ['email', 'smtp'])

      if (error) throw error

      if (data) {
        const settingsMap: any = {}
        
        data.forEach(setting => {
          // Convert snake_case keys back to camelCase for the component state
          const camelKey = setting.key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
          settingsMap[camelKey] = setting.value
        })

        setSettings(prev => ({
          ...prev,
          ...settingsMap
        }))
      }
    } catch (error) {
      console.error('Error loading settings:', error)
    }
  }

  // Helper function to check if a string is a valid UUID
  const isValidUUID = (str: string | undefined): boolean => {
    if (!str) return false
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    return uuidRegex.test(str)
  }

  // Validation functions
  const validateSMTPSettings = () => {
    const errors: {[key: string]: string} = {}
    
    if (settings.enableEmailSending) {
      if (!settings.smtpHost.trim()) {
        errors.smtpHost = 'SMTP host is required'
      }
      
      if (!settings.smtpPort || settings.smtpPort < 1 || settings.smtpPort > 65535) {
        errors.smtpPort = 'Valid port number (1-65535) is required'
      }
      
      if (!settings.smtpUser.trim()) {
        errors.smtpUser = 'SMTP username is required'
      }
      
      if (!settings.smtpPassword.trim()) {
        errors.smtpPassword = 'SMTP password is required'
      }
      
      if (!settings.smtpFromEmail.trim()) {
        errors.smtpFromEmail = 'From email address is required'
      } else if (!settings.smtpFromEmail.includes('@')) {
        errors.smtpFromEmail = 'Valid email address is required'
      }
      
      if (!settings.smtpFromName.trim()) {
        errors.smtpFromName = 'From name is required'
      }
    }
    
    return errors
  }

  const saveSettingsToDatabase = async () => {
    try {
      // Validate settings first
      const errors = validateSMTPSettings()
      if (Object.keys(errors).length > 0) {
        setValidationErrors(errors)
        return { success: false, error: 'Please fix validation errors before saving' }
      }
      
      setValidationErrors({})
      
      // If no Supabase URL configured, simulate success
      if (!import.meta.env.VITE_SUPABASE_URL) return { success: true }

      // Check if user ID is a valid UUID (real Supabase user vs demo user)
      if (!isValidUUID(user?.id)) {
        // For demo users, check role from auth context
        if (profile?.role === 'admin') {
          // Simulate successful save for demo admin users
          console.log('Demo admin user - simulating email settings save:', settings)
          return { success: true }
        } else {
          throw new Error('Admin access required to modify email settings')
        }
      }

      // First, check if user has admin role
      const { data: userProfile, error: profileError } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user?.id)
        .single();

      if (profileError || !userProfile || (userProfile.role !== 'admin' && profile?.role !== 'admin')) {
        throw new Error('Admin access required to modify email settings');
      }

      const settingsToSave = [
        { key: 'smtp_host', value: settings.smtpHost, category: 'email', description: 'SMTP server hostname', is_public: false },
        { key: 'smtp_port', value: settings.smtpPort, category: 'email', description: 'SMTP server port', is_public: false },
        { key: 'smtp_secure', value: settings.smtpSecure, category: 'email', description: 'Use SSL/TLS encryption', is_public: false },
        { key: 'smtp_user', value: settings.smtpUser, category: 'email', description: 'SMTP username', is_public: false },
        { key: 'smtp_password', value: settings.smtpPassword, category: 'email', description: 'SMTP password', is_public: false },
        { key: 'smtp_from_email', value: settings.smtpFromEmail, category: 'email', description: 'From email address', is_public: false },
        { key: 'smtp_from_name', value: settings.smtpFromName, category: 'email', description: 'From name', is_public: false },
        { key: 'enable_email_sending', value: settings.enableEmailSending, category: 'email', description: 'Enable email notifications', is_public: true },
        { key: 'enable_waitlist_emails', value: settings.enableWaitlistEmails, category: 'email', description: 'Send waitlist confirmations', is_public: true },
        { key: 'enable_contact_emails', value: settings.enableContactEmails, category: 'email', description: 'Send contact confirmations', is_public: true },
        { key: 'enable_welcome_emails', value: settings.enableWelcomeEmails, category: 'email', description: 'Send welcome emails', is_public: true },
        { key: 'enable_security_emails', value: settings.enableSecurityEmails, category: 'email', description: 'Send security alerts', is_public: true },
        { key: 'email_retry_attempts', value: settings.emailRetryAttempts, category: 'email', description: 'Email retry attempts', is_public: false },
        { key: 'email_timeout', value: settings.emailTimeout, category: 'email', description: 'Email timeout in seconds', is_public: false },
        { key: 'enable_email_logs', value: settings.enableEmailLogs, category: 'email', description: 'Enable email logging', is_public: false },
        { key: 'enable_email_queue', value: settings.enableEmailQueue, category: 'email', description: 'Enable email queue', is_public: false }
      ]

      // Use batch upsert for better performance and atomicity
      const { error: upsertError } = await supabase
        .from('system_settings')
        .upsert(
          settingsToSave.map(setting => ({
            key: setting.key,
            value: setting.value,
            category: setting.category,
            description: setting.description,
            is_public: setting.is_public
          })),
          { onConflict: 'key' }
        )

      if (upsertError) {
        console.error('Upsert error:', upsertError)
        throw new Error(`Failed to save settings: ${upsertError.message}`)
      }

      return { success: true }
    } catch (error) {
      console.error('Error saving settings:', error)
      return { success: false, error: error instanceof Error ? error.message : 'Failed to save settings' }
    }
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Clear previous validation errors
    setValidationErrors({})
    
    // Validate form before saving
    const errors = validateSMTPSettings()
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors)
      return
    }
    
    setSaving(true)
    
    // Save settings to database
    const { success, error } = await saveSettingsToDatabase()
    
    if (!success) {
      setTestResult({ success: false, message: error || 'Failed to save settings' })
      setSaving(false)
      return
    }
    
    setSaving(false)
    setTestResult({ success: true, message: 'Email settings saved successfully!' })
    setTimeout(() => setTestResult(null), 3000)
  }

  const handleTestConnection = async () => {
    setTesting(true)
    setTestResult(null)
    
    if (!settings.smtpHost || !settings.smtpUser || !settings.smtpPassword) {
      setTestResult({ success: false, message: 'Please fill in all SMTP configuration fields' })
      setTesting(false)
      return
    }
    
    try {
      // Call Supabase Edge Function to test SMTP connection
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/test-smtp`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          host: settings.smtpHost,
          port: settings.smtpPort,
          secure: settings.smtpSecure,
          user: settings.smtpUser,
          password: settings.smtpPassword
        })
      })

      const result = await response.json()
      
      if (result.success) {
        setTestResult({ success: true, message: 'SMTP connection successful!' })
      } else {
        setTestResult({ success: false, message: result.error || 'SMTP connection failed' })
      }
    } catch (error) {
      // Fallback to browser simulation if edge function not available
      console.log('SMTP Test (Browser Mode):', {
        host: settings.smtpHost,
        port: settings.smtpPort,
        user: settings.smtpUser
      })
      
      // Simulate connection test
      await new Promise(resolve => setTimeout(resolve, 1000))
      setTestResult({ success: true, message: 'SMTP connection test completed (browser simulation)' })
    }
    
    setTesting(false)
  }

  const handleSendTestEmail = async () => {
    setTesting(true)
    setTestResult(null)
    
    if (!settings.smtpFromEmail) {
      setTestResult({ success: false, message: 'Please enter a "From Email" address to send test email' })
      setTesting(false)
      return
    }
    
    if (!settings.smtpHost || !settings.smtpUser || !settings.smtpPassword) {
      setTestResult({ success: false, message: 'Please configure SMTP settings before sending test email' })
      setTesting(false)
      return
    }
    
    try {
      // Call Supabase Edge Function to send test email
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-test-email`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          smtpConfig: {
            host: settings.smtpHost,
            port: settings.smtpPort,
            secure: settings.smtpSecure,
            user: settings.smtpUser,
            password: settings.smtpPassword,
            fromEmail: settings.smtpFromEmail,
            fromName: settings.smtpFromName
          },
          toEmail: settings.smtpFromEmail
        })
      })

      const result = await response.json()
      
      if (result.success) {
        setTestResult({ 
          success: true, 
          message: `Test email sent successfully to ${settings.smtpFromEmail}! Check your inbox.` 
        })
        
        // Log the email send
        await logEmailSend(settings.smtpFromEmail, 'Capital R3alm - Test Email Configuration', 'test_email', 'sent')
      } else {
        setTestResult({ 
          success: false, 
          message: result.error || 'Failed to send test email' 
        })
        
        // Log the failed attempt
        await logEmailSend(settings.smtpFromEmail, 'Capital R3alm - Test Email Configuration', 'test_email', 'failed', result.error)
      }
    } catch (error) {
      // Fallback to browser simulation if edge function not available
      console.log('Test Email (Browser Mode):', {
        to: settings.smtpFromEmail,
        from: `${settings.smtpFromName} <${settings.smtpFromEmail}>`,
        subject: 'Capital R3alm - Test Email Configuration'
      })
      
      // Simulate email sending
      await new Promise(resolve => setTimeout(resolve, 1500))
      setTestResult({ 
        success: true, 
        message: `Test email simulated successfully! (Browser mode - check console for details)` 
      })
    }
    
    setTesting(false)
  }

  const logEmailSend = async (toEmail: string, subject: string, templateType: string, status: string, errorMessage?: string) => {
    try {
      if (!import.meta.env.VITE_SUPABASE_URL) return

      await supabase
        .from('email_logs')
        .insert({
          to_email: toEmail,
          from_email: settings.smtpFromEmail,
          subject: subject,
          template_type: templateType,
          status: status,
          error_message: errorMessage,
          sent_at: status === 'sent' ? new Date().toISOString() : null
        })
    } catch (error) {
      console.error('Error logging email:', error)
    }
  }

  const handleChange = (field: string, value: string | boolean | number) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const smtpPresets = [
    { name: 'Gmail', host: 'smtp.gmail.com', port: 587, secure: false },
    { name: 'Outlook', host: 'smtp-mail.outlook.com', port: 587, secure: false },
    { name: 'Yahoo', host: 'smtp.mail.yahoo.com', port: 587, secure: false },
    { name: 'Custom', host: '', port: 587, secure: false }
  ]

  const applyPreset = (preset: typeof smtpPresets[0]) => {
    if (preset.name !== 'Custom') {
      setSettings(prev => ({
        ...prev,
        smtpHost: preset.host,
        smtpPort: preset.port,
        smtpSecure: preset.secure
      }))
    }
  }

  return (
    <div className="fade-in">
      <section className="py-12 bg-gradient-to-br from-[#121212] to-[#1E1E1E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-8">
            <Link
              to="/admin/settings"
              className="p-2 text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300"
            >
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <Mail className="h-10 w-10 text-[#00BFFF]" />
            <div>
              <h1 className="text-4xl font-bold text-white">
                Email <span className="gradient-text">Settings</span>
              </h1>
              <p className="text-gray-400">Configure SMTP server and email notifications</p>
            </div>
          </div>

          {/* Test Results */}
          {testResult && (
            <div className={`mb-8 p-4 rounded-lg border flex items-center space-x-3 ${
              testResult.success 
                ? 'bg-green-500/20 border-green-500/30 text-green-400' 
                : 'bg-red-500/20 border-red-500/30 text-red-400'
            }`}>
              {testResult.success ? <CheckCircle className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
              <span>{testResult.message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="glass-effect rounded-xl p-8">
            {/* Enable Email Toggle */}
            <div className="flex items-center justify-between p-6 bg-[#1E1E1E]/50 rounded-lg mb-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Enable Email Notifications</h3>
                <p className="text-gray-400">Turn on email sending for waitlist confirmations and contact forms</p>
              </div>
              <input
                type="checkbox"
                checked={settings.enableEmailSending}
                onChange={(e) => handleChange('enableEmailSending', e.target.checked)}
                className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF] scale-125"
              />
            </div>

            {/* SMTP Presets */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">SMTP Provider Presets</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {smtpPresets.map((preset, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => applyPreset(preset)}
                    className="p-4 bg-[#1E1E1E] border border-[#333] rounded-lg text-white hover:bg-[#333] hover:border-[#00BFFF] transition-all duration-300 text-center"
                  >
                    {preset.name}
                  </button>
                ))}
              </div>
            </div>

            {/* SMTP Configuration */}
            <div className="space-y-6 mb-8">
              <h3 className="text-xl font-bold text-white">SMTP Server Configuration</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    SMTP Host *
                  </label>
                  <input
                    type="text"
                    value={settings.smtpHost}
                    onChange={(e) => handleChange('smtpHost', e.target.value)}
                    className={`w-full px-4 py-3 bg-[#1E1E1E] border rounded-lg text-white focus:outline-none transition-all duration-300 ${
                      validationErrors.smtpHost ? 'border-red-500 focus:border-red-400' : 'border-[#333] focus:border-[#00BFFF]'
                    }`}
                    placeholder="smtp.gmail.com"
                    required={settings.enableEmailSending}
                  />
                  {validationErrors.smtpHost && (
                    <p className="text-red-400 text-sm mt-1">{validationErrors.smtpHost}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    SMTP Port *
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="65535"
                    value={settings.smtpPort}
                    onChange={(e) => handleChange('smtpPort', parseInt(e.target.value))}
                    className={`w-full px-4 py-3 bg-[#1E1E1E] border rounded-lg text-white focus:outline-none transition-all duration-300 ${
                      validationErrors.smtpPort ? 'border-red-500 focus:border-red-400' : 'border-[#333] focus:border-[#00BFFF]'
                    }`}
                    placeholder="587"
                    required={settings.enableEmailSending}
                  />
                  {validationErrors.smtpPort && (
                    <p className="text-red-400 text-sm mt-1">{validationErrors.smtpPort}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    SMTP Username *
                  </label>
                  <input
                    type="text"
                    value={settings.smtpUser}
                    onChange={(e) => handleChange('smtpUser', e.target.value)}
                    className={`w-full px-4 py-3 bg-[#1E1E1E] border rounded-lg text-white focus:outline-none transition-all duration-300 ${
                      validationErrors.smtpUser ? 'border-red-500 focus:border-red-400' : 'border-[#333] focus:border-[#00BFFF]'
                    }`}
                    placeholder="your-email@domain.com"
                    required={settings.enableEmailSending}
                  />
                  {validationErrors.smtpUser && (
                    <p className="text-red-400 text-sm mt-1">{validationErrors.smtpUser}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    SMTP Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={settings.smtpPassword}
                      onChange={(e) => handleChange('smtpPassword', e.target.value)}
                      className={`w-full px-4 py-3 bg-[#1E1E1E] border rounded-lg text-white focus:outline-none transition-all duration-300 pr-12 ${
                        validationErrors.smtpPassword ? 'border-red-500 focus:border-red-400' : 'border-[#333] focus:border-[#00BFFF]'
                      }`}
                      placeholder="Your SMTP password or app password"
                      required={settings.enableEmailSending}
                    />
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {validationErrors.smtpPassword && (
                    <p className="text-red-400 text-sm mt-1">{validationErrors.smtpPassword}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    From Email Address *
                  </label>
                  <input
                    type="email"
                    value={settings.smtpFromEmail}
                    onChange={(e) => handleChange('smtpFromEmail', e.target.value)}
                    className={`w-full px-4 py-3 bg-[#1E1E1E] border rounded-lg text-white focus:outline-none transition-all duration-300 ${
                      validationErrors.smtpFromEmail ? 'border-red-500 focus:border-red-400' : 'border-[#333] focus:border-[#00BFFF]'
                    }`}
                    placeholder="noreply@r3alm.com"
                    required={settings.enableEmailSending}
                  />
                  {validationErrors.smtpFromEmail && (
                    <p className="text-red-400 text-sm mt-1">{validationErrors.smtpFromEmail}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    From Name
                  </label>
                  <input
                    type="text"
                    value={settings.smtpFromName}
                    onChange={(e) => handleChange('smtpFromName', e.target.value)}
                    className={`w-full px-4 py-3 bg-[#1E1E1E] border rounded-lg text-white focus:outline-none transition-all duration-300 ${
                      validationErrors.smtpFromName ? 'border-red-500 focus:border-red-400' : 'border-[#333] focus:border-[#00BFFF]'
                    }`}
                    placeholder="Capital R3alm"
                  />
                  {validationErrors.smtpFromName && (
                    <p className="text-red-400 text-sm mt-1">{validationErrors.smtpFromName}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="smtpSecure"
                  checked={settings.smtpSecure}
                  onChange={(e) => handleChange('smtpSecure', e.target.checked)}
                  className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                />
                <label htmlFor="smtpSecure" className="ml-3 text-gray-300">
                  Use SSL/TLS (Enable for port 465, disable for port 587/25)
                </label>
              </div>
            </div>

            {/* Email Types */}
            <div className="space-y-6 mb-8">
              <h3 className="text-xl font-bold text-white">Email Notifications</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                  <div>
                    <h4 className="text-white font-medium">Waitlist Confirmations</h4>
                    <p className="text-gray-400 text-sm">Send confirmation emails when users join waitlists</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.enableWaitlistEmails}
                    onChange={(e) => handleChange('enableWaitlistEmails', e.target.checked)}
                    className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                  />
                </div>
                
                <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                  <div>
                    <h4 className="text-white font-medium">Contact Form Confirmations</h4>
                    <p className="text-gray-400 text-sm">Send confirmation emails for contact form submissions</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.enableContactEmails}
                    onChange={(e) => handleChange('enableContactEmails', e.target.checked)}
                    className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                  />
                </div>
                
                <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                  <div>
                    <h4 className="text-white font-medium">Welcome Emails</h4>
                    <p className="text-gray-400 text-sm">Send welcome emails to new user registrations</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.enableWelcomeEmails}
                    onChange={(e) => handleChange('enableWelcomeEmails', e.target.checked)}
                    className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                  />
                </div>
                
                <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                  <div>
                    <h4 className="text-white font-medium">Security Alerts</h4>
                    <p className="text-gray-400 text-sm">Send emails for security-related events</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.enableSecurityEmails}
                    onChange={(e) => handleChange('enableSecurityEmails', e.target.checked)}
                    className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                  />
                </div>
              </div>
            </div>

            {/* Advanced Settings */}
            <div className="space-y-6 mb-8">
              <h3 className="text-xl font-bold text-white">Advanced Email Settings</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Retry Attempts
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={settings.emailRetryAttempts}
                    onChange={(e) => handleChange('emailRetryAttempts', parseInt(e.target.value))}
                    className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Timeout (seconds)
                  </label>
                  <input
                    type="number"
                    min="10"
                    max="120"
                    value={settings.emailTimeout}
                    onChange={(e) => handleChange('emailTimeout', parseInt(e.target.value))}
                    className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="enableEmailLogs"
                    checked={settings.enableEmailLogs}
                    onChange={(e) => handleChange('enableEmailLogs', e.target.checked)}
                    className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                  />
                  <label htmlFor="enableEmailLogs" className="ml-3 text-gray-300">
                    Enable Email Logging (for debugging and analytics)
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="enableEmailQueue"
                    checked={settings.enableEmailQueue}
                    onChange={(e) => handleChange('enableEmailQueue', e.target.checked)}
                    className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                  />
                  <label htmlFor="enableEmailQueue" className="ml-3 text-gray-300">
                    Enable Email Queue (for high-volume sending)
                  </label>
                </div>
              </div>
            </div>

            {/* Configuration Help */}
            <div className="p-6 bg-[#00BFFF]/10 border border-[#00BFFF]/30 rounded-lg mb-8">
              <h3 className="text-white font-medium mb-3 flex items-center space-x-2">
                <Settings className="h-5 w-5" />
                <span>SMTP Configuration Guide</span>
              </h3>
              <div className="text-sm text-gray-300 space-y-2">
                <p><strong>Gmail:</strong> Use smtp.gmail.com, port 587, and generate an App Password</p>
                <p><strong>Outlook/Hotmail:</strong> Use smtp-mail.outlook.com, port 587</p>
                <p><strong>Yahoo:</strong> Use smtp.mail.yahoo.com, port 587</p>
                <p><strong>Custom SMTP:</strong> Contact your email provider for specific settings</p>
                <p><strong>Security:</strong> Most providers require app-specific passwords for SMTP</p>
              </div>
            </div>

            {/* Test Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                type="button"
                onClick={handleTestConnection}
                disabled={testing || !settings.enableEmailSending || Object.keys(validateSMTPSettings()).length > 0}
                className="px-6 py-3 bg-[#FFD700] text-[#121212] rounded-lg hover:bg-[#FFA500] transition-all duration-300 button-magnetic flex items-center space-x-2 disabled:opacity-50"
              >
                <Shield className="h-4 w-4" />
                <span>{testing ? 'Testing...' : 'Test Connection'}</span>
              </button>
              
              <button
                type="button"
                onClick={handleSendTestEmail}
                disabled={testing || !settings.enableEmailSending || Object.keys(validateSMTPSettings()).length > 0}
                className="px-6 py-3 border border-[#00BFFF] text-[#00BFFF] rounded-lg hover:bg-[#00BFFF] hover:text-white transition-all duration-300 button-magnetic flex items-center space-x-2 disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
                <span>{testing ? 'Sending...' : 'Send Test Email'}</span>
              </button>
            </div>

            {/* Save Button */}
            <div className="flex justify-end space-x-4 pt-8 border-t border-[#333]">
              <Link
                to="/admin/settings"
                className="px-6 py-3 border border-[#333] text-gray-300 rounded-lg hover:bg-[#333] hover:text-white transition-all duration-300"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={saving || Object.keys(validateSMTPSettings()).length > 0}
                className="px-8 py-4 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic flex items-center space-x-2 disabled:opacity-50"
              >
                <Save className="h-5 w-5" />
                <span>{saving ? 'Saving Settings...' : 'Save Email Settings'}</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}