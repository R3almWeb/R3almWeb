// src/pages/admin/BlogManager.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Edit, Trash2, Eye } from 'lucide-react';
import { articles, categories } from '../../data/articles';

export function BlogManager() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredArticles, setFilteredArticles] = useState(articles);

  useEffect(() => {
    let filtered = articles;
    if (searchTerm) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }
    setFilteredArticles(filtered);
  }, [searchTerm, selectedCategory]);

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      // Simulate delete - in real app, call Supabase delete
      console.log(`Delete article ${id}`);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Blog Manager</h1>
        <Link
          to="/admin/articles/new"
          className="flex items-center space-x-2 bg-[#00BFFF] text-white px-4 py-2 rounded-lg hover:bg-[#0099CC] transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>New Article</span>
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 bg-[#1E1E1E] p-4 rounded-lg">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-2 bg-[#2A2A2A] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 bg-[#2A2A2A] border border-[#333] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
        >
          <option value="All">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Articles Table */}
      <div className="bg-[#1E1E1E] rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#2A2A2A]">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#333]">
            {filteredArticles.map((article) => (
              <tr key={article.id} className="hover:bg-[#2A2A2A] transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-white truncate max-w-xs">{article.title}</div>
                  <div className="text-sm text-gray-400 truncate max-w-xs">{article.excerpt}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-[#00BFFF]/20 text-[#00BFFF]">
                    {article.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{article.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <Link
                    to={`/admin/articles/${article.id}`}
                    className="text-[#00BFFF] hover:text-[#FFD700] p-1"
                    title="Edit"
                  >
                    <Edit className="h-4 w-4" />
                  </Link>
                  <button
                    onClick={() => handleDelete(article.id)}
                    className="text-red-400 hover:text-red-300 p-1"
                    title="Delete"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <Link
                    to={`/blog/${article.id}`}
                    className="text-gray-400 hover:text-gray-300 p-1"
                    title="View"
                  >
                    <Eye className="h-4 w-4" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredArticles.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            No articles found matching your criteria.
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div className="glass-effect p-6 rounded-lg">
          <div className="text-2xl font-bold text-[#00BFFF]">{articles.length}</div>
          <div className="text-gray-400">Total Articles</div>
        </div>
        <div className="glass-effect p-6 rounded-lg">
          <div className="text-2xl font-bold text-[#FFD700]">{categories.length}</div>
          <div className="text-gray-400">Categories</div>
        </div>
        <div className="glass-effect p-6 rounded-lg">
          <div className="text-2xl font-bold text-green-400">{filteredArticles.length}</div>
          <div className="text-gray-400">Filtered Results</div>
        </div>
      </div>
    </div>
  );
}