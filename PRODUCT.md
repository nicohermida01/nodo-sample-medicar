# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, in this order of importance for the demo:

1. **Prospective patients (the in-fiction audience).** Adults in Rosario, Santa Fe, looking for a
   dermatologist, mostly on mobile, often comparing several professionals. Includes older adults and
   parents booking for their children. Their job: understand in under 5 seconds who the doctor is, what she
   treats and how to book, and decide whether to trust her enough to ask for an appointment.
2. **Health professionals evaluating Estudio Nodo (the real audience).** Doctors and small practices who
   are shown this site as a portfolio/sales sample of what Estudio Nodo builds. They judge whether a site
   like this would make *their* practice look credible and bring them appointments.

## Product Purpose

A static, professional landing page for a fictitious dermatologist ("Dra. Julieta Ferrari, Médica
Dermatóloga", Rosario) that works as Estudio Nodo's showcase for medical professionals. Success in-fiction:
the visitor books via WhatsApp or the external booking system. Success for the business: a professional who
sees it wants the same for their practice, and Estudio Nodo can adapt it to them quickly.

## Positioning

Trust built from concrete, verifiable data (license number, training, years of practice, real office,
accepted insurance) and a warm, human presence, instead of the generic corporate-clinic look and the
promise-heavy copy common in the category.

## Operating Context

- Patients arrive mostly from mobile search ("dermatóloga Rosario"), Google Maps or a shared WhatsApp link.
- Booking happens off-site: WhatsApp (`wa.me`) or an external booking system link. No forms.
- Estudio Nodo re-skins the template per client by editing `src/content/site.ts`, swapping photos in
  `src/assets/` and adjusting color tokens in `src/styles/global.css`.

## Capabilities and Constraints

- Static site (Astro, `output: "static"`), zero JS where not needed, Lighthouse ≥ 95 in every category.
- All content and brand data centralized and typed in `src/content/site.ts`; components hold no copy.
- No health-data collection of any kind; no patient medical data.
- Must carry license (MP/MN) next to the name and in the footer, local SEO (city + specialty),
  JSON-LD (`Physician` / `MedicalClinic`), Open Graph.
- A visible footer line "Sitio de demostración: los datos y la profesional son ficticios", toggled via
  `footer.demoNotice.show` so it can be removed for real clients.
- Copy in Rioplatense Spanish, plain language, empathetic, no jargon.

## Brand Commitments

- Built and credited by Estudio Nodo.
- Visual direction is recorded in `CLAUDE.md` (ESTÉTICA, REFERENCIA, SISTEMA VISUAL) and derived from
  `referencias/` (primary: "Luma Modern Dental Website", "Landing Page - Dentista"). Those references set
  feel and style only; never copy their text, logos, photos or brands.

## Evidence on Hand

- All professional data is fictitious and placeholder: license `MP 00000`, contact `+54 9 341 000-0000`,
  `turnos@dra-ejemplo.com`, address Bv. Oroño 1234, piso 3.
- **No real photos yet.** Use clearly labeled neutral placeholders; never stock photos.
- **No real testimonials.** The three in `site.ts` are marked `isPlaceholder: true` and must never be
  presented as genuine. No ratings, review counts or patient numbers may be invented.
- No before/after images, ever.

## Product Principles

1. Clarity in five seconds: who she is, what she treats, how to book.
2. Credibility comes from facts, never from promises of results.
3. Booking is always one tap away, with WhatsApp as the constant secondary path.
4. Calm over clever: nothing should feel like a hospital or an ad.
5. Template first: every client-specific fact lives in one typed file.

## Accessibility & Inclusion

WCAG 2.x AA minimum. Audience includes older adults: 18px base body text, comfortable line-height, touch
targets ≥ 44px, visible focus, accessible accordion and mobile menu, full `prefers-reduced-motion` support.
