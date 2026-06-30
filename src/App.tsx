import React, { useEffect, useRef } from 'react';
import { Crown, MapPin, Building2, Zap, Heart, Instagram, Github, Mail } from 'lucide-react';
import HeroSection from './components/HeroSection';
import NostalgiaSection from './components/NostalgiaSection';
import ThenAndNowSection from './components/ThenAndNowSection';
import FutureCitySection from './components/FutureCitySection';
import LetterSection from './components/LetterSection';
import QuoteSection from './components/QuoteSection';
import Footer from './components/Footer';

function App() {
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={appRef} className="min-h-screen bg-gray-50 overflow-x-hidden">
      <HeroSection />
      <NostalgiaSection />
      <ThenAndNowSection />
      <FutureCitySection />
      <LetterSection />
      <QuoteSection />
      <Footer />
    </div>
  );
}

export default App;