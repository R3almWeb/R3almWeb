import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Save, ArrowLeft, Users, Mail, Phone, MapPin, Calendar, DollarSign, Shield, Crown, User, CheckCircle, AlertTriangle } from 'lucide-react'

interface UserFormData {
  name: string
  email: string
  phone: string
  address: string
  role: 'admin' | 'editor' | 'user'
  status: 'active' | 'suspended' | 'pending'
  verified: boolean
  investmentLimit: number
  notes: string
  platformAccess: string[]
  twoFactorEnabled: boolean
  emailNotifications: boolean
  marketingEmails: boolean
}

export function UserEditor() {
  const navigate = useNavigate()
  const { id } = useParams()
  const isEditing = id !== 'new'

  const [user, setUser] = useState<UserFormData>({
    name: isEditing ? 'John Smith' : '',
    email: isEditing ? 'john.smith@example.com' : '',
    phone: isEditing ? '+1 (555) 123-4567' : '',
    address: isEditing ? '123 Main St, City, State 12345' : '',
    role: 'user',
    status: 'active',
    verified: isEditing ? true : false,
    investmentLimit: 100000,
    notes: '',
    platformAccess: isEditing ? ['Crowdfund', 'Assets'] : [],
    twoFactorEnabled: false,
    emailNotifications: true,
    marketingEmails: true
  })

  const [saving, setSaving] = useState(false)
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  const platforms = ['Crowdfund', 'Assets', 'Trade', 'Governance', 'Connect']

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    const newErrors: {[key: string]: string} = {}
    
    if (!user.name.trim()) newErrors.name = 'Name is required'
    if (!user.email.trim()) newErrors.email = 'Email is required'
    if (!user.email.includes('@')) newErrors.email = 'Valid email is required'
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setSaving(true)
    setErrors({})
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSaving(false)
    navigate('/admin/users')
  }

  const handleCancel = () => {
    navigate('/admin/users')
  }

  const handleChange = (field: string, value: string | boolean | number | string[]) => {
    setUser(prev => ({
      ...prev,
      [field]: value
    }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }))
    }
  }

  const togglePlatformAccess = (platform: string) => {
    setUser(prev => ({
      ...prev,
      platformAccess: prev.platformAccess.includes(platform)
        ? prev.platformAccess.filter(p => p !== platform)
        : [...prev.platformAccess, platform]
    }))
  }

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin': return Crown
      case 'editor': return Shield
      case 'user': return User
      default: return User
    }
  }

  const getRoleDescription = (role: string) => {
    switch (role) {
      case 'admin': return 'Full system access and user management'
      case 'editor': return 'Content management and moderate user access'
      case 'user': return 'Standard user access to investment platforms'
      default: return ''
    }
  }

  return (
    <div className="fade-in">
      <section className="py-12 bg-gradient-to-br from-[#121212] to-[#1E1E1E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-8">
            <button
              onClick={handleCancel}
              className="p-2 text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <Users className="h-10 w-10 text-[#00BFFF]" />
            <div>
              <h1 className="text-4xl font-bold text-white">
                {isEditing ? 'Edit' : 'Create'} <span className="gradient-text">User</span>
              </h1>
              {isEditing && (
                <div className="text-sm text-gray-400">
                  User ID: {id}
                </div>
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Information */}
              <div className="lg:col-span-2 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={user.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={`w-full px-4 py-3 bg-[#1E1E1E] border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                        errors.name ? 'border-red-500 focus:border-red-400' : 'border-[#333] focus:border-[#00BFFF]'
                      }`}
                      placeholder="Enter full name"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={user.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={`w-full px-4 py-3 bg-[#1E1E1E] border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                        errors.email ? 'border-red-500 focus:border-red-400' : 'border-[#333] focus:border-[#00BFFF]'
                      }`}
                      placeholder="user@example.com"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={user.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="investmentLimit" className="block text-sm font-medium text-gray-300 mb-2">
                      Investment Limit ($)
                    </label>
                    <input
                      type="number"
                      id="investmentLimit"
                      value={user.investmentLimit}
                      onChange={(e) => handleChange('investmentLimit', parseInt(e.target.value) || 0)}
                      className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                      placeholder="100000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    value={user.address}
                    onChange={(e) => handleChange('address', e.target.value)}
                    className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                    placeholder="123 Main St, City, State 12345"
                  />
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-300 mb-2">
                    Admin Notes
                  </label>
                  <textarea
                    id="notes"
                    rows={4}
                    value={user.notes}
                    onChange={(e) => handleChange('notes', e.target.value)}
                    className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Internal notes about this user..."
                  />
                </div>
              </div>

              {/* Sidebar Settings */}
              <div className="space-y-6">
                {/* Role & Status */}
                <div className="space-y-4">
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">
                      User Role
                    </label>
                    <select
                      id="role"
                      value={user.role}
                      onChange={(e) => handleChange('role', e.target.value as 'admin' | 'editor' | 'user')}
                      className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                    >
                      <option value="user">User</option>
                      <option value="editor">Editor</option>
                      <option value="admin">Admin</option>
                    </select>
                    <p className="text-gray-400 text-sm mt-1">
                      {getRoleDescription(user.role)}
                    </p>
                  </div>

                  <div>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-300 mb-2">
                      Account Status
                    </label>
                    <select
                      id="status"
                      value={user.status}
                      onChange={(e) => handleChange('status', e.target.value as 'active' | 'suspended' | 'pending')}
                      className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                    >
                      <option value="active">Active</option>
                      <option value="pending">Pending Verification</option>
                      <option value="suspended">Suspended</option>
                    </select>
                  </div>
                </div>

                {/* Platform Access */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Platform Access
                  </label>
                  <div className="space-y-2">
                    {platforms.map(platform => (
                      <div key={platform} className="flex items-center justify-between p-3 bg-[#1E1E1E]/50 rounded-lg">
                        <span className="text-white text-sm">{platform}</span>
                        <input
                          type="checkbox"
                          checked={user.platformAccess.includes(platform)}
                          onChange={() => togglePlatformAccess(platform)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Account Settings */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Account Settings
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-[#1E1E1E]/50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-white text-sm">Verified Account</span>
                      </div>
                      <input
                        type="checkbox"
                        checked={user.verified}
                        onChange={(e) => handleChange('verified', e.target.checked)}
                        className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                      />
                    </div>

                    <div className="flex items-center justify-between p-3 bg-[#1E1E1E]/50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-[#00BFFF]" />
                        <span className="text-white text-sm">Two-Factor Auth</span>
                      </div>
                      <input
                        type="checkbox"
                        checked={user.twoFactorEnabled}
                        onChange={(e) => handleChange('twoFactorEnabled', e.target.checked)}
                        className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                      />
                    </div>

                    <div className="flex items-center justify-between p-3 bg-[#1E1E1E]/50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-[#FFD700]" />
                        <span className="text-white text-sm">Email Notifications</span>
                      </div>
                      <input
                        type="checkbox"
                        checked={user.emailNotifications}
                        onChange={(e) => handleChange('emailNotifications', e.target.checked)}
                        className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                      />
                    </div>

                    <div className="flex items-center justify-between p-3 bg-[#1E1E1E]/50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <span className="text-white text-sm">Marketing Emails</span>
                      </div>
                      <input
                        type="checkbox"
                        checked={user.marketingEmails}
                        onChange={(e) => handleChange('marketingEmails', e.target.checked)}
                        className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                      />
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <button
                    type="submit"
                    disabled={saving}
                    className="w-full px-6 py-4 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    <Save className="h-5 w-5" />
                    <span>{saving ? 'Saving...' : 'Save User'}</span>
                  </button>
                  
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="w-full px-6 py-3 border border-[#333] text-gray-300 rounded-lg hover:bg-[#333] hover:text-white transition-all duration-300 button-magnetic"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>

            {/* Role Information */}
            <div className="mt-8 p-6 bg-[#1E1E1E]/30 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                {React.createElement(getRoleIcon(user.role), { className: "h-5 w-5 text-[#00BFFF]" })}
                <span>Role Permissions: {user.role.charAt(0).toUpperCase() + user.role.slice(1)}</span>
              </h3>
              <p className="text-gray-300 text-sm">{getRoleDescription(user.role)}</p>
              
              {user.role === 'admin' && (
                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <div className="flex items-center space-x-2 text-red-400">
                    <AlertTriangle className="h-4 w-4" />
                    <span className="text-sm font-medium">Admin Role Warning</span>
                  </div>
                  <p className="text-red-300 text-sm mt-1">
                    Admin users have full system access including user management and system settings.
                  </p>
                </div>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}