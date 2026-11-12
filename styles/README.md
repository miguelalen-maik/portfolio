# Design System del portfolio

Fuente visual: [Figma · Design system y referencias desktop/mobile](https://www.figma.com/design/dDu1M45M4nXF0xefPB9Nc5?node-id=2280-62195). Inspección mediante Figma MCP: 10 de noviembre de 2026. Figma sigue siendo la fuente de verdad visual; estos archivos son su traducción a CSS.

## Ubicación e integración

La carpeta real del proyecto es `/Users/miguelalen/Desktop/Portfolio/`. `site/` estaba vacía: no había framework, arquitectura CSS, dependencias ni aplicación que integrar. Esta base utiliza CSS nativo, sin instalar paquetes ni elegir framework.

Dentro de `site/`:

- `styles/global.css`: único punto de entrada; importa los tres archivos restantes y aplica una base mínima.
- `styles/tokens.css`: spacing, radios, borde, blur y medidas estructurales responsive.
- `styles/themes.css`: los 14 roles semánticos de Figma en Claro/Oscuro.
- `styles/typography.css`: fuentes, pesos, tamaños, interlineados, OpenType y 16 clases tipográficas.
- `styles/preview.html`: muestrario local para revisar colores, tipos y temas anidados; no es una pantalla del portfolio.
- `assets/fonts/`: Areal Variable y Areal Mono Regular/Medium, copias de los archivos instalados en el equipo.

Cuando exista la aplicación, importar `styles/global.css` una vez desde su raíz. En HTML:

```html
<link rel="stylesheet" href="styles/global.css">
```

## Colores y temas

Editar el rol deseado en `themes.css`. Por ejemplo, `--text-primary` cambia el texto principal de todos los componentes que lo consumen. Cambiar su valor en `:root, .theme-light` para Light y en `.theme-dark` para Dark. Un cambio global en ambos modos requiere revisar ambas declaraciones.

Se conservan los roles `background/canvas`, `background/primary`, `background/Secondary`, `surface/primary`, `surface/secondary`, `surface/Tertiary`, `text/primary`, `text/secondary`, `border/subtle`, `border/strong`, `action/primary/background`, `action/primary/foreground`, `action/primary/Blur background` y `action/primary/hover`. En CSS se pasan a minúsculas, espacios y barras se sustituyen por guiones. No se renombran `subtle/strong` como `primary/secondary`.

Los valores se resuelven desde los alias neutrales de Figma; no se expone una segunda paleta de primitivos. Roles distintos con el mismo color se mantienen porque cumplen funciones distintas. Blur background conserva su opacidad del 50%; hover es una capa del 6%, no un fondo opaco que sustituya al fondo base.

```html
<section class="theme-dark">
  <p class="type-body">Texto en Dark</p>
  <article class="theme-light">Isla Light dentro de Dark</article>
</section>
```

Las variables se heredan y cada límite de tema aplica color y fondo principal. Un componente debe consumirlas en sus propias superficies, bordes y acciones:

```css
.future-card {
  color: var(--text-primary);
  background: var(--surface-primary);
  border: var(--border-width-default) solid var(--border-subtle);
  border-radius: var(--radius-small);
  padding: var(--space-16);
  font: var(--type-body);
}
```

Light es el modo por defecto; no hay selector ni cambio automático por preferencias del sistema. Los colores Dark se han conservado, sin sustituirlos por blanco ni corregir su contraste.

## Tipografía

Cambiar familias en `--font-family-primary` y `--font-family-mono`, y actualizar los `@font-face` y los archivos correspondientes. Cambiar tamaños e interlineados en las variables `--font-size-*` y `--line-height-*`. Los shorthands `--type-*` y las clases `.type-*` reutilizan esas decisiones. Las variantes Medium terminan en `-medium`; sin sufijo se usa Regular.

| Nivel | Tamaño | Interlineado | Familia |
| --- | --- | --- | --- |
| H1 | 54 px | 54 px | Areal Variable |
| H2 | 25 px | 30 px | Areal Variable |
| H3 Regular | 16 px | 37,5 px | Areal Variable |
| H3 Medium | 16 px | 1,2 (19,2 px) | Areal Variable |
| Body Big | 18 px | 25,2 px | Areal Variable |
| Body | 16 px | 22,4 px | Areal Variable |
| Body Small | 14 px | 1,4 (19,6 px) | Areal Variable |
| Label Big | 16 px | 12 px | Areal Mono |
| Label | 12 px | 12 px | Areal Mono |

Todos los niveles tienen Regular 400 y Medium 500; tracking 0. Los encabezados HTML no reciben tamaños globales: aplicar el estilo adecuado explícitamente, sin confundir jerarquía HTML y nivel visual.

Se verificaron los archivos TTF: Areal Variable tiene eje `wght` de 400 a 700, `slnt` de -12 a 0 y `DRKM` de 0 a 1. Se habilita el rango utilizado 400–500. Los archivos Mono estáticos declaran pesos 400 y 500. No se sintetizan pesos.

## Espaciado, radios y efectos

Modificar `tokens.css`. Se incluyen los valores recurrentes 2, 4, 6, 8, 12, 16, 18, 24, 32, 48, 64 y 128 px; no se copia 96 px solo por existir en la colección. Radios: ninguno, pequeño 4 px y grande 16 px, observados en componentes. El radio de 8 px de la colección no se usa en las referencias inspeccionadas; no se exporta. Tampoco se generalizan los radios específicos de 5 px ni detalles de vectores. Borde base 1 px y background blur 15 px; los trazos de iconos de 1,5 px no se convierten en un borde global.

`--layout-gap` es 12 px. `--layout-gutter` es 16 px en móvil y 18 px en desktop; `--layout-gutter-compact` conserva la excepción de 12 px del hero móvil. `--layout-section-space` cambia de 48 a 128 px. Estas variables preparan decisiones; no construyen ningún layout.

## Responsive

Figma aporta desktop de 1440 px y mobile de 390 px. No se encontró una referencia tablet ni breakpoints explícitos. Estrategia de implementación propuesta: mobile primero, estado intermedio desde 48rem (768 px) solo cuando un componente lo necesite, desktop desde 64rem (1024 px). Estos umbrales son decisiones de código pendientes de validar con contenido real, no variables extraídas de Figma.

Solo hay una media query activa, en `tokens.css`, a 64rem. Para cambiar el umbral desktop, editar allí el literal y actualizar esta documentación. CSS nativo no permite usar `var()` como condición de media query; por eso no se crean falsos tokens `--breakpoint-*`. No hay layouts ni reglas tablet prematuras.

No se aplica `clamp()` global: el título de referencia cambia de H1 Regular 54/54 a H2 Medium 25/30 en móvil, incluido el peso. La futura implementación elegirá el nivel por componente. Los demás estilos mantienen las medidas de Figma; cualquier fluidez futura debe conservar los extremos diseñados y validarse visualmente.

## Diferencias y dudas preservadas

- H3 usa 16 px (size/body), aunque existe size/h3 de 20 px. Sus dos interlineados distintos están documentados en el propio UI Kit; no se han normalizado.
- Label Big tiene interlineado inferior a su tamaño. Se conserva; al construir componentes habrá que revisar alturas y recortes.
- Los ajustes OpenType no son uniformes entre muestras. H1 usa la intención documentada SS01–SS07 y SS11, con LIGA desactivado, que también aparece en el título desktop. Body, Body Small y H3 conservan SS04/05/06, LIGA desactivado y números tabulares observados en las muestras. Body Big, H2 y etiquetas mantienen los ajustes predeterminados. Los tokens `--font-features-*` permiten revisar estas decisiones en un lugar.
- El gris Dark text/primary es neutral/300 (canal 0,75, redondeado a #bfbfbf), no blanco.
- Se incluyen TTF reales, sin convertir ni instalar herramientas. No existe todavía pipeline de fuentes ni aplicación de producción.

## Regla y sincronización

Los nuevos componentes deben reutilizar los tokens existentes antes de introducir valores nuevos. Consumir roles semánticos en lugar de colores literales; utilizar estilos tipográficos completos y las medidas compartidas cuando corresponda. Un valor exclusivo de un componente puede permanecer local.

Cuando cambie una variable importante en Figma, actualizar su equivalente aquí y revisar `preview.html` en Light, Dark y temas anidados. No existe sincronización automática. Evitar duplicar tokens en páginas o componentes. Las clases de tema no deben redefinir tipografía ni geometría salvo que Figma lo requiera explícitamente.

No se ha implementado la Home, casos de estudio, selector de tema, framework, deployment ni conexión a GitHub.
