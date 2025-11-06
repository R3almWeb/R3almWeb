import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import DeleteModal from '../../../components/DeleteModal';

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  created_at: string;
}

const CategoryManager: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', slug: '', description: '' });
  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('categories').select('*').order('name');
    if (error) console.error(error);
    else setCategories(data || []);
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      const { error } = await supabase.from('categories').update(formData).eq('id', editingId);
      if (error) console.error(error);
    } else {
      const { data, error } = await supabase.from('categories').insert([{ ...formData, slug: formData.name.toLowerCase().replace(/\s+/g, '-') }]).select();
      if (error) console.error(error);
      else setFormData({ name: '', slug: '', description: '' });
    }
    setEditingId(null);
    fetchCategories();
  };

  const startEdit = (cat: Category) => {
    setFormData({ name: cat.name, slug: cat.slug, description: cat.description });
    setEditingId(cat.id);
  };

  const confirmDelete = (id: string) => {
    setDeleteId(id);
    setShowDelete(true);
  };

  const handleDelete = async () => {
    if (deleteId) {
      const { error } = await supabase.from('categories').delete().eq('id', deleteId);
      if (error) console.error(error);
      setShowDelete(false);
      setDeleteId(null);
      fetchCategories();
    }
  };

  const filteredCategories = categories.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  if (loading) return <div className="p-4 text-white">Loading...</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-white mb-4">Category Manager</h2>
      <input
        type="text"
        placeholder="Search categories..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 px-4 py-2 bg-white/5 border border-white/10 rounded text-white"
      />
      <form onSubmit={handleSubmit} className="mb-6 p-4 bg-white/5 rounded">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="block w-full mb-2 px-4 py-2 bg-white/5 border border-white/10 rounded text-white"
          required
        />
        <input
          type="text"
          placeholder="Slug"
          value={formData.slug}
          onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
          className="block w-full mb-2 px-4 py-2 bg-white/5 border border-white/10 rounded text-white"
        />
        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="block w-full mb-2 px-4 py-2 bg-white/5 border border-white/10 rounded text-white h-20"
        />
        <button type="submit" className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600">
          {editingId ? 'Update' : 'Add'} Category
        </button>
        {editingId && (
          <button type="button" onClick={() => { setEditingId(null); setFormData({ name: '', slug: '', description: '' }); }} className="ml-2 bg-gray-500 text-white px-4 py-2 rounded">
            Cancel
          </button>
        )}
      </form>
      <table className="w-full bg-white/5 rounded overflow-hidden">
        <thead>
          <tr className="bg-white/10">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Slug</th>
            <th className="p-2 text-left">Description</th>
            <th className="p-2 text-left">Created</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCategories.map((cat) => (
            <tr key={cat.id} className="border-t border-white/10">
              <td className="p-2">{cat.name}</td>
              <td className="p-2">{cat.slug}</td>
              <td className="p-2">{cat.description}</td>
              <td className="p-2">{new Date(cat.created_at).toLocaleDateString()}</td>
              <td className="p-2">
                <button onClick={() => startEdit(cat)} className="bg-blue-500 text-white px-2 py-1 rounded mr-1">Edit</button>
                <button onClick={() => confirmDelete(cat.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DeleteModal isOpen={showDelete} onClose={() => setShowDelete(false)} onConfirm={handleDelete} title="Delete Category?" />
    </div>
  );
};

export { CategoryManager };