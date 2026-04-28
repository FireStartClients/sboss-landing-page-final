import BlogPostPage from '../../../views/BlogPostPage';
import { posts, getAllSlugs } from '../../../data/blog-posts';
import { notFound } from 'next/navigation';

// Pre-render all blog post paths at build time
export async function generateStaticParams() {
    return getAllSlugs().map(slug => ({ slug }));
}

// Per-post SEO metadata
export async function generateMetadata({ params }) {
    const post = posts.find(p => p.slug === params.slug);
    if (!post) return { title: 'Post Not Found | SBOS Blog' };

    return {
        title: `${post.title} | SBOS Blog`,
        description: post.excerpt,
        keywords: ['small business', post.category.toLowerCase(), 'SBOS', 'business operations', 'service business'],
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://sbos.io/blog/${post.slug}`,
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
        alternates: { canonical: `https://sbos.io/blog/${post.slug}` },
    };
}

export default function Page({ params }) {
    const post = posts.find(p => p.slug === params.slug);
    if (!post) notFound();
    return <BlogPostPage slug={params.slug} />;
}
