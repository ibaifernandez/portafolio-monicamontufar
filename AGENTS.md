# Agent Rules & Logs (AGENTS.md)

Este documento sirve como "memoria ram" y punto de contexto fundamental para cualquier Agente o Agente-Asistente-AI (ej. DeepMind / Claude / Cursor) que aterrice en el espacio de trabajo.

## Reglas de Comportamiento 
1. **Nunca ejecutar deploys en Netlify sin permisos**: Estamos ahorrando *build minutes*. Cada push a GitHub no desplegará en Vercel/Netlify si la regla `ignore = "exit 0"` está activa o el workflow está en pausa. 
2. **Cero Canibalización SEO**: Al escribir rutas en español e inglés, asegúrate siempre de inyectar las meta-etiquetas de `<link rel="alternate" hreflang="xx" />` correctas usando nuestro componente UI Global.
3. **No romper LocalWP / OrbStack**: Este proyecto convive dentro de un ecosistema Docker/WordPress pre-existente. Absoluto cuidado al renombrar subcarpetas padre.

## Trazabilidad (Últimos Logros)
* **2026-03:** Scaffolding inicial con Astro + Tailwind, integración de GitHub (`ibaifernandez/portafolio-monicamontufar.git`), Vitest y Playwright listos.
