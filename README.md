# Portfolio · Home V1 local

HTML semántico, CSS estándar y JavaScript vanilla. Sin dependencias ni build.

## Abrir en local

Desde Terminal:

```sh
cd /Users/miguelalen/Desktop/Portfolio
python3 -m http.server 8000 --bind 127.0.0.1
```

Abrir `http://127.0.0.1:8000/site/`. Detener con Ctrl+C. También se puede abrir `site/index.html` directamente en el navegador. Se sirve la carpeta Portfolio para que el enlace al CV HTML existente en `cv/ats/` funcione sin duplicar el documento ni crear otra página.

## Archivos

- `index.html`: contenido y estructura de la Home.
- `styles/home.css`: composición y responsive exclusivos de Home; importa el sistema mediante `styles/global.css` en HTML.
- `scripts/home.js`: menú móvil, selección de disciplinas por hover desktop, focus y click/tap; teclas arriba/abajo, Inicio/Fin y Escape para el menú.
- `assets/images/`: assets locales de Figma organizados por contexto. No hay assets remotos en ejecución, imágenes nuevas, vídeos ni capturas de página utilizadas como implementación.
- `styles/README.md`: documentación de la base del Design System, conservada como referencia de esa entrega inicial.

No se modifican los valores ni se añaden tokens al Design System. Las medidas particulares de composición (por ejemplo, altura del hero y fotos) pertenecen a `home.css`.

## Responsive

Mobile primero. A 768 px, hero y proyectos secundarios pasan a dos columnas cuando existe espacio; el título sigue usando H2 Medium. Desde 1024 px se aplica la composición desktop, navegación completa, H1 Regular del hero y panel lateral de disciplinas. Ancho máximo 1440 px. Se conservan los gutters, separación estructural y tipos del sistema.

La geometría de referencia a 1440 px: hero completo 900 px, Apparell 1404×761 px, proyectos secundarios 696×456 px, retrato 121×141 px, pieza de disciplina 224×173 px. A 390 px: imágenes de proyecto 358×456 px y retrato 116×141 px. Las imágenes usan object-fit: cover, centrado como en el contexto extraído.

## Assets y correspondencia con Figma

Fuente: archivo `dDu1M45M4nXF0xefPB9Nc5`, sección `2280:62195`, desktop `2280:60461`, mobile `2280:60641`, inspeccionados el 10/11/2026.

| Archivo dentro de assets/images/ | Uso y referencia |
| --- | --- |
| `home/portrait.png` | Retrato de hero, nodos 2280:60478 / 2280:60658; original 1095×1437 |
| `apparell/apparell-cover.png` | Apparell en ambos tamaños; original 3026×2180 |
| `barrio/barrio-cover.png` | Barrio en ambos tamaños; original 1122×1402 |
| `hattre/hattre-cover-desktop.png` | Composición de dos pantallas de desktop; 696×456 |
| `hattre/hattre-cover-mobile.png` | Composición de una pantalla en mobile; 1456×1824 |
| `home/logo.svg` | Marca original de header y footer; 33,7449×12,5 |
| `home/burst.svg` | Gráfico del claim del hero; 42×42 |
| `home/angles.svg` | Gráfico del bloque de posicionamiento; 43,5996×43,5996 |
| `home/arrow-down.svg` | Trabajos seleccionados; 16×16 |
| `home/arrow-up-right.svg` | CTA visual y links del footer; 16×16 |
| `home/menu.svg` | Menú móvil; 24×24 |
| `home/warning.svg` | Coming soon; 16×16 |
| `home/subdirectory.svg` | Conceptos de disciplinas en mobile; 16×16 |
| `home/disciplines/folder.svg` | Gráfico de las siete disciplinas; 224×173 |

Se compararon los archivos descargados: retrato, Apparell y Barrio eran idénticos entre referencias y se guarda una sola copia. Las siete variantes de service también son idénticas byte a byte: se reutiliza una sola carpeta SVG. No se han creado ilustraciones sustitutivas. Los SVG originales no se editan ni se alteran sus dimensiones raíz. En el panel móvil se escala el gráfico al 50%, conservando su proporción.

## Diferencias y puntos de revisión

- El encargo pide una imagen seleccionada en móvil; el frame móvil no contiene ese panel. Se añade un panel compacto debajo de las disciplinas con el gráfico original y los conceptos activos. Esto aumenta la altura respecto al frame. Los conceptos bajo cada disciplina se conservan para mantener la lectura de la referencia.
- Figma utiliza el mismo gráfico de carpeta en todas las variantes: cambiar de disciplina actualiza estado, conceptos, nombre y texto alternativo, pero no produce una ilustración visualmente distinta. Para eso harán falta piezas diferentes en Figma.
- AI Prototyping usa los conceptos solicitados: HIPÓTESIS · PROTOTIPOS FUNCIONALES · VALIDACIÓN TEMPRANA · VIABILIDAD. El diseño todavía muestra EXPLORACIÓN · DESIGN-TO-CODE · VALIDACIÓN. La capitalización de disciplinas sigue el encargo.
- El menú desplegado no tiene una referencia de diseño en el frame: se reutilizan los enlaces y estilos existentes en un desplegable sencillo, navegable por teclado, sin animación.
- Agentes y Roadmap se muestran sin destino y no son interactivos. LinkedIn y Email usan los datos reales del CV existente. CV abre el HTML ATS ya existente, sin implementar un CV web nuevo.
- Apparell conserva el CTA visual, todavía sin enlace a un caso inexistente. Barrio y Hattre mantienen Coming soon. En desktop esas etiquetas secundarias aparecen al pasar el puntero, mientras en móvil permanecen visibles.
- Los ajustes de reflujo tipográfico pueden producir pequeñas diferencias de altura respecto a Figma; no se fijan alturas de bloques de texto que puedan recortarlos.

## Validación

Comprobaciones en Chrome a 390, 768, 1024 y 1440 px: fuentes locales e imágenes cargadas, sin overflow horizontal ni errores JavaScript, selección de las siete disciplinas, hover desktop, focus, flechas de teclado, menú móvil y Escape. Revisión visual de hero, proyectos, disciplinas, bloque de posicionamiento y footer frente a las referencias. Revisar juntos especialmente el panel móvil añadido y el gráfico compartido por disciplinas.

Solo Home V1. Sin case studies, About, deployment, configuración de hosting ni Git push.
