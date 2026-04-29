'use client';
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';
import { X } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/ccmgagency/discovery-meeting-clone-1';

const CalendlyModal = ({ isOpen, onClose }) => {
    const backdropRef = useRef(null);
    const panelRef    = useRef(null);

    // Animate in + body scroll lock
    useEffect(() => {
        if (!backdropRef.current || !panelRef.current) return;

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            gsap.to(backdropRef.current, { opacity: 1, duration: 0.3, ease: 'power2.out' });
            gsap.fromTo(
                panelRef.current,
                { scale: 0.95, opacity: 0, y: 24 },
                { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'power3.out', delay: 0.05 }
            );
        } else {
            document.body.style.overflow = '';
        }

        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    // Close on Escape
    useEffect(() => {
        if (!isOpen) return;
        const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div
            ref={backdropRef}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
            style={{ opacity: 0 }}
            onClick={(e) => { if (e.target === backdropRef.current) onClose(); }}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-sbos-ink/60 backdrop-blur-sm" />

            {/* Panel */}
            <div
                ref={panelRef}
                className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl shadow-sbos-navy/20 border border-sbos-electric/10 overflow-hidden"
                style={{ opacity: 0 }}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-sbos-electric/10 bg-sbos-cloud">
                    <div>
                        <h3 className="text-lg font-heading font-bold text-sbos-navy">Schedule a Call</h3>
                        <p className="text-xs font-mono text-sbos-slate mt-0.5">Pick a time that works for you</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-xl text-sbos-slate hover:text-sbos-navy hover:bg-sbos-ice transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sbos-electric"
                        aria-label="Close booking modal"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Calendly iframe — most reliable embed method, no external script needed */}
                <iframe
                    src={CALENDLY_URL}
                    width="100%"
                    height="660"
                    frameBorder="0"
                    title="Schedule a discovery call"
                    style={{ display: 'block', border: 'none' }}
                />
            </div>
        </div>,
        document.body
    );
};

export default CalendlyModal;
