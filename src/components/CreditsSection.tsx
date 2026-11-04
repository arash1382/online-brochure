import React, { useState } from 'react';
import { brochureData } from '../data/brochureData';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const CreditsSection: React.FC = () => {
  const { credits, emaratCredits } = brochureData;
  const [isEmaratExpanded, setIsEmaratExpanded] = useState(false);

  return (
    <section
      id="credits"
      className="py-12 sm:py-16 px-4 bg-[#261c0b] text-[#e6ded0] border-b border-[#4d3a20]/60 relative overflow-hidden"
      aria-label="مدیریت و عوامل اجرایی"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header: Title «مدیریت و عوامل اجرایی» */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#e6ded0]">
            مدیریت و عوامل اجرایی
          </h2>
        </div>

        {/* Management & Production Credits */}
        <div className="bg-[#261c0b] border border-[#4d3a20] rounded-2xl p-5 sm:p-6 shadow-sm">
          <div className="space-y-3 text-xs sm:text-sm">
            {credits.items.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg bg-[#2d2212] border border-[#4d3a20]/60 flex items-center justify-between"
              >
                <span className="text-[#b4a899] font-medium">{item.role}:</span>
                <span className="font-bold text-[#e6ded0]">{item.name}</span>
              </div>
            ))}
          </div>

          {/* Accordion: «عمارت آینده» (Subtitle: «اکوسیستم کاربردی هوش مصنوعی») */}
          <div className="mt-4 rounded-xl border border-[#4d3a20] bg-[#2d2212] overflow-hidden transition-all duration-200">
            <button
              type="button"
              onClick={() => setIsEmaratExpanded(!isEmaratExpanded)}
              aria-expanded={isEmaratExpanded}
              aria-controls="emarat-ayandeh-content"
              className="w-full p-3 sm:p-3.5 flex items-center justify-between text-start cursor-pointer hover:bg-[#392b17]/60 transition-colors select-none"
            >
              <div className="flex flex-col text-start">
                <span className="text-xs sm:text-sm font-bold text-[#e6ded0]">
                  عمارت آینده
                </span>
                <span className="text-[11px] sm:text-xs text-[#b4a899]/80 font-normal mt-0.5 leading-normal">
                  اکوسیستم کاربردی هوش مصنوعی
                </span>
              </div>
              <div className="p-1 rounded text-[#b4a899]">
                {isEmaratExpanded ? (
                  <ChevronUp className="w-4 h-4 text-[#eb644c]" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </div>
            </button>

            {isEmaratExpanded && (
              <div
                id="emarat-ayandeh-content"
                className="p-3.5 sm:p-4 border-t border-[#4d3a20]/60 space-y-2.5 sm:space-y-3"
              >
                {emaratCredits.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 sm:p-4 rounded-xl bg-[#261c0b] border border-[#4d3a20]/60 flex items-start justify-between gap-1.5 sm:gap-4"
                  >
                    <span className="text-[#b4a899] text-[13px] sm:text-sm font-medium shrink-0 leading-[1.7]">
                      {item.role}:
                    </span>
                    <div className="flex flex-col items-end gap-1 text-end leading-[1.7] min-w-0">
                      {item.names && item.names.length > 0 ? (
                        item.names.map((person, pIdx) => (
                          <span
                            key={pIdx}
                            className="text-[#e6ded0] text-[13.5px] sm:text-sm font-semibold whitespace-nowrap break-keep"
                          >
                            {person}
                          </span>
                        ))
                      ) : (
                        <span className="text-[#e6ded0] text-[13.5px] sm:text-sm font-semibold whitespace-nowrap break-keep">
                          {item.name}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
