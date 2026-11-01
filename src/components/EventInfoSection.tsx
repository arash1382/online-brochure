import React, { useState } from 'react';
import { brochureData } from '../data/brochureData';
import {
  MapPin,
  Building2,
  Copy,
  Check,
  Share2,
  Navigation,
  VolumeX,
} from 'lucide-react';

interface EventInfoSectionProps {
  currentLang: 'fa' | 'en';
}

export const EventInfoSection: React.FC<EventInfoSectionProps> = ({ currentLang }) => {
  const isEn = currentLang === 'en';
  const { event } = brochureData;
  const [copied, setCopied] = useState(false);

  const handleCopyDetails = () => {
    const details = isEn
      ? `${event.titleEn}\n${event.subtitleEn}\nOrganizer: ${event.organizerEn}\nDate: ${event.dateEn}\nTime: ${event.timeEn}\nVenue: ${event.venueEn} (${event.venueAddressEn})`
      : `${event.titleFa}\n${event.subtitleFa}\nبرگزارکننده: ${event.organizerFa}\nتاریخ: ${event.dateFa}\nساعت: ${event.timeFa}\nمکان: ${event.venueFa} (${event.venueAddressFa})`;

    navigator.clipboard.writeText(details).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: isEn ? event.titleEn : event.titleFa,
          text: isEn ? `${event.titleEn} — ${event.subtitleEn}` : `${event.titleFa} — ${event.subtitleFa}`,
          url: window.location.href,
        });
      } catch {
        // User cancelled or share failed silently
      }
    } else {
      handleCopyDetails();
    }
  };

  return (
    <section
      id="event"
      className="py-12 sm:py-16 px-4 border-b border-[#4d3a20]/40 bg-[#261c0b]"
      aria-label={isEn ? 'Event Information' : 'اطلاعات رویداد'}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#eb644c] mb-2">
            <span className="w-4 h-[1px] bg-[#eb644c]" />
            <span>{isEn ? 'Official Concert Details' : 'مشخصات رسمی رویداد'}</span>
            <span className="w-4 h-[1px] bg-[#eb644c]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#e6ded0]">
            {isEn ? 'Concert Information' : 'اطلاعات کنسرت'}
          </h2>
          <p className="text-xs sm:text-sm text-[#b4a899] mt-1.5 max-w-lg mx-auto">
            {isEn ? event.descriptionEn : event.descriptionFa}
          </p>
        </div>

        {/* Detailed Info Cards Grid (Card 2 removed per instructions) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1: Organizer & Leadership */}
          <div className="bg-[#2d2212] border border-[#4d3a20] rounded-xl p-5 hover:border-[#eb644c]/40 transition-colors">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#eb644c]/15 text-[#eb644c] flex items-center justify-center shrink-0 mt-0.5">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-[#b4a899] font-medium">
                  {isEn ? 'Organizer' : 'برگزارکننده'}
                </div>
                <h3 className="text-base font-bold text-[#e6ded0] mt-0.5">
                  {isEn ? event.organizerEn : event.organizerFa}
                </h3>
                <p className="text-xs text-[#b4a899] mt-1.5 leading-relaxed">
                  {isEn
                    ? 'Dedicated to the performance and research of contemporary classical music, presenting Iranian modern masterpieces.'
                    : 'نهاد تخصصی اجرای موسیقی معاصر ایران، با تمرکز بر بازنمایی آثار اندیشه‌ورزانه آهنگسازان پیشرو.'}
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Venue & Location */}
          <div className="bg-[#2d2212] border border-[#4d3a20] rounded-xl p-5 hover:border-[#eb644c]/40 transition-colors">
            <div className="flex flex-col justify-between h-full gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#eb644c]/15 text-[#eb644c] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#b4a899] font-medium">
                    {isEn ? 'Concert Hall & Address' : 'تالار اجرا و نشانی'}
                  </div>
                  <h3 className="text-base font-bold text-[#e6ded0] mt-0.5">
                    {isEn ? event.venueEn : event.venueFa}
                  </h3>
                  <p className="text-xs text-[#b4a899] mt-1">
                    {isEn ? event.venueAddressEn : event.venueAddressFa}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#4d3a20]/40">
                <a
                  href="https://maps.google.com/?q=Vahdat+Hall+Tehran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#392b17] hover:bg-[#4d3a20] border border-[#4d3a20] text-xs font-medium text-[#e6ded0] transition-colors cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#eb644c]" />
                  <span>{isEn ? 'Open in Maps' : 'مسیریابی'}</span>
                </a>

                <button
                  onClick={handleCopyDetails}
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#392b17] hover:bg-[#4d3a20] border border-[#4d3a20] text-xs font-medium text-[#e6ded0] transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{isEn ? 'Copied!' : 'کپی شد!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#eb644c]" />
                      <span>{isEn ? 'Copy Details' : 'کپی مشخصات'}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleShare}
                  className="p-2 rounded-lg bg-[#392b17] hover:bg-[#4d3a20] border border-[#4d3a20] text-[#e6ded0] transition-colors cursor-pointer"
                  title={isEn ? 'Share Brochure' : 'اشتراک‌گذاری بروشور'}
                >
                  <Share2 className="w-4 h-4 text-[#eb644c]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Concert Hall Courtesy & Etiquette Note */}
        <div className="mt-4 p-3.5 rounded-lg bg-[#181206]/80 border border-[#4d3a20]/60 flex items-center gap-3 text-xs text-[#b4a899]">
          <VolumeX className="w-4 h-4 text-[#eb644c] shrink-0" />
          <p className="leading-relaxed">
            {isEn
              ? 'Auditorium Protocol: Please silence mobile devices and maintain low screen brightness inside the hall during performances.'
              : 'نکته تالار: به‌منظور تمرکز بر اصوات و سکوت‌های اثر، خواهشمند است تلفن همراه را در حالت بی‌صدا قرار داده و نور نمایشگر را کاهش دهید.'}
          </p>
        </div>
      </div>
    </section>
  );
};
