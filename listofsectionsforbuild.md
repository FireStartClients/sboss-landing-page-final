# SBOS — Sections & Pages Build List

> **Purpose:** Clean reference of every section and page that still needs to be built.
> **Last Updated:** April 26, 2026
> **Status:** Part 1 (language/CTA changes) complete. Everything below is pending.

---

## 🔴 Pre-Launch Blockers
- [x] `/signup` — Sign Up / Waitlist page *(primary CTA destination — every button leads here)* ✅ Built April 26, 2026
- [ ] Results / Metrics Bar *(homepage, below Hero)* — social proof numbers anchoring the value prop

---

## 🟠 Core Pages (High Priority)

- [x] `/about` — About Us page *(founder story, mission, team)* ✅ Built April 26, 2026
- [x] `/pricing` — Pricing page *(even a placeholder / waitlist tier card)* ✅ Built April 26, 2026
- [x] `/contact` — Contact page *(inquiry form + direct email)*

---

## 🟠 Homepage Sections to Add

These slot into the main landing page alongside existing sections.

- [x] **Results / Metrics Bar** — directly below Hero *(e.g., "12+ hrs saved/week", "$890/mo avg leak found")* ✅ Built April 28, 2026
- [x] **Integrations Row** — after WhatIsSbos *(logo grid: QuickBooks, HubSpot, Slack, Stripe, Zapier, etc.)* ✅ Built April 28, 2026
- [x] **Founder / Team Credibility Block** — between Comparison and Features *(photo, quote, link to /about)* ✅ Built April 28, 2026
- [x] **Pricing Preview** — before Footer *(1–2 tier cards or "Free during beta" block)* ✅ Built April 28, 2026

---

## 🟠 Existing Sections to Refine

These sections exist but need copy/content updates.

- [x] **DemoModules** — renamed section to "Platform Features", reframed all 5 module names/copy for live product ✅ April 28, 2026
- [x] **HowItWorks** — rewrote all 6 steps for real user onboarding (signup → health scan → diagnostic → connect tools → SOP → growth plan) ✅ April 28, 2026
- [ ] **Hero floating UI cards** — ⚠️ NEEDS MANUAL REVIEW: confirm data values (health scores, leak amounts, SOP names) match real product output ranges before launch
- [x] **FitCheck criteria** — removed "demo" language from subtitle; 5 checklist criteria confirmed accurate ✅ April 28, 2026
- [ ] **CalendlyModal** — ⚠️ NEEDS REAL URL: current placeholder is `https://calendly.com/sbos/discovery-call` — replace with actual SBOS booking link

---

## 🟠 Footer & Navigation Completion

- [x] Footer: wire up `About Us` link → `/about` ✅
- [x] Footer: wire up `Contact` link → `/contact` ✅ April 28, 2026
- [x] Footer: add `Blog` link → `/blog` ✅ April 28, 2026
- [x] Footer: add `Pricing` link → `/pricing` ✅ April 28, 2026
- [x] Footer: add `Privacy Policy` link → `/privacy` ✅ April 28, 2026
- [x] Footer: add `Terms of Service` link → `/terms` ✅ April 28, 2026
- [x] Footer: add social media links *(LinkedIn + X/Twitter — URLs need real handles)* ✅ April 28, 2026
- [x] Footer: add newsletter / email capture strip *(posts to `/api/subscribe`)* ✅ April 28, 2026
- [x] Navbar: add `Pricing` link *(once page is built)* ✅
- [x] Navbar: add `About` link *(once page is built)* ✅
- [x] Navbar: add `Blog` link ✅ April 28, 2026

---

## 🟡 Content Pages (SEO & Growth)

- [x] `/blog` — Blog index page with category filter, post grid, newsletter CTA ✅ April 28, 2026
- [x] `/blog/[slug]` — Individual blog post page with breadcrumb, article body, related posts ✅ April 28, 2026
- [x] `/features` — Features deep-dive page with one section per module ✅ April 28, 2026
- [x] `/changelog` — Changelog / Roadmap page with reverse-chronological timeline ✅ April 28, 2026

---

## 🟡 Technical & Performance

- [x] Set up React Router (`react-router-dom` already installed, not yet configured) ✅ Configured April 26, 2026
- [ ] API route: `POST /api/waitlist` — sign-up form submissions
- [ ] API route: `POST /api/contact` — contact form submissions
- [ ] API route: `POST /api/subscribe` — footer newsletter capture
- [ ] Replace `<img>` tags with optimized image handling across all components
- [ ] Add per-page SEO metadata (title, description, OG tags) to every new page
- [ ] Full mobile QA at 375px breakpoint across all sections
- [ ] Verify GSAP ScrollTrigger animations in production build

---

## Build Order (Recommended Sequence)

| # | Item | Why First |
|---|---|---|
| 1 | `/privacy` + `/terms` | Legal requirement before collecting any data |
| 2 | `/signup` + waitlist API | Every CTA needs a destination |
| 3 | Results / Metrics Bar | First thing below the fold — highest conversion impact |
| 4 | `/about` | B2B trust — buyers always check this |
| 5 | `/pricing` | Silent conversion killer if missing |
| 6 | `/contact` | Makes the brand reachable |
| 7 | DemoModules copy reframe | Still reads like a demo |
| 8 | HowItWorks steps rewrite | Onboarding flow, not demo flow |
| 9 | Integrations + Credibility block | Homepage trust layer |
| 10 | Testimonials + Pricing preview | Conversion support sections |
| 11 | Footer & Nav completion | Must-have before launch |
| 12 | React Router setup | Needed once any new page goes live |
| 13 | `/features` deep dive | SEO + detail for interested buyers |
| 14 | `/blog` + starter posts | Long-term SEO growth |
| 15 | `/customers` case studies | Social proof long-form |
| 16 | `/changelog` | Momentum builder |
| 17 | Technical / performance pass | Final polish before deploy |
