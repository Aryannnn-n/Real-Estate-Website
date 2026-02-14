const About = ({ data }) => {
  return (
    <section className="bg-[#e0f7f1] pt-16 pb-24 px-6 lg:px-20 font-sans relative overflow-hidden">
       {/* Decorative Background Elements */}
       <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* Left: Image Cluster */}
        <div className="relative flex justify-center md:justify-end pr-10">
          {/* Main Large Circle */}
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border-[8px] border-white shadow-2xl overflow-hidden relative z-10">
            <img src={data?.images?.[0] || "/vite.svg"} alt="Project View" className="w-full h-full object-cover" />
          </div>
          
          {/* Secondary Medium Circle (Bottom Left overlap) */}
          <div className="absolute -bottom-10 left-0 md:left-10 w-40 h-40 md:w-56 md:h-56 rounded-full border-[6px] border-white shadow-xl overflow-hidden z-20">
             <img src={data?.images?.[1] || "/vite.svg"} alt="Interior View" className="w-full h-full object-cover bg-gray-200" />
          </div>

          {/* Small Circle (Top Right overlap) */}
          <div className="absolute top-10 -right-4 w-24 h-24 rounded-full border-[4px] border-white shadow-lg overflow-hidden z-0 opacity-80">
             <img src={data?.images?.[2] || "/vite.svg"} alt="Detail View" className="w-full h-full object-cover bg-brand-green/20" />
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="text-brand-dark">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-[#064e3b]">
            {data?.title || "About Project"}
          </h2>

          <div className="space-y-6 text-gray-700 text-sm leading-7 max-w-lg">
            <p>
              {data?.description || "At Vighnaharta Enclave, every detail reflects the grandest gesture of life in the most authentic and desirable home. Guided by a humanist approach, the architecture places people at the heart of the space. Built on the foundations of comfort, it evokes a true sense of freedom, protection, and belonging."}
            </p>
            <p className="italic text-gray-500 border-l-4 border-brand-green pl-4">
              "{data?.highlightQuote || "The moment I entered the house, it felt welcomed — this feeling defines the privilege Vighnaharta Enclave offers."}"
            </p>
          </div>

          <button className="mt-10 bg-gradient-to-r from-[#bef264] to-[#86efac] text-brand-dark px-8 py-3.5 rounded-lg font-bold text-xs uppercase tracking-widest shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            {data?.buttonText || "Download Brochure"}
          </button>
        </div>
      </div>
    </section>
  );
};


export default About;