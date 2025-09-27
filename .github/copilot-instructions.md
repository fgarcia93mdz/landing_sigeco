# SIGECO Landing Page - Copilot Instructions

## Arquitectura del Proyecto

Este es un sitio web de landing page estático para SIGECO (Sistema de Gestión y Coordinación de PCI). El proyecto utiliza:
- **HTML semántico** con secciones específicas para PCI (Protección Contra Incendios)
- **CSS Grid y Flexbox** para layouts responsivos
- **Vanilla JavaScript** para interactividad sin frameworks

## Estructura y Patrones Clave

### Arquitectura de Archivos
- `index.html`: HTML semántico con secciones identificables (`#hero`, `#features`, `#usecases`, `#proscons`, `#demo`)
- `style.css`: CSS con variables CSS, BEM-like naming, y diseño mobile-first
- `script.js`: JavaScript vanilla para interacciones básicas

### Convenciones de Nomenclatura
- **Secciones**: IDs en inglés (`#hero`, `#features`, `#usecases`, `#proscons`, `#demo`)
- **CSS Classes**: Utiliza nombres descriptivos (`hero-grid`, `section-title`, `tab-btn`, `faq-panel`)
- **Variables CSS**: Prefijo `--color-` para colores y `--font-` para fuentes

### Patrones de Diseño Establecidos

#### Sistema de Colores (CSS Variables)
```css
--color-primary: #00AFC1    /* Azul corporativo */
--color-secondary: #0C1F3A  /* Azul oscuro */
--color-light: #F8F9FA      /* Fondo claro */
--color-dark: #333          /* Texto principal */
```

#### Estructura de Secciones
```html
<section id="section-name" class="section-name section [bg-light]">
  <div class="container">
    <h2 class="section-title">Título</h2>
    <!-- Contenido -->
  </div>
</section>
```

#### Botones Estándar
- `.btn-primary`: Botón principal con fondo azul corporativo
- `.btn-outline`: Botón secundario con borde azul

## Características Específicas del Dominio

### Terminología PCI
- **PCI**: Protección Contra Incendios (mantener acrónimo)
- **Funcionalidades**: Inspección, Mantenimiento, Reportes Ejecutivos
- **Tecnologías mencionadas**: QR/NFC, IA predictiva, geolocalización

### Componentes Interactivos Existentes
1. **Tabs System**: Implementado en `#usecases` con `data-tab` attributes
2. **FAQ Chat**: Panel flotante con preguntas predefinidas y WhatsApp integration
3. **Hamburger Menu**: Para navegación móvil
4. **Form Handling**: Demo form con validación básica

## Flujos de Desarrollo

### Añadir Nueva Sección
1. Seguir estructura HTML estándar con `section` + `container`
2. Añadir enlace en navegación si es necesario
3. Implementar estilos siguiendo el patrón de grid/flexbox existente
4. Actualizar JavaScript si requiere interactividad

### Modificar Estilos
- Usar variables CSS existentes antes de crear nuevos colores
- Mantener consistencia con el sistema de grid (`grid-template-columns: repeat(auto-fit, minmax(...))`)
- Seguir patrón de hover effects (`transform: translateY(-5px)`, `transition: ...`)

### Integración con Servicios Externos
- **WhatsApp**: Link directo configurado en FAQ chat (`https://wa.me/5492615995585`)
- **Placeholders**: Usar `via.placeholder.com` para imágenes temporales (800x300 para contenido, 600x400 para hero)

## Consideraciones de Mantenimiento

### Responsive Design
- Breakpoint principal: `@media(max-width: 768px)`
- Grid collapses: `grid-template-columns: 1fr` en móvil
- Navegación: Hamburger menu activo en móvil

### Performance
- Preloader implementado para UX
- CSS optimizado con transiciones suaves (0.3s)
- JavaScript event-driven sin dependencias externas

Cuando modifiques este proyecto, mantén la simplicidad del stack tecnológico y la coherencia visual establecida.