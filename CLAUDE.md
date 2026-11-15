# Dra. Julieta Ferrari — Landing de dermatología (demo)

Landing page estática de una médica dermatóloga **ficticia** en Rosario, Santa Fe, usada como sitio de
demostración y como template reutilizable para otros profesionales de la salud.
Objetivo: generar confianza y conseguir turnos (WhatsApp o sistema de reservas externo).

## Stack

- Astro 7 (output `static`), TypeScript strict (`astro/tsconfigs/strict`)
- Tailwind CSS v4 vía `@tailwindcss/vite`, tokens en `src/styles/global.css` (`@theme`)
- `@astrojs/sitemap`
- Fuentes self-hosted con Fontsource: `@fontsource-variable/newsreader` (titulares) y
  `@fontsource-variable/figtree` (cuerpo)
- Node ≥ 22.23.4 (requisito de Astro 7)

## Comandos

| Comando           | Qué hace                                  |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321` |
| `npm run build`   | Build estático en `dist/`                 |
| `npm run preview` | Sirve el build localmente                 |

## Estructura

```
src/
  content/site.ts        # TODO el contenido y datos de marca (tipado). Único archivo a editar por cliente.
  styles/global.css      # Tailwind + tokens de diseño (@theme)
  layouts/               # Layout base (head, SEO, JSON-LD, fuentes)
  components/sections/   # Una sección de la landing por componente
  components/ui/         # Átomos reutilizables (Button, Card, Eyebrow, Icon...)
  assets/fotos/          # Retratos de la profesional (placeholders marcados hasta tener fotos reales)
  assets/consultorio/    # Fotos del consultorio
  assets/icons/          # SVGs propios si hacen falta
referencias/             # Imágenes de referencia visual. NO mover, renombrar ni borrar.
```

Para adaptar a otro profesional: editar `src/content/site.ts`, reemplazar fotos en `src/assets/` y,
si cambia la marca, los tokens de color en `global.css`. Ningún componente tiene copy ni colores propios.
El aviso "Sitio de demostración" del footer se apaga con `footer.demoNotice.show = false`.

---

## ESTÉTICA

Salud contemporánea / editorial cálido: sereno, humano, luminoso, cercano, profesional, elegante sin ser
frío, con aire y calma visual. Concretamente (según `referencias/`):

- **Verde salvia profundo + crudo cálido** como identidad. Nada de azul hospital.
- **Mucho blanco/crudo, poca tinta**: secciones con aire, pocos elementos por pantalla, densidad baja.
- **Titulares serif de peso liviano/regular** (no bold), grandes y con interletra levemente cerrada.
  Recurso editorial: segunda línea del titular en tono apagado (`text-ink-soft`), ej.
  "Cuidamos tu piel / con tiempo, ciencia y cercanía."
- **Foto como protagonista**, siempre enmarcada con radios grandes y con **tarjetas flotantes** chicas
  encima (nombre + matrícula, horarios, "próximo turno disponible").
- CTAs como **píldoras oscuras** (verde oliva casi negro) con flecha; secundarias como píldoras claras.
- Cálido y humano, nunca corporativo: luz natural, plantas, materiales nobles en las fotos.

## REFERENCIA

Las imágenes de `referencias/`: igualá la sensación y el estilo (paleta, ritmo, densidad, tratamiento de
fotos, peso tipográfico), no el contenido. No copies textos, logos, fotos ni marcas.

Peso de cada referencia:

- **Principales**: `Luma Modern Dental Website…` (layout, densidad, cards, stats, CTA final) y
  `Landing Page - Dentista` (paleta salvia/oliva, serif editorial, card de nombre sobre la foto).
- **Secundarias, solo estructura**: `Heltro`, `Modern Hospital Website…` y `🔹 Clean medical branding…`
  aportan patrones útiles (número grande de experiencia, card de horarios flotante, chips de confianza
  sobre la foto) pero su estética es la que **evitamos**: azul/índigo hospitalario, estetoscopios,
  sans bold genérica, top bar de contacto, sombras marcadas.

## INTENCIÓN

La paciente o el paciente tiene que entender en menos de 5 segundos quién es la médica, qué trata y cómo
pedir turno, y sentir confianza y tranquilidad: que hay una persona cálida y formada del otro lado, no una
clínica impersonal. La credibilidad sale de datos concretos (formación, matrícula, trayectoria,
consultorio real), no de promesas.

## JERARQUÍA Y LAYOUT

Lo que más tiene que destacar es la foto de la médica, su nombre + especialidad y el botón "Pedir turno"
(con WhatsApp como acción secundaria siempre a mano).

Estructura: navbar fija y minimal con CTA de turno → hero (foto profesional, nombre, especialidad, frase de
propuesta, CTAs) → franja de credenciales (matrícula, años de experiencia, institución, obras sociales) →
sobre mí / trayectoria → servicios o motivos de consulta en grid de cards → cómo es la primera consulta
(3-4 pasos) → obras sociales y prepagas → testimonios → consultorio (fotos, dirección, horarios, mapa) →
FAQ en acordeón → CTA final → footer con matrícula, datos de contacto y aviso legal.

Botón flotante de WhatsApp en mobile. Contenido centrado en un contenedor de 1120-1200px, secciones con
padding vertical generoso y alternancia suave de fondos.

Patrones concretos tomados de las referencias:

- **Navbar**: logo/nombre a la izquierda, 4-5 links centrados en texto chico, CTA píldora a la derecha.
  Fondo crudo/blanco, sin top bar de contacto.
- **Hero**: split asimétrico en desktop — texto a la izquierda (eyebrow con guion, titular serif
  grande, bajada corta, CTA oscuro + CTA claro, prueba de confianza chica), foto vertical a la derecha en
  marco con radio grande y 1-2 tarjetas flotantes (nombre + MP, horario/próximo turno). En mobile, foto
  arriba.
- **Franja de credenciales**: fila horizontal separada por líneas finas arriba y abajo; números grandes
  livianos ("12+") con label chico al lado, y una celda final con CTA suave sobre fondo salvia claro.
- **Sobre mí**: foto en marco redondeado a un lado con una cita o card de nombre superpuesta, y al otro
  eyebrow + titular + 2 párrafos + lista corta con íconos en círculo.
- **Servicios**: titular centrado (con segunda línea apagada), grid de cards altas con ícono en círculo
  arriba a la izquierda, numeración chica ("01") arriba a la derecha, título, descripción y link
  "Ver más →". Las cards pueden alternar tintes muy suaves (salvia, arena, niebla) sobre fondo crudo.
- **CTA final**: bloque ancho con fondo salvia claro y radio grande, titular serif grande a la izquierda
  y CTA oscuro a la derecha con una línea de microcopy tranquilizadora debajo.
- **Footer**: minimal, una o dos filas, texto chico.

## SISTEMA VISUAL

- **Tipografía**: `Newsreader Variable` para titulares (serif editorial amable; peso 400, nunca más de 500;
  `letter-spacing: -0.01em`; `line-height` 1.05-1.15) y `Figtree Variable` para el cuerpo (sans humanista,
  400/500; 600 solo en labels y botones). Cuerpo base de 18px (el público incluye adultos mayores), escala
  fluida con `clamp()` e interlineado cómodo (1.6-1.7 en párrafos). Eyebrows: 12-13px, mayúsculas,
  `letter-spacing: 0.12em`, peso 500, precedidos por un guion corto de 24px. Fuentes self-hosted
  (Fontsource) con `font-display: swap`.
- **Color** (tokens en `@theme`; nunca colores hardcodeados en componentes). Valores iniciales derivados de
  las referencias, ajustables:

  | Token                    | Hex       | Uso                                                    |
  | ------------------------ | --------- | ------------------------------------------------------ |
  | `--color-surface`        | `#FAF8F3` | Fondo base crudo cálido                                |
  | `--color-surface-alt`    | `#F1F1EA` | Fondo alternado de secciones (gris salvia muy claro)   |
  | `--color-surface-raised` | `#FFFFFF` | Cards y tarjetas flotantes                             |
  | `--color-tint-sage`      | `#E4EBD6` | CTA final, celda destacada, tinte de card              |
  | `--color-tint-sand`      | `#F3EEE5` | Tinte de card alternativo                              |
  | `--color-tint-mist`      | `#E8EDEF` | Tinte de card alternativo (frío, usar poco)            |
  | `--color-ink`            | `#1F2420` | Texto principal (casi negro cálido)                    |
  | `--color-ink-muted`      | `#5B6359` | Texto secundario (AA sobre surface)                    |
  | `--color-ink-soft`       | `#80877B` | Segunda línea de titulares grandes (solo ≥ 24px, 3.3:1) |
  | `--color-brand`          | `#3F4F3B` | Verde salvia profundo: íconos, links, detalles         |
  | `--color-brand-soft`     | `#7D8E71` | Salvia medio: bordes de íconos, decorado               |
  | `--color-accent`         | `#2B3628` | Fondo de CTA principal (píldora oscura), texto blanco  |
  | `--color-accent-hover`   | `#3F4F3B` | Hover del CTA                                          |
  | `--color-border`         | `#E3E4DC` | Bordes de 1px de bajo contraste                        |

  Verificar contraste AA de cada combinación texto/fondo antes de usarla. `ink-soft` solo cumple AA para texto
  grande (≥ 24px o ≥ 18.66px bold): úsalo únicamente en titulares, nunca en párrafos ni labels.
- **Bordes y radios**: fotos 24-28px, cards 20px, tarjetas flotantes y chips 14-16px, botones full.
  Bordes de 1px en `--color-border` (o ninguno en cards tintadas).
- **Sombras**: casi ninguna. Solo las tarjetas flotantes sobre fotos llevan una sombra difusa y muy suave
  (tipo `0 10px 30px rgb(31 36 32 / 0.08)`), con fondo blanco opaco o `white/85` + `backdrop-blur`.
  Formas orgánicas opcionales y solo como fondo.
- **Espaciado**: escala de 4/8px, mucho aire, ritmo vertical consistente (secciones 96-128px en desktop,
  64-80px en mobile).
- **Fotografía**: fotos reales de la médica y del consultorio, con luz natural, tonos cálidos y verdes
  suaves de fondo (plantas, madera, paredes claras), tratamiento de color consistente. Retrato de medio
  cuerpo, mirada a cámara, expresión cálida; ambo o ropa clara, **sin estetoscopio al cuello**. Mientras no
  haya fotos, usá placeholders neutros claramente marcados (ej. "FOTO: retrato de la Dra.") en
  `src/assets`, nunca fotos de stock.
- **Iconografía**: un solo set lineal y consistente (Lucide vía astro-icon o SVG inline), stroke fino
  (1.5) y uniforme, dentro de un círculo de 40-44px con borde de 1px o fondo tintado.

## RESTRICCIONES

**Siempre**: HTML semántico, accesibilidad AA como mínimo (contraste, foco visible, alt descriptivo, aria en
acordeón y menú, áreas táctiles ≥ 44px), número de matrícula (MN/MP) visible junto al nombre y en el
footer, teléfono y WhatsApp como links `tel:`/`wa.me`, imágenes con `<Image />` de Astro (AVIF/WebP, lazy
salvo el hero), mapa embebido cargado recién al hacer click (facade) para no penalizar la performance,
datos estructurados JSON-LD (schema.org `Physician` / `MedicalClinic` con dirección, horarios y teléfono),
metadatos Open Graph, SEO local (ciudad + especialidad en títulos y descripciones), copy centralizado en
`site.ts`, Lighthouse ≥ 95 en todas las categorías y cero JS en las secciones que no lo necesitan.

**Nunca**: promesas de resultados o curas ("garantizado", "100% efectivo", "sin riesgos"), fotos de
antes/después, testimonios inventados presentados como reales (los de ejemplo están marcados con
`isPlaceholder: true` en `site.ts`), datos médicos de pacientes, clichés visuales de salud (estetoscopios,
cruces, azul hospital, iconos de corazón con latido), stock photos, frameworks de UI (React/Vue) salvo que
sea imprescindible, formularios que recolecten datos de salud (el sitio es estático: los turnos van por
WhatsApp o por el link externo de reservas), emojis como íconos, lorem ipsum (usá copy creíble y empático,
en español rioplatense y con lenguaje claro, sin jerga innecesaria) ni animaciones llamativas. Tampoco
ratings con estrellas o "+500 pacientes felices" sin fuente real.

## COMPORTAMIENTO

- Responsive mobile-first (breakpoints sm/md/lg/xl); la mayoría del tráfico va a ser mobile. En mobile la
  foto va arriba o al lado del nombre según el ancho, el grid de servicios pasa a una columna, la navbar se
  vuelve un menú hamburguesa accesible y queda fijo un botón de WhatsApp/turno visible.
- Hover: cambio suave de fondo o borde en cards, botones con transición de color y leve elevación, links
  con subrayado animado. La flecha de los CTAs puede desplazarse 2-4px. Sin scale agresivos.
- Animaciones sutiles y lentas: reveal on scroll (fade + translate 12-16px, stagger corto en grids) con CSS
  scroll-driven animations y fallback en IntersectionObserver; entrada suave del hero (las tarjetas
  flotantes entran después de la foto, con 100-200ms de delay); contadores animados en la franja de
  credenciales. Duraciones de 300-700ms con easing `cubic-bezier(0.22, 1, 0.36, 1)`. Solo animar
  `transform` y `opacity`. Si hace falta JS de animación, usar Motion (motion.dev) en islands chicas.
- Respetar `prefers-reduced-motion`: sin desplazamientos ni contadores animados, solo fades instantáneos.
- Transiciones entre páginas con View Transitions de Astro (`<ClientRouter />`), si en algún momento hay
  más de una página (ej. páginas por tratamiento).
