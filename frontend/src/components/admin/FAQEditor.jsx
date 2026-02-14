import axios from 'axios';
import { useEffect, useState } from 'react';

const FAQEditor = ({ content, refresh }) => {
  const [form, setForm] = useState({ title: '', items: [] });

  useEffect(() => {
    if (content?.faqs) {
      setForm(content.faqs);
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
      items: [...form.items, { question: '', answer: '' }],
    });
  };

  const removeItem = (index) => {
    const newItems = form.items.filter((_, i) => i !== index);
    setForm({ ...form, items: newItems });
  };

  const handleSave = async () => {
    try {
      await axios.put('http://localhost:3000/api/content', {
        faqs: form,
      });
      alert('FAQs Updated');
      refresh();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="font-bold text-xl">Edit FAQs</h3>

      <div className="space-y-2">
        <label className="text-xs font-bold">Section Title</label>
        <input
          name="title"
          value={form.title || ''}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="space-y-4">
        {form.items?.map((item, i) => (
          <div key={i} className="border p-4 rounded bg-gray-50 space-y-2">
            <div className="flex justify-between">
              <span className="font-bold text-xs uppercase text-gray-400">Question {i + 1}</span>
              <button onClick={() => removeItem(i)} className="text-red-500 font-bold text-xs">REMOVE</button>
            </div>
            <input
              value={item.question}
              onChange={(e) => handleItemChange(i, 'question', e.target.value)}
              className="w-full border p-2 rounded"
              placeholder="Question"
            />
            <textarea
              value={item.answer}
              onChange={(e) => handleItemChange(i, 'answer', e.target.value)}
              className="w-full border p-2 rounded h-20"
              placeholder="Answer"
            />
          </div>
        ))}
        <button
          onClick={addItem}
          className="w-full border-2 border-dashed border-gray-300 py-2 text-gray-500 font-bold rounded hover:bg-gray-50"
        >
          + Add FAQ
        </button>
      </div>

      <button
        onClick={handleSave}
        className="bg-brand-green px-6 py-2 rounded-md font-bold text-brand-dark"
      >
        Save FAQs
      </button>
    </div>
  );
};

export default FAQEditor;
