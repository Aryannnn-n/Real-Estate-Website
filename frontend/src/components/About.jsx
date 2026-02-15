const About = ({ data }) => {
  return (
    <section className="bg-[#e0f7f1] pt-16 pb-24 px-6 lg:px-20 font-sans relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* Left: Image Cluster */}
        <div className="relative flex justify-center md:justify-end pr-10">
          {/* Main Large Circle */}
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full  shadow-2xl overflow-hidden relative z-10">
            <img
              src={data?.images?.[0]}
              alt="Project View"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Secondary Medium Circle (Bottom Left overlap) */}
          <div className="absolute -top-4 left-0 md:left-25 w-40 h-40 md:w-40 md:h-40 rounded-full border-[8px] border-brand-light shadow-xl overflow-hidden z-20">
            <img
              src={data?.images?.[1]}
              alt="Interior View"
              className="w-full h-full object-cover bg-gray-200"
            />
          </div>

          {/* Small Circle (Top Right overlap) */}
          <div className="absolute bottom-8 -right-0 w-30 h-30 rounded-full border-[8px] border-brand-light shadow-lg overflow-hidden z-20 opacity-80">
            <img
              src={data?.images?.[2]}
              alt="Detail View"
              className="w-full h-full object-cover bg-brand-green/20"
            />
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="text-brand-dark">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-[#064e3b]">
            {data?.title || 'About Project'}
          </h2>

          <div className="space-y-6 text-gray-700 text-sm leading-7 max-w-lg">
            <p>
              {data?.description ||
                'At Vighnaharta Enclave, every detail reflects the grandest gesture of life in the most authentic and desirable home. Guided by a humanist approach, the architecture places people at the heart of the space. Built on the foundations of comfort, it evokes a true sense of freedom, protection, and belonging.'}
            </p>
            <p className="italic text-gray-500 border-l-4 border-brand-green pl-4">
              "
              {data?.highlightQuote ||
                'The moment I entered the house, it felt welcomed — this feeling defines the privilege Vighnaharta Enclave offers.'}
              "
            </p>
          </div>

          <button className="mt-10 bg-gradient-to-r from-[#bef264] to-[#86efac] text-brand-dark px-8 py-3.5 rounded-lg font-bold text-xs uppercase tracking-widest shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            {data?.buttonText || 'Download Brochure'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
