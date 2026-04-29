'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MeetTheTeam = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.mtt-head', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 88%' },
        y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sbos-electric/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sbos-electric/10 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="mtt-head inline-block text-xs font-mono font-semibold text-sbos-electric uppercase tracking-widest bg-sbos-electric/5 px-4 py-1.5 rounded-full border border-sbos-electric/10 mb-6">
          The Team Behind the Platform
        </span>
        <h2 className="mtt-head text-3xl md:text-4xl font-heading font-bold text-sbos-navy mb-5 leading-tight">
          Software built by people who've{' '}
          <span className="font-accent italic font-normal text-sbos-royal">run businesses.</span>
        </h2>
        <p className="mtt-head text-sbos-slate font-body text-base max-w-2xl mx-auto leading-relaxed">
          SBOS is software — but every feature was designed and refined by people who have sat in the owner's seat. That experience is baked into the platform.
        </p>
      </div>
    </section>
  );
};

export default MeetTheTeam;
