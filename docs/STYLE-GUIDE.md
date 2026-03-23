# Guía de Estilo y Tipografía (portafolio.monicamontufar.com)

Esta guía establece los estándares visuales para asegurar la consistencia del sitio y prevenir regresiones estéticas como el "Incidente Pirata One".

## 🖋️ Tipografía Core

El sitio utiliza **Inter** como su única fuente sans-serif. No se deben importar ni utilizar fuentes decorativas, góticas o de fantasía a menos que haya una solicitud explícita del cliente.

### Configuración Técnica (Enforced)
- **Fuente Primaria**: `Inter`, variable (peso 100-900).
- **Carga**: Vía Google Fonts en `src/layouts/Layout.astro`.
- **Preconexión**: Se utilizan `preconnect` a Google Fonts y Gstatic para reducir el CLS y tiempos de carga.
- **Tailwind v4**: La variable `--font-sans` y `--font-heading` están mapeadas a Inter en `src/styles/global.css`.

> [!TIP]
> Al usar `@apply` en componentes `.astro`, es obligatorio incluir `@reference "../styles/global.css";` al inicio del bloque `<style>` para que Tailwind v4 pueda resolver las utilidades.

### Reglas de Prevención
> [!IMPORTANT]
> Se ha aplicado `font-family: var(--font-sans) !important;` en el `:root` de `global.css` para evitar que herramientas de edición (como Stitch o Vibe) inyecten fuentes alternativas de forma accidental.

## 🎨 Paleta de Colores (Brand)

- **Fondo Principal**: `#030511` (Deep Navy)
- **Primario (CTA)**: `#ff5757` (Salmon/Coral)
- **Acento 1**: `#3adecf` (Cyan/Teal)
- **Acento 2**: `#ff914d` (Orange)
- **Error/Alerta**: `#e11d48` (Magenta)

## 📐 Estructura de Rutas (i18n)

Para mantener la consistencia en el SEO y la navegación bilingüe:

| Página | Ruta Español (Root) | Ruta Inglés (`/en/`) |
| :--- | :--- | :--- |
| **Home** | `/` | `/en/` |
| **Caso 1** | `/caso-de-exito-1` | `/en/case-study-1` |
| **Caso 2** | `/caso-de-exito-2` | `/en/case-study-2` |

> [!WARNING]
> Intentar acceder a un slug en inglés (ej. `/case-study-1`) sin el prefijo `/en/` resultará en un error 404. Siempre se debe respetar el prefijo de idioma para las versiones traducidas.
