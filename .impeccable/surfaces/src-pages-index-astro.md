---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Surface brief: home landing (src/pages/index.astro)

Scope: the single-page landing for the fictitious dermatologist. Mode: **Persuade**.
Audience/job: patients in Rosario (mostly mobile, incl. older adults and parents) deciding whether to book;
secondary, health professionals judging Estudio Nodo's craft. Action: "Pedir turno" (external booking link)
with WhatsApp as the always-visible secondary. Proof: license MP, UNR training, 12 years, real office address
and hours, accepted insurers. Constraints: PRODUCT.md + CLAUDE.md (static, zero-JS by default, no stock photos,
placeholders labeled, placeholder testimonials labeled as examples, no eyebrows).
Memorable moment: the portrait framed like a calm consulting room with a live "abierto ahora / abre el lunes 9 h"
card attached to it, the booking action one tap away.

## Direction contract

THESIS: A doctor's practice that reads like a person, not a clinic: one warm portrait, her name and license, and
a door that is visibly open (live hours). Refuses the hospital-blue split hero with stethoscope, stat badges and
stock smiles.

OWN-WORLD: Sage-olive (#3F4F3B) and crudo (#FAF8F3) grounds, sage tint fields (#E4EBD6) owning whole bands
(credentials row, final CTA), near-black olive pills (#2B3628). Newsreader 400 headlines with a muted second line,
Figtree body at 18px. Photos in 28px frames with small white floating cards; 1px warm hairlines; no glass.

STORY: Who she is (name, specialty, MP) -> she is qualified and near (credentials, office) -> what she treats ->
how the first visit goes -> my insurance works -> book now via booking link or WhatsApp.

FIRST VIEWPORT: Desktop: left 7/12 serif headline at display-xl (~72px, 3 even lines "Cuidamos tu piel / con tiempo, ciencia / y cercanía.", last two muted), lead with name + MP,
dark "Pedir turno" pill + light WhatsApp pill, a small row "OSDE, Swiss Medical, Galeno +3 · Bv. Oroño, Rosario".
Right 45%: portrait 4:5 in 28px frame; floating card bottom-left with live open/closed status and today's hours;
small card top-right "Dra. Julieta Ferrari · MP 00000". Mobile: portrait first, cropped 5:4 with status card, then
name+headline+CTAs; sticky bottom bar with Pedir turno + WhatsApp once the hero leaves view.

FORM: pinned editorial-warm clinic landing (CLAUDE.md structure, Luma/Dentista references). seed: none (pinned)
"crea la landing completo siguiendo todas las indicaciones y referencias". Signature interaction: live open-now
status (tiny inline script, static hours without JS). Motion grammar: hero orchestrated entrance (text, then photo,
then cards 150ms later), scroll-driven reveal fade+12px with IO fallback, credential counters; ease
cubic-bezier(0.22,1,0.36,1), 300-700ms; reduced motion = no movement.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
