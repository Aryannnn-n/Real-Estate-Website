import axios from 'axios';
import { useEffect, useState } from 'react';
import API_URL from '../../config';

const HeroEditor = ({ content, refresh }) => {
  const [form, setForm] = useState({});

  useEffect(() => {
    if (content?.hero) {
      setForm(content.hero);
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
        hero: form,
      });

      alert('Hero Updated Successfully');
      refresh();
    } catch (err) {
      console.error(err);
    }
  };

  const handlePricingChange = (index, field, value) => {
    const newPricing = [...(form.pricing || [])];
    if (!newPricing[index]) newPricing[index] = {};
    newPricing[index][field] = value;
    setForm({ ...form, pricing: newPricing });
  };

  if (!form) return null;

  return (
    <div className="w-full max-w-none bg-white p-8 md:p-14 rounded-none md:rounded-xl shadow-lg border border-gray-100 space-y-12">
      {/* Section Header */}
      <div className="border-b pb-6">
        <h2 className="text-lg font-black uppercase tracking-[0.3em] text-gray-800">
          Hero Configuration
        </h2>
        <p className="text-xs uppercase tracking-widest text-gray-400 mt-2">
          Update homepage hero section content
        </p>
      </div>

      {/* Main Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Heading Line 1 */}
        <div className="md:col-span-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 block mb-2">
            Heading Line 1
          </label>
          <input
            name="headingLine1"
            value={form.headingLine1 || ''}
            onChange={handleChange}
            className="w-full border border-gray-200 bg-gray-50 px-4 py-3 rounded-md text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
            placeholder="THINKING"
          />
        </div>

        {/* Heading Line 2 */}
        <div className="md:col-span-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 block mb-2">
            Heading Line 2
          </label>
          <input
            name="headingLine2"
            value={form.headingLine2 || ''}
            onChange={handleChange}
            className="w-full border border-gray-200 bg-gray-50 px-4 py-3 rounded-md text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
            placeholder="OF A FANTASTIC VICINITY?"
          />
        </div>

        {/* Sub Headings */}
        <div>
          <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 block mb-2">
            Sub Heading 1
          </label>
          <input
            name="subHeading1"
            value={form.subHeading1 || ''}
            onChange={handleChange}
            className="w-full border border-gray-200 bg-gray-50 px-4 py-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
            placeholder="20+ Podium..."
          />
        </div>

        <div>
          <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 block mb-2">
            Sub Heading 2
          </label>
          <input
            name="subHeading2"
            value={form.subHeading2 || ''}
            onChange={handleChange}
            className="w-full border border-gray-200 bg-gray-50 px-4 py-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
            placeholder="Spacious Balcony..."
          />
        </div>

        {/* Project Name */}
        <div>
          <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 block mb-2">
            Project Name
          </label>
          <input
            name="projectName"
            value={form.projectName || ''}
            onChange={handleChange}
            className="w-full border border-gray-200 bg-gray-50 px-4 py-3 rounded-md text-sm font-bold uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
            placeholder="INFINITY"
          />
        </div>

        {/* CTA */}
        <div>
          <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 block mb-2">
            CTA Text
          </label>
          <input
            name="ctaText"
            value={form.ctaText || ''}
            onChange={handleChange}
            className="w-full border border-gray-200 bg-gray-50 px-4 py-3 rounded-md text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
            placeholder="Enquiry Now"
          />
        </div>

        {/* Location */}
        <div className="md:col-span-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 block mb-2">
            Location
          </label>
          <input
            name="location"
            value={form.location || ''}
            onChange={handleChange}
            className="w-full border border-gray-200 bg-gray-50 px-4 py-3 rounded-md text-sm uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
            placeholder="Location"
          />
        </div>
      </div>

      {/* Pricing Section */}
      <div className="border-t pt-10 space-y-8">
        <h3 className="text-sm font-black uppercase tracking-[0.3em] text-gray-700">
          Pricing Configuration
        </h3>

        {[0, 1].map((index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-100 rounded-xl p-6 space-y-4 shadow-sm"
          >
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
              Configuration {index + 1}
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <input
                value={form.pricing?.[index]?.title || ''}
                onChange={(e) =>
                  handlePricingChange(index, 'title', e.target.value)
                }
                className="border border-gray-200 bg-white px-4 py-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
                placeholder="Title (e.g. Smart 1 BHK)"
              />

              <input
                value={form.pricing?.[index]?.price || ''}
                onChange={(e) =>
                  handlePricingChange(index, 'price', e.target.value)
                }
                className="border border-gray-200 bg-white px-4 py-3 rounded-md text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
                placeholder="Price"
              />

              <input
                value={form.pricing?.[index]?.original || ''}
                onChange={(e) =>
                  handlePricingChange(index, 'original', e.target.value)
                }
                className="border border-gray-200 bg-white px-4 py-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
                placeholder="Original Price"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Save Button */}
      <div className="pt-6 border-t flex justify-end">
        <button
          onClick={handleSave}
          className="bg-[#a3e635] hover:bg-[#bef264] px-10 py-4 rounded-md shadow-lg font-black text-xs uppercase tracking-[0.3em] transition-all duration-300"
        >
          Save Hero
        </button>
      </div>
    </div>
  );
};

export default HeroEditor;
