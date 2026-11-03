import React from 'react';
import { brochureData } from '../data/brochureData';

export const EnsemblesSection: React.FC = () => {
  const { ensembles } = brochureData;

  return (
    <section
      id="ensembles"
      className="py-12 sm:py-16 px-4 border-b border-[#4d3a20]/40 bg-[#261c0b]"
      aria-label="ارکستر و آنسامبل‌ها"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header: Title «ارکستر و آنسامبل‌ها» only */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#e6ded0]">
            ارکستر و آنسامبل‌ها
          </h2>
        </div>

        {/* Ensembles Cards: No icons, restored member details, no headcounts */}
        <div className="space-y-4 sm:space-y-5">
          {ensembles.map((ensemble) => (
            <div
              key={ensemble.id}
              className="rounded-2xl border border-[#4d3a20] bg-[#261c0b] p-5 sm:p-6 hover:border-[#eb644c]/40 transition-colors shadow-sm"
            >
              {/* Header: Ensemble Name & Leadership */}
              <div className="pb-3 border-b border-[#4d3a20]/60">
                <h3 className="text-lg sm:text-xl font-bold text-[#e6ded0]">
                  {ensemble.name}
                </h3>
                <div className="text-xs sm:text-sm text-[#eb644c] font-semibold mt-1">
                  {ensemble.leadership}
                </div>
              </div>

              {/* Members and Instrument Sections */}
              <div className="mt-4 space-y-2.5 text-xs sm:text-sm">
                {ensemble.sections.map((section, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#2d2212]/70 border border-[#4d3a20]/50 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 leading-relaxed"
                  >
                    <span className="text-[#b4a899] font-semibold shrink-0">
                      {section.role}:
                    </span>
                    <span className="text-[#e6ded0] font-medium">
                      {section.members}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
