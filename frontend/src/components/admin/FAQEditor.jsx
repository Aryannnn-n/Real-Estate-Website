import axios from 'axios';
import { useEffect, useState } from 'react';
import API_URL from '../../config';

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
      await axios.put(`${API_URL}/api/content`, {
        faqs: form,
      });
      alert('FAQs Updated');
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
          FAQ Section
        </h2>
        <p className="text-xs uppercase tracking-widest text-gray-400 mt-2">
          Manage frequently asked questions
        </p>
      </div>

      {/* Section Title */}
      <div className="space-y-3 border-b pb-10">
        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 block">
          Section Title
        </label>
        <input
          name="title"
          value={form.title || ''}
          onChange={handleChange}
          className="w-full border border-gray-200 bg-gray-50 px-4 py-3 rounded-md text-sm font-bold uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
          placeholder="FREQUENTLY ASKED QUESTIONS"
        />
      </div>

      {/* FAQ Items */}
      <div className="space-y-8">
        {form.items?.map((item, i) => (
          <div
            key={i}
            className="bg-gray-50 border border-gray-100 p-8 rounded-xl shadow-sm space-y-5"
          >
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                Question #{i + 1}
              </span>
              <button
                onClick={() => removeItem(i)}
                className="text-red-500 text-xs font-black uppercase tracking-widest hover:text-red-600 transition"
              >
                Remove
              </button>
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 block mb-2">
                Question
              </label>
              <input
                value={item.question}
                onChange={(e) =>
                  handleItemChange(i, 'question', e.target.value)
                }
                className="w-full border border-gray-200 bg-white px-4 py-3 rounded-md text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
                placeholder="Enter question"
              />
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 block mb-2">
                Answer
              </label>
              <textarea
                value={item.answer}
                onChange={(e) => handleItemChange(i, 'answer', e.target.value)}
                rows={4}
                className="w-full border border-gray-200 bg-white px-4 py-4 rounded-md text-sm leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
                placeholder="Enter answer"
              />
            </div>
          </div>
        ))}

        {/* Add FAQ Button */}
        <button
          onClick={addItem}
          className="w-full border-2 border-dashed border-[#a3e635] text-[#65a30d] hover:bg-[#a3e635] hover:text-black py-4 rounded-md text-xs font-black uppercase tracking-[0.3em] transition-all duration-300"
        >
          + Add FAQ
        </button>
      </div>

      {/* Save Button */}
      <div className="pt-8 border-t flex justify-end">
        <button
          onClick={handleSave}
          className="bg-[#a3e635] hover:bg-[#bef264] px-10 py-4 rounded-md shadow-lg font-black text-xs uppercase tracking-[0.3em] transition-all duration-300"
        >
          Save FAQs
        </button>
      </div>
    </div>
  );
};

export default FAQEditor;
