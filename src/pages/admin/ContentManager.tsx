import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';

export function ContentManager() {
  const { supabase, user } = useAuth();
  const isAdmin = user?.user_metadata?.role === 'ADMIN';
  const [stats, setStats] = useState([]);
  const [divisions, setDivisions] = useState([]);
  const [products, setProducts] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all content types
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const tables = ['stats', 'divisions', 'products', 'highlights', 'values'];
        const data = await Promise.all(
          tables.map(async (table) => {
            const { data } = await supabase.from(table).select('*');
            return { table, data };
          })
        );
        data.forEach(({ table, data }) => {
          if (table === 'stats') setStats(data);
          if (table === 'divisions') setDivisions(data);
          if (table === 'products') setProducts(data);
          if (table === 'highlights') setHighlights(data);
          if (table === 'values') setValues(data);
        });
      } catch (error) {
        console.error('Error fetching content:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
  }, [supabase]);

  // Generic update function
  const updateItem = async (table, item) => {
    if (!isAdmin) return alert('Only ADMIN can edit.');
    try {
      await supabase.from(table).upsert(item);
      alert('Updated successfully');
      // Refetch or update state locally
    } catch (error) {
      console.error('Update error:', error);
    }
  };

  // Generic add function
  const addItem = async (table, newItem) => {
    if (!isAdmin) return alert('Only ADMIN can add.');
    try {
      await supabase.from(table).insert(newItem);
      alert('Added successfully');
    } catch (error) {
      console.error('Add error:', error);
    }
  };

  // Generic delete function
  const deleteItem = async (table, id) => {
    if (!isAdmin) return alert('Only ADMIN can delete.');
    try {
      await supabase.from(table).delete().eq('id', id);
      alert('Deleted successfully');
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!user || user.user_metadata.role === 'USER') return <div>Access denied</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Content Manager</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl mb-4">Stats</h2>
        {stats.map((stat) => (
          <div key={stat.id} className="mb-4">
            <input value={stat.label} onChange={(e) => updateItem('stats', { ...stat, label: e.target.value })} disabled={!isAdmin} />
            <input value={stat.value} onChange={(e) => updateItem('stats', { ...stat, value: e.target.value })} disabled={!isAdmin} />
            <input value={stat.icon} onChange={(e) => updateItem('stats', { ...stat, icon: e.target.value })} disabled={!isAdmin} />
            {isAdmin && <button onClick={() => deleteItem('stats', stat.id)}>Delete</button>}
          </div>
        ))}
        {isAdmin && <button onClick={() => addItem('stats', { label: 'New', value: '0', icon: 'Icon' })}>Add Stat</button>}
      </section>

      {/* Similar sections for divisions, products, highlights, values */}
      <section className="mb-8">
        <h2 className="text-2xl mb-4">Divisions</h2>
        {divisions.map((div) => (
          <div key={div.id} className="mb-4">
            <input value={div.name} onChange={(e) => updateItem('divisions', { ...div, name: e.target.value })} disabled={!isAdmin} />
            <input value={div.subtitle} onChange={(e) => updateItem('divisions', { ...div, subtitle: e.target.value })} disabled={!isAdmin} />
            {isAdmin && <button onClick={() => deleteItem('divisions', div.id)}>Delete</button>}
          </div>
        ))}
        {isAdmin && <button onClick={() => addItem('divisions', { name: 'New Division', subtitle: 'Description' })}>Add Division</button>}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl mb-4">Products</h2>
        {products.map((prod) => (
          <div key={prod.id} className="mb-4">
            <input value={prod.name} onChange={(e) => updateItem('products', { ...prod, name: e.target.value })} disabled={!isAdmin} />
            <input value={prod.status} onChange={(e) => updateItem('products', { ...prod, status: e.target.value })} disabled={!isAdmin} />
            {isAdmin && <button onClick={() => deleteItem('products', prod.id)}>Delete</button>}
          </div>
        ))}
        {isAdmin && <button onClick={() => addItem('products', { name: 'New Product', status: 'In Development' })}>Add Product</button>}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl mb-4">Highlights</h2>
        {highlights.map((hl) => (
          <div key={hl.id} className="mb-4">
            <input value={hl.title} onChange={(e) => updateItem('highlights', { ...hl, title: e.target.value })} disabled={!isAdmin} />
            <input value={hl.description} onChange={(e) => updateItem('highlights', { ...hl, description: e.target.value })} disabled={!isAdmin} />
            <input value={hl.link} onChange={(e) => updateItem('highlights', { ...hl, link: e.target.value })} disabled={!isAdmin} />
            <input value={hl.icon} onChange={(e) => updateItem('highlights', { ...hl, icon: e.target.value })} disabled={!isAdmin} />
            {isAdmin && <button onClick={() => deleteItem('highlights', hl.id)}>Delete</button>}
          </div>
        ))}
        {isAdmin && <button onClick={() => addItem('highlights', { title: 'New', description: 'Desc', link: '/', icon: 'Icon' })}>Add Highlight</button>}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl mb-4">Core Values</h2>
        {values.map((val) => (
          <div key={val.id} className="mb-4">
            <input value={val.title} onChange={(e) => updateItem('values', { ...val, title: e.target.value })} disabled={!isAdmin} />
            <input value={val.description} onChange={(e) => updateItem('values', { ...val, description: e.target.value })} disabled={!isAdmin} />
            {isAdmin && <button onClick={() => deleteItem('values', val.id)}>Delete</button>}
          </div>
        ))}
        {isAdmin && <button onClick={() => addItem('values', { title: 'New Value', description: 'Description' })}>Add Value</button>}
      </section>
    </div>
  );
}