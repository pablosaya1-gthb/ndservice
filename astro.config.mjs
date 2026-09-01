import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// En producción el sitio vive en https://pablosaya1-gthb.github.io/ndservice/
// (subpath de GitHub Pages) → base '/ndservice/'. En el servidor de
// desarrollo se sirve desde la raíz → base ''.
const isProd = process.env.NODE_ENV === 'production';

// ★ GO-LIVE: cuando el sitio se mueva a ndservicereparaciones.com.ar,
// cambiar SOLO esta línea; canonical, Open Graph, sitemap y JSON-LD
// se actualizan solos.
export const SITE_URL =
  'https://pablosaya1-gthb.github.io/ndservice';

export default defineConfig({
  site: SITE_URL,
  base: isProd ? '/ndservice/' : '',
  integrations: [sitemap()],
  server: {
    host: true,
    allowedHosts: true,
  },
});
