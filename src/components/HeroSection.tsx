import React from 'react';
import { brochureData } from '../data/brochureData';
import { Calendar, Clock, ChevronDown, BookOpen, Music, VolumeX } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { event } = brochureData;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 px-4 overflow-hidden border-b border-[#4d3a20]/40 bg-gradient-to-b from-[#181206] via-[#261c0b] to-[#261c0b]"
      aria-label="معرفی کنسرت موسیقی نو"
    >
      {/* Decorative violin graphic form in background */}
      <div className="absolute top-4 -end-12 w-64 sm:w-80 opacity-15 pointer-events-none select-none transition-transform duration-700 ease-out">
        <img
          src="/assets/violin-form.svg"
          alt=""
          aria-hidden="true"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        {/* Presenting organization badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#392b17]/70 border border-[#4d3a20] text-xs text-[#e6ded0] mb-4 sm:mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#eb644c] animate-pulse" />
          <span>{event.organizer} برگزار می‌کند</span>
        </div>

        {/* Unchanged Official Title SVG Artwork */}
        <div className="py-2 sm:py-4 px-2 flex justify-center">
          <img
            src="/assets/title.svg"
            alt="تایتل رسمی موسیقی نو در ایران"
            className="w-full max-w-[380px] sm:max-w-[460px] md:max-w-[500px] h-auto object-contain filter drop-shadow-md"
            loading="eager"
          />
        </div>

        {/* Essential Concert Metadata Cards: Date & Time (Venue removed per requirements) */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 max-w-lg mx-auto text-start">
          {/* Date Card */}
          <div className="bg-[#2d2212]/90 border border-[#4d3a20] rounded-lg p-3 sm:p-3.5 flex items-center gap-3 shadow-sm hover:border-[#eb644c]/40 transition-colors">
            <div className="w-9 h-9 rounded bg-[#eb644c]/15 text-[#eb644c] flex items-center justify-center shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] text-[#b4a899] font-medium">تاریخ اجرا</div>
              <div className="text-xs sm:text-sm font-semibold text-[#e6ded0]">
                {event.date}
              </div>
            </div>
          </div>

          {/* Time Card */}
          <div className="bg-[#2d2212]/90 border border-[#4d3a20] rounded-lg p-3 sm:p-3.5 flex items-center gap-3 shadow-sm hover:border-[#eb644c]/40 transition-colors">
            <div className="w-9 h-9 rounded bg-[#eb644c]/15 text-[#eb644c] flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] text-[#b4a899] font-medium">ساعت آغاز</div>
              <div className="text-xs sm:text-sm font-semibold text-[#e6ded0]">
                {event.time}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => scrollToSection('program')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#eb644c] text-[#261c0b] text-xs sm:text-sm font-bold shadow-lg shadow-[#eb644c]/20 hover:bg-[#f17b66] cursor-pointer transition-all active:scale-95"
          >
            <Music className="w-4 h-4" />
            <span>مشاهده رپرتوار اجرا</span>
          </button>

          <button
            onClick={() => scrollToSection('essay')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#2d2212] border border-[#4d3a20] text-[#e6ded0] text-xs sm:text-sm font-semibold hover:bg-[#392b17] hover:border-[#eb644c]/50 cursor-pointer transition-all active:scale-95"
          >
            <BookOpen className="w-4 h-4 text-[#eb644c]" />
            <span>مواجهه با موسیقی نو</span>
          </button>
        </div>

        {/* Hall Etiquette Notice right below the buttons */}
        <div className="mt-5 max-w-lg mx-auto p-3 sm:p-3.5 rounded-xl bg-[#2d2212]/70 border border-[#eb644c]/25 text-start flex items-start gap-2.5 shadow-sm">
          <VolumeX className="w-4 h-4 text-[#eb644c] shrink-0 mt-0.5" />
          <p className="text-[11px] sm:text-xs text-[#b4a899] leading-relaxed">
            {event.etiquetteNotice}
          </p>
        </div>

        {/* Subtle Scroll Cue */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center gap-1.5 text-[#b4a899] text-xs">
          <span className="text-[11px] tracking-wide">
            برای مطالعه بروشور به پایین پیمایش کنید
          </span>
          <button
            onClick={() => scrollToSection('essay')}
            aria-label="پیمایش به یادداشت موسیقی نو"
            className="p-1 text-[#eb644c] hover:translate-y-1 transition-transform cursor-pointer"
          >
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
