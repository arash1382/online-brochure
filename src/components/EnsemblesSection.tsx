import React, { useState } from 'react';
import { brochureData } from '../data/brochureData';
import { Users, Drum, Music, ChevronDown, ChevronUp } from 'lucide-react';

interface EnsemblesSectionProps {
  currentLang: 'fa' | 'en';
}

export const EnsemblesSection: React.FC<EnsemblesSectionProps> = ({ currentLang }) => {
  const isEn = currentLang === 'en';
  const { ensembles } = brochureData;

  // All ensemble rosters collapsed by default on initial page load
  const [expandedEnsembleIds, setExpandedEnsembleIds] = useState<Record<string, boolean>>({});

  const toggleEnsemble = (id: string) => {
    setExpandedEnsembleIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getEnsembleIcon = (id: string) => {
    switch (id) {
      case 'karavan-ensemble':
        return Drum;
      case 'namad-quartet':
        return Music;
      case 'persian-gulf-orchestra':
      default:
        return Users;
    }
  };

  return (
    <section
      id="ensembles"
      className="py-12 sm:py-16 px-4 border-b border-[#4d3a20]/40 bg-[#261c0b]"
      aria-label={isEn ? 'Ensembles and Orchestras' : 'ارکسترها و گروه‌ها'}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#eb644c] mb-2">
            <span className="w-4 h-[1px] bg-[#eb644c]" />
            <span>{isEn ? 'Performing Groups' : 'تشکل‌های اجرایی'}</span>
            <span className="w-4 h-[1px] bg-[#eb644c]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#e6ded0]">
            {isEn ? 'Ensembles & Orchestras' : 'ارکستر و آنسامبل‌ها'}
          </h2>
          <p className="text-xs sm:text-sm text-[#b4a899] mt-1.5 max-w-lg mx-auto">
            {isEn
              ? 'Complete member rosters and instrument sections as credited in the brochure.'
              : 'اسامی تمامی نوازندگان و بخش‌های‌سازی طبق متن بروشور رسمی.'}
          </p>
        </div>

        {/* Ensembles Cards (All collapsed by default on initial page load) */}
        <div className="space-y-4">
          {ensembles.map((ensemble) => {
            const isExpanded = !!expandedEnsembleIds[ensemble.id];
            const Icon = getEnsembleIcon(ensemble.id);
            const leader = isEn ? ensemble.leaderEn : ensemble.leaderFa;
            const sections = isEn ? ensemble.sectionsEn : ensemble.sectionsFa;
            const totalMusicians = sections.reduce((acc, s) => acc + s.members.length, 0);

            return (
              <div
                key={ensemble.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#2d2212] border-[#eb644c]/60 shadow-lg'
                    : 'bg-[#261c0b] border-[#4d3a20] hover:border-[#4d3a20]/90'
                }`}
              >
                {/* Compact Preview / Clickable Header */}
                <button
                  type="button"
                  onClick={() => toggleEnsemble(ensemble.id)}
                  className="w-full p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-start cursor-pointer hover:bg-[#392b17]/40 select-none transition-colors"
                  aria-expanded={isExpanded}
                  aria-controls={`ensemble-roster-${ensemble.id}`}
                >
                  <div className="flex items-center gap-3.5 flex-1">
                    <div className="w-10 h-10 rounded-lg bg-[#eb644c]/15 text-[#eb644c] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#e6ded0]">
                        {isEn ? ensemble.nameEn : ensemble.nameFa}
                      </h3>
                      {leader && (
                        <div className="text-xs text-[#eb644c] font-semibold mt-0.5">
                          {isEn ? `Leader: ${leader}` : `سرپرست: ${leader}`}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 self-stretch sm:self-center">
                    <span className="text-[11px] text-[#b4a899] bg-[#181206] px-2.5 py-1 rounded-full border border-[#4d3a20]/50">
                      {totalMusicians} {isEn ? 'Musicians' : 'نوازنده'}
                    </span>

                    <div className="p-1 rounded text-[#b4a899] hover:text-[#e6ded0]">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-[#eb644c]" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expanded Sections and Members (Performer details) */}
                {isExpanded && (
                  <div
                    id={`ensemble-roster-${ensemble.id}`}
                    className="p-5 sm:p-6 pt-3 border-t border-[#4d3a20]/60 space-y-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {sections.map((sec, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-[#181206]/70 border border-[#4d3a20]/50"
                        >
                          <div className="text-xs font-bold text-[#eb644c] mb-2 flex items-center justify-between">
                            <span>{sec.sectionName}</span>
                            <span className="text-[10px] text-[#b4a899] font-normal">
                              {sec.members.length} {isEn ? 'players' : 'نفر'}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {sec.members.map((member, mIdx) => (
                              <span
                                key={mIdx}
                                className="inline-block text-xs text-[#e6ded0] bg-[#392b17]/60 border border-[#4d3a20]/70 px-2.5 py-1 rounded"
                              >
                                {member}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
