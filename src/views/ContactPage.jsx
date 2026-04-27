'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, CheckCircle2, Mail, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

// ── Swap this URL for your real Calendly / Cal.com link ─────────────────────
const CALENDAR_URL = 'https://calendly.com/YOUR_LINK_HERE';
// ────────────────────────────────────────────────────────────────────────────

const REASONS = [
  { icon: Calendar, title: 'See the platform live', body: 'Get a walkthrough of every module — financial dashboard, money leak detection, SOP builder, and more.' },
  { icon: Clock,    title: '30 minutes, no pressure', body: 'A focused conversation about your business. If SBOS isn\'t the right fit, we\'ll tell you.' },
  { icon: CheckCircle2, title: 'Talk directly to Judith', body: 'Not a sales rep. The founder. She built this for owners like you and wants to understand your situation.' },
];

const ContactPage = () => {
  const heroRef  = useRef(null);
  const bodyRef  = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const id = setTimeout(() => ScrollTrigger.refresh(), 150);
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current.querySelectorAll('.anim'), {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out', delay: 0.2,
      });
      gsap.from(bodyRef.current.querySelectorAll('.card'), {
        scrollTrigger: { trigger: bodyRef.current, start: 'top 85%' },
        y: 40, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out', immediateRender: false,
      });
    });
    return () => { clearTimeout(id); ctx.revert(); };
  }, []);

  return (
    <div className="min-h-screen bg-sbos-cloud overflow-x-hidden">
      <div className="noise-overlay" />
      <Navbar />

      {/* HERO */}
      <section ref={heroRef} className="relative pt-36 pb-20 bg-sbos-cloud bg-blueprint-grid overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sbos-electric/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <Link href="/" className="anim inline-flex items-center gap-2 text-sm font-semibold text-sbos-slate hover:text-sbos-electric transition-colors mb-10 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to home
          </Link>

          <h1 className="anim text-5xl lg:text-6xl font-heading font-bold text-sbos-navy tracking-tight leading-tight mb-5">
            Let's talk about{' '}
            <span className="font-accent italic font-normal text-sbos-royal">your business.</span>
          </h1>
          <p className="anim text-xl text-sbos-slate font-body leading-relaxed max-w-2xl mx-auto mb-10">
            Book a 30-minute call with Judith. Walk through the platform, ask every question you have, and see if SBOS is the right fit.
          </p>

          {/* Primary CTA */}
          <div className="anim relative inline-flex">
            <div className="absolute inset-0 rounded-full bg-sbos-electric/20 animate-ping" style={{ animationDuration: '2.2s', animationDelay: '0s' }} />
            <div className="absolute inset-0 rounded-full bg-sbos-electric/10 animate-ping" style={{ animationDuration: '2.2s', animationDelay: '0.9s' }} />
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 bg-sbos-royal hover:bg-sbos-electric text-white px-10 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-sbos-electric/25 group"
            >
              <Calendar size={18} />
              Book a Free Call
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <p className="anim text-xs font-mono text-sbos-slate/60 mt-5 uppercase tracking-wider">
            No commitment · 30 minutes · Direct founder access
          </p>
        </div>
      </section>

      {/* WHY BOOK */}
      <section ref={bodyRef} className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-semibold text-sbos-electric uppercase tracking-widest bg-sbos-electric/5 px-4 py-1.5 rounded-full border border-sbos-electric/10">
              What to expect
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REASONS.map(({ icon: Icon, title, body }, i) => {
              const isBlue = i % 2 === 0;
              return (
                <div
                  key={title}
                  className={`card rounded-2xl p-8 transition-all duration-300
                    ${isBlue
                      ? 'bg-sbos-royal text-white shadow-xl shadow-sbos-navy/20 hover:bg-sbos-electric'
                      : 'bg-white border border-sbos-electric/10 hover:border-sbos-electric hover:shadow-lg hover:shadow-sbos-navy/5'
                    }`}
                >
                  <div className={`p-3 rounded-xl w-fit mb-5 ${isBlue ? 'bg-white/15 text-white' : 'bg-sbos-ice text-sbos-royal'}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className={`text-xl font-heading font-bold mb-3 ${isBlue ? 'text-white' : 'text-sbos-navy'}`}>{title}</h3>
                  <p className={`font-body text-sm leading-relaxed ${isBlue ? 'text-white/80' : 'text-sbos-slate'}`}>{body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM — email fallback */}
      <section className="py-20 bg-sbos-cloud bg-blueprint-grid">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold text-sbos-navy mb-4">
            Prefer to reach out directly?
          </h2>
          <p className="text-sbos-slate font-body mb-6 leading-relaxed">
            You can also email us and we'll get back to you within one business day.
          </p>
          <a
            href="mailto:hello@sbos.io"
            className="inline-flex items-center gap-2 text-sbos-royal font-semibold font-body text-lg hover:text-sbos-electric transition-colors group"
          >
            <Mail size={20} />
            hello@sbos.io
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
