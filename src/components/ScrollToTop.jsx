import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  // Reset scroll position to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Toggle button visibility based on scroll depth
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-5 md:bottom-8 md:right-8 z-[60] p-3.5 bg-[#701a1e] hover:bg-[#851e23] text-amber-300 border border-amber-400/40 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
          aria-label="Nach oben scrollen"
          title="Nach oben scrollen"
        >
          <ChevronUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}
    </>
  );
}