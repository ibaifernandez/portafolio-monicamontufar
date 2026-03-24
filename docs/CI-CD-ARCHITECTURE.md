# Arquitectura Continua: CI/CD, Seguridad y Performance

Este documento recoge el estándar de ingeniería técnica implantado en el portafolio de Mónica Montúfar para asegurar **cero regresiones**, protección frontend activa, y optimización continua de cara a los motores de búsqueda y la experiencia de usuario final.

## 1. Quality Gate y Control de Staging
El flujo de trabajo prioriza evitar el desperdicio de tiempos de renderizado y prevenir despliegues rotos:
- **Netlify `[context.staging]`**: Se ha configurado `netlify.toml` para ignorar matemáticamente cualquier commit lanzado a la rama `staging` (`ignore = "exit 0"`). Esto evita consumir _build-minutes_ en entornos de prueba.
- **GitHub Actions (`quality-gate.yml`)**: Un flujo orquestado valida estrictamente la rama `staging` y blinda los Pull Requests hacia `main` realizando:
  - Instalación limpia estricta (`npm ci`).
  - Chequeo de tipos globales de Astro (`npx astro check`).
  - Pruebas E2E de Playwright.
  - Auditoría de telemetría con Lighthouse CI (`npx lhci collect & upload`).

## 2. Testing End-to-End (E2E) y Accesibilidad (Axe)
- **Playwright Suite**: Disponemos de 10 pruebas base de tipo humo (Smoke tests) evaluando: renderizado del `<h1>` en ambos idiomas, navegación interactiva mediante anclas, visibilidad cruzada de logotipos y la existencia rigurosa del atributo `download` para el CV.
- **Axe-core Automatizado**: Se ha instalado la capa industrial de Accesibilidad `@axe-core/playwright`.
  - Esta tecnología inyecta un barrido algorítmico al final del E2E test validando semántica ARIA y legibilidad frente al estándar WCAG2.1 AA en las distintas vistas (index, casos de éxito).
  - *Nota*: La regla `color-contrast` ha sido explícitamente excepcionada dentro del pipeline para preservar la fidelidad del "Brand Salmon" (#FF5757) y efectos translúcidos como opciones primordiales de diseño.

## 3. Lighthouse CI (Performance & Vitals)
- En lugar de realizar afirmaciones estrictas (assets strict fails) que interrumpan el Quality Gate por caídas decimales erráticas, **Lighthouse CI** opera en modo telémetrico.
- Realiza el parseo del directorio dist estático (`lhci collect`) sobre la propia imagen base de CI, ejecutando simulaciones limitantes para generar un informe público alojable y comparativo (`lhci upload`).

## 4. Hardening Frontend (Reglas de Seguridad en Borde)
La aplicación cuenta con sólidas inyecciones a nivel de transporte, definidas de forma central en `netlify.toml`, fortaleciendo el frontend estático:
- **Content-Security-Policy (CSP)**: Permite assets del propio origen y desactiva los rastreos de dominios y orígenes inseguros protegiendo a los visitantes frente a Cross-Site Scripting (XSS).
- **Strict-Transport-Security (HSTS)**: Con un `max-age` anual y modo `preload` exigiendo que las conexiones fluyan matemáticamente a través de los nodos HTTPS de Netlify y el TLS asignado.
- **X-Frame-Options (DENY)** / **X-Content-Type-Options (nosniff)**: Blindaje frente al secuestro de Clickjacking y Sniffing MIME.

## 5. SEO Técnico
Mantenimiento reactivo del posicionamiento a través de la instalación nativa del paquete auxiliar de Astro: `@astrojs/sitemap`, autocompilando la versión `/sitemap-index.xml` y emitiendo cada enlace de construcción tomando formalmente `https://monicamontufar.com` como el _Site Root_ absoluto para rastreadores como Googlebot.

---
_Nota sobre Backlog_: La Regresión Visual Histórica versionada mediante PNGs base se encuentra aparcada como posible "Nice to have" derivado del coste en mantenimiento visual frente a la fidelidad actual conseguida con Playwright y E2E clásico.
