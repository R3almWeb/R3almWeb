import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Save, ArrowLeft, HelpCircle } from 'lucide-react'
import { faqCategories } from '../../data/faq'
import { faqData } from '../../data/faq'

export function FAQEditor() {
  const navigate = useNavigate()
  const { id } = useParams()
  const isEditing = id !== 'new'

  // Find existing FAQ if editing
  const existingFAQ = isEditing ? faqData.find(f => f.id === parseInt(id || '0')) : null

  const [faq, setFaq] = useState({
    question: existingFAQ?.question || '',
    answer: existingFAQ?.answer || '',
    category: existingFAQ?.category || '',
    featured: existingFAQ?.featured || false
  })

  const [saving, setSaving] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSaving(false)
    navigate('/admin/faq-manager')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFaq(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleCancel = () => {
    navigate('/admin/faq-manager')
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
            <HelpCircle className="h-10 w-10 text-[#00BFFF]" />
            <h1 className="text-4xl font-bold text-white">
              {isEditing ? 'Edit' : 'Create'} <span className="gradient-text">FAQ</span>
            </h1>
            {isEditing && (
              <div className="text-sm text-gray-400">
                ID: {id}
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="question" className="block text-sm font-medium text-gray-300 mb-2">
                  Question
                </label>
                <input
                  type="text"
                  id="question"
                  name="question"
                  value={faq.question}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                  placeholder="Enter the frequently asked question"
                />
              </div>

              <div>
                <label htmlFor="answer" className="block text-sm font-medium text-gray-300 mb-2">
                  Answer
                </label>
                <textarea
                  id="answer"
                  name="answer"
                  rows={8}
                  value={faq.answer}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Provide a detailed answer to the question"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={faq.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                  >
                    <option value="">Select category</option>
                    {faqCategories.filter(cat => cat !== 'All').map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center justify-center">
                  <input
                    type="checkbox"
                    id="featured"
                    name="featured"
                    checked={faq.featured}
                    onChange={handleChange}
                    className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                  />
                  <label htmlFor="featured" className="ml-3 text-sm text-gray-300">
                    Featured FAQ (appears on homepage)
                  </label>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-6 py-3 border border-[#333] text-gray-300 rounded-lg hover:bg-[#333] transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-6 py-4 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic flex items-center space-x-2 disabled:opacity-50"
                >
                  <Save className="h-5 w-5" />
                  <span>{saving ? 'Saving...' : 'Save FAQ'}</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}