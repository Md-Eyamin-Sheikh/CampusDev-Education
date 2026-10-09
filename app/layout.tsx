import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Hind_Siliguri } from 'next/font/google';
import './tokens.css';
import './globals.css';
import React from 'react';

/* ── Fonts — self-hosted via next/font, blueprint §1.5 ─────────────
   Plus Jakarta Sans: Latin headings & UI (weights 500–800)
   Hind Siliguri: All Bangla content (weights 400–700)
   ------------------------------------------------------------------ */
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['500', '600', '700', '800'],
  variable: '--ff-latin',
  display: 'swap',
  preload: true,
});

const hindSiliguri = Hind_Siliguri({
  subsets: ['bengali', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--ff-bangla',
  display: 'swap',
  preload: false, // Lazy-load Bangla subset — loads after initial render
});

/* ── SEO Metadata ───────────────────────────────────────────────── */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://eduweb.com.bd';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'EduWeb — শিক্ষা প্রতিষ্ঠানের প্রিমিয়াম ওয়েব সল্যুশন',
    template: '%s | EduWeb',
  },
  description:
    'বাংলাদেশের স্কুল, কলেজ, মাদ্রাসা ও কোচিং সেন্টারের জন্য প্রিমিয়াম ডায়নামিক ওয়েবসাইট ও ডিজিটাল ম্যানেজমেন্ট সল্যুশন। দ্রুত, মোবাইল-ফার্স্ট, বাংলা-প্রথম।',
  keywords: [
    'education website bangladesh',
    'school website bangladesh',
    'madrasa website',
    'college portal bd',
    'EduWeb',
    'শিক্ষা প্রতিষ্ঠান ওয়েবসাইট',
    'স্কুল ওয়েবসাইট',
    'মাদ্রাসা ওয়েবসাইট',
    'কলেজ ওয়েবসাইট',
    'কোচিং ওয়েবসাইট',
  ],
  authors: [{ name: 'EduWeb', url: SITE_URL }],
  creator: 'EduWeb',
  publisher: 'EduWeb',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'bn_BD',
    alternateLocale: 'en_US',
    url: SITE_URL,
    siteName: 'EduWeb',
    title: 'EduWeb — শিক্ষা প্রতিষ্ঠানের প্রিমিয়াম ওয়েব সল্যুশন',
    description:
      'স্কুল, কলেজ ও মাদ্রাসার জন্য আধুনিক ওয়েবসাইট ও ম্যানেজমেন্ট সিস্টেম',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EduWeb — শিক্ষা প্রতিষ্ঠানের প্রিমিয়াম ওয়েব সল্যুশন',
    description:
      'স্কুল, কলেজ ও মাদ্রাসার জন্য আধুনিক ওয়েবসাইট ও ম্যানেজমেন্ট সিস্টেম',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'EduWeb',
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0F2D25' },
    { media: '(prefers-color-scheme: light)', color: '#F6F7F3' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // Allow pinch-zoom for accessibility (not locked)
  viewportFit: 'cover',
  interactiveWidget: 'resizes-content',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="bn"
      className={`${plusJakartaSans.variable} ${hindSiliguri.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        {/* Skip navigation link for keyboard users */}
        <a href="#main-content" className="skip-link">
          মূল বিষয়বস্তুতে যান
        </a>

        {/* Organization structured data (JSON-LD) */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'EduWeb',
              url: SITE_URL,
              description:
                'Bangladesh education institution website solutions',
              areaServed: 'BD',
              inLanguage: ['bn', 'en'],
            }),
          }}
        />

        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
