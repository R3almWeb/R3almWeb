import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, BarChart3, Clock, Users, TrendingUp, Mail, Calendar, Activity, Eye, Download, Filter, Star, Shield, DollarSign, GraduationCap } from 'lucide-react'
import { waitlistDivisions } from '../../data/waitlist'

export function WaitlistAnalytics() {
  const [timeRange, setTimeRange] = useState('30d')
  const [selectedMetric, setSelectedMetric] = useState('signups')

  // Mock analytics data for waitlist
  const analyticsData = {
    overview: {
      totalSignups: 12456,
      activeWaitlists: waitlistDivisions.length,
      avgSignupsPerDay: 45,
      conversionRate: 23.4,
      totalEmailsSent: 45678,
      openRate: 68.2
    },
    signups: {
      thisMonth: 1345,
      lastMonth: 1156,
      growth: 16.3,
      byPriority: [
        { priority: 'High', count: 567, percentage: 42 },
        { priority: 'Medium', count: 445, percentage: 33 },
        { priority: 'Low', count: 333, percentage: 25 }
      ]
    },
    engagement: {
      emailOpens: 68.2,
      clickThrough: 12.4,
      unsubscribeRate: 2.1,
      forwardRate: 8.7,
      byCategory: [
        { category: 'Investment', signups: 4234, percentage: 34 },
        { category: 'Protection', signups: 3456, percentage: 28 },
        { category: 'Lending', signups: 2345, percentage: 19 },
        { category: 'Analytics', signups: 1456, percentage: 12 },
        { category: 'Education', signups: 965, percentage: 7 }
      ]
    },
    conversion: {
      waitlistToUser: 23.4,
      emailToSignup: 8.9,
      visitToSignup: 4.2,
      referralRate: 15.6,
      topSources: [
        { source: 'Direct', conversions: 2345, rate: 28.1 },
        { source: 'Social Media', conversions: 1876, rate: 22.5 },
        { source: 'Referrals', conversions: 1543, rate: 18.5 },
        { source: 'Blog Articles', conversions: 1234, rate: 14.8 },
        { source: 'Email Campaign', conversions: 1002, rate: 12.0 }
      ]
    }
  }

  const timeRanges = [
    { value: '7d', label: 'Last 7 days' },
    { value: '30d', label: 'Last 30 days' },
    { value: '90d', label: 'Last 3 months' },
    { value: '1y', label: 'Last year' }
  ]

  const metrics = [
    { value: 'signups', label: 'Waitlist Signups', icon: Users },
    { value: 'engagement', label: 'Email Engagement', icon: Mail },
    { value: 'conversion', label: 'Conversion Rates', icon: TrendingUp },
    { value: 'performance', label: 'Product Performance', icon: BarChart3 }
  ]

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
              <BarChart3 className="h-10 w-10 text-[#00BFFF]" />
              <div>
                <h1 className="text-4xl font-bold text-white">
                  Waitlist <span className="gradient-text">Analytics</span>
                </h1>
                <p className="text-gray-400">Comprehensive waitlist performance insights</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
              >
                {timeRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
              
              <button className="px-6 py-3 bg-[#FFD700] text-[#121212] rounded-lg hover:bg-[#FFA500] transition-all duration-300 hover-glow button-magnetic flex items-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Export</span>
              </button>
            </div>
          </div>

          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
            <div className="glass-effect rounded-xl p-6 text-center scale-on-hover">
              <Users className="h-8 w-8 text-[#00BFFF] mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{analyticsData.overview.totalSignups.toLocaleString()}</div>
              <div className="text-gray-400 text-sm">Total Signups</div>
            </div>
            
            <div className="glass-effect rounded-xl p-6 text-center scale-on-hover">
              <Clock className="h-8 w-8 text-[#FFD700] mx-auto mb-3" />
              <div className="text-2xl font-bold text-[#FFD700] mb-1">{analyticsData.overview.activeWaitlists}</div>
              <div className="text-gray-400 text-sm">Active Waitlists</div>
            </div>
            
            <div className="glass-effect rounded-xl p-6 text-center scale-on-hover">
              <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-green-400 mb-1">+{analyticsData.overview.avgSignupsPerDay}</div>
              <div className="text-gray-400 text-sm">Daily Signups</div>
            </div>
            
            <div className="glass-effect rounded-xl p-6 text-center scale-on-hover">
              <Activity className="h-8 w-8 text-[#00BFFF] mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{analyticsData.overview.conversionRate}%</div>
              <div className="text-gray-400 text-sm">Conversion Rate</div>
            </div>
            
            <div className="glass-effect rounded-xl p-6 text-center scale-on-hover">
              <Mail className="h-8 w-8 text-[#FFD700] mx-auto mb-3" />
              <div className="text-2xl font-bold text-[#FFD700] mb-1">{analyticsData.overview.totalEmailsSent.toLocaleString()}</div>
              <div className="text-gray-400 text-sm">Emails Sent</div>
            </div>
            
            <div className="glass-effect rounded-xl p-6 text-center scale-on-hover">
              <Eye className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-green-400 mb-1">{analyticsData.overview.openRate}%</div>
              <div className="text-gray-400 text-sm">Open Rate</div>
            </div>
          </div>

          {/* Metric Selection */}
          <div className="glass-effect rounded-xl p-6 mb-8">
            <div className="flex flex-wrap gap-4">
              {metrics.map(metric => (
                <button
                  key={metric.value}
                  onClick={() => setSelectedMetric(metric.value)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedMetric === metric.value
                      ? 'bg-[#00BFFF] text-white'
                      : 'bg-[#1E1E1E] text-gray-300 hover:bg-[#333] hover:text-white'
                  }`}
                >
                  <metric.icon className="h-4 w-4" />
                  <span>{metric.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Analytics Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Waitlist Signups */}
            {selectedMetric === 'signups' && (
              <>
                <div className="glass-effect rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Signup Trends</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">This Month</span>
                      <span className="text-[#00BFFF] font-bold text-xl">{analyticsData.signups.thisMonth.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Last Month</span>
                      <span className="text-gray-400">{analyticsData.signups.lastMonth.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Growth Rate</span>
                      <span className="text-green-400 font-bold">+{analyticsData.signups.growth}%</span>
                    </div>
                  </div>
                </div>

                <div className="glass-effect rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Signups by Priority</h3>
                  <div className="space-y-4">
                    {analyticsData.signups.byPriority.map((priority, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">{priority.priority} Priority</span>
                          <span className="text-white font-bold">{priority.count}</span>
                        </div>
                        <div className="w-full bg-[#1E1E1E] rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-500 ${
                              priority.priority === 'High' ? 'bg-gradient-to-r from-red-500 to-red-600' :
                              priority.priority === 'Medium' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                              'bg-gradient-to-r from-green-500 to-green-600'
                            }`}
                            style={{ width: `${priority.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Email Engagement */}
            {selectedMetric === 'engagement' && (
              <>
                <div className="glass-effect rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Email Performance</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Open Rate</span>
                      <span className="text-[#00BFFF] font-bold text-xl">{analyticsData.engagement.emailOpens}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Click-Through Rate</span>
                      <span className="text-[#FFD700] font-bold text-xl">{analyticsData.engagement.clickThrough}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Unsubscribe Rate</span>
                      <span className="text-red-400 font-bold">{analyticsData.engagement.unsubscribeRate}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Forward Rate</span>
                      <span className="text-green-400 font-bold">{analyticsData.engagement.forwardRate}%</span>
                    </div>
                  </div>
                </div>

                <div className="glass-effect rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Signups by Category</h3>
                  <div className="space-y-4">
                    {analyticsData.engagement.byCategory.map((category, index) => {
                      const CategoryIcon = getCategoryIcon(category.category)
                      return (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                              <CategoryIcon className="h-4 w-4 text-[#00BFFF]" />
                              <span className="text-gray-300">{category.category}</span>
                            </div>
                            <span className="text-white font-bold">{category.signups.toLocaleString()}</span>
                          </div>
                          <div className="w-full bg-[#1E1E1E] rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-[#00BFFF] to-[#0099CC] h-2 rounded-full transition-all duration-500"
                              style={{ width: `${category.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </>
            )}

            {/* Conversion Analytics */}
            {selectedMetric === 'conversion' && (
              <>
                <div className="glass-effect rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Conversion Metrics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Waitlist to User</span>
                      <span className="text-[#00BFFF] font-bold text-xl">{analyticsData.conversion.waitlistToUser}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Email to Signup</span>
                      <span className="text-[#FFD700] font-bold text-xl">{analyticsData.conversion.emailToSignup}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Visit to Signup</span>
                      <span className="text-white font-bold text-xl">{analyticsData.conversion.visitToSignup}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Referral Rate</span>
                      <span className="text-green-400 font-bold">{analyticsData.conversion.referralRate}%</span>
                    </div>
                  </div>
                </div>

                <div className="glass-effect rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Top Conversion Sources</h3>
                  <div className="space-y-4">
                    {analyticsData.conversion.topSources.map((source, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">{source.source}</span>
                          <div className="text-right">
                            <div className="text-white font-bold">{source.conversions.toLocaleString()}</div>
                            <div className="text-[#FFD700] text-sm">{source.rate}%</div>
                          </div>
                        </div>
                        <div className="w-full bg-[#1E1E1E] rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] h-2 rounded-full transition-all duration-500"
                            style={{ width: `${source.rate}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Product Performance */}
            {selectedMetric === 'performance' && (
              <>
                <div className="glass-effect rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Product Interest</h3>
                  <div className="space-y-4">
                    {waitlistDivisions.slice(0, 5).map((item, index) => (
                      <div key={item.id} className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                            item.priority === 'high' ? 'bg-red-500' :
                            item.priority === 'medium' ? 'bg-yellow-500' :
                            'bg-green-500'
                          }`}>
                            {index + 1}
                          </div>
                          <div>
                            <div className="text-white font-medium">{item.name}</div>
                            <div className="text-gray-400 text-sm">{item.category}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-[#FFD700] font-bold">{Math.floor(Math.random() * 2000) + 500}</div>
                          <div className="text-gray-400 text-sm">signups</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-effect rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Launch Timeline</h3>
                  <div className="space-y-4">
                    {waitlistDivisions
                      .sort((a, b) => a.expectedLaunch.localeCompare(b.expectedLaunch))
                      .slice(0, 5)
                      .map((item, index) => (
                        <div key={item.id} className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Clock className="h-5 w-5 text-[#00BFFF]" />
                            <div>
                              <div className="text-white font-medium">{item.name}</div>
                              <div className="text-gray-400 text-sm">{item.subtitle}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-[#FFD700] font-bold">{item.expectedLaunch}</div>
                            <div className={`text-sm ${
                              item.priority === 'high' ? 'text-red-400' :
                              item.priority === 'medium' ? 'text-yellow-400' :
                              'text-green-400'
                            }`}>
                              {item.priority} priority
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Recent Signups */}
          <div className="glass-effect rounded-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Recent Waitlist Activity</h3>
              <Link
                to="/admin/waitlist"
                className="text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300 flex items-center space-x-2"
              >
                <span>Manage Waitlists</span>
                <Eye className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {[
                { user: 'sarah.chen@example.com', product: 'R3alm Ventures', time: '2 hours ago', type: 'signup' },
                { user: 'michael.rodriguez@example.com', product: 'R3alm Insurance', time: '4 hours ago', type: 'signup' },
                { user: 'emma.wilson@example.com', product: 'R3alm Lending', time: '6 hours ago', type: 'signup' },
                { user: 'david.kim@example.com', product: 'R3alm Analytics', time: '8 hours ago', type: 'signup' },
                { user: 'alex.thompson@example.com', product: 'R3alm Education', time: '12 hours ago', type: 'signup' }
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg hover:bg-[#1E1E1E]/80 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#00BFFF] to-[#0099CC] rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">{activity.user}</div>
                      <div className="text-gray-400 text-sm">Joined waitlist for {activity.product}</div>
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm">{activity.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}