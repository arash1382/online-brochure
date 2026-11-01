import React, { useState } from 'react';
import { brochureData } from '../data/brochureData';
import { BookOpen, ChevronDown, ChevronUp, Quote, Sparkles, ZoomIn, ZoomOut } from 'lucide-react';

interface EssaySectionProps {
  currentLang: 'fa' | 'en';
}

export const EssaySection: React.FC<EssaySectionProps> = ({ currentLang }) => {
  const isEn = currentLang === 'en';
  const { essay } = brochureData;
  const [isExpanded, setIsExpanded] = useState(false);
  const [fontSizeLevel, setFontSizeLevel] = useState<1 | 2 | 3>(2); // 1: small, 2: default, 3: large

  const paragraphs = isEn ? essay.paragraphsEn : essay.paragraphsFa;

  const fontClasses = {
    1: 'text-xs sm:text-sm leading-relaxed sm:leading-loose',
    2: 'text-sm sm:text-base leading-relaxed sm:leading-loose',
    3: 'text-base sm:text-lg leading-loose sm:leading-loose',
  };

  return (
    <section
      id="essay"
      className="py-12 sm:py-16 px-4 border-b border-[#4d3a20]/40 bg-[#261c0b]/70"
      aria-label={isEn ? 'Conceptual Essay: Continuity of Thought' : 'مقاله تداوم تفکر'}
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#eb644c] mb-2">
            <span className="w-4 h-[1px] bg-[#eb644c]" />
            <span>{isEn ? essay.subtitleEn : essay.subtitleFa}</span>
            <span className="w-4 h-[1px] bg-[#eb644c]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#e6ded0]">
            «{isEn ? essay.titleEn : essay.titleFa}»
          </h2>
          <div className="inline-block mt-2 px-3 py-1 rounded bg-[#392b17] border border-[#4d3a20] text-xs font-semibold text-[#eb644c]">
            {isEn ? essay.authorEn : essay.authorFa}
          </div>
        </div>

        {/* Highlighted Conceptual Quote */}
        <div className="mb-6 p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#2d2212] via-[#352714] to-[#2d2212] border border-[#eb644c]/30 relative overflow-hidden">
          <div className="absolute top-2 -end-2 text-[#eb644c]/10 pointer-events-none select-none">
            <Quote className="w-20 h-20" />
          </div>
          <p className="relative z-10 text-xs sm:text-sm text-[#e6ded0] font-medium leading-relaxed italic">
            {isEn
              ? '"Music is, in essence, a mode of thinking through the medium of sonic language... Serious music is the dialect of human historical truth; the voice of the Zeitgeist; the perpetual voyage of consciousness seeking the mysteries of the unconscious; it is the continuity of thought."'
              : '«موسیقی نوعی فکرکردن با زبان صوت است... موسیقی جدی زبان حقیقت تاریخی بشر است؛ صدای روح زمانه است؛ حرکت پیوستۀ آگاهی در جست‌وجوی رازآلودگی ناآگاه است؛ تداوم تفکر است.»'}
          </p>
        </div>

        {/* Reader Controls: Font size adjusters */}
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#4d3a20]/40 text-xs text-[#b4a899]">
          <span className="flex items-center gap-1.5 font-medium">
            <BookOpen className="w-3.5 h-3.5 text-[#eb644c]" />
            <span>{isEn ? 'Full Essay Text' : 'متن کامل یادداشت تحلیلی'}</span>
          </span>

          <div className="flex items-center gap-1 bg-[#2d2212] p-1 rounded border border-[#4d3a20]">
            <span className="px-1 text-[11px] text-[#7a6e60]">{isEn ? 'Text size:' : 'اندازه متن:'}</span>
            <button
              onClick={() => setFontSizeLevel(1)}
              className={`px-1.5 py-0.5 rounded text-[11px] font-bold cursor-pointer transition-colors ${
                fontSizeLevel === 1 ? 'bg-[#eb644c] text-[#261c0b]' : 'hover:text-[#e6ded0]'
              }`}
              title={isEn ? 'Compact text' : 'متن فشرده'}
              aria-label={isEn ? 'Small font' : 'فونت کوچک'}
            >
              A-
            </button>
            <button
              onClick={() => setFontSizeLevel(2)}
              className={`px-1.5 py-0.5 rounded text-xs font-bold cursor-pointer transition-colors ${
                fontSizeLevel === 2 ? 'bg-[#eb644c] text-[#261c0b]' : 'hover:text-[#e6ded0]'
              }`}
              title={isEn ? 'Default text' : 'متن استاندارد'}
              aria-label={isEn ? 'Default font' : 'فونت استاندارد'}
            >
              A
            </button>
            <button
              onClick={() => setFontSizeLevel(3)}
              className={`px-1.5 py-0.5 rounded text-sm font-bold cursor-pointer transition-colors ${
                fontSizeLevel === 3 ? 'bg-[#eb644c] text-[#261c0b]' : 'hover:text-[#e6ded0]'
              }`}
              title={isEn ? 'Large text for low light' : 'متن بزرگ برای تاریکی سالن'}
              aria-label={isEn ? 'Large font' : 'فونت بزرگ'}
            >
              A+
            </button>
          </div>
        </div>

        {/* Essay Content Area */}
        <div className="space-y-4">
          {/* First two paragraphs always shown for immediate immersion */}
          <div className="space-y-4">
            <p className={`${fontClasses[fontSizeLevel]} text-[#e6ded0] text-justify font-normal`}>
              {paragraphs[0]}
            </p>
            <p className={`${fontClasses[fontSizeLevel]} text-[#e6ded0] font-semibold text-[#eb644c]`}>
              {paragraphs[1]}
            </p>
          </div>

          {/* Expandable remaining paragraphs (collapsed by default across all viewports) */}
          <div
            id="essay-expanded-content"
            className={`space-y-4 transition-all duration-300 ${
              isExpanded ? 'block' : 'hidden'
            }`}
          >
            {paragraphs.slice(2).map((para, index) => {
              // Highlight the "Newity" concept paragraph (last paragraph)
              const isLast = index === paragraphs.slice(2).length - 1;
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
                {isEn ? essay.authorEn : essay.authorFa}
              </span>
            </div>
          </div>

          {/* Read More / Less Toggle Button across all viewports */}
          <div className="pt-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#2d2212] border border-[#4d3a20] hover:border-[#eb644c]/50 text-xs sm:text-sm font-semibold text-[#eb644c] transition-all cursor-pointer select-none"
              aria-expanded={isExpanded}
              aria-controls="essay-expanded-content"
            >
              <span>
                {isExpanded
                  ? isEn
                    ? 'Show Less'
                    : 'بستن متن کامل'
                  : isEn
                  ? 'Read Complete Essay (7 Paragraphs)'
                  : 'خواندن متن کامل یادداشت تحلیلی (۷ پاراگراف)'}
              </span>
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
