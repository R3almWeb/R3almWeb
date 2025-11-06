import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import DeleteModal from '../DeleteModal';

interface Media {
  id: string;
  filename: string;
  url: string;
  type: string;
  uploaded_by: string;
  created_at: string;
}

const MediaManager: React.FC = () => {
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [search, setSearch] = useState('');
  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('media').select('*').order('created_at', { ascending: false });
    if (error) console.error(error);
    else setMedia(data || []);
    setLoading(false);
  };

  const handleUpload = async () => {
    if (!uploadFile) return;
    setLoading(true);
    const fileExt = uploadFile.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('media')
      .upload(fileName, uploadFile);
    if (uploadError) {
      console.error(uploadError);
    } else {
      const { data: urlData } = supabase.storage.from('media').getPublicUrl(fileName);
      const { error: insertError } = await supabase.from('media').insert([{
        filename: uploadFile.name,
        url: urlData.publicUrl,
        type: uploadFile.type,
        uploaded_by: 'admin', // From AuthContext
      }]);
      if (insertError) console.error(insertError);
      setUploadFile(null);
      fetchMedia();
    }
    setLoading(false);
  };

  const confirmDelete = (id: string) => {
    setDeleteId(id);
    setShowDelete(true);
  };

  const handleDelete = async () => {
    if (deleteId) {
      const { data: mediaToDelete } = await supabase.from('media').select('filename').eq('id', deleteId).single();
      if (mediaToDelete) {
        await supabase.storage.from('media').remove([mediaToDelete.filename]);
      }
      const { error } = await supabase.from('media').delete().eq('id', deleteId);
      if (error) console.error(error);
      setShowDelete(false);
      setDeleteId(null);
      fetchMedia();
    }
  };

  const filteredMedia = media.filter(m => m.filename.toLowerCase().includes(search.toLowerCase()));

  if (loading) return <div className="p-4 text-white">Loading...</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-white mb-4">Media Library</h2>
      <input
        type="file"
        onChange={(e) => setUploadFile(e.target.files?.[0] || null)}
        className="mb-4"
      />
      <button onClick={handleUpload} disabled={!uploadFile || loading} className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 disabled:opacity-50 mb-4">
        Upload
      </button>
      <input
        type="text"
        placeholder="Search media..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 px-4 py-2 bg-white/5 border border-white/10 rounded text-white"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredMedia.map((item) => (
          <div key={item.id} className="bg-white/5 p-2 rounded">
            {item.type.startsWith('image/') ? (
              <img src={item.url} alt={item.filename} className="w-full h-32 object-cover rounded mb-2" />
            ) : (
              <div className="w-full h-32 bg-gray-600 flex items-center justify-center rounded mb-2">
                {item.type}
              </div>
            )}
            <p className="text-white text-sm mb-1">{item.filename}</p>
            <p className="text-gray-400 text-xs mb-2">Uploaded: {new Date(item.created_at).toLocaleDateString()}</p>
            <button onClick={() => confirmDelete(item.id)} className="bg-red-500 text-white px-2 py-1 rounded text-xs">
              Delete
            </button>
          </div>
        ))}
      </div>
      <DeleteModal isOpen={showDelete} onClose={() => setShowDelete(false)} onConfirm={handleDelete} title="Delete Media?" />
    </div>
  );
};

export { MediaManager };