'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Activity, AlertTriangle, TrendingUp, FileText, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const modules = [
    {
        id: 'diagnostic', icon: Activity, name: 'Business Health Diagnostic', color: '#3366FF',
        tagline: 'Know exactly where you stand.',
        description: 'Answer 10 structured questions about your operations, team, revenue, and tools. In under 10 minutes, you get a scored operational health snapshot with your top 3 priority fixes ranked by impact.',
        outcomes: ['Operational Health Score (0–100)', 'Risk categorisation across 5 dimensions', 'Top 3 priority fixes with rationale', 'Benchmark vs similar-stage businesses'],
        who: 'Any owner who\'s been running on gut feel and wants an honest, data-backed baseline.',
    },
    {
        id: 'money-leak', icon: AlertTriangle, name: 'AI Money Leak Detection', color: '#18C37E',
        tagline: 'Find the margin you didn\'t know you were losing.',
        description: 'SBOS connects to QuickBooks, Stripe, and more — then scans for duplicated subscriptions, manual data entry waste, and tool overlap. Most businesses at $1M–$3M find 10–20% of monthly margin is recoverable.',
        outcomes: ['Total estimated monthly waste', 'Duplication and overlap flags', 'Cancellation / consolidation recommendations', 'Projected annual savings'],
        who: 'Businesses using 5+ SaaS tools who suspect they\'re overpaying but haven\'t had time to audit.',
    },
    {
        id: 'roadmap', icon: TrendingUp, name: 'Growth Roadmap (30/60/90)', color: '#7C3AED',
        tagline: 'From scattered goals to a sequenced execution plan.',
        description: 'Based on your diagnostic results and 90-day objective, SBOS generates a phased growth roadmap. 30-day quick wins. 60-day system builds. 90-day milestones. Structured around your actual constraints.',
        outcomes: ['Personalised 30-day quick-win list', '60-day system-build priorities', '90-day scaling milestone targets', 'In-platform progress tracking'],
        who: 'Owners who know what they want to achieve but need a structured, prioritised path to get there.',
    },
    {
        id: 'sop', icon: FileText, name: 'SOP Builder', color: '#F59E0B',
        tagline: 'Turn tribal knowledge into transferable systems.',
        description: 'Create, assign, and track Standard Operating Procedures for any workflow — from client onboarding to invoice generation. SOPs live in SBOS, linked to team members and trackable by completion.',
        outcomes: ['Formatted SOPs with step-by-step checklists', 'Role-based assignment to team members', 'Completion tracking per SOP', 'Available free — no credit card required'],
        who: 'Any business where processes live in someone\'s head instead of a system your whole team can follow.',
    },
    {
        id: 'pipeline', icon: Users, name: 'Customer & Lead Pipeline', color: '#EC4899',
        tagline: 'No lead goes cold. No client falls through the cracks.',
        description: 'Track every lead and client from first contact through closed deal and retention. Built-in follow-up automation ensures consistent outreach without manual effort.',
        outcomes: ['Visual pipeline by stage', 'Automated follow-up sequences', 'Conversion rate by source and stage', 'Client retention flags for at-risk accounts'],
        who: 'Service businesses where follow-up is manual, inconsistent, or dependent on one person\'s memory.',
    },
];

export default function FeaturesPage() {
    return (
        <div className="min-h-screen bg-sbos-cloud overflow-x-hidden">
            <div className="noise-overlay" />
            <Navbar />
            <section className="relative pt-36 pb-20 bg-sbos-cloud bg-blueprint-grid overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sbos-electric/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block text-xs font-mono font-semibold text-sbos-electric uppercase tracking-widest mb-6 bg-sbos-electric/5 px-4 py-1.5 rounded-full border border-sbos-electric/10">Platform Features</span>
                    <h1 className="text-5xl lg:text-6xl font-heading font-bold text-sbos-navy tracking-tight leading-tight mb-5">
                        Five modules. <span className="font-accent italic font-normal text-sbos-royal">One operating system.</span>
                    </h1>
                    <p className="text-xl text-sbos-slate font-body leading-relaxed max-w-2xl mx-auto mb-10">
                        Every module in SBOS is connected. Your diagnostic feeds your roadmap. Your roadmap informs your SOPs. Your pipeline integrates with your follow-up.
                    </p>
                    <a href="https://app.sbos.tech" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-sbos-royal hover:bg-sbos-electric text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all duration-300 hover:scale-[1.02] group">
                        Get Started Free <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </section>

            {modules.map((mod, idx) => {
                const Icon = mod.icon;
                const isEven = idx % 2 === 0;
                return (
                    <section key={mod.id} id={mod.id} className={`py-24 ${isEven ? 'bg-white' : 'bg-sbos-cloud'}`}>
                        <div className="max-w-5xl mx-auto px-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <div className={isEven ? '' : 'lg:order-2'}>
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-6" style={{ backgroundColor: `${mod.color}15` }}>
                                        <Icon size={24} style={{ color: mod.color }} />
                                    </div>
                                    <span className="text-xs font-mono font-semibold uppercase tracking-widest mb-3 block" style={{ color: mod.color }}>Module {String(idx + 1).padStart(2, '0')}</span>
                                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-sbos-navy mb-3 leading-tight">{mod.name}</h2>
                                    <p className="text-lg font-body font-semibold text-sbos-royal mb-4">{mod.tagline}</p>
                                    <p className="text-sbos-slate font-body leading-relaxed mb-8">{mod.description}</p>
                                    <h3 className="text-xs font-mono font-bold text-sbos-navy uppercase tracking-widest mb-4">What you get</h3>
                                    <ul className="space-y-3 mb-8">
                                        {mod.outcomes.map((o, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: mod.color }} />
                                                <span className="text-sm font-body text-sbos-slate">{o}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-sbos-cloud rounded-2xl px-5 py-4 border border-sbos-electric/10">
                                        <p className="text-xs font-mono font-bold text-sbos-navy uppercase tracking-widest mb-1">Best for</p>
                                        <p className="text-sm font-body text-sbos-slate">{mod.who}</p>
                                    </div>
                                </div>
                                <div className={`${isEven ? '' : 'lg:order-1'} flex items-center justify-center`}>
                                    <div className="w-full max-w-sm aspect-square rounded-3xl border border-sbos-electric/10 shadow-2xl shadow-sbos-navy/8 flex flex-col items-center justify-center p-10 relative overflow-hidden" style={{ backgroundColor: `${mod.color}08` }}>
                                        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, transparent, ${mod.color}, transparent)` }} />
                                        <div className="w-20 h-20 rounded-3xl flex items-center justify-center mb-6 shadow-lg" style={{ backgroundColor: `${mod.color}20` }}>
                                            <Icon size={36} style={{ color: mod.color }} />
                                        </div>
                                        <p className="text-center font-heading font-bold text-sbos-navy text-lg mb-4">{mod.name}</p>
                                        <div className="flex flex-wrap justify-center gap-2">
                                            {mod.outcomes.slice(0, 2).map((o, i) => (
                                                <span key={i} className="text-xs font-mono px-2 py-1 rounded-full border text-sbos-slate" style={{ borderColor: `${mod.color}30`, backgroundColor: `${mod.color}08` }}>
                                                    {o.split('(')[0].trim()}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })}

            <section className="py-24 bg-sbos-navy">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-heading font-bold text-white mb-5">All five modules. <span className="font-accent italic font-normal text-sbos-electric">Starting at $0.</span></h2>
                    <p className="text-sbos-ice/70 font-body text-lg mb-8">Start free with the SOP Builder. Unlock the full operating system on Operator for $150/month.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://app.sbos.tech" target="_blank" rel="noopener noreferrer" className="bg-sbos-electric hover:bg-sbos-royal text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all duration-300 hover:scale-[1.02]">Get Started Free</a>
                        <Link href="/pricing" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all duration-300">View Pricing</Link>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
