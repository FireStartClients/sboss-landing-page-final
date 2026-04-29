// Server Component — fetches posts from Supabase at request time (SSR)
// No 'use client' — this runs on the server only
import BlogPage from '../../views/BlogPage'
import { getPosts, getCategories, normalisePost } from '../../data/blog-posts'

export const metadata = {
    title: 'Blog | SBOS — Small Business Operating System',
    description: 'Practical systems, money-leak fixes, and growth frameworks for service business owners doing $500K–$5M per year. No fluff.',
    keywords: ['small business operations', 'SOP templates', 'business systems', 'service business growth', 'money leak detection'],
    openGraph: {
        title: 'Blog | SBOS — Small Business Operating System',
        description: 'Operational guides and growth frameworks for service businesses doing $500K–$5M per year.',
        url: 'https://sboss.tech/blog',
        siteName: 'SBOS',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Blog | SBOS',
        description: 'Practical systems and growth frameworks for service businesses.',
    },
    alternates: { canonical: 'https://sboss.tech/blog' },
}

// Revalidate every 60 seconds — new published posts appear within 1 minute
export const revalidate = 60

export default async function Page() {
    const rawPosts     = await getPosts()
    const posts        = rawPosts.map(normalisePost)
    const categories   = ['All', ...new Set(posts.map(p => p.category).filter(Boolean))]
    return <BlogPage posts={posts} categories={categories} />
}
