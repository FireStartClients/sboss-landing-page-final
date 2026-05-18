# SBOS Application — Task List (04/29/26)

> **Sources:** Meeting Notes 04/28/26 · Email Update 04/29/26 · Meeting Transcript 04/28/26 · Carryover from TaskList042826
> **Attendees:** team firestart (Godwin), Judith Jacques
> **Generated:** April 29, 2026 | **Last Updated:** April 29, 2026

---

## Priority Legend

| Level | Meaning |
|---|---|
| 🔴 **P0 — Critical / Blocking** | Must be done before any client-facing demo or launch |
| 🟠 **P1 — High Priority** | Core features required for launch |
| 🟡 **P2 — Medium Priority** | Important features that enhance platform value |
| 🟢 **P3 — Lower Priority** | Nice-to-have, future enhancements, post-launch |

---

---

# Section 1 — Judith's Action Items

> These are tasks only Judith can complete. Several are **blocking** — the dev team cannot proceed on dependent features until these are done.

### 🔴 P0 — Critical / Blocking

- [ ] **Add subdomain DNS records in Namecheap** — Add CNAME and TXT records for `app.sboss.tech` so the application connects to the production URL instead of the default Vercel `.vercel.app` domain. Godwin already added the domain on the Vercel side. Same process as when `sboss.tech` was originally connected. *(Carryover from 04/28)*

- [ ] **Verify subdomain propagation** — After DNS records are added, confirm `app.sboss.tech` resolves correctly and the SBOS application loads at that URL. *(Carryover from 04/28)*

- [ ] **Send updated Calendly link** — The current Calendly link on the contact page returns a 404 error. Provide the correct/updated Calendly link to Godwin for re-integration. *(Carryover from 04/28)*

- [ ] **Verify Stripe account status** — Check whether the existing Stripe account is in good standing and usable for SBOS. Note: Deanna also asked to use it for Caterers Canvas — confirm there are no conflicts. *(Carryover from 04/28)*

- [ ] **Decide on payment processor** — Choose between Stripe, PayPal, Polar, or Paddle for processing live subscription payments:
  - **Stripe** — Standard processing fees; Judith must handle taxes separately
  - **PayPal** — Requires developer account setup (~3-day approval)
  - **Polar** — 5% + $0.50/transaction, handles taxes automatically, ~5-day approval
  - **Paddle** — 5% + $0.50/transaction, handles taxes automatically, ~24–48hr approval
  *(Carryover from 04/28)*

### 🟠 P1 — High Priority

- [ ] **Create PayPal developer account** — Sign up at developer.paypal.com, create a developer application, and get approval. Verification takes ~3 days. The longer the PayPal account history, the better for approval. **Blocks:** PayPal integration for transactional data. *(Carryover from 04/28)*

- [ ] **Review pricing tier features** — Go through each pricing card (Free $0 / Operator $150 / Executive $550) and confirm which features should be offered at each tier. Provide feedback to Godwin on any changes. *(Carryover from 04/28)*

- [ ] **Review email update critical gaps** — Judith sent a detailed email identifying critical gaps (Diagnosis Engine, Money Leaks, Automation Layer, Lead/CRM, Marketing Engine, Integrations Strategy, UX Flow, Value Visualization, Executive Tier, Admin Power). Confirm priority order and feasibility preferences. *(New — from Email Update 04/29)*

### 🟡 P2 — Medium Priority

- [ ] **Review all pages and provide feedback** — Walk through every feature and page in the app, noting what works and what doesn't — send detailed feedback to Godwin. *(Carryover from 04/28)*

### 🟢 P3 — Lower Priority

- [ ] **Decide on "About the Founder" photo placement** — Judith referenced how Calendly's founder kept a low profile initially. She wants the founder story present but may not want her face prominently displayed. Provide direction. *(Carryover from 04/28)*

---

### Judith — Personnel / Hiring Tasks

- [ ] 🔴 **Speak with MJ tonight** — Discuss the job offer terms and confirm whether he prefers the $3,000/month salary or commission-based compensation. Get his confirmed answer. *(Carryover from 04/28)*

- [ ] 🔴 **Confirm MJ sent confirmation email** — Follow up to make sure MJ sent his confirmation/acceptance email to the team to avoid project delays. *(Carryover from 04/28)*

- [ ] 🟠 **Coordinate MJ start date with Cohort 4** — MJ can start the week of May 4th–6th, which coincides with the AI education program Cohort 4 launch. Confirm he's enrolled (free) so he can learn the tools, operationalization, and communications. *(Carryover from 04/28)*

---

---

# Section 2 — Application Tasks (Platform / App Features)

> These are development tasks for the SBOS application itself — the authenticated platform that clients log into and use.

---

## ✅ COMPLETED — Application Tasks

> Items below have been fully built, tested, and pushed to Supabase.

- [x] **Enable financial document upload during onboarding** — Added drag-and-drop PDF/CSV/XLSX upload to `RevenueToolsPage` (Step 3) as an optional Connect/Upload tab. Files upload to Supabase Storage `financial-docs` bucket on save. ✅ *Completed 04/29/26*

- [x] **Enable financial document upload in Money Leaks Finder** — Added full upload panel in `MoneyLeaksPage` with drag-and-drop, file list with delete, plus month-over-month spending chart (Recharts) with monthly/yearly toggle and manual entry fallback. ✅ *Completed 04/29/26*

- [x] **Integrate Settings — Profile, Integrations, Security, Help & Support tabs** — Consolidated all settings into a single `SettingsPage` with 4 tabs. `/dashboard/integrations` and `/dashboard/help` both redirect to `/dashboard/settings`. ✅ *Completed 04/29/26*

- [x] **Fix admin dashboard 404 routing** — Standardized all admin routes to `/sys-access/dashboard`. Old `/admin/*` path now redirects to `/404`. ✅ *Completed 04/29/26*

- [x] **Fix GeneratingPage data persistence** — Added retry logic and proper error surfacing so onboarding data correctly links in Supabase after the generation sequence completes. ✅ *Completed 04/29/26*

- [x] **Build automated blog generation into admin dashboard** — Full blog automation center built in `AdminContent.jsx` with AI Generate tab and Post Manager tab. Blog pipeline connected to Landing Page via shared Supabase `blog_posts` table. ✅ *Completed 04/29/26*

- [x] **Connect Landing Page blog to Admin Dashboard via Supabase** — Landing Page (`sboss.tech/blog`) now reads live from Supabase instead of a hardcoded static file. Next.js ISR set to 60s revalidation. ✅ *Completed 04/29/26*

---

## ⏳ STILL TO DO — Application Tasks

### 🔴 P0 — Critical / Blocking

- [ ] **Fix Calendly embed on Contact Page** — Once Judith provides the updated Calendly link, re-integrate it into the contact page so "Talk directly to Judith" works correctly. **Blocked by:** Judith sending updated link. *(Carryover from 04/28)*

- [ ] **Switch payment from sandbox to live** — Once Judith decides on a payment processor and provides keys, integrate live payment keys and disable sandbox/test mode so real subscriptions can be processed. **Blocked by:** Judith's payment processor decision. *(Carryover from 04/28)*

### 🟠 P1 — High Priority

- [ ] **Strengthen Diagnosis Engine** — The current diagnostic produces a score but needs to become a true audit system. *(New — from Email Update 04/29)*
  - Break into categories: **Finance, Operations, Sales, Marketing, Systems, Team**
  - For each category show: Weak areas, Root cause, Financial impact, Operational risk
  - Output must communicate: "Here's what's broken" → "Here's what it's costing you" → "Here's what to fix first"
  - Should feel like a consultant + auditor, not a survey
  - **Verify:** Current diagnostic flow produces scores per category and generates actionable recommendations

- [ ] **Expand Money Leaks System (3 input methods)** — Currently works partially with QuickBooks/Stripe. Needs 3 clear input paths: *(New — from Email Update 04/29)*
  - **API integrations** — QuickBooks, Stripe, PayPal, Square
  - **Manual input** — Tools, expenses, subscriptions entered by user
  - **File upload** — Bank statements, PDFs (AI parses and categorizes)
  - System must: Parse uploaded statements → Categorize spending → Identify duplicate tools, unused subscriptions, high-cost inefficiencies, revenue gaps
  - Output: Monthly waste, Annual waste, "You are losing $X here"
  - **Verify:** Upload feature already built (04/29) — confirm parsing and categorization logic works end-to-end

- [ ] **Build real Automation Layer** — Move from "AI suggests" to "System executes." *(New — from Email Update 04/29)*
  - Lead comes in → auto follow-up
  - Appointment booked → confirmation + reminder
  - No-show → re-engagement sequence
  - New lead → added to CRM + email flow
  - **Verify:** Current lead automation toggle exists — confirm whether any automation actually fires or if it's UI-only

- [ ] **Structure Lead / CRM System** — Current lead automation exists loosely. Needs full pipeline structure: *(New — from Email Update 04/29)*
  - Stages: New Lead → Contacted → Engaged → Booked → Closed → Follow-up
  - Each lead: Value, Source, Status, Next action
  - Features: Follow-up reminders, AI-generated responses, Conversion tracking
  - Core to revenue growth for platform users

- [ ] **Integrate PayPal API for transactional data** — Once Judith provides developer keys, build the PayPal integration so Money Leaks Finder can pull transactional history. **Blocked by:** Judith creating PayPal developer account. *(Carryover from 04/28)*

- [ ] **Integrate Square API for transactional data** — Build Square integration for the Money Leaks Finder. Needs to be assessed whether a Square developer account is required or if basic API access suffices. *(Carryover from 04/28 — previously removed, re-added per Email Update priority)*

- [ ] **Connect Instantly API keys for lead automation** — The one-click lead automation feature is built but not functional because no Instantly keys have been connected. Discuss with Judith how this should be handled. *(Carryover from 04/28)*

### 🟡 P2 — Medium Priority

- [ ] **Build Marketing Engine Module** — Unify blog automation, social scheduling, and ad generation into a single "Marketing Engine" module. *(New — from Email Update 04/29)*
  - **Generate content:** Blogs, Captions, Ads
  - **Schedule content:** Instagram, Facebook, LinkedIn
  - **Ads layer (future):** Meta integration, Campaign suggestions, Performance tracking
  - Should feel like: "Your marketing team inside SBOS"

- [ ] **Build social media scheduler using Content 360 API** — Implement a whitelabeled social media scheduling feature using the Content 360 API (already paid for). *(Carryover from 04/28)*
  - AI content generation → scheduling across all platforms
  - Calendar view of scheduled posts
  - Similar to Loomly UX

- [ ] **Implement AI ad generation feature** — Users generate AI-powered ads for their business: *(Carryover from 04/28)*
  - Static ad generation (image-based)
  - UGC-style video ads (similar to Make UGC)
  - Ads optimized based on onboarding data

- [ ] **Add Meta integration for Facebook/Instagram ads** — Integrate Meta API so: *(Carryover from 04/28)*
  - AI advisor can recognize and analyze ad performance
  - Users can view ad analytics from their SBOS dashboard
  - Meta pixel integration for tracking

- [ ] **Show AI credits/usage to users** — Users need to see how many AI generation credits they have remaining and how much each generation costs. May already be in backend — needs visible UI. *(Carryover from 04/28)*

- [ ] **Clean onboarding → dashboard experience** — The flow from signup → onboarding → dashboard needs to feel seamless: *(New — from Email Update 04/29)*
  - User signs up → Completes onboarding → Immediately sees: Health score, Money leaks, Key problems
  - Gets: 30/60/90 plan, SOP recommendations → System begins execution
  - **Verify:** Current flow and identify any friction points or dead screens

- [ ] **Expand Admin Dashboard power features** — Admin dashboard is strong but should expand: *(New — from Email Update 04/29)*
  - See client risk level
  - See inactive users
  - See usage analytics
  - See highest leaks across all clients
  - Trigger alerts to clients
  - Trigger reports
  - Make this the "SBOS Control Center"

- [ ] **Add HubSpot CRM integration** — Enhances lead automation by pulling in lead data and improving AI advisor recommendations. *(Carryover from 04/28)*

- [ ] **Add Google Analytics integration** — Allows analysis of website traffic data, making SOP builder and growth plan more effective. *(Carryover from 04/28)*

### 🟢 P3 — Lower Priority

- [ ] **Wire up admin diagnostic monitoring for Judith's own business** — Configure the admin dashboard diagnostic tools so Judith can use SBOS to manage her own operations and use her business as a demo case. *(Carryover from 04/28)*

- [ ] **General application UI review and polish** — Refine colors, visualizations, and design elements based on Judith's feedback after her walkthrough. *(Carryover from 04/28)*

- [ ] **Reinforce Executive Tier human layer** — The Executive plan needs to clearly communicate: *(New — from Email Update 04/29)*
  - Human strategy layer / Advisory access
  - Interpretation of data / Optimization support
  - "This is not just software. This is software + intelligence."

---

---

# Section 3 — Landing Page Tasks (sboss.tech)

> These are tasks for the public-facing marketing website — the main `sboss.tech` landing page, about page, pricing, blog, etc.

---

## ✅ COMPLETED — Landing Page Tasks

- [x] **Connect blog to Supabase** — Landing page blog (`sboss.tech/blog`) now reads live from the shared Supabase `blog_posts` table. Posts published in the Admin Dashboard appear on the landing page within 60 seconds. ✅ *Completed 04/29/26*

- [x] **Remove all "demo" wording** — All language updated from demo to reflect a complete, fleshed-out platform. ✅ *Completed prior to 04/28 meeting*

- [x] **Add "Cost of Doing Nothing" comparison section** — Section comparing business operations with vs. without SBOS. ✅ *Completed prior to 04/28 meeting*

- [x] **Update FAQ section** — FAQ content updated and live. ✅ *Completed prior to 04/28 meeting*

- [x] **Add pricing cards** — Three-tier pricing (Free $0 / Operator $150 / Executive $550) with pulse animation CTAs. ✅ *Completed prior to 04/28 meeting*

---

## ⏳ STILL TO DO — Landing Page Tasks

### 🔴 P0 — Critical / Blocking

- [x] **Add human element / stock photos to landing page** — 4-photo industry grid section added to landing page (`SocialProofHumans.jsx`). Local photos served from `/public` — Restaurants, Home Services, Hair & Beauty, Retail. No direct eye contact. ✅ *Completed 04/29/26*

- [x] **Add "Meet the Team" or operational team section** — Added `MeetTheTeam.jsx` with updated heading: *"Software built by people who've run businesses."* Clean statement section, no placeholder cards. ✅ *Completed 04/29/26*

- [x] **Add "Total Cost of Tools" comparison chart to pricing** — Built `ToolCostComparison.jsx` with animated line-item breakdown ($2,330/mo in tools vs. $150–$550/mo SBOS) + live count-up animation. Injected into `/pricing` page between comparison table and FAQ. ✅ *Completed 04/29/26*

- [x] **Add "ever-evolving platform" language to pricing** — Added `RefreshCw` icon + *"All new features included as they're released — forever"* to Operator and Executive feature lists. Added pill callout below pricing cards on both `PricingPage.jsx` and `PricingPreview.jsx`. ✅ *Completed 04/29/26*

### 🟠 P1 — High Priority

- [ ] **Fix Calendly 404 on Contact Page** — Re-integrate the updated Calendly link once Judith provides it. **Blocked by:** Judith sending updated link. *(Carryover from 04/28)*

### 🟢 P3 — Lower Priority

- [ ] **About page photo/layout adjustments** — Adjust the "About the Founder" section based on Judith's direction regarding photo placement and visibility. *(Carryover from 04/28)*

---

---

# Section 4 — Integrations Strategy (Tiered Roadmap)

> From Judith's email update: integrations should not be the ONLY path — manual input and upload fallbacks must always exist.

| Tier | Integrations | Status |
|---|---|---|
| **Tier 1 (MVP)** | QuickBooks, Stripe, Google Calendar | ✅ Live |
| **Tier 2** | PayPal, Square, HubSpot | ⬜ Pending |
| **Tier 3** | Meta Ads, Google Analytics, Email platforms | ⬜ Future |

**Rule:** Every integration must also have a **manual input fallback** and an **upload fallback**.

---

---

# Quick Reference — Follow-Up Action Items Table

| # | Owner | Action Item | Priority | Status | Source |
|---|---|---|---|---|---|
| 1 | Judith | Add CNAME + TXT records in Namecheap for `app.sboss.tech` | 🔴 P0 | ⬜ | Carryover |
| 2 | Judith | Send updated Calendly link for contact page | 🔴 P0 | ⬜ | Carryover |
| 3 | Judith | Verify Stripe account status / decide payment processor | 🔴 P0 | ⬜ | Carryover |
| 4 | Judith | Create PayPal developer account + developer app | 🟠 P1 | ⬜ | Carryover |
| 5 | Judith | Review pricing tier features and provide feedback | 🟠 P1 | ⬜ | Carryover |
| 6 | Judith | Review email update critical gaps and confirm priorities | 🟠 P1 | ⬜ | Email 04/29 |
| 7 | Judith | Speak with MJ re: job offer terms | 🔴 P0 | ⬜ | Carryover |
| 8 | Judith | Confirm MJ sent confirmation email | 🔴 P0 | ⬜ | Carryover |
| 9 | Judith | Review all materials and share feedback | 🟡 P2 | ⬜ | Carryover |
| 10 | Dev | Add stock photos / human element to landing page | 🔴 P0 | ⬜ | Carryover |
| 11 | Dev | Add "Total Cost of Tools" comparison chart | 🔴 P0 | ⬜ | Carryover + Email |
| 12 | Dev | Add "ever-evolving platform" pricing language | 🔴 P0 | ⬜ | Carryover |
| 13 | Dev | Add "Meet the Team" section | 🔴 P0 | ⬜ | Carryover |
| 14 | Dev | Switch payment from sandbox to live | 🔴 P0 | ⬜ Blocked | Carryover |
| 15 | Dev | Fix Calendly embed on contact page | 🔴 P0 | ⬜ Blocked | Carryover |
| 16 | Dev | Strengthen Diagnosis Engine (audit system) | 🟠 P1 | ⬜ | Email 04/29 |
| 17 | Dev | Expand Money Leaks (upload + manual + API + parsing) | 🟠 P1 | ⬜ | Email 04/29 |
| 18 | Dev | Build real Automation Layer (system executes) | 🟠 P1 | ⬜ | Email 04/29 |
| 19 | Dev | Structure Lead / CRM System (full pipeline) | 🟠 P1 | ⬜ | Email 04/29 |
| 20 | Dev | Integrate PayPal API | 🟠 P1 | ⬜ Blocked | Carryover |
| 21 | Dev | Integrate Square API | 🟠 P1 | ⬜ | Carryover + Email |
| 22 | Dev | Connect Instantly keys for lead automation | 🟠 P1 | ⬜ | Carryover |
| 23 | Dev | Build Marketing Engine Module | 🟡 P2 | ⬜ | Email 04/29 |
| 24 | Dev | Build social media scheduler (Content 360 API) | 🟡 P2 | ⬜ | Carryover |
| 25 | Dev | Implement AI ad generation | 🟡 P2 | ⬜ | Carryover |
| 26 | Dev | Add Meta integration | 🟡 P2 | ⬜ | Carryover |
| 27 | Dev | Show AI credits/usage UI | 🟡 P2 | ⬜ | Carryover |
| 28 | Dev | Clean onboarding → dashboard experience | 🟡 P2 | ⬜ | Email 04/29 |
| 29 | Dev | Expand Admin Dashboard power features | 🟡 P2 | ⬜ | Email 04/29 |
| 30 | Dev | Add HubSpot CRM integration | 🟡 P2 | ⬜ | Carryover |
| 31 | Dev | Add Google Analytics integration | 🟡 P2 | ⬜ | Carryover |
| 32 | Dev | Wire admin diagnostics for Judith's business | 🟢 P3 | ⬜ | Carryover |
| 33 | Dev | General UI review and polish | 🟢 P3 | ⬜ | Carryover |
| 34 | Dev | Reinforce Executive Tier human layer messaging | 🟢 P3 | ⬜ | Email 04/29 |

**Completed items (from 04/28–04/29 sessions):**

| # | Owner | Action Item | Priority | Status |
|---|---|---|---|---|
| C1 | Dev | Enable financial document upload (onboarding) | 🟠 P1 | ✅ Done |
| C2 | Dev | Enable financial document upload (Money Leaks) + MoM chart | 🟠 P1 | ✅ Done |
| C3 | Dev | Settings — Profile, Integrations, Security, Help & Support tabs | 🟠 P1 | ✅ Done |
| C4 | Dev | Fix admin dashboard 404 routing → `/sys-access/dashboard` | 🔴 P0 | ✅ Done |
| C5 | Dev | Fix GeneratingPage data persistence | 🟠 P1 | ✅ Done |
| C6 | Dev | Blog automation — AI Generate + Post Manager in admin | 🟠 P1 | ✅ Done |
| C7 | Dev | Connect Landing Page blog to Supabase (live pipeline) | 🟠 P1 | ✅ Done |

---

## Execution Order (Recommended by Judith — Email Update 04/29)

1. Strengthen Diagnostic Engine
2. Expand Money Leak System (uploads + manual + API)
3. Build real Automation Layer
4. Structure Lead/CRM System
5. Build Marketing Engine (content + scheduling)
6. Clean onboarding → dashboard experience

---

## Notes & Context

- **Payment sandbox mode** — Both SBOS and Caterers Canvas are currently in sandbox/test mode. No real transactions until live keys are connected.
- **Competitor reference** — Pricing was benchmarked against **Opmaps**, which only sells SOP-focused services. SBOS is positioned as a more comprehensive platform.
- **Bank meeting** — Judith had a meeting with **Apple Bank** on the morning of April 29th to demo the platform.
- **Pricing tiers** — Free ($0), Operator ($150/month), Executive ($550/month). Executive includes one-on-one hands-on support from Judith.
- **Integrations already live** — QuickBooks, Stripe, Google Calendar
- **Platform stack** — Vite + React + Tailwind CSS + Supabase + Gemini AI
- **Content 360 API** — Already paid for. Whitelabeled social media scheduling integration ready to implement.
- **Product philosophy (from Email)** — "We are not building a tool. We are building the system that replaces chaos inside small businesses." Everything must answer: "Does this help the business run itself better?"
- **Manual/Upload fallbacks** — Every integration must also support manual input and file upload as alternatives. Not all businesses use the same tools.

---

*This task list was generated from the SBOS meeting on April 28, 2026, Judith's email update on April 29, 2026, and carryover items from TaskList042826. Last updated April 29, 2026.*
