import { useState } from "react";

const FloorPlans = ({ data }) => {
  const [selectedType, setSelectedType] = useState(0);

  // Fallback data if props are missing
  const wings = data?.wings || ["East Wing", "West Wing", "North Wing", "South Wing"];
  const types = data?.types || [
    { name: "1 BHK", area: "380-411 RCA Sq.ft", price: "Click for price" },
    { name: "2 BHK", area: "580-611 RCA Sq.ft", price: "Click for price" },
    { name: "5,6 BHK", area: "1100-1400 RCA Sq.ft", price: "Click for price" },
  ];
  
  const currentType = types[selectedType];

  return (
    <section className="bg-[#bbf7d040] py-16 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Navigation Wings */}
        <div className="flex justify-end gap-6 mb-4 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-200 pb-2">
          <span className="cursor-pointer hover:text-brand-dark">All</span>
          {wings.map((wing, i) => (
            <span
              key={i}
              className={`cursor-pointer transition-colors ${
                i === 0 ? "text-brand-dark border-b-2 border-brand-dark pb-2 -mb-2.5" : "hover:text-brand-dark"
              }`}
            >
              {wing}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          
          {/* Left: Large Floor Plan Image */}
          <div className="bg-white p-6 rounded-[30px] shadow-sm aspect-square flex items-center justify-center relative">
            <img
              src={data?.viewImage || "/internalview.png"}
              alt="Floor Plan View"
              className="w-[80%] h-[80%] object-contain opacity-100"
            />
            {/* Placeholder overlay if no real image */}
             {!data?.viewImage && (
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-gray-300 font-bold text-lg uppercase tracking-widest opacity-30">
                {currentType?.name} Plan
              </span>
            </div>
             )}
          </div>

          {/* Right: Controls & Details */}
          <div className="flex flex-col items-center">
            
            {/* Main Details Card */}
            <div className="bg-white p-8 rounded-[30px] shadow-sm w-full max-w-sm text-center mb-6">
              
              {/* Type Buttons */}
              <div className="flex justify-center gap-3 mb-6">
                {types.map((type, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedType(i)}
                    className={`px-4 py-1.5 rounded-md text-sm font-semibold shadow-sm transition-all ${
                      selectedType === i
                        ? "bg-[#4fd1c5] text-white shadow-md transform scale-105"
                        : "bg-[#b2f5ea] text-[#00695c] hover:bg-[#81e6d9]"
                    }`}
                  >
                    {type.name}
                  </button>
                ))}
              </div>

              {/* Text Details */}
              <div className="space-y-3 mb-8 text-[#2d3748]">
                <h3 className="text-lg font-bold text-gray-700">
                  Type- {currentType?.name}
                </h3>
                <p className="text-sm font-medium text-gray-600">
                  Area- {currentType?.area}
                </p>
                <p className="text-sm font-medium text-gray-600">
                  Price - {currentType?.price}
                </p>
              </div>

              {/* Download Button */}
              <button className="bg-gradient-to-r from-[#a3e635] to-[#4ade80] text-brand-dark px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wide shadow-md hover:shadow-lg hover:scale-105 transition-all">
                Download Floor Plan
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4">
              {types.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedType(i)}
                  className={`w-20 h-20 bg-white rounded-xl border-2 p-2 cursor-pointer transition-all ${
                    selectedType === i
                      ? "border-[#4fd1c5] shadow-md scale-105"
                      : "border-transparent hover:border-gray-200"
                  }`}
                >
                  <img
                    src="/vite.svg"
                    alt="Thumbnail"
                    className="w-full h-full object-contain opacity-50"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="max-w-6xl mx-auto mt-16 px-4">
         <div className="w-full h-[400px] rounded-[40px] overflow-hidden relative group cursor-pointer shadow-lg">
           <img
             src={data?.videoThumb || "/township.png"} 
             className="w-full h-full object-cover bg-gray-200"
             alt="Video Thumbnail"
           />
           {/* Play Button Overlay */}
           <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
             <div className="w-20 h-20 rounded-full border-[3px] border-black flex items-center justify-center bg-transparent group-hover:bg-black/10 transition-colors">
               <svg 
                 xmlns="http://www.w3.org/2000/svg" 
                 fill="none" 
                 viewBox="0 0 24 24" 
                 strokeWidth={2} 
                 stroke="currentColor" 
                 className="w-10 h-10 text-black ml-1"
               >
                 <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
               </svg>
             </div>
           </div>
         </div>
      </div>
    </section>
  );
};

export default FloorPlans;
