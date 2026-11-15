---
name: Dra. Julieta Ferrari, Dermatología
description: Warm editorial landing for a single-practitioner medical practice; sage and crudo grounds, serif voice, booking one tap away.
colors:
  surface: "#faf8f3"
  surface-alt: "#f1f1ea"
  surface-raised: "#ffffff"
  tint-sage: "#e4ebd6"
  tint-sand: "#f3eee5"
  ink: "#1f2420"
  ink-muted: "#5b6359"
  ink-soft: "#80877b"
  brand: "#3f4f3b"
  brand-soft: "#7d8e71"
  accent: "#2b3628"
  accent-hover: "#3f4f3b"
  on-accent: "#ffffff"
  border: "#e3e4dc"
  border-strong: "#cfd3c6"
typography:
  display:
    fontFamily: "Newsreader Variable, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.5rem, 1.6rem + 3.6vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.015em"
  headline-lg:
    fontFamily: "Newsreader Variable, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.25rem, 1.7rem + 2.4vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Newsreader Variable, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2rem, 1.5rem + 2vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Newsreader Variable, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(1.5rem, 1.25rem + 1vw, 1.875rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  quote:
    fontFamily: "Newsreader Variable, Iowan Old Style, Georgia, serif"
    fontSize: "1.3125rem"
    fontWeight: 400
    lineHeight: 1.375
  body-lg:
    fontFamily: "Figtree Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.1875rem, 1.1rem + 0.35vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Figtree Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Figtree Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
  label-strong:
    fontFamily: "Figtree Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.25
  caption:
    fontFamily: "Figtree Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  chip: "14px"
  card: "20px"
  photo: "28px"
  full: "9999px"
spacing:
  gutter-mobile: "20px"
  gutter: "32px"
  card: "28px"
  card-md: "32px"
  section: "80px"
  section-md: "112px"
  section-lg: "128px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label-strong}"
    rounded: "{rounded.full}"
    padding: "0 20px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-primary-lg:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.full}"
    padding: "0 24px"
    height: "52px"
  button-secondary:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.label-strong}"
    rounded: "{rounded.full}"
    padding: "0 20px"
    height: "44px"
  button-secondary-hover:
    backgroundColor: "{colors.tint-sage}"
  card-service:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.card}"
  card-float:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.chip}"
    padding: "16px"
  pill-insurance:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.quote}"
    rounded: "{rounded.full}"
    padding: "0 24px"
    height: "56px"
  band-sage:
    backgroundColor: "{colors.tint-sage}"
    textColor: "{colors.accent}"
    rounded: "{rounded.photo}"
    padding: "56px 28px"
  icon-badge:
    textColor: "{colors.brand}"
    rounded: "{rounded.full}"
    size: "44px"
  nav-link:
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
    height: "44px"
---

# Design System: Dra. Julieta Ferrari, Dermatología

## Overview

**Creative North Star: "The Open Consulting Room"**

The system reads like a person's practice, not a clinic. A calm crudo ground, sage-olive fields and a single near-black olive pill carry the whole palette; a variable serif speaks in a quiet editorial register while a humanist sans does the explaining at a generous 18px. The page's one memorable device is a portrait set in a soft 28px frame with small white cards floating over its edges, one of which states, live, whether the door is open.

Density is low and unhurried: large section padding, two-tone headlines whose second line steps back in a muted ink, and 1px warm hairlines doing the structural work that shadows and fills do elsewhere. Depth exists only where a card sits over a photograph. There is no glass, no gradient, no uppercase tracking, no stat badges. Everything a visitor needs to trust the doctor is stated as plain fact in plain type.

Accessibility is part of the world, not an add-on: the audience includes older adults, so body text never drops below 18px, every touch target is at least 44px tall, focus is a visible 2px olive ring, and every movement collapses under reduced motion.

**Key Characteristics:**
- Warm off-white ground with sage tint fields that own whole bands and tiles.
- Newsreader 400 for every heading, with a muted continuation line; Figtree for body and controls.
- Fully rounded pills for every action; dark olive for booking, white with a hairline for WhatsApp.
- Photos in 28px frames on a tint ground, with white floating cards as the only shadowed elements.
- 1px warm hairlines (border, border-strong) as the primary structure.
- Soft, slow motion on one easing curve; nothing moves under reduced motion.

## Colors

A low-chroma olive family on warm paper: one dark anchor, one sage field, everything else is ink and hairline.

### Primary
- **Olive Door** (accent): the booking pill, the map-load pill, the sticky bar's booking half, the skip link and the strong text on sage bands. It means "act now" and is never used as a decorative fill.
- **Sage Olive** (brand): icon strokes, the focus ring, the open-status dot, the muted line of headings on sage bands, and the hover state of the Olive Door (accent-hover carries the same value).
- **Faded Sage** (brand-soft): step numerals, icon-badge rings (at 50% alpha), the closed-state dot and hover borders on cards and secondary pills.

### Secondary
- **Sage Field** (tint-sage): whole surfaces: the final CTA band, the insurances tile in the credentials row, the first service card, photo grounds, icon-badge fills and the secondary pill's hover. Also the text-selection color.
- **Warm Sand** (tint-sand): the second rotating service-card tint and the About photo ground. Used sparingly as sage's companion.

### Neutral
- **Crudo** (surface): the page ground, header, sticky bar and footer.
- **Linen** (surface-alt): alternate section bands (First Visit, About, Testimonials, FAQ).
- **Paper White** (surface-raised): cards, floating cards, secondary pills, insurance pills.
- **Olive Ink** (ink): headings and primary text.
- **Muted Ink** (ink-muted): body copy, leads, captions, nav links. 5.9:1 on crudo.
- **Soft Ink** (ink-soft): the muted second line of display headlines only.
- **Hairline** (border) and **Strong Hairline** (border-strong): dividers, card outlines, pill outlines, accordion rules.

### Named Rules
**The Olive Door Rule.** The dark accent pill is the booking action and its direct equivalents. Anything that is not an invitation to act stays light.

**The Owned Band Rule.** Sage tint owns a whole surface (a band, a tile, a card, a photo ground) or nothing. It is never a thin stripe, underline or border accent.

**The Large-Only Soft Ink Rule.** Soft Ink (3.5:1 on crudo) and Faded Sage (3.1:1 on linen) appear only at title size (24px) and above, or as non-text marks. Body and label text use Muted Ink or darker.

## Typography

**Display Font:** Newsreader Variable (with Iowan Old Style, Georgia, serif)
**Body Font:** Figtree Variable (with system-ui, -apple-system, Segoe UI, sans-serif)

**Character:** A soft, bookish serif at regular weight paired with a friendly geometric-humanist sans. The serif carries the doctor's voice; the sans carries the facts.

### Hierarchy
- **Display** (400, clamp 40px to 72px, 1.04): hero headline only, three balanced lines.
- **Headline Large** (400, clamp 36px to 56px, 1.06): the final CTA band heading.
- **Headline** (400, clamp 32px to 48px, 1.1): every section heading; also the years figure in the credentials row.
- **Title** (400, clamp 24px to 30px, 1.2): card and step headings, step numerals, mobile menu links, footer name, map address.
- **Quote** (400, 21px, snug): testimonial quotes and insurance pills. Serif at near-body size for spoken or named things.
- **Body Large** (400, clamp 19px to 21px, 1.6): section intros and hero/CTA leads, max about 34rem.
- **Body** (400, 18px, 1.65): all running copy; FAQ answers capped at 60ch.
- **Label** (400 or 600, 15px): nav links, credential captions, list meta; 600 for button text (md size), definition terms and footer column titles.
- **Caption** (400, 14px): floating-card detail lines, footer legal row.

### Named Rules
**The Muted Second Line Rule.** Headings that run long split into an ink first line and a muted continuation (Soft Ink on crudo or linen, Sage Olive on the sage band). The continuation is a block on its own line, never an inline color change mid-sentence.

**The Serif Speaks Rule.** Every h1 to h3 is Newsreader at weight 400 with -0.015em tracking and balanced wrapping. No bold serif, no uppercase, no letter-spaced labels.

## Layout

A single centered column capped at 72rem (1152px) with a 20px gutter on mobile and 32px from 640px. Sections stack as full-bleed bands alternating crudo and linen, with vertical padding of 80px, 112px from 768px and 128px from 1024px. Inside, a 12-column grid appears from 1024px: hero copy takes 7 columns and the portrait 5; process and FAQ use a 4/8 split with a sticky heading column; the final CTA band uses 8/4.

Below 1024px everything collapses to one column. In the hero the portrait moves first and crops from 4:5 to 5:4 so the open-status card and the headline both land in the first view. Card grids step 1, 2, 3 columns at 640px and 1024px with 16 to 20px gaps. A fixed header (72px) sits on crudo and gains a hairline once scrolled; below 1024px a sticky bottom bar with booking and WhatsApp halves appears once the hero's own buttons leave view, and the footer reserves bottom padding for it.

Breakpoints are Tailwind's defaults: 640px, 768px, 1024px.

## Elevation & Depth

Flat by default. Structure comes from tonal bands (crudo, linen, sage) and 1px hairlines. Shadows appear in exactly two places: small white cards floating over a photograph, and the lift under a pill on hover.

### Shadow Vocabulary
- **Float** (`box-shadow: 0 10px 30px -6px rgb(31 36 32 / 0.12), 0 2px 6px rgb(31 36 32 / 0.05)`): white cards overlapping a photo frame (name card, open-status card, About quote caption).
- **Lift** (`box-shadow: 0 8px 20px -10px rgb(31 36 32 / 0.35)`): hover state of the primary pill, paired with a 1px rise.

### Named Rules
**The Float-Only Rule.** A shadow means "this card sits on a photograph." Cards on a flat band stay flat and use a hairline or tint instead.

## Shapes

Soft, generous curvature on a four-step scale: 14px for floating cards and notices, 20px for content cards, the map facade and tiles, 28px for photo frames and the final CTA band, and fully round for every pill, icon badge and circular control. Nothing is square-cornered except hairline rules. Photos are always clipped inside a 28px frame on a tint ground, so placeholders and real images read the same. Icon badges are 44px circles with a half-alpha Faded Sage ring; smaller 36px circles with a sage fill hold inline icons in cards and lists.

## Components

### Buttons
Calm, tactile pills that nudge rather than pop.
- **Shape:** fully round.
- **Primary:** Olive Door fill, white text, 15px semibold, 44px tall with 20px sides (md) or 18px semibold, 52px tall with 24px sides (lg). Optional trailing arrow.
- **Hover / Focus:** fill shifts to Sage Olive, Lift shadow appears, the pill rises 1px and the arrow slides 4px right over 300ms on the soft ease. Focus is a 2px Sage Olive outline at 3px offset. Movement is dropped under reduced motion.
- **Secondary:** Paper White fill, Olive Ink text, Strong Hairline border, optional leading 20px line icon; hover tints the fill sage and the border Faded Sage. Always paired beside a primary as the WhatsApp path.

### Chips
- **Insurance pills:** Paper White, Strong Hairline border, 56px tall, serif Quote type. Static, not interactive.

### Cards / Containers
- **Corner Style:** 20px for content cards, 14px for floating cards.
- **Background:** Paper White by default; service grids rotate one Sage Field and one Warm Sand card per six.
- **Shadow Strategy:** flat; Float only when over a photo (see Elevation & Depth).
- **Border:** 1px Hairline on service cards, darkening to Faded Sage on hover; testimonial cards borderless on linen.
- **Internal Padding:** 28px, 32px from 768px.

### Navigation
- **Header:** name in 21px serif with license beneath in 13px Muted Ink as the wordmark; nav links 15px Muted Ink with an animated 1px underline that draws left to right over 400ms; a md primary pill at the right. Below 1024px a 44px round outline toggle opens a crudo panel of serif Title links divided by hairlines, followed by the two lg pills.
- **Sticky booking bar (mobile):** crudo with a top hairline, two equal 48px pills (booking dark, WhatsApp light), safe-area aware; slides out while the hero is on screen.

### Accordion (FAQ)
Native details elements between Strong Hairline rules; serif 22px questions, a 36px round outlined plus that rotates 45 degrees when open.

### Credentials Row
A four-cell definition list framed by top and bottom hairlines with vertical hairline dividers: serif figures (years counting up once on view, license number), a graduation icon badge, and a Sage Field tile linking to insurances with a white round arrow.

### Portrait with Floating Cards (signature)
A 4:5 portrait (5:4 on mobile) in a 28px frame on Sage Field. A name-and-license card floats top-right (hidden on phones) and the open-status card overlaps the bottom-left edge: a sage clock disc, a status dot (Sage Olive when open, Soft Ink when closed) and today's hours. Without JavaScript it shows static hours. The hero enters in sequence: headline, lead, buttons, photo, then the cards about 300ms later.

### Motion
One easing curve (cubic-bezier(0.22, 1, 0.36, 1)). State changes take 300ms, link underlines 400ms, the sticky bar 500ms, entrances 700ms. Sections reveal with a fade and 14px rise driven by scroll timelines, with an IntersectionObserver fallback; content is visible by default. Reduced motion removes all movement and smooth scrolling.

## Do's and Don'ts

### Do:
- **Do** make every action a fully round pill at least 44px tall, dark Olive Door for booking and light hairline for WhatsApp, side by side.
- **Do** let sage tint own a whole band, tile or card (The Owned Band Rule).
- **Do** split long headings into an ink line and a muted continuation line.
- **Do** frame every photo or placeholder at 28px on a tint ground, and reserve the Float shadow for cards that overlap it.
- **Do** structure with 1px Hairline and Strong Hairline rules before reaching for fills or shadows.
- **Do** keep body copy at 18px Figtree in Muted Ink or darker; use Soft Ink only at 24px and above.
- **Do** use Lucide line icons at 1.5 stroke, 20px, in Sage Olive.
- **Do** run every movement on the soft ease and remove it under reduced motion.

### Don't:
- **Don't** use hospital blue, stethoscope imagery, stat badges or stock smiles; the world is a person, not a clinic.
- **Don't** add eyebrows or kicker labels above headings, uppercase tracked text, or bold serif.
- **Don't** use glass, blur, gradients or hard offset shadows.
- **Don't** put a shadow on a card that sits on a flat band.
- **Don't** use the Olive Door fill for anything that is not a call to act.
- **Don't** introduce square corners on cards, photos or buttons.
