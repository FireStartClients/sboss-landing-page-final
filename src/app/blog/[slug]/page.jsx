// Server Component — fetches single post from Supabase for SSR + SEO metadata
import BlogPostPage from '../../../views/BlogPostPage'
import { getAllSlugs, getPostBySlug, normalisePost } from '../../../data/blog-posts'
import { notFound } from 'next/navigation'

export const revalidate = 60

// Allow slugs not pre-built at deploy time to render on-demand.
// Without this, any post added to Supabase after a build returns 404.
export const dynamicParams = true

// Pre-render known slugs at build time; new posts render on-demand
export async function generateStaticParams() {
    const slugs = await getAllSlugs()
    return slugs.map(slug => ({ slug }))
}

// Per-post SEO metadata
export async function generateMetadata({ params }) {
    const raw  = await getPostBySlug(params.slug)
    const post = normalisePost(raw)
    if (!post) return { title: 'Post Not Found | SBOS Blog' }

    return {
        title: `${post.title} | SBOS Blog`,
        description: post.excerpt,
        keywords: ['small business', post.category?.toLowerCase(), 'SBOS', 'business operations', 'service business'],
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://sboss.tech/blog/${post.slug}`,
            siteName: 'SBOS',
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
        },
        alternates: { canonical: `https://sboss.tech/blog/${post.slug}` },
    }
}

export default async function Page({ params }) {
    const raw  = await getPostBySlug(params.slug)
    const post = normalisePost(raw)
    if (!post) notFound()
    return <BlogPostPage post={post} />
}
