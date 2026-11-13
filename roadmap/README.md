# Roadmap local

Página estática en `/roadmap/`, enlazada únicamente desde los footers existentes. No requiere build ni dependencias.

Desde la carpeta `site/`, ejecutar `python3 -m http.server 8001 --bind 127.0.0.1` y abrir `http://127.0.0.1:8001/roadmap/`. También funciona con Live Server sirviendo `site/` como raíz.

## Editar el contenido

- `../scripts/roadmap-data.js`: única fuente de textos, estados y posiciones del diagrama. Agrupado por versión, en orden de lectura. `nodes[].text` contiene el texto; `state` acepta `done` (cuadrado relleno) o `planned` (vacío). Los indicadores en `metrics.items` son contenido estático de Figma, no mediciones en directo.
- `connections`: curvas SVG originales de Figma. `from` y `to` identifican los nodos relacionados; `x`, `y`, `width`, `height`, `viewBox` y `paths[].d` conservan su geometría. Al mover un nodo hay que ajustar también sus conexiones: no hay motor de layout automático.
- `../scripts/roadmap.js`: genera el texto seleccionable y los SVG decorativos. Solo gestiona los degradados de los extremos y las teclas Inicio/Fin. Las flechas, trackpad, barra y gestos táctiles usan scroll nativo; la rueda vertical conserva su función.
- `../styles/roadmap.css`: composición específica y responsive. Reutiliza colores, tipografías y spacing existentes; los tamaños de diagrama, indicadores y degradados son medidas locales de Figma.
- `../assets/images/roadmap/`: indicadores SVG originales, compartidos cuando son idénticos.

Referencia: Figma `2341:50262`, desktop `2341:49957`, mobile `2401:108921`, diagrama completo `2401:106308`.

## Responsive

El diagrama conserva su escala: 10300 px de ancho y 400 px de composición, con espacio adicional hasta 478 px para las curvas inferiores. Mobile/tablet: panel de 650 px, margen inicial de 16 px. Desde 1024 px: panel de al menos 650 px que sigue la altura del viewport, margen inicial de 96 px. No se escala el texto en móvil. En pantallas bajas se permite scroll vertical de página para acceder al contenido y al footer.

Los degradados de 120 px permanecen sobre el área visible, sin capturar eventos ni cubrir la barra. Solo aparecen en los lados donde queda contenido fuera de vista. No se añaden animaciones: se hereda el bloque global de View Transitions, incluida su preferencia de movimiento reducido.

Esta versión no añade automatismos de fechas ni funciones representadas como mejoras futuras dentro del propio roadmap.
