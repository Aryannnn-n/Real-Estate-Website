const Hero = ({ data }) => {
  return (
    <section className="relative font-sans text-brand-dark bg-white overflow-hidden">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 lg:px-20 py-6 bg-white sticky top-0 z-[100] shadow-sm">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder - Lime Roofing */}
          <div className="flex flex-col items-center">
             <img src="/vite.svg" alt="Lime Roofing" className="h-8 w-8 mb-1" />
             <span className="text-[10px] font-bold uppercase tracking-widest text-green-600">Lime Roofing</span>
          </div>
        </div>

        <div className="hidden lg:flex gap-8 text-[11px] font-bold uppercase tracking-wider text-gray-700 items-center">
          {data?.navItems?.map((item, i) => (
            <a
              key={i}
              href="#"
              className="hover:text-brand-green transition-all"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="bg-[#a3e635] px-8 py-3 rounded-md shadow-lg font-bold text-xs uppercase tracking-widest hover:bg-[#bef264] transition-colors">
          {data?.ctaText || "Enquiry Now"}
        </button>
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col md:flex-row min-h-[600px] w-full">
        
        {/* Left: Image & Text Overlay */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center overflow-hidden bg-slate-50 p-10">
          <div className="absolute inset-0">
             <img
              src={data?.backImage || "/vite.svg"}
              className="w-full h-full object-cover opacity-60 mix-blend-multiply"
              alt="Hero Background"
            />
             <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent"></div>
          </div>

          <div className="relative z-10 text-left md:ml-12 max-w-lg">
            <h2 className="text-3xl md:text-5xl font-serif leading-tight">
              <span className="block font-bold text-[#8B4513] opacity-80 mb-2 tracking-wide">
                {data?.headingLine1 || "THINKING"}
              </span>
              <span className="text-[#8B0000] block font-black uppercase tracking-tight">
                {data?.headingLine2 || "OF A FANTASTIC VICINITY?"}
              </span>
            </h2>

            <div className="flex flex-wrap gap-4 mt-8 text-[10px] font-black uppercase tracking-[0.15em] text-gray-800">
              <span className="bg-white/80 px-2 py-1 shadow-sm border border-gray-200">{data?.subHeading1 || "20+ Podium Luxurious Amenities"}</span>
              <span className="bg-white/80 px-2 py-1 shadow-sm border border-gray-200">{data?.subHeading2 || "Spacious Balcony Homes*"}</span>
            </div>
            
            {/* Image Placeholder imitating the screenshot's building render */}
            <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-500">
               <img src={data?.image || "/vite.svg"} className="w-full h-64 object-cover bg-gray-200" alt="Building Render" />
            </div>
          </div>
        </div>

        {/* Right: Branding & Pricing */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-12 text-center bg-white relative">
           {/* Tree Icon / Logo above title */}
           <div className="mb-6 opacity-80">
             <img src="/vite.svg" className="w-16 h-16 mx-auto mb-2" alt="Tree Icon" />
           </div>

           <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-2">
             VIGHNAHARTA
           </h3>
          <h1 className="text-5xl md:text-7xl font-serif tracking-widest text-gray-800 mb-12">
            {data?.projectName || "INFINITY"}
          </h1>

          <div className="flex flex-col md:flex-row w-full max-w-2xl justify-center items-center divide-y md:divide-y-0 md:divide-x divide-gray-300 gap-8 md:gap-0">
            {(data?.pricing || [
              { title: "Smart 1 BHK", price: "69.99 Lacs*", original: "74.99 Lacs" },
              { title: "Premium 2 BHK", price: "96.99 Lacs*", original: "1.05 CR" }
            ]).map((item, i) => (
              <div key={i} className="px-8 text-center">
                <p className="text-sm font-black uppercase tracking-widest mb-3 text-gray-700">
                  {item.title}
                </p>
                
                {/* Price Display */}
                <div className="flex flex-col items-center">
                  {item.original && (
                     <span className="text-red-500 line-through text-sm font-bold mb-1 opacity-70">@ {item.original}</span>
                  )}
                  <span className="text-3xl font-black text-brand-dark">
                    ₹ {item.price.replace('₹', '').trim()}
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400 mt-2">
                    onwards
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex items-center gap-3 text-left bg-gray-50 px-6 py-3 rounded-full border border-gray-100 shadow-sm">
            <div className="text-red-600 text-2xl animate-bounce">📍</div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Location</span>
              <p className="text-xs font-black leading-tight tracking-wider text-gray-800 uppercase">
                {data?.location || "BLDG. NO. 223/224, KANNAMWAR NAGAR 1, VIKHROLI (EAST)"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
