import { useState } from "react";

const FAQ = ({ data }) => {
  const [open, setOpen] = useState(null);

  // Fallback items if data is missing or empty
  const items = data?.items || [];

  return (
    <section className="bg-white py-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-serif text-center mb-16 font-bold text-[#064e3b] border-b-2 border-transparent inline-block w-full">
          {data?.title || "Frequently Asked Questions"}
        </h2>

        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className={`w-full text-left py-4 px-6 flex justify-between items-center transition-colors rounded-lg ${
                  open === i ? "bg-[#a8e6cf] shadow-md" : "bg-[#cbf7e6] hover:bg-[#a8e6cf]"
                }`}
              >
                <span className="text-xs md:text-sm font-bold text-[#064e3b] pr-4">{item.question}</span>
                <span className="text-2xl font-light text-[#064e3b] leading-none">
                  {open === i ? "−" : "+"}
                </span>
              </button>

              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  open === i ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
              >
                <p className="p-6 bg-gray-50 rounded-lg text-sm text-gray-600 border border-gray-100">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
