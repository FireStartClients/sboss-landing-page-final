# SBOS Landing Page — Build Roadmap

> **Document Status:** Active Development
> **Last Updated:** April 26, 2026
> **Foundation:** Next.js 16 + Tailwind v4 (migration complete)
> **Purpose:** Full ordered build plan — from demo cleanup through every page and section needed for a production-ready website.

---

## ✅ Part 1 — CTA & Language Changes (Demo → Production) — COMPLETE

All demo-mode language has been replaced across every component. Summary of changes made:

| Item | File(s) Changed | Status |
|---|---|---|
| `Book a Demo` → `Get Started` / `Get Started Free` | `Navbar.jsx`, `Hero.jsx` | ✅ Done |
| `Book a Walkthrough` → `Get Started Free` / `Schedule a Call` | `Footer.jsx`, `FitCheck.jsx` | ✅ Done |
| `Open Demo` → `Explore the Platform` | `Footer.jsx` | ✅ Done |
| `See Demo Flow` → `See How It Works` | `Hero.jsx` | ✅ Done |
| Eyebrow badge: `SBOS Demo •` → `Now Live •` | `Hero.jsx` | ✅ Done |
| Proof chips replaced with real product proof points | `Hero.jsx` | ✅ Done |
| HowItWorks headline → `How SBOS transforms your operations` | `HowItWorks.jsx` | ✅ Done |
| Demo disclaimer note removed from footer | `Footer.jsx` | ✅ Done |
| `Demo Modules` nav/footer label → `Features` | `Navbar.jsx`, `Footer.jsx` | ✅ Done |
| 🚨 Wrong Calendly URL fixed (was Caterers Canvas link) | `CalendlyModal.jsx` | ✅ Done — swap real link before launch |
| Modal title: `Book a Demo` → `Schedule a Call` | `CalendlyModal.jsx` | ✅ Done |

---

## Part 2 — Legal Pages (Pre-Launch Blockers)

These two pages are legal requirements. Nothing goes live without them.

### 2.1 Privacy Policy — `/privacy`

- Required before collecting any email addresses or user data
- Should cover: data collected, how it's used, third-party services (Calendly, analytics), user rights
- Use a standard SaaS Privacy Policy template and customize with SBOS details
- Add link to footer legal row

**Build spec:** Static page, no interactivity needed. Simple readable layout with SBOS branding.

### 2.2 Terms of Service — `/terms`

- Required before any sign-up or waitlist flow goes live
- Should cover: acceptable use, limitations of liability, service description, cancellation
- Add link to footer legal row alongside Privacy Policy

**Build spec:** Static page, same layout as `/privacy`.

---

## Part 3 — Core Conversion Pages (Build in This Order)

These are the pages that turn visitors into users. Build in priority order.

### 3.1 Sign Up / Waitlist — `/signup` 🔴 Highest Priority

The most important page on the site. Every CTA button currently points to a Calendly modal — this page replaces that as the primary conversion destination.

**What it needs:**
- Headline + short value prop (reuse hero language)
- Email capture form (name, business email, business type)
- API route: `POST /api/waitlist` → store submission (Supabase or simple email forwarding)
- Confirmation state / success message
- Trust signals below the form (proof chips, security note)
- SEO metadata

**Decision:** Is this a live product sign-up or a waitlist? Determines the form fields and confirmation messaging.

---

### 3.2 About Us — `/about` 🔴 High Priority

B2B buyers do not buy from strangers. This page builds the trust that converts a "maybe" into a sign-up.

**What it needs:**
- **Founder section** — Name, photo, 2–3 sentence bio, LinkedIn link
- **Mission statement** — Why SBOS exists, who it's built for
- **Company story** — The problem you lived, the solution you built
- **Values block** — 3–4 core operating principles (optional but impactful)
- **Team section** — Additional team members if applicable
- CTA at the bottom → `/signup`
- SEO metadata

---

### 3.3 Pricing — `/pricing` 🟠 High Priority

Even if pricing isn't finalized, B2B buyers always navigate here. A missing pricing page kills conversions silently.

**Options (pick one):**
1. **Live pricing tiers** — if pricing is defined
2. **"Coming soon" + waitlist capture** — "Pricing is being finalized. Join the waitlist and be the first to know."
3. **Transparent waitlist tier** — "Free during beta. Paid plans starting at $X/mo after launch."

**What it needs (minimum):**
- Page headline + positioning statement
- At least one tier card or waitlist capture block
- FAQ strip (3–4 common pricing questions)
- CTA → `/signup`
- SEO metadata

---

### 3.4 Contact — `/contact` 🟠 High Priority

The footer currently has placeholder `#` links for Contact. This page makes the brand reachable.

**What it needs:**
- Contact form: Name, Email, Subject, Message
- API route: `POST /api/contact` → email forwarding
- Direct email address displayed (for users who prefer not to use a form)
- Business hours / response time expectation
- Optional: Calendly embed for discovery call bookings
- SEO metadata

---

## Part 4 — Homepage Sections to Add (Main `/` Page)

These sections slot into `app/page.js` alongside the existing components.

### 4.1 Results / Metrics Bar — Below Hero 🔴 High Priority

The first thing a visitor sees after the fold. Anchors the value prop with real numbers.

**Where it goes:** Directly after `<Hero />` in `app/page.js`
**What it needs:**
- 3–4 stats in a horizontal bar — e.g.:
  - `12+ hours saved per week`
  - `$890/mo average money leak found`
  - `6 modules in one system`
  - `Setup in under 30 minutes`
- Subtle animation (count-up on scroll entry)
- Thin divider treatment — not a full section, more of a trust bar

---

### 4.2 Integrations Row — After WhatIsSbos 🟠 Medium Priority

Proves the "orchestration layer" claim visually. Visitors want to know SBOS works with tools they already use.

**Where it goes:** After `<WhatIsSbos />` in `app/page.js`
**What it needs:**
- Headline: `Works with the tools you already use`
- Logo grid: QuickBooks, HubSpot, Slack, Google Workspace, Zapier, Stripe, Calendly, and others as applicable
- Subtle infinite scroll / marquee animation (optional but impactful)
- Subtext: `SBOS connects your existing stack — not another tool to replace everything`

---

### 4.3 Founder / Team Credibility Block — Between Comparison and Features 🟠 Medium Priority

For B2B, the "who built this" question is always in the room. A brief credibility block answers it without requiring a full About page visit.

**Where it goes:** Between `<Comparison />` and `<DemoModules />` (Features) in `app/page.js`
**What it needs:**
- Founder photo (professional headshot or brand-consistent photo)
- 1–2 sentence quote from founder — why they built SBOS
- Name + title
- Link → `/about` for full story

---

### 4.4 Social Proof / Testimonials — After FitCheck 🟠 Medium Priority

Validation from real people removes the final hesitation before signing up.

**Where it goes:** After `<FitCheck />` in `app/page.js`
**What it needs:**
- 3 testimonial cards: quote, name, business type, photo (or initials avatar)
- Source: beta users, early testers, or advisory relationships
- If no testimonials yet: use a "Results in Progress" block with early data points instead
- CTA below → `/signup`

---

### 4.5 Pricing Preview — Before Footer 🟠 Medium Priority

Removes the biggest conversion objection without requiring a full `/pricing` page visit.

**Where it goes:** Before `<Footer />` in `app/page.js`
**What it needs:**
- Headline: `Simple, transparent pricing`
- One or two tier cards (or a single "Start Free" card if still in beta)
- Key inclusions listed per tier
- CTA → `/pricing` or `/signup`

---

## Part 5 — Content Pages (SEO & Trust Building)

These pages aren't required for launch but are critical for long-term growth.

### 5.1 Blog — `/blog` 🟡 Medium Priority

The highest-leverage SEO asset for a product targeting small business owners.

**What it needs:**
- Blog index page: `/blog` — grid of post cards with title, date, category, excerpt
- Individual post page: `/blog/[slug]` — full article layout with reading time, share buttons, related posts CTA
- Categories relevant to SBOS: Operations, Money Management, Growth, SOPs, AI for Small Business
- Minimum 3–5 posts written before launch for credibility
- SEO metadata per post (`generateMetadata()`)

**Content ideas to start:**
1. "The 5 Money Leaks Killing Small Business Cash Flow"
2. "Why Every Local Service Business Needs an SOP"
3. "What Is a Business Operating System? (And Why You Need One)"
4. "How to Create a 30-60-90 Day Growth Plan for Your Business"
5. "AI Tools for Small Business Owners in 2026"

---

### 5.2 Case Studies / Customer Results — `/customers` 🟡 Medium Priority

Real stories are the most powerful conversion content for B2B.

**What it needs:**
- Index page: `/customers` — grid of customer story cards
- Individual story page: `/customers/[slug]`
- Story structure: the problem, the SBOS approach, the result (with metrics if possible)
- If no real customers yet: use "Early Access Results" framing with beta participants

---

### 5.3 Features / Platform Deep Dive — `/features` 🟡 Medium Priority

A dedicated page for each SBOS module, accessible from the nav.

**What it needs:**
- Overview of all 6 modules: Diagnostic, Money Leaks, Growth Plan, SOP Builder, Lead Automation, AI Chat
- Each module gets: headline, description, screenshot or UI preview, key benefit
- Cross-links from the DemoModules section on the homepage
- SEO metadata for each module (future: individual `/features/[module]` pages)

---

### 5.4 Changelog / Roadmap — `/changelog` 🟢 Lower Priority

Builds momentum and shows the product is actively shipping. Especially effective during a launch phase.

**What it needs:**
- Reverse-chronological list of updates and releases
- Simple format: date, version/label, what was added/fixed/improved
- Can be a static markdown file rendered as a page
- Optional: public roadmap section showing "Coming Soon" items

---

## Part 6 — Footer & Navigation Completion

### 6.1 Footer Link Completion

All current footer links that are placeholders (`#`) need real destinations:

| Footer Link | Current | Target |
|---|---|---|
| About Us | `#` (dead link) | `/about` |
| Contact | `#` (dead link) | `/contact` |
| Features | `#demo` (on-page scroll) | `/features` (when built) |
| Blog | missing | `/blog` |
| Customers | missing | `/customers` |
| Pricing | missing | `/pricing` |
| Privacy Policy | missing | `/privacy` |
| Terms of Service | missing | `/terms` |

### 6.2 Footer Social Links

Add to the footer brand column:
- LinkedIn company page
- X / Twitter (if active)
- YouTube (if any product demos or content are published)

### 6.3 Footer Newsletter Capture

Add an inline email capture to the footer for users who aren't ready to sign up but want to stay connected:
- Input: Email address
- CTA button: `Stay in the loop`
- API route: `POST /api/subscribe`

### 6.4 Navbar Link Updates

Once new pages are built, update the nav to reflect the full site:

| Nav Item | Status |
|---|---|
| Features | ✅ Present (scrolls to `#demo`) |
| How It Works | ✅ Present |
| Who It's For | ✅ Present |
| Security | ✅ Present |
| FAQ | ✅ Present |
| Pricing | ➕ Add when `/pricing` is built |
| Blog | ➕ Add when `/blog` is built |
| About | ➕ Add when `/about` is built |

---

## Part 7 — Existing Sections to Refine

These existing components need polish to match the production framing.

### 7.1 DemoModules Section → Rename to "Features" or "Platform"

- The section ID is `#demo` — update to `#features`
- Tab copy still reads like a demo experience — reframe each tab description around what the live product does for the user
- Tab names to keep as-is: `Diagnostic`, `Money Leaks`, `Growth Plan`, `SOP Builder`, `Lead Automation`, `AI Chat`
- Consider adding a short video embed or animated GIF per tab to show the actual UI

### 7.2 HowItWorks Steps

- Headline updated ✅ — steps still describe demo flow, not real onboarding
- Rewrite each step to describe what a real user does after signing up:
  1. Create your account (2 minutes)
  2. Answer 10 intake questions about your business
  3. Get your Diagnostic score + money leak report
  4. Review your 30-day action plan
  5. Generate your first SOP
  6. Activate your lead follow-up sequence

### 7.3 Hero Floating UI Cards

- Cards currently show sample/mock data — confirm the data shown aligns with what real users see
- Update card values if needed to match real product output ranges

### 7.4 FitCheck Scoring Logic

- CTA text updated ✅ — confirm the 5 criteria still accurately describe who SBOS is built for
- Consider personalizing the outcome message based on which specific boxes are checked

### 7.5 CalendlyModal

- URL placeholder in place ✅ — replace `calendly.com/sbos/discovery-call` with the real SBOS booking link before launch
- Decide: keep Calendly for high-touch sales, or route all CTAs directly to `/signup`

---

## Part 8 — Next.js Performance & Technical

### 8.1 `next/image` Migration

- Replace all `<img>` tags with `<Image />` from `next/image`
- Affected files: `Navbar.jsx` (logo), `Footer.jsx` (logo), any new pages with photos

### 8.2 API Routes

| Route | Purpose | Status |
|---|---|---|
| `POST /api/waitlist` | Sign-up / waitlist form submissions | ⬜ Not built |
| `POST /api/contact` | Contact form submissions | ⬜ Not built |
| `POST /api/subscribe` | Footer newsletter capture | ⬜ Not built |

### 8.3 Per-Page SEO Metadata

Every new page should export a `metadata` object in its `page.js`:
- `title` — unique, keyword-rich
- `description` — 150–160 characters
- `openGraph` — title, description, image (for social sharing)

### 8.4 `next/font` Migration

- Replace `@import` Google Fonts in `globals.css` with `next/font/google`
- Eliminates layout shift, self-hosts fonts for performance

---

## Master Build Order

Work through these in sequence. Each phase unblocks the next.

| Phase | Items | Priority |
|---|---|---|
| **Phase 1** ✅ | All Part 1 language/CTA changes | Complete |
| **Phase 2** | `/privacy` + `/terms` legal pages | 🔴 Pre-launch blocker |
| **Phase 3** | `/signup` waitlist page + API route | 🔴 Highest conversion impact |
| **Phase 4** | Results/Metrics bar on homepage | 🔴 First thing below the fold |
| **Phase 5** | `/about` page with founder story | 🟠 Trust critical for B2B |
| **Phase 6** | `/pricing` page (even placeholder) | 🟠 Silent conversion killer if missing |
| **Phase 7** | `/contact` page + API route | 🟠 Makes the brand reachable |
| **Phase 8** | DemoModules copy reframe + rename to Features | 🟠 Section still reads like demo |
| **Phase 9** | HowItWorks steps rewrite (real onboarding) | 🟠 Copy polish |
| **Phase 10** | Integrations row + Founder credibility block | 🟠 Homepage trust layer |
| **Phase 11** | Testimonials section + Pricing preview block | 🟠 Conversion support sections |
| **Phase 12** | Footer completion (links, socials, legal row) | 🟠 Must-have before launch |
| **Phase 13** | `/features` deep dive page | 🟡 SEO + detail for interested buyers |
| **Phase 14** | `/blog` — index + 5 starter posts | 🟡 Long-term SEO growth |
| **Phase 15** | `/customers` case studies page | 🟡 Social proof long-form |
| **Phase 16** | `/changelog` roadmap page | 🟢 Momentum builder |
| **Phase 17** | `next/image`, `next/font`, API routes, mobile QA | 🟡 Performance & polish |
