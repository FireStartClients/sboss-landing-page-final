'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhatIsSbos from '../components/WhatIsSbos';
import IntegrationsRow from '../components/IntegrationsRow';
import Comparison from '../components/Comparison';
import MetricsBar from '../components/MetricsBar';
import DemoModules from '../components/DemoModules';
import FitCheck from '../components/FitCheck';
import HowItWorks from '../components/HowItWorks';
import Security from '../components/Security';
import Faq from '../components/Faq';
import PricingPreview from '../components/PricingPreview';
import Footer from '../components/Footer';

const LandingPage = () => {
    return (
        <>
            <div className="noise-overlay" />
            <Navbar />
            <main className="min-h-screen bg-sbos-cloud text-sbos-ink relative bg-blueprint-grid overflow-x-hidden">
                <Hero />
                <WhatIsSbos />
                <IntegrationsRow />
                <Comparison />
                <MetricsBar />
                <DemoModules />
                <FitCheck />
                <HowItWorks />
                <Security />
                <Faq />
                <PricingPreview />
            </main>
            <Footer />
        </>
    );
};

export default LandingPage;
