# Quality Assurance (QA) - Mobile

Este documento establece los criterios específicos de validación visual y de compatibilidad en entornos **Móviles** (Smartphones / Tablets) para el portafolio de Mónica Montúfar.

---

## 1. Comportamiento Responsive y Reflow
- [ ] **Layout y Columnas**:
  - Los diseños de cuadrícula (`grid-cols-2` o `grid-cols-3` en desktop) deben colapsar elegantemente a una columna única fluida (`grid-cols-1`) en _viewports_ menores a `768px` (md).
  - Componente de Testimonios: Debe transformarse de estructura apilada de lado a estructura en cascada o tarjetero vertical para lectura humana en pantallas diminutas.
- [ ] **Sin Overflow Horizontal Oculto**: Ningún div, marco de imagen, o título largo deberá superar el tamaño máximo del _viewport_, evitando barras de desplazamiento horizontal (`overflow-x-hidden` nativo sin roturas de grid).
- [ ] **Redimensionado de Marquesina (Marquee)**: Los logotipos de clientes de la marquesina se readaptan, bajando la proporción relativa de tamaño, operando con animaciones menos exigentes a la GPU o parando temporalmente si el framework determina bajo rendimiento móvil.

## 2. Puntos de Contacto (Touch Targets) e Interfaz Gráfica
- [ ] **Botones y Navegación (Hitboxes)**:
  - Todo botón y enlace principal debe tener un área de tapeo medible (mínimo de 44x44 CSS pixels de recomendación Apple HIG/Google Material).
  - El botón primario "Ver el Portafolio" y "Descargar CV" deben mostrar un distanciamiento de seguridad prudencial (Gap) de al menos `16px` (`gap-4`) para evitar *misclicks*.
- [ ] **Navegación Móvil (Hamburger Menu)**:
  - La barra principal (Header) cambia al estado móvil. Si existe submenú (Menú Hamburguesa) se despliega fluido. 
  - (Actualmente, el header de Mónica tiene pocos ítems (Portafolio, Servicios, Sobre mí), la revisión debe garantizar que estos encajen o se apilen correctamente).
- [ ] **Tipografía Responsiva**: 
  - La etiqueta `<h1>` del texto Hero (ej. `text-5xl md:text-7xl`) reduce drásticamente de tamaño para no inundar el cuadro superior del smartphone, respetando la altura de línea (`leading-tight` o `leading-none`) para evitar cruces.

## 3. Experiencia Multimedia
- [ ] **Recortes de Imágenes (Crop/Object-Fit)**:
  - La imagen central de Mónica (`foto1.png`) debe situarse o escalar mediante `object-cover` + `object-top` para no decapitarse visualmente durante las proporciones estrechas al borde del viewport del smartphone.
  - El fondo "Fondo2.png" o fondo Hero abarca todo el espacio residual como diseño _bleed_ si procede.
- [ ] **Carga de Redes Asimétricas (3G/4G/5G)**: 
  - Las imágenes exportadas a `.webp` y comprimidas son primordiales en _mobiles_. La latencia se minimiza. 
  - Optimizar usando directrices `loading="lazy"` para portadas de casos de éxito y blog. Dejando imágenes nativas pesadas _above-the-fold_ con atributo de precarga alta `fetchpriority="high"`.

## 4. Accesibilidad y Usabilidad (Smartphone)
- [ ] **Legibilidad ante Sol / Brillo**: Validar contraste en entorno exterior simulado. Los textos grises descritos (`text-gray-400`) sobre fondo `#10121D` deben ser fácilmente legidos con brillo auto de pantalla móvil a la mitad.
- [ ] **Orientación de Pantalla (Landscape/Portrait)**: Rotar el dispositivo virtual hacia modalidad paisaje (Landscape) no debería romper la grilla. Se aplicarán breakpoints responsivos (`md:`, `lg:`) consecuentemente.
- [ ] **Interacción "Hover" en Táctil**:
  - Los efectos de ratón `hover:...` no exigen manipulación al doble click para activar hipervínculos reales de HTML. 
  - Tap de un solo toque basta para los enlaces de Portafolio o Testimonios.
  
## 5. Performance en Móvil
- [ ] **Lighthouse Mobile Score**: El emulador estándar "Moto G Power" limitará CPU x4 y Network (Slow 4G). Obligatorio sostener el rendimiento SSG del stack Astro (+80/100 LHR).
- [ ] **Evite de Fallo en Paint (TBT/FID)**: Minimizar el tiempo de compilación del Javascript de "Astro Islands" o "React Components" si fuesen añadidos para evitar parones táctiles insensibles a la carga en móviles mediocres.
