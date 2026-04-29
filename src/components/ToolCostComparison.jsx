'use client';
import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, ArrowRight, TrendingDown, RefreshCw } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TOOLS = [
  { name: 'CRM Software', example: 'HubSpot / Salesforce', cost: 100, color: '#e74c3c' },
  { name: 'Email Marketing', example: 'Mailchimp / Klaviyo', cost: 50, color: '#e67e22' },
  { name: 'SOP / Process Tool', example: 'Process Street / Trainual', cost: 80, color: '#f39c12' },
  { name: 'Analytics & Reporting', example: 'Looker / Databox', cost: 60, color: '#9b59b6' },
  { name: 'Social Media Scheduler', example: 'Loomly / Hootsuite', cost: 40, color: '#3498db' },
  { name: 'Business Consultant', example: 'Hourly / Retainer', cost: 2000, color: '#2c3e50' },
];

const TOTAL = TOOLS.reduce((sum, t) => sum + t.cost, 0);

const ToolCostComparison = () => {
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);
  const [displayTotal, setDisplayTotal] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.tcc-head', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      });
      gsap.from('.tcc-tool-row', {
        scrollTrigger: { trigger: '.tcc-table', start: 'top 85%' },
        x: -30, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
        onComplete: () => {
          setAnimated(true);
          // Count up total
          const start = { val: 0 };
          gsap.to(start, {
            val: TOTAL,
            duration: 1.2,
            ease: 'power2.out',
            onUpdate: () => setDisplayTotal(Math.round(start.val)),
          });
        },
      });
      gsap.from('.tcc-sbos-card', {
        scrollTrigger: { trigger: '.tcc-sbos-card', start: 'top 90%' },
        scale: 0.94, opacity: 0, duration: 0.7, ease: 'back.out(1.4)',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-sbos-cloud">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="tcc-head inline-block text-xs font-mono font-semibold text-sbos-electric uppercase tracking-widest bg-sbos-electric/5 px-4 py-1.5 rounded-full border border-sbos-electric/10 mb-5">
            The Real Cost of Doing It Alone
          </span>
          <h2 className="tcc-head text-3xl md:text-4xl font-heading font-bold text-sbos-navy mb-4 leading-tight">
            Stop paying for{' '}
            <span className="font-accent italic font-normal text-sbos-royal">12 tools that don't talk.</span>
          </h2>
          <p className="tcc-head text-sbos-slate font-body text-base max-w-xl mx-auto leading-relaxed">
            Most small businesses spend thousands per month stitching together tools that still leave gaps. SBOS replaces all of it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Left — Tool cost breakdown */}
          <div className="tcc-table bg-white rounded-3xl border border-sbos-electric/10 shadow-lg shadow-sbos-navy/5 overflow-hidden">
            <div className="px-6 py-4 border-b border-sbos-electric/8 bg-sbos-cloud/50">
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-sbos-slate/70">
                What you're paying today
              </p>
            </div>
            <div className="divide-y divide-sbos-electric/6">
              {TOOLS.map((tool) => (
                <div key={tool.name} className="tcc-tool-row flex items-center justify-between px-6 py-4 hover:bg-sbos-ice/30 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: tool.color }}
                    />
                    <div>
                      <p className="text-sm font-heading font-semibold text-sbos-navy leading-tight">{tool.name}</p>
                      <p className="text-xs font-mono text-sbos-slate/60 mt-0.5">{tool.example}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-mono font-bold text-sbos-slate">
                      ${tool.cost.toLocaleString()}<span className="text-sbos-slate/50 font-normal">/mo</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {/* Total row */}
            <div className="px-6 py-5 bg-red-50/60 border-t-2 border-red-200/60 flex items-center justify-between">
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-red-500/80 mb-0.5">Total Monthly Spend</p>
                <p className="text-xs font-mono text-sbos-slate/60">Fragmented. Unconnected. Expensive.</p>
              </div>
              <div className="text-right">
                <span className="text-3xl font-heading font-bold text-red-500 tabular-nums">
                  ${animated ? displayTotal.toLocaleString() : '0'}<span className="text-lg font-mono text-red-400/70">/mo</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right — SBOS comparison */}
          <div className="flex flex-col gap-5">

            {/* VS callout */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-sbos-electric/15" />
              <div className="w-12 h-12 rounded-full bg-sbos-navy flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-xs font-mono font-bold text-white">VS</span>
              </div>
              <div className="flex-1 h-px bg-sbos-electric/15" />
            </div>

            {/* SBOS card */}
            <div className="tcc-sbos-card relative bg-sbos-navy rounded-3xl overflow-hidden shadow-2xl shadow-sbos-navy/30">
              <div className="h-1.5 w-full bg-gradient-to-r from-sbos-royal via-sbos-electric to-sbos-royal" />
              <div className="p-8">
                <div className="inline-flex items-center gap-1.5 bg-sbos-electric/20 border border-sbos-electric/30 text-sbos-electric text-xs font-mono font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
                  <RefreshCw size={10} /> One Platform · Everything Included
                </div>

                <h3 className="text-2xl font-heading font-bold text-white mb-1">SBOS</h3>
                <p className="text-sbos-ice/60 font-body text-sm mb-6">The complete operating system for your business.</p>

                <div className="flex items-end gap-3 mb-6">
                  <div>
                    <p className="text-xs font-mono text-sbos-ice/50 uppercase tracking-wider mb-1">Operator Plan</p>
                    <span className="text-5xl font-heading font-bold text-white tabular-nums leading-none">$150</span>
                    <span className="text-base font-mono text-sbos-ice/60 ml-1">/mo</span>
                  </div>
                  <div className="pb-1 text-sbos-ice/40 text-sm font-mono">or</div>
                  <div>
                    <p className="text-xs font-mono text-sbos-ice/50 uppercase tracking-wider mb-1">Executive Plan</p>
                    <span className="text-5xl font-heading font-bold text-white tabular-nums leading-none">$550</span>
                    <span className="text-base font-mono text-sbos-ice/60 ml-1">/mo</span>
                  </div>
                </div>

                <div className="h-px w-full bg-white/10 mb-6" />

                <ul className="space-y-2.5 mb-8">
                  {[
                    'CRM & Lead Pipeline — built in',
                    'AI Money Leak Detection — built in',
                    'SOP Builder & Team Ops — built in',
                    'Business Health Diagnostic — built in',
                    'Social & Marketing Engine — built in',
                    'Weekly Business Summary — built in',
                    'All new features as they ship — forever',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 size={14} className="text-sbos-electric flex-shrink-0" />
                      <span className="text-sm font-body text-sbos-ice/80">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Savings callout */}
                <div className="bg-sbos-electric/15 border border-sbos-electric/25 rounded-2xl px-5 py-4 flex items-center gap-3 mb-6">
                  <TrendingDown size={22} className="text-sbos-electric flex-shrink-0" />
                  <div>
                    <p className="text-sm font-heading font-bold text-white">
                      Save up to <span className="text-sbos-electric">${(TOTAL - 550).toLocaleString()}/month</span>
                    </p>
                    <p className="text-xs font-mono text-sbos-ice/60 mt-0.5">
                      vs. piecing together individual tools
                    </p>
                  </div>
                </div>

                <a
                  href="/signup"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-sm font-semibold bg-sbos-electric hover:bg-white hover:text-sbos-navy text-white transition-all duration-300 hover:scale-[1.02] group"
                >
                  Get Started with SBOS
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Savings summary below card */}
            <div className="text-center">
              <p className="text-xs font-mono text-sbos-slate/60">
                Prices shown are industry averages. Your actual savings may vary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolCostComparison;
