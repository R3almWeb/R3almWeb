import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { 
  FileText, 
  HelpCircle, 
  Users, 
  BarChart3, 
  Settings,
  Plus,
  Edit,
  Eye,
  Package,
  Rocket,
  Trash2,
  Mail
} from 'lucide-react'
import { articles } from '../../data/articles'
import { faqData } from '../../data/faq'
import { divisionsData, productsData } from '../../data/content'
import { waitlistDivisions } from '../../data/waitlist'

export function AdminDashboard() {
  const { user } = useAuth()

  const adminActions = [
    {
      title: 'Manage Articles',
      description: 'Create, edit, and manage blog articles',
      icon: FileText,
      actions: [
        { label: 'View All Articles', path: '/blog', icon: Eye, external: false },
        { label: 'Manage Articles', path: '/admin/blog', icon: Edit, external: false },
        { label: 'Create New Article', path: '/admin/articles/new', icon: Plus, external: false },
      ]
    },
    {
      title: 'Manage FAQs',
      description: 'Add and update frequently asked questions',
      icon: HelpCircle,
      actions: [
        { label: 'View All FAQs', path: '/faq', icon: Eye, external: false },
        { label: 'Manage FAQs', path: '/admin/faq-manager', icon: Edit, external: false },
        { label: 'Create New FAQ', path: '/admin/faqs/new', icon: Plus, external: false },
      ]
    },
    {
      title: 'User Management',
      description: 'Manage user accounts and permissions',
      icon: Users,
      actions: [
        { label: 'View Users', path: '/admin/users', icon: Eye, external: false },
        { label: 'User Analytics', path: '/admin/analytics', icon: BarChart3, external: false },
      ]
    },
    {
      title: 'System Settings',
      description: 'Configure platform settings and preferences',
      icon: Settings,
      actions: [
        { label: 'General Settings', path: '/admin/settings', icon: Settings, external: false },
        { label: 'Content Settings', path: '/admin/content', icon: Edit, external: false },
        { label: 'Email Settings', path: '/admin/email-settings', icon: Mail, external: false },
      ]
    },
    {
      title: 'Manage Products',
      description: 'Edit live products and divisions information',
      icon: Package,
      actions: [
        { label: 'View All Products', path: '/products', icon: Eye, external: false },
        { label: 'Edit Product Info', path: '/admin/products', icon: Edit, external: false },
      ]
    },
    {
      title: 'Manage Pipeline',
      description: 'Edit coming soon products and waitlist items',
      icon: Rocket,
      actions: [
        { label: 'View Pipeline', path: '/waitlist', icon: Eye, external: false },
        { label: 'Edit Pipeline Items', path: '/admin/pipeline', icon: Edit, external: false },
        { label: 'Manage Waitlists', path: '/admin/waitlist', icon: Edit, external: false },
        { label: 'Waitlist Analytics', path: '/admin/waitlist-analytics', icon: BarChart3, external: false },
      ]
    }
  ]

  const stats = [
    { label: 'Total Articles', value: articles.length.toString(), change: '+3 this week' },
    { label: 'Total FAQs', value: faqData.length.toString(), change: '+2 this week' },
    { label: 'Live Products', value: Object.keys(divisionsData).length.toString(), change: 'All operational' },
    { label: 'Pipeline Items', value: (Object.keys(productsData).length + waitlistDivisions.length).toString(), change: '+2 this quarter' }
  ]

  return (
    <div className="fade-in">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-[#121212] to-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Admin <span className="gradient-text">Dashboard</span>
            </h1>
            <p className="text-xl text-gray-300">
              Welcome back, {user?.name || user?.email}
            </p>
            <div className="inline-block bg-[#00BFFF]/20 text-[#00BFFF] px-4 py-2 rounded-full text-sm font-medium mt-2">
              {user?.role?.toUpperCase()} ACCESS
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="glass-effect rounded-xl p-6 text-center scale-on-hover">
                <div className="text-2xl font-bold text-[#FFD700] mb-2">{stat.value}</div>
                <div className="text-white font-medium mb-1">{stat.label}</div>
                <div className="text-green-400 text-sm">{stat.change}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Actions */}
      <section className="py-12 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {adminActions.map((section, index) => (
              <div key={index} className="glass-effect rounded-2xl p-8 scale-on-hover">
                <div className="flex items-center mb-6">
                  <section.icon className="h-10 w-10 text-[#00BFFF] mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                    <p className="text-gray-400">{section.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {section.actions.map((action, actionIndex) => (
                    <Link
                      key={actionIndex}
                      to={action.path}
                      className="flex items-center justify-between p-4 bg-[#1E1E1E] rounded-lg hover:bg-[#333] transition-all duration-300 group"
                    >
                      <div className="flex items-center space-x-3">
                        <action.icon className="h-5 w-5 text-[#00BFFF] group-hover:text-[#FFD700] transition-colors duration-300" />
                        <span className="text-white group-hover:text-[#00BFFF] transition-colors duration-300">
                          {action.label}
                        </span>
                      </div>
                      <div className="w-2 h-2 bg-[#FFD700] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-12 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Articles Management */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Recent <span className="text-[#00BFFF]">Articles</span></h2>
                <Link
                  to="/admin/articles/new"
                  className="px-4 py-2 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 flex items-center space-x-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>New Article</span>
                </Link>
              </div>
              
              <div className="space-y-4">
                {articles.slice(0, 5).map((article) => (
                  <div key={article.id} className="glass-effect rounded-lg p-4 hover:bg-[#1E1E1E]/80 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1">{article.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>{article.category}</span>
                          <span>{article.date}</span>
                          <span>{article.author}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Link
                          to={`/blog/${article.id}`}
                          className="p-2 text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300"
                          title="View Article"
                        >
                          <Eye className="h-4 w-4" />
                        </Link>
                        <Link
                          to={`/admin/articles/${article.id}`}
                          className="p-2 text-[#FFD700] hover:text-[#FFA500] transition-colors duration-300"
                          title="Edit Article"
                        >
                          <Edit className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                
                <Link
                  to="/blog"
                  className="block text-center py-3 text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300"
                >
                  View All Articles →
                </Link>
              </div>
            </div>

            {/* FAQs Management */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Recent <span className="text-[#FFD700]">FAQs</span></h2>
                <Link
                  to="/admin/faqs/new"
                  className="px-4 py-2 bg-[#FFD700] text-[#121212] rounded-lg hover:bg-[#FFA500] transition-all duration-300 flex items-center space-x-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>New FAQ</span>
                </Link>
              </div>
              
              <div className="space-y-4">
                {faqData.slice(0, 5).map((faq) => (
                  <div key={faq.id} className="glass-effect rounded-lg p-4 hover:bg-[#1E1E1E]/80 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1">{faq.question}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>{faq.category}</span>
                          {faq.featured && <span className="text-[#FFD700]">Featured</span>}
                        </div>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Link
                          to="/faq"
                          className="p-2 text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300"
                          title="View FAQ"
                        >
                          <Eye className="h-4 w-4" />
                        </Link>
                        <Link
                          to={`/admin/faqs/${faq.id}`}
                          className="p-2 text-[#FFD700] hover:text-[#FFA500] transition-colors duration-300"
                          title="Edit FAQ"
                        >
                          <Edit className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                
                <Link
                  to="/faq"
                  className="block text-center py-3 text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300"
                >
                  View All FAQs →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-[#121212]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Quick <span className="gradient-text">Actions</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admin/articles/new"
              className="px-8 py-4 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic flex items-center justify-center space-x-2"
            >
              <Plus className="h-5 w-5" />
              <span>New Article</span>
            </Link>
            
            <Link
              to="/admin/faqs/new"
              className="px-8 py-4 border border-[#FFD700] text-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-[#121212] transition-all duration-300 button-magnetic flex items-center justify-center space-x-2"
            >
              <Plus className="h-5 w-5" />
              <span>New FAQ</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}