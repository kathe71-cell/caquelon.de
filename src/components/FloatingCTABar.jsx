import React, { useState, useEffect } from 'react';
import { ShoppingCart, Star, ShieldCheck, X } from 'lucide-react';
import CTAButton from './CTAButton';

export default function FloatingCTABar({ 
  title = "Auf der Suche nach dem besten Fonduetopf?", 
  subtitle = "Kuhn Rikon 'Zermatt' - Testsieger 2026 bei Amazon",
  link = "https://amzn.to/4oVKIMA"
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating bar after scrolling down 400px
      if (window.scrollY > 400 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <aside 
      role="region"
      aria-label="Schnell-Kauf Empfehlung"
      aria-live="polite"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-40 bg-stone-900/95 backdrop-blur-md text-white rounded-2xl p-4 shadow-2xl border border-stone-700/60 transition-all duration-500"
    >
      <button 
        onClick={() => setIsDismissed(true)}
        className="absolute top-2 right-2 text-stone-400 hover:text-white p-1 rounded-full hover:bg-stone-800 transition"
        aria-label="Schließen"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-800 to-amber-600 flex items-center justify-center font-bold text-lg text-white shadow flex-shrink-0">
          🫕
        </div>

        <div className="flex-1 pr-4">
          <div className="flex items-center gap-1 text-amber-400 text-xs font-bold mb-0.5">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>4.9 / 5.0 (Bestseller)</span>
          </div>
          <h4 className="text-sm font-bold text-white line-clamp-1">{title}</h4>
          <p className="text-xs text-stone-300 line-clamp-1">{subtitle}</p>
        </div>
      </div>

      <div className="mt-3">
        <CTAButton href={link} size="small" className="w-full text-sm py-2.5 bg-red-800 hover:bg-red-700">
          <ShoppingCart className="w-4 h-4 mr-2" /> Angebot bei Amazon prüfen *
        </CTAButton>
      </div>
    </aside>
  );
}
