import { defineConfig } from 'astro/config';

// Sitio de producción: https://ndservicereparaciones.com.ar
// `allowedHosts: true` solo afecta al servidor de desarrollo
// (permite que la preview del entorno de trabajo cargue).
export default defineConfig({
  site: 'https://ndservicereparaciones.com.ar',
  server: {
    host: true,
    allowedHosts: true,
  },
});
