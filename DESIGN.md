# SBOS — Design System & Visual Specification

> **Document Status:** Active Reference
> **Last Updated:** April 26, 2026
> **Derived From:** Full source code audit of all components (Hero, Navbar, WhatIsSbos, Comparison, DemoModules, HowItWorks, FitCheck, Security, FAQ, Footer)
> **Purpose:** Authoritative design guide for all new pages, sections, and components built on the SBOS site.

---

## 1. Brand Identity

### 1.1 Brand Personality

SBOS is a **B2B SaaS tool for local service businesses**. The design voice is:

- **Precise and technical** — not flashy, not corporate. Data-forward with clean UI.
- **Trustworthy and serious** — dark navy anchors the palette. No neon, no playful pastels.
- **Modern and confident** — generous white space, strong type hierarchy, purposeful motion.
- **Operationally intelligent** — the aesthetic mirrors what the product does: organized, structured, clear.

The visual language should feel like **a premium analytics dashboard crossed with a high-converting SaaS landing page**. Think Linear, Vercel, or Notion — clean scaffolding with purposeful data density.

### 1.2 Logo

- **Source:** Cloudinary CDN — `https://res.cloudinary.com/dbtuwhauh/image/upload/v1771843214/SBOS_Logo_For_Website_oi6aqp.png`
- **Light mode usage:** Full color logo, `h-7` or `h-8`, `w-auto object-contain`
- **Dark background usage:** Add `brightness-0 invert opacity-90` to render the logo in white
- **Never distort or recolor the logo.** Always preserve aspect ratio.

---

## 2. Color Palette

All colors are defined as custom Tailwind tokens in `tailwind.config.js`.

### 2.1 Primary Palette

| Token | Hex | Usage |
|---|---|---|
| `sbos-navy` | `#1E2478` | Primary text, headings, dark accents |
| `sbos-royal` | `#2C3FB8` | Primary button fill, interactive states |
| `sbos-electric` | `#3366FF` | Brand accent, highlights, progress indicators, borders |
| `sbos-ice` | `#EEF3FF` | Light backgrounds, chip fills, subtle surfaces |
| `sbos-cloud` | `#F8FAFF` | Page background, section alternates |
| `sbos-ink` | `#101426` | Maximum contrast text (use sparingly) |
| `sbos-slate` | `#5E6B8A` | Body text, subheadings, secondary labels |

### 2.2 Utility / Status Colors

| Token | Hex | Usage |
|---|---|---|
| `sbos-success` | `#18C37E` | Positive states, live indicators, checkmarks |
| `sbos-warning` | `#F5A524` | Warning states, medium-risk indicators |

### 2.3 Footer / Dark Background

The footer uses a hardcoded near-black: `bg-[#0A0D1C]`. This is intentional — it's deeper than `sbos-navy` and creates a strong visual terminus for the page.

### 2.4 Section Background Alternation Pattern

The page alternates section backgrounds to create visual rhythm:

| Section | Background |
|---|---|
| Hero | `bg-sbos-cloud` (default body) |
| WhatIsSbos | `bg-sbos-navy` (dark) |
| Comparison | `bg-sbos-cloud` |
| DemoModules | `bg-sbos-cloud` |
| HowItWorks | `bg-sbos-cloud` + blueprint grid overlay |
| FitCheck | `bg-sbos-cloud` |
| Security | `bg-sbos-navy` (dark) |
| FAQ | `bg-white` |
| Footer | `bg-[#0A0D1C]` (darkest) |

**Rule:** Never stack two dark sections or two identical-background sections consecutively without a clear visual break.

### 2.5 Opacity Conventions

- `sbos-electric/10` — very subtle borders and tints on light backgrounds
- `sbos-electric/20` — icon backgrounds on dark sections
- `sbos-navy/5` — shadow color for card drop shadows
- `sbos-ice/80`, `sbos-ice/90` — body text on dark backgrounds
- `white/5`, `white/10` — surface tints on dark sections (cards, hover states)
- `white/80` + `backdrop-blur-xl` — the frosted glass nav treatment

---

## 3. Typography

All fonts are loaded via Google Fonts and mapped to custom Tailwind font family tokens.

### 3.1 Font Stack

| Token | Font | Role |
|---|---|---|
| `font-heading` | **Sora** | All H1–H4 headings, section titles, card titles |
| `font-body` | **Inter** | All body copy, descriptions, paragraph text |
| `font-mono` | **IBM Plex Mono** | Labels, eyebrow tags, chip text, step numbers, system status, data values |
| `font-accent` | **Instrument Serif** | Italic decorative text only — used in headline split phrases |

### 3.2 Heading Scale

| Usage | Classes | Notes |
|---|---|---|
| Hero H1 | `text-5xl lg:text-6xl/tight font-heading font-bold text-sbos-navy tracking-tight` | Primary page headline |
| Section H2 | `text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-sbos-navy` | Standard section headline |
| Card H3 | `text-xl font-heading font-bold text-sbos-navy` | Feature cards, FAQ questions |
| Card H4 | `text-base md:text-lg font-heading font-bold` | Sub-card headings |

### 3.3 Accent Italic Pattern

Every major headline uses a **split construction**: one clause in `font-heading font-bold`, followed by a short phrase in `font-accent italic font-normal`. This creates the signature SBOS typographic rhythm.

**Examples from codebase:**
- `Stop guessing about your business health.` + *`Start executing with clarity.`* (Hero)
- `The Cost of` + *`Doing Nothing`* (Comparison)
- `Start Small.` + *`See Value Fast.`* (Footer CTA)
- `What SBOS actually does` + *`(in plain English)`* (WhatIsSbos)

**Rule:** The italic accent phrase is always in `text-sbos-royal` on light backgrounds, or `text-sbos-electric` on dark backgrounds.

### 3.4 Body Text

- Standard body: `text-base text-sbos-slate leading-relaxed font-body`
- Hero subhead: `text-lg text-sbos-slate font-body text-balance leading-relaxed`
- Dark section body: `text-lg text-sbos-ice/90 font-body`
- Label / eyebrow: `text-xs font-mono font-semibold text-sbos-electric uppercase tracking-widest`

### 3.5 Mono Labels

IBM Plex Mono is used for all "system-feel" labels:
- Step numbers (`STEP 01`)
- Section eyebrows (`Today vs. SBOS`, `FAQ`, `Trust & Data Handling`)
- Data values and metric numbers
- Status indicators (`System Operational`, `Now Live`)
- Proof chips under CTAs

---

## 4. Spacing & Layout

### 4.1 Container

- Max width: `max-w-7xl` (Hero), `max-w-6xl` (Footer), `max-w-5xl` (WhatIsSbos, Security), `max-w-4xl` (HowItWorks, FitCheck), `max-w-3xl` (Comparison cards, FAQ cards)
- Horizontal padding: `px-6` universally
- Centering: `mx-auto`

### 4.2 Section Vertical Padding

- Standard sections: `py-24`
- Dark accent sections (WhatIsSbos): `py-20`
- Hero: `pt-32 pb-20 min-h-[100dvh]`
- Footer: `pt-24 pb-8`

### 4.3 Grid Systems

- **Two-column feature**: `grid grid-cols-1 md:grid-cols-2`
- **Hero layout**: `grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`
- **FitCheck**: `grid grid-cols-1 md:grid-cols-5 gap-12` (3-col checklist + 2-col outcome)
- **Security trust blocks**: `grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12`
- **Footer links**: `grid grid-cols-1 md:grid-cols-12` with brand column `md:col-span-5`

---

## 5. Component Design Patterns

### 5.1 Buttons

#### Primary CTA Button (Filled)
```
bg-sbos-royal hover:bg-sbos-electric text-white px-8 py-3.5 rounded-full
text-base font-semibold
transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
hover:scale-[1.03] hover:shadow-xl hover:-translate-y-1 hover:shadow-sbos-electric/25
focus:outline-none focus-visible:ring-2 focus-visible:ring-sbos-electric focus-visible:ring-offset-2
```

#### Secondary CTA Button (Ghost)
```
bg-white border border-sbos-slate/20 hover:border-sbos-electric
text-sbos-navy px-8 py-3.5 rounded-full text-base font-semibold
transition-all duration-300 hover:shadow-sm hover:scale-[1.03]
```
Includes an icon (PlayCircle, ArrowRight) that transitions color on hover.

#### Dark Section Ghost Button
```
bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10
text-white px-8 py-4 rounded-full text-base font-semibold
transition-all duration-300
```

**Rules:**
- All primary buttons are `rounded-full` (pill shape) — never `rounded-lg`
- Hover always includes `scale-[1.03]` + shadow lift
- Never use flat color without hover feedback
- Small nav CTA: `px-5 py-2.5 text-sm rounded-full`

### 5.2 Cards

#### UI Floating Cards (Hero)
```
bg-white/90 backdrop-blur-md border border-sbos-slate/10
p-5 rounded-2xl shadow-xl shadow-sbos-navy/5 w-64
transform transition-all duration-300 hover:scale-105 hover:border-sbos-electric/30
```

#### Section Content Cards (Comparison, FAQ)
```
rounded-3xl bg-white border border-sbos-electric/10
shadow-2xl shadow-sbos-navy/8 overflow-hidden will-change-transform
```

#### Trust/Feature Cards (Security, dark backgrounds)
```
bg-white/5 border border-white/10 rounded-2xl p-8
hover:bg-white/10 transition-colors duration-300
```

#### Interactive Cards (FitCheck criteria)
- Default: `border border-sbos-slate/20 hover:border-sbos-royal/40`
- Selected: `bg-sbos-ice border-sbos-electric shadow-sm`

**Card Border Radius Convention:**
- `rounded-2xl` — standard cards, nav mobile menu
- `rounded-3xl` — pinned scroll cards (Comparison, FAQ), FitCheck container
- `rounded-full` — all buttons, pills, chips, dots

### 5.3 Eyebrow / Label Chips

Used above section headings to orient the reader:
```
inline-block text-xs font-mono font-semibold text-sbos-electric uppercase tracking-widest
bg-sbos-electric/5 px-4 py-1.5 rounded-full border border-sbos-electric/10
```

On dark backgrounds, module chips use:
```
flex items-center gap-2 px-4 py-2.5 rounded-full
bg-sbos-royal/20 border border-sbos-electric/20
text-sm font-medium font-body backdrop-blur-sm
hover:bg-sbos-royal/40 transition-colors
```

### 5.4 Proof Chips (Below CTAs)
```
flex items-center gap-1.5 px-3 py-1.5 rounded-md
bg-sbos-ice/50 border border-sbos-royal/5 text-xs font-mono text-sbos-slate
```
Each chip leads with a `CheckCircle2` icon in `text-sbos-success`.

### 5.5 Icon Usage

- **Library:** Lucide React exclusively
- **Icon size in buttons/chips:** `size={12}` to `size={20}`
- **Icon size in feature cards:** `size={20}` to `size={24}`
- **Icon backgrounds on dark:** `p-3 bg-sbos-electric/20 rounded-xl text-sbos-electric`
- **Icon backgrounds on light:** `p-2 bg-sbos-ice text-sbos-royal rounded-lg`
- **Animated icon pattern:** `group-hover:translate-x-1 transition-transform` on ArrowRight icons inside buttons

### 5.6 Dividers & Separators

- Light section divider: `h-px w-full bg-sbos-electric/10`
- Dark section divider: `h-px w-full bg-white/10`
- Progress dots (pinned scroll sections): `w-1.5 h-1.5 rounded-full bg-sbos-navy/15`, stacked vertically at `right-4 md:right-8`

### 5.7 Live Pulse Indicator

Used in the hero eyebrow badge and footer system status:
```jsx
<span className="relative flex h-2 w-2">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sbos-electric opacity-75" />
  <span className="relative inline-flex rounded-full h-2 w-2 bg-sbos-electric" />
</span>
```
For success/live states, replace `bg-sbos-electric` with `bg-sbos-success`.

---

## 6. Background Treatments

### 6.1 Noise Overlay (Global)
A fixed, full-viewport SVG noise texture at `opacity: 0.04` sits at `z-index: 50` as a `.noise-overlay` class. Applied once in the root layout — do not re-apply per section.

### 6.2 Blueprint Grid
A subtle geometric grid pattern available as `bg-blueprint-grid` (defined in Tailwind config). Used on `HowItWorks` at `opacity-30`. Used inline SVG version on dark sections (`WhatIsSbos`, `Security`) at `opacity: 0.03–0.05`.

### 6.3 Radial Glow (Hero & Footer CTA)
```
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
w-[800px] h-[800px] bg-sbos-electric/5 rounded-full blur-[100px] pointer-events-none
```
Footer CTA uses a tighter `w-3/4 h-3/4 bg-sbos-electric/20 blur-[100px]`.

### 6.4 Glass Panel Utility
```
.glass-panel {
  bg-white/70 backdrop-blur-xl border border-sbos-electric/10;
}
```

### 6.5 Dark Section Right Gradient
Footer uses: `absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sbos-electric/10 to-transparent`

---

## 7. Animation System

### 7.1 Animation Library
- **GSAP** (GreenSock) — all entrance and scroll animations
- **ScrollTrigger** — scroll-linked animations and pinned sections
- **Tailwind transitions** — hover states, interactive micro-interactions only

### 7.2 Standard Entrance Animation
All sections use this pattern on scroll entry (`start: 'top 80%'` or `top 85%`):
```js
gsap.from(elements, {
  scrollTrigger: { trigger: container, start: 'top 85%' },
  y: 40,        // or y: 30 for subtler elements
  opacity: 0,
  duration: 0.8,
  stagger: 0.1,
  ease: 'power3.out'
})
```

For chip/badge elements, add scale:
```js
{ scale: 0.9, opacity: 0, duration: 0.5, stagger: 0.05, ease: 'back.out(1.5)' }
```

### 7.3 Hero Floating Cards
Cards enter with `rotateX: -15` and settle to `rotateX: 0` using `fromTo`. After entrance, they continuously float:
```js
gsap.to('.ui-card', {
  y: '-=10', duration: 3, ease: 'sine.inOut',
  yoyo: true, repeat: -1,
  stagger: { each: 0.2, from: 'random' }
})
```
The `.ui-card` parent needs `style={{ perspective: '1000px' }}`.

### 7.4 Pinned Scroll Card Stacks
Both `Comparison` and `FAQ` use the same stacked-card-scroll architecture:
- **Pin container:** `h-screen flex flex-col overflow-hidden`
- **Pin duration:** `end: \`+=${(TOTAL_CARDS - 1) * 120}vh\``
- **scrub:** `1.2`, **anticipatePin:** `1`
- Card exit: `scale: 0.92, opacity: 0.4`
- Card entry: `yPercent: 0, scale: 1, opacity: 1`

### 7.5 HowItWorks Progress Line
A `<div>` starts at `h-0` and animates to `h-100%` scrubbed against the section scroll. Gradient: `from-sbos-electric to-sbos-royal` with `shadow-[0_0_10px_rgba(51,102,255,0.5)]`.

### 7.6 Navbar Entrance
```js
gsap.from(navRef.current, { y: -100, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.1 })
```

### 7.7 Navbar Scroll Progress Border
A live-updating SVG path traces the pill border of the navbar. The `stroke-dashoffset` is updated on every scroll event via a lerp-smoothed `requestAnimationFrame` loop. The progress stroke uses `stroke="#3366FF"` with `filter: drop-shadow(0 0 3px rgba(51,102,255,0.3))`.

### 7.8 Transition Easing
All Tailwind transitions use: `ease-[cubic-bezier(0.25,0.46,0.45,0.94)]` for a snappy, modern deceleration curve (avoids the default `ease-out` linear feel).

### 7.9 Duration Conventions
- Micro-interactions (hover): `duration-300`
- State changes (mobile menu, scroll-based): `duration-500`
- GSAP entrances: `0.6`–`1.0s`
- GSAP stagger delay: `0.05`–`0.15s`

---

## 8. Navigation

### 8.1 Navbar Style
- Position: `fixed`, centered `left-1/2 -translate-x-1/2`, `top: 1.75rem`, `z-50`
- Width: `w-[94%] max-w-5xl`
- Shape: `rounded-full`
- **Before scroll:** `bg-transparent border-transparent`
- **After scroll (>20px):** `bg-white/80 backdrop-blur-xl shadow-xl shadow-sbos-navy/8`
- Logo + nav links + CTA button layout: `justify-between`

### 8.2 Nav Link Style
```
text-sm font-semibold text-sbos-navy/90 hover:text-sbos-electric
transition-all duration-300 hover:-translate-y-[1px]
```

### 8.3 Mobile Menu
- Opens below the pill nav: `absolute top-full left-0 w-full mt-2`
- Style: `bg-white/95 backdrop-blur-xl border border-sbos-electric/10 rounded-2xl shadow-xl`
- Animated with `scale-y` + `opacity` on `origin-top`

---

## 9. Footer

### 9.1 Structure
- Background: `bg-[#0A0D1C]`
- Top rounding: `rounded-t-[2.5rem]` with `mt-[-2rem] z-20` (overlaps the last section above it for a layered effect)
- Internal sections: CTA Endcap → Brand column + link grid → Legal row

### 9.2 CTA Endcap
- Card: `bg-sbos-navy/50 border border-sbos-royal/30 rounded-3xl p-10 md:p-16`
- Backdrop: `backdrop-blur-md`
- Centered glow behind: `bg-sbos-electric/20 blur-[100px]`

### 9.3 System Status Badge
```
bg-white/5 border border-white/10 px-3 py-1.5 rounded-md
font-mono text-[10px] text-sbos-slate uppercase tracking-widest
```
Accompanied by the animated `sbos-success` ping dot.

---

## 10. Section-by-Section Design Reference

### 10.1 Hero
- **Left:** Eyebrow badge → H1 (heading + accent italic split) → Subhead → CTA row → Proof chips
- **Right:** Floating UI cards composition with SVG connection lines (hidden on mobile)
- H1 eyebrow uses live pulse + `font-mono text-sbos-electric`
- Proof chips row: `flex flex-wrap gap-3 mt-6`

### 10.2 WhatIsSbos (Dark)
- Full-width `bg-sbos-navy` with white blueprint grid overlay
- Centered text layout, `max-w-3xl` body, module chips in `flex flex-wrap justify-center`

### 10.3 Comparison
- Pinned scroll, `bg-sbos-cloud`
- Cards: white `rounded-3xl`, `border-sbos-electric/10`
- Split layout: TODAY (left, red accent `#` bar) vs WITH SBOS (right, `bg-sbos-ice/30`, electric `#` bar)

### 10.4 HowItWorks
- `bg-sbos-cloud` + blueprint grid at `opacity-30`
- Alternating left/right card layout on desktop, single column on mobile
- Animated vertical progress line, step dots with `active-dot` toggle class

### 10.5 FitCheck
- `bg-sbos-cloud`, centered `max-w-4xl`
- White `rounded-[2.5rem]` container with `shadow-xl shadow-sbos-navy/5 border border-sbos-electric/10`
- Checklist (3 col) + outcome panel (2 col): outcome panel is `bg-sbos-ice/50 rounded-3xl border border-sbos-royal/10`

### 10.6 Security (Dark)
- `bg-sbos-navy`, blueprint grid at `opacity-5`
- Trust blocks: `bg-white/5 border border-white/10 rounded-2xl`
- Icon containers: `bg-sbos-electric/20 rounded-xl text-sbos-electric`
- "How we do it" label: `text-sbos-electric text-xs font-mono uppercase tracking-wider`

### 10.7 FAQ
- `bg-white`, same pinned card stack pattern as Comparison
- Card header: `MessageCircleQuestion` icon in `bg-sbos-electric/10 rounded-xl`
- Divider: `h-px bg-sbos-electric/10`

---

## 11. New Pages & Sections — Design Rules

When building any new page or section, follow these rules:

### 11.1 Page Layout Shell
Every new page uses the same structure:
```
<Navbar />
<main>
  <section className="py-24 bg-sbos-cloud ...">
    <div className="max-w-5xl mx-auto px-6">
      {/* Section eyebrow */}
      {/* H2 with heading/accent split */}
      {/* Body content */}
    </div>
  </section>
</main>
<Footer />
```

### 11.2 Every New Section Must Have
1. **Section eyebrow label** — mono font, `text-sbos-electric`, `uppercase tracking-widest`, inside a pill badge
2. **H2 with the heading + accent italic split** — do not write a plain headline
3. **Section-appropriate background** — follow the alternating dark/light pattern
4. **GSAP scroll entrance** — `y: 40, opacity: 0` animating in on `top 80%`

### 11.3 New Cards Must Use
- Light context: `bg-white border border-sbos-electric/10 rounded-2xl` or `rounded-3xl`
- Dark context: `bg-white/5 border border-white/10 rounded-2xl`
- Always include a hover state: either `hover:border-sbos-electric` or `hover:bg-white/10`

### 11.4 Form Elements (Sign Up, Contact)
- Input: `bg-white border border-sbos-slate/20 rounded-xl px-4 py-3 text-sbos-navy focus:border-sbos-electric focus:ring-2 focus:ring-sbos-electric/20 outline-none`
- Label: `text-sm font-semibold text-sbos-navy font-body`
- Submit: Use the primary CTA button pattern (`rounded-full`, `bg-sbos-royal hover:bg-sbos-electric`)
- Error state: `border-red-400 text-red-600`
- Success state: `border-sbos-success` with a `sbos-success` checkmark

### 11.5 Do Not
- ❌ Use any color not in the SBOS palette
- ❌ Use `rounded-lg` on primary cards or buttons (use `rounded-xl`, `rounded-2xl`, `rounded-3xl`, or `rounded-full`)
- ❌ Stack two `bg-sbos-navy` sections consecutively
- ❌ Use plain `ease-out` — always use the custom cubic-bezier
- ❌ Create a heading without the `font-heading` token
- ❌ Use any icon library other than Lucide React
- ❌ Use inline pixel font sizes — always use Tailwind scale tokens

---

## 12. Tech Stack Reference

| Layer | Technology | Notes |
|---|---|---|
| Framework | React (Vite) | `src/` directory, `.jsx` components |
| Styling | Tailwind CSS v3 | Config at `tailwind.config.js`, custom tokens defined |
| Animation | GSAP + ScrollTrigger | Registered in each component that uses it |
| Icons | Lucide React | `import { IconName } from 'lucide-react'` |
| Booking | Calendly modal | `CalendlyModal.jsx` — embed via `isOpen/onClose` props |
| Hosting | Vercel | `vercel.json` present |
| Assets | Cloudinary CDN | Logo URL hardcoded in Navbar and Footer |
| Fonts | Google Fonts | Sora, Inter, IBM Plex Mono, Instrument Serif |

---

*This document is derived directly from a full audit of all source components and configuration files. It supersedes any prior design notes and should be treated as the single source of design truth for the SBOS site.*
