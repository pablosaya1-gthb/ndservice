# N/D Service Reparaciones — Sitio web (rediseño)

Sitio one-page en **Astro** para [N/D Service Reparaciones](https://ndservicereparaciones.com.ar):
service técnico a domicilio de electrodomésticos en Zona Oeste, Zona Norte, Zona Sur y CABA.

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # desarrollo (http://localhost:4321)
npm run build    # build de producción (carpeta dist/)
npm run preview  # servir el build localmente
```

## Estructura

```
public/
  favicon.svg          favicon
  logo.svg             logo placeholder (REEMPLAZAR por el logo oficial)
  mapa-zonas.svg       mapa esquemático de cobertura
  fotos/               ← subir acá las fotos reales de trabajos/equipo
src/
  data/site.ts         ★ TODO el contenido y configuración del sitio vive acá
  pages/index.astro    página única (SEO, Open Graph, JSON-LD LocalBusiness)
  components/          una sección por componente (Header, Hero, Services, FAQ…)
  styles/global.css    sistema de diseño (tokens, paleta, tipografías)
```

## Cambiar contenido

Todo el texto, teléfonos, zonas, fallas por equipo, FAQs, opiniones y cifras se editan en
**`src/data/site.ts`**. No hace falta tocar los componentes.

## Pendientes antes del go-live

1. **Logo oficial**: reemplazar `public/logo.svg` por `public/logo.png` (o el formato que
   se tenga) y actualizar `site.logo` en `src/data/site.ts`.
2. **Fotos reales**: subir a `public/fotos/` y reemplazar los `<MediaPlaceholder/>`
   (búscalos en `src/components/` por "Foto real") por `<img src="/fotos/…jpg" alt="…">`.
3. **Costo de la visita/diagnóstico** → reflejar en la FAQ 1 (`src/data/site.ts`).
4. **Garantía concreta** por tipo de trabajo (días/meses) → reasons y FAQ 4.
5. **Formas de pago** → agregar a la sección de contacto o FAQ si se decide publicarlas.
6. Confirmar que el número de WhatsApp (+54 9 11 5459-9180) sea el canal activo de ventas.

## Despliegue

El build genera HTML/CSS/JS estáticos en `dist/`. Cualquier hosting estático sirve:
Vercel, Netlify, Cloudflare Pages o subir `dist/` al hosting actual de WordPress
(recomendado: dominio nuevo o subcarpeta y redirección 301 de la home vieja).

## Decisiones de diseño (resumen)

- **Mobile-first**, accesible (WCAG AA: HTML semántico, contraste, `focus-visible`,
  `prefers-reduced-motion`, skip link).
- **Paleta**: azul marino `#0E2A47` (confianza) + naranja `#F97316` (acción) + verde
  `#128C7E` (acciones de WhatsApp). Tipografías autoalojadas: Sora (display) + Inter (cuerpo).
- **Conversión**: cada CTA abre WhatsApp con el mensaje ya prellenado según el equipo;
  el formulario arma el mensaje y lo envía al mismo número (sin backend).
- **SEO**: meta tags, Open Graph y JSON-LD `LocalBusiness` con horarios, zonas y contacto.
