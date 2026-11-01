import React, { useState, useEffect } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { EventInfoSection } from './components/EventInfoSection';
import { EssaySection } from './components/EssaySection';
import { ProgramSection } from './components/ProgramSection';
import { ArtistsSection } from './components/ArtistsSection';
import { EnsemblesSection } from './components/EnsemblesSection';
import { CreditsSection } from './components/CreditsSection';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [currentLang, setCurrentLang] = useState<'fa' | 'en'>('fa');

  // Synchronize HTML attributes (lang, dir) with currentLang
  useEffect(() => {
    const html = document.documentElement;
    html.lang = currentLang;
    html.dir = currentLang === 'fa' ? 'rtl' : 'ltr';
  }, [currentLang]);

  // Language switch with reading position preservation
  const handleToggleLang = () => {
    // 1. Determine current visible section or scroll fraction
    const sections = ['hero', 'event', 'essay', 'program', 'artists', 'ensembles', 'credits'];
    let closestSection = 'hero';
    let minDistance = Infinity;

    for (const sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const rect = el.getBoundingClientRect();
        // Distance from top of viewport
        const distance = Math.abs(rect.top - 80);
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = sectionId;
        }
      }
    }

    // 2. Switch language
    const nextLang = currentLang === 'fa' ? 'en' : 'fa';
    setCurrentLang(nextLang);

    // 3. Restore scroll position to the same section after re-render
    requestAnimationFrame(() => {
      setTimeout(() => {
        const targetEl = document.getElementById(closestSection);
        if (targetEl) {
          const yOffset = -70;
          const y = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        }
      }, 50);
    });
  };

  return (
    <div className="min-h-screen bg-[#261c0b] text-[#e6ded0] flex flex-col font-normal selection:bg-[#eb644c] selection:text-[#261c0b]">
      {/* Top Header & Navigation */}
      <HeaderNav
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
      />

      {/* Main Continuous-Scroll Concert Experience */}
      <main className="flex-1">
        {/* 1. Hero with Unchanged Official Title SVG */}
        <HeroSection currentLang={currentLang} />

        {/* 2. Key Event Information */}
        <EventInfoSection currentLang={currentLang} />

        {/* 3. Conceptual Essay: Continuity of Thought («تداوم تفکر») */}
        <EssaySection currentLang={currentLang} />

        {/* 4. Complete Concert Program in Source Order with Intermission */}
        <ProgramSection currentLang={currentLang} />

        {/* 5. Artist Biographies */}
        <ArtistsSection currentLang={currentLang} />

        {/* 6. Ensembles & Orchestras Rosters */}
        <EnsemblesSection currentLang={currentLang} />

        {/* 7. Production Credits, Acknowledgements & Colophon */}
        <CreditsSection currentLang={currentLang} />
      </main>

      {/* Floating Back to Top Button */}
      <BackToTop currentLang={currentLang} />
    </div>
  );
}
