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
- [ ] `/contact` — Contact page *(inquiry form + direct email)*

---

## 🟠 Homepage Sections to Add

These slot into the main landing page alongside existing sections.

- [ ] **Results / Metrics Bar** — directly below Hero *(e.g., "12+ hrs saved/week", "$890/mo avg leak found")*
- [ ] **Integrations Row** — after WhatIsSbos *(logo grid: QuickBooks, HubSpot, Slack, Stripe, Zapier, etc.)*
- [ ] **Founder / Team Credibility Block** — between Comparison and Features *(photo, quote, link to /about)*
- [ ] **Social Proof / Testimonials** — after FitCheck *(3 customer quotes or early-access results)*
- [ ] **Pricing Preview** — before Footer *(1–2 tier cards or "Free during beta" block)*

---

## 🟠 Existing Sections to Refine

These sections exist but need copy/content updates.

- [ ] **DemoModules** — rename section to "Features", reframe all tab copy for live product *(not demo)*
- [ ] **HowItWorks** — rewrite the 6 steps to describe real user onboarding *(not the old demo flow)*
- [ ] **Hero floating UI cards** — confirm data values match real product output ranges
- [ ] **FitCheck criteria** — confirm the 5 checklist items accurately describe who SBOS is for
- [ ] **CalendlyModal** — swap placeholder URL with real SBOS booking link

---

## 🟠 Footer & Navigation Completion

- [x] Footer: wire up `About Us` link → `/about` ✅
- [ ] Footer: wire up `Contact` link → `/contact`
- [ ] Footer: add `Blog` link → `/blog`
- [ ] Footer: add `Pricing` link → `/pricing`
- [ ] Footer: add `Privacy Policy` link → `/privacy`
- [ ] Footer: add `Terms of Service` link → `/terms`
- [ ] Footer: add social media links *(LinkedIn, X/Twitter minimum)*
- [ ] Footer: add newsletter / email capture strip
- [x] Navbar: add `Pricing` link *(once page is built)* ✅
- [x] Navbar: add `About` link *(once page is built)* ✅
- [ ] Navbar: add `Blog` link *(once page is built)*

---

## 🟡 Content Pages (SEO & Growth)

- [ ] `/blog` — Blog index page *(post cards: title, date, category, excerpt)*
- [ ] `/blog/[slug]` — Individual blog post page *(full article layout)*
- [ ] `/features` — Features / Platform deep-dive page *(one section per module)*
- [ ] `/customers` — Case Studies / Customer Results page *(story cards + individual pages)*
- [ ] `/changelog` — Changelog / Roadmap page *(reverse-chronological update log)*

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
