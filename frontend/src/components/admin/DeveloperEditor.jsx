import axios from 'axios';
import { useEffect, useState } from 'react';

const DeveloperEditor = ({ content, refresh }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    stats: [],
    updates: [],
  });

  useEffect(() => {
    if (content?.developer) {
      setForm(content.developer);
    }
  }, [content]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Stats Handlers
  const handleStatChange = (index, field, value) => {
    const newStats = [...form.stats];
    newStats[index][field] = value;
    setForm({ ...form, stats: newStats });
  };
  const addStat = () => {
    setForm({ ...form, stats: [...form.stats, { label: '', value: '' }] });
  };
  const removeStat = (index) => {
    const newStats = form.stats.filter((_, i) => i !== index);
    setForm({ ...form, stats: newStats });
  };

  // Updates Handlers
  const handleUpdateChange = (index, field, value) => {
    const newUpdates = [...form.updates];
    newUpdates[index][field] = value;
    setForm({ ...form, updates: newUpdates });
  };
  const addUpdate = () => {
    setForm({ ...form, updates: [...form.updates, { title: '', sub: '' }] });
  };
  const removeUpdate = (index) => {
    const newUpdates = form.updates.filter((_, i) => i !== index);
    setForm({ ...form, updates: newUpdates });
  };

  const handleSave = async () => {
    try {
      await axios.put('http://localhost:3000/api/content', {
        developer: form,
      });
      alert('Developer Section Updated');
      refresh();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-8">
      <h3 className="font-bold text-xl">Edit Developer Section</h3>

      <div className="space-y-4">
        <label className="block text-xs font-bold">Main Info</label>
        <input
          name="title"
          value={form.title || ''}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Title"
        />
        <textarea
          name="description"
          value={form.description || ''}
          onChange={handleChange}
          className="w-full border p-2 rounded h-24"
          placeholder="Description"
        />
      </div>

      <div className="space-y-4">
        <h4 className="font-bold text-sm">Statistics</h4>
        {form.stats?.map((stat, i) => (
          <div key={i} className="flex gap-4 items-center bg-gray-50 p-2 rounded">
            <input
              value={stat.value}
              onChange={(e) => handleStatChange(i, 'value', e.target.value)}
              className="border p-2 rounded w-1/3"
              placeholder="Value (e.g. 1.32 LAC)"
            />
            <input
              value={stat.label}
              onChange={(e) => handleStatChange(i, 'label', e.target.value)}
              className="border p-2 rounded flex-1"
              placeholder="Label (e.g. sq.ft area)"
            />
            <button onClick={() => removeStat(i)} className="text-red-500 font-bold">X</button>
          </div>
        ))}
        <button onClick={addStat} className="text-xs text-brand-green font-bold">+ Add Stat</button>
      </div>

      <div className="space-y-4">
        <h4 className="font-bold text-sm">Project Updates</h4>
        {form.updates?.map((item, i) => (
          <div key={i} className="flex gap-4 items-center bg-gray-50 p-2 rounded">
            <input
              value={item.title}
              onChange={(e) => handleUpdateChange(i, 'title', e.target.value)}
              className="border p-2 rounded w-1/3"
              placeholder="Title (e.g. Completed)"
            />
            <input
              value={item.sub}
              onChange={(e) => handleUpdateChange(i, 'sub', e.target.value)}
              className="border p-2 rounded flex-1"
              placeholder="Subtext (e.g. Tower B)"
            />
            <button onClick={() => removeUpdate(i)} className="text-red-500 font-bold">X</button>
          </div>
        ))}
        <button onClick={addUpdate} className="text-xs text-brand-green font-bold">+ Add Update</button>
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

export default DeveloperEditor;
