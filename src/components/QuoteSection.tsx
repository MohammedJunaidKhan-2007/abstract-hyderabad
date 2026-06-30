import React from 'react';

const QuoteSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`
            }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="animate-on-scroll opacity-0">
          {/* Main Urdu Quote */}
          <div className="mb-12">
            <div className="font-urdu text-4xl md:text-6xl lg:text-7xl text-white leading-relaxed font-bold">
              یادوں کی گلیوں میں بسا ایک خواب
            </div>
            <div className="font-urdu text-2xl md:text-4xl lg:text-5xl text-amber-300 mt-6 leading-relaxed">
              حیدرآباد
            </div>
          </div>
          
          {/* English Translation */}
          <div className="mb-12">
            <p className="font-heading text-xl md:text-2xl lg:text-3xl text-amber-100 italic leading-relaxed">
              "A dream nestled in the lanes of memory"
            </p>
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-white font-bold mt-4">
              Hyderabad
            </p>
          </div>
          
          {/* Decorative Element */}
          <div className="flex justify-center items-center space-x-4 mb-12">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-amber-400"></div>
            <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-amber-400 to-red-400"></div>
            <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse delay-500"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-red-400 to-transparent"></div>
          </div>
          
          {/* Poetic Description */}
          <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <p className="text-lg md:text-xl text-amber-100 leading-relaxed mb-6">
              In every minaret's call, in every pearl's gleam, in every biryani's aroma, 
              lies the essence of a city that bridges time itself.
            </p>
            
            <div className="font-urdu urdu-medium text-amber-200 leading-relaxed">
              ہر مینار کی آواز میں، ہر موتی کی چمک میں، ہر بریانی کی خوشبو میں
              <br />
              وقت کو جوڑنے والے شہر کا جوہر چھپا ہے
            </div>
          </div>
          
          {/* Final Flourish */}
          <div className="mt-12">
            <div className="inline-flex items-center space-x-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-ping"></div>
              <div className="w-2 h-2 bg-red-400 rounded-full animate-ping delay-300"></div>
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping delay-600"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;