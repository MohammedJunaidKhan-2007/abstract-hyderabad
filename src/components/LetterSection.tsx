import React from 'react';
import { Heart, Star } from 'lucide-react';

const LetterSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 relative">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 opacity-20">
          <Star className="w-6 h-6 text-rose-400 animate-pulse" />
        </div>
        <div className="absolute top-32 right-20 opacity-20">
          <Heart className="w-8 h-8 text-pink-400 animate-pulse delay-1000" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-20">
          <Star className="w-4 h-4 text-orange-400 animate-pulse delay-500" />
        </div>
        <div className="absolute bottom-32 right-10 opacity-20">
          <Heart className="w-6 h-6 text-rose-400 animate-pulse delay-1500" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="font-heading section-title font-bold text-rose-800 mb-4">
            A Letter to Hyderabad
          </h2>
          <div className="font-urdu urdu-medium text-rose-600 mb-6">
            حیدرآباد کے نام خط
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-orange-400 mx-auto rounded-full"></div>
        </div>

        <div className="animate-on-scroll opacity-0">
          <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-8 md:p-12 relative">
            {/* Decorative Quote Marks */}
            <div className="absolute -top-4 -left-4 text-6xl text-rose-300 font-serif">"</div>
            <div className="absolute -bottom-8 -right-4 text-6xl text-rose-300 font-serif">"</div>
            
            <div className="space-y-8">
              {/* English Letter */}
              <div className="text-center">
                <p className="font-heading text-xl md:text-2xl text-gray-800 leading-relaxed italic">
                  Hyderabad, you raised us with dust, dreams, and dua.
                </p>
              </div>
              
              {/* Urdu Translation */}
              <div className="text-center border-t border-rose-200 pt-8">
                <div className="font-urdu urdu-large text-rose-700 leading-relaxed">
                  حیدرآباد، تم نے ہمیں خاک، خوابوں اور دعاؤں سے پالا ہے
                </div>
              </div>
              
              {/* Personal Message */}
              <div className="text-center border-t border-rose-200 pt-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  In your narrow lanes, we found wide dreams. In your old stones, we discovered timeless stories. 
                  In your bustling streets, we heard the whispers of centuries.
                </p>
                
                <div className="font-urdu urdu-medium text-rose-600 mb-6">
                  ہم نے وقت کے اوراق پر شہر کی کہانی لکھی ہے
                </div>
                
                <p className="font-heading text-lg italic text-gray-600">
                  "We have written the city's story on the pages of time"
                </p>
              </div>
              
              {/* Signature */}
              <div className="text-center border-t border-rose-200 pt-8">
                <p className="text-gray-600 mb-2">With love and gratitude,</p>
                <p className="font-heading text-xl font-semibold text-rose-800">
                  Arif & Junaid
                </p>
                <div className="font-urdu text-rose-600 mt-2">
                  محبت اور شکرگزاری کے ساتھ
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Poetic Elements */}
        <div className="mt-16 text-center animate-on-scroll opacity-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-lg">
              <Heart className="w-8 h-8 text-rose-500 mx-auto mb-4" />
              <p className="text-sm text-gray-700 font-medium">Your heritage is our heartbeat</p>
              <div className="font-urdu text-rose-600 text-sm mt-2">
                تمہاری وراثت ہماری دھڑکن ہے
              </div>
            </div>
            
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-lg">
              <Star className="w-8 h-8 text-orange-500 mx-auto mb-4" />
              <p className="text-sm text-gray-700 font-medium">Your dreams light our path</p>
              <div className="font-urdu text-orange-600 text-sm mt-2">
                تمہارے خواب ہمارا راستہ روشن کرتے ہیں
              </div>
            </div>
            
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-lg">
              <Heart className="w-8 h-8 text-pink-500 mx-auto mb-4" />
              <p className="text-sm text-gray-700 font-medium">Your spirit is our strength</p>
              <div className="font-urdu text-pink-600 text-sm mt-2">
                تمہاری روح ہماری طاقت ہے
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetterSection;