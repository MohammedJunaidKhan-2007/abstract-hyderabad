import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-amber-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border-2 border-red-400 rounded-full animate-pulse delay-1000"></div>
      </div>
      
      {/* Charminar Silhouette */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="w-96 h-96 animate-float">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path
              d="M100 20 L80 40 L80 180 L120 180 L120 40 Z M60 60 L60 180 L80 180 L80 60 Z M120 60 L120 180 L140 180 L140 60 Z M100 20 L90 35 L110 35 Z"
              fill="currentColor"
              className="text-amber-600"
            />
            <circle cx="70" cy="50" r="8" fill="currentColor" className="text-amber-600" />
            <circle cx="130" cy="50" r="8" fill="currentColor" className="text-amber-600" />
            <circle cx="100" cy="25" r="6" fill="currentColor" className="text-amber-600" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-on-scroll opacity-0">
          <h1 className="font-heading hero-title font-bold text-gradient mb-6 leading-tight">
            Hyderabad
          </h1>
          <p className="font-heading text-2xl md:text-3xl text-amber-800 mb-4 italic">
            Etched in Time
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-8 font-light">
            A vision reimagined by two hearts, one city
          </p>
          
          {/* Urdu Subtitle */}
          <div className="font-urdu urdu-medium text-amber-700 mb-12">
            شہر کی روح سے - عارف اور جنید
          </div>
          
          {/* CTA */}
          <div className="animate-bounce">
            <p className="text-sm text-gray-600 mb-2">Scroll to walk through memory</p>
            <ChevronDown className="w-6 h-6 mx-auto text-amber-600" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-16 h-16 border-l-2 border-t-2 border-amber-400 opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border-r-2 border-b-2 border-red-400 opacity-30"></div>
    </section>
  );
};

export default HeroSection;