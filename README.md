# Landing para profesionales de la salud — demo "Dra. Julieta Ferrari"

Landing page estática para una médica dermatóloga **ficticia** en Rosario, Santa Fe. Es un sitio de
demostración de Estudio Nodo y, a la vez, un template para adaptar a otros profesionales.

El objetivo de la página es generar confianza y conseguir turnos: quien entra tiene que poder pedir turno
por WhatsApp o por el sistema de reservas externo en uno o dos toques.

> Todos los datos (nombre, matrícula, dirección, teléfono, testimonios) son de ejemplo.

## Stack

- [Astro 7](https://astro.build) con output estático y TypeScript strict
- Tailwind CSS v4 (`@tailwindcss/vite`), con los tokens de diseño en `src/styles/global.css`
- `astro-icon` + Lucide para los íconos
- Newsreader y Figtree self-hosted con Fontsource
- `@astrojs/sitemap`

Requiere **Node ≥ 22.23.4**.

## Comandos

| Comando             | Qué hace                                        |
| ------------------- | ----------------------------------------------- |
| `npm install`       | Instala dependencias                            |
| `npm run dev`       | Servidor de desarrollo en `localhost:4321`      |
| `npm run build`     | Genera el sitio estático en `dist/`             |
| `npm run preview`   | Sirve el build localmente                       |
| `npx astro check`   | Chequeo de tipos de componentes y contenido     |

## Estructura

```
src/
  content/site.ts        Todo el contenido y los datos de marca, tipado
  styles/global.css      Tailwind + tokens (colores, tipografía, radios, sombras, motion)
  layouts/BaseLayout.astro   <head>, SEO, Open Graph, JSON-LD, fuentes
  components/sections/   Una sección de la landing por componente
  components/ui/         Átomos reutilizables (Button, Container, Section, ...)
  lib/                   Scripts chicos: estado "abierto ahora", reveal on scroll, datos estructurados
  assets/fotos/          Retratos (placeholders por ahora)
  assets/consultorio/    Fotos del consultorio (placeholders por ahora)
  pages/index.astro      Composición de la página
referencias/             Imágenes de referencia visual (no se publican)
```

## Adaptar el template a otro profesional

1. **Contenido:** editá solo `src/content/site.ts`: nombre, especialidad, matrícula, formación,
   servicios, obras sociales, horarios, dirección, contacto, FAQ y textos de cada sección. Ningún
   componente tiene texto propio.
2. **Fotos:** reemplazá los archivos de `src/assets/fotos/` y `src/assets/consultorio/` por fotos reales,
   con los mismos nombres. Tienen que ser fotos propias, con luz natural; nunca de stock.
3. **Marca:** si cambia la identidad, ajustá los tokens de color en el bloque `@theme` de
   `src/styles/global.css` y verificá el contraste AA.
4. **Dominio:** cambiá `site` en `astro.config.mjs` (lo usan el sitemap, la URL canónica y Open Graph).
5. **Reservas:** cargá la URL real del sistema de turnos en `contact.bookingUrl`.
6. **Aviso de demo:** poné `footer.demoNotice.show` en `false`.
7. **Testimonios:** usá solo testimonios reales y con permiso, y marcalos con `isPlaceholder: false`.
   Si no hay, dejá la sección con los de ejemplo bien señalados o sacala.

## Qué incluye

- Hero con foto, nombre, matrícula y botones de "Pedir turno" y WhatsApp. Una tarjeta muestra si el
  consultorio está abierto en ese momento, con la hora de Argentina.
- Franja de credenciales, sobre mí, servicios, primera consulta paso a paso, obras sociales, testimonios,
  consultorio con mapa, FAQ, CTA final y footer con matrícula y aviso legal.
- Barra fija de turno y WhatsApp en mobile.
- El mapa embebido se carga recién al hacer click, para no penalizar la performance.
- Datos estructurados schema.org (`Physician` + `MedicalClinic`), Open Graph y sitemap.
- Animaciones sutiles con CSS (scroll-driven, con fallback). Respetan `prefers-reduced-motion`.
- Sin formularios: el sitio no recolecta datos de salud.

## Documentación de diseño

- `CLAUDE.md`: reglas del proyecto, estética, restricciones y comportamiento esperado.
- `PRODUCT.md`: contexto de producto (públicos, propósito, evidencia disponible).
- `DESIGN.md`: sistema visual tal como quedó construido (tokens, componentes, reglas).

---

Diseño y desarrollo: Estudio Nodo.
