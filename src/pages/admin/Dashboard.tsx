// src/pages/admin/Dashboard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, FileText, HelpCircle, Calendar, Package, BarChart3, Activity, Clock } from 'lucide-react';
import { articles } from '../../data/articles';
import { faqData } from '../../data/faq';
// Placeholder data - replace with Supabase queries in production
const usersData = [
  { id: 1, email: 'admin@r3alm.com', role: 'ADMIN' },
  { id: 2, email: 'editor@r3alm.com', role: 'EDITOR' },
  { id: 3, email: 'user@r3alm.com', role: 'USER' }
];
const recentActivity = [
  { id: 1, action: 'New article published', user: 'Editor', time: '2 hours ago' },
  { id: 2, action: 'FAQ updated', user: 'Admin', time: '1 day ago' },
  { id: 3, action: 'User registered', user: 'System', time: '3 days ago' }
];

export function AdminDashboard() {
  const totalUsers = usersData.length;
  const totalArticles = articles.length;
  const totalFAQs = faqData.length;
  const waitlistCount = 150; // Placeholder
  const productCount = 6; // From productsData

  const stats = [
    { label: 'Total Users', value: totalUsers, icon: Users, color: 'text-blue-400', link: '/admin/users' },
    { label: 'Articles', value: totalArticles, icon: FileText, color: 'text-green-400', link: '/admin/blog' },
    { label: 'FAQs', value: totalFAQs, icon: HelpCircle, color: 'text-purple-400', link: '/admin/faq-manager' },
    { label: 'Waitlist', value: waitlistCount, icon: Calendar, color: 'text-orange-400', link: '/admin/waitlist' },
    { label: 'Products', value: productCount, icon: Package, color: 'text-indigo-400', link: '/admin/products' },
    { label: 'Analytics', value: 'View', icon: BarChart3, color: 'text-pink-400', link: '/admin/analytics' }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          <p className="text-gray-400">Welcome back! Here's what's happening with your platform.</p>
        </div>
        <Link
          to="/admin/settings"
          className="flex items-center space-x-2 bg-[#00BFFF] text-white px-4 py-2 rounded-lg hover:bg-[#0099CC] transition-colors"
        >
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </Link>
      </div>

      {/* Stats Cards - Clickable */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Link
            key={index}
            to={stat.link}
            className="group block p-6 bg-[#1E1E1E] rounded-xl border border-[#333] hover:border-[#00BFFF] transition-all duration-300 hover:bg-[#2A2A2A] hover:shadow-lg hover:shadow-[#00BFFF]/20"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg bg-white/10 group-hover:bg-[#00BFFF]/20 transition-colors`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{stat.label}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                </div>
              </div>
              <Activity className="h-5 w-5 text-gray-500 group-hover:text-[#00BFFF] transition-colors" />
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
            <Clock className="h-5 w-5" />
            <span>Recent Activity</span>
          </h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-4 p-4 bg-[#1E1E1E] rounded-lg">
                <div className="w-2 h-2 bg-[#00BFFF] rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-white font-medium">{activity.action}</p>
                  <p className="text-sm text-gray-400">By {activity.user}</p>
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link to="/admin/articles/new" className="block p-4 bg-[#1E1E1E] rounded-lg hover:bg-[#2A2A2A] transition-colors">
              <span className="text-white">New Article</span>
            </Link>
            <Link to="/admin/faqs/new" className="block p-4 bg-[#1E1E1E] rounded-lg hover:bg-[#2A2A2A] transition-colors">
              <span className="text-white">New FAQ</span>
            </Link>
            <Link to="/admin/users/new" className="block p-4 bg-[#1E1E1E] rounded-lg hover:bg-[#2A2A2A] transition-colors">
              <span className="text-white">New User</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Performance Chart Placeholder */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-[#1E1E1E] rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">User Growth</h2>
          <div className="h-64 bg-black/20 rounded-lg flex items-center justify-center text-gray-500">
            {/* Chart placeholder - integrate Chart.js or Recharts later */}
            Chart coming soon...
          </div>
        </div>
        <div className="bg-[#1E1E1E] rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Platform Metrics</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Uptime</span>
              <span className="text-green-400 font-semibold">99.9%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Active Sessions</span>
              <span className="text-blue-400 font-semibold">247</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">API Calls (24h)</span>
              <span className="text-purple-400 font-semibold">1.2K</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}