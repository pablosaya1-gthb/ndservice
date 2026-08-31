// Base de despliegue para referencias de assets en plantillas.
// Debe coincidir con `base` en astro.config.mjs (que sí usa barra final).
// - build de producción (MODE === 'production'): '/ndservice'
//   → el sitio vive en https://pablosaya1-gthb.github.io/ndservice/
// - desarrollo local: '' (raíz)
// Uso en plantillas: `${base}/logo.svg` → /ndservice/logo.svg o /logo.svg
export const base: string = import.meta.env.MODE === 'production' ? '/ndservice' : '';
