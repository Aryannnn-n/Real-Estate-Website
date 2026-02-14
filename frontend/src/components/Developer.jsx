const Developer = ({ data }) => {
  // Fallback data
  const stats = data?.stats || [
    { label: "Projects", value: "6" },
    { label: "sq. ft. area developed", value: "1.32 LAC" },
    { label: "Happy Families", value: "449+" },
    { label: "sq. ft. ongoing", value: "3.77 LAC" },
    { label: "sq. ft. Area Upcoming", value: "2.7 LAC" },
  ];

  const updates = data?.updates || [
    { title: "Under Construction", sub: "Tower A", image: "/incompleteconstruction.png" },
    { title: "Completed", sub: "Tower B", image: "/completedbuilding.png" },
    { title: "Completed", sub: "Tower C", image: "/completedbuilding.png" },
  ];

  return (
    <section className="py-16 px-6 bg-white font-sans text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif text-[#064e3b] mb-6 font-bold">About Developer</h2>

        <p className="max-w-4xl mx-auto text-sm text-gray-600 leading-relaxed mb-12">
          {data?.description || "Vighnaharta Developers is more than just a real estate company—we are dream weavers, committed to building not just homes, but better lives. With a legacy of expert craftsmanship and a forward-thinking approach, we're transforming skylines and setting new standards in urban living."}
        </p>

        {/* Stats Bar */}
        <div className="bg-[#a8e6cf] rounded-[40px] py-8 px-4 md:px-12 flex flex-wrap justify-center md:justify-between items-center gap-6 shadow-sm mb-20 relative overflow-hidden">
             {/* Decorative top shape/cutout could be added here if needed, but basic rounded bar is good for now */}
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center min-w-[100px]">
              <span className="text-3xl font-black text-[#0f5132]">{stat.value}</span>
              <span className="text-[10px] md:text-xs font-semibold text-[#0f5132] uppercase tracking-wide text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Construction Updates */}
        <h3 className="text-3xl font-serif text-[#064e3b] font-bold mb-10 border-b-2 border-transparent inline-block">
          Construction Updates
        </h3>

        <div className="grid md:grid-cols-3 gap-8 px-4">
          {updates.map((item, i) => (
            <div key={i} className="relative rounded-[30px] overflow-hidden aspect-[4/5] shadow-lg group cursor-pointer">
              <img 
                src={item.image || "/vite.svg"} 
                alt={item.title} 
                className="w-full h-full object-cover bg-gray-300 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                <p className="text-sm opacity-90">{item.sub}</p>
                <button className="mt-4 text-[10px] uppercase font-bold tracking-widest border border-white/50 py-2 px-4 rounded-full hover:bg-white hover:text-black transition-all w-max mx-auto">
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Developer;
