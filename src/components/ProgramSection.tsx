import React, { useState } from 'react';
import { brochureData, Work } from '../data/brochureData';
import {
  ChevronDown,
  ChevronUp,
  User,
  Users,
  Award,
  Music,
  Coffee,
} from 'lucide-react';

interface ProgramSectionProps {
  currentLang: 'fa' | 'en';
}

export const ProgramSection: React.FC<ProgramSectionProps> = ({ currentLang }) => {
  const isEn = currentLang === 'en';
  const { works, intermission } = brochureData;

  // All works collapsed by default on initial page load
  const [expandedWorkIds, setExpandedWorkIds] = useState<Record<string, boolean>>({});

  const toggleWork = (id: string) => {
    setExpandedWorkIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const partOneWorks = works.slice(0, 4); // Works 1 to 4
  const partTwoWorks = works.slice(4); // Works 5 and 6

  const renderWorkCard = (work: Work) => {
    const isExpanded = !!expandedWorkIds[work.id];
    const performers = isEn ? work.performersEn : work.performersFa;
    const conductor = isEn ? work.conductorEn : work.conductorFa;

    return (
      <article
        key={work.id}
        className={`rounded-xl border transition-all duration-200 overflow-hidden ${
          isExpanded
            ? 'bg-[#2d2212] border-[#eb644c]/60 shadow-lg'
            : 'bg-[#261c0b] border-[#4d3a20] hover:border-[#4d3a20]/90'
        }`}
      >
        {/* Card Header / Summary */}
        <div
          onClick={() => toggleWork(work.id)}
          className="p-4 sm:p-5 flex items-start justify-between gap-3 cursor-pointer select-none"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleWork(work.id);
            }
          }}
          aria-expanded={isExpanded}
          aria-controls={`work-details-${work.id}`}
        >
          <div className="flex items-start gap-3 sm:gap-4 flex-1">
            {/* Work Index Number */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#392b17] border border-[#4d3a20] text-[#eb644c] font-black text-sm sm:text-base flex items-center justify-center shrink-0 mt-0.5">
              <span>{isEn ? String(work.number).padStart(2, '0') : `۰${work.number}`}</span>
            </div>

            <div className="flex-1">
              {/* Badges: Opus, Year, and World Premiere */}
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="text-[11px] font-semibold text-[#b4a899] bg-[#181206] px-2 py-0.5 rounded border border-[#4d3a20]/60">
                  {isEn ? work.opusEn : work.opusFa}
                </span>

                {work.isWorldPremiere && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#eb644c] bg-[#eb644c]/15 px-2 py-0.5 rounded border border-[#eb644c]/40 animate-pulse">
                    <Award className="w-3 h-3" />
                    <span>{isEn ? 'World Premiere' : 'نخستین اجرای جهانی'}</span>
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-[#e6ded0] leading-snug group-hover:text-[#eb644c] transition-colors">
                {isEn ? work.titleEn : work.titleFa}
              </h3>

              {/* Instrumentation quick line */}
              <div className="text-xs text-[#b4a899] mt-1 flex items-center gap-1.5">
                <Music className="w-3 h-3 text-[#eb644c] shrink-0" />
                <span className="line-clamp-1">
                  {isEn ? work.instrumentationEn : work.instrumentationFa}
                </span>
              </div>
            </div>
          </div>

          {/* Toggle Expand Icon */}
          <div className="p-1 rounded text-[#b4a899] hover:text-[#e6ded0] shrink-0 mt-1">
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-[#eb644c]" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </div>
        </div>

        {/* Expandable Details Area */}
        {isExpanded && (
          <div
            id={`work-details-${work.id}`}
            className="px-4 pb-5 sm:px-5 sm:pb-6 pt-2 border-t border-[#4d3a20]/50 space-y-4"
          >
            {/* Description */}
            <div className="p-3.5 rounded-lg bg-[#181206]/80 border border-[#4d3a20]/40 text-xs sm:text-sm text-[#e6ded0] leading-relaxed">
              {isEn ? work.descriptionEn : work.descriptionFa}
            </div>

            {/* Performers Roster */}
            <div>
              <div className="text-[11px] font-semibold text-[#b4a899] uppercase tracking-wider mb-2">
                {isEn ? 'Performers & Ensembles' : 'نوازندگان و آنسامبل‌ها'}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {performers.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded bg-[#392b17]/50 border border-[#4d3a20]/60 flex items-center gap-2"
                  >
                    <User className="w-3.5 h-3.5 text-[#eb644c] shrink-0" />
                    <div>
                      <span className="text-[#b4a899] font-medium">{p.role}: </span>
                      <span className="text-[#e6ded0] font-bold">{p.name}</span>
                    </div>
                  </div>
                ))}

                {conductor && (
                  <div className="p-2.5 rounded bg-[#eb644c]/10 border border-[#eb644c]/30 flex items-center gap-2 sm:col-span-2">
                    <Users className="w-3.5 h-3.5 text-[#eb644c] shrink-0" />
                    <div>
                      <span className="text-[#b4a899] font-medium">
                        {isEn ? 'Conductor: ' : 'رهبر: '}
                      </span>
                      <span className="text-[#eb644c] font-bold">{conductor}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </article>
    );
  };

  return (
    <section
      id="program"
      className="py-12 sm:py-16 px-4 border-b border-[#4d3a20]/40 bg-[#261c0b]"
      aria-label={isEn ? 'Concert Program' : 'رپرتوار کنسرت'}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#eb644c] mb-2">
            <span className="w-4 h-[1px] bg-[#eb644c]" />
            <span>{isEn ? 'Repertoire & Program' : 'رپرتوار کامل کنسرت'}</span>
            <span className="w-4 h-[1px] bg-[#eb644c]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#e6ded0]">
            {isEn ? 'Concert Program' : 'برنامه کنسرت'}
          </h2>
          <p className="text-xs sm:text-sm text-[#b4a899] mt-1.5 max-w-lg mx-auto">
            {isEn
              ? 'Works presented in exact performance sequence from the official concert brochure.'
              : 'آثار به ترتیب دقیق اجرای صحنه‌ای مندرج در بروشور رسمی کنسرت.'}
          </p>
        </div>

        {/* Part One: Works 1 to 4 */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#4d3a20]/60">
            <span className="text-xs font-bold text-[#eb644c] uppercase tracking-wider">
              {isEn ? 'Part One' : 'بخش نخست'}
            </span>
            <span className="text-[11px] text-[#b4a899]">
              {isEn ? '4 Works' : '۴ اثر'}
            </span>
          </div>

          <div className="space-y-3">
            {partOneWorks.map((work) => renderWorkCard(work))}
          </div>
        </div>

        {/* Intermission Marker in Source Position */}
        <div className="my-8 py-6 px-5 rounded-2xl bg-gradient-to-r from-[#181206] via-[#2f2211] to-[#181206] border border-[#eb644c]/40 text-center shadow-lg relative overflow-hidden">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#eb644c]/15 text-[#eb644c] mb-2">
            <Coffee className="w-5 h-5" />
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#e6ded0] tracking-wide">
            «{isEn ? intermission.titleEn : intermission.titleFa}»
          </h3>
          <p className="text-xs sm:text-sm text-[#b4a899] mt-1">
            {isEn ? intermission.subtitleEn : intermission.subtitleFa}
          </p>
          <div className="mt-3 inline-block px-3 py-1 rounded-full bg-[#181206] border border-[#4d3a20] text-[11px] text-[#eb644c] font-medium">
            {isEn
              ? 'Concert intermission between Part I and Part II'
              : 'پایان بخش نخست کنسرت؛ استراحت میان دو پرده'}
          </div>
        </div>

        {/* Part Two: Works 5 and 6 */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#4d3a20]/60">
            <span className="text-xs font-bold text-[#eb644c] uppercase tracking-wider">
              {isEn ? 'Part Two' : 'بخش دوم'}
            </span>
            <span className="text-[11px] text-[#b4a899]">
              {isEn ? '2 Works' : '۲ اثر'}
            </span>
          </div>

          <div className="space-y-3">
            {partTwoWorks.map((work) => renderWorkCard(work))}
          </div>
        </div>
      </div>
    </section>
  );
};
