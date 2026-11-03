import React, { useState } from 'react';
import { brochureData } from '../data/brochureData';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const ArtistsSection: React.FC = () => {
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
      aria-label="هنرمندان"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header: Title «هنرمندان» only */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#e6ded0]">
            هنرمندان
          </h2>
        </div>

        {/* Expandable Artists Accordion (All collapsed by default) */}
        <div className="space-y-3">
          {artists.map((artist) => {
            const isExpanded = !!expandedBioIds[artist.id];
            const hasBioParagraphs = artist.paragraphs && artist.paragraphs.length > 0;

            // Special card for ستاره بهشتی (NO photo, 3 lines, no accordion bio)
            if (artist.hasNoPhoto) {
              return (
                <div
                  key={artist.id}
                  className="rounded-xl border border-[#4d3a20] bg-[#261c0b] p-4 sm:p-5"
                >
                  <h3 className="text-base sm:text-lg font-bold text-[#e6ded0]">
                    {artist.name}
                  </h3>
                  <div className="mt-2.5 space-y-1 text-xs sm:text-sm text-[#b4a899]">
                    {artist.bulletLines?.map((line, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#eb644c]/70 shrink-0" />
                        <span>{line}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

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
                  onClick={() => hasBioParagraphs && toggleBio(artist.id)}
                  className="w-full p-3 sm:p-4 flex items-stretch sm:items-center justify-between text-start cursor-pointer hover:bg-[#392b17]/50 select-none transition-colors gap-3 sm:gap-4"
                  aria-expanded={isExpanded}
                  aria-controls={`artist-bio-${artist.id}`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    {/* Portrait Image (aspect ratio 3:4, local asset) */}
                    {artist.image && (
                      <div className="w-[88px] sm:w-[104px] aspect-[3/4] rounded-lg overflow-hidden border border-[#4d3a20] shadow-md shrink-0 bg-[#181206]">
                        <img
                          src={artist.image}
                          alt={artist.alt || artist.name}
                          loading="eager"
                          decoding="async"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    )}

                    <div className="flex-1 min-w-0 py-0.5 sm:py-0">
                      <h3 className="text-base sm:text-lg font-bold text-[#e6ded0]">
                        {artist.name}
                      </h3>
                      <div className="text-xs sm:text-sm text-[#eb644c] font-medium mt-1 leading-snug">
                        {artist.role}
                      </div>
                    </div>
                  </div>

                  {hasBioParagraphs && (
                    <div className="flex items-center gap-2 shrink-0 self-center">
                      <div className="p-1 rounded text-[#b4a899] hover:text-[#e6ded0]">
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-[#eb644c]" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </div>
                    </div>
                  )}
                </button>

                {/* Expanded Biography Content */}
                {isExpanded && hasBioParagraphs && (
                  <div
                    id={`artist-bio-${artist.id}`}
                    className="px-4 pb-5 sm:px-6 sm:pb-6 pt-4 border-t border-[#4d3a20]/60 space-y-3 text-xs sm:text-sm text-[#e6ded0] leading-relaxed text-justify"
                  >
                    {artist.paragraphs?.map((p, idx) => {
                      const targetTitle = 'Electronic Panorama: Prospective 21e Siecle';
                      if (p.includes(targetTitle)) {
                        const parts = p.split(targetTitle);
                        return (
                          <p key={idx}>
                            {parts[0]}
                            <span
                              dir="ltr"
                              style={{
                                direction: 'ltr',
                                unicodeBidi: 'isolate',
                                fontSize: '1.1em',
                              }}
                              className="italic font-['Abar'] inline"
                            >
                              Electronic Panorama: Prospective <span className="font-sans not-italic" dir="ltr" style={{ fontSize: '1em' }}>21</span>e Siecle
                            </span>
                            {parts[1]}
                          </p>
                        );
                      }
                      return <p key={idx}>{p}</p>;
                    })}
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
