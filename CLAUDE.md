# Dario Frisör Salong — Demo Project

## Project Overview
This is a demo website built by SeBra Webb to pitch to Dario Frisör Salong, a hair salon located in central Kungsbacka. The site is not live for the real business yet — all content is placeholder/demo material.

The goal is to show the client a professional, modern upgrade compared to their current outdated website.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel
- **Repo:** GitHub

## Design System

### Color Palette
- **Background (dark):** `#1a0f0a` — deep dark brown, used for hero and dark sections
- **Background (light):** `#f5f0e8` — warm off-white/cream, used for light sections
- **Accent / Gold:** `#c8832a` — used for highlighted text, buttons, and decorative elements
- **Text primary:** `#ffffff` on dark backgrounds, `#1a0f0a` on light backgrounds
- **Text muted:** `#a89880` — used for labels, subtitles, and secondary text

### Typography
- **Headings:** Serif font (elegant, premium feel)
- **Body / UI:** Sans-serif
- **Decorative labels:** Spaced uppercase tracking (e.g. `KUNGSBACKA CENTRUM`, `VAD VI ERBJUDER`)

### Overall Aesthetic
Luxury barbershop / premium salon feel. Dark and warm. Gold accents. Think high-end, not trendy. The design should feel timeless and trustworthy.

## Site Structure

### Pages / Sections
1. **Hero** — Full-width background image with dark overlay, headline "Professionell klippning i centrala Kungsbacka", two CTAs: "Boka tid nu" (primary, gold) and "Se priser" (secondary, outlined)
2. **Stats bar** — 14+ år i branschen, 988+ nöjda kunder, 4.8 Google-betyg
3. **Tjänster & Priser** — Numbered list of services: Herrklippning 350kr, Damklippning 550kr, Färgning från 800kr, Slingor från 900kr, Styling 250kr, Skägg 200kr
4. **Om oss / Vår historia** — Text section about the salon
5. **Möt teamet** — Profile card for Dario (Grundare & Frisör) with circular photo
6. **Boka tid** — Booking section with Bokadirekt widget placeholder + "Boka via Bokadirekt" button
7. **Kontakt** — Phone number: 0300-104 99

### Navigation
- Logo: "DARIO / FRISÖR SALONG" top left
- Nav links: Tjänster & Priser, Om oss, Kontakt
- CTA button: "Boka tid" (gold, top right)
- Sticky floating "Boka tid" button bottom right on scroll

## Key Details & Constraints

### Bokadirekt Integration
The booking widget is currently a **placeholder only**. Do NOT try to implement real Bokadirekt functionality. Display a styled placeholder box with the text "BOKADIREKT WIDGET INTEGRERAS HÄR" and a "Boka via Bokadirekt →" button. This will be activated when the real client signs on.

### Images
- Hero background: Unsplash photo of hair salon interior with 60% dark overlay
- Dario profile photo: Real photo of Dario working, displayed as circular crop
- Keep all images optimized using Next.js `<Image>` component

### Demo Status
This is a pitch demo. Content like "988+ nöjda kunder" and "14+ år" is illustrative. Do not add disclaimers about this in the UI.

## Development Rules

1. **Always maintain the dark/gold color palette** — do not introduce new colors without good reason
2. **Mobile responsive** — all sections must look good on mobile
3. **No lorem ipsum** — use realistic Swedish placeholder text that fits a hair salon
4. **Animations should be subtle** — fade-ins, smooth transitions. Nothing flashy or distracting
5. **Keep UI animations under 300ms**
6. **Use Tailwind utility classes only** — no inline styles unless absolutely necessary
7. **Next.js Image component** — always use for images, never plain `<img>` tags

## Workflow
When a task is completed, always commit with a clear message and push all changes to GitHub.
