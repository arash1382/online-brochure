import React, { useState } from 'react';
import { brochureData } from '../data/brochureData';
import { ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';

interface ArtistsSectionProps {
  currentLang: 'fa' | 'en';
}

export const ArtistsSection: React.FC<ArtistsSectionProps> = ({ currentLang }) => {
  const isEn = currentLang === 'en';
  const { artists } = brochureData;

  // All artist biographies collapsed by default on initial page load
  const [expandedBioIds, setExpandedBioIds] = useState<Record<string, boolean>>({});

  const toggleBio = (id: string) => {
    setExpandedBioIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="artists"
      className="py-12 sm:py-16 px-4 border-b border-[#4d3a20]/40 bg-[#261c0b]/80"
      aria-label={isEn ? 'Artist Biographies' : 'زندگی‌نامه هنرمندان'}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#eb644c] mb-2">
            <span className="w-4 h-[1px] bg-[#eb644c]" />
            <span>{isEn ? 'Soloists & Leadership' : 'آفرینندگان و سولیست‌ها'}</span>
            <span className="w-4 h-[1px] bg-[#eb644c]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#e6ded0]">
            {isEn ? 'Artist Biographies' : 'زندگی‌نامه هنرمندان'}
          </h2>
          <p className="text-xs sm:text-sm text-[#b4a899] mt-1.5 max-w-lg mx-auto">
            {isEn
              ? 'Complete biographies and profiles transcribed from the official brochure.'
              : 'متن کامل شرح‌حال و سوابق هنری مندرج در نسخه بروشور بدون تلخیص.'}
          </p>
        </div>

        {/* Expandable Artists Accordion (All collapsed by default across all viewports) */}
        <div className="space-y-3">
          {artists.map((artist) => {
            const isExpanded = !!expandedBioIds[artist.id];
            const paragraphs = isEn ? artist.paragraphsEn : artist.paragraphsFa;

            return (
              <div
                key={artist.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#2d2212] border-[#eb644c]/60 shadow-lg'
                    : 'bg-[#261c0b] border-[#4d3a20] hover:border-[#4d3a20]/90'
                }`}
              >
                {/* Header / Compact Preview */}
                <button
                  type="button"
                  onClick={() => toggleBio(artist.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-start cursor-pointer hover:bg-[#392b17]/50 select-none transition-colors"
                  aria-expanded={isExpanded}
                  aria-controls={`artist-bio-${artist.id}`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 flex-1">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#eb644c]/15 text-[#eb644c] flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                      <span>
                        {isEn
                          ? artist.nameEn
                              .split(' ')
                              .map((n) => n[0])
                              .join('')
                          : artist.nameFa.slice(0, 2)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[#e6ded0]">
                        {isEn ? artist.nameEn : artist.nameFa}
                      </h3>
                      <div className="text-[11px] sm:text-xs text-[#eb644c] font-medium mt-0.5">
                        {isEn ? artist.roleEn : artist.roleFa}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    {/* Tags preview on sm/md screens */}
                    {artist.tagsFa && (
                      <div className="hidden sm:flex flex-wrap gap-1.5 justify-end max-w-xs">
                        {(isEn ? artist.tagsEn : artist.tagsFa)?.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] px-2 py-0.5 rounded bg-[#181206] text-[#b4a899] border border-[#4d3a20]/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Chevron indicator */}
                    <div className="p-1 rounded text-[#b4a899] hover:text-[#e6ded0]">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-[#eb644c]" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expanded Biography Content */}
                {isExpanded && (
                  <div
                    id={`artist-bio-${artist.id}`}
                    className="px-4 pb-5 sm:px-6 sm:pb-6 pt-3 border-t border-[#4d3a20]/60 space-y-3.5 text-xs sm:text-sm text-[#e6ded0] leading-relaxed text-justify"
                  >
                    {/* Tags for mobile view */}
                    {artist.tagsFa && (
                      <div className="flex sm:hidden flex-wrap gap-1.5 mb-2">
                        {(isEn ? artist.tagsEn : artist.tagsFa)?.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] px-2 py-0.5 rounded bg-[#181206] text-[#b4a899] border border-[#4d3a20]/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Editorial Note (e.g. for Setareh Beheshti) */}
                    {artist.editorialNoteFa && (
                      <div className="p-3 rounded-lg bg-[#eb644c]/10 border border-[#eb644c]/30 text-xs text-[#eb644c] flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <p>
                          {isEn
                            ? artist.editorialNoteEn
                            : artist.editorialNoteFa}
                        </p>
                      </div>
                    )}

                    {/* Paragraphs */}
                    {paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
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
