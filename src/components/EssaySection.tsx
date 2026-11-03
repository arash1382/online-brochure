import React, { useState } from 'react';
import { brochureData } from '../data/brochureData';
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

export const EssaySection: React.FC = () => {
  const { essay } = brochureData;
  const [isExpanded, setIsExpanded] = useState(false);
  const [fontSizeLevel, setFontSizeLevel] = useState<1 | 2 | 3>(2);

  const fontClasses = {
    1: 'text-xs sm:text-sm leading-relaxed sm:leading-loose',
    2: 'text-sm sm:text-base leading-relaxed sm:leading-loose',
    3: 'text-base sm:text-lg leading-loose sm:leading-loose',
  };

  return (
    <section
      id="essay"
      className="py-12 sm:py-16 px-4 border-b border-[#4d3a20]/40 bg-[#261c0b]/70"
      aria-label="یادداشت مواجهه با موسیقی نو"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#e6ded0]">
            «{essay.title}»
          </h2>
          <div className="inline-block mt-2 px-3 py-1 rounded bg-[#392b17] border border-[#4d3a20] text-xs font-semibold text-[#eb644c]">
            {essay.author}
          </div>
        </div>

        {/* Reader Controls: Font size adjusters */}
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#4d3a20]/40 text-xs text-[#b4a899]">
          <span className="flex items-center gap-1.5 font-medium">
            <BookOpen className="w-3.5 h-3.5 text-[#eb644c]" />
            <span>متن یادداشت</span>
          </span>

          <div className="flex items-center gap-1 bg-[#2d2212] p-1 rounded border border-[#4d3a20]">
            <span className="px-1 text-[11px] text-[#7a6e60]">اندازه متن:</span>
            <button
              onClick={() => setFontSizeLevel(1)}
              className={`px-1.5 py-0.5 rounded text-[11px] font-bold cursor-pointer transition-colors ${
                fontSizeLevel === 1 ? 'bg-[#eb644c] text-[#261c0b]' : 'hover:text-[#e6ded0]'
              }`}
              title="متن فشرده"
              aria-label="فونت کوچک"
            >
              A-
            </button>
            <button
              onClick={() => setFontSizeLevel(2)}
              className={`px-1.5 py-0.5 rounded text-xs font-bold cursor-pointer transition-colors ${
                fontSizeLevel === 2 ? 'bg-[#eb644c] text-[#261c0b]' : 'hover:text-[#e6ded0]'
              }`}
              title="متن استاندارد"
              aria-label="فونت استاندارد"
            >
              A
            </button>
            <button
              onClick={() => setFontSizeLevel(3)}
              className={`px-1.5 py-0.5 rounded text-sm font-bold cursor-pointer transition-colors ${
                fontSizeLevel === 3 ? 'bg-[#eb644c] text-[#261c0b]' : 'hover:text-[#e6ded0]'
              }`}
              title="متن بزرگ"
              aria-label="فونت بزرگ"
            >
              A+
            </button>
          </div>
        </div>

        {/* Essay Content Area */}
        <div className="space-y-4">
          {/* Initial visible paragraph */}
          <div className="space-y-4">
            <p className={`${fontClasses[fontSizeLevel]} text-[#e6ded0] text-justify font-normal`}>
              {essay.paragraphs[0]}
            </p>
            <p className={`${fontClasses[fontSizeLevel]} text-[#e6ded0] font-semibold text-[#eb644c]`}>
              {essay.paragraphs[1]}
            </p>
          </div>

          {/* Expandable remaining paragraphs (collapsed by default) */}
          <div
            id="essay-expanded-content"
            className={`space-y-4 transition-all duration-300 ${
              isExpanded ? 'block' : 'hidden'
            }`}
          >
            {essay.paragraphs.slice(2).map((para, index) => {
              const isLast = index === essay.paragraphs.slice(2).length - 1;
              return (
                <p
                  key={index}
                  className={`${fontClasses[fontSizeLevel]} text-[#e6ded0] text-justify ${
                    isLast
                      ? 'p-3.5 rounded-lg bg-[#2d2212]/90 border border-[#eb644c]/30 text-[#e6ded0]'
                      : ''
                  }`}
                >
                  {para}
                </p>
              );
            })}

            {/* Author sign-off credit */}
            <div className="pt-2 text-end">
              <span className="text-xs sm:text-sm font-bold text-[#eb644c] border-b border-[#eb644c]/40 pb-0.5 inline-block">
                {essay.author}
              </span>
            </div>
          </div>

          {/* Read More / Less Toggle Button */}
          <div className="pt-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#2d2212] border border-[#4d3a20] hover:border-[#eb644c]/50 text-xs sm:text-sm font-semibold text-[#eb644c] transition-all cursor-pointer select-none"
              aria-expanded={isExpanded}
              aria-controls="essay-expanded-content"
            >
              <span>{isExpanded ? 'بستن متن' : 'نمایش ادامه متن'}</span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
