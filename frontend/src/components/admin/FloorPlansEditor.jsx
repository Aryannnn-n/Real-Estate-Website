import axios from 'axios';
import { useEffect, useState } from 'react';
import API_URL from '../../config';

const FloorPlansEditor = ({ content, refresh }) => {
  const [form, setForm] = useState({ title: '', wings: [], types: [] });

  useEffect(() => {
    if (content?.floorPlans) {
      setForm(content.floorPlans);
    }
  }, [content]);

  const handleWingsChange = (e) => {
    const wingsArray = e.target.value.split(',').map((w) => w.trim());
    setForm({ ...form, wings: wingsArray });
  };

  const handleTypeChange = (index, field, value) => {
    const newTypes = [...form.types];
    newTypes[index][field] = value;
    setForm({ ...form, types: newTypes });
  };

  const addType = () => {
    setForm({
      ...form,
      types: [...form.types, { name: '', area: '', price: '' }],
    });
  };

  const removeType = (index) => {
    const newTypes = form.types.filter((_, i) => i !== index);
    setForm({ ...form, types: newTypes });
  };

  const handleSave = async () => {
    try {
      await axios.put(`${API_URL}/api/content`, {
        floorPlans: form,
      });
      alert('Floor Plans Updated');
      refresh();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full max-w-none bg-white p-8 md:p-14 rounded-none md:rounded-xl shadow-lg border border-gray-100 space-y-14 font-sans text-brand-dark">
      {/* Header */}
      <div className="border-b pb-6">
        <h2 className="text-lg font-black uppercase tracking-[0.3em] text-gray-800">
          Floor Plans Section
        </h2>
        <p className="text-xs uppercase tracking-widest text-gray-400 mt-2">
          Manage apartment types, wings & pricing structure
        </p>
      </div>

      {/* Basic Info */}
      <div className="space-y-8 border-b pb-10">
        <h3 className="text-sm font-black uppercase tracking-[0.3em] text-gray-700">
          Section Details
        </h3>

        <div>
          <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 block mb-2">
            Section Title
          </label>
          <input
            value={form.title || ''}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full border border-gray-200 bg-gray-50 px-4 py-3 rounded-md text-sm font-bold uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
            placeholder="FLOOR PLANS"
          />
        </div>

        <div>
          <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 block mb-2">
            Wings (Comma Separated)
          </label>
          <input
            value={form.wings?.join(', ') || ''}
            onChange={handleWingsChange}
            className="w-full border border-gray-200 bg-gray-50 px-4 py-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
            placeholder="East Wing, West Wing"
          />
        </div>
      </div>

      {/* Apartment Types */}
      <div className="space-y-8">
        <h3 className="text-sm font-black uppercase tracking-[0.3em] text-gray-700">
          Apartment Types
        </h3>

        <div className="space-y-6">
          {form.types?.map((type, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-100 p-8 rounded-xl shadow-sm space-y-6"
            >
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                  Type #{i + 1}
                </span>
                <button
                  onClick={() => removeType(i)}
                  className="text-red-500 text-xs font-black uppercase tracking-widest hover:text-red-600 transition"
                >
                  Remove
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 block mb-2">
                    Name
                  </label>
                  <input
                    value={type.name}
                    onChange={(e) =>
                      handleTypeChange(i, 'name', e.target.value)
                    }
                    className="w-full border border-gray-200 bg-white px-4 py-3 rounded-md text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
                    placeholder="1 BHK"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 block mb-2">
                    Area
                  </label>
                  <input
                    value={type.area}
                    onChange={(e) =>
                      handleTypeChange(i, 'area', e.target.value)
                    }
                    className="w-full border border-gray-200 bg-white px-4 py-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
                    placeholder="300-400 sqft"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 block mb-2">
                    Price
                  </label>
                  <input
                    value={type.price}
                    onChange={(e) =>
                      handleTypeChange(i, 'price', e.target.value)
                    }
                    className="w-full border border-gray-200 bg-white px-4 py-3 rounded-md text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
                    placeholder="Call for price"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Type Button */}
        <button
          onClick={addType}
          className="inline-block border border-[#a3e635] text-[#65a30d] hover:bg-[#a3e635] hover:text-black px-6 py-3 rounded-md text-xs font-black uppercase tracking-[0.3em] transition-all duration-300"
        >
          + Add Apartment Type
        </button>
      </div>

      {/* Save Button */}
      <div className="pt-8 border-t flex justify-end">
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

export default FloorPlansEditor;
