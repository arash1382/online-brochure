import React, { useEffect } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { EssaySection } from './components/EssaySection';
import { ProgramSection } from './components/ProgramSection';
import { ArtistsSection } from './components/ArtistsSection';
import { EnsemblesSection } from './components/EnsemblesSection';
import { CreditsSection } from './components/CreditsSection';
import { AcknowledgementsSection } from './components/AcknowledgementsSection';
import { BackToTop } from './components/BackToTop';
import { FirstVisitDownloadModal } from './components/FirstVisitDownloadModal';

export default function App() {
  // Ensure document language and RTL direction are set permanently
  useEffect(() => {
    document.documentElement.lang = 'fa';
    document.documentElement.dir = 'rtl';
  }, []);

  return (
    <div className="min-h-screen bg-[#261c0b] text-[#e6ded0] flex flex-col font-normal selection:bg-[#eb644c] selection:text-[#261c0b]">
      {/* First-visit offline brochure download modal */}
      <FirstVisitDownloadModal />

      {/* Top Header & Navigation */}
      <HeaderNav />

      {/* Main Continuous-Scroll Concert Experience */}
      <main className="flex-1">
        {/* 1. Hero with Official Title SVG, Date/Time Cards, Actions & Etiquette Notice */}
        <HeroSection />

        {/* 2. Dr. Hani Ashrafi's Essay: «مواجهه با موسیقی نو» */}
        <EssaySection />

        {/* 3. Complete Concert Program in Exact Sequence from Document with Intermission */}
        <ProgramSection />

        {/* 4. Artists and Biographies */}
        <ArtistsSection />

        {/* 5. Orchestras and Ensembles */}
        <EnsemblesSection />

        {/* 6. Management & Production Credits */}
        <CreditsSection />

        {/* 7. Acknowledgements */}
        <AcknowledgementsSection />
      </main>

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}
