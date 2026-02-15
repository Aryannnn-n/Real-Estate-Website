import axios from 'axios';
import { useEffect, useState } from 'react';
import API_URL from '../../config';

const AmenitiesEditor = ({ content, refresh }) => {
  const [form, setForm] = useState({ title: '', description: '', items: [] });

  useEffect(() => {
    if (content?.amenities) {
      setForm(content.amenities);
    }
  }, [content]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...form.items];
    newItems[index][field] = value;
    setForm({ ...form, items: newItems });
  };

  const addItem = () => {
    setForm({
      ...form,
      items: [...form.items, { name: '', icon: '' }],
    });
  };

  const removeItem = (index) => {
    const newItems = form.items.filter((_, i) => i !== index);
    setForm({ ...form, items: newItems });
  };

  const handleSave = async () => {
    try {
      await axios.put(`${API_URL}/api/content`, {
        amenities: form,
      });
      alert('Amenities Updated');
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
          Amenities Section
        </h2>
        <p className="text-xs uppercase tracking-widest text-gray-400 mt-2">
          Manage amenities displayed on homepage
        </p>
      </div>

      {/* Section Meta */}
      <div className="space-y-6 border-b pb-10">
        <div>
          <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 block mb-2">
            Section Title
          </label>
          <input
            name="title"
            value={form.title || ''}
            onChange={handleChange}
            className="w-full border border-gray-200 bg-gray-50 px-4 py-3 rounded-md text-sm font-bold uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
            placeholder="LUXURIOUS AMENITIES"
          />
        </div>

        <div>
          <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 block mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={form.description || ''}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-200 bg-gray-50 px-4 py-4 rounded-md text-sm leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
            placeholder="Describe the lifestyle amenities..."
          />
        </div>
      </div>

      {/* Amenities Items */}
      <div className="space-y-8">
        <h3 className="text-sm font-black uppercase tracking-[0.3em] text-gray-700">
          Amenities Items
        </h3>

        <div className="space-y-4">
          {form.items?.map((item, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row md:items-center gap-4 bg-gray-50 border border-gray-100 p-6 rounded-xl shadow-sm"
            >
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                #{i + 1}
              </div>

              <input
                value={item.icon}
                onChange={(e) => handleItemChange(i, 'icon', e.target.value)}
                className="border border-gray-200 bg-white px-4 py-3 rounded-md text-sm w-24 text-center focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
                placeholder="Icon"
              />

              <input
                value={item.name}
                onChange={(e) => handleItemChange(i, 'name', e.target.value)}
                className="border border-gray-200 bg-white px-4 py-3 rounded-md text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
                placeholder="Amenity Name"
              />

              <button
                onClick={() => removeItem(i)}
                className="text-red-500 text-xs font-black uppercase tracking-widest hover:text-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Add Button */}
        <button
          onClick={addItem}
          className="inline-block border border-[#a3e635] text-[#65a30d] hover:bg-[#a3e635] hover:text-black px-6 py-3 rounded-md text-xs font-black uppercase tracking-[0.3em] transition-all duration-300"
        >
          + Add Amenity
        </button>
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

export default AmenitiesEditor;
