# VitalLink — Transplant Network Landing Page

A responsive React landing page for a hospital organ-transplantation platform. The design uses a
strict green-and-white palette and presents two core capabilities:

- **Machine-learning donor matching** — compatibility scoring across HLA, blood type, urgency,
  waiting time, and distance.
- **Blockchain-backed security** — tamper-evident consent, audit trails, and record integrity.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (default `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Structure

- `src/App.jsx` — page composition and scroll-reveal observer
- `src/components/` — navigation, hero, proof points, workflow, platform, security, testimonial,
  CTA form, and footer
- `src/styles.css` — design tokens, layout, animation, and responsive rules
- `public/favicon.svg` — brand mark

## Notes

Content and metrics on this page are illustrative demo data. VitalLink is a concept, not a medical
device, and clinical decisions must always be made by qualified transplant professionals.
