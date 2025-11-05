import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Rocket, Edit, Clock, Zap, Hexagon, Save, ExternalLink, Package } from 'lucide-react'
import { productsData } from '../../data/content'
import { waitlistDivisions } from '../../data/waitlist'

export function PipelineManager() {
  const [editingItem, setEditingItem] = useState<string | null>(null)
  const [editingType, setEditingType] = useState<'product' | 'waitlist' | null>(null)
  const [productData, setProductData] = useState(productsData)
  const [waitlistData, setWaitlistData] = useState(waitlistDivisions)
  const [saving, setSaving] = useState(false)

  const handleEdit = (itemKey: string, type: 'product' | 'waitlist') => {
    setEditingItem(itemKey)
    setEditingType(type)
  }

  const handleSave = async () => {
    setSaving(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSaving(false)
    setEditingItem(null)
    setEditingType(null)
  }

  const handleCancel = () => {
    setEditingItem(null)
    setEditingType(null)
    setProductData(productsData) // Reset to original data
    setWaitlistData(waitlistDivisions) // Reset to original data
  }

  const handleProductChange = (productKey: string, field: string, value: string) => {
    setProductData(prev => ({
      ...prev,
      [productKey]: {
        ...prev[productKey as keyof typeof prev],
        [field]: value
      }
    }))
  }

  const handleWaitlistChange = (itemId: string, field: string, value: string) => {
    setWaitlistData(prev => prev.map(item => 
      item.id === itemId ? { ...item, [field]: value } : item
    ))
  }

  const handleProductFeatureChange = (productKey: string, index: number, value: string) => {
    setProductData(prev => ({
      ...prev,
      [productKey]: {
        ...prev[productKey as keyof typeof prev],
        features: prev[productKey as keyof typeof prev].features.map((feature, i) => 
          i === index ? value : feature
        )
      }
    }))
  }

  const handleWaitlistFeatureChange = (itemId: string, index: number, value: string) => {
    setWaitlistData(prev => prev.map(item => 
      item.id === itemId ? {
        ...item,
        features: item.features.map((feature, i) => i === index ? value : feature)
      } : item
    ))
  }

  return (
    <div className="fade-in">
      <section className="py-12 bg-gradient-to-br from-[#121212] to-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-8">
            <Link
              to="/admin/dashboard"
              className="p-2 text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300"
            >
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <Package className="h-10 w-10 text-[#00BFFF]" />
            <h1 className="text-4xl font-bold text-white">
              Manage <span className="gradient-text">Pipeline</span>
            </h1>
            <div className="ml-auto text-sm text-gray-400">
              {Object.keys(productData).length} Products • {waitlistData.length} Waitlist Items
            </div>
          </div>

          {/* Products in Development */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              Products in <span className="text-[#00BFFF]">Development</span>
            </h2>
            
            <div className="space-y-8">
              {Object.entries(productData).map(([key, product]) => (
                <div key={key} className="glass-effect rounded-2xl p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Hexagon className="h-12 w-12 text-[#00BFFF]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-sm font-bold text-white">R3</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-1 ${
                          product.status === 'Coming Soon' 
                            ? 'bg-[#FFD700]/20 text-[#FFD700] border border-[#FFD700]/30' 
                            : 'bg-[#00BFFF]/20 text-[#00BFFF] border border-[#00BFFF]/30'
                        }`}>
                          {product.status === 'Coming Soon' && <Clock className="h-4 w-4 inline mr-1" />}
                          {product.status === 'Beta Access' && <Zap className="h-4 w-4 inline mr-1" />}
                          {product.status}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      {product.status === 'Beta Access' && (
                        <a
                          href={product.appUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 border border-[#00BFFF] text-[#00BFFF] rounded-lg hover:bg-[#00BFFF] hover:text-white transition-all duration-300 flex items-center space-x-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>View Beta</span>
                        </a>
                      )}
                      
                      {editingItem === key && editingType === 'product' ? (
                        <div className="flex space-x-2">
                          <button
                            onClick={handleSave}
                            disabled={saving}
                            className="px-4 py-2 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 flex items-center space-x-2 disabled:opacity-50"
                          >
                            <Save className="h-4 w-4" />
                            <span>{saving ? 'Saving...' : 'Save'}</span>
                          </button>
                          <button
                            onClick={handleCancel}
                            className="px-4 py-2 border border-[#333] text-gray-300 rounded-lg hover:bg-[#333] transition-all duration-300"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleEdit(key, 'product')}
                          className="px-4 py-2 bg-[#FFD700] text-[#121212] rounded-lg hover:bg-[#FFA500] transition-all duration-300 flex items-center space-x-2"
                        >
                          <Edit className="h-4 w-4" />
                          <span>Edit</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {editingItem === key && editingType === 'product' ? (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Product Name
                        </label>
                        <input
                          type="text"
                          value={product.name}
                          onChange={(e) => handleProductChange(key, 'name', e.target.value)}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Description
                        </label>
                        <textarea
                          rows={4}
                          value={product.description}
                          onChange={(e) => handleProductChange(key, 'description', e.target.value)}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300 resize-none"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Status
                          </label>
                          <select
                            value={product.status}
                            onChange={(e) => handleProductChange(key, 'status', e.target.value)}
                            className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                          >
                            <option value="Coming Soon">Coming Soon</option>
                            <option value="Beta Access">Beta Access</option>
                            <option value="Alpha Testing">Alpha Testing</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            App URL
                          </label>
                          <input
                            type="url"
                            value={product.appUrl}
                            onChange={(e) => handleProductChange(key, 'appUrl', e.target.value)}
                            className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Features
                        </label>
                        <div className="space-y-2">
                          {product.features.map((feature, index) => (
                            <div key={index} className="flex gap-2">
                              <input
                                type="text"
                                value={feature}
                                onChange={(e) => handleProductFeatureChange(key, index, e.target.value)}
                                className="flex-1 px-4 py-2 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                                placeholder={`Feature ${index + 1}`}
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  setProductData(prev => ({
                                    ...prev,
                                    [key]: {
                                      ...prev[key as keyof typeof prev],
                                      features: prev[key as keyof typeof prev].features.filter((_, i) => i !== index)
                                    }
                                  }))
                                }}
                                className="px-3 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-all duration-300"
                              >
                                ×
                              </button>
                            </div>
                          ))}
                          <button
                            type="button"
                            onClick={() => {
                              setProductData(prev => ({
                                ...prev,
                                [key]: {
                                  ...prev[key as keyof typeof prev],
                                  features: [...prev[key as keyof typeof prev].features, '']
                                }
                              }))
                            }}
                            className="w-full px-4 py-2 border-2 border-dashed border-[#333] text-gray-400 rounded-lg hover:border-[#00BFFF] hover:text-[#00BFFF] transition-all duration-300 flex items-center justify-center space-x-2"
                          >
                            <span>+ Add Feature</span>
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Benefits
                        </label>
                        <div className="space-y-2">
                          {product.benefits.map((benefit, index) => (
                            <div key={index} className="flex gap-2">
                              <input
                                type="text"
                                value={benefit}
                                onChange={(e) => {
                                  setProductData(prev => ({
                                    ...prev,
                                    [key]: {
                                      ...prev[key as keyof typeof prev],
                                      benefits: prev[key as keyof typeof prev].benefits.map((b, i) => 
                                        i === index ? e.target.value : b
                                      )
                                    }
                                  }))
                                }}
                                className="flex-1 px-4 py-2 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                                placeholder={`Benefit ${index + 1}`}
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  setProductData(prev => ({
                                    ...prev,
                                    [key]: {
                                      ...prev[key as keyof typeof prev],
                                      benefits: prev[key as keyof typeof prev].benefits.filter((_, i) => i !== index)
                                    }
                                  }))
                                }}
                                className="px-3 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-all duration-300"
                              >
                                ×
                              </button>
                            </div>
                          ))}
                          <button
                            type="button"
                            onClick={() => {
                              setProductData(prev => ({
                                ...prev,
                                [key]: {
                                  ...prev[key as keyof typeof prev],
                                  benefits: [...prev[key as keyof typeof prev].benefits, '']
                                }
                              }))
                            }}
                            className="w-full px-4 py-2 border-2 border-dashed border-[#333] text-gray-400 rounded-lg hover:border-[#00BFFF] hover:text-[#00BFFF] transition-all duration-300 flex items-center justify-center space-x-2"
                          >
                            <span>+ Add Benefit</span>
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Synergy Description
                        </label>
                        <textarea
                          rows={3}
                          value={product.synergy}
                          onChange={(e) => handleProductChange(key, 'synergy', e.target.value)}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300 resize-none"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <p className="text-gray-300 leading-relaxed mb-4">{product.description}</p>
                        <div className="space-y-2">
                          <div className="text-sm text-gray-400">
                            <strong>Status:</strong> <span className="text-[#FFD700]">{product.status}</span>
                          </div>
                          <div className="text-sm text-gray-400">
                            <strong>App URL:</strong> <a href={product.appUrl} target="_blank" rel="noopener noreferrer" className="text-[#00BFFF] hover:text-[#FFD700]">{product.appUrl}</a>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Features</h4>
                        <div className="space-y-2">
                          {product.features.slice(0, 4).map((feature, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-[#00BFFF] rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-300 text-sm">{feature}</p>
                            </div>
                          ))}
                          {product.features.length > 4 && (
                            <p className="text-[#FFD700] text-sm font-medium ml-5">
                              +{product.features.length - 4} more features
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Waitlist Divisions */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              Waitlist <span className="text-[#FFD700]">Divisions</span>
            </h2>
            
            <div className="space-y-8">
              {waitlistData.map((item) => (
                <div key={item.id} className="glass-effect rounded-2xl p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Hexagon className="h-12 w-12 text-[#00BFFF]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-sm font-bold text-white">R3</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                        <p className="text-[#FFD700] font-semibold">{item.subtitle}</p>
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-1 ${
                          item.priority === 'high' ? 'bg-[#FFD700]/20 text-[#FFD700] border border-[#FFD700]/30' :
                          item.priority === 'medium' ? 'bg-[#00BFFF]/20 text-[#00BFFF] border border-[#00BFFF]/30' :
                          'bg-gray-400/20 text-gray-400 border border-gray-400/30'
                        }`}>
                          {item.expectedLaunch} • {item.priority} priority
                        </div>
                      </div>
                    </div>
                    
                    {editingItem === item.id && editingType === 'waitlist' ? (
                      <div className="flex space-x-2">
                        <button
                          onClick={handleSave}
                          disabled={saving}
                          className="px-4 py-2 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 flex items-center space-x-2 disabled:opacity-50"
                        >
                          <Save className="h-4 w-4" />
                          <span>{saving ? 'Saving...' : 'Save'}</span>
                        </button>
                        <button
                          onClick={handleCancel}
                          className="px-4 py-2 border border-[#333] text-gray-300 rounded-lg hover:bg-[#333] transition-all duration-300"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleEdit(item.id, 'waitlist')}
                        className="px-4 py-2 bg-[#FFD700] text-[#121212] rounded-lg hover:bg-[#FFA500] transition-all duration-300 flex items-center space-x-2"
                      >
                        <Edit className="h-4 w-4" />
                        <span>Edit</span>
                      </button>
                    )}
                  </div>

                  {editingItem === item.id && editingType === 'waitlist' ? (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Division Name
                          </label>
                          <input
                            type="text"
                            value={item.name}
                            onChange={(e) => handleWaitlistChange(item.id, 'name', e.target.value)}
                            className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Subtitle
                          </label>
                          <input
                            type="text"
                            value={item.subtitle}
                            onChange={(e) => handleWaitlistChange(item.id, 'subtitle', e.target.value)}
                            className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Description
                        </label>
                        <textarea
                          rows={4}
                          value={item.description}
                          onChange={(e) => handleWaitlistChange(item.id, 'description', e.target.value)}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300 resize-none"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Expected Launch
                          </label>
                          <input
                            type="text"
                            value={item.expectedLaunch}
                            onChange={(e) => handleWaitlistChange(item.id, 'expectedLaunch', e.target.value)}
                            className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                            placeholder="Q1 2026"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Category
                          </label>
                          <select
                            value={item.category}
                            onChange={(e) => handleWaitlistChange(item.id, 'category', e.target.value)}
                            className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                          >
                            <option value="Investment">Investment</option>
                            <option value="Protection">Protection</option>
                            <option value="Lending">Lending</option>
                            <option value="Analytics">Analytics</option>
                            <option value="Education">Education</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Priority
                          </label>
                          <select
                            value={item.priority}
                            onChange={(e) => handleWaitlistChange(item.id, 'priority', e.target.value as 'high' | 'medium' | 'low')}
                            className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                          >
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Features
                        </label>
                        <div className="space-y-2">
                          {item.features.map((feature, index) => (
                            <div key={index} className="flex gap-2">
                              <input
                                type="text"
                                value={feature}
                                onChange={(e) => handleWaitlistFeatureChange(item.id, index, e.target.value)}
                                className="flex-1 px-4 py-2 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                                placeholder={`Feature ${index + 1}`}
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  setWaitlistData(prev => prev.map(prevItem => 
                                    prevItem.id === item.id ? {
                                      ...prevItem,
                                      features: prevItem.features.filter((_, i) => i !== index)
                                    } : prevItem
                                  ))
                                }}
                                className="px-3 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-all duration-300"
                              >
                                ×
                              </button>
                            </div>
                          ))}
                          <button
                            type="button"
                            onClick={() => {
                              setWaitlistData(prev => prev.map(prevItem => 
                                prevItem.id === item.id ? {
                                  ...prevItem,
                                  features: [...prevItem.features, '']
                                } : prevItem
                              ))
                            }}
                            className="w-full px-4 py-2 border-2 border-dashed border-[#333] text-gray-400 rounded-lg hover:border-[#00BFFF] hover:text-[#00BFFF] transition-all duration-300 flex items-center justify-center space-x-2"
                          >
                            <span>+ Add Feature</span>
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Benefits
                        </label>
                        <div className="space-y-2">
                          {item.benefits.map((benefit, index) => (
                            <div key={index} className="flex gap-2">
                              <input
                                type="text"
                                value={benefit}
                                onChange={(e) => {
                                  setWaitlistData(prev => prev.map(prevItem => 
                                    prevItem.id === item.id ? {
                                      ...prevItem,
                                      benefits: prevItem.benefits.map((b, i) => i === index ? e.target.value : b)
                                    } : prevItem
                                  ))
                                }}
                                className="flex-1 px-4 py-2 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                                placeholder={`Benefit ${index + 1}`}
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  setWaitlistData(prev => prev.map(prevItem => 
                                    prevItem.id === item.id ? {
                                      ...prevItem,
                                      benefits: prevItem.benefits.filter((_, i) => i !== index)
                                    } : prevItem
                                  ))
                                }}
                                className="px-3 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-all duration-300"
                              >
                                ×
                              </button>
                            </div>
                          ))}
                          <button
                            type="button"
                            onClick={() => {
                              setWaitlistData(prev => prev.map(prevItem => 
                                prevItem.id === item.id ? {
                                  ...prevItem,
                                  benefits: [...prevItem.benefits, '']
                                } : prevItem
                              ))
                            }}
                            className="w-full px-4 py-2 border-2 border-dashed border-[#333] text-gray-400 rounded-lg hover:border-[#00BFFF] hover:text-[#00BFFF] transition-all duration-300 flex items-center justify-center space-x-2"
                          >
                            <span>+ Add Benefit</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <p className="text-gray-300 leading-relaxed mb-4">{item.description}</p>
                        <div className="text-sm text-gray-400">
                          <div className="space-y-1">
                            <div><strong>Category:</strong> {item.category}</div>
                            <div><strong>Priority:</strong> {item.priority}</div>
                            <div><strong>Expected Launch:</strong> {item.expectedLaunch}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Features</h4>
                        <div className="space-y-2">
                          {item.features.slice(0, 4).map((feature, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-[#00BFFF] rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-300 text-sm">{feature}</p>
                            </div>
                          ))}
                          {item.features.length > 4 && (
                            <p className="text-[#FFD700] text-sm font-medium ml-5">
                              +{item.features.length - 4} more features
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}