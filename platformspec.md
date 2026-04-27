# SBOS — Platform Specification Document

> **Document Status:** Living Spec — Derived from Landing Page Content & Demo Data  
> **Last Updated:** April 26, 2026  
> **Product:** Small Business Operating System (SBOS)

---

## 1. Platform Overview

### 1.1 What Is SBOS?

**SBOS (Small Business Operating System)** is a diagnostic and execution platform designed for local service businesses. It acts as an orchestration layer that sits on top of a business's existing tools — not replacing them, but unifying the operational signals that matter into one actionable command center.

**Tagline:** *"Stop guessing about your business health. Start executing with clarity."*

**Brand Description:** "The modern operating system for small business. From scattered chaos to clear execution."

### 1.2 Core Value Proposition

SBOS helps small businesses:
1. **Assess** their current operations through a structured health diagnostic
2. **Reduce wasted spend** by surfacing duplicative software and money leaks
3. **Plan** a clear 30/60/90-day execution roadmap
4. **Document** repeatable processes via auto-generated SOPs
5. **Automate** basic follow-up sequences so no lead falls through the cracks

SBOS is explicitly **not** a replacement for CRM, accounting, or project management software. It is described as an *"orchestration layer"* that works alongside tools like QuickBooks, HubSpot, and Monday.com.

---

## 2. Problem Statement

### 2.1 The Core Pain Points SBOS Solves

| Problem Area | Today's Reality | SBOS Solution |
|---|---|---|
| **Clarity & Visibility** | Data scattered across 5+ logins — revenue in invoicing, notes in email, tasks in spreadsheets | Unified diagnostic dashboard snapshot |
| **Speed to Insight** | Days of manual CSV exports and cross-referencing spreadsheets | Instant diagnostic scoring in minutes, not days |
| **Process Consistency** | Best processes locked in employee heads — lost when they leave | Auto-generated, centralized SOPs |
| **Follow-Up Reliability** | Leads slip through because someone forgot — sticky notes and good intentions | Guaranteed automated follow-up sequences |
| **Ease of Implementation** | New tools require IT, migrations, months of setup | Guided ~10-minute demo deployment |
| **Actionability of Outputs** | Consultants deliver 40-page PDFs; analytics tools give charts with no context | Structured 30/60/90-day plan with weekly action items |

### 2.2 The "Cost of Doing Nothing"

Operating without a system creates invisible friction:
- No single source of truth for revenue data
- Follow-up entirely dependent on human memory — no automated reminders
- Onboarding process varies by team member — inconsistent client experience
- Tools that don't talk to each other consuming margin silently

> *"Most small businesses bleed 15-20% of their margin on unused or duplicative tools and manual labor that could be automated."*

---

## 3. Target Audience

### 3.1 Primary Users

**Local service businesses** — specifically those who:
- Are using too many disconnected tools
- Experience inconsistent lead follow-up
- Have SOPs and processes that exist only in employees' heads
- Need a clearer execution plan than "do more marketing"
- Can start with one process and improve iteratively

### 3.2 Industry Verticals Represented (Demo Data)

- Home Services (e.g., home repair, landscaping)
- Consulting / Professional Services
- Healthcare / Dental
- Creative Agencies
- Any local service business with 5–50 employees

### 3.3 Fit Score Framework

SBOS uses a 5-point self-assessment ("Fit Check") to qualify prospects:

| Score | Outcome | CTA |
|---|---|---|
| 0 | Neutral — explore features | Explore Features |
| 1–2 | Worth exploring — walk through it together | Book a Walkthrough |
| 3–4 | Strong fit — SBOS can consolidate your workflow | Book a Walkthrough |
| 5/5 | Perfect match — "You need an operating system yesterday" | Book a Walkthrough |

**Fit Criteria (the 5 self-assessment questions):**
1. We're using too many disconnected tools.
2. Lead follow-up is inconsistent.
3. Standard Operating Procedures live in people's heads.
4. We need a clearer plan than "do more marketing."
5. We can start with one process and improve iteratively.

---

## 4. Platform Architecture & Modules

SBOS is structured as **5 integrated modules** delivered in a guided flow. The full demo takes approximately 10 minutes using pre-loaded sample business data (no login required).

### 4.1 Module 1 — Business Health Diagnostic

**Purpose:** Analyzes the current operational footprint to establish a baseline score.

**Inputs Required:**
- Basic revenue range
- Number of current software tools
- Primary operational bottleneck

**Generated Outputs:**
- Overall Health Score (0–100)
- Risk categorization matrix
- Top 3 immediate priority fixes

**Scoring Categories:**
| Category | What It Measures |
|---|---|
| Operations | Tool overlap, workflow fragmentation |
| Finance Visibility | Revenue tracking, cost optimization |
| Growth Readiness | 90-day planning, improvement roadmap |
| Process Maturity | Documentation of key processes |
| Team Alignment | Communication centralization |

**Why It Matters:** *"You can't fix what you haven't measured. This gives you an honest look at where your business operations are fragile."*

**Sample Diagnostic Score:** 72/100

---

### 4.2 Module 2 — Money Leak Finder

**Purpose:** Scans the tech stack and payroll inefficiencies to find wasted spend.

**Inputs Required:**
- Current software subscriptions
- Overlapping tool categories
- Hours spent on manual data entry

**Generated Outputs:**
- Total monthly waste estimate
- Duplication flags
- Consolidation recommendations

**Leak Types Detected:**
- `duplicate` — two tools serving the same function
- `underutilized` — tools paid for but rarely used
- `overlap` — tools that replicate functionality of an included subscription

**Why It Matters:** *"Most small businesses bleed 15-20% of their margin on unused or duplicative tools and manual labor that could be automated."*

**Sample Data (Demo Business):**

| Tool / Leak | Category | Monthly Cost | Potential Savings | Severity |
|---|---|---|---|---|
| Asana + Monday.com | Project Management | $168 | $80 | High |
| QuickBooks + FreshBooks | Accounting | $55 | $25 | Moderate |
| ConvertKit (rarely used) | Email Marketing | $79 | $79 | High |
| Calendly Teams (low adoption) | Scheduling | $48 | $32 | Moderate |
| Slack + Microsoft Teams (duplicate) | Communication | $144 | $144 | Critical |
| **Totals** | | **$2,840/mo** | **$890/mo** | |

---

### 4.3 Module 3 — Growth Plan Generator

**Purpose:** Transforms scattered goals into a structured 3-phase execution roadmap.

**Inputs Required:**
- Primary 90-day objective
- Current biggest constraint
- Available team capacity

**Generated Outputs:**
- 30-day "quick win" tasks
- 60-day system builds
- 90-day scaling milestones

**Why It Matters:** *"Moving from reactive chaos to proactive execution requires a chronological plan, not just a to-do list."*

**Sample 30/60/90-Day Plan (Demo Business):**

**30-Day Theme: "Foundation — Stop the Bleeding"**
- Consolidate Asana and Monday.com into one project management tool (Week 2, High Impact)
- Cancel ConvertKit, migrate to Mailchimp free tier (Week 1, Medium Impact)
- Document client intake process as a simple 1-page SOP (Week 3, High Impact)
- Set up a shared team calendar in Google Workspace (Week 2, Medium Impact)

**60-Day Theme: "Optimization — Build the System"**
- Standardize accounting on QuickBooks and sunset FreshBooks (Week 6)
- Create SOPs for the 3 most frequent client-facing processes (Week 7)
- Migrate team communication from Slack to Microsoft Teams (Week 8)

**90-Day Theme: "Scale — Automate and Grow"**
- Implement automated lead follow-up for website inquiries (Week 10)
- Set up monthly operational review using diagnostic scoring (Week 11)
- Build client onboarding automation with templated tasks (Week 12)

---

### 4.4 Module 4 — SOP Builder

**Purpose:** Generates standardized operating procedures for the most critical workflows.

**Inputs Required:**
- Process name / goal
- Key steps currently taken
- Common errors to avoid

**Generated Outputs:**
- Formatted SOP document
- Quick-reference checklist
- Training guide framework

**Why It Matters:** *"If a process only lives in your head, you don't own a business — you own a job. SOPs make your business sellable and scalable."*

**Sample SOPs Generated:**

**SOP 1: New Client Onboarding**
- Owner: Account Manager | Frequency: Per new client | Est. Time: 45 minutes
- Steps: Welcome email → workspace creation → kickoff call → invoicing setup → getting started guide

**SOP 2: Lead Intake & Qualification**
- Owner: Sales Lead | Frequency: Per incoming lead | Est. Time: 15 minutes
- Steps: Log in CRM → acknowledgment email → BANT qualification → pipeline update

**SOP 3: Monthly Invoice Review**
- Owner: Finance Lead | Frequency: Monthly (last week) | Est. Time: 60 minutes
- Steps: Export outstanding invoices → cross-reference project status → send reminders → update cash flow forecast

---

### 4.5 Module 5 — Lead Follow-Up Automation

**Purpose:** Designs a starter automation sequence to ensure no lead falls through the cracks.

**Inputs Required:**
- Primary lead source
- Desired response time
- Follow-up timeline logic

**Generated Outputs:**
- Visual follow-up sequence map
- Draft text/email templates
- Automation readiness checklist

**Why It Matters:** *"Speed to lead is everything in local service. A guaranteed follow-up sequence instantly increases conversion rates without extra work."*

**Sample Sequence: "Website Lead — 7-Touch Follow-Up" (21-Day Duration)**

| Day | Channel | Type | Purpose |
|---|---|---|---|
| 0 | Email | Welcome | Acknowledge inquiry, set expectation |
| 2 | Email | Value | Provide insight, build credibility, soft CTA |
| 5 | SMS | Nudge | Low-friction check-in via different channel |
| 7 | Email | Case Study | Social proof — "12 hours/week saved" |
| 10 | Email | Direct Ask | Qualification — gives easy opt-out |
| 14 | SMS | Last Chance | Final touch with booking link |
| 21 | Email | Breakup | Graceful close — leaves door open |

**Expected Performance Metrics:**
- Open Rate: 45–55%
- Reply Rate: 15–22%
- Conversion Rate: 8–12%

---

## 5. The Demo Experience

### 5.1 Demo Flow (6 Steps, ~10 Minutes)

| Step | Title | Description |
|---|---|---|
| 01 | Intake | Business basics + bottlenecks |
| 02 | Diagnostic | Baseline score + operational snapshot |
| 03 | Find Leaks | Identify software + money waste |
| 04 | Roadmap | Clear 30/60/90 growth plan |
| 05 | SOPs | Starter pack generation |
| 06 | Automation | Follow-up sequence preview |

### 5.2 Demo Characteristics

- **No login required** — uses pre-loaded sample business data
- **No tool connections required** — zero authentication or API keys needed
- **~10 minute completion time** — full 5-module guided flow
- **Sample business data** — realistic mock data representing a typical small service business

### 5.3 Post-Demo Path

After completing the demo, prospects are directed to **book a 1-on-1 walkthrough** where the SBOS team reviews how the platform maps to their specific current operational reality.

**Primary CTAs:**
- "Book a Demo" (via Calendly modal)
- "See Demo Flow" (anchors to #how-it-works)
- "Take Fit Check" (anchors to self-assessment)
- "Open Demo" (launches interactive demo)

---

## 6. Security & Data Handling

### 6.1 Trust Principles

| Promise | How It's Delivered |
|---|---|
| **Demo-safe by default** | Pre-loaded sample data; no user data is ever touched in the demo environment |
| **Your data stays yours** | In production, SBOS acts as a read-only layer unless explicit write access is granted |
| **No surprise changes** | Generated SOPs and automation plans are *suggestions* — nothing goes live without human review and approval |
| **Production-ready foundations** | Demo environment backed by the same enterprise-grade infrastructure as the live product |

### 6.2 Integration Model

SBOS is an **orchestration layer** — it securely integrates with existing tech stacks (CRM, accounting, project management) to provide live telemetry. It does not replace any existing tool.

> *"We believe in letting specialized tools (like QuickBooks or HubSpot) do what they do best, while SBOS acts as the ultimate command center."*

---

## 7. Navigation & Information Architecture

### 7.1 Primary Navigation Links

| Label | Anchor | Purpose |
|---|---|---|
| Demo Modules | `#demo` | The 5-module tabbed explorer |
| How It Works | `#how-it-works` | 6-step timeline walkthrough |
| Who It's For | `#fit-check` | 5-point self-assessment tool |
| Security | `#security` | Trust & data handling section |
| FAQ | `#faq` | 6 frequently asked questions |

### 7.2 Page Sections (In Order)

1. **Navbar** — Floating pill nav with scroll progress indicator
2. **Hero** — Headline, subheadline, CTAs, floating UI cards
3. **What Is SBOS** — Plain English definition + 5 module chips
4. **Comparison** — "Today vs. SBOS" scrolling card stack (6 cards)
5. **Demo Modules** — Tabbed module explorer (5 modules)
6. **How It Works** — Animated 6-step timeline
7. **Fit Check** — Interactive self-assessment tool
8. **Security** — Trust & data handling (4 blocks)
9. **FAQ** — 6 Q&As in scrolling card stack
10. **Footer** — CTA endcap + links

---

## 8. Frequently Asked Questions

| Question | Answer Summary |
|---|---|
| Is this a real product or just a concept demo? | SBOS is a live operating system. The demo uses sample data, but the underlying engines (health scoring, SOP generation, etc.) are identical to production. |
| Do I need to connect my tools to try the demo? | No. Runs entirely on pre-loaded sample data — no auth, no CSVs, no API keys. |
| Can I use my own business data later? | Yes. Post-walkthrough, SBOS securely integrates with your existing tech stack for live telemetry. |
| Does SBOS replace my CRM or accounting software? | No. SBOS is an orchestration layer that sits on top of existing tools. |
| Can the SOP outputs be customized to my specific industry? | Yes. Demo templates are foundational; production adapts to specific operational terminology per industry. |
| What happens after I finish the demo? | You gain understanding of what a Business Operating System looks like, then book a 1-on-1 walkthrough. |

---

## 9. Product Positioning

### 9.1 What SBOS Is NOT

- Not a CRM
- Not accounting software
- Not a project management tool
- Not a consulting report
- Not a data analytics dashboard

### 9.2 What SBOS IS

- A **Business Operating System** — an orchestration layer
- A **diagnostic engine** — scoring operational health
- A **document generator** — producing SOPs and action plans
- A **sequence designer** — building follow-up automation
- A **command center** — unifying signals across existing tools

### 9.3 Competitive Differentiation

| Traditional Alternative | SBOS Advantage |
|---|---|
| Management consultant | Actionable structured plan in minutes, not a 40-page PDF |
| Analytics tool | Context-driven insights, not raw charts |
| New software rollout | 10-minute demo with zero migration required |
| Spreadsheets & manual tracking | Automated scoring, SOPs, and sequences |

---

## 10. Tech Stack (Current Landing Page)

| Layer | Technology |
|---|---|
| Framework | React (Vite) |
| Styling | Tailwind CSS |
| Animation | GSAP (GreenSock) + ScrollTrigger |
| Icons | Lucide React |
| Booking | Calendly (via modal embed) |
| Hosting | Vercel |
| Assets / Logo | Cloudinary CDN |

---

## 11. Open Questions & Gaps for Application Build

The following areas are represented on the landing page via demo/sample data but will require full product definition before application build:

1. **Pricing Model** — No pricing information is present on the landing page. Subscription tiers, seat pricing, or service pricing TBD.
2. **Onboarding Flow** — The path from "book a walkthrough" to a live SBOS deployment is not yet specified.
3. **Integration Depth** — Which specific CRMs, accounting tools, and project management platforms will SBOS natively integrate with in production?
4. **AI / Scoring Engine** — The diagnostic scoring framework and SOP generation logic references a "Gemini output schema" in the mock data file; the full AI orchestration architecture needs to be defined.
5. **User Roles & Permissions** — Admin vs. team member access levels within SBOS are not yet defined.
6. **Dashboard / Live Telemetry** — The landing page describes live dashboard capabilities post-onboarding; the data model for live operational monitoring needs specification.
7. **SOP Customization Logic** — How the system learns industry-specific terminology for SOP adaptation.
8. **Automation Platform** — What automation infrastructure (Zapier, Make, native APIs) powers the follow-up sequences.
9. **Multi-Business / Agency Support** — Whether SBOS supports managing multiple client businesses from one account.
10. **Mobile Experience** — Application (not landing page) mobile strategy undefined.

---

*This document was compiled from the SBOS landing page source code (Hero, WhatIsSbos, Comparison, DemoModules, HowItWorks, FitCheck, Security, FAQ, Footer components) and the `mockDemoData.js` file. It represents the current stated product vision and should be treated as the primary reference for the application build.*
