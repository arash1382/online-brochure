import React, { useState } from 'react';
import { brochureData } from '../data/brochureData';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
                  className="w-full p-3 sm:p-5 flex items-stretch sm:items-center justify-between text-start cursor-pointer hover:bg-[#392b17]/50 select-none transition-colors gap-3 sm:gap-4"
                  aria-expanded={isExpanded}
                  aria-controls={`artist-bio-${artist.id}`}
                >
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    {/* Portrait Image (104px-124px width, 3:4 aspect ratio, local asset) */}
                    <div className="w-[104px] sm:w-[116px] md:w-[124px] aspect-[3/4] rounded-lg sm:rounded-xl overflow-hidden border border-[#4d3a20] shadow-md shrink-0 bg-[#181206]">
                      <img
                        src={artist.image}
                        alt={isEn ? artist.altEn : artist.altFa}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    <div className="flex-1 min-w-0 py-0.5 sm:py-0">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#e6ded0]">
                        {isEn ? artist.nameEn : artist.nameFa}
                      </h3>
                      <div className="text-[11px] sm:text-xs text-[#eb644c] font-medium mt-1 leading-snug">
                        {isEn ? artist.roleEn : artist.roleFa}
                      </div>

                      {/* Tags preview */}
                      {(isEn ? artist.tagsEn : artist.tagsFa) && (
                        <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-2.5">
                          {(isEn ? artist.tagsEn : artist.tagsFa)?.map((tag, idx) => (
                            <span
                              key={idx}
                              className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded bg-[#181206] text-[#b4a899] border border-[#4d3a20]/50"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-start sm:self-center pt-1 sm:pt-0">
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
                    className="px-4 pb-5 sm:px-6 sm:pb-6 pt-4 border-t border-[#4d3a20]/60 space-y-3.5 text-xs sm:text-sm text-[#e6ded0] leading-relaxed text-justify"
                  >


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
