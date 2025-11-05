import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Settings, Save, Globe, Shield, Bell, Palette, Database, Mail, Phone, MapPin, Eye, EyeOff } from 'lucide-react'

export function SystemSettings() {
  const [saving, setSaving] = useState(false)
  const [activeTab, setActiveTab] = useState('general')
  const [showApiKeys, setShowApiKeys] = useState(false)
  
  const [settings, setSettings] = useState({
    // General Settings
    siteName: 'Capital R3alm',
    siteDescription: 'Democratizing wealth creation through innovative Web3 finance solutions',
    siteUrl: 'https://r3alm.com',
    adminEmail: 'admin@r3alm.com',
    supportEmail: 'support@r3alm.com',
    phone: '+1 (555) 123-4567',
    address: '123 Blockchain Avenue, Web3 District, NY 10001',
    
    // Security Settings
    enableTwoFactor: true,
    sessionTimeout: 30,
    maxLoginAttempts: 5,
    passwordMinLength: 8,
    requirePasswordComplexity: true,
    enableAuditLog: true,
    
    // Notification Settings
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: false,
    marketingEmails: true,
    securityAlerts: true,
    systemUpdates: true,
    
    // SMTP Settings
    smtpHost: '',
    smtpPort: 587,
    smtpSecure: false,
    smtpUser: '',
    smtpPassword: '',
    smtpFromEmail: '',
    smtpFromName: 'Capital R3alm',
    enableEmailSending: false,
    
    // API Settings
    supabaseUrl: 'https://demo.supabase.co',
    supabaseKey: 'demo-key-hidden',
    stripePublicKey: 'pk_test_hidden',
    stripeSecretKey: 'sk_test_hidden',
    
    // Content Settings
    enableComments: false,
    moderateComments: true,
    enableRatings: false,
    maxFileSize: 10,
    allowedFileTypes: 'jpg,jpeg,png,gif,pdf,doc,docx',
    
    // Display Settings
    articlesPerPage: 12,
    faqsPerPage: 20,
    enableDarkMode: true,
    primaryColor: '#00BFFF',
    secondaryColor: '#FFD700',
    accentColor: '#9333EA'
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setSaving(false)
    // Show success message or redirect
  }

  const handleChange = (field: string, value: string | boolean | number) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const tabs = [
    { id: 'general', label: 'General', icon: Settings },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'email', label: 'Email/SMTP', icon: Mail },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'api', label: 'API Keys', icon: Database },
    { id: 'content', label: 'Content', icon: Globe },
    { id: 'display', label: 'Display', icon: Palette }
  ]

  return (
    <div className="fade-in">
      <section className="py-12 bg-gradient-to-br from-[#121212] to-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-8">
            <Link
              to="/admin/dashboard"
              className="p-2 text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300"
            >
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <Settings className="h-10 w-10 text-[#00BFFF]" />
            <div>
              <h1 className="text-4xl font-bold text-white">
                System <span className="gradient-text">Settings</span>
              </h1>
              <p className="text-gray-400">Configure platform settings and preferences</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="glass-effect rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-6">Settings Categories</h2>
              <nav className="space-y-2">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-[#00BFFF] text-white'
                        : 'text-gray-300 hover:bg-[#1E1E1E] hover:text-white'
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Settings Content */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass-effect rounded-xl p-8">
                
                {/* General Settings */}
                {activeTab === 'general' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white mb-6">General Settings</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Site Name
                        </label>
                        <input
                          type="text"
                          value={settings.siteName}
                          onChange={(e) => handleChange('siteName', e.target.value)}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Site URL
                        </label>
                        <input
                          type="url"
                          value={settings.siteUrl}
                          onChange={(e) => handleChange('siteUrl', e.target.value)}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Site Description
                      </label>
                      <textarea
                        rows={3}
                        value={settings.siteDescription}
                        onChange={(e) => handleChange('siteDescription', e.target.value)}
                        className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300 resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          <Mail className="h-4 w-4 inline mr-2" />
                          Admin Email
                        </label>
                        <input
                          type="email"
                          value={settings.adminEmail}
                          onChange={(e) => handleChange('adminEmail', e.target.value)}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          <Mail className="h-4 w-4 inline mr-2" />
                          Support Email
                        </label>
                        <input
                          type="email"
                          value={settings.supportEmail}
                          onChange={(e) => handleChange('supportEmail', e.target.value)}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          <Phone className="h-4 w-4 inline mr-2" />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={settings.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          <MapPin className="h-4 w-4 inline mr-2" />
                          Business Address
                        </label>
                        <input
                          type="text"
                          value={settings.address}
                          onChange={(e) => handleChange('address', e.target.value)}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Security Settings */}
                {activeTab === 'security' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white mb-6">Security Settings</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Session Timeout (minutes)
                        </label>
                        <input
                          type="number"
                          value={settings.sessionTimeout}
                          onChange={(e) => handleChange('sessionTimeout', parseInt(e.target.value))}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Max Login Attempts
                        </label>
                        <input
                          type="number"
                          value={settings.maxLoginAttempts}
                          onChange={(e) => handleChange('maxLoginAttempts', parseInt(e.target.value))}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Minimum Password Length
                      </label>
                      <input
                        type="number"
                        value={settings.passwordMinLength}
                        onChange={(e) => handleChange('passwordMinLength', parseInt(e.target.value))}
                        className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="enableTwoFactor"
                          checked={settings.enableTwoFactor}
                          onChange={(e) => handleChange('enableTwoFactor', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                        <label htmlFor="enableTwoFactor" className="ml-3 text-gray-300">
                          Enable Two-Factor Authentication
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="requirePasswordComplexity"
                          checked={settings.requirePasswordComplexity}
                          onChange={(e) => handleChange('requirePasswordComplexity', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                        <label htmlFor="requirePasswordComplexity" className="ml-3 text-gray-300">
                          Require Password Complexity
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="enableAuditLog"
                          checked={settings.enableAuditLog}
                          onChange={(e) => handleChange('enableAuditLog', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                        <label htmlFor="enableAuditLog" className="ml-3 text-gray-300">
                          Enable Audit Logging
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Email/SMTP Settings */}
                {activeTab === 'email' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white mb-6">Email & SMTP Settings</h2>
                    
                    <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg mb-6">
                      <div>
                        <h3 className="text-white font-medium">Enable Email Sending</h3>
                        <p className="text-gray-400 text-sm">Enable SMTP email notifications and confirmations</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.enableEmailSending}
                        onChange={(e) => handleChange('enableEmailSending', e.target.checked)}
                        className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          SMTP Host
                        </label>
                        <input
                          type="text"
                          value={settings.smtpHost}
                          onChange={(e) => handleChange('smtpHost', e.target.value)}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                          placeholder="smtp.gmail.com"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          SMTP Port
                        </label>
                        <input
                          type="number"
                          value={settings.smtpPort}
                          onChange={(e) => handleChange('smtpPort', parseInt(e.target.value))}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                          placeholder="587"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          SMTP Username
                        </label>
                        <input
                          type="text"
                          value={settings.smtpUser}
                          onChange={(e) => handleChange('smtpUser', e.target.value)}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                          placeholder="your-email@domain.com"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          SMTP Password
                        </label>
                        <input
                          type="password"
                          value={settings.smtpPassword}
                          onChange={(e) => handleChange('smtpPassword', e.target.value)}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                          placeholder="Your SMTP password"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          From Email Address
                        </label>
                        <input
                          type="email"
                          value={settings.smtpFromEmail}
                          onChange={(e) => handleChange('smtpFromEmail', e.target.value)}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                          placeholder="noreply@r3alm.com"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          From Name
                        </label>
                        <input
                          type="text"
                          value={settings.smtpFromName}
                          onChange={(e) => handleChange('smtpFromName', e.target.value)}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                          placeholder="Capital R3alm"
                        />
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
                        Use SSL/TLS (Enable for port 465, disable for port 587)
                      </label>
                    </div>

                    <div className="p-4 bg-[#00BFFF]/10 border border-[#00BFFF]/30 rounded-lg">
                      <h3 className="text-white font-medium mb-2">SMTP Configuration Help</h3>
                      <div className="text-sm text-gray-300 space-y-1">
                        <p><strong>Gmail:</strong> smtp.gmail.com, Port 587, Use app password</p>
                        <p><strong>Outlook:</strong> smtp-mail.outlook.com, Port 587</p>
                        <p><strong>Yahoo:</strong> smtp.mail.yahoo.com, Port 587</p>
                        <p><strong>Custom SMTP:</strong> Contact your email provider for settings</p>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <button
                        type="button"
                        className="px-6 py-3 bg-[#FFD700] text-[#121212] rounded-lg hover:bg-[#FFA500] transition-all duration-300 button-magnetic flex items-center space-x-2"
                      >
                        <Mail className="h-4 w-4" />
                        <span>Test Connection</span>
                      </button>
                      <button
                        type="button"
                        className="px-6 py-3 border border-[#00BFFF] text-[#00BFFF] rounded-lg hover:bg-[#00BFFF] hover:text-white transition-all duration-300 button-magnetic flex items-center space-x-2"
                      >
                        <Mail className="h-4 w-4" />
                        <span>Send Test Email</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Notification Settings */}
                {activeTab === 'notifications' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white mb-6">Notification Settings</h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                        <div>
                          <h3 className="text-white font-medium">Email Notifications</h3>
                          <p className="text-gray-400 text-sm">Receive notifications via email</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.emailNotifications}
                          onChange={(e) => handleChange('emailNotifications', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                        <div>
                          <h3 className="text-white font-medium">Push Notifications</h3>
                          <p className="text-gray-400 text-sm">Browser push notifications</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.pushNotifications}
                          onChange={(e) => handleChange('pushNotifications', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                        <div>
                          <h3 className="text-white font-medium">SMS Notifications</h3>
                          <p className="text-gray-400 text-sm">Text message notifications</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.smsNotifications}
                          onChange={(e) => handleChange('smsNotifications', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                        <div>
                          <h3 className="text-white font-medium">Marketing Emails</h3>
                          <p className="text-gray-400 text-sm">Product updates and promotions</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.marketingEmails}
                          onChange={(e) => handleChange('marketingEmails', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                        <div>
                          <h3 className="text-white font-medium">Security Alerts</h3>
                          <p className="text-gray-400 text-sm">Important security notifications</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.securityAlerts}
                          onChange={(e) => handleChange('securityAlerts', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                        <div>
                          <h3 className="text-white font-medium">System Updates</h3>
                          <p className="text-gray-400 text-sm">Platform updates and maintenance</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.systemUpdates}
                          onChange={(e) => handleChange('systemUpdates', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* API Settings */}
                {activeTab === 'api' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold text-white">API Keys & Integrations</h2>
                      <button
                        type="button"
                        onClick={() => setShowApiKeys(!showApiKeys)}
                        className="flex items-center space-x-2 px-4 py-2 bg-[#1E1E1E] text-gray-300 rounded-lg hover:bg-[#333] transition-all duration-300"
                      >
                        {showApiKeys ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        <span>{showApiKeys ? 'Hide' : 'Show'} Keys</span>
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Supabase URL
                        </label>
                        <input
                          type="url"
                          value={settings.supabaseUrl}
                          onChange={(e) => handleChange('supabaseUrl', e.target.value)}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Supabase Anon Key
                        </label>
                        <input
                          type={showApiKeys ? 'text' : 'password'}
                          value={settings.supabaseKey}
                          onChange={(e) => handleChange('supabaseKey', e.target.value)}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Stripe Public Key
                        </label>
                        <input
                          type={showApiKeys ? 'text' : 'password'}
                          value={settings.stripePublicKey}
                          onChange={(e) => handleChange('stripePublicKey', e.target.value)}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Stripe Secret Key
                        </label>
                        <input
                          type={showApiKeys ? 'text' : 'password'}
                          value={settings.stripeSecretKey}
                          onChange={(e) => handleChange('stripeSecretKey', e.target.value)}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Content Settings */}
                {activeTab === 'content' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white mb-6">Content Settings</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Articles Per Page
                        </label>
                        <input
                          type="number"
                          value={settings.articlesPerPage}
                          onChange={(e) => handleChange('articlesPerPage', parseInt(e.target.value))}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          FAQs Per Page
                        </label>
                        <input
                          type="number"
                          value={settings.faqsPerPage}
                          onChange={(e) => handleChange('faqsPerPage', parseInt(e.target.value))}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Max File Size (MB)
                        </label>
                        <input
                          type="number"
                          value={settings.maxFileSize}
                          onChange={(e) => handleChange('maxFileSize', parseInt(e.target.value))}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Allowed File Types
                        </label>
                        <input
                          type="text"
                          value={settings.allowedFileTypes}
                          onChange={(e) => handleChange('allowedFileTypes', e.target.value)}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                          placeholder="jpg,png,pdf,doc"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="enableComments"
                          checked={settings.enableComments}
                          onChange={(e) => handleChange('enableComments', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                        <label htmlFor="enableComments" className="ml-3 text-gray-300">
                          Enable Comments on Articles
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="moderateComments"
                          checked={settings.moderateComments}
                          onChange={(e) => handleChange('moderateComments', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                        <label htmlFor="moderateComments" className="ml-3 text-gray-300">
                          Moderate Comments Before Publishing
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="enableRatings"
                          checked={settings.enableRatings}
                          onChange={(e) => handleChange('enableRatings', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                        <label htmlFor="enableRatings" className="ml-3 text-gray-300">
                          Enable Article Ratings
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Display Settings */}
                {activeTab === 'display' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white mb-6">Display Settings</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Primary Color
                        </label>
                        <div className="flex space-x-2">
                          <input
                            type="color"
                            value={settings.primaryColor}
                            onChange={(e) => handleChange('primaryColor', e.target.value)}
                            className="w-16 h-12 bg-[#1E1E1E] border border-[#333] rounded-lg"
                          />
                          <input
                            type="text"
                            value={settings.primaryColor}
                            onChange={(e) => handleChange('primaryColor', e.target.value)}
                            className="flex-1 px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Secondary Color
                        </label>
                        <div className="flex space-x-2">
                          <input
                            type="color"
                            value={settings.secondaryColor}
                            onChange={(e) => handleChange('secondaryColor', e.target.value)}
                            className="w-16 h-12 bg-[#1E1E1E] border border-[#333] rounded-lg"
                          />
                          <input
                            type="text"
                            value={settings.secondaryColor}
                            onChange={(e) => handleChange('secondaryColor', e.target.value)}
                            className="flex-1 px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Accent Color
                        </label>
                        <div className="flex space-x-2">
                          <input
                            type="color"
                            value={settings.accentColor}
                            onChange={(e) => handleChange('accentColor', e.target.value)}
                            className="w-16 h-12 bg-[#1E1E1E] border border-[#333] rounded-lg"
                          />
                          <input
                            type="text"
                            value={settings.accentColor}
                            onChange={(e) => handleChange('accentColor', e.target.value)}
                            className="flex-1 px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="enableDarkMode"
                        checked={settings.enableDarkMode}
                        onChange={(e) => handleChange('enableDarkMode', e.target.checked)}
                        className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                      />
                      <label htmlFor="enableDarkMode" className="ml-3 text-gray-300">
                        Enable Dark Mode by Default
                      </label>
                    </div>
                  </div>
                )}

                {/* Save Button */}
                <div className="flex justify-end space-x-4 mt-8 pt-8 border-t border-[#333]">
                  <Link
                    to="/admin/dashboard"
                    className="px-6 py-3 border border-[#333] text-gray-300 rounded-lg hover:bg-[#333] hover:text-white transition-all duration-300"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-8 py-4 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic flex items-center space-x-2 disabled:opacity-50"
                  >
                    <Save className="h-5 w-5" />
                    <span>{saving ? 'Saving Settings...' : 'Save Settings'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}