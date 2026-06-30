import React from 'react';
import { Building2, Zap, Train, Cpu, Wifi, Rocket } from 'lucide-react';

const FutureCitySection = () => {
  const futureLandmarks = [
    {
      icon: Building2,
      title: "Cyber Towers",
      description: "The silicon dreams reaching for the sky",
      tech: "IT Hub"
    },
    {
      icon: Cpu,
      title: "T-Hub",
      description: "Where innovation meets tradition",
      tech: "Innovation"
    },
    {
      icon: Building2,
      title: "Raheja Mindspace",
      description: "Corporate corridors of tomorrow",
      tech: "Business"
    },
    {
      icon: Train,
      title: "Hyderabad Metro",
      description: "Connecting hearts across the city",
      tech: "Transport"
    },
    {
      icon: Zap,
      title: "Smart City 2030",
      description: "Digital transformation meets cultural heritage",
      tech: "Future"
    },
    {
      icon: Rocket,
      title: "Startup Ecosystem",
      description: "Young minds crafting tomorrow's solutions",
      tech: "Innovation"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-teal-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-500"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="font-heading section-title font-bold text-white mb-4">
            The Future City
          </h2>
          <div className="font-urdu urdu-medium text-blue-300 mb-6">
            مستقبل کا شہر
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Where technology dances with tradition, creating symphonies of progress
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Future Landmarks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {futureLandmarks.map((landmark, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 bg-glass rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full group-hover:rotate-12 transition-transform duration-300">
                  <landmark.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-heading text-lg font-semibold text-white">
                      {landmark.title}
                    </h3>
                    <span className="text-xs bg-teal-500/20 text-teal-300 px-2 py-1 rounded-full">
                      {landmark.tech}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {landmark.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vision 2030 */}
        <div className="text-center animate-on-scroll opacity-0">
          <div className="max-w-4xl mx-auto p-8 bg-glass rounded-lg border border-white/20">
            <h3 className="font-heading text-2xl font-bold text-white mb-6">
              Smart City Vision 2030
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <Wifi className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <h4 className="text-white font-semibold mb-2">Digital Infrastructure</h4>
                <p className="text-gray-300 text-sm">Seamless connectivity across the city</p>
              </div>
              <div className="p-4">
                <Zap className="w-8 h-8 text-teal-400 mx-auto mb-2" />
                <h4 className="text-white font-semibold mb-2">Sustainable Energy</h4>
                <p className="text-gray-300 text-sm">Green technology for a cleaner tomorrow</p>
              </div>
              <div className="p-4">
                <Building2 className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <h4 className="text-white font-semibold mb-2">Smart Governance</h4>
                <p className="text-gray-300 text-sm">Efficient public services and administration</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/10 rounded-lg">
              <div className="font-urdu urdu-large text-blue-300 mb-4">
                کل کا خواب، آج کی حقیقت
              </div>
              <p className="font-heading text-lg italic text-white">
                "Yesterday's dream, today's reality"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureCitySection;