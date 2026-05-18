'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';

// Locally hosted photos — downloaded from Unsplash, served from /public
const PHOTOS = [
  {
    id: 'chef-kitchen',
    src: '/industry-chef.jpg',
    alt: 'Chef actively plating a dish in a professional kitchen',
    label: 'Restaurants & Food Service',
  },
  {
    id: 'home-services',
    src: '/industry-homeservices.jpg',
    alt: 'Home services professional cleaning and maintaining a property',
    label: 'Home Services',
  },
  {
    id: 'hair-salon',
    src: '/industry-salon.jpg',
    alt: 'Hair stylist working in a salon setting',
    label: 'Hair & Beauty Salons',
  },
  {
    id: 'boutique',
    src: '/industry-retail.jpg',
    alt: 'Clothing arranged on racks in a boutique retail store',
    label: 'Retail & Boutiques',
  },
];

const SocialProofHumans = () => {
  return (
    <section className="py-24 bg-sbos-cloud relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sbos-electric/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-mono font-semibold text-sbos-electric uppercase tracking-widest bg-sbos-electric/5 px-4 py-1.5 rounded-full border border-sbos-electric/10 mb-5">
            Who SBOS Is Built For
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-sbos-navy mb-4 leading-tight">
            Built for the businesses{' '}
            <span className="font-accent italic font-normal text-sbos-royal">that keep communities running.</span>
          </h2>
          <p className="text-sbos-slate font-body text-base max-w-xl mx-auto leading-relaxed">
            From restaurants to retail, SBOS gives local service business owners the same operational clarity that enterprise companies pay consultants six figures for.
          </p>
        </div>

        {/* Photo grid — always visible, hover effects only */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {PHOTOS.map((photo) => (
            <div
              key={photo.id}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-sbos-navy/15 hover:-translate-y-1 transition-all duration-300"
              style={{ aspectRatio: '3/4' }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Label overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-sbos-navy/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-xs font-mono font-semibold text-white/90 uppercase tracking-wider">
                  {photo.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-10 rounded-2xl bg-white border border-sbos-electric/10 px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-sm">
          <div>
            <p className="text-base font-heading font-bold text-sbos-navy mb-1">
              Running a local service business?
            </p>
            <p className="text-sm font-body text-sbos-slate">
              SBOS was designed for owners who wear every hat. Get clarity on your operations in minutes.
            </p>
          </div>
          <a
            href="https://app.sbos.tech"
           
           
            className="flex items-center gap-2 text-sm font-semibold bg-sbos-royal hover:bg-sbos-electric text-white px-6 py-3 rounded-full transition-all duration-300 whitespace-nowrap group shrink-0"
          >
            Get Started Free <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default SocialProofHumans;
