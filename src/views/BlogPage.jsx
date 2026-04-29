'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ArrowRight, Clock, Tag } from 'lucide-react'

const categoryColors = {
    Operations: 'bg-blue-50 text-blue-700 border-blue-200',
    Finance:    'bg-emerald-50 text-emerald-700 border-emerald-200',
    Growth:     'bg-violet-50 text-violet-700 border-violet-200',
}

// posts + categories are passed from the server component (blog/page.jsx)
export default function BlogPage({ posts = [], categories = ['All'] }) {
    const [activeCategory, setActiveCategory] = useState('All')

    const filtered = activeCategory === 'All'
        ? posts
        : posts.filter(p => p.category === activeCategory)

    return (
        <div className="min-h-screen bg-sbos-cloud overflow-x-hidden">
            <div className="noise-overlay" />
            <Navbar />

            {/* Hero */}
            <section className="relative pt-36 pb-16 bg-sbos-cloud bg-blueprint-grid overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sbos-electric/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block text-xs font-mono font-semibold text-sbos-electric uppercase tracking-widest mb-6 bg-sbos-electric/5 px-4 py-1.5 rounded-full border border-sbos-electric/10">
                        The SBOS Blog
                    </span>
                    <h1 className="text-5xl lg:text-6xl font-heading font-bold text-sbos-navy tracking-tight leading-tight mb-5">
                        Practical systems for{' '}
                        <span className="font-accent italic font-normal text-sbos-royal">service businesses.</span>
                    </h1>
                    <p className="text-xl text-sbos-slate font-body leading-relaxed max-w-2xl mx-auto">
                        Operational guides, money-leak fixes, and growth frameworks — written for owners doing $500K–$5M per year.
                    </p>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 bg-white border-b border-sbos-electric/8 sticky top-0 z-30">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
                        <span className="text-xs font-mono font-semibold text-sbos-slate uppercase tracking-widest shrink-0 flex items-center gap-1.5">
                            <Tag size={12} /> Filter:
                        </span>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`shrink-0 text-xs font-semibold px-4 py-1.5 rounded-full border transition-all duration-200 ${
                                    activeCategory === cat
                                        ? 'bg-sbos-electric text-white border-sbos-electric'
                                        : 'bg-white text-sbos-slate border-sbos-slate/20 hover:border-sbos-electric/40 hover:text-sbos-navy'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Post Grid */}
            <section className="py-16 bg-sbos-cloud">
                <div className="max-w-5xl mx-auto px-6">
                    {filtered.length === 0 ? (
                        <div className="text-center py-20 text-sbos-slate font-body">
                            {posts.length === 0
                                ? 'Blog posts are on their way. Check back soon!'
                                : 'No posts in this category yet.'}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {filtered.map((post, idx) => (
                                <article
                                    key={post.slug}
                                    className={`group bg-white rounded-3xl border border-sbos-electric/10 shadow-sm hover:shadow-xl hover:shadow-sbos-navy/8 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col ${idx === 0 ? 'md:col-span-2' : ''}`}
                                >
                                    {idx === 0 && (
                                        <div className="h-1.5 w-full bg-gradient-to-r from-sbos-royal via-sbos-electric to-sbos-royal" />
                                    )}
                                    <div className="p-8 flex flex-col flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full border ${categoryColors[post.category] || 'bg-sbos-ice text-sbos-navy border-sbos-royal/20'}`}>
                                                {post.category}
                                            </span>
                                            <span className="flex items-center gap-1 text-xs font-mono text-sbos-slate/60">
                                                <Clock size={11} /> {post.readTime}
                                            </span>
                                        </div>
                                        <h2 className={`font-heading font-bold text-sbos-navy mb-3 leading-snug group-hover:text-sbos-royal transition-colors ${idx === 0 ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                                            {post.title}
                                        </h2>
                                        <p className="text-sbos-slate font-body leading-relaxed mb-6 flex-1">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-sbos-electric/8">
                                            <span className="text-xs font-mono text-sbos-slate/50">
                                                {post.date ? new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : ''}
                                            </span>
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-sbos-royal hover:text-sbos-electric transition-colors group-hover:gap-2.5"
                                            >
                                                Read article <ArrowRight size={14} />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-16 bg-white">
                <div className="max-w-2xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-heading font-bold text-sbos-navy mb-3">
                        Get new articles in your inbox
                    </h2>
                    <p className="text-sbos-slate font-body mb-8">
                        Weekly operational insights for service business owners. No fluff.
                    </p>
                    <form onSubmit={e => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            required
                            className="flex-1 border border-sbos-electric/20 text-sbos-navy placeholder-sbos-slate/50 text-sm px-4 py-3 rounded-full focus:outline-none focus:border-sbos-electric transition-colors"
                        />
                        <button
                            type="submit"
                            className="bg-sbos-royal hover:bg-sbos-electric text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-[1.02] shrink-0"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    )
}
