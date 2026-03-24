# Smart Deploy: Guía Técnica (Netlify)

Este proyecto utiliza un sistema de **Smart Deploy** optimizado para Astro, diseñado para maximizar la velocidad de desarrollo y evitar builds innecesarios en Netlify.

## 🤖 ¿Cómo funciona?

El sistema es ahora **completamente automático**. Netlify analiza cada push y decide si debe realizar un build basándose en los archivos modificados:

1.  **Build Automático**: Se disparará siempre que detecte cambios en:
    -   `src/` (Código fuente, componentes, páginas).
    -   `public/` (Imágenes, activos, PDFs).
    -   `package.json` / `package-lock.json`.
    -   `astro.config.mjs` / `netlify.toml`.

2.  **Ignorado Inteligente**: Netlify **no perderá tiempo ni minutos** si solo has modificado:
    -   Documentación técnica (`docs/*.md`).
    -   Archivos del sistema de inteligencia (`.gemini/`, `task.md`, `walkthrough.md`).
    -   Notas de versión (`CHANGELOG.md`, `ROADMAP.md`).

## 🛠️ ¿Cómo forzar un build?

Si por alguna razón necesitas forzar un build sin cambios en el código, puedes:
1.  Limpiar el cache y desplegar directamente desde el **Netlify Dashboard**.
2.  O simplemente realizar un commit vacío si es necesario (aunque el sistema automático cubre el 99% de los casos).

---
**Nota**: Este sistema está configurado en el archivo `netlify.toml` mediante la directiva `ignore`.
