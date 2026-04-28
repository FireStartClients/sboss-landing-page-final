'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timelineSteps = [
    { num: '01', title: 'Create Your Free Account', desc: 'Sign up in under 2 minutes. No credit card required. Access the SOP Builder and platform preview immediately.' },
    { num: '02', title: 'Run Your Business Health Scan', desc: 'Answer 10 structured questions about your operations, tools, and goals. Takes less than 10 minutes.' },
    { num: '03', title: 'Review Your Diagnostic Report', desc: 'Get your operational health score, see your top 3 risk areas, and understand exactly where your business is leaking money or time.' },
    { num: '04', title: 'Connect Your Tools', desc: 'Plug in QuickBooks, Stripe, Calendly, or your CRM. SBOS reads what your stack is doing and surfaces gaps you didn\'t know existed.' },
    { num: '05', title: 'Build Your First SOP', desc: 'Document one critical workflow — onboarding a client, closing a lead, fulfilling a service. Assign it to your team and track completion.' },
    { num: '06', title: 'Execute Your Growth Plan', desc: 'Your 30/60/90-day roadmap is live. Work through quick wins, fix the systems, and hit your 90-day milestone with a clear, ordered plan.' },
];

const HowItWorks = () => {
    const containerRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        // Scroll linked progress line
        const ctx = gsap.context(() => {
            gsap.to(lineRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top center',
                    end: 'bottom center',
                    scrub: 1,
                },
                height: '100%',
                ease: 'none'
            });

            // Step Highlights
            const steps = gsap.utils.toArray('.timeline-step');
            steps.forEach((step, i) => {
                gsap.to(step.querySelector('.step-dot'), {
                    scrollTrigger: {
                        trigger: step,
                        start: 'top center+=100',
                        end: '+=200',
                        toggleClass: 'active-dot',
                    }
                });

                gsap.to(step.querySelector('.step-card'), {
                    scrollTrigger: {
                        trigger: step,
                        start: 'top center+=100',
                        end: '+=200',
                        toggleClass: 'active-card',
                    }
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="how-it-works" className="py-24 bg-sbos-cloud relative overflow-hidden">
            {/* Blueprint Grid Overlay */}
            <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">

                <div className="text-center mb-20">
                    <h2 className="text-4xl font-heading font-bold text-sbos-navy mb-4">From signup to <span className="font-accent italic font-normal text-sbos-royal">fully operational</span></h2>
                    <p className="text-lg text-sbos-slate font-body">Six clear steps to go from scattered operations to a running system — in less than a week.</p>
                </div>

                <div ref={containerRef} className="relative">

                    {/* Vertical track line — same anchor on mobile and desktop */}
                    <div className="absolute left-5 -translate-x-1/2 lg:left-1/2 top-0 bottom-0 w-0.5 bg-sbos-electric/10 rounded-full" />

                    {/* Animated Progress Line */}
                    <div ref={lineRef} className="absolute left-5 -translate-x-1/2 lg:left-1/2 top-0 w-0.5 bg-gradient-to-b from-sbos-electric to-sbos-royal rounded-full shadow-[0_0_10px_rgba(51,102,255,0.5)] h-0 z-0" />

                    <div className="flex flex-col gap-12 lg:gap-24 relative z-10">
                        {timelineSteps.map((step, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <div key={idx} className={`timeline-step relative flex flex-col lg:flex-row items-start lg:items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>

                                    {/* Dot — anchored to same left-5 as the lines */}
                                    <div className="absolute left-5 -translate-x-1/2 lg:left-1/2 lg:-translate-x-1/2 top-3 lg:top-auto w-6 h-6 rounded-full bg-sbos-cloud border-2 border-sbos-slate/20 step-dot transition-all duration-500 z-10 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-sbos-electric inner-dot transition-colors duration-500" />
                                    </div>

                                    {/* Card Content — offset right of dot on mobile */}
                                    <div className="step-card w-full ml-12 lg:ml-0 lg:w-[45%] bg-white p-6 rounded-2xl shadow-sm border border-sbos-slate/10 transition-all duration-500">
                                        <span className="text-xs font-mono font-bold text-sbos-electric mb-2 block tracking-widest">STEP {step.num}</span>
                                        <h4 className="text-xl font-heading font-bold text-sbos-navy mb-2">{step.title}</h4>
                                        <p className="text-sm text-sbos-slate leading-relaxed">{step.desc}</p>
                                    </div>

                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>

            {/* Global CSS for toggleClass (simulated here via classes) */}
            <style dangerouslySetInnerHTML={{
                __html: `
        .active-dot { border-color: theme('colors.sbos-electric') !important; }
        .active-dot .inner-dot { background-color: theme('colors.sbos-electric') !important; }
        .active-card { 
          border-color: theme('colors.sbos-electric' / 30%) !important; 
          box-shadow: 0 10px 25px -5px theme('colors.sbos-navy' / 5%) !important;
          transform: translateY(-2px);
        }
      `}} />
        </section>
    );
};

export default HowItWorks;
