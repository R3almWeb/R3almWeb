import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, HelpCircle, Edit, Eye, Trash2, Plus, Search, Filter, Star } from 'lucide-react'
import { faqData, faqCategories } from '../../data/faq'
import { DeleteModal } from '../../components/DeleteModal'

export function FAQManager() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('id')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const [deleteModal, setDeleteModal] = useState<{
    isOpen: boolean;
    faqId: number | null;
    faqQuestion: string;
  }>({
    isOpen: false,
    faqId: null,
    faqQuestion: ''
  })
  const [deleting, setDeleting] = useState(false)

  const filteredFAQs = faqData
    .filter(faq => {
      const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      let aValue, bValue
      
      switch (sortBy) {
        case 'question':
          aValue = a.question.toLowerCase()
          bValue = b.question.toLowerCase()
          break
        case 'category':
          aValue = a.category.toLowerCase()
          bValue = b.category.toLowerCase()
          break
        case 'featured':
          aValue = a.featured ? 1 : 0
          bValue = b.featured ? 1 : 0
          break
        case 'id':
        default:
          aValue = a.id
          bValue = b.id
          break
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })

  const openDeleteModal = (faqId: number, faqQuestion: string) => {
    setDeleteModal({
      isOpen: true,
      faqId,
      faqQuestion
    })
  }

  const closeDeleteModal = () => {
    setDeleteModal({
      isOpen: false,
      faqId: null,
      faqQuestion: ''
    })
  }

  const handleDelete = async () => {
    if (!deleteModal.faqId) return
    
    setDeleting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log(`Deleting FAQ ${deleteModal.faqId}`)
    
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
              <HelpCircle className="h-10 w-10 text-[#00BFFF]" />
              <div>
                <h1 className="text-4xl font-bold text-white">
                  FAQ <span className="gradient-text">Management</span>
                </h1>
                <p className="text-gray-400">Manage frequently asked questions</p>
              </div>
            </div>
            
            <Link
              to="/admin/faqs/new"
              className="px-6 py-3 bg-[#FFD700] text-[#121212] rounded-lg hover:bg-[#FFA500] transition-all duration-300 hover-glow button-magnetic flex items-center space-x-2"
            >
              <Plus className="h-5 w-5" />
              <span>New FAQ</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-[#FFD700] mb-2">{faqData.length}</div>
              <div className="text-gray-400">Total FAQs</div>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-[#00BFFF] mb-2">{faqData.filter(f => f.featured).length}</div>
              <div className="text-gray-400">Featured FAQs</div>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-white mb-2">{faqCategories.length - 1}</div>
              <div className="text-gray-400">Categories</div>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-[#FFD700] mb-2">{Math.round(faqData.length / (faqCategories.length - 1))}</div>
              <div className="text-gray-400">Avg per Category</div>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="glass-effect rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
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
                  {faqCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
              >
                <option value="id">Sort by ID</option>
                <option value="question">Sort by Question</option>
                <option value="category">Sort by Category</option>
                <option value="featured">Sort by Featured</option>
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

          {/* FAQs List */}
          <div className="glass-effect rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#1E1E1E]">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">ID</th>
                    <th 
                      className="px-6 py-4 text-left text-white font-semibold cursor-pointer hover:text-[#00BFFF] transition-colors duration-300"
                      onClick={() => toggleSort('question')}
                    >
                      <div className="flex items-center space-x-2">
                        <span>Question</span>
                        {sortBy === 'question' && <span>{sortOrder === 'asc' ? '↑' : '↓'}</span>}
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
                      className="px-6 py-4 text-center text-white font-semibold cursor-pointer hover:text-[#00BFFF] transition-colors duration-300"
                      onClick={() => toggleSort('featured')}
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <span>Featured</span>
                        {sortBy === 'featured' && <span>{sortOrder === 'asc' ? '↑' : '↓'}</span>}
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFAQs.map((faq, index) => (
                    <tr key={faq.id} className={`border-t border-[#333] hover:bg-[#1E1E1E]/50 transition-colors duration-300 ${index % 2 === 0 ? 'bg-[#121212]' : 'bg-[#1A1A1A]'}`}>
                      <td className="px-6 py-4">
                        <span className="text-gray-400 font-mono">#{faq.id}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-white font-medium mb-1">{faq.question}</div>
                          <div className="text-gray-400 text-sm truncate max-w-md">{faq.answer}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="bg-[#00BFFF]/20 text-[#00BFFF] px-3 py-1 rounded-full text-sm">
                          {faq.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        {faq.featured ? (
                          <Star className="h-5 w-5 text-[#FFD700] mx-auto" />
                        ) : (
                          <span className="text-gray-500">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center space-x-2">
                          <Link
                            to="/faq"
                            className="p-2 text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300 hover:bg-[#00BFFF]/10 rounded"
                            title="View FAQ"
                          >
                            <Eye className="h-4 w-4" />
                          </Link>
                          <Link
                            to={`/admin/faqs/${faq.id}`}
                            className="p-2 text-[#FFD700] hover:text-[#FFA500] transition-colors duration-300 hover:bg-[#FFD700]/10 rounded"
                            title="Edit FAQ"
                          >
                            <Edit className="h-4 w-4" />
                          </Link>
                          <button
                            onClick={() => openDeleteModal(faq.id, faq.question)}
                            className="p-2 text-red-400 hover:text-red-300 transition-colors duration-300 hover:bg-red-500/10 rounded"
                            title="Delete FAQ"
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

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-xl text-gray-400 mb-4">No FAQs found</p>
                <p className="text-gray-500 mb-6">Try adjusting your search terms or filters</p>
                <Link
                  to="/admin/faqs/new"
                  className="inline-flex items-center px-6 py-3 bg-[#FFD700] text-[#121212] rounded-lg hover:bg-[#FFA500] transition-all duration-300 space-x-2"
                >
                  <Plus className="h-5 w-5" />
                  <span>Create First FAQ</span>
                </Link>
              </div>
            )}
          </div>

          {/* Results Summary */}
          {filteredFAQs.length > 0 && (
            <div className="mt-6 text-center text-gray-400">
              Showing {filteredFAQs.length} of {faqData.length} FAQs
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
        title="Delete FAQ"
        message="Are you sure you want to delete this FAQ? This action cannot be undone."
        itemName={deleteModal.faqQuestion}
        loading={deleting}
      />
    </div>
  )
}