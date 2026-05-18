'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Tag, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const categoryColors = {
    Operations: 'bg-blue-50 text-blue-700 border-blue-200',
    Finance: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Growth: 'bg-violet-50 text-violet-700 border-violet-200',
};

// Convert markdown-style headings + paragraphs to JSX
function renderBody(body) {
    return body.trim().split('\n').map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return null;
        if (trimmed.startsWith('## '))
            return <h2 key={i} className="text-2xl font-heading font-bold text-sbos-navy mt-10 mb-4">{trimmed.replace('## ', '')}</h2>;
        if (trimmed.startsWith('- '))
            return <li key={i} className="text-sbos-slate font-body leading-relaxed ml-4 list-disc">{trimmed.replace('- ', '')}</li>;
        if (trimmed.startsWith('**') && trimmed.endsWith('**'))
            return <p key={i} className="font-semibold text-sbos-navy font-body my-4">{trimmed.replace(/\*\*/g, '')}</p>;
        return <p key={i} className="text-sbos-slate font-body leading-relaxed mb-5">{trimmed}</p>;
    }).filter(Boolean);
}

export default function BlogPostPage({ post }) {
    // related posts not available without the full list — omit for now
    const related = []

    if (!post) {
        return (
            <div className="min-h-screen bg-sbos-cloud flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-heading font-bold text-sbos-navy mb-4">Article not found</h1>
                    <Link href="/blog" className="text-sbos-electric hover:underline font-semibold">← Back to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-sbos-cloud overflow-x-hidden">
            <div className="noise-overlay" />
            <Navbar />

            {/* Hero */}
            <section className="relative pt-36 pb-12 bg-sbos-cloud bg-blueprint-grid overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sbos-electric/20 to-transparent" />
                <div className="max-w-3xl mx-auto px-6 relative z-10">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-sbos-slate hover:text-sbos-electric transition-colors mb-10 group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Link>

                    {/* Breadcrumb for SEO */}
                    <nav aria-label="Breadcrumb" className="mb-6">
                        <ol className="flex items-center gap-2 text-xs font-mono text-sbos-slate/60">
                            <li><Link href="/" className="hover:text-sbos-electric transition-colors">Home</Link></li>
                            <li>/</li>
                            <li><Link href="/blog" className="hover:text-sbos-electric transition-colors">Blog</Link></li>
                            <li>/</li>
                            <li className="text-sbos-electric truncate max-w-[200px]">{post.category}</li>
                        </ol>
                    </nav>

                    <div className="flex items-center gap-3 mb-5">
                        <span className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full border ${categoryColors[post.category] || 'bg-sbos-ice text-sbos-navy border-sbos-royal/20'}`}>
                            {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs font-mono text-sbos-slate/60">
                            <Clock size={11} /> {post.readTime}
                        </span>
                        <span className="text-xs font-mono text-sbos-slate/50">
                            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-sbos-navy leading-tight mb-6">
                        {post.title}
                    </h1>
                    <p className="text-xl text-sbos-slate font-body leading-relaxed">
                        {post.excerpt}
                    </p>
                </div>
            </section>

            {/* Article Body */}
            <section className="py-12 bg-white">
                <div className="max-w-3xl mx-auto px-6">
                    <article className="prose-custom">
                        {renderBody(post.body)}
                    </article>

                    {/* Author / Byline */}
                    <div className="mt-12 pt-8 border-t border-sbos-electric/10 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-sbos-electric/10 flex items-center justify-center text-sbos-electric font-bold text-sm font-mono">
                            S
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-sbos-navy">{post.author}</p>
                            <p className="text-xs font-mono text-sbos-slate/60">Published {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-sbos-cloud">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="bg-sbos-royal rounded-3xl p-10 text-center text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-sbos-electric/20 to-transparent pointer-events-none" />
                        <div className="relative z-10">
                            <h2 className="text-3xl font-heading font-bold mb-3">Ready to fix this in your business?</h2>
                            <p className="text-white/80 font-body mb-6 max-w-md mx-auto">
                                Start free with the SOP Builder and run your Business Health Scan in under 10 minutes.
                            </p>
                            <a
                                href="https://app.sbos.tech"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white hover:bg-sbos-ice text-sbos-navy font-semibold px-8 py-3.5 rounded-full text-sm transition-all duration-300 hover:scale-[1.02] group"
                            >
                                Get Started Free <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Posts */}
            {related.length > 0 && (
                <section className="py-16 bg-white">
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="text-2xl font-heading font-bold text-sbos-navy mb-8">Related articles</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {related.map(r => (
                                <Link key={r.slug} href={`/blog/${r.slug}`} className="group bg-sbos-cloud rounded-2xl p-6 border border-sbos-electric/10 hover:border-sbos-electric/30 hover:shadow-md transition-all duration-300">
                                    <span className={`text-xs font-mono font-semibold px-2 py-0.5 rounded-full border mb-3 inline-block ${categoryColors[r.category] || ''}`}>{r.category}</span>
                                    <h3 className="text-base font-heading font-bold text-sbos-navy group-hover:text-sbos-royal transition-colors leading-snug mb-2">{r.title}</h3>
                                    <span className="text-xs font-mono text-sbos-electric inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read article <ArrowRight size={11} /></span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Footer />
        </div>
    );
}
