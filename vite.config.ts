import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, type Plugin } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function getMimeType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case '.woff2':
      return 'font/woff2';
    case '.woff':
      return 'font/woff';
    case '.ttf':
      return 'font/ttf';
    case '.svg':
      return 'image/svg+xml';
    case '.png':
      return 'image/png';
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.webp':
      return 'image/webp';
    case '.ico':
      return 'image/x-icon';
    default:
      return 'application/octet-stream';
  }
}

function collectPublicAssetsAsDataUrls(dir: string, baseDir: string, map: Map<string, string>) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'aistudio') continue;
      collectPublicAssetsAsDataUrls(fullPath, baseDir, map);
    } else if (entry.isFile()) {
      if (entry.name === 'digital-guide-offline.html') continue;
      const relPath = '/' + path.relative(baseDir, fullPath).split(path.sep).join('/');
      const mime = getMimeType(fullPath);
      const base64 = fs.readFileSync(fullPath).toString('base64');
      map.set(relPath, `data:${mime};base64,${base64}`);
    }
  }

  // Map artist PNG paths to their identical full-resolution JPEG originals in public/images/artists/
  // so the standalone HTML file stays ~4.9 MB instead of 25.5 MB with zero quality loss.
  const artistJpegMappings: Record<string, string> = {
    '/images/artists/alireza-mashayekhi.png': '/images/artists/علیرضا مشایخی.jpg',
    '/images/artists/amin-ghaffari.png': '/images/artists/امین غفاری.jpg',
    '/images/artists/arash-amini.png': '/images/artists/آرش امینی.jpg',
    '/images/artists/farzan-farnia.png': '/images/artists/فرزان فرنیا.jpg',
  };

  for (const [pngPath, jpgPath] of Object.entries(artistJpegMappings)) {
    const jpgDataUrl = map.get(jpgPath);
    if (jpgDataUrl) {
      map.set(pngPath, jpgDataUrl);
    }
  }
}

function disableHmrWebsocketWhenDisabledPlugin(): Plugin {
  return {
    name: 'disable-hmr-ws-when-disabled',
    enforce: 'post',
    transform(code, id) {
      if (process.env.DISABLE_HMR === 'true' && id.includes('vite/dist/client/client.mjs')) {
        return code
          .replace('console.debug("[vite] connecting...");', '')
          .replace('transport.connect(createHMRHandler(handleMessage));', '');
      }
      return null;
    },
  };
}

function standaloneOfflineGuidePlugin(): Plugin {
  return {
    name: 'standalone-offline-guide',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0];
        if (url === '/api/offline-brochure' || url === '/digital-guide-offline.html') {
          const distOffline = path.resolve(__dirname, 'dist', 'digital-guide-offline.html');
          const publicOffline = path.resolve(__dirname, 'public', 'digital-guide-offline.html');
          const filePath = fs.existsSync(distOffline)
            ? distOffline
            : fs.existsSync(publicOffline)
              ? publicOffline
              : null;

          if (filePath) {
            res.setHeader('Content-Disposition', 'attachment; filename="digital-guide-offline.html"');
            res.setHeader('Content-Type', 'application/octet-stream');
            res.setHeader('Cache-Control', 'no-store');
            fs.createReadStream(filePath).pipe(res);
            return;
          }
        }
        next();
      });
    },
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const publicDir = path.resolve(__dirname, 'public');
      const publicOfflinePath = path.join(publicDir, 'digital-guide-offline.html');
      const distOfflinePath = path.join(distDir, 'digital-guide-offline.html');

      // Preserve the existing pre-built standalone offline HTML file without regenerating or modifying it
      if (fs.existsSync(publicOfflinePath)) {
        fs.copyFileSync(publicOfflinePath, distOfflinePath);
        return;
      }

      const indexHtmlPath = path.join(distDir, 'index.html');

      if (!fs.existsSync(indexHtmlPath)) return;

      const assetDataUrls = new Map<string, string>();
      collectPublicAssetsAsDataUrls(publicDir, publicDir, assetDataUrls);

      let html = fs.readFileSync(indexHtmlPath, 'utf-8');

      // Remove any AI Studio iframe script if ever present
      html = html.replace(/<script[^>]*_aistudio-iframe\.js[^>]*><\/script>\s*/gi, '');

      // Remove font preload links since fonts are embedded directly as data URLs in @font-face
      html = html.replace(/<link[^>]*rel=["']preload["'][^>]*as=["']font["'][^>]*>\s*/gi, '');

      // Inline all stylesheet links and embed font/asset URLs inside CSS
      html = html.replace(
        /<link[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["'][^>]*>/gi,
        (_match, href: string) => {
          const cssRelPath = href.replace(/^\//, '');
          const cssFullPath = path.join(distDir, cssRelPath);
          if (!fs.existsSync(cssFullPath)) return _match;

          let cssContent = fs.readFileSync(cssFullPath, 'utf-8');
          for (const [assetPath, dataUrl] of assetDataUrls.entries()) {
            cssContent = cssContent.split(`url(${assetPath})`).join(`url("${dataUrl}")`);
            cssContent = cssContent.split(`url('${assetPath}')`).join(`url("${dataUrl}")`);
            cssContent = cssContent.split(`url("${assetPath}")`).join(`url("${dataUrl}")`);
          }
          return `<style id="standalone-offline-css">${cssContent}</style>`;
        }
      );

      // Extract and inline scripts, replacing all asset paths with data URLs
      const inlinedScripts: string[] = [];
      html = html.replace(
        /<script[^>]*type=["']module["'][^>]*src=["']([^"']+)["'][^>]*><\/script>\s*/gi,
        (_match, src: string) => {
          const jsRelPath = src.replace(/^\//, '');
          const jsFullPath = path.join(distDir, jsRelPath);
          if (!fs.existsSync(jsFullPath)) return _match;

          let jsContent = fs.readFileSync(jsFullPath, 'utf-8');
          for (const [assetPath, dataUrl] of assetDataUrls.entries()) {
            if (jsContent.includes(assetPath)) {
              jsContent = jsContent.split(assetPath).join(dataUrl);
            }
          }
          jsContent = jsContent.replace(/<\/script/gi, '<\\/script');
          inlinedScripts.push(`<script id="standalone-offline-js">${jsContent}</script>`);
          return '';
        }
      );

      // Embed remaining asset paths in HTML (such as favicon /logo.png)
      for (const [assetPath, dataUrl] of assetDataUrls.entries()) {
        if (html.includes(`"${assetPath}"`)) {
          html = html.split(`"${assetPath}"`).join(`"${dataUrl}"`);
        }
        if (html.includes(`'${assetPath}'`)) {
          html = html.split(`'${assetPath}'`).join(`'${dataUrl}'`);
        }
      }

      // Place inlined script right after <div id="root"></div> so DOM root exists before script runs
      if (inlinedScripts.length > 0) {
        const scriptsBlock = inlinedScripts.join('\n');
        html = html.split('<div id="root"></div>').join(`<div id="root"></div>\n    ${scriptsBlock}`);
      }

      fs.writeFileSync(distOfflinePath, html, 'utf-8');

      // Also write to public/digital-guide-offline.html so dev server static serving has the fresh build
      fs.writeFileSync(publicOfflinePath, html, 'utf-8');
    },
  };
}

export default defineConfig(({ command }) => {
  if (command === 'build') {
    process.env.NODE_ENV = 'production';
  }
  return {
    plugins: [
      react(),
      tailwindcss(),
      disableHmrWebsocketWhenDisabledPlugin(),
      standaloneOfflineGuidePlugin(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('.', import.meta.url)),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
