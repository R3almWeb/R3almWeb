import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Save, ArrowLeft, Clock, Upload, Plus, X, TrendingUp, Shield, DollarSign, BarChart3, GraduationCap, Star } from 'lucide-react'
import { waitlistCategories } from '../../data/waitlist'
import { waitlistDivisions } from '../../data/waitlist'

export function WaitlistEditor() {
  const navigate = useNavigate()
  const { id } = useParams()
  const isEditing = id !== 'new'

  // Find existing item if editing
  const existingItem = isEditing ? waitlistDivisions.find(item => item.id === id) : null

  const [item, setItem] = useState({
    name: existingItem?.name || '',
    subtitle: existingItem?.subtitle || '',
    description: existingItem?.description || '',
    expectedLaunch: existingItem?.expectedLaunch || '',
    category: existingItem?.category || '',
    features: existingItem?.features || [''],
    benefits: existingItem?.benefits || [''],
    image: existingItem?.image || '',
    priority: existingItem?.priority || 'medium'
  })

  const [saving, setSaving] = useState(false)
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    const newErrors: {[key: string]: string} = {}
    
    if (!item.name.trim()) newErrors.name = 'Name is required'
    if (!item.subtitle.trim()) newErrors.subtitle = 'Subtitle is required'
    if (!item.description.trim()) newErrors.description = 'Description is required'
    if (!item.expectedLaunch.trim()) newErrors.expectedLaunch = 'Expected launch date is required'
    if (!item.category) newErrors.category = 'Category is required'
    if (!item.image.trim()) newErrors.image = 'Image URL is required'
    
    // Validate features and benefits
    const validFeatures = item.features.filter(f => f.trim())
    const validBenefits = item.benefits.filter(b => b.trim())
    
    if (validFeatures.length === 0) newErrors.features = 'At least one feature is required'
    if (validBenefits.length === 0) newErrors.benefits = 'At least one benefit is required'
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setSaving(true)
    setErrors({})
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSaving(false)
    navigate('/admin/waitlist')
  }

  const handleCancel = () => {
    navigate('/admin/waitlist')
  }

  const handleChange = (field: string, value: string) => {
    setItem(prev => ({
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

  const handleArrayChange = (field: 'features' | 'benefits', index: number, value: string) => {
    setItem(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }))
    }
  }

  const addArrayItem = (field: 'features' | 'benefits') => {
    setItem(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }))
  }

  const removeArrayItem = (field: 'features' | 'benefits', index: number) => {
    setItem(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }))
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Investment': return TrendingUp
      case 'Protection': return Shield
      case 'Lending': return DollarSign
      case 'Analytics': return BarChart3
      case 'Education': return GraduationCap
      default: return Star
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
            <Clock className="h-10 w-10 text-[#00BFFF]" />
            <div>
              <h1 className="text-4xl font-bold text-white">
                {isEditing ? 'Edit' : 'Create'} <span className="gradient-text">Waitlist Item</span>
              </h1>
              {isEditing && (
                <div className="text-sm text-gray-400">
                  ID: {id}
                </div>
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Product Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={item.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={`w-full px-4 py-3 bg-[#1E1E1E] border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                        errors.name ? 'border-red-500 focus:border-red-400' : 'border-[#333] focus:border-[#00BFFF]'
                      }`}
                      placeholder="R3alm Product Name"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="subtitle" className="block text-sm font-medium text-gray-300 mb-2">
                      Subtitle *
                    </label>
                    <input
                      type="text"
                      id="subtitle"
                      value={item.subtitle}
                      onChange={(e) => handleChange('subtitle', e.target.value)}
                      className={`w-full px-4 py-3 bg-[#1E1E1E] border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                        errors.subtitle ? 'border-red-500 focus:border-red-400' : 'border-[#333] focus:border-[#00BFFF]'
                      }`}
                      placeholder="Product Category"
                    />
                    {errors.subtitle && <p className="text-red-400 text-sm mt-1">{errors.subtitle}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                    Description *
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    value={item.description}
                    onChange={(e) => handleChange('description', e.target.value)}
                    className={`w-full px-4 py-3 bg-[#1E1E1E] border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 resize-none ${
                      errors.description ? 'border-red-500 focus:border-red-400' : 'border-[#333] focus:border-[#00BFFF]'
                    }`}
                    placeholder="Detailed description of the product and its capabilities"
                  />
                  {errors.description && <p className="text-red-400 text-sm mt-1">{errors.description}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Key Features *
                  </label>
                  <div className="space-y-3">
                    {item.features.map((feature, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          value={feature}
                          onChange={(e) => handleArrayChange('features', index, e.target.value)}
                          className="flex-1 px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                          placeholder={`Feature ${index + 1}`}
                        />
                        {item.features.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeArrayItem('features', index)}
                            className="px-3 py-3 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-all duration-300"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => addArrayItem('features')}
                      className="w-full px-4 py-3 border-2 border-dashed border-[#333] text-gray-400 rounded-lg hover:border-[#00BFFF] hover:text-[#00BFFF] transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Plus className="h-4 w-4" />
                      <span>Add Feature</span>
                    </button>
                  </div>
                  {errors.features && <p className="text-red-400 text-sm mt-1">{errors.features}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Key Benefits *
                  </label>
                  <div className="space-y-3">
                    {item.benefits.map((benefit, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          value={benefit}
                          onChange={(e) => handleArrayChange('benefits', index, e.target.value)}
                          className="flex-1 px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                          placeholder={`Benefit ${index + 1}`}
                        />
                        {item.benefits.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeArrayItem('benefits', index)}
                            className="px-3 py-3 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-all duration-300"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => addArrayItem('benefits')}
                      className="w-full px-4 py-3 border-2 border-dashed border-[#333] text-gray-400 rounded-lg hover:border-[#00BFFF] hover:text-[#00BFFF] transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Plus className="h-4 w-4" />
                      <span>Add Benefit</span>
                    </button>
                  </div>
                  {errors.benefits && <p className="text-red-400 text-sm mt-1">{errors.benefits}</p>}
                </div>
              </div>

              {/* Sidebar Settings */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                    Category *
                  </label>
                  <select
                    id="category"
                    value={item.category}
                    onChange={(e) => handleChange('category', e.target.value)}
                    className={`w-full px-4 py-3 bg-[#1E1E1E] border rounded-lg text-white focus:outline-none transition-all duration-300 ${
                      errors.category ? 'border-red-500 focus:border-red-400' : 'border-[#333] focus:border-[#00BFFF]'
                    }`}
                  >
                    <option value="">Select category</option>
                    {waitlistCategories.filter(cat => cat !== 'All').map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  {errors.category && <p className="text-red-400 text-sm mt-1">{errors.category}</p>}
                  
                  {item.category && (
                    <div className="mt-2 flex items-center space-x-2 text-sm text-gray-400">
                      {React.createElement(getCategoryIcon(item.category), { className: "h-4 w-4 text-[#00BFFF]" })}
                      <span>{item.category} Category</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="priority" className="block text-sm font-medium text-gray-300 mb-2">
                    Priority Level
                  </label>
                  <select
                    id="priority"
                    value={item.priority}
                    onChange={(e) => handleChange('priority', e.target.value)}
                    className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                  >
                    <option value="high">High Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="low">Low Priority</option>
                  </select>
                  <p className="text-gray-400 text-sm mt-1">
                    {item.priority === 'high' && 'Featured prominently, expected within 6 months'}
                    {item.priority === 'medium' && 'Standard development timeline, 6-12 months'}
                    {item.priority === 'low' && 'Future development, 12+ months'}
                  </p>
                </div>

                <div>
                  <label htmlFor="expectedLaunch" className="block text-sm font-medium text-gray-300 mb-2">
                    Expected Launch *
                  </label>
                  <input
                    type="text"
                    id="expectedLaunch"
                    value={item.expectedLaunch}
                    onChange={(e) => handleChange('expectedLaunch', e.target.value)}
                    className={`w-full px-4 py-3 bg-[#1E1E1E] border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                      errors.expectedLaunch ? 'border-red-500 focus:border-red-400' : 'border-[#333] focus:border-[#00BFFF]'
                    }`}
                    placeholder="Q1 2026"
                  />
                  {errors.expectedLaunch && <p className="text-red-400 text-sm mt-1">{errors.expectedLaunch}</p>}
                </div>

                <div>
                  <label htmlFor="image" className="block text-sm font-medium text-gray-300 mb-2">
                    Featured Image URL *
                  </label>
                  <input
                    type="url"
                    id="image"
                    value={item.image}
                    onChange={(e) => handleChange('image', e.target.value)}
                    className={`w-full px-4 py-3 bg-[#1E1E1E] border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                      errors.image ? 'border-red-500 focus:border-red-400' : 'border-[#333] focus:border-[#00BFFF]'
                    }`}
                    placeholder="https://images.pexels.com/..."
                  />
                  {errors.image && <p className="text-red-400 text-sm mt-1">{errors.image}</p>}
                  
                  {item.image && (
                    <div className="mt-3">
                      <img 
                        src={item.image} 
                        alt="Preview" 
                        className="w-full h-32 object-cover rounded-lg"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none'
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <button
                    type="submit"
                    disabled={saving}
                    className="w-full px-6 py-4 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    <Save className="h-5 w-5" />
                    <span>{saving ? 'Saving...' : 'Save Waitlist Item'}</span>
                  </button>
                  
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="w-full px-6 py-3 border border-[#333] text-gray-300 rounded-lg hover:bg-[#333] hover:text-white transition-all duration-300 button-magnetic"
                  >
                    Cancel
                  </button>
                </div>

                {/* Preview */}
                {item.name && item.description && (
                  <div className="mt-8 p-6 bg-[#1E1E1E]/30 rounded-xl">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                      <Eye className="h-5 w-5 text-[#00BFFF]" />
                      <span>Preview</span>
                    </h3>
                    <div className="glass-effect rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        {item.category && React.createElement(getCategoryIcon(item.category), { className: "h-6 w-6 text-[#00BFFF]" })}
                        <div>
                          <h4 className="text-lg font-bold text-white">{item.name}</h4>
                          <p className="text-[#FFD700] text-sm font-semibold">{item.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                      {item.expectedLaunch && (
                        <div className="mt-3">
                          <span className="bg-[#FFD700]/20 text-[#FFD700] px-2 py-1 rounded-full text-xs">
                            {item.expectedLaunch}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}