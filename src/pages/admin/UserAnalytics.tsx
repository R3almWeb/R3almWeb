import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, BarChart3, Users, TrendingUp, DollarSign, Calendar, Activity, Eye, Download, Filter } from 'lucide-react'

export function UserAnalytics() {
  const [timeRange, setTimeRange] = useState('30d')
  const [selectedMetric, setSelectedMetric] = useState('registrations')

  // Mock analytics data
  const analyticsData = {
    overview: {
      totalUsers: 50234,
      activeUsers: 42156,
      newUsers: 1234,
      retentionRate: 84.2,
      avgInvestment: 12500,
      totalInvestments: 2500000000
    },
    registrations: {
      thisMonth: 1234,
      lastMonth: 1156,
      growth: 6.7,
      bySource: [
        { source: 'Organic', count: 567, percentage: 46 },
        { source: 'Referral', count: 345, percentage: 28 },
        { source: 'Social Media', count: 234, percentage: 19 },
        { source: 'Paid Ads', count: 88, percentage: 7 }
      ]
    },
    engagement: {
      dailyActive: 8456,
      weeklyActive: 23567,
      monthlyActive: 42156,
      avgSessionTime: '12m 34s',
      platformUsage: [
        { platform: 'R3alm Assets', users: 15234, percentage: 36 },
        { platform: 'R3alm Trade', users: 12456, percentage: 30 },
        { platform: 'R3alm Crowdfund', users: 8967, percentage: 21 },
        { platform: 'R3alm Governance', users: 3456, percentage: 8 },
        { platform: 'R3alm Connect', users: 2123, percentage: 5 }
      ]
    },
    demographics: {
      ageGroups: [
        { range: '18-25', count: 5023, percentage: 12 },
        { range: '26-35', count: 15070, percentage: 36 },
        { range: '36-45', count: 12547, percentage: 30 },
        { range: '46-55', count: 7533, percentage: 18 },
        { range: '55+', count: 2061, percentage: 4 }
      ],
      locations: [
        { country: 'United States', count: 25117, percentage: 60 },
        { country: 'Canada', count: 5023, percentage: 12 },
        { country: 'United Kingdom', count: 3518, percentage: 8 },
        { country: 'Germany', count: 2511, percentage: 6 },
        { country: 'Australia', count: 2009, percentage: 5 },
        { country: 'Others', count: 4056, percentage: 9 }
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
    { value: 'registrations', label: 'User Registrations', icon: Users },
    { value: 'engagement', label: 'User Engagement', icon: Activity },
    { value: 'investments', label: 'Investment Activity', icon: DollarSign },
    { value: 'demographics', label: 'User Demographics', icon: BarChart3 }
  ]

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
                  User <span className="gradient-text">Analytics</span>
                </h1>
                <p className="text-gray-400">Comprehensive user insights and metrics</p>
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
              <div className="text-2xl font-bold text-white mb-1">{analyticsData.overview.totalUsers.toLocaleString()}</div>
              <div className="text-gray-400 text-sm">Total Users</div>
            </div>
            
            <div className="glass-effect rounded-xl p-6 text-center scale-on-hover">
              <Activity className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-green-400 mb-1">{analyticsData.overview.activeUsers.toLocaleString()}</div>
              <div className="text-gray-400 text-sm">Active Users</div>
            </div>
            
            <div className="glass-effect rounded-xl p-6 text-center scale-on-hover">
              <TrendingUp className="h-8 w-8 text-[#FFD700] mx-auto mb-3" />
              <div className="text-2xl font-bold text-[#FFD700] mb-1">+{analyticsData.overview.newUsers.toLocaleString()}</div>
              <div className="text-gray-400 text-sm">New This Month</div>
            </div>
            
            <div className="glass-effect rounded-xl p-6 text-center scale-on-hover">
              <Calendar className="h-8 w-8 text-[#00BFFF] mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{analyticsData.overview.retentionRate}%</div>
              <div className="text-gray-400 text-sm">Retention Rate</div>
            </div>
            
            <div className="glass-effect rounded-xl p-6 text-center scale-on-hover">
              <DollarSign className="h-8 w-8 text-[#FFD700] mx-auto mb-3" />
              <div className="text-2xl font-bold text-[#FFD700] mb-1">${analyticsData.overview.avgInvestment.toLocaleString()}</div>
              <div className="text-gray-400 text-sm">Avg Investment</div>
            </div>
            
            <div className="glass-effect rounded-xl p-6 text-center scale-on-hover">
              <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-green-400 mb-1">${(analyticsData.overview.totalInvestments / 1000000000).toFixed(1)}B</div>
              <div className="text-gray-400 text-sm">Total AUM</div>
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
            {/* User Registrations */}
            {selectedMetric === 'registrations' && (
              <>
                <div className="glass-effect rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Registration Trends</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">This Month</span>
                      <span className="text-[#00BFFF] font-bold text-xl">{analyticsData.registrations.thisMonth.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Last Month</span>
                      <span className="text-gray-400">{analyticsData.registrations.lastMonth.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Growth Rate</span>
                      <span className="text-green-400 font-bold">+{analyticsData.registrations.growth}%</span>
                    </div>
                  </div>
                </div>

                <div className="glass-effect rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Registration Sources</h3>
                  <div className="space-y-4">
                    {analyticsData.registrations.bySource.map((source, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">{source.source}</span>
                          <span className="text-white font-bold">{source.count}</span>
                        </div>
                        <div className="w-full bg-[#1E1E1E] rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-[#00BFFF] to-[#0099CC] h-2 rounded-full transition-all duration-500"
                            style={{ width: `${source.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* User Engagement */}
            {selectedMetric === 'engagement' && (
              <>
                <div className="glass-effect rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">User Activity</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Daily Active Users</span>
                      <span className="text-[#00BFFF] font-bold text-xl">{analyticsData.engagement.dailyActive.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Weekly Active Users</span>
                      <span className="text-[#FFD700] font-bold text-xl">{analyticsData.engagement.weeklyActive.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Monthly Active Users</span>
                      <span className="text-white font-bold text-xl">{analyticsData.engagement.monthlyActive.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Avg Session Time</span>
                      <span className="text-green-400 font-bold">{analyticsData.engagement.avgSessionTime}</span>
                    </div>
                  </div>
                </div>

                <div className="glass-effect rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Platform Usage</h3>
                  <div className="space-y-4">
                    {analyticsData.engagement.platformUsage.map((platform, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">{platform.platform}</span>
                          <span className="text-white font-bold">{platform.users.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-[#1E1E1E] rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] h-2 rounded-full transition-all duration-500"
                            style={{ width: `${platform.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Demographics */}
            {selectedMetric === 'demographics' && (
              <>
                <div className="glass-effect rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Age Distribution</h3>
                  <div className="space-y-4">
                    {analyticsData.demographics.ageGroups.map((group, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">{group.range} years</span>
                          <span className="text-white font-bold">{group.count.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-[#1E1E1E] rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-[#9333EA] to-[#7C3AED] h-2 rounded-full transition-all duration-500"
                            style={{ width: `${group.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-effect rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Geographic Distribution</h3>
                  <div className="space-y-4">
                    {analyticsData.demographics.locations.map((location, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">{location.country}</span>
                          <span className="text-white font-bold">{location.count.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-[#1E1E1E] rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-[#00BFFF] to-[#0099CC] h-2 rounded-full transition-all duration-500"
                            style={{ width: `${location.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Investment Analytics */}
            {selectedMetric === 'investments' && (
              <>
                <div className="glass-effect rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Investment Metrics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Total AUM</span>
                      <span className="text-[#FFD700] font-bold text-xl">${(analyticsData.overview.totalInvestments / 1000000000).toFixed(1)}B</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Average Investment</span>
                      <span className="text-[#00BFFF] font-bold text-xl">${analyticsData.overview.avgInvestment.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Active Investors</span>
                      <span className="text-white font-bold text-xl">32,456</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Investment Growth</span>
                      <span className="text-green-400 font-bold">+23.4%</span>
                    </div>
                  </div>
                </div>

                <div className="glass-effect rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Investment by Platform</h3>
                  <div className="space-y-4">
                    {[
                      { platform: 'R3alm Assets', amount: 1200000000, percentage: 48 },
                      { platform: 'R3alm Trade', amount: 800000000, percentage: 32 },
                      { platform: 'R3alm Crowdfund', amount: 400000000, percentage: 16 },
                      { platform: 'Others', amount: 100000000, percentage: 4 }
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">{item.platform}</span>
                          <span className="text-white font-bold">${(item.amount / 1000000000).toFixed(1)}B</span>
                        </div>
                        <div className="w-full bg-[#1E1E1E] rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] h-2 rounded-full transition-all duration-500"
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Recent Activity */}
          <div className="glass-effect rounded-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Recent User Activity</h3>
              <Link
                to="/admin/users"
                className="text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300 flex items-center space-x-2"
              >
                <span>View All Users</span>
                <Eye className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {[
                { user: 'Sarah Johnson', action: 'Invested $5,000 in R3alm Assets', time: '2 hours ago', type: 'investment' },
                { user: 'Michael Chen', action: 'Updated profile information', time: '4 hours ago', type: 'profile' },
                { user: 'Emily Davis', action: 'Completed KYC verification', time: '6 hours ago', type: 'verification' },
                { user: 'Robert Wilson', action: 'Executed trade on R3alm Trade', time: '8 hours ago', type: 'trading' },
                { user: 'John Smith', action: 'Joined R3alm Crowdfund campaign', time: '12 hours ago', type: 'crowdfund' }
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg hover:bg-[#1E1E1E]/80 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#00BFFF] to-[#0099CC] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {activity.user.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-medium">{activity.user}</div>
                      <div className="text-gray-400 text-sm">{activity.action}</div>
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