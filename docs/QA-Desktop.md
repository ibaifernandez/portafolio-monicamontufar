# Quality Assurance (QA) - Desktop

Este documento establece los criterios y protocolos de validación de calidad para el entorno **Desktop** del portafolio de Mónica Montúfar. Debe usarse como referencia para toda prueba manual o automatizada antes de un pase a producción.

---

## 1. Interfaz Gráfica (GUI) & Diseño Visual
- [ ] **Fidelidad tipográfica**: Los títulos deben usar la fuente **Outfit** y los textos la fuente **Inter**. Los pesos (`font-black`, `font-light`) deben coincidir estrictamente con el diseño original en Figma.
- [ ] **Paleta de Colores**: El uso del rojo corporativo ("Brand Salmon" `#FF5757` o sus variantes como `#E64A4A` para legilibidad) y los fondos oscuros (`#030511`, `#10121D`) están aplicados de forma consistente.
- [ ] **Alineación y Espaciado (Grid de Tailwind)**: 
  - La estructura `max-w-6xl` centraliza correctamente el contenido en pantallas ultrapanorámicas (ultrawide).
  - Los paddings y márgenes mantienen jerarquía visual (ej. `py-24` para secciones principales).
- [ ] **Micro-interacciones**: 
  - Subrayado animado en los enlaces de la cabecera (Header/Nav) al hacer hover.
  - Efectos de traslación/crecimiento (`hover:-translate-y-2`) y sombras (`hover:shadow-2xl` y `hover:shadow-brand-salmon/20`) en las tarjetas del Portafolio y Testimonios.
  - Efecto de "cristal" (Glassmorphism) en el Header flotante (`backdrop-blur-md`, `bg-dark-bg/80`).
- [ ] **Imágenes y Multimedia**:
  - El fondo "Fondo2.png" o la gradiente del Hero cargan correctamente sin pixelaciones notables.
  - Las avatares de testimonios (Bani, Ibai, Rose) tienen un radio circular (`rounded-full`) y borde sutil (`border-white/10`).

## 2. Experiencia de Usuario (UX) & Navegación
- [ ] **Comportamiento del Hero**: La llamada a la acción principal ("Ver el Portafolio", direcciona correctamente con `href="#portafolio"`. El botón SECUNDARIO ("Descargar CV") fuerza correctamente la descarga nativa (`download` attr).
- [ ] **Marquesina de Clientes (Infinite Scroll)**: El carrusel de logotipos fluye suave y continuamente de derecha a izquierda o viceversa. No deben apreciarse parones ni "saltos" molestos en las uniones lógicas del ciclo de CSS.
- [ ] **Smooth Scrolling**: La navegación mediante anclas (`#`) hacia secciones interiores baja gradualmente sin saltos bruscos (`scroll-behavior: smooth`).
- [ ] **Botones y Enlaces Externos**:
  - Enlaces de redes (LinkedIn, Workana, SheWorks!) abren en una nueva pestaña e incluyen los atributos de seguridad `target="_blank" rel="noopener noreferrer"`.
  - Iconografía consistente en los botones (ej. uso de los iconos SVG proporcionados).
- [ ] **Manejo de Estados de Error (UI)**: Páginas dinámicas o inexistentes deben lanzar un código y pantalla de estado *404 Not Found* limpia.

## 3. Accesibilidad y Usabilidad (A11y)
- [ ] **Etiquetado Semántico**:
  - Las vistas principales (Homepage y Casos de Éxito) poseen al menos una etiqueta explícita `<h1>`.
  - Uso correcto de etiquetas HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- [ ] **Atributos de Idioma**: El elemento `<html>` debe tener el atributo de etiqueta `lang="es"` (o `lang="en"` para la variante internacional).
- [ ] **Soporte de Lectores de Pantalla**: 
  - Existen roles ARIA y textos descriptivos (`aria-label`) cuando el contenido es puramente visual de íconos o vectores.
- [ ] **Contraste de Color (WCAG AA)**: 
  - Textos grises o blancos sobre fondos azul noche/negros cumplen >4.5:1. 
  - *Excepción de diseño consentida*: Marca corporativa y recursos narrativos traslúcidos decorativos quedan exentos tras advertirse y validarse vía Playwright.
- [ ] **Accesibilidad por Teclado**: Todo el sitio y el ciclo de enlaces integrados (Focus Ring) es accesible tabulando y usable presionado _Enter_.

## 4. Rendimiento & SEO (Performance)
- [ ] **Lighthouse CI Performance Gate**: La compilación estática (SSG) no debe bajar de 90/100 en el índice de _Performance_ Desktop.
- [ ] **Core Web Vitals**:
  - **LCP (Largest Contentful Paint)** < 2.5s (Carga óptima de la imagen principal / textos del Hero).
  - **CLS (Cumulative Layout Shift)** ≈ 0. (Las fuentes de Google Fonts y las imágenes locales respetan espacios reservados de redimensionamiento para evitar saltos perjudiciales de maquetación). 
- [ ] **Etiquetas Meta y SEO Estático**:
  - Generación activa del `sitemap-index.xml` expuesto y actualizado por @astrojs/sitemap.
  - Títulos únicos con formato `<title>Nombre del Proyecto | Mónica Montúfar</title>`.
  - Metatags `robots` configurados a `index, follow`.

## 5. Operaciones, Testeo Automático y Seguridad
- [ ] **Playwright E2E**: Ejecución exitosa de los "Smoke Tests" integrados con escaneo automatizado contra todo componente H1 y etiquetas críticas de href.
- [ ] **Quality Gate**: Despliegue denegado directo si los pull-requests hacia `main` no han superado pruebas de Build y dependencias integrales.
- [ ] **Cabeceras de Seguridad (Security Headers)**: Verificación en `netlify.toml` / Inspector de Red de que las directrices `Content-Security-Policy` no bloqueen estilos vitales en línea y obliguen al acceso seguro a activos por transporte en _https_ de terceros.
