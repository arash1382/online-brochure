import express from 'express';
import fs from 'fs';
import http from 'http';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const httpServer = http.createServer(app);
const port = parseInt(process.env.PORT || '3000', 10);

app.use(express.json({ limit: '10mb' }));

function resolveOfflineHtmlPath(): string | null {
  const distPath = path.resolve(__dirname, 'dist', 'digital-guide-offline.html');
  if (fs.existsSync(distPath)) return distPath;
  const publicPath = path.resolve(__dirname, 'public', 'digital-guide-offline.html');
  if (fs.existsSync(publicPath)) return publicPath;
  return null;
}

app.get(['/api/offline-brochure', '/digital-guide-offline.html'], (_req, res) => {
  const filePath = resolveOfflineHtmlPath();
  if (!filePath) {
    res.status(404).send('Offline guide not found');
    return;
  }
  res.setHeader('Content-Disposition', 'attachment; filename="digital-guide-offline.html"');
  // Use application/octet-stream so reverse proxies with sub_filter_types text/html
  // never inject iframe/auth scripts into the downloaded standalone HTML file.
  res.setHeader('Content-Type', 'application/octet-stream');
  res.setHeader('Cache-Control', 'no-store');
  res.sendFile(filePath);
});

if (process.env.NODE_ENV !== 'production') {
  const { createServer } = await import('vite');
  const vite = await createServer({
    server: {
      middlewareMode: true,
      ws: {
        server: httpServer,
      },
    },
    appType: 'spa',
  });
  app.use(vite.middlewares);
} else {
  app.use(express.static(path.resolve(__dirname, 'dist')));
  app.get('*', (_req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
}

httpServer.listen(port, '0.0.0.0', () => {
  console.log(`Server listening at http://0.0.0.0:${port}`);
});
