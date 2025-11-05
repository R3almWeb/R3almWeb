import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Globe, Save, FileText, Image, Video, Settings, Eye, EyeOff, Upload, Shield } from 'lucide-react'

export function ContentSettings() {
  const [saving, setSaving] = useState(false)
  const [activeTab, setActiveTab] = useState('general')
  
  const [settings, setSettings] = useState({
    // General Content Settings
    articlesPerPage: 12,
    faqsPerPage: 20,
    enableComments: false,
    moderateComments: true,
    enableRatings: false,
    enableSocialSharing: true,
    enablePrintView: true,
    enableBookmarks: true,
    
    // Media Settings
    maxFileSize: 10,
    allowedImageTypes: 'jpg,jpeg,png,gif,webp',
    allowedDocumentTypes: 'pdf,doc,docx,txt',
    allowedVideoTypes: 'mp4,webm,mov',
    enableImageOptimization: true,
    maxImageWidth: 1920,
    maxImageHeight: 1080,
    imageQuality: 85,
    
    // SEO Settings
    enableSEO: true,
    defaultMetaDescription: 'Capital R3alm - Democratizing wealth creation through innovative Web3 finance solutions',
    defaultMetaKeywords: 'web3, finance, blockchain, investment, real estate, trading',
    enableOpenGraph: true,
    enableTwitterCards: true,
    enableStructuredData: true,
    
    // Content Display
    showAuthorBio: true,
    showPublishDate: true,
    showReadTime: true,
    showTags: true,
    showRelatedArticles: true,
    enableTableOfContents: false,
    enableCodeHighlighting: true,
    
    // Archive Settings
    enableArchive: true,
    archiveAfterDays: 365,
    enableDrafts: true,
    autoSaveDrafts: true,
    draftRetentionDays: 30,
    
    // Content Moderation
    enableProfanityFilter: true,
    enableSpamDetection: true,
    requireApproval: false,
    enableContentReporting: true,
    maxContentLength: 50000,
    minContentLength: 100
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setSaving(false)
    // Show success message
  }

  const handleChange = (field: string, value: string | boolean | number) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const tabs = [
    { id: 'general', label: 'General', icon: Settings },
    { id: 'media', label: 'Media', icon: Image },
    { id: 'seo', label: 'SEO', icon: Globe },
    { id: 'display', label: 'Display', icon: Eye },
    { id: 'archive', label: 'Archive', icon: FileText },
    { id: 'moderation', label: 'Moderation', icon: Shield }
  ]

  return (
    <div className="fade-in">
      <section className="py-12 bg-gradient-to-br from-[#121212] to-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-8">
            <Link
              to="/admin/dashboard"
              className="p-2 text-[#00BFFF] hover:text-[#FFD700] transition-colors duration-300"
            >
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <Globe className="h-10 w-10 text-[#00BFFF]" />
            <div>
              <h1 className="text-4xl font-bold text-white">
                Content <span className="gradient-text">Settings</span>
              </h1>
              <p className="text-gray-400">Configure content management and display options</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="glass-effect rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-6">Content Categories</h2>
              <nav className="space-y-2">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-[#00BFFF] text-white'
                        : 'text-gray-300 hover:bg-[#1E1E1E] hover:text-white'
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Settings Content */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass-effect rounded-xl p-8">
                
                {/* General Content Settings */}
                {activeTab === 'general' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white mb-6">General Content Settings</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Articles Per Page
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="50"
                          value={settings.articlesPerPage}
                          onChange={(e) => handleChange('articlesPerPage', parseInt(e.target.value))}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          FAQs Per Page
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="100"
                          value={settings.faqsPerPage}
                          onChange={(e) => handleChange('faqsPerPage', parseInt(e.target.value))}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                        <div>
                          <h3 className="text-white font-medium">Enable Comments</h3>
                          <p className="text-gray-400 text-sm">Allow users to comment on articles</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.enableComments}
                          onChange={(e) => handleChange('enableComments', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                        <div>
                          <h3 className="text-white font-medium">Moderate Comments</h3>
                          <p className="text-gray-400 text-sm">Require approval before comments are published</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.moderateComments}
                          onChange={(e) => handleChange('moderateComments', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                        <div>
                          <h3 className="text-white font-medium">Enable Ratings</h3>
                          <p className="text-gray-400 text-sm">Allow users to rate articles</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.enableRatings}
                          onChange={(e) => handleChange('enableRatings', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                        <div>
                          <h3 className="text-white font-medium">Enable Social Sharing</h3>
                          <p className="text-gray-400 text-sm">Show social media sharing buttons</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.enableSocialSharing}
                          onChange={(e) => handleChange('enableSocialSharing', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Media Settings */}
                {activeTab === 'media' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white mb-6">Media & Upload Settings</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Max File Size (MB)
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="100"
                          value={settings.maxFileSize}
                          onChange={(e) => handleChange('maxFileSize', parseInt(e.target.value))}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Image Quality (%)
                        </label>
                        <input
                          type="number"
                          min="10"
                          max="100"
                          value={settings.imageQuality}
                          onChange={(e) => handleChange('imageQuality', parseInt(e.target.value))}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Max Image Width (px)
                        </label>
                        <input
                          type="number"
                          value={settings.maxImageWidth}
                          onChange={(e) => handleChange('maxImageWidth', parseInt(e.target.value))}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Max Image Height (px)
                        </label>
                        <input
                          type="number"
                          value={settings.maxImageHeight}
                          onChange={(e) => handleChange('maxImageHeight', parseInt(e.target.value))}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Allowed Image Types
                      </label>
                      <input
                        type="text"
                        value={settings.allowedImageTypes}
                        onChange={(e) => handleChange('allowedImageTypes', e.target.value)}
                        className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        placeholder="jpg,jpeg,png,gif,webp"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Allowed Document Types
                      </label>
                      <input
                        type="text"
                        value={settings.allowedDocumentTypes}
                        onChange={(e) => handleChange('allowedDocumentTypes', e.target.value)}
                        className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        placeholder="pdf,doc,docx,txt"
                      />
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="enableImageOptimization"
                        checked={settings.enableImageOptimization}
                        onChange={(e) => handleChange('enableImageOptimization', e.target.checked)}
                        className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                      />
                      <label htmlFor="enableImageOptimization" className="ml-3 text-gray-300">
                        Enable Automatic Image Optimization
                      </label>
                    </div>
                  </div>
                )}

                {/* SEO Settings */}
                {activeTab === 'seo' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white mb-6">SEO & Meta Settings</h2>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Default Meta Description
                      </label>
                      <textarea
                        rows={3}
                        value={settings.defaultMetaDescription}
                        onChange={(e) => handleChange('defaultMetaDescription', e.target.value)}
                        className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300 resize-none"
                        placeholder="Default description for pages without custom meta descriptions"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Default Meta Keywords
                      </label>
                      <input
                        type="text"
                        value={settings.defaultMetaKeywords}
                        onChange={(e) => handleChange('defaultMetaKeywords', e.target.value)}
                        className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        placeholder="web3, finance, blockchain, investment"
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                        <div>
                          <h3 className="text-white font-medium">Enable SEO Optimization</h3>
                          <p className="text-gray-400 text-sm">Automatically optimize content for search engines</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.enableSEO}
                          onChange={(e) => handleChange('enableSEO', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                        <div>
                          <h3 className="text-white font-medium">Enable Open Graph</h3>
                          <p className="text-gray-400 text-sm">Generate Open Graph meta tags for social sharing</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.enableOpenGraph}
                          onChange={(e) => handleChange('enableOpenGraph', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                        <div>
                          <h3 className="text-white font-medium">Enable Twitter Cards</h3>
                          <p className="text-gray-400 text-sm">Generate Twitter Card meta tags</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.enableTwitterCards}
                          onChange={(e) => handleChange('enableTwitterCards', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                        <div>
                          <h3 className="text-white font-medium">Enable Structured Data</h3>
                          <p className="text-gray-400 text-sm">Add JSON-LD structured data for better SEO</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.enableStructuredData}
                          onChange={(e) => handleChange('enableStructuredData', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Display Settings */}
                {activeTab === 'display' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white mb-6">Content Display Settings</h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                        <div>
                          <h3 className="text-white font-medium">Show Author Bio</h3>
                          <p className="text-gray-400 text-sm">Display author information on articles</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.showAuthorBio}
                          onChange={(e) => handleChange('showAuthorBio', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                        <div>
                          <h3 className="text-white font-medium">Show Publish Date</h3>
                          <p className="text-gray-400 text-sm">Display publication date on articles</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.showPublishDate}
                          onChange={(e) => handleChange('showPublishDate', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                        <div>
                          <h3 className="text-white font-medium">Show Read Time</h3>
                          <p className="text-gray-400 text-sm">Display estimated reading time</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.showReadTime}
                          onChange={(e) => handleChange('showReadTime', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                        <div>
                          <h3 className="text-white font-medium">Show Tags</h3>
                          <p className="text-gray-400 text-sm">Display article tags</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.showTags}
                          onChange={(e) => handleChange('showTags', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                        <div>
                          <h3 className="text-white font-medium">Show Related Articles</h3>
                          <p className="text-gray-400 text-sm">Display related articles at the end of posts</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.showRelatedArticles}
                          onChange={(e) => handleChange('showRelatedArticles', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                        <div>
                          <h3 className="text-white font-medium">Enable Table of Contents</h3>
                          <p className="text-gray-400 text-sm">Auto-generate table of contents for long articles</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.enableTableOfContents}
                          onChange={(e) => handleChange('enableTableOfContents', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Archive Settings */}
                {activeTab === 'archive' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white mb-6">Archive & Draft Settings</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Archive After (Days)
                        </label>
                        <input
                          type="number"
                          min="30"
                          max="3650"
                          value={settings.archiveAfterDays}
                          onChange={(e) => handleChange('archiveAfterDays', parseInt(e.target.value))}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Draft Retention (Days)
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="365"
                          value={settings.draftRetentionDays}
                          onChange={(e) => handleChange('draftRetentionDays', parseInt(e.target.value))}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                        <div>
                          <h3 className="text-white font-medium">Enable Archive</h3>
                          <p className="text-gray-400 text-sm">Automatically archive old content</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.enableArchive}
                          onChange={(e) => handleChange('enableArchive', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                        <div>
                          <h3 className="text-white font-medium">Enable Drafts</h3>
                          <p className="text-gray-400 text-sm">Allow saving content as drafts</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.enableDrafts}
                          onChange={(e) => handleChange('enableDrafts', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                        <div>
                          <h3 className="text-white font-medium">Auto-Save Drafts</h3>
                          <p className="text-gray-400 text-sm">Automatically save drafts while editing</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.autoSaveDrafts}
                          onChange={(e) => handleChange('autoSaveDrafts', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Moderation Settings */}
                {activeTab === 'moderation' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white mb-6">Content Moderation</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Max Content Length (characters)
                        </label>
                        <input
                          type="number"
                          min="100"
                          max="100000"
                          value={settings.maxContentLength}
                          onChange={(e) => handleChange('maxContentLength', parseInt(e.target.value))}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Min Content Length (characters)
                        </label>
                        <input
                          type="number"
                          min="10"
                          max="1000"
                          value={settings.minContentLength}
                          onChange={(e) => handleChange('minContentLength', parseInt(e.target.value))}
                          className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333] rounded-lg text-white focus:border-[#00BFFF] focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                        <div>
                          <h3 className="text-white font-medium">Enable Profanity Filter</h3>
                          <p className="text-gray-400 text-sm">Automatically filter inappropriate content</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.enableProfanityFilter}
                          onChange={(e) => handleChange('enableProfanityFilter', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                        <div>
                          <h3 className="text-white font-medium">Enable Spam Detection</h3>
                          <p className="text-gray-400 text-sm">Automatically detect and filter spam content</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.enableSpamDetection}
                          onChange={(e) => handleChange('enableSpamDetection', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                        <div>
                          <h3 className="text-white font-medium">Require Approval</h3>
                          <p className="text-gray-400 text-sm">All content requires admin approval before publishing</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.requireApproval}
                          onChange={(e) => handleChange('requireApproval', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-[#1E1E1E]/50 rounded-lg">
                        <div>
                          <h3 className="text-white font-medium">Enable Content Reporting</h3>
                          <p className="text-gray-400 text-sm">Allow users to report inappropriate content</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.enableContentReporting}
                          onChange={(e) => handleChange('enableContentReporting', e.target.checked)}
                          className="rounded bg-[#1E1E1E] border-[#333] text-[#00BFFF] focus:ring-[#00BFFF]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Save Button */}
                <div className="flex justify-end space-x-4 mt-8 pt-8 border-t border-[#333]">
                  <Link
                    to="/admin/dashboard"
                    className="px-6 py-3 border border-[#333] text-gray-300 rounded-lg hover:bg-[#333] hover:text-white transition-all duration-300"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-8 py-4 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-all duration-300 hover-glow button-magnetic flex items-center space-x-2 disabled:opacity-50"
                  >
                    <Save className="h-5 w-5" />
                    <span>{saving ? 'Saving Settings...' : 'Save Content Settings'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}