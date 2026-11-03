import React, { useState } from 'react';
import { brochureData } from '../data/brochureData';
import { ExternalLink, Instagram, Globe, Check, Share2, HeartHandshake } from 'lucide-react';

export const AcknowledgementsSection: React.FC = () => {
  const { acknowledgements, specialThanks, links } = brochureData;
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShareBrochure = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <footer
      id="acknowledgements"
      className="pt-12 pb-16 px-4 bg-[#181206] text-[#e6ded0] border-t border-[#4d3a20]/60 relative overflow-hidden"
      aria-label="سپاس و قدردانی"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header: Title «سپاس و قدردانی» */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#e6ded0] flex items-center justify-center gap-2.5">
            <HeartHandshake className="w-6 h-6 text-[#eb644c]" />
            <span>سپاس و قدردانی</span>
          </h2>
        </div>

        {/* Introductory acknowledgement text */}
        <p className="text-start text-xs sm:text-sm text-[#b4a899] mb-6 leading-relaxed">
          {acknowledgements.intro}
        </p>

        {/* Two Separate Content Cards Vertically Stacked */}
        <div className="space-y-5 mb-10">
          {/* Card 1: Existing organizations and individuals */}
          <div className="bg-[#261c0b] border border-[#4d3a20] rounded-2xl p-5 sm:p-6 shadow-sm">
            <div className="space-y-2.5 text-xs sm:text-sm">
              {acknowledgements.list.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[#2d2212] border border-[#4d3a20]/60 flex flex-col gap-0.5"
                >
                  <span className="font-bold text-[#e6ded0]">{item.name}</span>
                  {item.title ? (
                    <span className="text-[11px] sm:text-xs text-[#b4a899]">{item.title}</span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: New acknowledgement list (7 entries, each on its own line) */}
          <div className="bg-[#261c0b] border border-[#4d3a20] rounded-2xl p-5 sm:p-6 shadow-sm">
            <div className="space-y-2 text-xs sm:text-sm">
              {specialThanks.map((name, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[#2d2212] border border-[#4d3a20]/60"
                >
                  <span className="font-bold text-[#e6ded0] block">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Official Channels & Links */}
        <div className="bg-[#261c0b] border border-[#4d3a20] rounded-2xl p-5 sm:p-6 mb-10 shadow-sm">
          <h3 className="text-xs font-semibold text-[#b4a899] uppercase tracking-wider mb-4 text-center">
            درگاه‌های رسمی و اطلاع‌رسانی
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Alireza Mashayekhi Website */}
            <a
              href={links.composerWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#2d2212] hover:bg-[#392b17] border border-[#4d3a20] hover:border-[#eb644c]/60 flex items-center justify-between text-xs font-semibold transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#eb644c]" />
                <span className="text-[#e6ded0] group-hover:text-[#eb644c] transition-colors">
                  {links.composerWebsiteLabel}
                </span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#b4a899] group-hover:text-[#eb644c]" />
            </a>

            {/* Tehran Music Group Instagram */}
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#2d2212] hover:bg-[#392b17] border border-[#4d3a20] hover:border-[#eb644c]/60 flex items-center justify-between text-xs font-semibold transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#eb644c]" />
                <span className="text-[#e6ded0] group-hover:text-[#eb644c] transition-colors">
                  {links.instagramLabel}
                </span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#b4a899] group-hover:text-[#eb644c]" />
            </a>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-[#4d3a20]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7a6e60]">
          <div>
            © {new Date().getFullYear()} گروه موسیقی تهران — موسیقی نو در ایران
          </div>

          <button
            onClick={handleShareBrochure}
            className="flex items-center gap-1.5 text-[#b4a899] hover:text-[#eb644c] transition-colors cursor-pointer"
          >
            {copiedLink ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">پیوند بروشور کپی شد!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>اشتراک‌گذاری نشانی بروشور</span>
              </>
            )}
          </button>
        </div>
      </div>
    </footer>
  );
};
