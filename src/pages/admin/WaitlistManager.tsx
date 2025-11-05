import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Clock, Edit, Eye, Trash2, Plus, Search, Filter, Calendar, Mail, Star, TrendingUp, Shield, DollarSign, BarChart3, GraduationCap, Users, CheckCircle } from 'lucide-react'
import { waitlistDivisions, waitlistCategories } from '../../data/waitlist'
import { DeleteModal } from '../../components/DeleteModal'

export function WaitlistManager() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedPriority, setSelectedPriority] = useState('All')
  const [sortBy, setSortBy] = useState('expectedLaunch')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [deleteModal, setDeleteModal] = useState<{
    isOpen: boolean;
    itemId: string | null;
    itemName: string;
  }>({
    isOpen: false,
    itemId: null,
    itemName: ''
  })
  const [deleting, setDeleting] = useState(false)

  const filteredItems = waitlistDivisions
    .filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
      const matchesPriority = selectedPriority === 'All' || item.priority === selectedPriority
      return matchesSearch && matchesCategory && matchesPriority
    })
    .sort((a, b) => {
      let aValue, bValue
      
      switch (sortBy) {
        case 'name':
          aValue = a.name.toLowerCase()
          bValue = b.name.toLowerCase()
          break
        case 'category':
          aValue = a.category.toLowerCase()
          bValue = b.category.toLowerCase()
          break
        case 'priority':
          const priorityOrder = { high: 3, medium: 2, low: 1 }
          aValue = priorityOrder[a.priority]
          bValue = priorityOrder[b.priority]
          break
        case 'expectedLaunch':
        default:
          aValue = a.expectedLaunch
          bValue = b.expectedLaunch
          break
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })

  const openDeleteModal = (itemId: string, itemName: string) => {
    setDeleteModal({
      isOpen: true,
      itemId,
      itemName
    })
  }

  const closeDeleteModal = () => {
    setDeleteModal({
      isOpen: false,
      itemId: null,
      itemName: ''
    })
  }

  const handleDelete = async () => {
    if (!deleteModal.itemId) return
    
    setDeleting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log(`Deleting waitlist item ${deleteModal.itemId}`)
    
    setDeleting(false)
    closeDeleteModal()
  }

  const toggleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(field)
      setSortOrder('asc')
    }
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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-500/20'
      case 'medium': return 'text-yellow-400 bg-yellow-500/20'
      case 'low': return 'text-green-400 bg-green-500/20'
      default: return 'text-gray-400 bg-gray-500/20'
    }
  }

  const waitlistStats = {
    total: waitlistDivisions.length,
    high: waitlistDivisions.filter(item => item.priority === 'high').length,
    medium: waitlistDivisions.filter(item => item.priority === 'medium').length,
    low: waitlistDivisions.filter(item => item.priority === 'low').length,
    categories: waitlistCategories.length - 1, // Exclude 'All'
    avgFeatures: Math.round(waitlistDivisions.reduce((sum, item) => sum + item.features.length, 0) / waitlistDivisions.length)
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
              <Clock className="h-10 w-10 text-[#00BFFF]" />
              <div>
                <h1 className="text-4xl font-bold text-white">
                  Waitlist <span className="gradient-text">Management</span>
                </h1>
                <p className="text-gray-400">Manage upcoming products and divisions</p>
              </div>
            </div>
            
            <Link
              to="/admin/waitlist/new"
              className="px-6 py-3 bg-[#FFD700] text-[#121212] rounded-lg hover:bg-[#FFA500] transition-all duration-300 hover-glow button-magnetic flex items-center space-x-2"
            >
              <Plus className="h-5 w-5" />
              <span>Add Waitlist Item</span>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            <div className="glass-effect rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-[#FFD700] mb-1">{waitlistStats.total}</div>
              <div className="text-gray-400 text-sm">Total Items</div>
            </div>
            <div className="glass-effect rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-red-400 mb-1">{waitlistStats.high}</div>
              <div className="text-gray-400 text-sm">High Priority</div>
            </div>
            <div className="glass-effect rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-1">{waitlistStats.medium}</div>
              <div className="text-gray-400 text-sm">Medium Priority</div>
            </div>
            <div className="glass-effect rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">{waitlistStats.low}</div>
              <div className="text-gray-400 text-sm">Low Priority</div>
            </div>
            <div className="glass-effect rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-[#00BFFF] mb-1">{waitlistStats.categories}</div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
            <div className="glass-effect rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white mb-1">{waitlistStats.avgFeatures}</div>
              <div className="text-gray-400 text-sm">Avg Features</div>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="glass-effect rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search waitlist items..."
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
                  {waitlistCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <select
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
                className="px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
              >
                <option value="All">All Priorities</option>
                <option value="high">High Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="low">Low Priority</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
              >
                <option value="expectedLaunch">Sort by Launch Date</option>
                <option value="name">Sort by Name</option>
                <option value="category">Sort by Category</option>
                <option value="priority">Sort by Priority</option>
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

          {/* Waitlist Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => {
              const CategoryIcon = getCategoryIcon(item.category)
              return (
                <div key={item.id} className={`glass-effect rounded-2xl overflow-hidden scale-on-hover slide-up stagger-${(index % 3) + 1}`}>
                  <div className="relative h-48">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(item.priority)}`}>
                        {item.priority.charAt(0).toUpperCase() + item.priority.slice(1)} Priority
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <CategoryIcon className="h-8 w-8 text-[#00BFFF]" />
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-[#FFD700]/20 text-[#FFD700] border border-[#FFD700]/30 px-3 py-1 rounded-full text-sm font-medium">
                        <Clock className="h-4 w-4 inline mr-1" />
                        {item.expectedLaunch}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{item.name}</h3>
                        <p className="text-[#FFD700] text-sm font-semibold">{item.subtitle}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Link
                          to={`/waitlist/${item.id}`}
                          className="p-2 text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300 hover:bg-[#00BFFF]/10 rounded"
                          title="View Waitlist Page"
                        >
                          <Eye className="h-4 w-4" />
                        </Link>
                        <Link
                          to={`/admin/waitlist/${item.id}/edit`}
                          className="p-2 text-[#FFD700] hover:text-[#FFA500] transition-colors duration-300 hover:bg-[#FFD700]/10 rounded"
                          title="Edit Item"
                        >
                          <Edit className="h-4 w-4" />
                        </Link>
                        <button
                          onClick={() => openDeleteModal(item.id, item.name)}
                          className="p-2 text-red-400 hover:text-red-300 transition-colors duration-300 hover:bg-red-500/10 rounded"
                          title="Delete Item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{item.description}</p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="bg-[#00BFFF]/20 text-[#00BFFF] px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Users className="h-4 w-4" />
                        <span>{item.features.length} features</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <Clock className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-400 mb-4">No waitlist items found</p>
              <p className="text-gray-500 mb-6">Try adjusting your search terms or filters</p>
              <Link
                to="/admin/waitlist/new"
                className="inline-flex items-center px-6 py-3 bg-[#FFD700] text-[#121212] rounded-lg hover:bg-[#FFA500] transition-all duration-300 space-x-2"
              >
                <Plus className="h-5 w-5" />
                <span>Create First Waitlist Item</span>
              </Link>
            </div>
          )}

          {/* Results Summary */}
          {filteredItems.length > 0 && (
            <div className="mt-8 text-center text-gray-400">
              Showing {filteredItems.length} of {waitlistDivisions.length} waitlist items
              {searchTerm && ` matching "${searchTerm}"`}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              {selectedPriority !== 'All' && ` with ${selectedPriority} priority`}
            </div>
          )}
        </div>
      </section>

      {/* Delete Modal */}
      <DeleteModal
        isOpen={deleteModal.isOpen}
        onClose={closeDeleteModal}
        onConfirm={handleDelete}
        title="Delete Waitlist Item"
        message="Are you sure you want to delete this waitlist item? This action cannot be undone and will remove all associated data."
        itemName={deleteModal.itemName}
        loading={deleting}
      />
    </div>
  )
}