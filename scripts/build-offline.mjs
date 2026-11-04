import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as esbuild from 'esbuild';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const distDir = path.join(rootDir, 'dist');

function fileToDataUrl(absPath, mimeType) {
  const buf = fs.readFileSync(absPath);
  return `data:${mimeType};base64,${buf.toString('base64')}`;
}

async function buildStandaloneOfflineHtml() {
  // 1. Locate compiled CSS in dist/assets/
  const distAssetsDir = path.join(distDir, 'assets');
  if (!fs.existsSync(distAssetsDir)) {
    throw new Error('dist/assets directory not found. Run "vite build" first.');
  }

  const cssFiles = fs
    .readdirSync(distAssetsDir)
    .filter((f) => f.endsWith('.css'));
  if (cssFiles.length === 0) {
    throw new Error('No compiled CSS file found in dist/assets/.');
  }

  let cssContent = cssFiles
    .map((f) => fs.readFileSync(path.join(distAssetsDir, f), 'utf8'))
    .join('\n');

  // 2. Embed all Abar woff2 fonts inline as base64 data URLs
  const fontFiles = [
    'AbarMidFaNum-Medium.woff2',
    'AbarMidFaNum-SemiBold.woff2',
    'AbarMidFaNum-Bold.woff2',
    'AbarMidFaNum-ExtraBold.woff2',
  ];

  for (const fontFile of fontFiles) {
    const fontPath = path.join(publicDir, 'fonts', fontFile);
    if (!fs.existsSync(fontPath)) {
      throw new Error(`Missing font file: ${fontPath}`);
    }
    const fontDataUrl = fileToDataUrl(fontPath, 'font/woff2');
    const baseName = fontFile.replace('.woff2', '');
    // Match any url(...) referencing this font (with or without hash/quotes)
    const fontRegex = new RegExp(
      `url\\(\\s*['"]?[^'")']*${baseName}[^'")']*\\.woff2['"]?\\s*\\)`,
      'g'
    );
    cssContent = cssContent.replace(fontRegex, `url("${fontDataUrl}")`);
  }

  // 3. Bundle React application into a self-contained IIFE script via esbuild
  const bundleResult = await esbuild.build({
    entryPoints: [path.join(rootDir, 'src', 'main.tsx')],
    bundle: true,
    format: 'iife',
    platform: 'browser',
    target: ['es2020'],
    jsx: 'automatic',
    charset: 'utf8',
    write: false,
    loader: {
      '.css': 'empty',
    },
    define: {
      'process.env.NODE_ENV': '"production"',
    },
  });

  if (!bundleResult.outputFiles || bundleResult.outputFiles.length === 0) {
    throw new Error('esbuild produced no output files.');
  }

  let jsContent = bundleResult.outputFiles[0].text.replace(/\\u200[cC]/g, '\u200c');

  // 4. Inline all SVG and PNG assets referenced in the bundle
  const assetMappings = [
    {
      webPath: '/assets/logo-horizontal.svg',
      diskPath: path.join(publicDir, 'assets', 'logo-horizontal.svg'),
      mime: 'image/svg+xml',
    },
    {
      webPath: '/assets/title.svg',
      diskPath: path.join(publicDir, 'assets', 'title.svg'),
      mime: 'image/svg+xml',
    },
    {
      webPath: '/assets/violin-form.svg',
      diskPath: path.join(publicDir, 'assets', 'violin-form.svg'),
      mime: 'image/svg+xml',
    },
    {
      webPath: '/images/artists/alireza-mashayekhi.png',
      diskPath: path.join(publicDir, 'images', 'artists', 'علیرضا مشایخی.jpg'),
      mime: 'image/jpeg',
    },
    {
      webPath: '/images/artists/amin-ghaffari.png',
      diskPath: path.join(publicDir, 'images', 'artists', 'امین غفاری.jpg'),
      mime: 'image/jpeg',
    },
    {
      webPath: '/images/artists/arash-amini.png',
      diskPath: path.join(publicDir, 'images', 'artists', 'آرش امینی.jpg'),
      mime: 'image/jpeg',
    },
    {
      webPath: '/images/artists/farzan-farnia.png',
      diskPath: path.join(publicDir, 'images', 'artists', 'فرزان فرنیا.jpg'),
      mime: 'image/jpeg',
    },
  ];

  for (const asset of assetMappings) {
    if (!fs.existsSync(asset.diskPath)) {
      throw new Error(`Missing asset file: ${asset.diskPath}`);
    }
    const dataUrl = fileToDataUrl(asset.diskPath, asset.mime);
    jsContent = jsContent.split(asset.webPath).join(dataUrl);
  }

  // Safely escape any literal </script> inside JS string literals if present
  jsContent = jsContent.replace(/<\/script>/gi, '<\\/script>');

  // 5. Inline favicon logo.png
  const faviconDataUrl = fileToDataUrl(path.join(publicDir, 'logo.png'), 'image/png');

  // 6. Assemble standalone HTML document
  const standaloneHtml = `<!doctype html>
<html lang="fa" dir="rtl" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
    <meta name="theme-color" content="#261c0b" />
    <meta name="color-scheme" content="dark" />
    <title>موسیقی نو در ایران — بروشور دیجیتال کنسرت</title>
    <meta name="description" content="بروشور دیجیتال کنسرت موسیقی نو در ایران؛ اجرای آثاری از علیرضا مشایخی" />
    <meta property="og:title" content="موسیقی نو در ایران — بروشور دیجیتال کنسرت" />
    <meta property="og:description" content="بروشور دیجیتال کنسرت موسیقی نو در ایران؛ اجرای آثاری از علیرضا مشایخی" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="icon" type="image/png" href="${faviconDataUrl}" />
    <style id="standalone-offline-css">${cssContent}</style>
  </head>
  <body class="bg-[#261c0b] text-[#e6ded0] antialiased selection:bg-[#eb644c] selection:text-[#261c0b] overflow-x-hidden min-h-screen">
    <div id="root"></div>
    <script id="standalone-offline-js">${jsContent}</script>
  </body>
</html>
`;

  // 7. Verify required content and absence of deleted content
  const requiredStrings = [
    'لادن خلیل\u200cنسب',
    'آرش برائی\u200cنژاد',
    'هلیا رضایی\u200cپور',
    'طراح بروشور دیجیتال',
    'دپارتمان کوئین\u200cبی',
    'مؤسسه فرهنگی ـ هنری نماد',
    'data:font/woff2;base64,',
  ];

  for (const reqStr of requiredStrings) {
    if (!standaloneHtml.includes(reqStr)) {
      throw new Error(`Verification failed: standalone HTML is missing required string: ${reqStr}`);
    }
  }

  const forbiddenStrings = [
    'حمیدرضا اردلان',
    'جلال تهرانی',
    'مازیار مرتاضیه',
    'حمیدرضا عاطفی',
    'محسن رجب',
    'فریبا رهدار',
    'مکتب تهران',
    'لادن خلیلنسب',
    'آرش برائینژاد',
    'هلیا رضاییپور',
  ];

  for (const badStr of forbiddenStrings) {
    if (standaloneHtml.includes(badStr)) {
      throw new Error(`Verification failed: standalone HTML contains forbidden string: ${badStr}`);
    }
  }

  // 8. Write to both public/ and dist/
  const publicOut = path.join(publicDir, 'digital-guide-offline.html');
  const distOut = path.join(distDir, 'digital-guide-offline.html');

  fs.writeFileSync(publicOut, standaloneHtml, 'utf8');
  fs.writeFileSync(distOut, standaloneHtml, 'utf8');

  const sizeBytes = Buffer.byteLength(standaloneHtml, 'utf8');
  const sizeMB = (sizeBytes / (1024 * 1024)).toFixed(2);
  console.log(
    `Successfully generated standalone offline HTML: ${sizeBytes} bytes (${sizeMB} MB)`
  );
}

buildStandaloneOfflineHtml().catch((err) => {
  console.error('Error building standalone offline HTML:', err);
  process.exit(1);
});
