import React from 'react';
import { Heart, Instagram, Github, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(128, 0, 32, 0.3) 0%, transparent 50%)`
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="text-center mb-12">
          <div className="animate-on-scroll opacity-0">
            {/* Logo/Title */}
            <div className="mb-8">
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-gradient mb-4">
                From the Soul of the City
              </h3>
              <div className="font-urdu urdu-large text-amber-300">
                شہر کی روح سے
              </div>
            </div>
            
            {/* Credits */}
            <div className="mb-8">
              <p className="text-xl text-gray-300 mb-2">Created with</p>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Heart className="w-5 h-5 text-red-400 animate-pulse" />
                <span className="text-lg">by</span>
                <Heart className="w-5 h-5 text-red-400 animate-pulse" />
              </div>
              <div className="font-heading text-2xl font-semibold text-white">
                Arif & Junaid
              </div>
              <div className="font-urdu text-amber-300 mt-2">
                عارف اور جنید
              </div>
            </div>
            
            {/* Institution */}
            <div className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Powered by</span>
              </div>
              <div className="font-semibold text-white">CSAI, MJCET</div>
              <div className="font-urdu text-blue-300 text-sm mt-1">
                محمد جناح کالج آف انجینئرنگ اینڈ ٹیکنالوجی
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="animate-on-scroll opacity-0">
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="#" 
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 group"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-pink-400 group-hover:text-pink-300" />
            </a>
            <a 
              href="#" 
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 group"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-gray-400 group-hover:text-gray-300" />
            </a>
            <a 
              href="#" 
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 group"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
            </a>
          </div>
        </div>
        
        {/* Final Quote */}
        <div className="text-center border-t border-gray-700 pt-8 animate-on-scroll opacity-0">
          <div className="max-w-2xl mx-auto">
            <div className="font-urdu urdu-medium text-gray-400 mb-4">
              محبت میں ڈوبا ہوا شہر، یادوں میں بسا ہوا خواب
            </div>
            <p className="font-heading text-sm italic text-gray-500">
              "A city drenched in love, a dream nestled in memories"
            </p>
          </div>
          
          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © 2024 Arif & Junaid. Made with love for Hyderabad.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;