'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft, ArrowRight, CheckCircle2, XCircle, Minus,
  Zap, Shield, Users, BarChart3, FileText, MessageSquare,
  Star, ChevronDown, ChevronUp
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

// ─── Tier definitions ────────────────────────────────────────────────────────
const TIERS = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$0',
    period: '/ month',
    tagline: 'Get familiar with the system.',
    description: 'Access the SOP Builder and explore the full platform at no cost. No credit card required.',
    cta: 'Get Started Free',
    highlight: false,
    dark: false,
    features: [
      { text: 'SOP Builder — create, assign & track procedures', included: true },
      { text: 'Platform preview — explore all modules', included: true },
    ],
  },
  {
    id: 'operator',
    name: 'Operator',
    price: '$150',
    period: '/ month',
    tagline: 'The full operating system.',
    description: 'Everything you need to diagnose, track, and execute across your entire business — in one place.',
    cta: 'Start with Operator',
    highlight: true,
    dark: false,
    badge: 'Most Popular',
    features: [
      { text: 'SOP Builder — create, assign & track procedures', included: true },
      { text: 'Platform preview — explore all modules', included: true },
      { text: 'AI Money Leak Detection', included: true },
      { text: 'Unified Financial Dashboard', included: true },
      { text: 'Customer & Lead Pipeline', included: true },
      { text: 'Business Health Diagnostic', included: true },
      { text: 'Weekly Business Summary', included: true },
      { text: 'Human advisory & strategy sessions', included: false },
      { text: 'Priority onboarding & founder access', included: false },
    ],
  },
  {
    id: 'executive',
    name: 'Executive',
    price: '$550',
    period: '/ month',
    tagline: 'The human element, included.',
    description: 'All Operator features plus a dedicated advisory layer — real human guidance paired with platform intelligence.',
    cta: 'Apply for Executive',
    highlight: false,
    dark: true,
    features: [
      { text: 'SOP Builder — create, assign & track procedures', included: true },
      { text: 'Platform preview — explore all modules', included: true },
      { text: 'AI Money Leak Detection', included: true },
      { text: 'Unified Financial Dashboard', included: true },
      { text: 'Customer & Lead Pipeline', included: true },
      { text: 'Business Health Diagnostic', included: true },
      { text: 'Weekly Business Summary with human analysis', included: true },
      { text: 'Human advisory & strategy sessions', included: true },
      { text: 'Priority onboarding & founder access', included: true },
    ],
  },
];

// ─── Comparison rows ──────────────────────────────────────────────────────────
const ROWS = [
  { label: 'SOP Builder',                   starter: true,  operator: true,  executive: true  },
  { label: 'Platform Preview',              starter: true,  operator: true,  executive: true  },
  { label: 'AI Money Leak Detection',       starter: false, operator: true,  executive: true  },
  { label: 'Unified Financial Dashboard',   starter: false, operator: true,  executive: true  },
  { label: 'Customer & Lead Pipeline',      starter: false, operator: true,  executive: true  },
  { label: 'Business Health Diagnostic',    starter: false, operator: true,  executive: true  },
  { label: 'Weekly Business Summary',       starter: false, operator: 'Automated', executive: 'Human-led' },
  { label: 'Advisory & Strategy Sessions',  starter: false, operator: false, executive: true  },
  { label: 'Priority Onboarding',           starter: false, operator: false, executive: true  },
  { label: 'Direct Founder Access',         starter: false, operator: false, executive: true  },
  { label: 'Monthly cost',                  starter: '$0',  operator: '$150', executive: '$550' },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: 'What can I actually do on the free Starter plan?',
    a: 'You get full access to the SOP Builder — create, assign, and track standard operating procedures for your team. You can also explore the other modules to see what the platform can do before upgrading.',
  },
  {
    q: 'Do I need a credit card to sign up?',
    a: 'No. The Starter plan is completely free with no payment information required. You only provide billing details when you choose to upgrade.',
  },
  {
    q: 'What is the Weekly Business Summary?',
    a: 'On the Operator plan, SBOS automatically compiles a weekly summary of your key metrics, flags, and potential changes you should consider based on your data. On the Executive plan, this summary is reviewed and annotated by a human advisor who adds context and strategic recommendations specific to your business.',
  },
  {
    q: 'What does the "human element" mean in the Executive plan?',
    a: 'Executive members get access to direct advisory sessions with Judith and the SBOS team. This includes strategic reviews, 1:1 sessions, and hands-on guidance — not just software.',
  },
  {
    q: 'Can I upgrade or downgrade at any time?',
    a: 'Yes. You can move between plans at any time. Upgrades take effect immediately; downgrades apply at your next billing cycle.',
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────
const Cell = ({ value }) => {
  if (value === true)  return <CheckCircle2 size={18} className="text-sbos-success mx-auto" />;
  if (value === false) return <Minus size={16} className="text-sbos-slate/30 mx-auto" />;
  return <span className="text-xs font-mono font-semibold text-sbos-navy">{value}</span>;
};

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-sbos-electric/10 rounded-2xl overflow-hidden bg-white">
      <button onClick={() => setOpen(o => !o)} className="w-full flex items-center justify-between px-6 py-5 text-left group hover:bg-sbos-ice/30 transition-colors">
        <span className="text-base font-heading font-bold text-sbos-navy pr-4">{q}</span>
        {open ? <ChevronUp size={18} className="text-sbos-electric flex-shrink-0" /> : <ChevronDown size={18} className="text-sbos-slate flex-shrink-0 group-hover:text-sbos-electric transition-colors" />}
      </button>
      {open && <div className="px-6 pb-5 pt-4 text-sbos-slate font-body text-sm leading-relaxed border-t border-sbos-electric/10">{a}</div>}
    </div>
  );
};

// ─── PricingPage ─────────────────────────────────────────────────────────────
const PricingPage = () => {
  const router = useRouter();
  const heroRef    = useRef(null);
  const cardsRef   = useRef(null);
  const tableRef   = useRef(null);
  const faqRef     = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const id = setTimeout(() => ScrollTrigger.refresh(), 150);
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current.querySelectorAll('.anim'), {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.2,
      });
      gsap.from(cardsRef.current.querySelectorAll('.tier-card'), {
        scrollTrigger: { trigger: cardsRef.current, start: 'top 85%' },
        y: 50, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out', immediateRender: false,
      });
      gsap.from(tableRef.current.querySelectorAll('tr'), {
        scrollTrigger: { trigger: tableRef.current, start: 'top 85%' },
        x: -20, opacity: 0, duration: 0.4, stagger: 0.05, ease: 'power3.out', immediateRender: false,
      });
      gsap.from(faqRef.current.querySelectorAll('.faq-item'), {
        scrollTrigger: { trigger: faqRef.current, start: 'top 85%' },
        y: 24, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out', immediateRender: false,
      });
    });
    return () => { clearTimeout(id); ctx.revert(); };
  }, []);

  return (
    <div className="min-h-screen bg-sbos-cloud overflow-x-hidden">
      <div className="noise-overlay" />
      <Navbar />

      {/* HERO */}
      <section ref={heroRef} className="relative pt-36 pb-16 bg-sbos-cloud bg-blueprint-grid overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sbos-electric/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <Link href="/" className="anim inline-flex items-center gap-2 text-sm font-semibold text-sbos-slate hover:text-sbos-electric transition-colors mb-10 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to home
          </Link>
          <h1 className="anim text-5xl lg:text-6xl font-heading font-bold text-sbos-navy tracking-tight leading-tight mb-5">
            Simple, honest{' '}
            <span className="font-accent italic font-normal text-sbos-royal">pricing.</span>
          </h1>
          <p className="anim text-xl text-sbos-slate font-body leading-relaxed max-w-2xl mx-auto">
            Start free with the SOP Builder. Upgrade when you're ready for the full operating system — or the full team behind it.
          </p>
        </div>
      </section>

      {/* TIER CARDS */}
      <section ref={cardsRef} className="py-16 bg-sbos-cloud">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`tier-card relative rounded-3xl overflow-hidden flex flex-col transition-all duration-300
                  ${tier.highlight
                    ? 'ring-2 ring-sbos-electric shadow-2xl shadow-sbos-electric/20 scale-[1.03] lg:scale-[1.05]'
                    : tier.dark
                      ? 'bg-sbos-navy shadow-xl shadow-sbos-navy/30'
                      : 'bg-white border border-sbos-electric/10 shadow-lg shadow-sbos-navy/5'
                  }`}
              >
                {/* Top bar */}
                {tier.highlight && <div className="h-1.5 w-full bg-gradient-to-r from-sbos-royal via-sbos-electric to-sbos-royal" />}
                {tier.dark && <div className="h-1.5 w-full bg-gradient-to-r from-sbos-electric/60 via-white/20 to-sbos-electric/60" />}

                <div className="p-8 flex flex-col flex-1">
                  {/* Badge */}
                  {tier.badge && (
                    <div className="inline-flex items-center gap-1.5 bg-sbos-electric/10 border border-sbos-electric/20 text-sbos-electric text-xs font-mono font-semibold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-4">
                      <Star size={10} fill="currentColor" /> {tier.badge}
                    </div>
                  )}

                  {/* Name + price */}
                  <h2 className={`text-2xl font-heading font-bold mb-1 ${tier.dark ? 'text-white' : 'text-sbos-navy'}`}>{tier.name}</h2>
                  <p className={`text-sm font-body mb-5 ${tier.dark ? 'text-sbos-ice/70' : 'text-sbos-slate'}`}>{tier.tagline}</p>

                  <div className="flex items-end gap-2 mb-2">
                    <span className={`text-5xl font-heading font-bold leading-none ${tier.dark ? 'text-white' : 'text-sbos-navy'}`}>{tier.price}</span>
                    <span className={`pb-1 text-base font-body ${tier.dark ? 'text-sbos-ice/60' : 'text-sbos-slate'}`}>{tier.period}</span>
                  </div>

                  <p className={`text-sm font-body leading-relaxed mb-6 ${tier.dark ? 'text-sbos-ice/70' : 'text-sbos-slate'}`}>{tier.description}</p>

                  <div className={`h-px w-full mb-6 ${tier.dark ? 'bg-white/10' : 'bg-sbos-electric/10'}`} />

                  {/* Feature list */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map(({ text, included }) => (
                      <li key={text} className="flex items-start gap-3">
                        {included
                          ? <CheckCircle2 size={16} className="text-sbos-success flex-shrink-0 mt-0.5" />
                          : <Minus size={16} className={`flex-shrink-0 mt-0.5 ${tier.dark ? 'text-white/20' : 'text-sbos-slate/25'}`} />
                        }
                        <span className={`text-sm font-body leading-snug ${
                          !included
                            ? tier.dark ? 'text-white/30' : 'text-sbos-slate/40'
                            : tier.dark ? 'text-sbos-ice/90' : 'text-sbos-slate'
                        }`}>{text}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={() => router.push('/signup')}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 group
                      ${tier.highlight
                        ? 'bg-sbos-royal hover:bg-sbos-electric text-white hover:scale-[1.02] hover:shadow-lg hover:shadow-sbos-electric/25'
                        : tier.dark
                          ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                          : 'bg-sbos-ice hover:bg-sbos-electric hover:text-white border border-sbos-electric/20 text-sbos-navy'
                      }`}
                  >
                    {tier.cta}
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs font-mono text-sbos-slate/60 mt-8 uppercase tracking-wider">
            All plans include access to the SBOS platform · Cancel anytime
          </p>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-3">
            <span className="text-xs font-mono font-semibold text-sbos-electric uppercase tracking-widest bg-sbos-electric/5 px-4 py-1.5 rounded-full border border-sbos-electric/10">
              Full Comparison
            </span>
          </div>
          <h2 className="text-center text-4xl font-heading font-bold text-sbos-navy mb-10">
            What's included in{' '}
            <span className="font-accent italic font-normal text-sbos-royal">each plan.</span>
          </h2>
          <div className="overflow-x-auto rounded-3xl border border-sbos-electric/10 shadow-xl shadow-sbos-navy/5">
            <table ref={tableRef} className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-sbos-cloud">
                  <th className="text-left px-6 py-4 font-heading font-bold text-sbos-navy text-base w-2/5">Feature</th>
                  <th className="px-4 py-4 text-center font-body text-sbos-slate font-semibold">Starter<br/><span className="text-xs font-mono text-sbos-slate/60">$0</span></th>
                  <th className="px-4 py-4 text-center">
                    <span className="inline-block bg-sbos-royal text-white text-xs font-mono font-semibold px-3 py-1 rounded-full">Operator</span>
                    <br/><span className="text-xs font-mono text-sbos-slate/60">$150/mo</span>
                  </th>
                  <th className="px-4 py-4 text-center font-body text-sbos-slate font-semibold">Executive<br/><span className="text-xs font-mono text-sbos-slate/60">$550/mo</span></th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => (
                  <tr key={row.label} className={`border-t border-sbos-electric/8 ${i % 2 === 0 ? 'bg-white' : 'bg-sbos-cloud/40'}`}>
                    <td className="px-6 py-4 font-body text-sbos-navy font-medium">{row.label}</td>
                    <td className="px-4 py-4 text-center"><Cell value={row.starter} /></td>
                    <td className="px-4 py-4 text-center bg-sbos-electric/[0.03]"><Cell value={row.operator} /></td>
                    <td className="px-4 py-4 text-center"><Cell value={row.executive} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="py-20 bg-sbos-cloud bg-blueprint-grid">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-3">
            <span className="text-xs font-mono font-semibold text-sbos-electric uppercase tracking-widest bg-sbos-electric/5 px-4 py-1.5 rounded-full border border-sbos-electric/10">
              FAQ
            </span>
          </div>
          <h2 className="text-center text-4xl font-heading font-bold text-sbos-navy mb-10">
            Questions about{' '}
            <span className="font-accent italic font-normal text-sbos-royal">plans & pricing.</span>
          </h2>
          <div className="space-y-3">
            {FAQS.map(item => (
              <div key={item.q} className="faq-item"><FaqItem q={item.q} a={item.a} /></div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-sbos-royal rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center">
              <span className="text-xs font-mono font-semibold text-white/70 uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full border border-white/20 mb-5">
                Start Today
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-5">
                Start free.{' '}
                <span className="font-accent italic font-normal text-black">Scale when ready.</span>
              </h2>
              <p className="text-lg text-white/80 font-body mb-8 max-w-lg leading-relaxed">
                Sign up with the free Starter plan today and upgrade to the full operating system whenever it makes sense for your business.
              </p>
              {/* Pulsing button wrapper */}
              <div className="relative inline-flex mb-8">
                <div className="absolute inset-0 rounded-full bg-white/25 animate-ping" style={{ animationDuration: '2.2s', animationDelay: '0s' }} />
                <div className="absolute inset-0 rounded-full bg-white/15 animate-ping" style={{ animationDuration: '2.2s', animationDelay: '0.9s' }} />
                <button
                  onClick={() => router.push('/signup')}
                  className="relative flex items-center gap-2 bg-white hover:bg-sbos-ice text-sbos-navy px-10 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.03] hover:shadow-lg group"
                >
                  Get Started Free <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                {['No credit card', 'Cancel anytime', 'Upgrade when ready'].map(c => (
                  <span key={c} className="flex items-center gap-1.5 text-xs font-mono text-white/70">
                    <CheckCircle2 size={12} className="text-sbos-success" /> {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;

