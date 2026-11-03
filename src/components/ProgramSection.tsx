import React, { useState } from 'react';
import { brochureData, Work } from '../data/brochureData';
import { ChevronDown, ChevronUp, User, Users, Award } from 'lucide-react';

export const ProgramSection: React.FC = () => {
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
            {/* Work Index Number (Persian numerals) */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#392b17] border border-[#4d3a20] text-[#eb644c] font-black text-sm sm:text-base flex items-center justify-center shrink-0 mt-0.5">
              <span>{`۰${work.number}`}</span>
            </div>

            <div className="flex-1 min-w-0">
              {/* Title Prominent */}
              <h3 className="text-base sm:text-lg font-bold text-[#e6ded0] leading-snug">
                {work.title}
              </h3>

              {/* Opus, Year and World Premiere underneath */}
              <div className="flex flex-wrap items-center gap-2 mt-1.5">
                <span className="text-[11px] font-semibold text-[#b4a899] bg-[#181206] px-2 py-0.5 rounded border border-[#4d3a20]/60">
                  {work.opus}
                </span>

                {work.isWorldPremiere && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#eb644c] bg-[#eb644c]/15 px-2 py-0.5 rounded border border-[#eb644c]/40 animate-pulse">
                    <Award className="w-3 h-3" />
                    <span>نخستین اجرای جهانی</span>
                  </span>
                )}
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
            className="px-4 pb-5 sm:px-5 sm:pb-6 pt-2 border-t border-[#4d3a20]/50 space-y-2.5"
          >
            {/* Performers */}
            {work.performers && work.performers.length > 0 && (
              <div className="space-y-1.5">
                {work.performers.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded bg-[#181206]/80 border border-[#4d3a20]/60 flex items-center gap-2 text-xs"
                  >
                    <User className="w-3.5 h-3.5 text-[#b4a899] shrink-0" />
                    <div>
                      <span className="text-[#b4a899] font-medium">{p.role}: </span>
                      <span className="text-[#e6ded0] font-bold">{p.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Ensembles */}
            {work.ensembles && work.ensembles.length > 0 && (
              <div className="p-2.5 rounded bg-[#181206]/80 border border-[#4d3a20]/60 flex items-center gap-2 text-xs">
                <Users className="w-3.5 h-3.5 text-[#b4a899] shrink-0" />
                <div>
                  <span className="text-[#b4a899] font-medium">اجرا: </span>
                  <span className="text-[#e6ded0] font-bold">{work.ensembles.join(' | ')}</span>
                </div>
              </div>
            )}

            {/* Conductor (Standard styling without special orange highlighting) */}
            {work.conductor && (
              <div className="p-2.5 rounded bg-[#181206]/80 border border-[#4d3a20]/60 flex items-center gap-2 text-xs">
                <User className="w-3.5 h-3.5 text-[#b4a899] shrink-0" />
                <div>
                  <span className="text-[#b4a899] font-medium">رهبر: </span>
                  <span className="text-[#e6ded0] font-bold">{work.conductor}</span>
                </div>
              </div>
            )}
          </div>
        )}
      </article>
    );
  };

  return (
    <section
      id="program"
      className="py-12 sm:py-16 px-4 border-b border-[#4d3a20]/40 bg-[#261c0b]"
      aria-label="برنامه کنسرت"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#e6ded0]">
            برنامه کنسرت
          </h2>
        </div>

        {/* Part One: Works 1 to 4 */}
        <div className="space-y-4">
          <div className="pb-2 border-b border-[#4d3a20]/60">
            <span className="text-xs font-bold text-[#eb644c] uppercase tracking-wider">
              بخش نخست
            </span>
          </div>

          <div className="space-y-3">
            {partOneWorks.map((work) => renderWorkCard(work))}
          </div>
        </div>

        {/* Intermission Marker: Title «تنفس» and Subtitle «پایان بخش نخست کنسرت» */}
        <div className="my-8 py-5 px-5 rounded-2xl bg-gradient-to-r from-[#181206] via-[#2f2211] to-[#181206] border border-[#eb644c]/40 text-center shadow-lg relative overflow-hidden">
          <h3 className="text-xl sm:text-2xl font-black text-[#e6ded0] tracking-wide">
            «{intermission.title}»
          </h3>
          <p className="text-xs sm:text-sm text-[#b4a899] mt-1">
            {intermission.subtitle}
          </p>
        </div>

        {/* Part Two: Works 5 and 6 */}
        <div className="space-y-4">
          <div className="pb-2 border-b border-[#4d3a20]/60">
            <span className="text-xs font-bold text-[#eb644c] uppercase tracking-wider">
              بخش دوم
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
