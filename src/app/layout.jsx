import './globals.css';

const SBOS_ICON = 'https://res.cloudinary.com/dbtuwhauh/image/upload/v1771843214/SBOS_Logo_For_Website_oi6aqp.png';

export const metadata = {
  title: 'SBOS — The Small Business Operating System',
  description:
    'SBOS gives small businesses the operating clarity of an enterprise. One system for teams, tasks, and clients.',
  icons: {
    icon: [{ url: SBOS_ICON, type: 'image/png' }],
    shortcut: SBOS_ICON,
    apple: SBOS_ICON,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon — browser tab icon */}
        <link rel="icon" type="image/png" href={SBOS_ICON} />
        <link rel="shortcut icon" href={SBOS_ICON} />
        <link rel="apple-touch-icon" href={SBOS_ICON} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

