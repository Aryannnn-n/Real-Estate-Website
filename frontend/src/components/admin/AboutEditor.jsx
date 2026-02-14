import axios from 'axios';
import { useEffect, useState } from 'react';

const AboutEditor = ({ content, refresh }) => {
  const [form, setForm] = useState({});

  useEffect(() => {
    if (content?.overview) {
      setForm(content.overview);
    }
  }, [content]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      await axios.put('http://localhost:3000/api/content', {
        overview: form,
      });
      alert('About Section Updated');
      refresh();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-xl">Edit About Section</h3>
      
      <div>
        <label className="block text-xs font-bold mb-1">Section Title</label>
        <input
          name="title"
          value={form.title || ''}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block text-xs font-bold mb-1">Description</label>
        <textarea
          name="description"
          value={form.description || ''}
          onChange={handleChange}
          className="w-full border p-2 rounded h-32"
        />
      </div>

      <div>
        <label className="block text-xs font-bold mb-1">Highlight Quote</label>
        <input
          name="highlightQuote"
          value={form.highlightQuote || ''}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block text-xs font-bold mb-1">Button Text</label>
        <input
          name="buttonText"
          value={form.buttonText || ''}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <button
        onClick={handleSave}
        className="bg-brand-green px-6 py-2 rounded-md font-bold text-brand-dark"
      >
        Save Changes
      </button>
    </div>
  );
};

export default AboutEditor;
