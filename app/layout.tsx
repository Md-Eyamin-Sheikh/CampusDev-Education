import type { Metadata, Viewport } from "next";
import "./globals.css";
import React from "react";

const inter = { variable: "font-sans" };
const plusJakartaSans = { variable: "font-heading" };
const hindSiliguri = { variable: "font-bengali" };

export const metadata: Metadata = {
  title: {
    default: "CampusDev — শিক্ষা প্রতিষ্ঠানের প্রিমিয়াম ওয়েব সল্যুশন",
    template: "%s | CampusDev",
  },
  description: "বাংলাদেশের শিক্ষা প্রতিষ্ঠানগুলোর জন্য প্রিমিয়াম ডাইনামিক ওয়েবসাইট ও ডিজিটাল ম্যানেজমেন্ট সল্যুশন। স্কুল, কলেজ, মাদ্রাসার জন্য আধুনিক ডিজিটাল অবকাঠামো।",
  keywords: [
    "education website bangladesh",
    "school website bangladesh",
    "madrasa website",
    "college portal bd",
    "campusdev",
    "শিক্ষা প্রতিষ্ঠান ওয়েবসাইট",
    "স্কুল ওয়েবসাইট",
    "মাদ্রাসা ওয়েবসাইট",
  ],
  authors: [{ name: "CampusDev", url: "https://campusdev.com.bd" }],
  creator: "CampusDev",
  publisher: "CampusDev",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: "https://campusdev.com.bd",
    siteName: "CampusDev",
    title: "CampusDev — শিক্ষা প্রতিষ্ঠানের প্রিমিয়াম ওয়েব সল্যুশন",
    description: "স্কুল, কলেজ ও মাদ্রাসার জন্য আধুনিক ওয়েবসাইট ও ম্যানেজমেন্ট সিস্টেম",
  },
  twitter: {
    card: "summary_large_image",
    title: "CampusDev — শিক্ষা প্রতিষ্ঠানের প্রিমিয়াম ওয়েব সল্যুশন",
    description: "স্কুল, কলেজ ও মাদ্রাসার জন্য আধুনিক ওয়েবসাইট ও ম্যানেজমেন্ট সিস্টেম",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "CampusDev",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#14342b" },
    { media: "(prefers-color-scheme: light)", color: "#f4f6f2" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${inter.variable} ${plusJakartaSans.variable} ${hindSiliguri.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Fonts CDN for Bricolage Grotesque & Mulish */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Hind+Siliguri:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

        {/* ── PWA / Web App ─────────────────────── */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="CampusDev" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="manifest" href="/manifest.json" />

        {/* ── Apple Touch Icons ─────────────────── */}
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="167x167" href="/favicon.ico" />

        {/* ── Microsoft Tiles ───────────────────── */}
        <meta name="msapplication-TileColor" content="#14342b" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* ── Theme color per OS ────────────────── */}
        <meta name="theme-color" content="#14342b" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#f4f6f2" media="(prefers-color-scheme: light)" />
      </head>
      <body className="min-h-screen bg-[var(--paper)] text-[var(--ink-soft)] antialiased font-sans">
        {children}
      </body>
    </html>
  );
}

