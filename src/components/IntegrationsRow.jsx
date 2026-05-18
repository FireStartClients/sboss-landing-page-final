'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Real brand logos via Simple Icons CDN (cdn.simpleicons.org)
const integrations = [
    { name: 'QuickBooks',       slug: 'quickbooks',       color: '2CA01C' },
    { name: 'HubSpot',          slug: 'hubspot',           color: 'FF7A59' },
    { name: 'Slack',            slug: 'slack',             color: '4A154B' },
    { name: 'Stripe',           slug: 'stripe',            color: '635BFF' },
    { name: 'Zapier',           slug: 'zapier',            color: 'FF4A00' },
    { name: 'Google Analytics', slug: 'googleanalytics',   color: 'E37400' },
    { name: 'Calendly',         slug: 'calendly',          color: '006BFF' },
];

const IntegrationsRow = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.integrations-header', {
                scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
                y: 30, opacity: 0, duration: 0.7, ease: 'power3.out',
            });
            gsap.from('.integration-logo', {
                scrollTrigger: { trigger: '.integrations-grid', start: 'top 88%' },
                scale: 0.85, opacity: 0, duration: 0.5, stagger: 0.07, ease: 'back.out(1.5)',
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-sbos-cloud relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sbos-electric/20 to-transparent" />

            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="integrations-header text-center mb-14">
                    <span className="inline-block text-xs font-mono font-semibold text-sbos-electric uppercase tracking-widest mb-4 bg-sbos-electric/5 px-4 py-1.5 rounded-full border border-sbos-electric/10">
                        Integrations
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-sbos-navy mb-4">
                        Plugs into the tools{' '}
                        <span className="font-accent italic font-normal text-sbos-royal">you already use</span>
                    </h2>
                    <p className="text-sbos-slate font-body text-base max-w-xl mx-auto leading-relaxed">
                        SBOS sits on top of your existing stack — no migrations, no new logins. It reads what your tools are doing and tells you what to fix.
                    </p>
                </div>

                {/* Logo Grid */}
                <div className="integrations-grid grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6 mb-12">
                    {integrations.map((item, idx) => (
                        <div key={idx} className="integration-logo group flex flex-col items-center gap-2">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white border border-sbos-slate/10 shadow-md shadow-sbos-navy/8 flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-sbos-navy/15 group-hover:-translate-y-1 p-2.5">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={`https://cdn.simpleicons.org/${item.slug}/${item.color}`}
                                    alt={item.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="text-[10px] font-mono text-sbos-slate/60 group-hover:text-sbos-slate transition-colors text-center leading-tight">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Bottom note */}
                <div className="text-center">
                    <p className="text-sm text-sbos-slate/70 font-body mb-3">
                        + dozens more via Zapier and native API connections
                    </p>
                    <a href="https://app.sbos.tech" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-sbos-electric hover:text-sbos-royal transition-colors group">
                        See all integrations
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default IntegrationsRow;
