import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import salon from './src/salon.config.js';

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Round badge (echoing the salon's circle logo) used as the browser-tab icon, colored from salon.theme.
const faviconSvg = () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <circle cx="32" cy="32" r="31" fill="${salon.theme.primary}"/>
  <circle cx="32" cy="32" r="26" fill="none" stroke="${salon.theme.accent}" stroke-width="2.5"/>
  <text x="32" y="39" text-anchor="middle" font-family="'Futura','Jost','Helvetica Neue',Arial,sans-serif" font-weight="700" font-size="${salon.logoLetter.length > 2 ? 19 : 26}" fill="#f5f0e9">${esc(salon.logoLetter)}</text>
</svg>
`;

// Fills index.html placeholders and the favicon from src/salon.config.js.
function salonPlugin() {
  return {
    name: 'salon-config',
    transformIndexHtml(html) {
      const t = salon.theme;
      const themeCss =
        `:root{--green:${t.primary};--brass:${t.accent};` +
        `--brass-hover:${t.accentHover};--brass-deep:${t.accentDeep}}`;
      return html
        .replaceAll('%SALON_TITLE%', esc(salon.seo.title))
        .replaceAll('%SALON_DESCRIPTION%', esc(salon.seo.description))
        .replaceAll('%SALON_PRIMARY%', esc(t.primary))
        .replace('</head>', `    <style>${themeCss}</style>\n  </head>`);
    },
    configureServer(server) {
      server.middlewares.use('/favicon.svg', (req, res) => {
        res.setHeader('Content-Type', 'image/svg+xml');
        res.end(faviconSvg());
      });
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'favicon.svg', source: faviconSvg() });
    },
  };
}

export default defineConfig({
  plugins: [react(), salonPlugin()],
});
