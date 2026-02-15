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
      await axios.put(`${API_URL}/api/content`, {
        developer: form,
      });
      alert('Developer Section Updated');
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
          Developer Section
        </h2>
        <p className="text-xs uppercase tracking-widest text-gray-400 mt-2">
          Manage developer profile, statistics & updates
        </p>
      </div>

      {/* Main Info */}
      <div className="space-y-6 border-b pb-10">
        <h3 className="text-sm font-black uppercase tracking-[0.3em] text-gray-700">
          Main Information
        </h3>

        <div>
          <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 block mb-2">
            Title
          </label>
          <input
            name="title"
            value={form.title || ''}
            onChange={handleChange}
            className="w-full border border-gray-200 bg-gray-50 px-4 py-3 rounded-md text-sm font-bold uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
            placeholder="ABOUT THE DEVELOPER"
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
            rows={5}
            className="w-full border border-gray-200 bg-gray-50 px-4 py-4 rounded-md text-sm leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
            placeholder="Write developer overview..."
          />
        </div>
      </div>

      {/* Statistics */}
      <div className="space-y-8 border-b pb-10">
        <h3 className="text-sm font-black uppercase tracking-[0.3em] text-gray-700">
          Statistics
        </h3>

        <div className="space-y-4">
          {form.stats?.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row md:items-center gap-4 bg-gray-50 border border-gray-100 p-6 rounded-xl shadow-sm"
            >
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                #{i + 1}
              </div>

              <input
                value={stat.value}
                onChange={(e) => handleStatChange(i, 'value', e.target.value)}
                className="border border-gray-200 bg-white px-4 py-3 rounded-md text-sm font-bold w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
                placeholder="Value (e.g. 1.32 LAC)"
              />

              <input
                value={stat.label}
                onChange={(e) => handleStatChange(i, 'label', e.target.value)}
                className="border border-gray-200 bg-white px-4 py-3 rounded-md text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
                placeholder="Label (e.g. sq.ft area)"
              />

              <button
                onClick={() => removeStat(i)}
                className="text-red-500 text-xs font-black uppercase tracking-widest hover:text-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={addStat}
          className="inline-block border border-[#a3e635] text-[#65a30d] hover:bg-[#a3e635] hover:text-black px-6 py-3 rounded-md text-xs font-black uppercase tracking-[0.3em] transition-all duration-300"
        >
          + Add Stat
        </button>
      </div>

      {/* Project Updates */}
      <div className="space-y-8">
        <h3 className="text-sm font-black uppercase tracking-[0.3em] text-gray-700">
          Project Updates
        </h3>

        <div className="space-y-4">
          {form.updates?.map((item, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row md:items-center gap-4 bg-gray-50 border border-gray-100 p-6 rounded-xl shadow-sm"
            >
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                #{i + 1}
              </div>

              <input
                value={item.title}
                onChange={(e) => handleUpdateChange(i, 'title', e.target.value)}
                className="border border-gray-200 bg-white px-4 py-3 rounded-md text-sm font-semibold w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
                placeholder="Title (e.g. Completed)"
              />

              <input
                value={item.sub}
                onChange={(e) => handleUpdateChange(i, 'sub', e.target.value)}
                className="border border-gray-200 bg-white px-4 py-3 rounded-md text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
                placeholder="Subtext (e.g. Tower B)"
              />

              <button
                onClick={() => removeUpdate(i)}
                className="text-red-500 text-xs font-black uppercase tracking-widest hover:text-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={addUpdate}
          className="inline-block border border-[#a3e635] text-[#65a30d] hover:bg-[#a3e635] hover:text-black px-6 py-3 rounded-md text-xs font-black uppercase tracking-[0.3em] transition-all duration-300"
        >
          + Add Update
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

export default DeveloperEditor;
