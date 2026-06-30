import React from 'react';
import { Crown, Building, Palette, BookOpen } from 'lucide-react';

const NostalgiaSection = () => {
  const monuments = [
    {
      icon: Crown,
      title: "Nizams of Hyderabad",
      description: "Seven rulers who painted the city with pearls and poetry",
      urdu: "موتیوں اور شاعری سے سجا شہر",
      image: "/nizam copy.jpg"
    },
    {
      icon: Building,
      title: "Chowmahalla Palace",
      description: "Where grandeur whispered stories of a golden era",
      urdu: "شان و شوکت کی کہانیاں",
      image: "/chowmohalla.jpg"
    },
    {
      icon: Building,
      title: "Falaknuma Palace",
      description: "The mirror of sky, reflecting dreams of kings",
      urdu: "آسمان کا آئینہ",
      image: "/Falaknuma_Palace_01.jpg"
    },
    {
      icon: Palette,
      title: "Salar Jung Museum",
      description: "A treasure trove where art meets eternity",
      urdu: "فن اور ابدیت کا خزانہ",
      image: "/salaar_jung copy.jpg"
    }
  ];

  return (
    <section className="py-20 bg-vintage relative">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.3) 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }}>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="font-heading section-title font-bold text-amber-900 mb-4">
            Glory of the Past
          </h2>
          <div className="font-urdu urdu-medium text-amber-700 mb-6">
            ماضی کی شان و شوکت
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-red-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {monuments.map((monument, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 bg-white/80 backdrop-blur-sm rounded-lg shadow-vintage p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full">
                  <monument.icon className="w-6 h-6 text-amber-700" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-semibold text-amber-900 mb-2">
                    {monument.title}
                  </h3>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    {monument.description}
                  </p>
                  <div className="font-urdu text-amber-600 text-right">
                    {monument.urdu}
                  </div>
                </div>
              </div>
              
              {/* Image overlay */}
              <div className="mt-4 h-48 rounded-lg overflow-hidden">
                <img 
                  src={monument.image} 
                  alt={monument.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Central Quote */}
        <div className="text-center mt-16 animate-on-scroll opacity-0">
          <div className="max-w-2xl mx-auto p-8 bg-white/60 backdrop-blur-sm rounded-lg shadow-vintage">
            <div className="font-urdu urdu-large text-amber-800 mb-4">
              تاریخ کے اوراق پر لکھی گئی داستان
            </div>
            <p className="font-heading text-lg italic text-gray-700">
              "Stories written on the pages of history"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NostalgiaSection;