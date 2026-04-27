'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  CheckCircle2, ArrowRight, Building2, Users, BarChart3,
  Zap, Shield, Clock, Star, ArrowLeft, Loader2
} from 'lucide-react';
import gsap from 'gsap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const BENEFITS = [
  { icon: BarChart3, text: 'Unified financial dashboard — P&L, cash flow, KPIs in one view' },
  { icon: Zap,       text: 'AI-powered money leak detection — find what\'s quietly costing you' },
  { icon: Users,     text: 'Customer & lead pipeline built for service businesses' },
  { icon: Building2, text: 'SOP builder — turn tribal knowledge into repeatable processes' },
  { icon: Shield,    text: 'Bank-grade encryption, SOC 2 aligned, GDPR ready' },
  { icon: Clock,     text: 'Up and running in under 10 minutes — no IT needed' },
];

const PROOF_CHIPS = [
  '12+ hrs saved / week',
  '$890 avg leak found',
  'No credit card required',
  'Cancel anytime',
];

const BUSINESS_TYPES = [
  'Cleaning / Janitorial',
  'Landscaping / Lawn Care',
  'HVAC / Plumbing / Electric',
  'Salon / Barbershop / Spa',
  'Catering / Food Service',
  'Fitness / Personal Training',
  'Consulting / Coaching',
  'Home Services / Handyman',
  'Other',
];

const TEAM_SIZES = ['Just me', '2–5', '6–15', '16–50', '50+'];

// ---------------------------------------------------------------------------
// SignupPage
// ---------------------------------------------------------------------------
const SignupPage = () => {
  const router = useRouter();

  // Form state
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    businessName: '',
    businessType: '',
    teamSize: '',
    biggestChallenge: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  // Refs for GSAP
  const heroRef  = useRef(null);
  const formRef  = useRef(null);
  const leftRef  = useRef(null);

  // ── GSAP entrance ──────────────────────────────────────────────────────────
  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      // Left column
      gsap.from(leftRef.current.querySelectorAll('.anim-left'), {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.2,
      });
      // Right form card
      gsap.from(formRef.current, {
        y: 50, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.35,
      });
    });
    return () => ctx.revert();
  }, []);

  // ── Handlers ───────────────────────────────────────────────────────────────
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = 'First name is required';
    if (!form.lastName.trim())  e.lastName  = 'Last name is required';
    if (!form.email.trim())     e.email     = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address';
    if (!form.businessName.trim()) e.businessName = 'Business name is required';
    if (!form.businessType) e.businessType = 'Select your business type';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('submitting');
    // Simulate API call — replace with real endpoint when ready
    await new Promise(r => setTimeout(r, 1800));
    setStatus('success');
  };

  // ── Input class helper ─────────────────────────────────────────────────────
  const inputCls = (field) =>
    `w-full bg-white border rounded-xl px-4 py-3 text-sbos-navy text-sm font-body
     focus:outline-none focus:ring-2 transition-all duration-200
     ${errors[field]
       ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20'
       : 'border-sbos-slate/20 focus:border-sbos-electric focus:ring-sbos-electric/20'
     }`;

  const labelCls = 'block text-sm font-semibold text-sbos-navy font-body mb-1.5';

  // ── Success screen ─────────────────────────────────────────────────────────
  if (status === 'success') {
    return (
      <div className="min-h-screen bg-sbos-cloud flex flex-col">
        <div className="noise-overlay" />
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-6 py-32">
          <div className="max-w-lg w-full text-center">
            {/* Success icon */}
            <div className="mx-auto mb-8 w-20 h-20 rounded-full bg-sbos-success/10 border border-sbos-success/20 flex items-center justify-center">
              <CheckCircle2 size={40} className="text-sbos-success" />
            </div>
            <span className="inline-block text-xs font-mono font-semibold text-sbos-electric uppercase tracking-widest bg-sbos-electric/5 px-4 py-1.5 rounded-full border border-sbos-electric/10 mb-6">
              You&apos;re on the list
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-sbos-navy mb-4">
              Welcome to SBOS.{' '}
              <span className="font-accent italic font-normal text-sbos-royal">
                Let&apos;s get to work.
              </span>
            </h1>
            <p className="text-lg text-sbos-slate font-body leading-relaxed mb-10">
              We&apos;ve received your application. Expect an onboarding email within 24 hours with your access link and first steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push('/')}
                className="flex items-center justify-center gap-2 bg-sbos-royal hover:bg-sbos-electric text-white px-8 py-3.5 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:-translate-y-1 hover:shadow-sbos-electric/25"
              >
                Back to Home <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // ── Main page ──────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-sbos-cloud overflow-x-hidden">
      <div className="noise-overlay" />
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* Back link */}
          <Link href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sbos-slate hover:text-sbos-electric transition-colors duration-200 mb-12 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
            Back to home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* ── LEFT COLUMN ─────────────────────────────────────────── */}
            <div ref={leftRef} className="lg:sticky lg:top-32">

              {/* Eyebrow */}
              <div className="anim-left inline-flex items-center gap-2 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sbos-electric opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sbos-electric" />
                </span>
                <span className="text-xs font-mono font-semibold text-sbos-electric uppercase tracking-widest bg-sbos-electric/5 px-4 py-1.5 rounded-full border border-sbos-electric/10">
                  Early Access — Now Open
                </span>
              </div>

              {/* Heading */}
              <h1 className="anim-left text-5xl lg:text-6xl font-heading font-bold text-sbos-navy tracking-tight leading-tight mb-6">
                Run your business{' '}
                <span className="font-accent italic font-normal text-sbos-royal">
                  with total clarity.
                </span>
              </h1>

              {/* Subhead */}
              <p className="anim-left text-lg text-sbos-slate font-body leading-relaxed mb-10 max-w-lg">
                SBOS is the operating system built for local service businesses — unifying your finances, operations, and growth into one intelligent dashboard.
              </p>

              {/* Benefits list */}
              <ul className="anim-left space-y-4 mb-10">
                {BENEFITS.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-sbos-ice flex items-center justify-center mt-0.5">
                      <Icon size={16} className="text-sbos-royal" />
                    </div>
                    <span className="text-sm text-sbos-slate font-body leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>

              {/* Proof chips */}
              <div className="anim-left flex flex-wrap gap-2">
                {PROOF_CHIPS.map(chip => (
                  <span
                    key={chip}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-sbos-ice/50 border border-sbos-royal/5 text-xs font-mono text-sbos-slate"
                  >
                    <CheckCircle2 size={12} className="text-sbos-success" />
                    {chip}
                  </span>
                ))}
              </div>

              {/* Social proof mini-bar */}
              <div className="anim-left mt-10 flex items-center gap-3 pt-8 border-t border-sbos-electric/10">
                <div className="flex -space-x-2">
                  {['#2C3FB8','#3366FF','#1E2478'].map((c, i) => (
                    <div
                      key={i}
                      style={{ background: c }}
                      className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center"
                    >
                      <Star size={12} className="text-white fill-white" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-sbos-slate font-body">
                  <span className="font-semibold text-sbos-navy">140+ owners</span> already on the waitlist
                </p>
              </div>
            </div>

            {/* ── RIGHT COLUMN — FORM CARD ─────────────────────────────── */}
            <div
              ref={formRef}
              className="bg-white border border-sbos-electric/10 rounded-3xl shadow-2xl shadow-sbos-navy/8 p-8 md:p-10"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-sbos-navy mb-2">
                  Request Early Access
                </h2>
                <p className="text-sm text-sbos-slate font-body">
                  Tell us a bit about your business — we&apos;ll get you set up fast.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">

                {/* Name row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls} htmlFor="signup-firstName">First Name</label>
                    <input
                      id="signup-firstName"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      placeholder="Jane"
                      value={form.firstName}
                      onChange={handleChange}
                      className={inputCls('firstName')}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-xs text-red-500 font-body">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="signup-lastName">Last Name</label>
                    <input
                      id="signup-lastName"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      placeholder="Smith"
                      value={form.lastName}
                      onChange={handleChange}
                      className={inputCls('lastName')}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-xs text-red-500 font-body">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className={labelCls} htmlFor="signup-email">Work Email</label>
                  <input
                    id="signup-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="jane@yourbusiness.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputCls('email')}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500 font-body">{errors.email}</p>
                  )}
                </div>

                {/* Business name */}
                <div>
                  <label className={labelCls} htmlFor="signup-businessName">Business Name</label>
                  <input
                    id="signup-businessName"
                    name="businessName"
                    type="text"
                    autoComplete="organization"
                    placeholder="Smith Cleaning Co."
                    value={form.businessName}
                    onChange={handleChange}
                    className={inputCls('businessName')}
                  />
                  {errors.businessName && (
                    <p className="mt-1 text-xs text-red-500 font-body">{errors.businessName}</p>
                  )}
                </div>

                {/* Business type */}
                <div>
                  <label className={labelCls} htmlFor="signup-businessType">Business Type</label>
                  <select
                    id="signup-businessType"
                    name="businessType"
                    value={form.businessType}
                    onChange={handleChange}
                    className={inputCls('businessType') + ' cursor-pointer'}
                  >
                    <option value="">Select your industry…</option>
                    {BUSINESS_TYPES.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  {errors.businessType && (
                    <p className="mt-1 text-xs text-red-500 font-body">{errors.businessType}</p>
                  )}
                </div>

                {/* Team size */}
                <div>
                  <label className={labelCls}>Team Size</label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {TEAM_SIZES.map(size => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setForm(prev => ({ ...prev, teamSize: size }))}
                        className={`px-4 py-2 rounded-full text-xs font-semibold font-body border transition-all duration-200
                          ${form.teamSize === size
                            ? 'bg-sbos-ice border-sbos-electric text-sbos-navy shadow-sm'
                            : 'bg-white border-sbos-slate/20 text-sbos-slate hover:border-sbos-royal/40 hover:text-sbos-navy'
                          }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Biggest challenge (optional) */}
                <div>
                  <label className={labelCls} htmlFor="signup-biggestChallenge">
                    Biggest operational challenge{' '}
                    <span className="font-normal text-sbos-slate">(optional)</span>
                  </label>
                  <textarea
                    id="signup-biggestChallenge"
                    name="biggestChallenge"
                    rows={3}
                    placeholder="e.g. I can never tell where my money is going each month…"
                    value={form.biggestChallenge}
                    onChange={handleChange}
                    className={inputCls('biggestChallenge') + ' resize-none'}
                  />
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-sbos-electric/10" />

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  id="signup-submit-btn"
                  className="w-full flex items-center justify-center gap-2 bg-sbos-royal hover:bg-sbos-electric text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.02] hover:shadow-xl hover:-translate-y-0.5 hover:shadow-sbos-electric/25 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100 disabled:translate-y-0"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Submitting…
                    </>
                  ) : (
                    <>
                      Request Early Access
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {/* Privacy note */}
                <p className="text-center text-xs text-sbos-slate font-body leading-relaxed">
                  By signing up you agree to our{' '}
                  <a href="/privacy" className="text-sbos-electric hover:underline">Privacy Policy</a>
                  {' '}and{' '}
                  <a href="/terms" className="text-sbos-electric hover:underline">Terms of Service</a>.
                  We never sell your data.
                </p>
              </form>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SignupPage;
