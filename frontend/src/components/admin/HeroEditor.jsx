import axios from 'axios';
import { useEffect, useState } from 'react';

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
      await axios.put('http://localhost:3000/api/content', {
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
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        {/* ... existing fields ... */}
        <div className="col-span-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1 block">Heading Line 1</label>
            <input
                name="headingLine1"
                value={form.headingLine1 || ''}
                onChange={handleChange}
                className="w-full border p-2 rounded-md"
                placeholder="THINKING"
            />
        </div>
        
        <div className="col-span-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1 block">Heading Line 2</label>
            <input
                name="headingLine2"
                value={form.headingLine2 || ''}
                onChange={handleChange}
                className="w-full border p-2 rounded-md"
                placeholder="OF A FANTASTIC VICINITY?"
            />
        </div>

        <div>
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1 block">Sub Heading 1</label>
            <input
                name="subHeading1"
                value={form.subHeading1 || ''}
                onChange={handleChange}
                className="w-full border p-2 rounded-md"
                placeholder="20+ Podium..."
            />
        </div>

        <div>
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1 block">Sub Heading 2</label>
            <input
                name="subHeading2"
                value={form.subHeading2 || ''}
                onChange={handleChange}
                className="w-full border p-2 rounded-md"
                placeholder="Spacious Balcony..."
            />
        </div>

        <div>
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1 block">Project Name</label>
            <input
                name="projectName"
                value={form.projectName || ''}
                onChange={handleChange}
                className="w-full border p-2 rounded-md"
                placeholder="INFINITY"
            />
        </div>

        <div>
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1 block">CTA Text</label>
             <input
                name="ctaText"
                value={form.ctaText || ''}
                onChange={handleChange}
                className="w-full border p-2 rounded-md"
                placeholder="Enquiry Now"
            />
        </div>
        
        <div className="col-span-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1 block">Location</label>
            <input
                name="location"
                value={form.location || ''}
                onChange={handleChange}
                className="w-full border p-2 rounded-md"
                placeholder="Location"
            />
        </div>

         {/* <div className="col-span-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1 block">Main Image Path</label>
            <input
                name="image"
                value={form.image || ''}
                onChange={handleChange}
                className="w-full border p-2 rounded-md"
                placeholder="/hero.png"
            />
        </div>
        
         <div className="col-span-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1 block">Background Image Path</label>
            <input
                name="backImage"
                value={form.backImage || ''}
                onChange={handleChange}
                className="w-full border p-2 rounded-md"
                placeholder="/back.png"
            />
        </div> */}
      </div>

     {/* Pricing Section */}
     <div className="border-t pt-6 mt-6">
        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-700 mb-4">Pricing Configuration</h3>
        
        {/* Pricing Item 1 */}
        <div className="grid grid-cols-3 gap-2 mb-4">
             <div className="col-span-3 text-xs font-bold text-gray-400 uppercase">Configuration 1</div>
             <input
                value={form.pricing?.[0]?.title || ''}
                onChange={(e) => handlePricingChange(0, 'title', e.target.value)}
                className="border p-2 rounded-md text-sm"
                placeholder="Title (e.g. Smart 1 BHK)"
            />
             <input
                value={form.pricing?.[0]?.price || ''}
                onChange={(e) => handlePricingChange(0, 'price', e.target.value)}
                className="border p-2 rounded-md text-sm"
                placeholder="Price"
            />
             <input
                value={form.pricing?.[0]?.original || ''}
                onChange={(e) => handlePricingChange(0, 'original', e.target.value)}
                className="border p-2 rounded-md text-sm"
                placeholder="Original Price"
            />
        </div>

         {/* Pricing Item 2 */}
        <div className="grid grid-cols-3 gap-2">
             <div className="col-span-3 text-xs font-bold text-gray-400 uppercase">Configuration 2</div>
             <input
                value={form.pricing?.[1]?.title || ''}
                onChange={(e) => handlePricingChange(1, 'title', e.target.value)}
                className="border p-2 rounded-md text-sm"
                placeholder="Title (e.g. Premium 2 BHK)"
            />
             <input
                value={form.pricing?.[1]?.price || ''}
                onChange={(e) => handlePricingChange(1, 'price', e.target.value)}
                className="border p-2 rounded-md text-sm"
                placeholder="Price"
            />
             <input
                value={form.pricing?.[1]?.original || ''}
                onChange={(e) => handlePricingChange(1, 'original', e.target.value)}
                className="border p-2 rounded-md text-sm"
                placeholder="Original Price"
            />
        </div>
     </div>

      <button
        onClick={handleSave}
        className="bg-brand-green px-6 py-2 rounded-md font-bold"
      >
        Save Hero
      </button>
    </div>
  );
};

export default HeroEditor;
