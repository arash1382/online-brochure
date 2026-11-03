const OFFLINE_FILENAME = 'digital-guide-offline.html';

let cachedStandaloneHtml: string | null = null;
let inflightPreload: Promise<string | null> | null = null;

/**
 * Verifies that a candidate HTML string is the genuine standalone concert brochure
 * (containing the embedded styles, embedded application script, root container, and Persian title)
 * and NOT a redirect or authentication screen.
 */
export function isValidStandaloneBrochureHtml(html: string | null | undefined): html is string {
  if (typeof html !== 'string' || html.length < 100000) {
    return false;
  }
  return (
    html.includes('id="standalone-offline-css"') &&
    html.includes('id="standalone-offline-js"') &&
    html.includes('id="root"') &&
    html.includes('موسیقی نو در ایران')
  );
}

/**
 * Strips any reverse-proxy injected scripts or styles from the standalone HTML.
 */
export function sanitizeStandaloneHtml(html: string): string {
  const token = ['_aistudio', 'iframe'].join('-');
  const iframeScriptPattern = new RegExp(`<script[^>]*${token}\\\\.js[^>]*><\\\\/script>\\\\s*`, 'gi');
  return html.replace(iframeScriptPattern, '');
}

/**
 * If the user is already viewing the standalone offline HTML file (e.g. via file://),
 * reconstructs a fresh, clean standalone HTML document directly from the embedded
 * #standalone-offline-css and #standalone-offline-js tags in the current DOM.
 */
function reconstructFromOfflineDom(): string | null {
  if (typeof document === 'undefined') return null;

  const styleEl = document.getElementById('standalone-offline-css');
  const scriptEl = document.getElementById('standalone-offline-js');

  if (!styleEl || !scriptEl) {
    return null;
  }

  const iconEl = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
  const iconHref = iconEl?.getAttribute('href') || '';
  const iconTag = iconHref ? `<link rel="icon" type="image/png" href="${iconHref}" />` : '';

  const html = `<!doctype html>
<html lang="fa" dir="rtl" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
    <meta name="theme-color" content="#261c0b" />
    <meta name="color-scheme" content="dark" />
    <title>موسیقی نو در ایران — بروشور دیجیتال کنسرت</title>
    <meta name="description" content="بروشور دیجیتال کنسرت موسیقی نو در ایران؛ اجرای آثاری از علیرضا مشایخی توسط گروه موسیقی تهران" />
    ${iconTag}
    <style id="standalone-offline-css">${styleEl.textContent || ''}</style>
  </head>
  <body class="bg-[#261c0b] text-[#e6ded0] antialiased selection:bg-[#eb644c] selection:text-[#261c0b] overflow-x-hidden">
    <div id="root"></div>
    <script id="standalone-offline-js">${scriptEl.textContent || ''}</script>
  </body>
</html>`;

  return sanitizeStandaloneHtml(html);
}

/**
 * Converts an already-loaded HTMLImageElement in the live DOM to a data URL
 * using an offscreen canvas (requires zero network requests).
 */
function imageElementToDataUrl(img: HTMLImageElement): string | null {
  try {
    if (img.src.startsWith('data:')) return img.src;
    if (!img.complete || img.naturalWidth === 0 || img.naturalHeight === 0) return null;
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    ctx.drawImage(img, 0, 0);
    const isPngOrSvg = img.src.endsWith('.svg') || img.src.includes('logo');
    return canvas.toDataURL(isPngOrSvg ? 'image/png' : 'image/jpeg', 0.92);
  } catch {
    return null;
  }
}

/**
 * Zero-network fallback compiler: if all network fetches are blocked by browser
 * cookie settings in a cross-origin iframe, builds a standalone offline HTML file
 * directly from the already-loaded DOM, CSS rules, and decoded images in memory.
 */
async function buildFallbackStandaloneHtmlFromLiveDom(): Promise<string> {
  let cssText = '';
  for (const sheet of Array.from(document.styleSheets)) {
    try {
      const rules = sheet.cssRules || sheet.rules;
      for (const rule of Array.from(rules)) {
        cssText += rule.cssText + '\n';
      }
    } catch {
      // Ignore cross-origin stylesheet errors if any
    }
  }

  const rootEl = document.getElementById('root');
  const clonedRoot = rootEl ? (rootEl.cloneNode(true) as HTMLElement) : document.createElement('div');

  const liveImages = rootEl ? Array.from(rootEl.querySelectorAll('img')) : [];
  const clonedImages = Array.from(clonedRoot.querySelectorAll('img'));

  for (let i = 0; i < liveImages.length; i++) {
    const dataUrl = imageElementToDataUrl(liveImages[i]);
    if (dataUrl && clonedImages[i]) {
      clonedImages[i].setAttribute('src', dataUrl);
      clonedImages[i].removeAttribute('srcset');
    }
  }

  return `<!doctype html>
<html lang="fa" dir="rtl" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
    <meta name="theme-color" content="#261c0b" />
    <meta name="color-scheme" content="dark" />
    <title>موسیقی نو در ایران — بروشور دیجیتال کنسرت</title>
    <style id="standalone-offline-css">${cssText}</style>
  </head>
  <body class="bg-[#261c0b] text-[#e6ded0] antialiased selection:bg-[#eb644c] selection:text-[#261c0b] overflow-x-hidden">
    <div id="root">${clonedRoot.innerHTML}</div>
  </body>
</html>`;
}

/**
 * Preloads and validates the standalone offline brochure HTML into memory
 * so clicking the download button can immediately create a local Blob URL.
 */
export function preloadStandaloneBrochureHtml(): Promise<string | null> {
  const fromDom = reconstructFromOfflineDom();
  if (fromDom && isValidStandaloneBrochureHtml(fromDom)) {
    cachedStandaloneHtml = fromDom;
    return Promise.resolve(fromDom);
  }

  if (cachedStandaloneHtml && isValidStandaloneBrochureHtml(cachedStandaloneHtml)) {
    return Promise.resolve(cachedStandaloneHtml);
  }

  if (typeof window !== 'undefined' && window.location.protocol === 'file:') {
    return Promise.resolve(fromDom);
  }

  if (inflightPreload) {
    return inflightPreload;
  }

  inflightPreload = (async () => {
    const endpoints = ['/api/offline-brochure', '/digital-guide-offline.html'];
    for (const endpoint of endpoints) {
      try {
        const response = await fetch(endpoint, {
          method: 'GET',
          credentials: 'same-origin',
          cache: 'no-store',
        });
        if (!response.ok) continue;
        const text = await response.text();
        const cleaned = sanitizeStandaloneHtml(text);
        if (isValidStandaloneBrochureHtml(cleaned)) {
          cachedStandaloneHtml = cleaned;
          return cleaned;
        }
      } catch {
        // Continue to next endpoint
      }
    }
    return null;
  })().finally(() => {
    inflightPreload = null;
  });

  return inflightPreload;
}

/**
 * Triggers a 100% local Blob download of `digital-guide-offline.html`.
 * Never navigates the browser to an authenticated route or external URL.
 */
export async function downloadStandaloneBrochure(): Promise<void> {
  let htmlContent = reconstructFromOfflineDom();

  if (!isValidStandaloneBrochureHtml(htmlContent)) {
    htmlContent = cachedStandaloneHtml;
  }

  if (!isValidStandaloneBrochureHtml(htmlContent)) {
    htmlContent = await preloadStandaloneBrochureHtml();
  }

  if (!isValidStandaloneBrochureHtml(htmlContent)) {
    htmlContent = await buildFallbackStandaloneHtmlFromLiveDom();
  }

  const finalHtml = sanitizeStandaloneHtml(htmlContent);
  const blob = new Blob([finalHtml], { type: 'text/html;charset=utf-8' });
  const blobUrl = URL.createObjectURL(blob);

  const tempLink = document.createElement('a');
  tempLink.href = blobUrl;
  tempLink.download = OFFLINE_FILENAME;
  tempLink.style.display = 'none';
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);

  setTimeout(() => {
    URL.revokeObjectURL(blobUrl);
  }, 10000);
}
