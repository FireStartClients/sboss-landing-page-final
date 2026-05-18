'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const statusStyles = {
    Live:         'bg-emerald-50 text-emerald-700 border-emerald-200',
    Beta:         'bg-blue-50 text-blue-700 border-blue-200',
    'Coming Soon':'bg-amber-50 text-amber-700 border-amber-200',
};

const entries = [
    {
        version: 'v1.4',
        date: '2026-04-28',
        status: 'Live',
        title: 'Customer & Lead Pipeline + Automated Follow-Up',
        description: 'The full Customer & Lead Pipeline module is now live on the Operator plan. Track every lead by stage, set automated follow-up sequences, and see conversion rate data by source.',
        items: [
            'Kanban-style lead pipeline with drag-to-move stage updates',
            'Automated follow-up sequence builder (email + SMS templates)',
            'Conversion rate analytics by lead source and stage',
            'At-risk client flags for accounts without recent activity',
        ],
    },
    {
        version: 'v1.3',
        date: '2026-04-14',
        status: 'Live',
        title: 'AI Money Leak Detection — Integration Expansion',
        description: 'Money Leak Detection now connects directly to QuickBooks Online, Stripe, and Calendly. Previously required manual input — now runs automatically on your live data.',
        items: [
            'QuickBooks Online integration for subscription and expense scanning',
            'Stripe integration for revenue and refund pattern detection',
            'Calendly integration for no-show and cancellation loss tracking',
            'Consolidated monthly waste estimate with line-item breakdown',
        ],
    },
    {
        version: 'v1.2',
        date: '2026-03-31',
        status: 'Live',
        title: 'Growth Roadmap (30/60/90) — Phase Tracking',
        description: 'The Growth Roadmap module now includes in-platform progress tracking. Mark milestones complete, see your phase completion percentage, and get flagged when a 30-day item is overdue.',
        items: [
            'In-platform milestone tracking per phase (30/60/90)',
            'Overdue milestone alerts with recommended next actions',
            'Roadmap PDF export for team sharing',
            'Phase completion percentage dashboard widget',
        ],
    },
    {
        version: 'v1.1',
        date: '2026-03-17',
        status: 'Live',
        title: 'SOP Builder — Team Assignment & Completion Tracking',
        description: 'SOP Builder expanded with team assignment and completion tracking. Assign any SOP to specific team members, set due dates, and track completion status in real time.',
        items: [
            'Role-based SOP assignment to named team members',
            'Completion status tracking per SOP per team member',
            'SOP checklist view for step-by-step task execution',
            'Available on the free Starter plan — no upgrade required',
        ],
    },
    {
        version: 'v1.0',
        date: '2026-03-03',
        status: 'Live',
        title: 'SBOS Platform Launch',
        description: 'SBOS is live. The core platform launches with the Business Health Diagnostic, SOP Builder, and platform previews for all five modules.',
        items: [
            'Business Health Diagnostic with scored output across 5 dimensions',
            'SOP Builder with document creation and checklist generation',
            'Platform previews for Money Leak, Roadmap, and Pipeline modules',
            'Free Starter plan with no credit card required',
            'Operator plan ($150/mo) with full module access',
        ],
    },
    {
        version: 'v1.5',
        date: '2026-05-12',
        status: 'Coming Soon',
        title: 'Executive Advisory Layer',
        description: 'The Executive plan\'s human advisory layer is rolling out in phases. Selected Executive plan members will receive their first human-reviewed Weekly Business Summary and advisory session booking.',
        items: [
            'Human-reviewed Weekly Business Summary with strategic annotations',
            'Advisory session booking via Calendly (dedicated SBOS advisors)',
            'Direct founder access for Executive plan members',
            'Priority onboarding for businesses joining the Executive waitlist',
        ],
    },
    {
        version: 'v1.5',
        date: '2026-05-26',
        status: 'Coming Soon',
        title: 'Slack & HubSpot Integrations',
        description: 'Native Slack integration for weekly summary delivery and milestone alerts. HubSpot CRM sync for two-way lead pipeline data.',
        items: [
            'Slack: weekly business summary delivered to your team channel',
            'Slack: milestone overdue and money leak alerts',
            'HubSpot: two-way lead and contact sync with SBOS pipeline',
            'HubSpot: deal stage mapping to SBOS pipeline stages',
        ],
    },
];

export default function ChangelogPage() {
    const live = entries.filter(e => e.status === 'Live');
    const upcoming = entries.filter(e => e.status !== 'Live');

    return (
        <div className="min-h-screen bg-sbos-cloud overflow-x-hidden">
            <div className="noise-overlay" />
            <Navbar />

            {/* Hero */}
            <section className="relative pt-36 pb-16 bg-sbos-cloud bg-blueprint-grid overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sbos-electric/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block text-xs font-mono font-semibold text-sbos-electric uppercase tracking-widest mb-6 bg-sbos-electric/5 px-4 py-1.5 rounded-full border border-sbos-electric/10">
                        Changelog & Roadmap
                    </span>
                    <h1 className="text-5xl font-heading font-bold text-sbos-navy tracking-tight leading-tight mb-5">
                        What's new in{' '}
                        <span className="font-accent italic font-normal text-sbos-royal">SBOS.</span>
                    </h1>
                    <p className="text-xl text-sbos-slate font-body leading-relaxed">
                        Every release, update, and what's coming next — in reverse chronological order.
                    </p>
                </div>
            </section>

            {/* Upcoming */}
            <section className="py-16 bg-amber-50/50 border-y border-amber-200/50">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="flex items-center gap-3 mb-10">
                        <Zap size={18} className="text-amber-600" />
                        <h2 className="text-xl font-heading font-bold text-sbos-navy">Coming Soon</h2>
                    </div>
                    <div className="space-y-6">
                        {upcoming.map((entry, idx) => (
                            <article key={idx} className="bg-white rounded-2xl border border-amber-200/60 p-6 shadow-sm">
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <span className="text-xs font-mono font-bold text-sbos-navy/40 uppercase tracking-widest">{entry.version}</span>
                                            <span className={`text-xs font-mono font-semibold px-2 py-0.5 rounded-full border ${statusStyles[entry.status]}`}>{entry.status}</span>
                                        </div>
                                        <h3 className="text-lg font-heading font-bold text-sbos-navy">{entry.title}</h3>
                                    </div>
                                    <span className="shrink-0 flex items-center gap-1 text-xs font-mono text-sbos-slate/50">
                                        <Clock size={11} /> Est. {new Date(entry.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                    </span>
                                </div>
                                <p className="text-sm text-sbos-slate font-body leading-relaxed mb-4">{entry.description}</p>
                                <ul className="space-y-2">
                                    {entry.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-sbos-slate">
                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Live releases */}
            <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="flex items-center gap-3 mb-10">
                        <CheckCircle2 size={18} className="text-sbos-success" />
                        <h2 className="text-xl font-heading font-bold text-sbos-navy">Released</h2>
                    </div>
                    <div className="relative">
                        <div className="absolute left-4 top-0 bottom-0 w-px bg-sbos-electric/10" />
                        <div className="space-y-10">
                            {live.map((entry, idx) => (
                                <article key={idx} className="relative pl-12">
                                    <div className="absolute left-4 -translate-x-1/2 top-1.5 w-3 h-3 rounded-full border-2 border-sbos-electric bg-white" />
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-xs font-mono font-bold text-sbos-electric uppercase tracking-widest">{entry.version}</span>
                                        <span className={`text-xs font-mono font-semibold px-2 py-0.5 rounded-full border ${statusStyles[entry.status]}`}>{entry.status}</span>
                                        <span className="text-xs font-mono text-sbos-slate/50">
                                            {new Date(entry.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-sbos-navy mb-2">{entry.title}</h3>
                                    <p className="text-sm text-sbos-slate font-body leading-relaxed mb-4">{entry.description}</p>
                                    <ul className="space-y-2">
                                        {entry.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-sbos-slate">
                                                <CheckCircle2 size={14} className="text-sbos-success shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-sbos-cloud">
                <div className="max-w-2xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-heading font-bold text-sbos-navy mb-4">
                        Start using SBOS today
                    </h2>
                    <p className="text-sbos-slate font-body mb-8">
                        Free Starter plan. No credit card. Up and running in 10 minutes.
                    </p>
                    <a href="https://app.sbos.tech" className="inline-flex items-center gap-2 bg-sbos-royal hover:bg-sbos-electric text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all duration-300 hover:scale-[1.02] group">
                        Get Started Free <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}
