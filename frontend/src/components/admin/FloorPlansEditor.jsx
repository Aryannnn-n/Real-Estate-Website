import axios from 'axios';
import { useEffect, useState } from 'react';

const FloorPlansEditor = ({ content, refresh }) => {
  const [form, setForm] = useState({ title: '', wings: [], types: [] });

  useEffect(() => {
    if (content?.floorPlans) {
      setForm(content.floorPlans);
    }
  }, [content]);

  // Wings (Comma separated for simplicity in UI, but array in DB)
  const handleWingsChange = (e) => {
    const wingsArray = e.target.value.split(',').map((w) => w.trim());
    setForm({ ...form, wings: wingsArray });
  };

  // Types Handlers
  const handleTypeChange = (index, field, value) => {
    const newTypes = [...form.types];
    newTypes[index][field] = value;
    setForm({ ...form, types: newTypes });
  };
  const addType = () => {
    setForm({ ...form, types: [...form.types, { name: '', area: '', price: '' }] });
  };
  const removeType = (index) => {
    const newTypes = form.types.filter((_, i) => i !== index);
    setForm({ ...form, types: newTypes });
  };

  const handleSave = async () => {
    try {
      await axios.put('http://localhost:3000/api/content', {
        floorPlans: form,
      });
      alert('Floor Plans Updated');
      refresh();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-8">
      <h3 className="font-bold text-xl">Edit Floor Plans</h3>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold mb-1">Section Title</label>
          <input
            value={form.title || ''}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full border p-2 rounded"
          />
        </div>
        
        <div>
          <label className="block text-xs font-bold mb-1">Wings (Comma Separated)</label>
          <input
            value={form.wings?.join(', ') || ''}
            onChange={handleWingsChange}
            className="w-full border p-2 rounded"
            placeholder="East Wing, West Wing, etc."
          />
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-bold text-sm">Apartment Types</h4>
        {form.types?.map((type, i) => (
          <div key={i} className="bg-gray-50 p-4 rounded space-y-2">
            <div className="flex gap-2">
              <div className="flex-1">
                <label className="text-[10px] font-bold text-gray-400">Name</label>
                <input
                  value={type.name}
                  onChange={(e) => handleTypeChange(i, 'name', e.target.value)}
                  className="w-full border p-2 rounded"
                  placeholder="1 BHK"
                />
              </div>
              <div className="flex-1">
                <label className="text-[10px] font-bold text-gray-400">Area</label>
                <input
                  value={type.area}
                  onChange={(e) => handleTypeChange(i, 'area', e.target.value)}
                  className="w-full border p-2 rounded"
                  placeholder="300-400 sqft"
                />
              </div>
              <div className="flex-1">
                <label className="text-[10px] font-bold text-gray-400">Price</label>
                <input
                  value={type.price}
                  onChange={(e) => handleTypeChange(i, 'price', e.target.value)}
                  className="w-full border p-2 rounded"
                  placeholder="Call for price"
                />
              </div>
              <button onClick={() => removeType(i)} className="text-red-500 font-bold mt-6">X</button>
            </div>
          </div>
        ))}
        <button onClick={addType} className="text-sm text-brand-green font-bold">+ Add Type</button>
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

export default FloorPlansEditor;
