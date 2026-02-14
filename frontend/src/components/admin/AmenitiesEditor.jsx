import axios from 'axios';
import { useEffect, useState } from 'react';

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
      await axios.put('http://localhost:3000/api/content', {
        amenities: form,
      });
      alert('Amenities Updated');
      refresh();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="font-bold text-xl">Edit Amenities</h3>

      <div className="space-y-4 border-b pb-4">
        <input
          name="title"
          value={form.title || ''}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Section Title"
        />
        <textarea
          name="description"
          value={form.description || ''}
          onChange={handleChange}
          className="w-full border p-2 rounded h-20"
          placeholder="Description"
        />
      </div>

      <div className="space-y-4">
        <h4 className="font-bold text-sm">Amenities Items</h4>
        {form.items?.map((item, i) => (
          <div key={i} className="flex gap-4 items-center bg-gray-50 p-4 rounded">
            <span className="font-mono text-xs">{i + 1}.</span>
            <input
              value={item.icon}
              onChange={(e) => handleItemChange(i, 'icon', e.target.value)}
              className="border p-2 rounded w-16 text-center"
              placeholder="Icon"
            />
            <input
              value={item.name}
              onChange={(e) => handleItemChange(i, 'name', e.target.value)}
              className="border p-2 rounded flex-1"
              placeholder="Amenity Name"
            />
            <button
              onClick={() => removeItem(i)}
              className="text-red-500 font-bold px-2"
            >
              X
            </button>
          </div>
        ))}
        <button
          onClick={addItem}
          className="text-sm text-brand-green font-bold border border-brand-green px-4 py-2 rounded"
        >
          + Add Amenity
        </button>
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

export default AmenitiesEditor;
