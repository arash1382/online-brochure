import React, { useEffect, useState } from 'react';
import { Download, X } from 'lucide-react';
import {
  downloadStandaloneBrochure,
  preloadStandaloneBrochureHtml,
} from '../utils/offlineBrochureDownload';

const SESSION_STORAGE_KEY = 'concert_brochure_download_modal_dismissed';

export const FirstVisitDownloadModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Never open if running inside the downloaded standalone file itself
    if (
      window.location.protocol === 'file:' ||
      document.getElementById('standalone-offline-js')
    ) {
      return;
    }

    try {
      const alreadyDismissed =
        window.sessionStorage.getItem(SESSION_STORAGE_KEY) === 'true';
      if (alreadyDismissed) {
        return;
      }
    } catch {
      // Ignore storage access errors in strict privacy contexts
    }

    setIsOpen(true);
    void preloadStandaloneBrochureHtml();
  }, []);

  const markDismissedAndClose = () => {
    try {
      window.sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
    } catch {
      // Ignore storage access errors
    }
    setIsOpen(false);
  };

  const handleDownload = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isDownloading) return;
    setIsDownloading(true);
    try {
      await downloadStandaloneBrochure();
    } finally {
      setIsDownloading(false);
      markDismissedAndClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      dir="rtl"
      role="dialog"
      aria-modal="true"
      aria-labelledby="first-visit-download-title"
      aria-describedby="first-visit-download-description"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={markDismissedAndClose}
    >
      <div
        className="relative w-full max-w-md bg-[#261c0b] border border-[#4d3a20] rounded-2xl p-6 sm:p-7 text-[#e6ded0] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={markDismissedAndClose}
          aria-label="بستن پنجره"
          className="absolute top-4 left-4 p-1.5 rounded-lg text-[#b4a899] hover:text-[#e6ded0] hover:bg-[#2d2212] border border-transparent hover:border-[#4d3a20]/60 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Title */}
        <h2
          id="first-visit-download-title"
          className="text-lg sm:text-xl font-bold text-[#e6ded0] mb-3.5 pr-0 pl-8 text-right leading-snug"
        >
          راهنمای دیجیتال کنسرت
        </h2>

        {/* Description */}
        <p
          id="first-visit-download-description"
          className="text-xs sm:text-sm text-[#b4a899] leading-relaxed text-right mb-6"
        >
          با توجه به احتمال محدودیت دسترسی به اینترنت در فضای سالن، پیشنهاد می‌کنیم پیش از شروع اجرا، راهنمای دیجیتال را دانلود کنید تا در طول برنامه بتوانید بدون نیاز به اینترنت به اطلاعات کنسرت دسترسی داشته باشید.
        </p>

        {/* Primary Download Button */}
        <button
          type="button"
          onClick={handleDownload}
          disabled={isDownloading}
          className="w-full py-3.5 px-5 rounded-xl bg-[#eb644c] hover:bg-[#eb644c]/90 text-[#261c0b] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer disabled:opacity-70"
        >
          <Download className="w-4 h-4 shrink-0" />
          <span>دانلود راهنمای دیجیتال</span>
        </button>

        {/* Small caption below the button */}
        <p className="mt-2.5 text-[11px] sm:text-xs text-[#7a6e60] text-center">
          قابل استفاده بدون اتصال به اینترنت
        </p>
      </div>
    </div>
  );
};
