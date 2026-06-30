import React, { useState } from 'react';
import { ArrowRight, Clock, MapPin } from 'lucide-react';

const ThenAndNowSection = () => {
  const [activeComparison, setActiveComparison] = useState(0);

  const comparisons = [
    {
      title: "Charminar Area",
      then: {
        image: "/charminar_then.jpg",
        description: "The timeless heart of Old City with traditional charm"
      },
      now: {
        image: "/charminar_now.jpg",
        description: "Modern life bustling around the historic monument"
      }
    },
    {
      title: "Laad Bazaar",
      then: {
        image: "/charminar_then.jpg",
        description: "Traditional pearl and bangle market of yesteryears"
      },
      now: {
        image: "/laad_bazaar_now.jpg",
        description: "Heritage market thriving with modern commerce"
      }
    },
    {
      title: "Palace Heritage",
      then: {
        image: "/chowmohalla.jpg",
        description: "Royal grandeur of the Nizami era"
      },
      now: {
        image: "/Falaknuma_Palace_01.jpg",
        description: "Preserved heritage welcoming the modern world"
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="font-heading section-title font-bold text-gray-800 mb-4">
            Life Then & Now
          </h2>
          <div className="font-urdu urdu-medium text-gray-600 mb-6">
            کل اور آج کی زندگی
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            "The soul never changed – only the skin did."
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Comparison Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-white rounded-lg p-2 shadow-lg">
            {comparisons.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveComparison(index)}
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  activeComparison === index
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Active Comparison */}
        <div className="animate-on-scroll opacity-0">
          <h3 className="font-heading text-2xl font-semibold text-center text-gray-800 mb-8">
            {comparisons[activeComparison].title}
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Then */}
            <div className="relative group">
              <div className="absolute -top-4 -left-4 bg-amber-500 text-white px-4 py-2 rounded-lg font-semibold flex items-center space-x-2 z-10">
                <Clock className="w-4 h-4" />
                <span>Then</span>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img
                  src={comparisons[activeComparison].then.image}
                  alt="Then"
                  className="w-full h-80 object-cover filter sepia transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-medium">
                    {comparisons[activeComparison].then.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center lg:flex-col lg:items-center">
              <div className="bg-blue-500 text-white p-4 rounded-full shadow-lg animate-pulse">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>

            {/* Now */}
            <div className="relative group">
              <div className="absolute -top-4 -right-4 bg-teal-500 text-white px-4 py-2 rounded-lg font-semibold flex items-center space-x-2 z-10">
                <MapPin className="w-4 h-4" />
                <span>Now</span>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img
                  src={comparisons[activeComparison].now.image}
                  alt="Now"
                  className="w-full h-80 object-cover transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-medium">
                    {comparisons[activeComparison].now.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Central Quote */}
        <div className="text-center mt-16 animate-on-scroll opacity-0">
          <div className="max-w-3xl mx-auto p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
            <div className="font-urdu urdu-large text-gray-700 mb-4">
              روح کبھی نہیں بدلی، صرف جسم بدلا
            </div>
            <p className="font-heading text-lg italic text-gray-600">
              "The essence remains eternal, only the form evolves"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThenAndNowSection;