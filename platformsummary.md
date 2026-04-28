# SBOS — Platform Summary

> **Document Status:** Living Reference  
> **Last Updated:** April 28, 2026  
> **Compiled From:** platformspec.md, sboslandingpage.md, DESIGN.md, listofsectionsforbuild.md  
> **Purpose:** Single source of truth describing what SBOS is, what it does, how it's built, and where it's going.

---

## 1. What Is SBOS?

**SBOS (Small Business Operating System)** is a diagnostic and execution platform for local service businesses. It acts as an **orchestration layer** that sits on top of a business's existing tools — not replacing them, but unifying the operational signals that matter into one actionable command center.

**Tagline:** *"Stop guessing about your business health. Start executing with clarity."*

**Brand Description:** "The modern operating system for small business. From scattered chaos to clear execution."

SBOS is explicitly **not** a CRM, accounting tool, project management app, or analytics dashboard. It is an operating system — meaning it reads what your other tools are doing and tells you what to fix, in what order, and how.

---

## 2. Core Value Proposition

SBOS helps small businesses do five things:

1. **Assess** — Run a structured health diagnostic across 5 operational categories
2. **Reduce Waste** — Surface duplicative software and money leaks eating into margin
3. **Plan** — Generate a clear 30/60/90-day execution roadmap
4. **Document** — Auto-generate SOPs so business processes don't live in people's heads
5. **Automate** — Build follow-up sequences so no lead falls through the cracks

---

## 3. Problem Statement

Most small business owners are running their businesses across 5+ disconnected tools — revenue in invoicing, notes in email, tasks in spreadsheets. Nothing talks to each other, processes live in employees' heads, and leads slip through because follow-up depends on human memory.

| Problem | Today's Reality | SBOS Solution |
|---|---|---|
| Clarity & Visibility | Data scattered across 5+ logins | Unified diagnostic dashboard |
| Speed to Insight | Days of manual CSV exports | Diagnostic scoring in minutes |
| Process Consistency | SOPs locked in employees' heads | Auto-generated, centralized SOPs |
| Follow-Up Reliability | Leads slip — sticky notes and good intentions | Guaranteed automated follow-up sequences |
| Ease of Implementation | New tools require IT, months of setup | ~10-minute guided deployment |
| Actionability | Consultants deliver 40-page PDFs; tools give charts with no context | Structured 30/60/90 plan with weekly action items |

> *"Most small businesses bleed 15–20% of their margin on unused or duplicative tools and manual labor that could be automated."*

---

## 4. Target Audience

### Primary User
Local service businesses with 5–50 employees who are:
- Using too many disconnected tools
- Experiencing inconsistent lead follow-up
- Running SOPs that exist only in employees' heads
- Needing a clearer execution plan than "do more marketing"
- Able to start with one process and improve iteratively

### Industry Verticals (Current Demo Data)
- Home Services (landscaping, home repair, etc.)
- Consulting / Professional Services
- Healthcare / Dental
- Creative Agencies
- Any local service business with a recurring client base

### Self-Assessment (Fit Check)
SBOS uses a 5-point interactive checklist to qualify prospects:

| # | Criterion |
|---|---|
| 1 | We're using too many disconnected tools |
| 2 | Lead follow-up is inconsistent |
| 3 | SOPs live in people's heads |
| 4 | We need a clearer plan than "do more marketing" |
| 5 | We can start with one process and improve iteratively |

**Scoring Outcomes:**
- 0/5 → Explore features
- 1–2/5 → Worth exploring — book a walkthrough
- 3–4/5 → Strong fit — SBOS can consolidate your workflow
- 5/5 → "You need an operating system yesterday" — book a walkthrough immediately

---

## 5. Platform Modules (5 Core Engines)

SBOS is structured around 5 integrated modules, delivered in a guided flow (~10 minutes using pre-loaded sample data).

---

### Module 1 — Business Health Diagnostic

**Purpose:** Establishes an operational baseline score across 5 categories.

**Inputs:** Revenue range, number of current tools, primary bottleneck  
**Outputs:** Overall Health Score (0–100), risk matrix, top 3 immediate fixes

**Scoring Categories:**
| Category | What It Measures |
|---|---|
| Operations | Tool overlap, workflow fragmentation |
| Finance Visibility | Revenue tracking, cost optimization |
| Growth Readiness | 90-day planning, improvement roadmap |
| Process Maturity | Documentation of key processes |
| Team Alignment | Communication centralization |

**Sample Score:** 72/100

---

### Module 2 — Money Leak Finder

**Purpose:** Scans the tech stack and payroll for wasted and duplicative spend.

**Inputs:** Current software subscriptions, overlapping categories, manual labor hours  
**Outputs:** Total monthly waste estimate, duplication flags, consolidation recommendations

**Leak Types Detected:**
- `duplicate` — two tools serving the same function
- `underutilized` — tools paid for but rarely used
- `overlap` — tools that replicate functionality already included elsewhere

**Sample Findings (Demo Business):**
| Tool / Leak | Monthly Cost | Potential Savings | Severity |
|---|---|---|---|
| Asana + Monday.com | $168 | $80 | High |
| QuickBooks + FreshBooks | $55 | $25 | Moderate |
| ConvertKit (rarely used) | $79 | $79 | High |
| Calendly Teams (low adoption) | $48 | $32 | Moderate |
| Slack + Microsoft Teams (duplicate) | $144 | $144 | Critical |
| **Totals** | **$2,840/mo** | **$890/mo** | |

---

### Module 3 — Growth Plan Generator

**Purpose:** Converts scattered goals into a phased, actionable execution roadmap.

**Inputs:** Primary 90-day objective, biggest current constraint, available team capacity  
**Outputs:** 30-day quick wins, 60-day system builds, 90-day scaling milestones

**Sample Plan Structure:**
- **30 Days — "Stop the Bleeding":** Consolidate tools, cancel underused subscriptions, document client intake as a 1-page SOP
- **60 Days — "Build the System":** Standardize accounting, create SOPs for top 3 client-facing processes, migrate communication platform
- **90 Days — "Scale":** Implement automated lead follow-up, set up monthly diagnostic review, build client onboarding automation

---

### Module 4 — SOP Builder

**Purpose:** Generates standardized operating procedures for the most critical workflows.

**Inputs:** Process name/goal, current steps taken, common errors to avoid  
**Outputs:** Formatted SOP document, quick-reference checklist, training guide framework

**Sample SOPs Generated:**
1. **New Client Onboarding** — Welcome email → workspace creation → kickoff call → invoicing → getting started guide *(45 min, Account Manager)*
2. **Lead Intake & Qualification** — Log CRM → acknowledgment email → BANT qualification → pipeline update *(15 min, Sales Lead)*
3. **Monthly Invoice Review** — Export invoices → cross-reference project status → send reminders → update cash flow forecast *(60 min, Finance Lead)*

> *"If a process only lives in your head, you don't own a business — you own a job. SOPs make your business sellable and scalable."*

---

### Module 5 — Lead Follow-Up Automation

**Purpose:** Designs a starter automation sequence so no lead falls through the cracks.

**Inputs:** Primary lead source, desired response time, follow-up timeline logic  
**Outputs:** Visual follow-up sequence map, draft email/SMS templates, automation readiness checklist

**Sample Sequence — "Website Lead: 7-Touch, 21 Days":**
| Day | Channel | Type | Purpose |
|---|---|---|---|
| 0 | Email | Welcome | Acknowledge inquiry, set expectation |
| 2 | Email | Value | Build credibility, soft CTA |
| 5 | SMS | Nudge | Low-friction check-in |
| 7 | Email | Case Study | Social proof ("12 hours/week saved") |
| 10 | Email | Direct Ask | Qualification — easy opt-out |
| 14 | SMS | Last Chance | Final touch with booking link |
| 21 | Email | Breakup | Graceful close — leaves door open |

**Expected Performance:**
- Open Rate: 45–55%
- Reply Rate: 15–22%
- Conversion Rate: 8–12%

---

## 6. The Experience / Demo Flow

### 6-Step Guided Flow (~10 Minutes)

| Step | Title | Description |
|---|---|---|
| 01 | Intake | Business basics + primary bottlenecks |
| 02 | Diagnostic | Baseline health score + operational snapshot |
| 03 | Find Leaks | Identify software duplication and money waste |
| 04 | Roadmap | Clear 30/60/90-day growth plan |
| 05 | SOPs | Starter SOP pack generation |
| 06 | Automation | Follow-up sequence design preview |

**Key Demo Characteristics:**
- No login required — runs on pre-loaded sample business data
- No tool connections required — zero auth or API keys
- ~10 minute completion for the full 5-module flow
- Uses realistic mock data representing a typical local service business

**Post-Demo Path:** Prospects are directed to book a 1-on-1 walkthrough where the SBOS team maps the platform to their specific operational reality.

---

## 7. Primary CTAs (User Conversion Flow)

| CTA Label | Destination | Purpose |
|---|---|---|
| Get Started / Get Started Free | `/signup` | Primary conversion — waitlist/account creation |
| Schedule a Call | Calendly modal | High-touch sales path |
| See How It Works | `#how-it-works` | On-page education anchor |
| Explore the Platform | `#features` / demo modules | Feature exploration |
| Take Fit Check | `#fit-check` | Self-qualification tool |

---

## 8. Security & Trust Model

| Promise | How It's Delivered |
|---|---|
| Demo-safe by default | Pre-loaded sample data; no user data is ever touched in demo |
| Your data stays yours | In production, SBOS acts as a read-only layer unless explicit write access is granted |
| No surprise changes | Generated SOPs and automation plans are suggestions — nothing goes live without human review |
| Enterprise-grade infrastructure | Demo environment backed by the same infrastructure as the live product |

**Integration Model:** SBOS is an orchestration layer — it securely integrates with existing tech stacks (CRM, accounting, project management) to provide live telemetry. It does not replace any existing tool.

---

## 9. Product Positioning

### What SBOS Is NOT
- Not a CRM
- Not accounting software
- Not a project management tool
- Not a consulting report or 40-page PDF
- Not a raw data analytics dashboard

### What SBOS IS
- A **Business Operating System** — an orchestration layer over existing tools
- A **Diagnostic Engine** — scoring operational health across 5 categories
- A **Document Generator** — producing SOPs and action plans automatically
- A **Sequence Designer** — building guaranteed lead follow-up automation
- A **Command Center** — unifying signals across an existing tech stack

### Competitive Differentiation
| Traditional Alternative | SBOS Advantage |
|---|---|
| Management consultant | Actionable structured plan in minutes, not a 40-page PDF |
| Analytics tool | Context-driven insights, not raw charts with no guidance |
| New software rollout | 10-minute deployment with zero migration required |
| Spreadsheets & manual tracking | Automated scoring, SOPs, and follow-up sequences |

---

## 10. Site Architecture (Landing Page)

### Page Sections (In Order)
1. **Navbar** — Floating pill nav with scroll progress indicator
2. **Hero** — Headline, subheadline, CTAs, floating UI cards
3. **Results / Metrics Bar** *(to be built)* — Social proof numbers below the fold
4. **What Is SBOS** — Plain English definition + 5 module chips
5. **Integrations Row** *(to be built)* — Logo grid of compatible tools
6. **Founder Credibility Block** *(to be built)* — Trust anchor between Comparison and Features
7. **Comparison** — "Today vs. SBOS" scrolling card stack (6 cards)
8. **Features / Demo Modules** — Tabbed module explorer (5 modules + AI Chat)
9. **How It Works** — Animated 6-step timeline
10. **Fit Check** — Interactive 5-point self-assessment
11. **Testimonials** *(to be built)* — Social proof cards
12. **Security** — Trust & data handling (4 blocks)
13. **FAQ** — 6 Q&As in scrolling card stack
14. **Pricing Preview** *(to be built)* — 1–2 tier cards before the footer
15. **Footer** — CTA endcap + full link grid + legal row

### Current Pages Built
| Route | Status |
|---|---|
| `/` | ✅ Live — Core landing page |
| `/signup` | ✅ Built April 26, 2026 |
| `/about` | ✅ Built April 26, 2026 |
| `/pricing` | ✅ Built April 26, 2026 |
| `/contact` | ✅ Built |
| `/privacy` | ⬜ Not built — pre-launch blocker |
| `/terms` | ⬜ Not built — pre-launch blocker |
| `/features` | ⬜ Not built |
| `/blog` | ⬜ Not built |
| `/customers` | ⬜ Not built |
| `/changelog` | ⬜ Not built |

---

## 11. Tech Stack

| Layer | Technology | Notes |
|---|---|---|
| Framework | Next.js (migrated from Vite) | `src/app/` file-based routing |
| Styling | Tailwind CSS | Custom tokens in `tailwind.config.js` |
| Animation | GSAP + ScrollTrigger | Pinned scroll sections, entrance animations |
| Icons | Lucide React | Exclusively — no other icon libraries |
| Booking | Calendly (modal embed) | `CalendlyModal.jsx` — real link needed before launch |
| Hosting | Vercel | `vercel.json` present |
| Assets / Logo | Cloudinary CDN | Logo URL hardcoded in Navbar and Footer |
| Fonts | Google Fonts | Sora (headings), Inter (body), IBM Plex Mono (labels), Instrument Serif (accent italic) |

### API Routes Needed
| Route | Purpose | Status |
|---|---|---|
| `POST /api/waitlist` | Sign-up / waitlist submissions | ⬜ Not built |
| `POST /api/contact` | Contact form submissions | ⬜ Not built |
| `POST /api/subscribe` | Footer newsletter capture | ⬜ Not built |

---

## 12. Design System Summary

### Color Palette
| Token | Hex | Primary Use |
|---|---|---|
| `sbos-navy` | `#1E2478` | Primary headings, dark backgrounds |
| `sbos-royal` | `#2C3FB8` | Primary button fill |
| `sbos-electric` | `#3366FF` | Brand accent, borders, highlights |
| `sbos-ice` | `#EEF3FF` | Light chip fills, subtle surfaces |
| `sbos-cloud` | `#F8FAFF` | Page and section background |
| `sbos-slate` | `#5E6B8A` | Body text, secondary labels |
| `sbos-success` | `#18C37E` | Positive states, checkmarks |
| `sbos-warning` | `#F5A524` | Warning / medium-risk indicators |

### Typography
- **Sora** — All headings (H1–H4)
- **Inter** — All body copy
- **IBM Plex Mono** — Labels, eyebrows, data values, system status
- **Instrument Serif** — Italic accent phrases in headlines only

### Signature Headline Pattern
Every major heading uses a split: one clause in `font-heading font-bold`, followed by a short phrase in `font-accent italic`. The italic phrase is always in `text-sbos-royal` (light backgrounds) or `text-sbos-electric` (dark backgrounds).

### Key UI Rules
- All buttons are `rounded-full` (pill) — never `rounded-lg`
- All buttons include `hover:scale-[1.03]` + shadow lift
- Dark sections: `bg-sbos-navy` — never stack two consecutively
- Animations: GSAP only — `y: 40, opacity: 0` entrance on scroll
- Hover transitions: `ease-[cubic-bezier(0.25,0.46,0.45,0.94)]` — never plain `ease-out`

---

## 13. Frequently Asked Questions (Platform-Level)

| Question | Answer |
|---|---|
| Is this a real product or just a demo? | SBOS is a live operating system. The demo uses sample data, but the underlying engines are identical to production. |
| Do I need to connect my tools to try it? | No — runs entirely on pre-loaded sample data. No auth, no CSVs, no API keys. |
| Can I use my own business data? | Yes. Post-walkthrough, SBOS securely integrates with your existing tech stack for live telemetry. |
| Does SBOS replace my CRM or accounting software? | No. It is an orchestration layer that sits on top of existing tools. |
| Can SOPs be customized to my industry? | Yes. Demo templates are foundational; production adapts to specific operational terminology per industry. |
| What happens after I finish the demo? | You understand what a Business Operating System looks like, then book a 1-on-1 walkthrough with the SBOS team. |

---

## 14. Open Questions & Gaps (Pre-Build)

These areas are referenced in demo/sample data but require full product definition before the application is built:

1. **Pricing Model** — No pricing information is finalized. Subscription tiers, seat pricing, or service pricing TBD.
2. **Onboarding Flow** — The path from "book a walkthrough" to a live SBOS deployment is not yet specified.
3. **Integration Depth** — Which specific CRMs, accounting tools, and PM platforms will SBOS natively integrate with in production?
4. **AI / Scoring Engine** — The diagnostic scoring framework references a "Gemini output schema" in mock data; the full AI orchestration architecture needs to be defined.
5. **User Roles & Permissions** — Admin vs. team member access levels within SBOS are undefined.
6. **Live Dashboard / Telemetry** — The data model for live operational monitoring post-onboarding needs specification.
7. **SOP Customization Logic** — How the system learns industry-specific terminology for SOP adaptation.
8. **Automation Platform** — What infrastructure (Zapier, Make, native APIs) powers the follow-up sequences.
9. **Multi-Business / Agency Support** — Whether SBOS supports managing multiple client businesses from one account.
10. **Mobile Application Strategy** — Application (not landing page) mobile strategy is undefined.

---

## 15. Key Metrics & Proof Points (Current Landing Page)

| Metric | Value | Source |
|---|---|---|
| Average money leak found | $890/mo | Demo data — Money Leak Finder |
| Time saved per week | 12+ hours | Hero proof chip |
| Modules in the system | 6 | Platform architecture |
| Setup time | Under 30 minutes | Platform claim |
| Lead follow-up open rate | 45–55% | Module 5 expected metrics |
| Lead follow-up conversion rate | 8–12% | Module 5 expected metrics |
| Typical margin bleed from tool waste | 15–20% | Platform positioning copy |

---

*This document was compiled from a full audit of platformspec.md, sboslandingpage.md, DESIGN.md, and listofsectionsforbuild.md. It should be treated as the primary reference for anyone building on or writing about the SBOS platform.*
