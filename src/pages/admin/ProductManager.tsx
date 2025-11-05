import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Package, Edit, ExternalLink, Hexagon, Save } from 'lucide-react'
import { divisionsData } from '../../data/content'

export function ProductManager() {
  const [editingProduct, setEditingProduct] = useState<string | null>(null)
  const [productData, setProductData] = useState(divisionsData)
  const [saving, setSaving] = useState(false)

  const handleEdit = (productKey: string) => {
    setEditingProduct(productKey)
  }

  const handleSave = async (productKey: string) => {
    setSaving(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSaving(false)
    setEditingProduct(null)
  }

  const handleCancel = () => {
    setEditingProduct(null)
    setProductData(divisionsData) // Reset to original data
  }

  const handleChange = (productKey: string, field: string, value: string) => {
    setProductData(prev => ({
      ...prev,
      [productKey]: {
        ...prev[productKey as keyof typeof prev],
        [field]: value
      }
    }))
  }

  const handleFeatureChange = (productKey: string, index: number, value: string) => {
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
              Manage <span className="gradient-text">Products</span>
            </h1>
          </div>

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
                      <h2 className="text-2xl font-bold text-white">{product.name}</h2>
                      <p className="text-[#FFD700] font-semibold">{product.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={product.appUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-[#00BFFF] text-[#00BFFF] rounded-lg hover:bg-[#00BFFF] hover:text-white transition-all duration-300 flex items-center space-x-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>View Live</span>
                    </a>
                    
                    {editingProduct === key ? (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleSave(key)}
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
                        onClick={() => handleEdit(key)}
                        className="px-4 py-2 bg-[#FFD700] text-[#121212] rounded-lg hover:bg-[#FFA500] transition-all duration-300 flex items-center space-x-2"
                      >
                        <Edit className="h-4 w-4" />
                        <span>Edit</span>
                      </button>
                    )}
                  </div>
                </div>

                {editingProduct === key ? (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Product Name
                        </label>
                        <input
                          type="text"
                          value={product.name}
                          onChange={(e) => handleChange(key, 'name', e.target.value)}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Subtitle
                        </label>
                        <input
                          type="text"
                          value={product.subtitle}
                          onChange={(e) => handleChange(key, 'subtitle', e.target.value)}
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
                        value={product.description}
                        onChange={(e) => handleChange(key, 'description', e.target.value)}
                        className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300 resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Value Proposition
                      </label>
                      <textarea
                        rows={3}
                        value={product.valueProposition}
                        onChange={(e) => handleChange(key, 'valueProposition', e.target.value)}
                        className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300 resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          App URL
                        </label>
                        <input
                          type="url"
                          value={product.appUrl}
                          onChange={(e) => handleChange(key, 'appUrl', e.target.value)}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Image URL
                        </label>
                        <input
                          type="url"
                          value={product.image}
                          onChange={(e) => handleChange(key, 'image', e.target.value)}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Features (one per line)
                      </label>
                      <div className="space-y-2">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex gap-2">
                            <input
                              type="text"
                              value={feature}
                              onChange={(e) => handleFeatureChange(key, index, e.target.value)}
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
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Description</h3>
                      <p className="text-gray-300 leading-relaxed mb-6">{product.description}</p>
                      
                      <h3 className="text-xl font-semibold text-white mb-4">Value Proposition</h3>
                      <p className="text-gray-300 leading-relaxed">{product.valueProposition}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                      <div className="space-y-2">
                        {product.features.slice(0, 5).map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-[#00BFFF] rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-300 text-sm">{feature}</p>
                          </div>
                        ))}
                        {product.features.length > 5 && (
                          <p className="text-[#FFD700] text-sm font-medium ml-5">
                            +{product.features.length - 5} more features
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
      </section>
    </div>
  )
}