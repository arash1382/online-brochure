import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface BackToTopProps {
  currentLang: 'fa' | 'en';
}

export const BackToTop: React.FC<BackToTopProps> = ({ currentLang }) => {
  const [isVisible, setIsVisible] = useState(false);
  const isEn = currentLang === 'en';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 end-5 z-40 w-11 h-11 rounded-full bg-[#eb644c] hover:bg-[#f17b66] text-[#261c0b] shadow-xl shadow-black/50 border border-[#eb644c]/60 flex items-center justify-center transition-all duration-300 active:scale-90 cursor-pointer animate-in fade-in zoom-in-75"
      aria-label={isEn ? 'Back to top' : 'بازگشت به بالای بروشور'}
      title={isEn ? 'Back to top' : 'بازگشت به ابتدا'}
    >
      <ArrowUp className="w-5 h-5 stroke-[2.5]" />
    </button>
  );
};
