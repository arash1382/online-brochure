import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Music, Users, Info } from 'lucide-react';

export const HeaderNav: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }

      // Check active section
      const sections = ['hero', 'essay', 'program', 'artists', 'ensembles', 'credits'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'آغاز', icon: Info },
    { id: 'essay', label: 'مواجهه با موسیقی نو', icon: BookOpen },
    { id: 'program', label: 'برنامه کنسرت', icon: Music },
    { id: 'artists', label: 'هنرمندان', icon: Users },
    { id: 'ensembles', label: 'ارکسترها و آنسامبل‌ها', icon: Users },
    { id: 'credits', label: 'عوامل اجرایی و قدردانی', icon: Info },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#261c0b]/90 backdrop-blur-md border-b border-[#4d3a20]/60 transition-colors duration-300">
      {/* Reading Progress Indicator */}
      <div
        className="h-[2px] bg-[#eb644c] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="پیشرفت مطالعه"
      />

      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Left / Start: Title / Brand Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2.5 text-start group cursor-pointer focus:outline-none"
            title="بازگشت به ابتدای بروشور"
          >
            <div className="w-8 h-8 rounded bg-[#eb644c]/10 border border-[#eb644c]/30 flex items-center justify-center transition-colors group-hover:bg-[#eb644c]/20 overflow-hidden p-0.5">
              <img
                src="/assets/logo.png"
                alt="لوگوی رویداد"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-[#e6ded0] tracking-wide leading-none group-hover:text-[#eb644c] transition-colors">
                موسیقی نو در ایران
              </span>
              <span className="text-[11px] text-[#b4a899] leading-tight mt-0.5">
                علیرضا مشایخی
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-xs" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-2.5 py-1.5 rounded transition-all cursor-pointer font-medium ${
                  isActive
                    ? 'text-[#eb644c] bg-[#eb644c]/15 border border-[#eb644c]/30 font-semibold'
                    : 'text-[#b4a899] hover:text-[#e6ded0] hover:bg-[#392b17]/50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right / End: Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded text-[#b4a899] hover:text-[#e6ded0] hover:bg-[#2d2212] focus:outline-none focus:ring-1 focus:ring-[#eb644c] cursor-pointer"
            aria-label={isMobileMenuOpen ? 'بستن منو' : 'باز کردن منو'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-[#eb644c]" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#4d3a20]/70 bg-[#261c0b]/98 px-4 py-4 space-y-1 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded text-sm transition-all text-start cursor-pointer ${
                  isActive
                    ? 'text-[#eb644c] bg-[#eb644c]/15 border border-[#eb644c]/30 font-semibold'
                    : 'text-[#b4a899] hover:text-[#e6ded0] hover:bg-[#392b17]/50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#eb644c]' : 'text-[#b4a899]'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
