import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Save, ArrowLeft, Eye, Upload } from 'lucide-react'
import { categories } from '../../data/articles'
import { articles } from '../../data/articles'

export function ArticleEditor() {
  const navigate = useNavigate()
  const { id } = useParams()
  const isEditing = id !== 'new'

  // Find existing article if editing
  const existingArticle = isEditing ? articles.find(a => a.id === parseInt(id || '0')) : null

  const [article, setArticle] = useState({
    title: existingArticle?.title || '',
    excerpt: existingArticle?.excerpt || '',
    content: existingArticle?.content || '',
    category: existingArticle?.category || '',
    author: existingArticle?.author || '',
    readTime: existingArticle?.readTime || '',
    image: existingArticle?.image || '',
    tags: existingArticle?.tags.join(', ') || '',
    featured: existingArticle?.featured || false
  })

  const [saving, setSaving] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSaving(false)
    navigate('/admin/blog')
  }

  const handleCancel = () => {
    navigate('/admin/blog')
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setArticle(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  return (
    <div className="fade-in">
      <section className="py-12 bg-gradient-to-br from-[#121212] to-[#1E1E1E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleCancel}
                className="p-2 text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              <h1 className="text-4xl font-bold text-white">
                {isEditing ? 'Edit' : 'Create'} <span className="gradient-text">Article</span>
              </h1>
              {isEditing && (
                <div className="text-sm text-gray-400">
                  ID: {id}
                </div>
              )}
            </div>
            
            <div className="flex space-x-4">
              <button
                type="button"
                className="px-6 py-3 border border-[#FFD700] text-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-[#121212] transition-all duration-300 button-magnetic flex items-center space-x-2"
              >
                <Eye className="h-4 w-4" />
                <span>Preview</span>
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
                    Article Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={article.title}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                    placeholder="Enter article title"
                  />
                </div>

                <div>
                  <label htmlFor="excerpt" className="block text-sm font-medium text-gray-300 mb-2">
                    Excerpt
                  </label>
                  <textarea
                    id="excerpt"
                    name="excerpt"
                    rows={3}
                    value={article.excerpt}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Brief description of the article"
                  />
                </div>

                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-300 mb-2">
                    Content (HTML)
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    rows={20}
                    value={article.content}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300 resize-none font-mono text-sm"
                    placeholder="Enter article content in HTML format"
                  />
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={article.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                  >
                    <option value="">Select category</option>
                    {categories.filter(cat => cat !== 'All').map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="author" className="block text-sm font-medium text-gray-300 mb-2">
                    Author
                  </label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={article.author}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                    placeholder="Author name"
                  />
                </div>

                <div>
                  <label htmlFor="readTime" className="block text-sm font-medium text-gray-300 mb-2">
                    Read Time
                  </label>
                  <input
                    type="text"
                    id="readTime"
                    name="readTime"
                    value={article.readTime}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                    placeholder="e.g., 5 min read"
                  />
                </div>

                <div>
                  <label htmlFor="image" className="block text-sm font-medium text-gray-300 mb-2">
                    Featured Image URL
                  </label>
                  <input
                    type="url"
                    id="image"
                    name="image"
                    value={article.image}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div>
                  <label htmlFor="tags" className="block text-sm font-medium text-gray-300 mb-2">
                    Tags (comma-separated)
                  </label>
                  <input
                    type="text"
                    id="tags"
                    name="tags"
                    value={article.tags}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                    placeholder="blockchain, finance, web3"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="featured"
                    name="featured"
                    checked={article.featured}
                    onChange={handleChange}
                    className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                  />
                  <label htmlFor="featured" className="ml-3 text-sm text-gray-300">
                    Featured Article
                  </label>
                </div>

                <div className="space-y-4">
                  <button
                    type="submit"
                    disabled={saving}
                    className="w-full px-6 py-4 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    <Save className="h-5 w-5" />
                    <span>{saving ? 'Saving...' : 'Save Article'}</span>
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
          </form>
        </div>
      </section>
    </div>
  )
}