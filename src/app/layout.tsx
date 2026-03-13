import type { Metadata } from 'next';
import { Playfair_Display, Crimson_Pro } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const crimson = Crimson_Pro({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-crimson',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'claude.md directory — The SKILL.md Library for Claude Code',
  description: '500+ SKILL.md files for Claude Code professionals. One featured skill per week. Full library launching April 1, 2026.',
  openGraph: {
    title: 'claude.md directory',
    description: 'The community SKILL.md library Claude Code deserves.',
    url: 'https://claudemddirectory.com',
    siteName: 'claude.md directory',
    type: 'website',
    images: [{ url: 'https://claudemddirectory.com/claudemddirectory-logo-512x512.png', width: 512, height: 512, alt: 'claudemddirectory' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'claude.md directory',
    description: 'The community SKILL.md library Claude Code deserves.',
    images: ['https://claudemddirectory.com/claudemddirectory-logo-512x512.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${crimson.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: '#0b0a07', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
