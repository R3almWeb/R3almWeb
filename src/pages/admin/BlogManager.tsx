import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, FileText, Edit, Eye, Trash2, Plus, Search, Filter, Calendar, User, Tag } from 'lucide-react'
import { articles, categories } from '../../data/articles'
import { DeleteModal } from '../../components/DeleteModal'

export function BlogManager() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('date')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const [deleteModal, setDeleteModal] = useState<{
    isOpen: boolean;
    articleId: number | null;
    articleTitle: string;
  }>({
    isOpen: false,
    articleId: null,
    articleTitle: ''
  })
  const [deleting, setDeleting] = useState(false)

  const filteredArticles = articles
    .filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      let aValue, bValue
      
      switch (sortBy) {
        case 'title':
          aValue = a.title.toLowerCase()
          bValue = b.title.toLowerCase()
          break
        case 'author':
          aValue = a.author.toLowerCase()
          bValue = b.author.toLowerCase()
          break
        case 'category':
          aValue = a.category.toLowerCase()
          bValue = b.category.toLowerCase()
          break
        case 'date':
        default:
          aValue = new Date(a.date).getTime()
          bValue = new Date(b.date).getTime()
          break
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })

  const openDeleteModal = (articleId: number, articleTitle: string) => {
    setDeleteModal({
      isOpen: true,
      articleId,
      articleTitle
    })
  }

  const closeDeleteModal = () => {
    setDeleteModal({
      isOpen: false,
      articleId: null,
      articleTitle: ''
    })
  }

  const handleDelete = async () => {
    if (!deleteModal.articleId) return
    
    setDeleting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log(`Deleting article ${deleteModal.articleId}`)
    
    setDeleting(false)
    closeDeleteModal()
    
    // In a real app, you would refresh the data here
  }

  const toggleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(field)
      setSortOrder('desc')
    }
  }

  return (
    <div className="fade-in">
      <section className="py-12 bg-gradient-to-br from-[#121212] to-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Link
                to="/admin/dashboard"
                className="p-2 text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300"
              >
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <FileText className="h-10 w-10 text-[#00BFFF]" />
              <div>
                <h1 className="text-4xl font-bold text-white">
                  Blog <span className="gradient-text">Management</span>
                </h1>
                <p className="text-gray-400">Manage all blog articles and content</p>
              </div>
            </div>
            
            <Link
              to="/admin/articles/new"
              className="px-6 py-3 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic flex items-center space-x-2"
            >
              <Plus className="h-5 w-5" />
              <span>New Article</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-[#FFD700] mb-2">{articles.length}</div>
              <div className="text-gray-400">Total Articles</div>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-[#00BFFF] mb-2">{articles.filter(a => a.featured).length}</div>
              <div className="text-gray-400">Featured Articles</div>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-white mb-2">{categories.length - 1}</div>
              <div className="text-gray-400">Categories</div>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-[#FFD700] mb-2">{new Set(articles.map(a => a.author)).size}</div>
              <div className="text-gray-400">Authors</div>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="glass-effect rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                />
              </div>
              
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
              >
                <option value="date">Sort by Date</option>
                <option value="title">Sort by Title</option>
                <option value="author">Sort by Author</option>
                <option value="category">Sort by Category</option>
              </select>

              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white hover:bg-[#333] transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>{sortOrder === 'asc' ? '↑' : '↓'}</span>
                <span>{sortOrder === 'asc' ? 'Ascending' : 'Descending'}</span>
              </button>
            </div>
          </div>

          {/* Articles List */}
          <div className="glass-effect rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#1E1E1E]">
                  <tr>
                    <th 
                      className="px-6 py-4 text-left text-white font-semibold cursor-pointer hover:text-[#00BFFF] transition-colors duration-300"
                      onClick={() => toggleSort('title')}
                    >
                      <div className="flex items-center space-x-2">
                        <span>Title</span>
                        {sortBy === 'title' && <span>{sortOrder === 'asc' ? '↑' : '↓'}</span>}
                      </div>
                    </th>
                    <th 
                      className="px-6 py-4 text-left text-white font-semibold cursor-pointer hover:text-[#00BFFF] transition-colors duration-300"
                      onClick={() => toggleSort('category')}
                    >
                      <div className="flex items-center space-x-2">
                        <span>Category</span>
                        {sortBy === 'category' && <span>{sortOrder === 'asc' ? '↑' : '↓'}</span>}
                      </div>
                    </th>
                    <th 
                      className="px-6 py-4 text-left text-white font-semibold cursor-pointer hover:text-[#00BFFF] transition-colors duration-300"
                      onClick={() => toggleSort('author')}
                    >
                      <div className="flex items-center space-x-2">
                        <span>Author</span>
                        {sortBy === 'author' && <span>{sortOrder === 'asc' ? '↑' : '↓'}</span>}
                      </div>
                    </th>
                    <th 
                      className="px-6 py-4 text-left text-white font-semibold cursor-pointer hover:text-[#00BFFF] transition-colors duration-300"
                      onClick={() => toggleSort('date')}
                    >
                      <div className="flex items-center space-x-2">
                        <span>Date</span>
                        {sortBy === 'date' && <span>{sortOrder === 'asc' ? '↑' : '↓'}</span>}
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Status</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredArticles.map((article, index) => (
                    <tr key={article.id} className={`border-t border-[#333] hover:bg-[#1E1E1E]/50 transition-colors duration-300 ${index % 2 === 0 ? 'bg-[#121212]' : 'bg-[#1A1A1A]'}`}>
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-white font-medium mb-1">{article.title}</div>
                          <div className="text-gray-400 text-sm truncate max-w-xs">{article.excerpt}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="bg-[#00BFFF]/20 text-[#00BFFF] px-3 py-1 rounded-full text-sm">
                          {article.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-300">{article.author}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-300">{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        {article.featured ? (
                          <span className="bg-[#FFD700]/20 text-[#FFD700] px-3 py-1 rounded-full text-sm font-medium">
                            Featured
                          </span>
                        ) : (
                          <span className="bg-gray-500/20 text-gray-400 px-3 py-1 rounded-full text-sm">
                            Standard
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center space-x-2">
                          <Link
                            to={`/blog/${article.id}`}
                            className="p-2 text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300 hover:bg-[#00BFFF]/10 rounded"
                            title="View Article"
                          >
                            <Eye className="h-4 w-4" />
                          </Link>
                          <Link
                            to={`/admin/articles/${article.id}`}
                            className="p-2 text-[#FFD700] hover:text-[#FFA500] transition-colors duration-300 hover:bg-[#FFD700]/10 rounded"
                            title="Edit Article"
                          >
                            <Edit className="h-4 w-4" />
                          </Link>
                          <button
                            onClick={() => openDeleteModal(article.id, article.title)}
                            className="p-2 text-red-400 hover:text-red-300 transition-colors duration-300 hover:bg-red-500/10 rounded"
                            title="Delete Article"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-xl text-gray-400 mb-4">No articles found</p>
                <p className="text-gray-500 mb-6">Try adjusting your search terms or filters</p>
                <Link
                  to="/admin/articles/new"
                  className="inline-flex items-center px-6 py-3 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 space-x-2"
                >
                  <Plus className="h-5 w-5" />
                  <span>Create First Article</span>
                </Link>
              </div>
            )}
          </div>

          {/* Results Summary */}
          {filteredArticles.length > 0 && (
            <div className="mt-6 text-center text-gray-400">
              Showing {filteredArticles.length} of {articles.length} articles
              {searchTerm && ` matching "${searchTerm}"`}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </div>
          )}
        </div>
      </section>

      {/* Delete Modal */}
      <DeleteModal
        isOpen={deleteModal.isOpen}
        onClose={closeDeleteModal}
        onConfirm={handleDelete}
        title="Delete Article"
        message="Are you sure you want to delete this article? This action cannot be undone."
        itemName={deleteModal.articleTitle}
        loading={deleting}
      />
    </div>
  )
}