import React, { useState } from 'react';
import { brochureData } from '../data/brochureData';
import {
  ExternalLink,
  Instagram,
  Globe,
  HeartHandshake,
  Check,
  Share2,
} from 'lucide-react';

interface CreditsSectionProps {
  currentLang: 'fa' | 'en';
}

export const CreditsSection: React.FC<CreditsSectionProps> = ({ currentLang }) => {
  const isEn = currentLang === 'en';
  const { credits, acknowledgements, links } = brochureData;
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShareBrochure = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <footer
      id="credits"
      className="pt-12 pb-16 px-4 bg-[#181206] text-[#e6ded0] border-t border-[#4d3a20]/60 relative overflow-hidden"
      aria-label={isEn ? 'Credits and Acknowledgements' : 'عوامل، سپاس و پیوندها'}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#eb644c] mb-2">
            <span className="w-4 h-[1px] bg-[#eb644c]" />
            <span>{isEn ? 'Production & Gratitude' : 'عوامل و سپاسگزاری'}</span>
            <span className="w-4 h-[1px] bg-[#eb644c]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#e6ded0]">
            {isEn ? 'Credits & Acknowledgements' : 'عوامل اجرایی و قدردانی'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Executive & Production Credits */}
          <div className="bg-[#261c0b] border border-[#4d3a20] rounded-2xl p-5 sm:p-6">
            <h3 className="text-base font-bold text-[#eb644c] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#eb644c]" />
              <span>{isEn ? 'Production Team' : 'مدیریت و عوامل اجرایی'}</span>
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 rounded-lg bg-[#2d2212] border border-[#4d3a20]/60 flex items-center justify-between">
                <span className="text-[#b4a899]">
                  {isEn ? 'Organizer' : 'برگزارکننده'}:
                </span>
                <span className="font-bold text-[#e6ded0]">
                  {isEn ? credits.organizerEn : credits.organizerFa}
                </span>
              </div>

              {(isEn ? credits.itemsEn : credits.itemsFa).map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[#2d2212] border border-[#4d3a20]/60 flex items-center justify-between"
                >
                  <span className="text-[#b4a899]">{item.role}:</span>
                  <span className="font-bold text-[#e6ded0]">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Acknowledgements / سپاس و قدردانی */}
          <div className="bg-[#261c0b] border border-[#4d3a20] rounded-2xl p-5 sm:p-6">
            <h3 className="text-base font-bold text-[#eb644c] mb-3 flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-[#eb644c]" />
              <span>{isEn ? acknowledgements.titleEn : acknowledgements.titleFa}</span>
            </h3>

            <p className="text-xs text-[#b4a899] mb-4 leading-relaxed">
              {isEn ? acknowledgements.introEn : acknowledgements.introFa}
            </p>

            <div className="space-y-2 text-xs">
              {(isEn ? acknowledgements.listEn : acknowledgements.listFa).map(
                (item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-[#2d2212] border border-[#4d3a20]/60 flex flex-col gap-0.5"
                  >
                    <span className="font-bold text-[#e6ded0]">{item.name}</span>
                    <span className="text-[11px] text-[#b4a899]">{item.title}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Official Channels & Links */}
        <div className="bg-[#261c0b] border border-[#4d3a20] rounded-2xl p-5 sm:p-6 mb-10">
          <h3 className="text-xs font-semibold text-[#b4a899] uppercase tracking-wider mb-4 text-center">
            {isEn ? 'Official Portals & Social Channels' : 'درگاه‌های رسمی و اطلاع‌رسانی'}
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
                  {isEn ? links.composerWebsiteLabelEn : links.composerWebsiteLabelFa}
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
                  {isEn ? links.instagramLabelEn : links.instagramLabelFa}
                </span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#b4a899] group-hover:text-[#eb644c]" />
            </a>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-[#4d3a20]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7a6e60]">
          <div>
            © {new Date().getFullYear()} {isEn ? 'Tehran Music Group — New Music in Iran' : 'گروه موسیقی تهران — موسیقی نو در ایران'}
          </div>

          <button
            onClick={handleShareBrochure}
            className="flex items-center gap-1.5 text-[#b4a899] hover:text-[#eb644c] transition-colors cursor-pointer"
          >
            {copiedLink ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">{isEn ? 'Link copied!' : 'پیوند بروشور کپی شد!'}</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>{isEn ? 'Share Digital Brochure' : 'اشتراک‌گذاری نشانی بروشور'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </footer>
  );
};
