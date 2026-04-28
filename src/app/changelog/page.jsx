import ChangelogPage from '../../views/ChangelogPage';

export const metadata = {
    title: 'Changelog & Roadmap | SBOS',
    description: 'Every SBOS release, feature update, and what\'s coming next — in reverse chronological order. See what\'s live, what\'s in beta, and what\'s on the roadmap.',
    keywords: ['SBOS updates', 'product changelog', 'feature releases', 'product roadmap', 'SBOS new features'],
    openGraph: {
        title: 'Changelog & Roadmap | SBOS',
        description: 'Every SBOS release and what\'s coming next.',
        url: 'https://sbos.io/changelog',
        siteName: 'SBOS',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Changelog & Roadmap | SBOS',
        description: 'Every SBOS release and what\'s coming next.',
    },
    alternates: { canonical: 'https://sbos.io/changelog' },
};

export default ChangelogPage;
