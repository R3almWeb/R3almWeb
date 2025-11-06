import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import DeleteModal from '../../../components/DeleteModal'; // Reuse existing

interface Page {
  id: string;
  title: string;
  slug: string;
  content: string;
  status: 'draft' | 'published';
  updated_at: string;
}

const PageManager: React.FC = () => {
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ title: '', slug: '', content: '', status: 'draft' as const });
  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('pages').select('*').order('updated_at', { ascending: false });
    if (error) console.error(error);
    else setPages(data || []);
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      const { error } = await supabase.from('pages').update(formData).eq('id', editingId);
      if (error) console.error(error);
    } else {
      const { data, error } = await supabase.from('pages').insert([formData]).select();
      if (error) console.error(error);
      else setFormData({ title: '', slug: '', content: '', status: 'draft' });
    }
    setEditingId(null);
    fetchPages();
  };

  const startEdit = (page: Page) => {
    setFormData({ title: page.title, slug: page.slug, content: page.content, status: page.status });
    setEditingId(page.id);
  };

  const confirmDelete = (id: string) => {
    setDeleteId(id);
    setShowDelete(true);
  };

  const handleDelete = async () => {
    if (deleteId) {
      const { error } = await supabase.from('pages').delete().eq('id', deleteId);
      if (error) console.error(error);
      setShowDelete(false);
      setDeleteId(null);
      fetchPages();
    }
  };

  const filteredPages = pages.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));

  if (loading) return <div className="p-4 text-white">Loading...</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-white mb-4">Page Manager</h2>
      <input
        type="text"
        placeholder="Search pages..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 px-4 py-2 bg-white/5 border border-white/10 rounded text-white"
      />
      <form onSubmit={handleSubmit} className="mb-6 p-4 bg-white/5 rounded">
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="block w-full mb-2 px-4 py-2 bg-white/5 border border-white/10 rounded text-white"
          required
        />
        <input
          type="text"
          placeholder="Slug (e.g., about)"
          value={formData.slug}
          onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
          className="block w-full mb-2 px-4 py-2 bg-white/5 border border-white/10 rounded text-white"
          required
        />
        <textarea
          placeholder="Content (Markdown/HTML)"
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          className="block w-full mb-2 px-4 py-2 bg-white/5 border border-white/10 rounded text-white h-32"
          required
        />
        <select
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
          className="block w-full mb-2 px-4 py-2 bg-white/5 border border-white/10 rounded text-white"
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
        <button type="submit" className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600">
          {editingId ? 'Update' : 'Add'} Page
        </button>
        {editingId && (
          <button type="button" onClick={() => { setEditingId(null); setFormData({ title: '', slug: '', content: '', status: 'draft' }); }} className="ml-2 bg-gray-500 text-white px-4 py-2 rounded">
            Cancel
          </button>
        )}
      </form>
      <table className="w-full bg-white/5 rounded overflow-hidden">
        <thead>
          <tr className="bg-white/10">
            <th className="p-2 text-left">Title</th>
            <th className="p-2 text-left">Slug</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Updated</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPages.map((page) => (
            <tr key={page.id} className="border-t border-white/10">
              <td className="p-2">{page.title}</td>
              <td className="p-2">{page.slug}</td>
              <td className="p-2">{page.status}</td>
              <td className="p-2">{new Date(page.updated_at).toLocaleDateString()}</td>
              <td className="p-2">
                <button onClick={() => startEdit(page)} className="bg-blue-500 text-white px-2 py-1 rounded mr-1">Edit</button>
                <button onClick={() => confirmDelete(page.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DeleteModal isOpen={showDelete} onClose={() => setShowDelete(false)} onConfirm={handleDelete} title="Delete Page?" />
    </div>
  );
};

export { PageManager };