# SBOS Landing Page — Migration Task List
# Vite → Next.js (Landing Page Only)

> **Status:** Phases 1–8 complete, Phase 9 build check passing  
> **Last Updated:** April 26, 2026  
> **Scope:** Remove all demo pages/components, migrate landing page to Next.js 14 App Router  

---

## Phase 1 — Delete Demo Files From the Vite Project ✅

These files are being dropped entirely and should be deleted before or during migration. None of them are needed on the production landing page.

### 1.1 Pages to Delete

- [x] `src/pages/DemoIntake.jsx` — deleted
- [x] `src/pages/DemoResults.jsx` — deleted

### 1.2 Component Folder to Delete

- [x] `src/components/demo/` — **entire folder deleted**
  - `DiagnosticModule.jsx`
  - `MoneyLeaksModule.jsx`
  - `GrowthPlanModule.jsx`
  - `SopBuilderModule.jsx`
  - `LeadAutomationModule.jsx`
  - `AIChatWidget.jsx`

### 1.3 Context to Delete

- [x] `src/context/ThemeContext.jsx` — deleted

### 1.4 Data File to Evaluate

- [x] `src/data/mockDemoData.js` — **deleted entirely**
  - Confirmed: not referenced by `DemoModules.jsx`

---

## Phase 2 — Scaffold the Next.js Project ✅

### 2.1 Create New Next.js 14 App Router Project

- [x] Created at `/Users/firestartagency/Documents/SBOS/sbos-landing`
  - Next.js 16.2.4, React 19, Tailwind v4, ESLint
  - JS (no TypeScript), App Router, no src-dir, `@/*` import alias
- [x] Build verified clean (`npm run build` passes with 0 errors/warnings)

---

## Phase 3 — Copy Components Into New Project ✅

### 3.1 Copy the Components Folder

- [x] All 11 landing page components copied to `components/` at root:
  - `Navbar.jsx`, `Hero.jsx`, `WhatIsSbos.jsx`, `Comparison.jsx`, `DemoModules.jsx`
  - `HowItWorks.jsx`, `FitCheck.jsx`, `Security.jsx`, `Faq.jsx`, `Footer.jsx`, `CalendlyModal.jsx`

### 3.2 Copy the Assets Folder

- [x] `src/assets/` copied to `public/assets/`

### 3.3 Copy Data File (if kept)

- [x] Not needed — `mockDemoData.js` was deleted (not referenced by any landing page component)

---

## Phase 4 — Set Up the Single Page Route ✅

### 4.1 Create the Main Page

- [x] `app/page.js` created — assembles all 10 landing page sections

### 4.2 Set Up Page Metadata

- [x] `app/layout.js` updated with SBOS title and description metadata

---

## Phase 5 — Fix Component-Level Issues for Next.js ✅

### 5.1 Add `"use client"` to the Following Components

- [x] `components/Navbar.jsx`
- [x] `components/Hero.jsx`
- [x] `components/Comparison.jsx`
- [x] `components/DemoModules.jsx`
- [x] `components/HowItWorks.jsx`
- [x] `components/FitCheck.jsx`
- [x] `components/CalendlyModal.jsx`
- [x] `components/WhatIsSbos.jsx`
- [x] `components/Security.jsx`
- [x] `components/Faq.jsx`
- [x] `components/Footer.jsx`

### 5.2 Move Calendly Script Tag

- [x] Calendly `<Script>` added to `app/layout.js` via `next/script` with `strategy="lazyOnload"`

---

## Phase 6 — Update Tailwind Configuration ✅

> **Note:** The scaffold created Tailwind v4 (not v3). Tailwind v4 does not use `tailwind.config.js` — all theme tokens live in `globals.css` via the `@theme` directive.

### 6.1 Update Content Paths

- [x] Not needed in Tailwind v4 — content scanning is automatic

### 6.2 Migrate Custom Theme Colors

- [x] All SBOS colors ported to `@theme` block in `app/globals.css`:
  - `sbos-navy`, `sbos-royal`, `sbos-electric`, `sbos-slate`, `sbos-ice`, `sbos-cloud`, `sbos-ink`, `sbos-success`, `sbos-warning`

### 6.3 Copy Global CSS

- [x] `app/globals.css` written with:
  - Google Fonts import (Sora, Inter, IBM Plex Mono, Instrument Serif)
  - SBOS `@theme` tokens (colors + fonts + bg pattern)
  - `@layer base` body styles from Vite `index.css`
  - `@layer utilities` — `.noise-overlay`, `.text-balance`, `.glass-panel`, `.bg-blueprint-grid`

---

## Phase 7 — Update Vercel Configuration ✅

- [x] `vercel.json` created with `{ "framework": "nextjs" }`
- [x] Old SPA rewrite rule removed (no longer needed)

---

## Phase 8 — Update Environment Variables ✅

- [x] `.env.example` created with `VITE_` → `NEXT_PUBLIC_` renames:
  - `NEXT_PUBLIC_GEMINI_API_KEY`
  - `NEXT_PUBLIC_N8N_WEBHOOK_URL`
  - `NEXT_PUBLIC_N8N_STATUS_URL`
- [x] No `VITE_` references found in any component file (were only in deleted demo files)

---

## Phase 9 — Test & Verify

### 9.1 Dev Server Checks

- [ ] Run `npm run dev` in `/Users/firestartagency/Documents/SBOS/sbos-landing` and confirm landing page loads at `http://localhost:3000`
- [ ] Scroll through the full page and verify:
  - [ ] Navbar renders and scroll-progress indicator works
  - [ ] Hero animations play on load (GSAP entrance)
  - [ ] Floating UI cards animate correctly
  - [ ] Comparison section scrolls/animates
  - [ ] DemoModules tabs switch correctly
  - [ ] HowItWorks timeline animates on scroll (ScrollTrigger)
  - [ ] FitCheck checkboxes work and CTA updates based on score
  - [ ] Security section renders
  - [ ] FAQ section renders
  - [ ] Footer renders with correct links

### 9.2 Calendly Modal Check

- [ ] Click any CTA button that opens the booking modal
- [ ] Confirm the Calendly widget loads inside the modal
- [ ] **⚠️ Remember:** Update the Calendly URL in `CalendlyModal.jsx` to the correct SBOS booking link (current URL points to ccmgagency — wrong product)

### 9.3 Mobile Responsiveness Check

- [ ] Test at mobile breakpoint (375px) — Navbar hamburger menu, hero layout, FitCheck card

### 9.4 Build Check

- [x] `npm run build` — **PASSING, 0 errors, 0 warnings**
- [ ] Run `npm run start` and verify the production build works

---

## Phase 10 — Deploy to Vercel

- [ ] Push the new Next.js project to a GitHub repo
- [ ] Connect to Vercel and deploy
- [ ] Set environment variables in Vercel dashboard (any `NEXT_PUBLIC_` vars)
- [ ] Verify the live deployment renders correctly
- [ ] Update the custom domain (if applicable) to point to the new deployment
- [ ] Archive or delete the old Vite project repo (or keep it as a backup branch)

---

## Quick Reference — Files Being Deleted vs. Kept

| File/Folder | Action |
|---|---|
| `src/pages/DemoIntake.jsx` | ❌ Deleted |
| `src/pages/DemoResults.jsx` | ❌ Deleted |
| `src/components/demo/` (entire folder) | ❌ Deleted |
| `src/context/ThemeContext.jsx` | ❌ Deleted |
| `src/data/mockDemoData.js` | ❌ Deleted (not used by DemoModules) |
| `src/pages/LandingPage.jsx` | ♻️ Replaced by `app/page.js` |
| `src/main.jsx` | ♻️ Replaced by Next.js entry (not needed) |
| `index.html` | ♻️ Replaced by `app/layout.js` |
| `vite.config.js` | ♻️ Replaced by `next.config.mjs` |
| `src/components/Navbar.jsx` | ✅ Copied + `"use client"` added |
| `src/components/Hero.jsx` | ✅ Copied + `"use client"` added |
| `src/components/WhatIsSbos.jsx` | ✅ Copied + `"use client"` added |
| `src/components/Comparison.jsx` | ✅ Copied + `"use client"` added |
| `src/components/DemoModules.jsx` | ✅ Copied + `"use client"` added |
| `src/components/HowItWorks.jsx` | ✅ Copied + `"use client"` added |
| `src/components/FitCheck.jsx` | ✅ Copied + `"use client"` added |
| `src/components/Security.jsx` | ✅ Copied + `"use client"` added |
| `src/components/Faq.jsx` | ✅ Copied + `"use client"` added |
| `src/components/Footer.jsx` | ✅ Copied + `"use client"` added |
| `src/components/CalendlyModal.jsx` | ✅ Copied + `"use client"` added |
| `tailwind.config.js` | ♻️ Replaced by `@theme` in `globals.css` (Tailwind v4) |
| `postcss.config.js` | ✅ Auto-generated by scaffold |
| `src/assets/` | ✅ Copied to `public/assets/` |
| `public/` folder | ✅ Scaffold created fresh |
