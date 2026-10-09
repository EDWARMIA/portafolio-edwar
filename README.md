# Portafolio de Edwar Mia Aguirre

HTML, CSS y JavaScript. Node.js 18 o superior, sin dependencias externas.

## Ejecutar

Abre esta carpeta en VS Code y ejecuta `npm run dev`. Visita http://localhost:4321.

## Preparar para publicar

`npm run build` genera dist/. `npm run preview` sirve esa carpeta.

## Editar

- index.html: contenido, proyectos y perfiles. Cada bloque data-profile-panel corresponde a datos, qa o software.
- src/styles/main.css: estilos adaptables y selector.
- src/scripts/main.js: filtro global y animaciones.
- public/images/: foto.
- public/documents/: CV de QA y CV de Analista de Datos.

El inicio es compartido. Desde el selector, proyectos, habilidades, perfil, formación y contacto cambian juntos. QA es la vista inicial. FlowB2B solo aparece en Software. Analista de Datos incluye Análisis de rentabilidad de clientes, con captura del dashboard y enlace al repositorio. QA incluye OrangeHRM — QA Testing y Pruebas QA — Toolshop, con captura real de Playwright y enlace al repositorio. La tienda evaluada pertenece a Practice Software Testing.

## Ajustes finales y enlaces pendientes

La portada se centra en Calidad de Software y Análisis de Datos. El botón Descargar CV abre un diálogo accesible con dos PDF; Escape lo cierra. Los filtros conservan tres áreas independientes.

- Actualiza los PDF de `public/documents/` conservando sus nombres para renovar el CV.
- Para mostrar el botón del dashboard, completa `powerBiDashboardUrl` en `src/scripts/main.js` con la URL pública real de Power BI. Mientras esté vacía, el enlace no se muestra.
- Scrum incluye el PDF aportado. Los archivos recibidos de Santander y UPN no pudieron abrirse correctamente; sustituirlos por copias válidas o incorporar los enlaces oficiales de credenciales en `index.html`.
- Las métricas QA describen los casos ejecutados y aprobados; no representan cobertura de regresión.
- La foto transparente está en `public/images/edwar-perfil-transparente.png`; el original se conserva.
- No hay backend, base de datos, claves secretas ni variables de entorno requeridas.

## Publicación desde GitHub

Sube esta carpeta a un repositorio. Para un hosting estático con compilación, usa `npm run build` y la carpeta de salida `dist`. Los cambios de contenido se realizan en el código y se publican con un nuevo commit. El proyecto mantiene HTML, CSS y JavaScript separados, sin frameworks.

La portada incluye dos párrafos con cuatro herramientas de QA y cinco de Datos. Las franjas de cada perfil amplían las tecnologías usadas. Inglés: A2 en web y ambos CV.

## Versión 1.0

Exportación de la versión aprobada el 8 de octubre de 2026. Incluye todos los ajustes visuales aprobados, tarjetas de herramientas, selector de CV y tipografía unificada.

1. Extrae el ZIP.
2. Abre la carpeta `Portafolio_Edwar_Proyecto` en VS Code.
3. Con Node.js instalado, abre una terminal en esa carpeta y ejecuta `npm run dev`.
4. Abre `http://localhost:4321`.
5. Ejecuta `npm run build` para generar los archivos publicables en `dist/`.

No necesitas instalar paquetes: el proyecto no tiene dependencias externas. Al subirlo a GitHub, incluye los archivos de esta carpeta; `.gitignore` excluye `dist/` y `node_modules/`.
