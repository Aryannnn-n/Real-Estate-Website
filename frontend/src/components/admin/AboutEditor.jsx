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
      await axios.put(`${API_URL}/api/content`, {
        overview: form,
      });
      alert('About Section Updated');
      refresh();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full max-w-none bg-white p-8 md:p-14 rounded-none md:rounded-xl shadow-lg border border-gray-100 space-y-12 font-sans text-brand-dark">

      {/* Header */}
      <div className="border-b pb-6">
        <h2 className="text-lg font-black uppercase tracking-[0.3em] text-gray-800">
          About Section
        </h2>
        <p className="text-xs uppercase tracking-widest text-gray-400 mt-2">
          Update overview content displayed on homepage
        </p>
      </div>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Section Title */}
        <div className="md:col-span-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 block mb-2">
            Section Title
          </label>
          <input
            name="title"
            value={form.title || ''}
            onChange={handleChange}
            className="w-full border border-gray-200 bg-gray-50 px-4 py-3 rounded-md text-sm font-bold uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
            placeholder="ABOUT THE PROJECT"
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 block mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={form.description || ''}
            onChange={handleChange}
            className="w-full border border-gray-200 bg-gray-50 px-4 py-4 rounded-md text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#a3e635] resize-none"
            rows={6}
            placeholder="Write project overview here..."
          />
        </div>

        {/* Highlight Quote */}
        <div>
          <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 block mb-2">
            Highlight Quote
          </label>
          <input
            name="highlightQuote"
            value={form.highlightQuote || ''}
            onChange={handleChange}
            className="w-full border border-gray-200 bg-gray-50 px-4 py-3 rounded-md text-sm italic focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
            placeholder='"A Landmark Address In The Making"'
          />
        </div>

        {/* Button Text */}
        <div>
          <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 block mb-2">
            Button Text
          </label>
          <input
            name="buttonText"
            value={form.buttonText || ''}
            onChange={handleChange}
            className="w-full border border-gray-200 bg-gray-50 px-4 py-3 rounded-md text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
            placeholder="Know More"
          />
        </div>

      </div>

      {/* Save Button */}
      <div className="pt-6 border-t flex justify-end">
        <button
          onClick={handleSave}
          className="bg-[#a3e635] hover:bg-[#bef264] px-10 py-4 rounded-md shadow-lg font-black text-xs uppercase tracking-[0.3em] transition-all duration-300"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default AboutEditor;
