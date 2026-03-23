# ARCHITECTURE (Decisiones de Software)

## Por qué Astro
Construimos con **Astro 5+** para capitalizar el renderizado estático en el servidor (SSG/SSR). Con la directiva *Islands Architecture*, el usuario descarga `0kb` de JS a menos que haya un componente interactivo explicitly activado (ej. `<CookieBanner client:load />`).

## Integraciones y Dependencias
1. **TailwindCSS (v4 / Vite integration)**: Utilizado para utility-first styling sin overhead. No usamos CSS-in-JS.
2. **Vitest + Playwright**: Estándar corporativo para evitar despliegues averiados. Vitest evalúa funciones utilitarias y Playwright realiza Snapshot Testing visual y E2E.
3. **i18n (Astro Core)**: Enrutamiento nativo con `prefixDefaultLocale: false` para que `/` lance la web en `es` y `/en/` la de inglés.

## Estructura de Folders
- `src/components/`: Piezas UI aisladas (Botones, Tarjetas).
- `src/layouts/`: Estructura HTML (`<html>`, `<head>`, SEO, Footer global).
- `src/pages/`: Rutas visibles de la URL (ej. `index.astro`, `en/index.astro`).
- `src/i18n/`: Archivos `.ts` conteniendo diccionarios en ES/EN.
