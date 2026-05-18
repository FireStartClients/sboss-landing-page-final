'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PlayCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import CalendlyModal from './CalendlyModal';

// Social icon SVGs — inline to avoid extra deps
const LinkedInIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const XIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.213 5.567 5.951-5.567zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const Footer = () => {
    const [bookingOpen, setBookingOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [subState, setSubState] = useState('idle'); // idle | loading | success | error
    const router = useRouter();

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!email) return;
        setSubState('loading');
        try {
            const res = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            if (res.ok) { setSubState('success'); setEmail(''); }
            else setSubState('error');
        } catch {
            setSubState('error');
        }
    };

    return (
        <footer className="bg-[#0A0D1C] text-white pt-24 pb-8 relative overflow-hidden rounded-t-[2.5rem] mt-[-2rem] z-20">

            {/* Background Graphic */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sbos-electric/10 to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* CTA Endcap */}
                <div className="bg-sbos-navy/50 border border-sbos-royal/30 rounded-3xl p-10 md:p-16 mb-20 text-center backdrop-blur-md relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-sbos-electric/20 blur-[100px] rounded-full pointer-events-none" />

                    <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                            Start Small. <span className="text-sbos-electric font-accent italic">See Value Fast.</span>
                        </h2>
                        <p className="text-xl text-sbos-ice/80 mb-10 text-balance">
                            You don't need a massive digital transformation. You need clarity today. Get started free and see your first operational snapshot in under 10 minutes.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
                            <a
                                href="https://app.sbos.tech"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto bg-sbos-royal hover:bg-sbos-electric text-white px-10 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-sbos-electric/25"
                            >
                                Get Started Free
                            </a>
                            <button
                                onClick={() => setBookingOpen(true)}
                                className="w-full sm:w-auto flex items-center justify-center gap-2 group bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300"
                            >
                                <PlayCircle size={20} className="text-sbos-ice group-hover:text-white transition-colors" />
                                Schedule a Call
                            </button>
                        </div>

                        <div className="flex items-center gap-6 mt-8">
                            {['No credit card required', 'Cancel anytime', 'Up and running in 10 min'].map(t => (
                                <div key={t} className="flex items-center gap-2 text-xs font-mono text-sbos-slate/80">
                                    <CheckCircle2 size={12} className="text-sbos-success" /> {t}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Newsletter Strip */}
                <div className="bg-white/5 border border-white/10 rounded-2xl px-8 py-6 mb-16 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <p className="text-sm font-heading font-semibold text-white mb-0.5">Get the weekly operator brief</p>
                        <p className="text-xs font-mono text-sbos-slate">Practical systems, money-leak fixes, and platform updates. No fluff.</p>
                    </div>
                    <form onSubmit={handleSubscribe} className="flex items-center gap-3 w-full sm:w-auto">
                        {subState === 'success' ? (
                            <p className="text-sm font-mono text-sbos-success flex items-center gap-2">
                                <CheckCircle2 size={16} /> You're in — check your inbox.
                            </p>
                        ) : (
                            <>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    required
                                    className="flex-1 sm:w-56 bg-white/10 border border-white/15 text-white placeholder-sbos-slate/60 text-sm px-4 py-2.5 rounded-full focus:outline-none focus:border-sbos-electric/50 transition-colors"
                                />
                                <button
                                    type="submit"
                                    disabled={subState === 'loading'}
                                    className="shrink-0 bg-sbos-electric hover:bg-sbos-royal text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 group disabled:opacity-60"
                                >
                                    {subState === 'loading' ? 'Subscribing…' : 'Subscribe'}
                                    {subState !== 'loading' && <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />}
                                </button>
                            </>
                        )}
                        {subState === 'error' && (
                            <p className="text-xs text-red-400 mt-1">Something went wrong. Try again.</p>
                        )}
                    </form>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="md:col-span-5 flex flex-col items-start">
                        <img
                            src="https://res.cloudinary.com/dbtuwhauh/image/upload/v1771843214/SBOS_Logo_For_Website_oi6aqp.png"
                            alt="SBOS"
                            className="h-8 w-auto mb-6 brightness-0 invert opacity-90"
                        />
                        <p className="text-sbos-slate text-sm max-w-xs leading-relaxed mb-6">
                            The modern operating system for small business. From scattered chaos to clear execution.
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            {/* TODO: Replace # with real LinkedIn profile URL */}
                            <a
                                href="https://www.linkedin.com/company/sbos"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="SBOS on LinkedIn"
                                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-sbos-electric/40 hover:bg-sbos-electric/10 flex items-center justify-center text-sbos-slate hover:text-sbos-electric transition-all duration-300"
                            >
                                <LinkedInIcon />
                            </a>
                            {/* TODO: Replace # with real X/Twitter profile URL */}
                            <a
                                href="https://twitter.com/sbosapp"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="SBOS on X (Twitter)"
                                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-sbos-electric/40 hover:bg-sbos-electric/10 flex items-center justify-center text-sbos-slate hover:text-sbos-electric transition-all duration-300"
                            >
                                <XIcon />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider">Product</h4>
                            <ul className="space-y-3">
                                <li><a href="/#platform" className="text-sbos-slate hover:text-white text-sm transition-colors">Features</a></li>
                                <li><a href="/#how-it-works" className="text-sbos-slate hover:text-white text-sm transition-colors">How It Works</a></li>
                                <li><Link href="/pricing" className="text-sbos-slate hover:text-white text-sm transition-colors">Pricing</Link></li>
                                <li><a href="/#security" className="text-sbos-slate hover:text-white text-sm transition-colors">Security</a></li>
                                <li><a href="/#faq" className="text-sbos-slate hover:text-white text-sm transition-colors">FAQ</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider">Company</h4>
                            <ul className="space-y-3">
                                <li><Link href="/about" className="text-sbos-slate hover:text-white text-sm transition-colors">About Us</Link></li>
                                <li><Link href="/blog" className="text-sbos-slate hover:text-white text-sm transition-colors">Blog</Link></li>
                                <li><Link href="/contact" className="text-sbos-slate hover:text-white text-sm transition-colors">Contact</Link></li>
                                <li><button onClick={() => setBookingOpen(true)} className="text-sbos-slate hover:text-white text-sm transition-colors text-left">Schedule a Call</button></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider">Get Started</h4>
                            <ul className="space-y-3">
                                <li><a href="https://app.sbos.tech" target="_blank" rel="noopener noreferrer" className="text-sbos-slate hover:text-white text-sm transition-colors">Create Free Account</a></li>
                                <li><Link href="/pricing" className="text-sbos-slate hover:text-white text-sm transition-colors">View Pricing</Link></li>
                                <li><Link href="/privacy" className="text-sbos-slate hover:text-white text-sm transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/terms" className="text-sbos-slate hover:text-white text-sm transition-colors">Terms of Service</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-wrap items-center gap-4">
                        <p className="text-sbos-slate text-xs">© {new Date().getFullYear()} SBOS. All rights reserved.</p>
                        <span className="text-white/10 hidden md:inline">·</span>
                        <Link href="/privacy" className="text-sbos-slate hover:text-white text-xs transition-colors">Privacy</Link>
                        <Link href="/terms" className="text-sbos-slate hover:text-white text-xs transition-colors">Terms</Link>
                    </div>

                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sbos-success opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-sbos-success" />
                        </span>
                        <span className="font-mono text-[10px] text-sbos-slate uppercase tracking-widest">System Operational</span>
                    </div>
                </div>

            </div>
            <CalendlyModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
        </footer>
    );
};

export default Footer;
