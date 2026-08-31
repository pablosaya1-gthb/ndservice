import { defineConfig } from 'astro/config';

// En producción el sitio vive en https://pablosaya1-gthb.github.io/ndservice/
// (subpath de GitHub Pages) → base '/ndservice/'. En el servidor de
// desarrollo se sirve desde la raíz → base ''.
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://ndservicereparaciones.com.ar',
  base: isProd ? '/ndservice/' : '',
  server: {
    host: true,
    allowedHosts: true,
  },
});
