'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircleQuestion, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqData = [
    {
        q: 'What exactly is SBOS and how does it work?',
        a: 'SBOS is a Business Operating System — a single platform that connects your diagnostic, planning, processes, financials, and pipeline in one place. You run a Business Health Scan, connect your existing tools (QuickBooks, Stripe, Calendly, etc.), and SBOS tells you exactly where your business is leaking money or time — then gives you a structured plan to fix it.',
    },
    {
        q: 'What do I get on the free Starter plan?',
        a: 'The Starter plan gives you full access to the SOP Builder — you can create, assign, and track standard operating procedures for your team immediately. You can also explore all five platform modules to see what SBOS can do before upgrading. No credit card required.',
    },
    {
        q: 'Does SBOS replace my CRM or accounting software?',
        a: 'No. SBOS is an orchestration layer that sits on top of your existing stack. It reads what your tools (QuickBooks, HubSpot, Stripe, Calendly) are doing and surfaces the gaps, waste, and process breakdowns you can\'t see from inside each individual tool. We believe in letting specialized tools do what they do best — while SBOS acts as the command center.',
    },
    {
        q: 'How long does it take to get set up?',
        a: 'The Business Health Scan takes under 10 minutes. Connecting your first integration takes another 5 minutes. Most Operator plan users have their first SOP documented and their 30/60/90-day roadmap live within their first session. There\'s no lengthy onboarding or migration — you start from where you are.',
    },
    {
        q: 'Can SBOS work for my specific industry?',
        a: 'Yes. SBOS is built for service-based businesses — contractors, agencies, consultants, healthcare practices, cleaners, coaches, and more. The SOP Builder adapts to your operational terminology, the diagnostic asks industry-relevant questions, and the growth roadmap is structured around your specific constraints — not a one-size-fits-all playbook.',
    },
    {
        q: 'What\'s the difference between Operator ($150/mo) and Executive ($550/mo)?',
        a: 'The Operator plan gives you the full platform — all 5 modules, live integrations, automated summaries, and your growth roadmap. The Executive plan adds the human element: dedicated advisory sessions with the SBOS team, a human-reviewed weekly business summary, and direct founder access for strategic guidance. It\'s the platform plus a real advisor in your corner.',
    },
];

const TOTAL_CARDS = faqData.length;

const Faq = () => {
    const sectionRef = useRef(null);
    const pinContainerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const cards = cardsRef.current.filter(Boolean);
        if (cards.length === 0) return;

        const ctx = gsap.context(() => {
            // Set initial card states
            cards.forEach((card, i) => {
                if (i === 0) {
                    gsap.set(card, { yPercent: 0, scale: 1, opacity: 1 });
                } else {
                    gsap.set(card, { yPercent: 100, scale: 0.95, opacity: 0 });
                }
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: pinContainerRef.current,
                    start: 'top top',
                    end: `+=${(TOTAL_CARDS - 1) * 200}vh`,
                    pin: true,
                    scrub: 2.5,
                    anticipatePin: 1,
                },
            });

            cards.forEach((card, i) => {
                if (i < TOTAL_CARDS - 1) {
                    tl.to(
                        cards[i + 1],
                        { yPercent: 0, scale: 1, opacity: 1, duration: 1, ease: 'power2.inOut' },
                        i
                    );
                    tl.to(
                        card,
                        { scale: 0.92, opacity: 0.4, duration: 1, ease: 'power2.inOut' },
                        i
                    );
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="faq" className="relative bg-white">
            <div
                ref={pinContainerRef}
                className="relative h-screen flex flex-col overflow-hidden"
            >
                {/* Section Header — inside pinned area */}
                <div className="flex-shrink-0 pt-16 pb-6 text-center px-6">
                    <span className="inline-block text-xs font-mono font-semibold text-sbos-electric uppercase tracking-widest mb-4 bg-sbos-electric/5 px-4 py-1.5 rounded-full border border-sbos-electric/10">
                        FAQ
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-sbos-navy mb-3 leading-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-base text-sbos-slate font-body max-w-lg mx-auto">
                        Straight answers to common concerns. No fluff.
                    </p>
                </div>

                {/* Cards stack */}
                <div className="relative flex-1 w-full max-w-3xl mx-auto px-6">
                    {faqData.map((faq, idx) => (
                        <div
                            key={idx}
                            ref={(el) => (cardsRef.current[idx] = el)}
                            className="absolute inset-x-0 top-0 mx-6 rounded-3xl bg-white border border-sbos-electric/10 shadow-2xl shadow-sbos-navy/8 overflow-hidden will-change-transform"
                            style={{ zIndex: idx + 1 }}
                        >
                            <div className="p-6 md:p-8">
                                {/* Question Number + Icon */}
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-sbos-electric/10 text-sbos-electric">
                                        <MessageCircleQuestion size={20} />
                                    </div>
                                    <span className="text-xs font-mono font-bold text-sbos-slate/50 uppercase tracking-widest">
                                        Question {idx + 1} of {TOTAL_CARDS}
                                    </span>
                                </div>

                                {/* Question */}
                                <h3 className="text-xl md:text-2xl font-heading font-bold text-sbos-navy mb-4 leading-snug">
                                    {faq.q}
                                </h3>

                                {/* Divider */}
                                <div className="h-px w-full bg-sbos-electric/10 mb-4" />

                                {/* Answer */}
                                <p className="text-base text-sbos-slate leading-relaxed">
                                    {faq.a}
                                </p>
                            </div>

                            {/* CTA on last card */}
                            {idx === TOTAL_CARDS - 1 && (
                                <div className="bg-sbos-cloud/40 border-t border-sbos-electric/10 px-8 py-5 flex items-center justify-center gap-6">
                                    <span className="text-sm text-sbos-slate">Still have questions?</span>
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-2 bg-white border border-sbos-royal/20 hover:border-sbos-electric text-sbos-navy px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-sbos-electric/10 group"
                                    >
                                        Get in touch
                                        <ArrowRight size={14} className="text-sbos-electric group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Progress dots */}
                <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
                    {faqData.map((_, idx) => (
                        <div
                            key={idx}
                            className="w-1.5 h-1.5 rounded-full bg-sbos-navy/15"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
