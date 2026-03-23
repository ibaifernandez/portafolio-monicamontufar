# AI Rules (AI-RULES.md)

Instrucciones estáticas diseñadas específicamente para condicionar el comportamiento del LLM integrado en el IDE y de agentes automatizados en este repositorio.

## Code Standards
- **Componentes Astro (`.astro`)**: Favorecer estilos locales `<style>` solo si son extremadamente lógicos, pero la norma general es usar puras utilidades **TailwindCSS**.
- **JavaScript al mínimo**: Evitar integraciones con React/Vue si podemos resolverlo con Alpine.js sutil o Vanilla JS en etiquetas `<script>` normales. Astro Islands manda.
- **Tipado Fuerte**: Usar **TypeScript** (`.ts`, `.tsx`, `<script lang="ts">`) por default para interfaces `Props` en todos los componentes.

## Git Workflow
- Solo hacer `git push` a `main` cuando pase los checks locales (Vitest & Playwright) y Lighthouse arroje verde en local.
- No activar deploys descontrolados.

## Internacionalización
- Usa la convención de diccionarios locales (`src/i18n/ui.ts`) u objetos tipo Record de TypeScript para agrupar los textos en `es` y `en`.
- Evitar hardcoding de strings dentro de los componentes.
