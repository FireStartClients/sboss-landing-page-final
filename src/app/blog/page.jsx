import BlogPage from '../../views/BlogPage';

export const metadata = {
    title: 'Blog | SBOS — Small Business Operating System',
    description: 'Practical systems, money-leak fixes, and growth frameworks for service business owners doing $500K–$5M per year. No fluff.',
    keywords: ['small business operations', 'SOP templates', 'business systems', 'service business growth', 'money leak detection'],
    openGraph: {
        title: 'Blog | SBOS — Small Business Operating System',
        description: 'Operational guides and growth frameworks for service businesses doing $500K–$5M per year.',
        url: 'https://sbos.io/blog',
        siteName: 'SBOS',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Blog | SBOS',
        description: 'Practical systems and growth frameworks for service businesses.',
    },
    alternates: { canonical: 'https://sbos.io/blog' },
};

export default BlogPage;
