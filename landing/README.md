# VitalLink — Transplant Network Landing Page

A responsive React landing page and hospital login flow for a fictional organ-transplantation
platform. The design uses a strict green-and-white palette and presents two core capabilities:

- **Machine-learning donor matching** — compatibility scoring across HLA, blood type, urgency,
  waiting time, and distance.
- **Blockchain-backed security** — tamper-evident consent, audit trails, and record integrity.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (default `http://localhost:5173`).

- Landing page: `/`
- Login page: `/login` (linked from the navbar's **Sign in** button)

This is a front-end demo. Any work email and a password of 6+ characters will sign in, then redirect
to the landing page with a confirmation toast. The **Use demo credentials** helper fills
`demo@meridianhealth.org` / `vitalink-demo` automatically.

## Production build

```bash
npm run build
npm run preview
```

## Structure

- `src/App.jsx` — landing page composition, scroll reveals, and sign-in toast
- `src/pages/Login.jsx` — login form, validation, and redirect
- `src/components/` — navigation, hero, proof points, workflow, platform, security, testimonial,
  CTA form, and footer
- `src/styles.css` — design tokens, layout, animation, and responsive rules
- `public/favicon.svg` — brand mark

When deploying, configure the host to rewrite `/login` to `index.html` so the route resolves on
direct visits.

## Notes

Content and metrics on this page are illustrative demo data. VitalLink is a concept, not a medical
device, and clinical decisions must always be made by qualified transplant professionals.
