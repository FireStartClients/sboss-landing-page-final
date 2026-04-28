'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const credibilityStats = [
    { value: '200+', label: 'Business assessments run' },
    { value: '$2.1M', label: 'Waste identified' },
    { value: '15+', label: 'Industries served' },
];

const FounderCredibility = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.credibility-left', {
                scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
                x: -40, opacity: 0, duration: 0.9, ease: 'power3.out',
            });
            gsap.from('.credibility-right', {
                scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
                x: 40, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.15,
            });
            gsap.from('.cred-stat', {
                scrollTrigger: { trigger: '.cred-stats-row', start: 'top 88%' },
                y: 20, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out',
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-sbos-navy relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z\' fill=\'%23ffffff\' fill-rule=\'evenodd\'/%3E%3C/svg%3E')]" />
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-sbos-electric/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-14">
                    <span className="inline-block text-xs font-mono font-semibold text-sbos-electric uppercase tracking-widest bg-sbos-electric/10 border border-sbos-electric/20 px-4 py-1.5 rounded-full">
                        Built by operators, for operators
                    </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Quote card */}
                    <div className="credibility-left">
                        <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
                            <div className="absolute -top-5 left-8 bg-sbos-electric rounded-xl p-2.5">
                                <Quote size={20} className="text-white fill-white" />
                            </div>
                            <blockquote className="text-lg md:text-xl font-body text-white/90 leading-relaxed mb-8 mt-4">
                                "I spent years watching small business owners drown in tools that didn't talk to each other. They weren't failing from lack of effort — they were failing from lack of a system. SBOS is that system."
                            </blockquote>
                            <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sbos-electric to-sbos-royal flex items-center justify-center shrink-0 shadow-lg">
                                    <span className="text-lg font-heading font-bold text-white">JS</span>
                                </div>
                                <div>
                                    <p className="font-heading font-semibold text-white text-base">Jordan Simmons</p>
                                    <p className="text-sm text-sbos-ice/60 font-mono mt-0.5">Founder &amp; CEO, SBOS</p>
                                </div>
                                <a href="/about" className="ml-auto flex items-center gap-1.5 text-sm font-semibold text-sbos-electric hover:text-white transition-colors group shrink-0">
                                    Our story <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Context + Stats */}
                    <div className="credibility-right flex flex-col gap-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 leading-tight">
                                We've sat in the same{' '}
                                <span className="font-accent italic font-normal text-sbos-electric">operator's seat</span>
                            </h2>
                            <p className="text-sbos-ice/70 font-body leading-relaxed text-base">
                                SBOS wasn't built in a boardroom. It was built after years of working directly with local service businesses — watching the same problems repeat across industries. Too many tools. No system. No clarity.
                            </p>
                        </div>
                        <p className="text-sbos-ice/70 font-body leading-relaxed text-base">
                            The platform is the answer to a question every small business owner eventually asks:{' '}
                            <em className="text-white not-italic font-medium">"Why can't I get a clear view of my own business?"</em> We built it so you can.
                        </p>
                        <div className="cred-stats-row grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                            {credibilityStats.map((stat, idx) => (
                                <div key={idx} className="cred-stat text-center">
                                    <p className="text-2xl md:text-3xl font-heading font-bold text-white tabular-nums">{stat.value}</p>
                                    <p className="text-xs font-mono text-sbos-ice/50 mt-1 leading-tight uppercase tracking-wide">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                        <a href="/about" className="inline-flex items-center gap-2 text-sm font-semibold bg-sbos-electric/10 hover:bg-sbos-electric/20 border border-sbos-electric/30 hover:border-sbos-electric/60 text-sbos-electric px-6 py-3 rounded-full transition-all duration-300 w-fit group">
                            Meet the team <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderCredibility;
