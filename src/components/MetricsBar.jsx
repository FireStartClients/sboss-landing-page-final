'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const beforeRows = [
    { label: 'Revenue flowing through disconnected tools', value: '$3,000,000/yr', highlight: false },
    { label: 'Estimated annual operational waste', value: '$285,000/yr', highlight: true },
    { label: 'Hours lost per week to manual work', value: '22 hrs/wk', highlight: true },
    { label: 'Days to get a clear business snapshot', value: '3–5 days', highlight: true },
    { label: 'Leads lost due to no follow-up system', value: '~30%', highlight: true },
];

const afterRows = [
    { label: 'Revenue — same business, new clarity', value: '$3,000,000/yr', highlight: false },
    { label: 'Annual waste recovered after leak scan', value: '$237,000/yr', highlight: true },
    { label: 'Hours saved per week with automation', value: '12+ hrs/wk', highlight: true },
    { label: 'Time to full operational snapshot', value: '< 10 min', highlight: true },
    { label: 'Lead follow-up automated, no slippage', value: '0% missed', highlight: true },
];

const MetricsBar = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.metrics-header', {
                scrollTrigger: { trigger: sectionRef.current, start: 'top 88%' },
                y: 24, opacity: 0, duration: 0.7, ease: 'power3.out',
            });
            gsap.from('.metrics-panel', {
                scrollTrigger: { trigger: '.metrics-grid', start: 'top 88%' },
                y: 30, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-sbos-cloud relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sbos-electric/20 to-transparent" />

            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="metrics-header text-center mb-12">
                    <span className="inline-block text-xs font-mono font-semibold text-sbos-electric uppercase tracking-widest mb-4 bg-sbos-electric/5 px-4 py-1.5 rounded-full border border-sbos-electric/10">
                        The Real Cost of No System
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-sbos-navy mb-4 leading-tight">
                        What a $3M business will look like{' '}
                        <span className="font-accent italic font-normal text-sbos-royal">before and after SBOS</span>
                    </h2>
                    <p className="text-sbos-slate font-body text-base max-w-xl mx-auto leading-relaxed">
                        The business doesn't change. The clarity does. Here's what operational visibility actually unlocks at scale.
                    </p>
                </div>

                {/* Before / After Grid */}
                <div className="metrics-grid grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* BEFORE Panel */}
                    <div className="metrics-panel rounded-3xl bg-white border border-red-100 shadow-lg shadow-sbos-navy/5 overflow-hidden">
                        {/* Panel header */}
                        <div className="flex items-center gap-3 px-7 py-5 bg-red-50/60 border-b border-red-100">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-500">
                                Without SBOS — Today
                            </span>
                        </div>
                        {/* Rows */}
                        <div className="divide-y divide-sbos-slate/5">
                            {beforeRows.map((row, idx) => (
                                <div key={idx} className="flex items-center justify-between gap-4 px-7 py-4">
                                    <div className="flex items-start gap-3 min-w-0">
                                        <XCircle size={16} className={`shrink-0 mt-0.5 ${row.highlight ? 'text-red-400' : 'text-sbos-slate/40'}`} />
                                        <p className="text-sm font-body text-sbos-slate leading-snug">{row.label}</p>
                                    </div>
                                    <span className={`text-sm font-mono font-bold shrink-0 tabular-nums whitespace-nowrap ${row.highlight ? 'text-red-500' : 'text-sbos-navy'}`}>
                                        {row.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                        {/* Footer */}
                        <div className="px-7 py-4 bg-red-50/40 border-t border-red-100">
                            <p className="text-xs font-mono text-red-400 uppercase tracking-wide">
                                Est. annual loss to waste + manual work: <strong className="text-red-500">$285,000+</strong>
                            </p>
                        </div>
                    </div>

                    {/* AFTER Panel */}
                    <div className="metrics-panel rounded-3xl bg-sbos-navy border border-sbos-electric/20 shadow-xl shadow-sbos-navy/20 overflow-hidden">
                        {/* Panel header */}
                        <div className="flex items-center gap-3 px-7 py-5 bg-sbos-electric/10 border-b border-sbos-electric/20">
                            <div className="w-2.5 h-2.5 rounded-full bg-sbos-electric animate-pulse" />
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-sbos-electric">
                                With SBOS — Potential Outcome
                            </span>
                        </div>
                        {/* Rows */}
                        <div className="divide-y divide-white/5">
                            {afterRows.map((row, idx) => (
                                <div key={idx} className="flex items-center justify-between gap-4 px-7 py-4">
                                    <div className="flex items-start gap-3 min-w-0">
                                        <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${row.highlight ? 'text-sbos-success' : 'text-white/30'}`} />
                                        <p className="text-sm font-body text-sbos-ice/70 leading-snug">{row.label}</p>
                                    </div>
                                    <span className={`text-sm font-mono font-bold shrink-0 tabular-nums whitespace-nowrap ${row.highlight ? 'text-sbos-success' : 'text-white'}`}>
                                        {row.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                        {/* Footer */}
                        <div className="px-7 py-4 bg-sbos-electric/10 border-t border-sbos-electric/20">
                            <p className="text-xs font-mono text-sbos-success uppercase tracking-wide">
                                Potential annual recovery: <strong>$237,000+</strong> — same revenue, better margins
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom disclaimer + CTA */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs font-mono text-sbos-slate/50 max-w-md leading-relaxed">
                        * Figures are illustrative projections based on typical findings from SBOS diagnostics. Actual results vary by business.
                    </p>
                    <a
                        href="https://app.sbos.tech"
                       
                       
                        className="inline-flex items-center gap-2 bg-sbos-royal hover:bg-sbos-electric text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-sbos-electric/25 shrink-0 group"
                    >
                        Run Your Diagnostic
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MetricsBar;
