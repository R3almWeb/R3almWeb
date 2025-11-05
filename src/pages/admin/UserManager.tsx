import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Users, Edit, Eye, Trash2, Plus, Search, Filter, Calendar, Mail, Shield, Crown, User, MoreVertical, Ban, CheckCircle, AlertCircle } from 'lucide-react'
import { DeleteModal } from '../../components/DeleteModal'

interface UserData {
  id: string
  name: string
  email: string
  role: 'admin' | 'editor' | 'user'
  status: 'active' | 'suspended' | 'pending'
  lastLogin: string
  joinDate: string
  investmentTotal: number
  platformsUsed: string[]
  verified: boolean
}

export function UserManager() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRole, setSelectedRole] = useState('All')
  const [selectedStatus, setSelectedStatus] = useState('All')
  const [sortBy, setSortBy] = useState('joinDate')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const [deleteModal, setDeleteModal] = useState<{
    isOpen: boolean;
    userId: string | null;
    userName: string;
  }>({
    isOpen: false,
    userId: null,
    userName: ''
  })
  const [deleting, setDeleting] = useState(false)

  // Mock user data
  const [users] = useState<UserData[]>([
    {
      id: '1',
      name: 'John Smith',
      email: 'john.smith@example.com',
      role: 'user',
      status: 'active',
      lastLogin: '2025-01-15',
      joinDate: '2024-12-01',
      investmentTotal: 15000,
      platformsUsed: ['Crowdfund', 'Assets', 'Trade'],
      verified: true
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      role: 'editor',
      status: 'active',
      lastLogin: '2025-01-14',
      joinDate: '2024-11-15',
      investmentTotal: 25000,
      platformsUsed: ['Assets', 'Governance'],
      verified: true
    },
    {
      id: '3',
      name: 'Michael Chen',
      email: 'michael.chen@example.com',
      role: 'admin',
      status: 'active',
      lastLogin: '2025-01-15',
      joinDate: '2024-10-01',
      investmentTotal: 50000,
      platformsUsed: ['Crowdfund', 'Assets', 'Trade', 'Governance', 'Connect'],
      verified: true
    },
    {
      id: '4',
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      role: 'user',
      status: 'pending',
      lastLogin: 'Never',
      joinDate: '2025-01-10',
      investmentTotal: 0,
      platformsUsed: [],
      verified: false
    },
    {
      id: '5',
      name: 'Robert Wilson',
      email: 'robert.wilson@example.com',
      role: 'user',
      status: 'suspended',
      lastLogin: '2025-01-05',
      joinDate: '2024-09-20',
      investmentTotal: 8000,
      platformsUsed: ['Trade'],
      verified: true
    }
  ])

  const filteredUsers = users
    .filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           user.email.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesRole = selectedRole === 'All' || user.role === selectedRole
      const matchesStatus = selectedStatus === 'All' || user.status === selectedStatus
      return matchesSearch && matchesRole && matchesStatus
    })
    .sort((a, b) => {
      let aValue, bValue
      
      switch (sortBy) {
        case 'name':
          aValue = a.name.toLowerCase()
          bValue = b.name.toLowerCase()
          break
        case 'email':
          aValue = a.email.toLowerCase()
          bValue = b.email.toLowerCase()
          break
        case 'role':
          aValue = a.role
          bValue = b.role
          break
        case 'status':
          aValue = a.status
          bValue = b.status
          break
        case 'lastLogin':
          aValue = a.lastLogin === 'Never' ? 0 : new Date(a.lastLogin).getTime()
          bValue = b.lastLogin === 'Never' ? 0 : new Date(b.lastLogin).getTime()
          break
        case 'investmentTotal':
          aValue = a.investmentTotal
          bValue = b.investmentTotal
          break
        case 'joinDate':
        default:
          aValue = new Date(a.joinDate).getTime()
          bValue = new Date(b.joinDate).getTime()
          break
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })

  const openDeleteModal = (userId: string, userName: string) => {
    setDeleteModal({
      isOpen: true,
      userId,
      userName
    })
  }

  const closeDeleteModal = () => {
    setDeleteModal({
      isOpen: false,
      userId: null,
      userName: ''
    })
  }

  const handleDelete = async () => {
    if (!deleteModal.userId) return
    
    setDeleting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log(`Deleting user ${deleteModal.userId}`)
    
    setDeleting(false)
    closeDeleteModal()
  }

  const toggleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(field)
      setSortOrder('desc')
    }
  }

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin': return Crown
      case 'editor': return Shield
      case 'user': return User
      default: return User
    }
  }

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'text-red-400 bg-red-500/20'
      case 'editor': return 'text-yellow-400 bg-yellow-500/20'
      case 'user': return 'text-green-400 bg-green-500/20'
      default: return 'text-gray-400 bg-gray-500/20'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-500/20'
      case 'suspended': return 'text-red-400 bg-red-500/20'
      case 'pending': return 'text-yellow-400 bg-yellow-500/20'
      default: return 'text-gray-400 bg-gray-500/20'
    }
  }

  const userStats = {
    total: users.length,
    active: users.filter(u => u.status === 'active').length,
    pending: users.filter(u => u.status === 'pending').length,
    suspended: users.filter(u => u.status === 'suspended').length,
    admins: users.filter(u => u.role === 'admin').length,
    editors: users.filter(u => u.role === 'editor').length,
    totalInvestments: users.reduce((sum, u) => sum + u.investmentTotal, 0)
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
              <Users className="h-10 w-10 text-[#00BFFF]" />
              <div>
                <h1 className="text-4xl font-bold text-white">
                  User <span className="gradient-text">Management</span>
                </h1>
                <p className="text-gray-400">Manage user accounts, roles, and permissions</p>
              </div>
            </div>
            
            <Link
              to="/admin/users/new"
              className="px-6 py-3 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic flex items-center space-x-2"
            >
              <Plus className="h-5 w-5" />
              <span>Add User</span>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
            <div className="glass-effect rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-[#FFD700] mb-1">{userStats.total}</div>
              <div className="text-gray-400 text-sm">Total Users</div>
            </div>
            <div className="glass-effect rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">{userStats.active}</div>
              <div className="text-gray-400 text-sm">Active</div>
            </div>
            <div className="glass-effect rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-1">{userStats.pending}</div>
              <div className="text-gray-400 text-sm">Pending</div>
            </div>
            <div className="glass-effect rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-red-400 mb-1">{userStats.suspended}</div>
              <div className="text-gray-400 text-sm">Suspended</div>
            </div>
            <div className="glass-effect rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-red-400 mb-1">{userStats.admins}</div>
              <div className="text-gray-400 text-sm">Admins</div>
            </div>
            <div className="glass-effect rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-1">{userStats.editors}</div>
              <div className="text-gray-400 text-sm">Editors</div>
            </div>
            <div className="glass-effect rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-[#00BFFF] mb-1">${(userStats.totalInvestments / 1000).toFixed(0)}K</div>
              <div className="text-gray-400 text-sm">Total AUM</div>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="glass-effect rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                />
              </div>
              
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
              >
                <option value="All">All Roles</option>
                <option value="admin">Admin</option>
                <option value="editor">Editor</option>
                <option value="user">User</option>
              </select>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
              >
                <option value="All">All Status</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="suspended">Suspended</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
              >
                <option value="joinDate">Sort by Join Date</option>
                <option value="name">Sort by Name</option>
                <option value="email">Sort by Email</option>
                <option value="role">Sort by Role</option>
                <option value="status">Sort by Status</option>
                <option value="lastLogin">Sort by Last Login</option>
                <option value="investmentTotal">Sort by Investment</option>
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

          {/* Users Table */}
          <div className="glass-effect rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#1E1E1E]">
                  <tr>
                    <th 
                      className="px-6 py-4 text-left text-white font-semibold cursor-pointer hover:text-[#00BFFF] transition-colors duration-300"
                      onClick={() => toggleSort('name')}
                    >
                      <div className="flex items-center space-x-2">
                        <span>User</span>
                        {sortBy === 'name' && <span>{sortOrder === 'asc' ? '↑' : '↓'}</span>}
                      </div>
                    </th>
                    <th 
                      className="px-6 py-4 text-left text-white font-semibold cursor-pointer hover:text-[#00BFFF] transition-colors duration-300"
                      onClick={() => toggleSort('role')}
                    >
                      <div className="flex items-center space-x-2">
                        <span>Role</span>
                        {sortBy === 'role' && <span>{sortOrder === 'asc' ? '↑' : '↓'}</span>}
                      </div>
                    </th>
                    <th 
                      className="px-6 py-4 text-left text-white font-semibold cursor-pointer hover:text-[#00BFFF] transition-colors duration-300"
                      onClick={() => toggleSort('status')}
                    >
                      <div className="flex items-center space-x-2">
                        <span>Status</span>
                        {sortBy === 'status' && <span>{sortOrder === 'asc' ? '↑' : '↓'}</span>}
                      </div>
                    </th>
                    <th 
                      className="px-6 py-4 text-left text-white font-semibold cursor-pointer hover:text-[#00BFFF] transition-colors duration-300"
                      onClick={() => toggleSort('investmentTotal')}
                    >
                      <div className="flex items-center space-x-2">
                        <span>Investment</span>
                        {sortBy === 'investmentTotal' && <span>{sortOrder === 'asc' ? '↑' : '↓'}</span>}
                      </div>
                    </th>
                    <th 
                      className="px-6 py-4 text-left text-white font-semibold cursor-pointer hover:text-[#00BFFF] transition-colors duration-300"
                      onClick={() => toggleSort('lastLogin')}
                    >
                      <div className="flex items-center space-x-2">
                        <span>Last Login</span>
                        {sortBy === 'lastLogin' && <span>{sortOrder === 'asc' ? '↑' : '↓'}</span>}
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Platforms</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user, index) => {
                    const RoleIcon = getRoleIcon(user.role)
                    return (
                      <tr key={user.id} className={`border-t border-[#333] hover:bg-[#1E1E1E]/50 transition-colors duration-300 ${index % 2 === 0 ? 'bg-[#121212]' : 'bg-[#1A1A1A]'}`}>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#00BFFF] to-[#0099CC] rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-sm">
                                {user.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="text-white font-medium">{user.name}</span>
                                {user.verified && <CheckCircle className="h-4 w-4 text-green-400" />}
                                {!user.verified && <AlertCircle className="h-4 w-4 text-yellow-400" />}
                              </div>
                              <div className="flex items-center space-x-2">
                                <Mail className="h-3 w-3 text-gray-400" />
                                <span className="text-gray-400 text-sm">{user.email}</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getRoleColor(user.role)}`}>
                            <RoleIcon className="h-4 w-4" />
                            <span className="capitalize">{user.role}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(user.status)}`}>
                            {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-[#FFD700] font-bold">
                            ${user.investmentTotal.toLocaleString()}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-300 text-sm">
                              {user.lastLogin === 'Never' ? 'Never' : new Date(user.lastLogin).toLocaleDateString()}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-wrap gap-1">
                            {user.platformsUsed.slice(0, 2).map((platform, platformIndex) => (
                              <span key={platformIndex} className="bg-[#00BFFF]/20 text-[#00BFFF] px-2 py-1 rounded text-xs">
                                {platform}
                              </span>
                            ))}
                            {user.platformsUsed.length > 2 && (
                              <span className="text-gray-400 text-xs">+{user.platformsUsed.length - 2}</span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center space-x-2">
                            <Link
                              to={`/admin/users/${user.id}`}
                              className="p-2 text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300 hover:bg-[#00BFFF]/10 rounded"
                              title="View User"
                            >
                              <Eye className="h-4 w-4" />
                            </Link>
                            <Link
                              to={`/admin/users/${user.id}/edit`}
                              className="p-2 text-[#FFD700] hover:text-[#FFA500] transition-colors duration-300 hover:bg-[#FFD700]/10 rounded"
                              title="Edit User"
                            >
                              <Edit className="h-4 w-4" />
                            </Link>
                            <button
                              onClick={() => openDeleteModal(user.id, user.name)}
                              className="p-2 text-red-400 hover:text-red-300 transition-colors duration-300 hover:bg-red-500/10 rounded"
                              title="Delete User"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            {filteredUsers.length === 0 && (
              <div className="text-center py-12">
                <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-xl text-gray-400 mb-4">No users found</p>
                <p className="text-gray-500 mb-6">Try adjusting your search terms or filters</p>
                <Link
                  to="/admin/users/new"
                  className="inline-flex items-center px-6 py-3 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 space-x-2"
                >
                  <Plus className="h-5 w-5" />
                  <span>Add First User</span>
                </Link>
              </div>
            )}
          </div>

          {/* Results Summary */}
          {filteredUsers.length > 0 && (
            <div className="mt-6 text-center text-gray-400">
              Showing {filteredUsers.length} of {users.length} users
              {searchTerm && ` matching "${searchTerm}"`}
              {selectedRole !== 'All' && ` with ${selectedRole} role`}
              {selectedStatus !== 'All' && ` with ${selectedStatus} status`}
            </div>
          )}
        </div>
      </section>

      {/* Delete Modal */}
      <DeleteModal
        isOpen={deleteModal.isOpen}
        onClose={closeDeleteModal}
        onConfirm={handleDelete}
        title="Delete User"
        message="Are you sure you want to delete this user? This action cannot be undone and will remove all their data."
        itemName={deleteModal.userName}
        loading={deleting}
      />
    </div>
  )
}