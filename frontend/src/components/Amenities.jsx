const Amenities = ({ data }) => {
  // Fallback data
  const items = data?.items || [
    { name: "Gymnasium", icon: "💪" },
    { name: "Kids Play Area", icon: "🎢" },
    { name: "Jogging Track", icon: "🏃" },
    { name: "Yoga Deck", icon: "🧘" },
  ];

  const buildings = data?.buildings || [
    { name: "Vighnaharta Aaradhya", status: "Completed", image: "/completedbuilding.png" },
    { name: "Vighnaharta Enclave", status: "Newly Launched", image: "/township.png" },
    { name: "Vighnaharta Infinity", status: "Upcoming", image: "/hero.png" },
  ];

  return (
    <section className="bg-[#e0f7f1] py-20 font-sans">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <h2 className="text-4xl font-serif text-[#064e3b] font-bold mb-4">Amenities</h2>
        <p className="text-sm text-gray-600 mb-12 max-w-2xl">
          {data?.description || "Thoughtfully crafted surroundings that reflect tradition, comfort, and a human-centered design approach."}
        </p>

        {/* Main Content: Split Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Left: Featured Image */}
          <div className="rounded-[40px] overflow-hidden shadow-2xl aspect-square relative group">
            <img 
              src={data?.image || "/anemities.png"} 
              className="w-full h-full object-cover bg-gray-300 transition-transform duration-700 group-hover:scale-105" 
              alt="Amenities View" 
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* Right: Grid of Icons */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            {items.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-24 h-24 rounded-full bg-white border-2 border-dashed border-[#064e3b]/20 flex items-center justify-center text-4xl shadow-sm group-hover:shadow-md group-hover:border-[#064e3b] transition-all duration-300 mb-4 text-[#064e3b]">
                  {/* Using Emojis as placeholders but styled properly. In a real scenario, use SVGs */}
                  <span className="group-hover:scale-110 transition-transform">{item.icon}</span>
                </div>
                <p className="text-sm font-bold text-[#064e3b] uppercase tracking-wide">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Explore More Buildings Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-serif text-[#064e3b] font-bold text-center mb-12">
            Explore More Buildings in the Township
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {buildings.map((b, i) => (
              <div key={i} className="rounded-[40px] overflow-hidden shadow-lg relative aspect-[3/4] group cursor-pointer bg-white">
                <img 
                  src={b.image} 
                  alt={b.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity bg-brand-light" 
                />
                
                {/* Navigation Arrows (Visual only for now) */}
                 {i === 2 && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 cursor-pointer">
                    ▶
                  </div>
                )}
                 {i === 0 && (
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 cursor-pointer">
                    ◀
                  </div>
                )}

                {/* Bottom Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
                  <div className={`px-4 py-2 rounded-lg text-center backdrop-blur-sm border border-white/20 shadow-lg ${
                    b.status.includes("Newly") ? "bg-[#bbf7d0]/90 text-brand-dark" : "bg-gray-100/90 text-gray-800"
                  }`}>
                    <p className="text-[10px] uppercase font-bold tracking-widest mb-0.5">
                      {b.status}
                    </p>
                    <p className="text-sm font-bold truncate">
                      - {b.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Amenities;