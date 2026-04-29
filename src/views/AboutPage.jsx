'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowLeft, Target, Lightbulb, Wrench, Quote
} from 'lucide-react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const MISSION_PILLARS = [
  {
    icon: Target,
    title: 'Diagnose with precision.',
    body: 'Most business owners know something is off — they just can\'t see where. SBOS gives you the visibility to pinpoint exactly what\'s holding your business back.',
  },
  {
    icon: Lightbulb,
    title: 'Understand the full picture.',
    body: 'Finances, operations, people, growth — they\'re all connected. SBOS unifies your data so you stop managing in silos and start seeing your business as a system.',
  },
  {
    icon: Wrench,
    title: 'Execute, not just analyze.',
    body: 'Insight without action is just stress. Every SBOS module connects directly to tools and SOPs so the path from "I see the problem" to "I fixed it" is as short as possible.',
  },
];

const VALUES = [
  {
    label: 'Clarity over complexity',
    body: 'Business software shouldn\'t require an MBA to use. We strip away the noise and surface only what matters for your next decision.',
  },
  {
    label: 'Owners first',
    body: 'Every feature starts with the question: does this save an owner time, money, or stress? If the answer is no, it doesn\'t ship.',
  },
  {
    label: 'Action over advice',
    body: 'We are not a dashboard that shows you problems. We are an operating system that helps you solve them — step by step.',
  },
  {
    label: 'Built from experience',
    body: 'SBOS was designed by someone who has lived the chaos of running a service business. Not by consultants. Not by enterprise engineers. By you.',
  },
];

// No SVG avatar needed — using real photo

// ---------------------------------------------------------------------------
// AboutPage
// ---------------------------------------------------------------------------
const AboutPage = () => {


  // Refs
  const heroRef    = useRef(null);
  const missionRef = useRef(null);
  const founderRef = useRef(null);
  const valuesRef  = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Refresh ScrollTrigger after layout settles so position calculations are correct
    const refreshId = setTimeout(() => ScrollTrigger.refresh(), 150);

    const ctx = gsap.context(() => {
      // Hero entrance — no ScrollTrigger, fires on load
      gsap.from(heroRef.current.querySelectorAll('.anim'), {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out', delay: 0.3,
      });

      // Mission headings
      gsap.from(missionRef.current.querySelectorAll('.mission-head'), {
        scrollTrigger: { trigger: missionRef.current, start: 'top 85%' },
        y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        immediateRender: false,
      });

      // Mission pillar cards — each card has its own scrubbed ScrollTrigger
      // so they fly up sequentially as the user scrolls through the section.
      const pillarCards = missionRef.current.querySelectorAll('.pillar-card');
      pillarCards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 90 + i * 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: `top ${92 - i * 6}%`,
              end: `top ${45 - i * 5}%`,
              scrub: 1.8,
            },
          }
        );
      });

      // Founder section
      gsap.from(founderRef.current.querySelectorAll('.founder-anim'), {
        scrollTrigger: { trigger: founderRef.current, start: 'top 85%' },
        y: 40, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
        immediateRender: false,
      });

      // Values grid
      gsap.from(valuesRef.current.querySelectorAll('.value-card'), {
        scrollTrigger: { trigger: valuesRef.current, start: 'top 85%' },
        y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        immediateRender: false,
      });
    });

    return () => {
      clearTimeout(refreshId);
      ctx.revert();
    };
  }, []);

  return (
    <div className="min-h-screen bg-sbos-cloud overflow-x-hidden">
      <div className="noise-overlay" />
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative pt-36 pb-24 bg-sbos-cloud overflow-hidden">
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sbos-electric/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Link href="/"
            className="anim inline-flex items-center gap-2 text-sm font-semibold text-sbos-slate hover:text-sbos-electric transition-colors duration-200 mb-10 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
            Back to home
          </Link>

          <h1 className="anim text-5xl lg:text-6xl font-heading font-bold text-sbos-navy tracking-tight leading-tight mb-6 max-w-3xl">
            Built by an owner,{' '}
            <span className="font-accent italic font-normal text-sbos-royal">
              for every owner.
            </span>
          </h1>

          <p className="anim text-xl text-sbos-slate font-body leading-relaxed max-w-2xl">
            SBOS didn't come out of a venture-backed startup lab. It came from years of running a real service business — seeing what breaks, what costs money invisibly, and what it actually takes to grow with intention.
          </p>
        </div>
      </section>

      {/* ── MISSION — matches landing page stripe background ── */}
      <section ref={missionRef} className="relative bg-sbos-cloud bg-blueprint-grid py-24 overflow-hidden">
        {/* Same radial glow as landing page hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sbos-electric/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* Eyebrow */}
          <div className="mission-head text-center mb-4">
            <span className="text-xs font-mono font-semibold text-sbos-electric uppercase tracking-widest bg-sbos-electric/5 px-4 py-1.5 rounded-full border border-sbos-electric/10">
              Why SBOS Exists
            </span>
          </div>

          <h2 className="mission-head text-center text-4xl md:text-5xl font-heading font-bold text-sbos-navy mb-6">
            Analysis is step one.{' '}
            <span className="font-accent italic font-normal text-sbos-royal">
              Execution is the mission.
            </span>
          </h2>

          <p className="mission-head text-center text-lg text-sbos-slate font-body leading-relaxed max-w-2xl mx-auto mb-16">
            Too many tools show you what&apos;s wrong and leave you there. SBOS was built to close that gap — from diagnosis to clarity to action, in one place.
          </p>

          {/* Pillars — alternating blue / white / blue */}
          <div className="pillar-grid grid grid-cols-1 md:grid-cols-3 gap-6">
            {MISSION_PILLARS.map(({ icon: Icon, title, body }, i) => {
              const isBlue = i % 2 === 0;
              return (
                <div
                  key={title}
                  className={`pillar-card rounded-2xl p-8 transition-all duration-300
                    ${isBlue
                      ? 'bg-sbos-royal border border-sbos-royal hover:bg-sbos-electric hover:border-sbos-electric shadow-xl shadow-sbos-navy/20'
                      : 'bg-white border border-sbos-electric/10 hover:border-sbos-electric hover:shadow-lg hover:shadow-sbos-navy/5'
                    }`}
                >
                  <div className={`p-3 rounded-xl w-fit mb-5 ${isBlue ? 'bg-white/15 text-white' : 'bg-sbos-ice text-sbos-royal'}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className={`text-xl font-heading font-bold mb-3 ${isBlue ? 'text-white' : 'text-sbos-navy'}`}>
                    {title}
                  </h3>
                  <p className={`font-body text-sm leading-relaxed ${isBlue ? 'text-white/80' : 'text-sbos-slate'}`}>
                    {body}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── FOUNDER ───────────────────────────────────────────────────────── */}
      <section ref={founderRef} className="py-24 bg-sbos-cloud">
        <div className="max-w-5xl mx-auto px-6">

          <div className="founder-anim text-center mb-16">
            <span className="text-xs font-mono font-semibold text-sbos-electric uppercase tracking-widest bg-sbos-electric/5 px-4 py-1.5 rounded-full border border-sbos-electric/10">
              Meet the Founder
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Photo */}
            <div className="founder-anim flex justify-center lg:justify-start">
              <div className="relative w-72 h-72 lg:w-80 lg:h-80">
                {/* Sonar pulse rings — staggered animate-ping radiating outward */}
                <div className="absolute inset-0 rounded-full border-2 border-sbos-electric/60 animate-ping" style={{ animationDuration: '2.4s', animationDelay: '0s' }} />
                <div className="absolute inset-0 rounded-full border-2 border-sbos-electric/40 animate-ping" style={{ animationDuration: '2.4s', animationDelay: '0.8s' }} />
                <div className="absolute inset-0 rounded-full border-2 border-sbos-electric/20 animate-ping" style={{ animationDuration: '2.4s', animationDelay: '1.6s' }} />
                {/* Avatar */}
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl shadow-sbos-navy/20 border-4 border-white">
                  <img
                    src="https://xjixjvhsbmxpbpxhkmms.supabase.co/storage/v1/object/public/assets/team/judith-jacques.jpg"
                    alt="Judith Jacques — Founder & CEO, SBOS"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-white border border-sbos-electric/20 rounded-2xl px-4 py-3 shadow-xl shadow-sbos-navy/10 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sbos-success animate-pulse" />
                  <span className="text-xs font-mono font-semibold text-sbos-navy uppercase tracking-wider">Founder & CEO</span>
                </div>
              </div>
            </div>

            {/* Story */}
            <div>
              <div className="founder-anim flex items-center gap-3 mb-2">
                <Quote size={28} className="text-sbos-electric/40" />
              </div>

              <h2 className="founder-anim text-4xl font-heading font-bold text-sbos-navy mb-2">
                Judith Jacques
              </h2>
              <p className="founder-anim text-sm font-mono text-sbos-electric uppercase tracking-widest mb-6">
                Founder & CEO, SBOS
              </p>

              <div className="founder-anim space-y-4 text-sbos-slate font-body text-base leading-relaxed">

                <p>
                  "I could see money leaking. I could feel the inefficiency. But every tool I tried showed me charts and left me to figure out the rest myself. I needed something that didn't just analyze — it had to help me <em>execute</em>."
                </p>
                <p>
                  That frustration became the founding insight behind SBOS. Not another dashboard. Not another report. An operating system that meets business owners exactly where they are — and walks them to where they need to be.
                </p>
                <p>
                  Judith's mission is simple: every small business owner deserves the same operational clarity that enterprise companies take for granted. And they deserve it without hiring a team of consultants to get there.
                </p>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────────────────────── */}
      <section ref={valuesRef} className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-4">
            <span className="text-xs font-mono font-semibold text-sbos-electric uppercase tracking-widest bg-sbos-electric/5 px-4 py-1.5 rounded-full border border-sbos-electric/10">
              What We Stand For
            </span>
          </div>

          <h2 className="text-center text-4xl md:text-5xl font-heading font-bold text-sbos-navy mb-6">
            Principles we{' '}
            <span className="font-accent italic font-normal text-sbos-royal">
              refuse to compromise.
            </span>
          </h2>

          <p className="text-center text-lg text-sbos-slate font-body leading-relaxed max-w-xl mx-auto mb-16">
            These aren't wall posters. They're the decisions that shape every feature we build and every business we serve.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map(({ label, body }, i) => (
              <div
                key={label}
                className="value-card group bg-white border border-sbos-electric/10 rounded-2xl p-8 hover:border-sbos-electric hover:shadow-lg hover:shadow-sbos-navy/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sbos-electric flex items-center justify-center text-white text-xs font-mono font-bold">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-sbos-navy mb-3">{label}</h3>
                    <p className="text-sbos-slate font-body text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── DEVELOPMENT PARTNER ─────────────────────────────────────────────── */}
      <section className="py-20 bg-sbos-navy relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-sbos-electric/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">

          <div className="text-center mb-12">
            <span className="inline-block text-xs font-mono font-semibold text-sbos-electric uppercase tracking-widest bg-sbos-electric/10 border border-sbos-electric/20 px-4 py-1.5 rounded-full mb-6">
              Engineering Partner
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-5 leading-tight">
              Built and maintained by a{' '}
              <span className="font-accent italic font-normal text-sbos-electric">premium development team.</span>
            </h2>
            <p className="text-sbos-ice/70 font-body text-base max-w-2xl mx-auto leading-relaxed">
              SBOS is engineered and continuously improved by <span className="text-white font-semibold">FireStart</span> — an AI automation and development agency specializing in building intelligent business platforms. Their expertise ensures the platform stays ahead of what small businesses need, not just what technology can do today.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { label: 'AI & Automation', body: 'Every intelligent feature in SBOS — from diagnostics to money leak detection — is built on production-grade AI architecture.' },
              { label: 'Continuous Delivery', body: 'The platform ships new features regularly. Operator and Executive members receive every improvement as it\'s released, at no additional cost.' },
              { label: 'Enterprise-Grade Quality', body: 'Built with the same engineering standards used for enterprise software — applied specifically to the needs of local service businesses.' },
            ].map(({ label, body }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-sbos-electric/30 transition-all duration-300">
                <h3 className="text-sm font-mono font-bold text-sbos-electric uppercase tracking-wider mb-3">{label}</h3>
                <p className="text-sbos-ice/70 font-body text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-7 py-4">
              <div className="w-2 h-2 rounded-full bg-sbos-success animate-pulse" />
              <span className="text-sm font-mono text-sbos-ice/80">
                Actively developed — new features shipping continuously
              </span>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
