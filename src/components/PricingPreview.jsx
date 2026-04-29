'use client';
import React from 'react';
import { CheckCircle2, Minus, ArrowRight, Star, RefreshCw } from 'lucide-react';

// Pulled directly from PricingPage.jsx TIERS data
const starterFeatures = [
    { text: 'SOP Builder — create, assign & track procedures', included: true },
    { text: 'Platform preview — explore all modules', included: true },
];

const operatorFeatures = [
    { text: 'SOP Builder — create, assign & track procedures', included: true },
    { text: 'Platform preview — explore all modules', included: true },
    { text: 'AI Money Leak Detection', included: true },
    { text: 'Unified Financial Dashboard', included: true },
    { text: 'Customer & Lead Pipeline', included: true },
    { text: 'Business Health Diagnostic', included: true },
    { text: 'Weekly Business Summary', included: true },
    { text: 'Human advisory & strategy sessions', included: false },
    { text: 'Priority onboarding & founder access', included: false },
];

const PricingPreview = () => {
    return (
        <section className="py-24 bg-sbos-cloud relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sbos-electric/20 to-transparent" />

            <div className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="inline-block text-xs font-mono font-semibold text-sbos-electric uppercase tracking-widest mb-4 bg-sbos-electric/5 px-4 py-1.5 rounded-full border border-sbos-electric/10">
                        Pricing
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-sbos-navy mb-4 leading-tight">
                        Start for free.{' '}
                        <span className="font-accent italic font-normal text-sbos-royal">Scale when ready.</span>
                    </h2>
                    <p className="text-sbos-slate font-body text-base max-w-lg mx-auto leading-relaxed">
                        Start with the SOP Builder at no cost. Upgrade to the full operating system when you're ready to move faster.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

                    {/* Starter Card */}
                    <div style={{ backgroundColor: '#ffffff', border: '1px solid rgba(51,102,255,0.1)' }} className="rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <div className="p-8">
                            <p className="text-xs font-mono font-bold uppercase tracking-widest mb-1" style={{ color: '#5E6B8A' }}>
                                Starter
                            </p>
                            <p className="text-sm font-body mb-5" style={{ color: '#5E6B8A' }}>Get familiar with the system.</p>
                            <div className="flex items-end gap-1 mb-2">
                                <span className="text-5xl font-heading font-bold tabular-nums leading-none" style={{ color: '#1E2478' }}>$0</span>
                                <span className="text-sm font-mono pb-1" style={{ color: '#5E6B8A' }}>/ month</span>
                            </div>
                            <p className="text-sm leading-relaxed mb-6" style={{ color: '#5E6B8A' }}>
                                Access the SOP Builder and explore the full platform at no cost. No credit card required.
                            </p>
                            <div className="h-px w-full mb-6" style={{ backgroundColor: 'rgba(51,102,255,0.08)' }} />
                            <ul className="space-y-3 mb-8">
                                {starterFeatures.map((f, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: '#18C37E' }} />
                                        <span className="text-sm font-body" style={{ color: '#5E6B8A' }}>{f.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="/signup"
                                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.02] group"
                                style={{ backgroundColor: '#EEF3FF', color: '#1E2478', border: '1px solid rgba(51,102,255,0.2)' }}
                                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#3366FF'; e.currentTarget.style.color = '#ffffff'; }}
                                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#EEF3FF'; e.currentTarget.style.color = '#1E2478'; }}
                            >
                                Get Started Free
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Operator Card */}
                    <div style={{ border: '2px solid #3366FF' }} className="rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl relative scale-[1.02]">
                        {/* Top gradient bar */}
                        <div className="h-1.5 w-full bg-gradient-to-r from-sbos-royal via-sbos-electric to-sbos-royal" />
                        <div style={{ backgroundColor: '#ffffff' }} className="p-8">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-1.5 text-sbos-electric text-xs font-mono font-semibold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-2" style={{ backgroundColor: 'rgba(51,102,255,0.08)', border: '1px solid rgba(51,102,255,0.2)' }}>
                                <Star size={10} fill="currentColor" /> Most Popular
                            </div>
                            <p className="text-xs font-mono font-bold uppercase tracking-widest mb-1" style={{ color: '#2C3FB8' }}>
                                Operator
                            </p>
                            <p className="text-sm font-body mb-5" style={{ color: '#5E6B8A' }}>The full operating system.</p>
                            <div className="flex items-end gap-1 mb-2">
                                <span className="text-5xl font-heading font-bold tabular-nums leading-none" style={{ color: '#1E2478' }}>$150</span>
                                <span className="text-sm font-mono pb-1" style={{ color: '#5E6B8A' }}>/ month</span>
                            </div>
                            <p className="text-sm leading-relaxed mb-6" style={{ color: '#5E6B8A' }}>
                                Everything you need to diagnose, track, and execute across your entire business — in one place.
                            </p>
                            <div className="h-px w-full mb-6" style={{ backgroundColor: 'rgba(51,102,255,0.1)' }} />
                            <ul className="space-y-3 mb-8">
                                {operatorFeatures.map((f, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        {f.included
                                            ? <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: '#18C37E' }} />
                                            : <Minus size={16} className="mt-0.5 shrink-0" style={{ color: 'rgba(94,107,138,0.3)' }} />
                                        }
                                        <span className="text-sm font-body" style={{ color: f.included ? '#5E6B8A' : 'rgba(94,107,138,0.4)' }}>{f.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="/signup"
                                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.02] group"
                                style={{ backgroundColor: '#2C3FB8', color: '#ffffff' }}
                                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#3366FF'; }}
                                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#2C3FB8'; }}
                            >
                                Start with Operator
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Executive teaser */}
                <div className="mt-6 rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ backgroundColor: 'rgba(51,102,255,0.04)', border: '1px solid rgba(51,102,255,0.1)' }}>
                    <div>
                        <span className="text-sm font-heading font-bold" style={{ color: '#1E2478' }}>Executive — $550/mo</span>
                        <span className="text-sm font-body ml-2" style={{ color: '#5E6B8A' }}>All Operator features + dedicated human advisory layer.</span>
                    </div>
                    <a href="/pricing" className="text-sm font-semibold whitespace-nowrap inline-flex items-center gap-1.5 group" style={{ color: '#3366FF' }}>
                        See full plan <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Ever-Evolving callout */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full px-4 py-2" style={{ backgroundColor: 'rgba(51,102,255,0.06)', border: '1px solid rgba(51,102,255,0.15)' }}>
                        <RefreshCw size={12} style={{ color: '#3366FF' }} />
                        <span className="text-xs font-mono font-semibold uppercase tracking-wider" style={{ color: '#3366FF' }}>Continuously Evolving Platform</span>
                        <span className="hidden sm:inline text-xs font-mono" style={{ color: 'rgba(94,107,138,0.7)' }}>— We ship new features regularly. Operator &amp; Executive members get every update included.</span>
                    </div>
                </div>

                {/* Bottom note */}
                <p className="text-center text-xs font-mono mt-4" style={{ color: 'rgba(94,107,138,0.6)' }}>
                    All plans include access to the SBOS platform · Cancel anytime ·{' '}
                    <a href="/pricing" className="hover:underline" style={{ color: '#3366FF' }}>View full pricing comparison →</a>
                </p>
            </div>
        </section>
    );
};

export default PricingPreview;
